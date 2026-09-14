import type { Metadata } from "next";
import { AboutPage } from "@/components/about-page";

const description = "Looking for next big thing since I was born. I still haven't found it.";

export const metadata: Metadata = {
  title: "O mne",
  description,
  alternates: { canonical: "/about", languages: { sk: "/about", en: "/en/about" } },
};

export default function SlovakAboutPage() {
  return <AboutPage locale="sk" />;
}
