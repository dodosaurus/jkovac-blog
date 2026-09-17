import { AboutPage } from "@/components/about-page";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  locale: "sk",
  path: "/about",
  title: "O mne",
  description: "Softvérový inžinier a farmaceut. Píše o softvéri, umelej inteligencii a farmácii.",
});

export default function SlovakAboutPage() {
  return <AboutPage locale="sk" />;
}
