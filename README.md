# jkovac.eu

A minimal bilingual Next.js blog for Jozef Kováč. Slovak is the source language; English articles live alongside the originals in the same Markdown files.

## Development

```bash
npm install
npm run dev
```

Production output is a static export in `out/`.

## Writing

Create articles in `content/articles/`. Keep the Slovak original first, insert `<!-- language:en -->`, and add the English translation below it. Copy the documented frontmatter template from `content/articles/README.md` so publishing, navigation, metadata, dates, translation provenance, and future filtering remain maintainable.

