# Editing case studies

Each `.md` uses JSON-compatible YAML frontmatter for its content. Every title, index excerpt, role, Problem / Impact / Solution summary, image alt and caption has English (`en`) and Slovak (`sk`) text. `order` controls the index order. The build validates required translations, thumbnail selection and media paths.

The detail page shows a title and project facts, the three short summaries, then screenshots or videos. There are no diagrams or long article sections. The landing page is just the case-study list, with the final client on the left and a screenshot thumbnail on the right.

## Voice

Use the archived posts as the voice reference, especially “How to test a web application in 2026” and “Team of testing AI agents”. Read the original Slovak as well as the assisted English translation. Jozef explains a practical situation, follows the reasoning and adds technical specifics where they help. Use natural first-person prose, connected sentences and moderate complexity; avoid reducing the story to several short statements or turning it into a sales pitch.

Keep the three summaries distinct:

- **Problem:** the original constraint, missing capability or difficulty in the workflow, including why it mattered. Keep the implementation steps out of this section.
- **Impact:** what became possible or changed for the people using the result. Use documented outcomes and capabilities; do not invent performance, adoption or defect-reduction numbers.
- **Solution:** Jozef's contribution, technical decisions and how the workflow was implemented. Preserve the difference between “I built” and “I co-led”.

Give each section enough context to stand on its own, generally one paragraph of two to four connected sentences. The gallery remains central; do not add long article sections or diagrams. Keep Slovak equally natural and specific.

## Media

Add screenshots under `public/case-studies/`. Each media object has `src`, bilingual `alt` and `caption`, and intrinsic `width` / `height`. Images open at full size. For a local demo video, set `type: "video"`; it renders a native player with controls and no autoplay.

For an external tool reference, add `source: { "url": "https://...", "label": "Source title" }`. Clearly state in the caption that it illustrates the tool and is not a screenshot from the client project. A gallery made entirely of tool references displays the tools side by side on desktop.

Set `client` to the final recipient of the solution. Set `thumbnail` to the `src` of a gallery image. `npm run build` generates lightweight 720 × 450 WebP miniatures automatically; after changing the selection, run `node scripts/build-thumbnails.mjs` before local development. There are no filters or tags. Internal evidence notes and source provenance live in `content/research/` and are not published.

The CV is provided separately and must stay outside `public/`.
