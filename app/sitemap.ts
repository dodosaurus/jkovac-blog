import type { MetadataRoute } from "next";
import { getPublishedArticles } from "@/lib/articles";
import { absoluteUrl, alternateUrls, articlePath, SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const homeAlternates = { languages: alternateUrls("/") };
  const aboutAlternates = { languages: alternateUrls("/about") };
  const pages: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), alternates: homeAlternates },
    { url: absoluteUrl("/en"), alternates: homeAlternates },
    { url: absoluteUrl("/about"), alternates: aboutAlternates },
    { url: absoluteUrl("/en/about"), alternates: aboutAlternates },
  ];

  for (const article of getPublishedArticles()) {
    const path = articlePath(article);
    const alternates = { languages: alternateUrls(path) };
    pages.push(
      {
        url: absoluteUrl(path),
        lastModified: article.updated_at,
        alternates,
        ...(article.cover_image ? { images: [`${SITE_URL}${article.cover_image}`] } : {}),
      },
      {
        url: absoluteUrl(`/en${path}`),
        lastModified: article.updated_at,
        alternates,
        ...(article.cover_image ? { images: [`${SITE_URL}${article.cover_image}`] } : {}),
      },
    );
  }

  return pages;
}
