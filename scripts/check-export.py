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
projects=json.loads((ROOT/'content/projects.json').read_text())
assert len({project['id'] for project in projects})==len(projects),'Duplicate project IDs'
paths=['/','/about/','/projects/']+[f'/case-studies/{slug}/' for slug in slugs]
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
            assert html.count('<h2>')==2,(url,'Expected only Problem / Solution headings')
            assert html.count('<strong>')>=4,(url,'Expected highlighted keywords in the summaries')
            assert '**' not in ' '.join(page.text),(url,'Unrendered Markdown emphasis')
            assert not any(label in page.text for label in ['Impact', 'Prínos']),(url,'Unexpected Impact section')
        if path=='/':
            assert 'portfolio-intro' not in html and 'class="hero"' not in html,url
            assert 'tag-filter' not in html and 'article-tags' not in html and '?tag=' not in html,url
            assert html.count('class="article-row case-row"')==5,url
            case_images=[image for image in page.images if image['src'].startswith('/case-studies/')]
            assert len(case_images)==5,(url,'Expected one thumbnail per case study')
            assert len(page.images)==5 and 'id="projects"' not in html,(url,'Projects belong on their own page')
            for image in case_images:
                assert '/thumbnails/' in image['src'],(url,'Expected optimized miniature')
                assert image.get('width')=='720' and image.get('height')=='450',url
            visible=' '.join(page.text)
            for client in ['Dentons Europe','HOTOVO','Protecht','METAX SK','Compleo']:
                assert client in visible,(url,'Missing final client',client)
        if path=='/projects/':
            project_images=page.images
            assert len(project_images)==len(projects),(url,'Expected one screenshot per personal project')
            assert '<h1 id="projects-heading">Projects</h1>' in html,(url,'Expected a plain Projects title')
            assert 'Side projects, experiments and websites I built.' not in html,url
            assert 'Vlastné projekty, experimenty a weby, ktoré som vytvoril.' not in html,url
            assert html.count('class="project-card"')==len(projects),url
            assert f'{prefix}/projects/' in page.links,(url,'Missing Projects navigation')
            assert 'aria-haspopup="dialog"' in html and '<dialog' in html,url
            for project in projects:
                assert project['title'] in ' '.join(page.text),(url,'Missing project',project['id'])
                assert project['description'][locale] in ' '.join(page.text),url
                assert project['image']['src'] in page.links,(url,'Missing full-size fallback')
                assert not (OUT/'projects'/project['id']/'index.html').exists(),(url,'Unexpected project detail route')
                for technology in project['technologies']:
                    assert technology in ' '.join(page.text),url
            for image in project_images:
                assert '/thumbnails/' in image['src'],(url,'Expected optimized project screenshot')
                assert image.get('width')=='960' and image.get('height')=='600',url
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
for path in ['/en/','/en/about/','/en/projects/']:
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
assert len(locations)==16 and all('/blog/' not in url for url in locations)
assert 'https://www.jkovac.eu/projects/' in locations and 'https://www.jkovac.eu/sk/projects/' in locations
assert not (OUT/'cv').exists() and not (ROOT/'public/cv').exists()
assert not any(file.name.lower()=='jozef_kovac_cv.pdf' for file in OUT.rglob('*.pdf'))
print(f'PASS: {count} canonical pages, 3 English aliases, {len(projects)} bilingual personal projects on their own page, plain Projects title, full-size image fallbacks, local links/media/fragments, bilingual metadata, sitemap, two-part case studies with highlighted keywords, thumbnail list without tags/filters, no CV/diagrams/landing hero, and archive isolation.')
