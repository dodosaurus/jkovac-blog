import Image from "next/image";
import { copy, type Locale } from "@/lib/i18n";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function AboutPage({ locale }: { locale: Locale }) {
  const text = copy[locale];
  const alternatePath = locale === "sk" ? "/en/about" : "/about";

  return (
    <>
      <a className="skip-link" href="#about">{text.skip}</a>
      <SiteHeader locale={locale} alternatePath={alternatePath} currentPath="/about" />
      <main id="about">
        <section className="shell about-section" aria-labelledby="about-title">
          <p className="section-kicker">{text.aboutKicker}</p>
          <div className="about-grid">
            <div className="about-copy">
              <h1 id="about-title">{text.aboutTitle}</h1>
              <p>{text.aboutBody}</p>
            </div>
            <div className="portrait-frame">
              <Image
                alt="Portrait of Jozef Kováč"
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
