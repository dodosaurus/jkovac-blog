import { AboutPage } from "@/components/about-page";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata({ locale: "en", path: "/about", title: "About", description: "Jozef Kováč — Software Engineer, SDET & Founder of Kovac Software s.r.o." });
export default function Page() { return <AboutPage locale="en" />; }
