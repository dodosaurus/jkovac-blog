import { copy, type Locale } from "@/lib/i18n";

export function SiteFooter({ locale }: { locale: Locale }) {
  return (
    <footer className="shell site-footer">
      <span>{copy[locale].footer}</span>
    </footer>
  );
}
