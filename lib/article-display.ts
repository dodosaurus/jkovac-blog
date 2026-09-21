import type { Article, ArticleSummary } from "@/lib/articles";
import type { Locale } from "@/lib/i18n";

type DisplayArticle = Article | ArticleSummary;

export function articleTitle(article: DisplayArticle, locale: Locale) {
  return locale === "sk" ? article.title_sk : article.title_en;
}

export function articleExcerpt(article: DisplayArticle, locale: Locale) {
  return locale === "sk" ? article.excerpt_sk : article.excerpt_en;
}

export function formatArticleDate(date: string, locale: Locale) {
  return new Intl.DateTimeFormat(locale === "sk" ? "sk-SK" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}
