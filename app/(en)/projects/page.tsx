import { ProjectsPage } from "@/components/projects-page";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ locale: "en", path: "/projects", title: "Projects", description: "Personal projects by Jozef Kováč, with screenshots, technologies and development years." });
export default function Page() { return <ProjectsPage locale="en" />; }
