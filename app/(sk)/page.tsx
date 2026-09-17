import { HomePage } from "@/components/home-page";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  locale: "sk",
  path: "/",
  title: "Softvér, AI a farmácia",
  description: "Osobné články o softvérovom vývoji, umelej inteligencii a farmácii.",
  home: true,
});

export default function SlovakHomePage() {
  return <HomePage locale="sk" />;
}
