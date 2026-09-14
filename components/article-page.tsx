import Link from "next/link";
import {
  articleExcerpt,
  articleTitle,
  formatArticleDate,
  type Article,
} from "@/lib/articles";
import { copy, localizePath, type Locale } from "@/lib/i18n";
import { ArticleMarkdown } from "@/components/article-markdown";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function ArticlePage({ article, locale }: { article: Article; locale: Locale }) {
  const text = copy[locale];
  const articlePath = `/blog/${article.slug}`;
  const alternatePath = locale === "sk" ? `/en${articlePath}` : articlePath;

  return (
    <>
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
          </div>
        </header>

        <div className="article-shell article-layout">
          <aside className="toc" aria-labelledby="contents-title">
            <h2 id="contents-title">{text.contents}</h2>
            <ol>
              {article.headings[locale].map((heading) => (
                <li key={heading.id}>
                  <a href={`#${heading.id}`}>{heading.title}</a>
                </li>
              ))}
            </ol>
          </aside>
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

