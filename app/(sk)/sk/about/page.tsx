import { AboutPage } from "@/components/about-page";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata({ locale: "sk", path: "/about", title: "O mne", description: "Jozef Kováč — Software Engineer, SDET & Founder of Kovac Software s.r.o." });
export default function Page() { return <AboutPage locale="sk" />; }
