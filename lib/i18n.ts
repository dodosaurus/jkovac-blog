export type Locale = "en" | "sk";
export const copy = {
  en: { skip: "Skip to content", studies: "Case studies", about: "About", back: "All case studies", problem: "Problem", solution: "Solution", gallery: "In practice", contact: "Get in touch", next: "Next case study" },
  sk: { skip: "Preskočiť na obsah", studies: "Case studies", about: "O mne", back: "Všetky case studies", problem: "Problém", solution: "Riešenie", gallery: "V praxi", contact: "Napísať mi", next: "Ďalšia case study" },
} as const;
export function localizePath(locale: Locale, path = "/") {
  const suffix = path === "/" ? "" : path;
  return locale === "sk" ? `/sk${suffix}` : suffix || "/";
}
