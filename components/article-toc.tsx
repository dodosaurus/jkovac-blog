"use client";

import { useEffect, useState } from "react";

type Heading = {
  id: string;
  title: string;
};

export function ArticleToc({ headings, title }: { headings: Heading[]; title: string }) {
  const [activeId, setActiveId] = useState(headings[0]?.id ?? "");

  useEffect(() => {
    const elements = headings
      .map(({ id }) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (elements.length === 0) return;

    let frame = 0;

    const updateActiveHeading = () => {
      const readingLine = Math.min(window.innerHeight * 0.28, 220);
      let currentId = elements[0].id;

      for (const element of elements) {
        if (element.getBoundingClientRect().top <= readingLine) {
          currentId = element.id;
        } else {
          break;
        }
      }

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        currentId = elements[elements.length - 1].id;
      }

      setActiveId((previousId) => previousId === currentId ? previousId : currentId);
      frame = 0;
    };

    const scheduleUpdate = () => {
      if (frame === 0) frame = window.requestAnimationFrame(updateActiveHeading);
    };

    updateActiveHeading();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (frame !== 0) window.cancelAnimationFrame(frame);
    };
  }, [headings]);

  return (
    <aside className="toc" aria-labelledby="contents-title">
      <h2 id="contents-title">{title}</h2>
      <ol>
        {headings.map((heading) => {
          const isActive = heading.id === activeId;

          return (
            <li key={heading.id}>
              <a
                aria-current={isActive ? "location" : undefined}
                className={isActive ? "is-active" : undefined}
                href={`#${heading.id}`}
                onClick={() => setActiveId(heading.id)}
              >
                {heading.title}
              </a>
            </li>
          );
        })}
      </ol>
    </aside>
  );
}
