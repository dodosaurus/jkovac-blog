import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";

export const metadata: Metadata = {
  title: "Jozef Kováč",
  description: "Poznámky o softvéri, umelej inteligencii a farmácii.",
  alternates: { canonical: "/", languages: { sk: "/", en: "/en" } },
};

export default function SlovakHomePage() {
  return <HomePage locale="sk" />;
}

