import type { Metadata } from "next";
import { localizePath, type Locale } from "@/lib/i18n";
export const SITE_URL = "https://www.jkovac.eu";
export const SITE_NAME = "Jozef Kováč";
export const PERSON_ID = `${SITE_URL}/about/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export function absoluteUrl(path = "/") {
  const normalized = `/${path.replace(/^\/+|\/+$/g, "")}`;
  return `${SITE_URL}${normalized === "/" ? "/" : `${normalized}/`}`;
}
export function alternateUrls(path: string) {
  return { en: absoluteUrl(localizePath("en", path)), sk: absoluteUrl(localizePath("sk", path)), "x-default": absoluteUrl(localizePath("en", path)) };
}
export function pageMetadata({ locale, path, title, description, home }: { locale: Locale; path: string; title: string; description: string; home?: boolean }): Metadata {
  const url = absoluteUrl(localizePath(locale, path));
  const images = [{ url: `${SITE_URL}/social-card.png`, width: 1200, height: 630, alt: "Jozef Kováč — Software Engineer" }];
  return { title: home ? { absolute: title } : title, description, alternates: { canonical: url, languages: alternateUrls(path) }, openGraph: { title, description, url, siteName: SITE_NAME, locale: locale === "en" ? "en_US" : "sk_SK", type: "website", images }, twitter: { card: "summary_large_image", title, description, images } };
}
export function jsonLd(value: Record<string, unknown>) { return JSON.stringify(value).replace(/</g, "\u003c"); }
