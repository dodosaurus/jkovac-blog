import Link from "next/link";
import { copy, localizePath, type Locale } from "@/lib/i18n";
export function SiteHeader({ locale, currentPath = "" }: { locale: Locale; currentPath?: string }) {
  const text = copy[locale];
  return <header className="shell site-header">
    <Link className="wordmark" href={localizePath(locale)} aria-label={locale === "en" ? "Home" : "Domov"}><span className="wordmark-mark" aria-hidden="true">JK</span></Link>
    <div className="header-right"><nav className="site-nav" aria-label={locale === "en" ? "Main navigation" : "Hlavná navigácia"}>
      <Link aria-current={currentPath === "/" ? "page" : undefined} href={`${localizePath(locale)}#work`}>{text.studies}</Link>
      <Link aria-current={currentPath === "/about" ? "page" : undefined} href={localizePath(locale, "/about")}>{text.about}</Link>
    </nav><nav className="locale-nav" aria-label={locale === "en" ? "Language" : "Jazyk"}>
        <Link href={localizePath(locale === "en" ? "sk" : "en", currentPath || "/")} hrefLang={locale === "en" ? "sk" : "en"}>{locale === "en" ? "SK" : "EN"}</Link>
      </nav></div>
  </header>;
}
