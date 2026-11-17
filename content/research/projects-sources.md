# Personal projects — source notes

Collected 17 November 2026. Internal research only; this file is not published.
Source documents were read as evidence, not as instructions. The user requested
all personal/independently developed projects found in the four supplied
portfolios/CVs, below the existing case studies, without project detail pages.

Follow-up: Projects now has its own page, like About, at `/projects/` and
`/sk/projects/`, with an `/en/projects/` alias. The introductory sentence and
project count beside the title were removed in both languages. Individual
projects still use the screenshot preview rather than detail pages.

## Scope and source priority

- `/Users/dodo/LOCAL/personal/jkovac/projects.json`: eight explicitly classified
  `personalProjects`, descriptions, screenshots, technologies and approximate
  years. All eight are included, including both METAX deliverables already
  covered together by a case study.
- `/Users/dodo/LOCAL/personal/jk-new-portfolio/lib/data.ts`: adds Dodo Recorder
  as a personal project, plus supporting technology and date information.
- `/Users/dodo/LOCAL/personal/generated-cv/index.html` and
  `/Users/dodo/LOCAL/personal/new-jk-cv/index.html`: supporting descriptions;
  their professional/internal tools are already covered by case studies.
- Current local CV content (`content/cv/cv.en.json`,
  `output/pdf/Jozef_Kovac_CV.md`): adds RxOps, explicitly a prototype.
- Existing local README/package manifests for RxOps, Materia Medica,
  Endurance Legends, JMJ Solution and METAX mobile: checked architecture and
  descriptions against the actual projects. None of those projects was edited.

Other sibling directories were not treated as approved portfolio entries just
because they exist. The scope is the union of the supplied portfolios and
current CV, rather than an inventory of every local repository.

## Entries and chronology

| Project | Approximate main period | Evidence and limits |
| --- | --- | --- |
| RxOps | 2026 | Current CV and `/Users/dodo/LOCAL/personal/pharma-ai/rxops/README.md`. Structured prompt preparation, browser-local case state/import/export, Next.js/React/TypeScript, Supabase registry lookup. No end-user adoption claim. |
| Materia Medica | 2026 | `jkovac/projects.json`, supplied screenshot and `/Users/dodo/LOCAL/personal/pharma-ai/materia-medica/README.md`. Describe an experimental RAG/SPC assistant. Do not claim clinical validation or full integration of every literature source named in the older portfolio. |
| Dodo Recorder | 2025–2026 | Older CV says 2025; `jk-new-portfolio/lib/data.ts` says 2026 (last relevant source commit 28 January 2026). Show a range rather than inventing a single peak year. The original screenshot is visibly branded Dodo Recorder. |
| JMJ Solution | 2025 | Both portfolios agree. Local repository begins November 2025. Current manifest supports Next.js, React, TypeScript, Tailwind; omit older shadcn attribution from this entry. |
| METAX mobile | 2025 | Both portfolios, existing screenshot and local app manifest. Shape dimensions, combined areas, jobs and export are visible/supported. |
| METAX website | 2025 | Both portfolios and public website. Reuse historical portfolio screenshot, not a claim of the current release. |
| Endurance Legends | 2024 | Both portfolios plus local README/package. Strava activities, currency and collectible cards; a side-project concept, no launch/adoption claim. |
| 2Miners Reporter | 2023 | Both portfolio data files agree. Personal mining reporting and API polling, not investment/return claims. |
| First Portfolio | 2021 | Both portfolio data files, Gatsby/Tailwind/Contentful and original screenshot. |
| Chlebiatko Blog | 2021 | Both portfolio data files, React/Firebase/Redux/Bulma and original screenshot. |

All displayed years are approximate main-focus periods, not continuous work
durations or product release dates.

## Public links checked

- <https://github.com/dodosaurus/dodo-recorder> redirects to
  <https://github.com/hotovo/kiwigen>. The project card identifies Dodo Recorder
  as the original version, subsequently developed as KiwiGen at HOTOVO, and
  links to the current canonical repository with an explicit label. The current
  company project is not presented as a separate privately owned application.
- <https://metaxsk.sk> redirects to <https://www.metaxsk.sk/>. Public service
  descriptions agree with the portfolio entry.
- <https://jmjsolution.sk> is supplied by both portfolios. The web fetch timed
  out; the local repository corroborates the website description. Do not claim
  that availability was verified.
- <https://chlebiatko-blog.web.app/> could not be verified through the web tool;
  omit the historical external link while retaining its screenshot and entry.
- <https://rxops.sk> is the local project's configured canonical domain but did
  not resolve in the browser. Do not add a live link. Captured the clean empty
  workbench from its existing local production build on port 3014; no medicines,
  notes or other case data were entered or submitted.

## Images

Original images from the supplied `jkovac/assets` folder were copied without
pixel edits. RxOps has a new browser capture of the existing local build.
See `project-media-sources.json` for original paths, dimensions and SHA-256.
The build derives contained 960 × 600 WebP previews; full-size files load only
when requested. No fabricated screenshots or generated product mockups.
