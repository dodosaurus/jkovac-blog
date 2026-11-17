"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import type { Locale } from "@/lib/i18n";
import type { Project } from "@/lib/projects";

const labels = {
  en: {
    years: "Main development period, approximately",
    enlarge: "Enlarge screenshot",
    close: "Close preview",
    previous: "Previous project",
    next: "Next project",
    zoom: "Original size",
    fit: "Fit to screen",
    original: "Open original image",
    technologies: "Technologies",
  },
  sk: {
    years: "Hlavné obdobie vývoja, približne",
    enlarge: "Zväčšiť screenshot",
    close: "Zavrieť náhľad",
    previous: "Predchádzajúci projekt",
    next: "Ďalší projekt",
    zoom: "Pôvodná veľkosť",
    fit: "Prispôsobiť obrazovke",
    original: "Otvoriť pôvodný obrázok",
    technologies: "Technológie",
  },
};

export function Projects({ projects, locale }: { projects: Project[]; locale: Locale }) {
  const text = labels[locale];
  const [selected, setSelected] = useState<number | null>(null);
  const [zoomed, setZoomed] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const viewport = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLAnchorElement | null>(null);
  const project = selected === null ? null : projects[selected];
  const isOpen = selected !== null;

  useEffect(() => {
    if (!isOpen) return;
    const modal = dialog.current;
    if (!modal) return;
    const overflow = document.body.style.overflow;
    modal.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      modal.close();
      document.body.style.overflow = overflow;
      trigger.current?.focus({ preventScroll: true });
    };
  }, [isOpen]);

  useEffect(() => {
    viewport.current?.scrollTo(0, 0);
  }, [selected, zoomed]);

  function open(event: MouseEvent<HTMLAnchorElement>, index: number) {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    trigger.current = event.currentTarget;
    setZoomed(false);
    setSelected(index);
  }

  function navigate(direction: number) {
    setZoomed(false);
    setSelected(index => index === null ? null : (index + direction + projects.length) % projects.length);
  }

  return (
    <section className="shell projects-section" id="projects" aria-labelledby="projects-heading">
      <div className="projects-heading">
        <h1 id="projects-heading">Projects</h1>
      </div>
      <div className="project-grid">
        {projects.map((item, index) => (
          <article className="project-card" key={item.id} aria-labelledby={`project-${item.id}`}>
            <a className="project-screenshot" href={item.image.src} onClick={event => open(event, index)} aria-haspopup="dialog" aria-label={`${text.enlarge}: ${item.title}`}>
              <Image src={`/projects/thumbnails/${item.id}.webp`} alt={item.image.alt[locale]} width={960} height={600} loading="lazy" />
              <span className="project-enlarge" aria-hidden="true">↗</span>
            </a>
            <div className="project-title">
              <h2 id={`project-${item.id}`}>{item.title}</h2>
              <span className="project-period" aria-label={`${text.years}: ${item.period}`}>~ {item.period}</span>
            </div>
            <p className="project-description">{item.description[locale]}</p>
            <ul className="project-technologies" aria-label={text.technologies}>
              {item.technologies.map(technology => <li key={technology}>{technology}</li>)}
            </ul>
            {item.link && <a className="project-link" href={item.link.url} target="_blank" rel="noreferrer">{item.link.label[locale]} <span aria-hidden="true">↗</span></a>}
          </article>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="project-lightbox"
        aria-labelledby="project-preview-title"
        onClose={() => setSelected(null)}
        onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}
        onKeyDown={event => {
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            navigate(event.key === "ArrowLeft" ? -1 : 1);
          }
        }}
      >
        {project && <div className="project-lightbox-panel">
          <div className="project-lightbox-toolbar">
            <div className="project-preview-heading" aria-live="polite" aria-atomic="true">
              <span>{String((selected ?? 0) + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span>
              <h2 id="project-preview-title">{project.title}</h2>
            </div>
            <button type="button" className="project-close" onClick={() => dialog.current?.close()} aria-label={text.close} autoFocus>×</button>
          </div>
          <div ref={viewport} className={`project-preview-viewport${zoomed ? " is-zoomed" : ""}`}>
            <Image key={project.id} src={project.image.src} alt={project.image.alt[locale]} width={project.image.width} height={project.image.height} />
          </div>
          <div className="project-preview-controls">
            <button type="button" onClick={() => navigate(-1)} aria-label={text.previous}>←</button>
            <button type="button" className="project-zoom" onClick={() => setZoomed(value => !value)} aria-pressed={zoomed}>{zoomed ? text.fit : text.zoom}</button>
            <a href={project.image.src} target="_blank" rel="noreferrer">{text.original} <span aria-hidden="true">↗</span></a>
            <button type="button" onClick={() => navigate(1)} aria-label={text.next}>→</button>
          </div>
        </div>}
      </dialog>
    </section>
  );
}
