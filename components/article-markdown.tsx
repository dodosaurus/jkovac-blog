import type { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { slugifyHeading } from "@/lib/articles";

function textFromChildren(children: ReactNode): string {
  if (typeof children === "string" || typeof children === "number") return String(children);
  if (Array.isArray(children)) return children.map(textFromChildren).join("");
  if (children && typeof children === "object" && "props" in children) {
    return textFromChildren((children as { props: { children?: ReactNode } }).props.children);
  }
  return "";
}

export function ArticleMarkdown({ body }: { body: string }) {
  return (
    <div className="article-body">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => <h2 id={slugifyHeading(textFromChildren(children))}>{children}</h2>,
          h2: ({ children }) => <h2 id={slugifyHeading(textFromChildren(children))}>{children}</h2>,
          h3: ({ children }) => <h3 id={slugifyHeading(textFromChildren(children))}>{children}</h3>,
          a: ({ href, children }) => {
            const external = href?.startsWith("http");
            return (
              <a href={href} rel={external ? "noreferrer" : undefined} target={external ? "_blank" : undefined}>
                {children}
              </a>
            );
          },
          img: ({ src, alt }) => <img alt={alt ?? ""} loading="lazy" src={src} />,
        }}
      >
        {body}
      </ReactMarkdown>
    </div>
  );
}

