import type { Metadata } from "next";
import type { Article } from "@/lib/articles";
import type { Locale } from "@/lib/i18n";

export const SITE_URL = "https://www.jkovac.eu";
export const SITE_NAME = "jkovac.eu";
export const SOCIAL_IMAGE = `${SITE_URL}/social-card.png`;
export const PERSON_ID = `${SITE_URL}/about/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

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
    "x-default": absoluteUrl(path),
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
  const imageAlt = article?.cover_image
    ? (locale === "sk" ? article.cover_alt_sk : article.cover_alt_en) || title
    : locale === "sk"
      ? "Jozef Kováč — softvér, umelá inteligencia a farmácia"
      : "Jozef Kováč — software, artificial intelligence and pharmacy";
  const images = [{
    url: image,
    alt: imageAlt,
    ...(image === SOCIAL_IMAGE ? { width: 1200, height: 630, type: "image/png" } : {}),
  }];
  const base = {
    title,
    description,
    url,
    siteName: SITE_NAME,
    locale: locale === "sk" ? "sk_SK" : "en_US",
    alternateLocale: locale === "sk" ? "en_US" : "sk_SK",
    images,
  };

  return {
    title: home ? { absolute: title } : title,
    description,
    ...(article
      ? {
          authors: [{ name: article.author, url: absoluteUrl("/about") }],
          creator: article.author,
          publisher: article.author,
          category: locale === "sk" ? article.category_sk : article.category_en,
        }
      : {}),
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
    twitter: { card: "summary_large_image", title, description, images },
  };
}

export function jsonLd(value: Record<string, unknown>) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
