import { HomePage } from "@/components/home-page";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata({ locale: "en", path: "/", title: "Jozef Kováč — Software Engineer", description: "Selected work in test automation, developer tools, legal AI and client applications.", home: true });
export default function Page() { return <HomePage locale="en" />; }
