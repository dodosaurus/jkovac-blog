import data from "@/content/projects.json";
import type { Locale } from "@/lib/i18n";

type Localized = Record<Locale, string>;

export type Project = {
  id: string;
  title: string;
  period: string;
  description: Localized;
  technologies: string[];
  link?: { url: string; label: Localized };
  image: { src: string; width: number; height: number; alt: Localized };
};

export const projects: Project[] = data;
