import { AboutPage } from "@/components/about-page";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  locale: "en",
  path: "/about",
  title: "About",
  description: "Software engineer and pharmacist writing about software, artificial intelligence and pharmacy.",
});

export default function EnglishAboutPage() {
  return <AboutPage locale="en" />;
}
