import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlePage } from "@/components/article-page";
import { articleExcerpt, articleTitle } from "@/lib/article-display";
import { getArticle, getPublishedArticles } from "@/lib/articles";
import { articlePath, pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return getPublishedArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  return pageMetadata({
    locale: "sk",
    path: articlePath(article),
    title: articleTitle(article, "sk"),
    description: articleExcerpt(article, "sk"),
    article,
  });
}

export default async function SlovakArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  return <ArticlePage article={article} locale="sk" />;
}
