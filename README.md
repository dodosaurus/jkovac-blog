# jkovac.eu

Bilingual software engineering / SDET portfolio, retaining the original dark monospace design. English lives at `/`; Slovak at `/sk`. Existing `/en` and `/en/about` URLs remain available with canonical metadata pointing to the English root routes.

## Development

```bash
npm install
npm run dev
```

```bash
npm run build
npm run typecheck
python3 scripts/check-export.py
```

Next.js 16.3.3 produces a static site in `out/`. Read its bundled docs before changing routing or framework APIs. The existing hosting configuration is preserved; these drafts do not automatically publish or change jkovac.eu.

## Content

- `content/case-studies/`: five editable bilingual Markdown case studies. See its README for the writing style and media details.
- `content/projects.json`: ten personal projects, newest first, on `/projects/` and `/sk/projects/` (with `/en/projects/` as an English alias), with EN/SK descriptions, approximate main development years, technologies and screenshots. `public/projects/` keeps the full-size images; the build generates contained WebP previews in `public/projects/thumbnails/`. Screenshot links open a shared native dialog with keyboard navigation, original-size zoom and an original-image fallback. Individual projects have no detail routes.
- `content/research/projects-sources.md` and `project-media-sources.json`: project research, date discrepancies and screenshot provenance; excluded from the published site.
- `content/articles/`: original blog Markdown, preserved as an unpublished archive. No blog routes or sitemap entries are generated. Former public blog images are archived under `content/articles/assets/`; Markdown and archive files are never copied into `out/`.
- `content/research/portfolio-notes.md`: internal source notes and follow-up questions, excluded from the site.
- `content/cv/cv.en.json`: the bio/founder edits applied to the original attached CV. `content/cv/reference.pdf` preserves the original artwork privately.

## CV

```bash
python3 -m pip install reportlab pypdf
python3 scripts/build-cv.py
```

The generator preserves the supplied PDF’s original artwork, embedded Cascadia fonts, photo, experience descriptions and project cards. It edits the bio and founder entry and places the original pharmacy employment last in Experience, after FPT, at the top of page two. Pharmacy education and pharmacy references outside that role stay omitted. The reference stays in `content/cv/` and is never published. It produces the two-page `output/pdf/Jozef_Kovac_CV.pdf`, a text companion next to it, and keeps it outside the public website. The original supplied PDF is untouched. The CV is provided separately; the generator does not copy it into `public/`.

`node scripts/build-social-card.mjs` rebuilds the code-drawn social preview using Sharp, supplied with the current Next.js installation.

## Next content pass

Fourteen screenshots are included: twelve from the portfolios, current DAISY interface, test artefacts, recorded sessions and a local METAX web build, plus two publisher-provided UFT/Cypress tool references. Source provenance is in `content/research/media-sources.json`. The tool references are labelled and attributed; they are not presented as project screenshots. The case-study renderer supports both screenshots and local demo videos. Confirm metrics and specific tools from the internal research notes before adding claims. The CV is an independent document and is not linked or published on the website.

The landing page has no filters or tags. Each case study shows its final client and a screenshot thumbnail; the build generates small WebP assets from the selected gallery images.
