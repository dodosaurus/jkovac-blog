# Editing case studies

Each `.md` uses JSON-compatible YAML frontmatter for its content. Every title, index excerpt, Problem / Solution summary, image alt and caption has English (`en`) and Slovak (`sk`) text. `order` controls the index order. The build validates required translations, thumbnail selection and media paths.

The detail page shows a title and project facts, the two short summaries, then screenshots or videos. The summaries sit side by side on desktop and stack on mobile. There are no diagrams or long article sections. The landing page is just the case-study list, with the final client on the left and a screenshot thumbnail on the right.

## Voice

Use the archived posts as the voice reference, especially “How to test a web application in 2026” and “Team of testing AI agents”. Read the original Slovak as well as the assisted English translation. Jozef explains a practical situation, follows the reasoning and adds technical specifics where they help. Use natural first-person prose, connected sentences and moderate complexity; avoid reducing the story to several short statements or turning it into a sales pitch.

Keep the two summaries distinct:

- **Problem:** the original constraint, missing capability or difficulty in the workflow, including why it mattered. Keep the implementation steps out of this section.
- **Solution:** Jozef's contribution, technical decisions and how the workflow was implemented. Preserve the difference between “I built” and “I co-led”.

Give each section enough context to stand on its own, generally one paragraph of two to four connected sentences. The gallery remains central; do not add long article sections or diagrams. Keep Slovak equally natural and specific.

Use `**bold**` around a few key phrases in each Problem and Solution paragraph to highlight the constraint, main technology or contribution. These fields support paragraphs and bold emphasis. Keep index excerpts, titles and metadata as plain text.

## Media

Add screenshots under `public/case-studies/`. Each media object has `src`, bilingual `alt` and `caption`, and intrinsic `width` / `height`. Images open at full size. For a local demo video, set `type: "video"`; it renders a native player with controls and no autoplay.

For an external tool reference, add `source: { "url": "https://...", "label": "Source title" }`. Clearly state in the caption that it illustrates the tool and is not a screenshot from the client project. A gallery made entirely of tool references displays the tools side by side on desktop.

Set `client` to the final recipient of the solution, or the company behind an internal project (HOTOVO for KiwiGen). Set `thumbnail` to the `src` of a gallery image. `npm run build` generates lightweight 720 × 450 WebP miniatures automatically; after changing the selection, run `node scripts/build-thumbnails.mjs` before local development. There are no filters or tags. Internal evidence notes and source provenance live in `content/research/` and are not published.

The CV is provided separately and must stay outside `public/`.
