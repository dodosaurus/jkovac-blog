import Link from "next/link";
import Markdown from "react-markdown";
import { copy, localizePath, type Locale } from "@/lib/i18n";
import { getCaseStudies, type CaseStudy } from "@/lib/case-studies";
import { SiteHeader } from "@/components/site-header";
import { absoluteUrl, jsonLd, PERSON_ID } from "@/lib/seo";

export function CasePage({ study, locale }: { study: CaseStudy; locale: Locale }) {
  const text = copy[locale];
  const studies = getCaseStudies();
  const next = studies[(studies.findIndex(item => item.slug === study.slug) + 1) % studies.length];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: study.title[locale],
            description: study.excerpt[locale],
            inLanguage: locale,
            url: absoluteUrl(localizePath(locale, `/case-studies/${study.slug}`)),
            author: { "@id": PERSON_ID },
          }),
        }}
      />
      <a className="skip-link" href="#main">{text.skip}</a>
      <SiteHeader locale={locale} currentPath={`/case-studies/${study.slug}`} />
      <main id="main" className="shell case-detail">
        <header className="case-heading">
          <Link className="text-link back-link" href={`${localizePath(locale)}#work`}>
            ← {text.back}
          </Link>
          <p className="eyebrow">{study.client} / {study.period}</p>
          <h1>{study.title[locale]}</h1>
          <div className="case-facts">
            <span>{study.stack.join(" · ")}</span>
          </div>
          {study.link && (
            <p className="case-project-link">
              <a className="text-link" href={study.link.url} target="_blank" rel="noopener noreferrer">
                {study.link.label} ↗
              </a>
            </p>
          )}
        </header>
        <section className="case-summary" aria-label={locale === "en" ? "Project overview" : "Prehľad projektu"}>
          {(["problem", "solution"] as const).map((key, index) => (
            <div key={key}>
              <h2><span>{String(index + 1).padStart(2, "0")}</span>{text[key]}</h2>
              <Markdown allowedElements={["p", "strong"]} unwrapDisallowed>{study[key][locale]}</Markdown>
            </div>
          ))}
        </section>
        {study.media.length > 0 && (
          <section className={`case-gallery${study.media.every(media => media.source) ? " tool-gallery" : ""}`} aria-label={text.gallery}>
            {study.media.map((media, index) => (
              <figure key={media.src}>
                {media.type === "video" ? (
                  <video controls preload="metadata" aria-label={media.alt[locale]} src={media.src} />
                ) : (
                  <a
                    href={media.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${media.alt[locale]} — ${locale === "en" ? "open full size" : "otvoriť v plnej veľkosti"}`}
                  >
                    <img
                      src={media.src}
                      alt={media.alt[locale]}
                      width={media.width}
                      height={media.height}
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                  </a>
                )}
                <figcaption>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span className="media-caption-copy">
                    {media.caption[locale]}
                    {media.source && (
                      <a className="media-source" href={media.source.url} target="_blank" rel="noopener noreferrer">
                        {locale === "en" ? "Source" : "Zdroj"}: {media.source.label} ↗
                      </a>
                    )}
                  </span>
                  {media.type !== "video" && <span aria-hidden="true">↗</span>}
                </figcaption>
              </figure>
            ))}
          </section>
        )}
        <nav className="next-case" aria-label={text.next}>
          <span className="eyebrow">{text.next}</span>
          <Link href={localizePath(locale, `/case-studies/${next.slug}`)}>
            {next.title[locale]} <span aria-hidden="true">→</span>
          </Link>
        </nav>
      </main>
    </>
  );
}
