export type Locale = "sk" | "en";

export const copy = {
  sk: {
    skip: "Preskočiť na obsah",
    articles: "Články",
    about: "O mne",
    read: "Čítať článok",
    minutes: "min čítania",
    aboutKicker: "O mne",
    aboutTitle: "Softvérový inžinier a farmaceut",
    aboutBody:
      "Looking for next big thing since I was born. I still haven't found it.",
    footer: "Písané a zverejňované na Východe Slovenska.",
    contents: "Obsah",
    back: "Späť na všetky články",
    articleTags: "Tagy článku",
    articleFilter: "Filter článkov",
    filterByTag: "Filtrovať podľa tagu",
    allArticles: "Všetky",
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
      "Looking for next big thing since I was born. I still haven't found it.",
    footer: "Written and built in Eastern Slovakia. English translations are done by AI; the Slovak versions are typed out by a human.",
    contents: "Contents",
    back: "Back to all articles",
    articleTags: "Article tags",
    articleFilter: "Article filter",
    filterByTag: "Filter by tag",
    allArticles: "All",
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
