import { ProjectsPage } from "@/components/projects-page";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ locale: "sk", path: "/projects", title: "Projects", description: "Vlastné projekty Jozefa Kováča so screenshotmi, technológiami a rokmi vývoja." });
export default function Page() { return <ProjectsPage locale="sk" />; }
