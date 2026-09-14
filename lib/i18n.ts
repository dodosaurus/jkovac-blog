export type Locale = "sk" | "en";

export const copy = {
  sk: {
    skip: "Preskočiť na obsah",
    articles: "Články",
    about: "O mne",
    read: "Čítať článok",
    minutes: "min čítania",
    aboutKicker: "O mne",
    aboutTitle: "Softvérový inžinier a farmaceut.",
    aboutBody:
      "Som PharmDr. Jozef Kováč. Zaujíma ma, ako prakticky prepájať softvér, umelú inteligenciu a odbornú prácu — bez zbytočného hluku a bez straty ľudského úsudku.",
    footer: "Písané a tvorené na Východe Slovenska.",
    contents: "Obsah",
    back: "Späť na všetky články",
    translationNote: "Pôvodný text bol napísaný v slovenčine.",
  },
  en: {
    skip: "Skip to content",
    articles: "Articles",
    about: "About",
    read: "Read article",
    minutes: "min read",
    aboutKicker: "About",
    aboutTitle: "Software engineer and pharmacist.",
    aboutBody:
      "I am PharmDr. Jozef Kováč. I am interested in practical ways to connect software, artificial intelligence and professional work — without noise and without giving up human judgement.",
    footer: "Written and built in Eastern Slovakia.",
    contents: "Contents",
    back: "Back to all articles",
    translationNote:
      "I wrote the original in Slovak. This English version was translated with the help of AI.",
  },
} as const;

export function localizePath(locale: Locale, path = "") {
  if (locale === "en") {
    return path === "/" ? "/en" : `/en${path}`;
  }

  return path;
}
