import { Projects } from "@/components/projects";
import { SiteHeader } from "@/components/site-header";
import { copy, type Locale } from "@/lib/i18n";
import { projects } from "@/lib/projects";

export function ProjectsPage({ locale }: { locale: Locale }) {
  return <>
    <a className="skip-link" href="#main">{copy[locale].skip}</a>
    <SiteHeader locale={locale} currentPath="/projects" />
    <main id="main"><Projects projects={projects} locale={locale} /></main>
  </>;
}
