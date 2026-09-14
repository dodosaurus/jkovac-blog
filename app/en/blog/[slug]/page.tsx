import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlePage } from "@/components/article-page";
import { articleExcerpt, articleTitle, getArticle, getPublishedArticles } from "@/lib/articles";

export const dynamicParams = false;

export function generateStaticParams() {
  return getPublishedArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  return {
    title: articleTitle(article, "en"),
    description: articleExcerpt(article, "en"),
    alternates: {
      canonical: `/en${article.canonical_path}`,
      languages: { sk: article.canonical_path, en: `/en${article.canonical_path}` },
    },
  };
}

export default async function EnglishArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  return <ArticlePage article={article} locale="en" />;
}

