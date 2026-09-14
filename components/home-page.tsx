import Link from "next/link";
import {
  articleExcerpt,
  articleTitle,
  formatArticleDate,
  getPublishedArticles,
} from "@/lib/articles";
import { copy, localizePath, type Locale } from "@/lib/i18n";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function HomePage({ locale }: { locale: Locale }) {
  const text = copy[locale];
  const articles = getPublishedArticles();

  return (
    <>
      <a className="skip-link" href="#main">{text.skip}</a>
      <SiteHeader locale={locale} alternatePath={locale === "sk" ? "/en" : "/"} currentPath="/" />
      <main id="main">
        <section className="shell articles-section" id="clanky" aria-label={text.articles}>
          <div className="article-list">
            {articles.map((article) => (
              <Link
                className="article-row"
                href={localizePath(locale, `/blog/${article.slug}`)}
                key={article.slug}
              >
                <time dateTime={article.published_at}>{formatArticleDate(article.published_at, locale)}</time>
                <div>
                  <h2>{articleTitle(article, locale)}</h2>
                  <p>{articleExcerpt(article, locale)}</p>
                  <span className="reading-time">
                    {article.readingMinutes[locale]} {text.minutes}
                  </span>
                </div>
                <span className="row-arrow" aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </section>

      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
