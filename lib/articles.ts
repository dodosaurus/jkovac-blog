import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Locale } from "@/lib/i18n";

const ARTICLES_DIRECTORY = path.join(process.cwd(), "content", "articles");
const LANGUAGE_MARKER = "<!-- language:en -->";

type ArticleFrontmatter = {
  schema: number;
  slug: string;
  published: boolean;
  featured: boolean;
  published_at: string;
  updated_at: string;
  author: string;
  title_sk: string;
  title_en: string;
  excerpt_sk: string;
  excerpt_en: string;
  category_sk: string;
  category_en: string;
  tags: string[];
  cover_image?: string;
  cover_alt_sk?: string;
  cover_alt_en?: string;
  canonical_path: string;
  source_locale: Locale;
  translation_en: "human" | "ai-assisted";
};

export type Article = ArticleFrontmatter & {
  body: Record<Locale, string>;
  readingMinutes: Record<Locale, number>;
  headings: Record<Locale, Array<{ id: string; title: string }>>;
};

function assertString(value: unknown, field: string): asserts value is string {
  if (typeof value !== "string" || value.trim() === "") {
    throw new Error(`Article frontmatter field \"${field}\" must be a non-empty string.`);
  }
}

function parseFrontmatter(data: Record<string, unknown>): ArticleFrontmatter {
  for (const field of ["published_at", "updated_at"] as const) {
    if (data[field] instanceof Date) {
      data[field] = data[field].toISOString().slice(0, 10);
    }
  }

  const required = [
    "slug",
    "published_at",
    "updated_at",
    "author",
    "title_sk",
    "title_en",
    "excerpt_sk",
    "excerpt_en",
    "category_sk",
    "category_en",
    "canonical_path",
    "source_locale",
    "translation_en",
  ] as const;

  required.forEach((field) => assertString(data[field], field));

  if (!Array.isArray(data.tags) || !data.tags.every((tag) => typeof tag === "string")) {
    throw new Error('Article frontmatter field "tags" must be a string array.');
  }

  if (data.source_locale !== "sk" && data.source_locale !== "en") {
    throw new Error('Article frontmatter field "source_locale" must be "sk" or "en".');
  }

  if (data.translation_en !== "human" && data.translation_en !== "ai-assisted") {
    throw new Error('Article frontmatter field "translation_en" is invalid.');
  }

  if (data.canonical_path !== `/blog/${data.slug}`) {
    throw new Error(`Article ${data.slug} canonical_path must match its published URL /blog/${data.slug}.`);
  }

  return data as ArticleFrontmatter;
}

export function slugifyHeading(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function extractHeadings(markdown: string) {
  return markdown
    .split("\n")
    .filter((line) => /^#{1,2}\s+/.test(line))
    .map((line) => {
      const title = line.replace(/^#{1,2}\s+/, "").replace(/[\[*_`]/g, "").trim();
      return { id: slugifyHeading(title), title };
    });
}

function readingMinutes(markdown: string) {
  const words = markdown
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/[#>*_`~-]/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  return Math.max(1, Math.ceil(words / 210));
}

function readArticleFile(filename: string): Article {
  const raw = fs.readFileSync(path.join(ARTICLES_DIRECTORY, filename), "utf8");
  const parsed = matter(raw);
  const frontmatter = parseFrontmatter(parsed.data);
  const [skBody, enBody] = parsed.content.split(LANGUAGE_MARKER);

  if (!skBody?.trim() || !enBody?.trim()) {
    throw new Error(`Article ${filename} must contain Slovak and English bodies.`);
  }

  const body = { sk: skBody.trim(), en: enBody.trim() };

  return {
    ...frontmatter,
    body,
    readingMinutes: {
      sk: readingMinutes(body.sk),
      en: readingMinutes(body.en),
    },
    headings: {
      sk: extractHeadings(body.sk),
      en: extractHeadings(body.en),
    },
  };
}

export function getPublishedArticles() {
  if (!fs.existsSync(ARTICLES_DIRECTORY)) return [];

  return fs
    .readdirSync(ARTICLES_DIRECTORY)
    .filter((filename) => filename.endsWith(".md") && filename.toLowerCase() !== "readme.md")
    .map(readArticleFile)
    .filter((article) => article.published)
    .sort((a, b) => b.published_at.localeCompare(a.published_at));
}

export function getArticle(slug: string) {
  return getPublishedArticles().find((article) => article.slug === slug);
}

export function articleTitle(article: Article, locale: Locale) {
  return locale === "sk" ? article.title_sk : article.title_en;
}

export function articleExcerpt(article: Article, locale: Locale) {
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
