import Link from "next/link";
import {
  articleExcerpt,
  articleTitle,
  formatArticleDate,
} from "@/lib/article-display";
import type { Article } from "@/lib/articles";
import { copy, localizePath, type Locale } from "@/lib/i18n";
import { ArticleMarkdown } from "@/components/article-markdown";
import { ArticleToc } from "@/components/article-toc";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { absoluteUrl, jsonLd, PERSON_ID, SITE_URL, WEBSITE_ID } from "@/lib/seo";

export function ArticlePage({ article, locale }: { article: Article; locale: Locale }) {
  const text = copy[locale];
  const articlePath = `/blog/${article.slug}`;
  const alternatePath = locale === "sk" ? `/en${articlePath}` : articlePath;
  const url = absoluteUrl(locale === "sk" ? articlePath : `/en${articlePath}`);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "@id": `${url}#article`,
            headline: articleTitle(article, locale),
            description: articleExcerpt(article, locale),
            url,
            mainEntityOfPage: { "@type": "WebPage", "@id": url },
            datePublished: article.published_at,
            dateModified: article.updated_at,
            inLanguage: locale,
            articleSection: locale === "sk" ? article.category_sk : article.category_en,
            keywords: article.tags,
            isPartOf: { "@id": WEBSITE_ID },
            author: {
              "@type": "Person",
              "@id": PERSON_ID,
              name: article.author,
              url: absoluteUrl("/about"),
            },
            publisher: {
              "@type": "Person",
              "@id": PERSON_ID,
              name: article.author,
              url: absoluteUrl("/about"),
            },
            ...(article.cover_image ? { image: `${SITE_URL}${article.cover_image}` } : {}),
          }),
        }}
      />
      <a className="skip-link" href="#article">{text.skip}</a>
      <SiteHeader locale={locale} alternatePath={alternatePath} />
      <main id="article">
        <header className="article-shell article-header">
          <div>
            <p className="article-meta">
              {formatArticleDate(article.published_at, locale)}<br />
              {article.readingMinutes[locale]} {text.minutes}
            </p>
          </div>
          <div className="article-header-copy">
            <p className="eyebrow">{locale === "sk" ? article.category_sk : article.category_en}</p>
            <h1>{articleTitle(article, locale)}</h1>
            <p className="article-dek">{articleExcerpt(article, locale)}</p>
            <div className="article-tags article-header-tags" aria-label={text.articleTags}>
              {article.tags.map((tag) => (
                <Link
                  className="tag"
                  href={`${localizePath(locale, "/")}?tag=${encodeURIComponent(tag)}#clanky`}
                  key={tag}
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        </header>

        <div className="article-shell article-layout">
          <ArticleToc headings={article.headings[locale]} title={text.contents} />
          <div>
            <p className="article-note">{text.translationNote}</p>
            <ArticleMarkdown body={article.body[locale]} />
            <footer className="article-footer">
              <Link href={`${localizePath(locale, "/")}#clanky`}>← {text.back}</Link>
            </footer>
          </div>
        </div>
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
