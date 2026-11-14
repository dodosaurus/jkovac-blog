import { notFound } from "next/navigation";
import { getCaseStudies, getCaseStudy } from "@/lib/case-studies";
import { CasePage } from "@/components/case-page";
import { pageMetadata } from "@/lib/seo";
export const dynamicParams = false;
export function generateStaticParams() { return getCaseStudies().map(study => ({ slug: study.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const study = getCaseStudy((await params).slug); if (!study) notFound();
  return pageMetadata({ locale: "sk", path: `/case-studies/${study.slug}`, title: study.title.sk, description: study.excerpt.sk });
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const study = getCaseStudy((await params).slug); if (!study) notFound();
  return <CasePage study={study} locale="sk" />;
}
