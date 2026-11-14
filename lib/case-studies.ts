import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Locale } from "@/lib/i18n";

type Localized = Record<Locale, string>;
export type CaseStudy = {
  slug: string;
  order: number;
  client: string;
  period: string;
  thumbnail: string;
  stack: string[];
  title: Localized;
  excerpt: Localized;
  role: Localized;
  problem: Localized;
  impact: Localized;
  solution: Localized;
  link?: { url: string; label: string };
  media: { src: string; alt: Localized; caption: Localized; type?: "video"; width?: number; height?: number; source?: { url: string; label: string } }[];
};
export type CaseSummary = Omit<CaseStudy, "media" | "problem" | "impact" | "solution" | "thumbnail"> & {
  thumbnail: CaseStudy["media"][number];
};

function validate(study: CaseStudy, filename: string) {
  const invalid = (field: string): never => { throw new Error(`Invalid ${field} in case study ${filename}`); };
  const localized = (value: Localized | undefined, field: string) => {
    if (!value || !["en", "sk"].every(locale => typeof value[locale as Locale] === "string" && value[locale as Locale].trim())) invalid(field);
  };
  if (study.slug !== filename.slice(0, -3) || !/^[a-z0-9-]+$/.test(study.slug)) invalid("slug");
  if (!Number.isInteger(study.order) || study.order < 1) invalid("order");
  for (const field of ["client", "period"] as const) {
    if (typeof study[field] !== "string" || !study[field].trim()) invalid(field);
  }
  for (const field of ["title", "excerpt", "role", "problem", "impact", "solution"] as const) localized(study[field], field);
  if (!Array.isArray(study.stack) || !study.stack.length || !study.stack.every(item => typeof item === "string")) invalid("stack");
  if (!Array.isArray(study.media)) invalid("media");
  if (!study.media.some(media => media.src === study.thumbnail && !media.type)) invalid("thumbnail");
  if (!fs.existsSync(path.join(process.cwd(), "public/case-studies/thumbnails", `${study.slug}.webp`))) invalid("generated thumbnail; run node scripts/build-thumbnails.mjs");
  for (const media of study.media) {
    localized(media.alt, "media alt");
    localized(media.caption, "media caption");
    if (typeof media.src !== "string" || !media.src.startsWith("/case-studies/") || media.src.includes("..") || !fs.existsSync(path.join(process.cwd(), "public", media.src))) invalid("media source");
    if (media.type !== undefined && media.type !== "video") invalid("media type");
    if (media.source && (!media.source.url.startsWith("https://") || !media.source.label)) invalid("media source attribution");
  }
  if (study.link && (!study.link.url.startsWith("https://") || !study.link.label)) invalid("link");
  return study;
}

export function getCaseStudies(): CaseStudy[] {
  const directory = path.join(process.cwd(), "content/case-studies");
  const studies = fs.readdirSync(directory)
    .filter(name => name.endsWith(".md") && name !== "README.md")
    .map(name => {
      const { data } = matter(fs.readFileSync(path.join(directory, name), "utf8"));
      return validate(data as CaseStudy, name);
    })
    .sort((a, b) => a.order - b.order);
  if (new Set(studies.map(study => study.order)).size !== studies.length) throw new Error("Case study order must be unique");
  return studies;
}

export function getCaseStudy(slug: string) {
  return getCaseStudies().find(study => study.slug === slug);
}

export function caseSummary(study: CaseStudy): CaseSummary {
  const { media, thumbnail, problem: _problem, impact: _impact, solution: _solution, ...summary } = study;
  const image = media.find(item => item.src === thumbnail)!;
  return { ...summary, thumbnail: { ...image, src: `/case-studies/thumbnails/${study.slug}.webp`, width: 720, height: 450 } };
}
