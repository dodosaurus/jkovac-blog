import Image from "next/image";
import { copy, type Locale } from "@/lib/i18n";
import { SiteHeader } from "@/components/site-header";
export function AboutPage({ locale }: { locale: Locale }) {
  const text = copy[locale];
  return <><a className="skip-link" href="#main">{text.skip}</a><SiteHeader locale={locale} currentPath="/about" />
    <main id="main"><section className="shell about-section"><p className="section-kicker">{text.about}</p><div className="about-grid"><div className="about-copy">
      <h1>{locale === "en" ? "Engineer. Tester. Builder." : "Vývojár. Tester. Tvorca."}</h1>
      <p>{locale === "en" ? "I’m Jozef, a software engineer based in Košice, Slovakia. Since 2018, I’ve worked across test automation, APIs and application development. I enjoy finding the practical problem behind a request and building something useful to solve it." : "Som Jozef, softvérový inžinier z Košíc. Od roku 2018 pracujem s automatizáciou testov, API a vývojom aplikácií. Baví ma nájsť praktický problém za požiadavkou a vytvoriť niečo užitočné na jeho vyriešenie."}</p>
      <p className="about-followup">{locale === "en" ? "Today I combine production development and QA for legal AI, and run Kovac Software s.r.o., founded in February 2026." : "Dnes spájam produkčný vývoj a QA právnej AI a vediem Kovac Software s.r.o., založenú vo februári 2026."}</p>
      <div className="about-links"><a className="about-social-link" href="https://www.linkedin.com/in/kovacjozef/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a className="about-social-link" href="https://github.com/dodosaurus" target="_blank" rel="noopener noreferrer">GitHub ↗</a></div>
    </div><div className="portrait-frame"><Image alt="Jozef Kováč" fill priority sizes="(max-width:780px) 128px, 160px" src="/jozef-kovac.jpg" /></div></div></section>
      <div className="shell contact-section"><a className="text-link" href="mailto:kovac.jozef25@gmail.com">kovac.jozef25@gmail.com ↗</a></div>
    </main></>;
}
