import Link from "next/link";
import { copy, localizePath, type Locale } from "@/lib/i18n";

export function SiteHeader({
  locale,
  alternatePath,
  currentPath,
}: {
  locale: Locale;
  alternatePath: string;
  currentPath?: "/" | "/about";
}) {
  const text = copy[locale];

  return (
    <header className="shell site-header">
      <Link className="wordmark" href={localizePath(locale, "/")} aria-label={locale === "sk" ? "Domov" : "Home"}>
        <span className="wordmark-mark" aria-hidden="true">JK</span>
      </Link>
      <div className="header-right">
        <nav className="site-nav" aria-label={locale === "sk" ? "Hlavná navigácia" : "Main navigation"}>
          <Link aria-current={currentPath === "/" ? "page" : undefined} href={`${localizePath(locale, "/")}#clanky`}>
            {text.articles}
          </Link>
          <Link aria-current={currentPath === "/about" ? "page" : undefined} href={localizePath(locale, "/about")}>
            {text.about}
          </Link>
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
