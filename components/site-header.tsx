import Link from "next/link";
import { copy, localizePath, type Locale } from "@/lib/i18n";

export function SiteHeader({ locale, alternatePath }: { locale: Locale; alternatePath: string }) {
  const text = copy[locale];

  return (
    <header className="shell site-header">
      <Link className="wordmark" href={localizePath(locale, "/")} aria-label="Jozef Kováč — domov">
        <span className="wordmark-mark" aria-hidden="true">JK</span>
        <span className="wordmark-name">Jozef Kováč</span>
      </Link>
      <div className="header-right">
        <nav className="site-nav" aria-label={locale === "sk" ? "Hlavná navigácia" : "Main navigation"}>
          <Link href={`${localizePath(locale, "/")}#clanky`}>{text.articles}</Link>
          <Link href={`${localizePath(locale, "/")}#o-mne`}>{text.about}</Link>
        </nav>
        <nav className="locale-nav" aria-label={locale === "sk" ? "Jazyk" : "Language"}>
          <Link href={locale === "sk" ? alternatePath : alternatePath.replace(/^\/en/, "") || "/"}>
            {locale === "sk" ? "EN" : "SK"}
          </Link>
        </nav>
      </div>
    </header>
  );
}

