import Image from "next/image";
import { copy, type Locale } from "@/lib/i18n";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
const experience = [
  { date: "05/2026 →", title: "Software Engineer", company: "HOTOVO → Dentons Europe", en: "Production development and QA ownership for a legal AI platform.", sk: "Produkčný vývoj a zodpovednosť za QA právnej AI platformy." },
  { date: "02/2026 →", title: "Founder & Software Engineer", company: "Kovac Software s.r.o.", en: "Founded my company to build web and mobile solutions for clients.", sk: "Založil som vlastnú spoločnosť pre vývoj webových a mobilných riešení pre klientov." },
  { date: "11/2022 – 05/2026", title: "Test Automation Engineer", company: "HOTOVO → Protecht", en: "API automation with Robot Framework, internal developer tools, test-data generation and AI-assisted testing workflows.", sk: "API automatizácia cez Robot Framework, interné nástroje, generovanie testovacích dát a testovanie s pomocou AI." },
  { date: "08/2018 – 11/2022", title: "Test Automation Engineer", company: "FPT Slovakia → Compleo", en: "E-mobility testing across APIs, UI, messaging and integrations. Co-led the UFT-to-Cypress migration.", sk: "Testovanie e-mobility platformy naprieč API, UI, messagingom a integráciami. Spoluvedenie migrácie z UFT na Cypress." },
];
export function AboutPage({ locale }: { locale: Locale }) {
  const text = copy[locale];
  return <><a className="skip-link" href="#main">{text.skip}</a><SiteHeader locale={locale} currentPath="/about" />
    <main id="main"><section className="shell about-section"><p className="section-kicker">{text.about}</p><div className="about-grid"><div className="about-copy">
      <h1>{locale === "en" ? "Engineer. Tester. Builder." : "Vývojár. Tester. Tvorca."}</h1>
      <p>{locale === "en" ? "I’m Jozef, a software engineer based in Košice, Slovakia. Since 2018, I’ve worked across test automation, APIs and application development. I enjoy finding the practical problem behind a request and building something useful to solve it." : "Som Jozef, softvérový inžinier z Košíc. Od roku 2018 pracujem s automatizáciou testov, API a vývojom aplikácií. Baví ma nájsť praktický problém za požiadavkou a vytvoriť niečo užitočné na jeho vyriešenie."}</p>
      <p className="about-followup">{locale === "en" ? "Today I combine production development and QA for legal AI, and run Kovac Software s.r.o., founded in February 2026. I’m interested in SDET and Forward Deployed Engineer roles where I can own problems from understanding the workflow through to delivery and validation." : "Dnes spájam produkčný vývoj a QA právnej AI a vediem Kovac Software s.r.o., založenú vo februári 2026. Zaujímajú ma SDET a Forward Deployed Engineer roly, kde môžem riešiť problém od pochopenia procesu až po dodanie a overenie."}</p>
      <div className="about-links"><a className="about-social-link" href="https://www.linkedin.com/in/kovacjozef/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a className="about-social-link" href="https://github.com/dodosaurus" target="_blank" rel="noopener noreferrer">GitHub ↗</a></div>
    </div><div className="portrait-frame"><Image alt="Jozef Kováč" fill priority sizes="(max-width:780px) 128px, 160px" src="/jozef-kovac.jpg" /></div></div></section>
      <section className="shell experience-section"><p className="section-kicker">{locale === "en" ? "Experience" : "Skúsenosti"}</p><div>{experience.map(item => <article className="experience-row" key={item.company}><span>{item.date}</span><div><h2>{item.title}</h2><p className="experience-company">{item.company}</p><p>{item[locale]}</p></div></article>)}</div></section>
      <section className="shell contact-section"><h2>{locale === "en" ? "Let’s build something useful." : "Vytvorme niečo užitočné."}</h2><a className="text-link" href="mailto:kovac.jozef25@gmail.com">kovac.jozef25@gmail.com ↗</a></section>
    </main><SiteFooter locale={locale} /></>;
}
