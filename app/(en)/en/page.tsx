import { HomePage } from "@/components/home-page";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  locale: "en",
  path: "/",
  title: "Jozef Kováč",
  description: "Personal articles on software development, artificial intelligence and pharmacy.",
  home: true,
});

export default function EnglishHomePage() {
  return <HomePage locale="en" />;
}
