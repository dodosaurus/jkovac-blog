import type { MetadataRoute } from "next";
import { getPublishedArticles } from "@/lib/articles";

const ORIGIN = "https://jkovac.eu";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    { url: ORIGIN, changeFrequency: "weekly", priority: 1 },
    { url: `${ORIGIN}/en`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${ORIGIN}/about`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${ORIGIN}/en/about`, changeFrequency: "monthly", priority: 0.4 },
  ];

  for (const article of getPublishedArticles()) {
    pages.push(
      { url: `${ORIGIN}${article.canonical_path}`, lastModified: article.updated_at, priority: 0.8 },
      { url: `${ORIGIN}/en${article.canonical_path}`, lastModified: article.updated_at, priority: 0.7 },
    );
  }

  return pages;
}
