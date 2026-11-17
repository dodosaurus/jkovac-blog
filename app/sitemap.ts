import type { MetadataRoute } from "next";
import { getCaseStudies } from "@/lib/case-studies";
import { absoluteUrl, alternateUrls } from "@/lib/seo";
import { localizePath } from "@/lib/i18n";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/about", "/projects", ...getCaseStudies().map(study => `/case-studies/${study.slug}`)];
  return paths.flatMap(path => (["en", "sk"] as const).map(locale => ({ url: absoluteUrl(localizePath(locale, path)), alternates: { languages: alternateUrls(path) } })));
}
