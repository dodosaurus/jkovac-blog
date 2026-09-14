import type { Metadata } from "next";
import "./globals.css";
import { DocumentLocale } from "@/components/document-locale";

export const metadata: Metadata = {
  metadataBase: new URL("https://jkovac.eu"),
  title: {
    default: "Jozef Kováč",
    template: "%s — Jozef Kováč",
  },
  description: "Poznámky o softvéri, umelej inteligencii a farmácii.",
  authors: [{ name: "PharmDr. Jozef Kováč", url: "https://jkovac.eu" }],
  alternates: {
    canonical: "/",
    languages: { sk: "/", en: "/en" },
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sk" suppressHydrationWarning>
      <body>
        <DocumentLocale />
        {children}
      </body>
    </html>
  );
}

