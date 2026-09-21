import { Suspense } from "react";
import { articleSummary, getPublishedArticles } from "@/lib/articles";
import { copy, type Locale } from "@/lib/i18n";
import { ArticleIndex, ArticleIndexFallback } from "@/components/article-index";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { jsonLd, SITE_NAME, SITE_URL } from "@/lib/seo";

export function HomePage({ locale }: { locale: Locale }) {
  const text = copy[locale];
  const articles = getPublishedArticles().map(articleSummary);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": `${SITE_URL}/#website`,
            name: SITE_NAME,
            url: `${SITE_URL}/`,
            inLanguage: ["sk", "en"],
          }),
        }}
      />
      <a className="skip-link" href="#main">{text.skip}</a>
      <SiteHeader locale={locale} alternatePath={locale === "sk" ? "/en" : "/"} currentPath="/" />
      <main id="main">
        <section className="shell articles-section" id="clanky" aria-label={text.articles}>
          <Suspense fallback={<ArticleIndexFallback articles={articles} locale={locale} />}>
            <ArticleIndex articles={articles} locale={locale} />
          </Suspense>
        </section>

      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
