import type { Metadata } from "next";
import { AboutPage } from "@/components/about-page";

const description = "Looking for next big thing since I was born. I still haven't found it.";

export const metadata: Metadata = {
  title: "About",
  description,
  alternates: { canonical: "/en/about", languages: { sk: "/about", en: "/en/about" } },
};

export default function EnglishAboutPage() {
  return <AboutPage locale="en" />;
}
