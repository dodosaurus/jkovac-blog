import type { Metadata } from "next";
import type { Article } from "@/lib/articles";
import type { Locale } from "@/lib/i18n";

export const SITE_URL = "https://jkovac.eu";
export const SITE_NAME = "jkovac.eu";
export const SOCIAL_IMAGE = `${SITE_URL}/social-card.png`;

export function absoluteUrl(path = "/") {
  const normalized = `/${path.replace(/^\/+|\/+$/g, "")}`;
  return `${SITE_URL}${normalized === "/" ? "/" : `${normalized}/`}`;
}

export function articlePath(article: Article) {
  return `/blog/${article.slug}`;
}

export function alternateUrls(path: string) {
  return {
    sk: absoluteUrl(path),
    en: absoluteUrl(path === "/" ? "/en" : `/en${path}`),
  };
}

type PageSeo = {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  home?: boolean;
  article?: Article;
};

export function pageMetadata({ locale, path, title, description, home, article }: PageSeo): Metadata {
  const url = absoluteUrl(locale === "en" ? (path === "/" ? "/en" : `/en${path}`) : path);
  const image = article?.cover_image ? `${SITE_URL}${article.cover_image}` : SOCIAL_IMAGE;
  const images = [{ url: image, alt: article ? title : SITE_NAME }];
  const base = {
    title,
    description,
    url,
    siteName: SITE_NAME,
    locale: locale === "sk" ? "sk_SK" : "en_US",
    images,
  };

  return {
    title: home ? { absolute: title } : title,
    description,
    alternates: { canonical: url, languages: alternateUrls(path) },
    openGraph: article
      ? {
          ...base,
          type: "article",
          publishedTime: `${article.published_at}T00:00:00Z`,
          modifiedTime: `${article.updated_at}T00:00:00Z`,
          tags: article.tags,
        }
      : { ...base, type: "website" },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export function jsonLd(value: Record<string, unknown>) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
