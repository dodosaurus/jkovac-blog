# Article authoring

Each article is one Markdown file. The filename may be editorial; `slug` is the stable public URL and should not change after publishing.

```md
---
schema: 1
slug: stable-url-slug
published: false
featured: false
published_at: "2026-09-14"
updated_at: "2026-09-14"
author: PharmDr. Jozef Kováč
title_sk: Slovenský názov
title_en: English title
excerpt_sk: Krátky opis pre výpis článkov a metadata.
excerpt_en: Short description for article listings and metadata.
category_sk: Kategória
category_en: Category
tags:
  - AI
  - software
cover_image: /blog-assets/example/cover.jpg
cover_alt_sk: Slovenský opis obrázka
cover_alt_en: English image description
canonical_path: /blog/stable-url-slug
source_locale: sk
translation_en: ai-assisted
---

Slovenský originál.

<!-- language:en -->

English translation.
```

Dates use ISO `YYYY-MM-DD`. Set `published: true` only when both language bodies and their metadata are ready. Update `updated_at` after a meaningful revision. Use `translation_en: human` for a human translation or `ai-assisted` when AI helped translate it. Keep article images inside `public/blog-assets/<article>/` and reference them with an absolute `/blog-assets/...` path.
