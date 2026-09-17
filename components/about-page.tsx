import Image from "next/image";
import { copy, type Locale } from "@/lib/i18n";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { absoluteUrl, jsonLd, SITE_URL } from "@/lib/seo";

export function AboutPage({ locale }: { locale: Locale }) {
  const text = copy[locale];
  const alternatePath = locale === "sk" ? "/en/about" : "/about";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            url: absoluteUrl(locale === "sk" ? "/about" : "/en/about"),
            inLanguage: locale,
            mainEntity: {
              "@type": "Person",
              "@id": `${SITE_URL}/about/#person`,
              name: "Jozef Kováč",
              image: `${SITE_URL}/jozef-kovac.jpg`,
              sameAs: ["https://github.com/dodosaurus"],
              jobTitle: locale === "sk" ? ["Softvérový inžinier", "Farmaceut"] : ["Software engineer", "Pharmacist"],
            },
          }),
        }}
      />
      <a className="skip-link" href="#about">{text.skip}</a>
      <SiteHeader locale={locale} alternatePath={alternatePath} currentPath="/about" />
      <main id="about">
        <section className="shell about-section" aria-labelledby="about-title">
          <p className="section-kicker">{text.aboutKicker}</p>
          <div className="about-grid">
            <div className="about-copy">
              <h1 id="about-title">{text.aboutTitle}</h1>
              <p>{text.aboutBody}</p>
              <a
                className="about-social-link"
                href="https://github.com/dodosaurus"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={locale === "sk" ? "Môj profil na GitHube" : "My GitHub profile"}
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.2c-3.2.7-3.88-1.36-3.88-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.74 2.68 1.24 3.33.95.1-.74.4-1.24.73-1.53-2.55-.29-5.23-1.27-5.23-5.68 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.16 1.17a10.99 10.99 0 0 1 5.75 0c2.2-1.48 3.16-1.17 3.16-1.17.62 1.58.23 2.75.11 3.04.73.8 1.18 1.82 1.18 3.07 0 4.42-2.69 5.38-5.25 5.67.41.36.77 1.06.77 2.14v3.18c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                </svg>
                <span>GitHub</span>
                <span className="about-social-arrow" aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="portrait-frame">
              <Image
                alt={locale === "sk" ? "Portrét autora" : "Portrait of the author"}
                fill
                priority
                sizes="(max-width: 780px) 128px, 160px"
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
