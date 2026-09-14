import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";

export const metadata: Metadata = {
  title: "Jozef Kováč",
  description: "Notes on software, artificial intelligence and pharmacy.",
  alternates: { canonical: "/en", languages: { sk: "/", en: "/en" } },
};

export default function EnglishHomePage() {
  return <HomePage locale="en" />;
}

