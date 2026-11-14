"""Check static portfolio output, navigation, localisation and archive isolation."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote
import json
import re
import xml.etree.ElementTree as ET

ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'out'
class Page(HTMLParser):
    def __init__(self, text):
        super().__init__(); self.links=[];self.ids=set();self.text=[];self.ignored=0;self.lang=None;self.canonical=None;self.alternates={};self.h1s=0;self.images=[];self.scripts=[];self.jsonld=False;self.feed(text)
    def handle_starttag(self,tag,attrs):
        a=dict(attrs)
        if tag=='html':self.lang=a.get('lang')
        if tag in ['script','style']:self.ignored+=1
        if tag=='script' and a.get('type')=='application/ld+json':self.jsonld=True
        if tag=='h1':self.h1s+=1
        if a.get('id'):self.ids.add(a['id'])
        if tag=='a' and a.get('href'):self.links.append(a['href'])
        if tag=='img':self.images.append(a)
        if tag=='link' and a.get('rel')=='canonical':self.canonical=a.get('href')
        if tag=='link' and a.get('rel')=='alternate':self.alternates[a.get('hreflang')]=a.get('href')
    def handle_endtag(self,tag):
        if tag in ['script','style']:self.ignored-=1;self.jsonld=False
    def handle_data(self,text):
        if not self.ignored:self.text.append(text)
        if self.jsonld:self.scripts.append(text)

def target(url):
    path=unquote(urlsplit(url).path).lstrip('/')
    f=OUT/path
    return f/'index.html' if not Path(path).suffix else f

assert OUT.is_dir(), 'Run npm run build first'
slugs=['dentons-legal-ai','entry-generator','kiwigen','metax','cypress-migration']
paths=['/','/about/']+[f'/case-studies/{slug}/' for slug in slugs]
count=0
for locale,prefix in [('en',''),('sk','/sk')]:
    for path in paths:
        url=(prefix+path).replace('//','/')
        p=target(url); assert p.is_file(),f'Missing {url}'
        html=p.read_text()
        page=Page(html)
        assert '/cv/' not in html and 'Jozef_Kovac_CV.pdf' not in html,url
        assert 'class="workflow"' not in html and 'case-narrative' not in html,url
        if '/case-studies/' in url:
            assert html.count('<h2>')==3,(url,'Expected only Problem / Impact / Solution headings')
        if path=='/':
            assert 'portfolio-intro' not in html and 'class="hero"' not in html,url
            assert 'tag-filter' not in html and 'article-tags' not in html and '?tag=' not in html,url
            assert html.count('class="article-row case-row"')==5,url
            assert len(page.images)==5,(url,'Expected one thumbnail per case study')
            for image in page.images:
                assert '/thumbnails/' in image['src'],(url,'Expected optimized miniature')
                assert image.get('width')=='720' and image.get('height')=='450',url
            visible=' '.join(page.text)
            for client in ['Dentons Europe','Protecht','METAX SK','Compleo']:
                assert client in visible,(url,'Missing final client',client)
            assert 'HOTOVO' not in visible,url
        assert page.lang==locale,(url,page.lang)
        assert page.h1s==1,(url,'H1 count',page.h1s)
        assert page.canonical=='https://www.jkovac.eu'+url,(url,page.canonical)
        assert set(page.alternates)=={'en','sk','x-default'},url
        assert page.alternates['x-default']==page.alternates['en'],url
        assert not re.search(r'pharmac|farmace|farmáci|/blog/', ' '.join(page.text),re.I),url
        for script in page.scripts:json.loads(script)
        for link in page.links:
            parsed=urlsplit(link)
            if parsed.scheme or parsed.netloc:continue
            f=target(link)
            assert f.is_file(),(url,'Broken link',link)
            if parsed.fragment and f.suffix=='.html':
                assert parsed.fragment in Page(f.read_text()).ids,(url,'Missing fragment',link)
        for image in page.images:
            assert image.get('alt'),(url,'Missing image alt')
            assert target(image['src']).is_file(),(url,'Missing image',image['src'])
        count+=1
for path in ['/en/','/en/about/']:
    alias=Page(target(path).read_text())
    assert alias.canonical=='https://www.jkovac.eu'+path.replace('/en/','/'),path
assert not (OUT/'blog').exists() and not (OUT/'en/blog').exists()
assert not (OUT/'blog-assets').exists()
assert not (OUT/'content').exists() and not list(OUT.rglob('*.md'))
for source in (ROOT/'content/articles').glob('*.md'):
    if source.name!='README.md':assert len(source.read_bytes())>0
sitemap=ET.parse(OUT/'sitemap.xml')
ns={'s':'http://www.sitemaps.org/schemas/sitemap/0.9'}
locations=[node.text for node in sitemap.findall('.//s:loc',ns)]
assert len(locations)==14 and all('/blog/' not in url for url in locations)
assert not (OUT/'cv').exists() and not (ROOT/'public/cv').exists()
assert not any(file.name.lower()=='jozef_kovac_cv.pdf' for file in OUT.rglob('*.pdf'))
print(f'PASS: {count} canonical pages, 2 legacy aliases, local links/media/fragments, bilingual metadata, sitemap, three-part case studies, thumbnail list without tags/filters, no CV/diagrams/landing hero, and archive isolation.')
