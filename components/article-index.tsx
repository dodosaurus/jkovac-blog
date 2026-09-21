"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useRef } from "react";
import {
  articleExcerpt,
  articleTitle,
  formatArticleDate,
} from "@/lib/article-display";
import type { ArticleSummary } from "@/lib/articles";
import { copy, localizePath, type Locale } from "@/lib/i18n";

function getTags(articles: ArticleSummary[], locale: Locale) {
  return Array.from(new Set(articles.flatMap((article) => article.tags))).sort((a, b) =>
    a.localeCompare(b, locale, { sensitivity: "base" }),
  );
}

function tagHref(pathname: string, tag?: string) {
  return tag
    ? { pathname, query: { tag }, hash: "clanky" }
    : { pathname, hash: "clanky" };
}

function TagFilter({ articles, locale, pathname, selectedTag }: {
  articles: ArticleSummary[];
  locale: Locale;
  pathname: string;
  selectedTag?: string;
}) {
  const text = copy[locale];
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const tags = getTags(articles, locale);
  const visibleCount = selectedTag
    ? articles.filter((article) => article.tags.includes(selectedTag)).length
    : articles.length;

  return (
    <details className="tag-filter" ref={detailsRef}>
      <summary className="tag-filter-summary">
        <span className="tag-filter-summary-label">{text.articleFilter}</span>
        <span className="tag-filter-current" aria-live="polite">
          {selectedTag ?? text.allArticles}
        </span>
        <span className="tag-filter-count">{visibleCount}</span>
        <span className="tag-filter-icon" aria-hidden="true">+</span>
      </summary>
      <nav className="tag-filter-panel" aria-label={text.filterByTag}>
        <span className="tag-filter-label">{text.filterByTag}</span>
        <div className="tag-filter-options">
          <Link
            aria-current={!selectedTag ? "page" : undefined}
            className="tag-filter-option"
            href={tagHref(pathname)}
            onClick={() => detailsRef.current?.removeAttribute("open")}
            scroll={false}
          >
            {text.allArticles}
            <span>{articles.length}</span>
          </Link>
          {tags.map((tag) => {
            const count = articles.filter((article) => article.tags.includes(tag)).length;
            return (
              <Link
                aria-current={selectedTag === tag ? "page" : undefined}
                className="tag-filter-option"
                href={tagHref(pathname, tag)}
                key={tag}
                onClick={() => detailsRef.current?.removeAttribute("open")}
                scroll={false}
              >
                {tag}
                <span>{count}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </details>
  );
}

function ArticleRows({ articles, locale, pathname }: {
  articles: ArticleSummary[];
  locale: Locale;
  pathname: string;
}) {
  const text = copy[locale];

  return (
    <div className="article-list">
      {articles.map((article) => (
        <article className="article-row" key={article.slug}>
          <time dateTime={article.published_at}>{formatArticleDate(article.published_at, locale)}</time>
          <div>
            <div className="article-tags" aria-label={text.articleTags}>
              {article.tags.map((tag) => (
                <Link className="tag" href={tagHref(pathname, tag)} key={tag} scroll={false}>
                  {tag}
                </Link>
              ))}
            </div>
            <h2>
              <Link
                className="article-title-link"
                href={localizePath(locale, `/blog/${article.slug}`)}
              >
                {articleTitle(article, locale)}
              </Link>
            </h2>
            <p>{articleExcerpt(article, locale)}</p>
            <span className="reading-time">
              {article.readingMinutes[locale]} {text.minutes}
            </span>
          </div>
          <span className="row-arrow" aria-hidden="true">→</span>
        </article>
      ))}
    </div>
  );
}

export function ArticleIndex({ articles, locale }: { articles: ArticleSummary[]; locale: Locale }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const tags = getTags(articles, locale);
  const requestedTag = searchParams.get("tag");
  const selectedTag = tags.find((tag) => tag.toLocaleLowerCase() === requestedTag?.toLocaleLowerCase());
  const visibleArticles = selectedTag
    ? articles.filter((article) => article.tags.includes(selectedTag))
    : articles;

  return (
    <>
      <TagFilter
        articles={articles}
        locale={locale}
        pathname={pathname}
        selectedTag={selectedTag}
      />
      <ArticleRows articles={visibleArticles} locale={locale} pathname={pathname} />
    </>
  );
}

export function ArticleIndexFallback({ articles, locale }: { articles: ArticleSummary[]; locale: Locale }) {
  const pathname = localizePath(locale, "/");

  return (
    <>
      <TagFilter articles={articles} locale={locale} pathname={pathname} />
      <ArticleRows articles={articles} locale={locale} pathname={pathname} />
    </>
  );
}
