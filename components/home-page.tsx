import Image from "next/image";
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
      <SiteHeader locale={locale} alternatePath={locale === "sk" ? "/en" : "/"} />
      <main id="main">
        <section className="shell hero" aria-labelledby="hero-title">
          <div>
            <p className="hero-kicker">{text.heroKicker}</p>
            <h1 id="hero-title">{text.heroTitle}</h1>
          </div>
        </section>

        <section className="shell home-section" id="clanky" aria-labelledby="articles-title">
          <p className="section-kicker" id="articles-title">{text.latest}</p>
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

        <section className="shell home-section" id="o-mne" aria-labelledby="about-title">
          <p className="section-kicker">{text.aboutKicker}</p>
          <div className="about-grid">
            <div className="about-copy">
              <h2 id="about-title">{text.aboutTitle}</h2>
              <p>{text.aboutBody}</p>
            </div>
            <div className="portrait-frame">
              <Image
                alt={locale === "sk" ? "Portrét Jozefa Kováča" : "Portrait of Jozef Kováč"}
                fill
                priority
                sizes="(max-width: 780px) 100vw, 30vw"
                src="/jozef-kovac.jpg"
              />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}

