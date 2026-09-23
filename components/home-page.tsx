import { Suspense } from "react";
import { articleSummary, getPublishedArticles } from "@/lib/articles";
import { copy, type Locale } from "@/lib/i18n";
import { ArticleIndex, ArticleIndexFallback } from "@/components/article-index";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { absoluteUrl, jsonLd, PERSON_ID, SITE_NAME, SITE_URL, WEBSITE_ID } from "@/lib/seo";

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
            "@graph": [
              {
                "@type": "WebSite",
                "@id": WEBSITE_ID,
                name: SITE_NAME,
                url: absoluteUrl("/"),
                inLanguage: ["sk", "en"],
                publisher: { "@id": PERSON_ID },
              },
              {
                "@type": "Person",
                "@id": PERSON_ID,
                name: "Jozef Kováč",
                url: absoluteUrl("/about"),
                image: `${SITE_URL}/jozef-kovac.jpg`,
                sameAs: ["https://github.com/dodosaurus"],
              },
            ],
          }),
        }}
      />
      <a className="skip-link" href="#main">{text.skip}</a>
      <SiteHeader locale={locale} alternatePath={locale === "sk" ? "/en" : "/"} currentPath="/" />
      <main id="main">
        <h1 className="sr-only">
          {locale === "sk"
            ? "Jozef Kováč — články o softvéri, umelej inteligencii a farmácii"
            : "Jozef Kováč — articles about software, artificial intelligence and pharmacy"}
        </h1>
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
