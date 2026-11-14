import { caseSummary, getCaseStudies } from "@/lib/case-studies";
import { copy, type Locale } from "@/lib/i18n";
import { CaseIndex } from "@/components/case-index";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { absoluteUrl, jsonLd, PERSON_ID, SITE_URL } from "@/lib/seo";
export function HomePage({ locale }: { locale: Locale }) {
  const text = copy[locale], studies = getCaseStudies().map(caseSummary);
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd({ "@context": "https://schema.org", "@type": "Person", "@id": PERSON_ID, name: "Jozef Kováč", url: absoluteUrl("/about"), image: `${SITE_URL}/jozef-kovac.jpg`, jobTitle: "Software Engineer / SDET", sameAs: ["https://github.com/dodosaurus", "https://www.linkedin.com/in/kovacjozef/"], worksFor: { "@type": "Organization", name: "Kovac Software s.r.o." } }) }} />
    <a className="skip-link" href="#main">{text.skip}</a><SiteHeader locale={locale} currentPath="/" />
    <main id="main">
      <h1 className="sr-only">{locale === "en" ? "Jozef Kováč — software engineering and SDET case studies" : "Jozef Kováč — case studies zo softvérového vývoja a testovania"}</h1>
      <section className="shell articles-section" id="work" aria-label={text.studies}>
        <CaseIndex studies={studies} locale={locale} />
      </section></main><SiteFooter locale={locale} />
  </>;
}
