import { HomePage } from "@/components/home-page";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata({ locale: "sk", path: "/", title: "Jozef Kováč — Software Engineer / SDET", description: "Vybrané projekty: automatizácia testov, vývojárske nástroje, právna AI a klientske aplikácie.", home: true });
export default function Page() { return <HomePage locale="sk" />; }
