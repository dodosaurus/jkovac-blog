import Image from "next/image";
import Link from "next/link";
import type { CaseSummary } from "@/lib/case-studies";
import { localizePath, type Locale } from "@/lib/i18n";

export function CaseIndex({ studies, locale }: { studies: CaseSummary[]; locale: Locale }) {
  return (
    <div className="article-list">
      {studies.map((study, index) => (
        <article className="article-row case-row" key={study.slug}>
          <div className="case-context">
            <span>{String(study.order).padStart(2, "0")}</span>
            <p>{study.client}</p>
            <span>{study.period}</span>
          </div>
          <div className="case-row-copy">
            <h2>
              <Link className="article-title-link" href={localizePath(locale, `/case-studies/${study.slug}`)}>
                {study.title[locale]}
              </Link>
            </h2>
            <p>{study.excerpt[locale]}</p>
          </div>
          <div className="case-thumbnail">
            <Image src={study.thumbnail.src} alt={study.thumbnail.alt[locale]} width={720} height={450} loading={index === 0 ? "eager" : "lazy"} />
          </div>
        </article>
      ))}
    </div>
  );
}
