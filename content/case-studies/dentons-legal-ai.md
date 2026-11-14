---
{
  "slug": "dentons-legal-ai",
  "order": 1,
  "client": "Dentons Europe",
  "period": "2026",
  "stack": [
    "AI-assisted development",
    "E2E testing",
    "Property-based testing",
    "Visual testing",
    "AI PR review"
  ],
  "title": {
    "en": "DAISY: development and QA for a legal AI platform",
    "sk": "DAISY: vývoj a QA právnej AI platformy"
  },
  "excerpt": {
    "en": "On DAISY, I combine production development with QA ownership. The interesting part is making tests and AI-assisted validation part of implementation, while keeping room for the things a human still needs to check.",
    "sk": "Na DAISY kombinujem produkčný vývoj so zodpovednosťou za QA. Zaujímavé je najmä to, ako dostať testy a validáciu pomocou AI priamo do implementácie a pritom nechať priestor veciam, ktoré stále potrebuje skontrolovať človek."
  },
  "problem": {
    "en": "DAISY is an **internal AI platform** for Dentons, where ideas from the client's innovation team become features for legal work. With the web app, backend and Office add-ins in **separate repositories**, checking a ticket means understanding its effect on the wider system. When **all code is AI-generated**, we need **new methods for robust validation** that can uncover errors in both the implementation and the assumptions behind it.",
    "sk": "DAISY je **interná AI platforma** pre Dentons, do ktorej postupne pribúdajú nápady inovačného tímu klienta pre prácu v právnom prostredí. Webová aplikácia, backend aj Office doplnky sú v **samostatných repozitároch**, takže pri kontrole ticketu treba rozumieť jeho vplyvu na širší systém. Keď **všetok kód generuje AI**, potrebujeme **nové metódy dôkladného overovania**, ktoré dokážu odhaliť chyby v implementácii aj v predpokladoch, z ktorých vychádza."
  },
  "solution": {
    "en": "My role combines **production development** with **responsibility for QA**. I help define repository instructions that give AI agents context across the application and ask them to generate tests while they still understand the implementation, then run the available test pools, including unit and integration tests. I put particular emphasis on **Playwright E2E, property-based and visual tests**, and we use AI review on PRs as another source of feedback. I then investigate the results and use manual testing for the workflows and interactions that need **human judgement**.",
    "sk": "Moja rola spája **produkčný vývoj** so **zodpovednosťou za QA**. Pomáham definovať inštrukcie v repozitároch, ktoré AI agentom dávajú kontext celej aplikácie a vedú ich k tvorbe testov vo chvíli, keď ešte rozumejú implementácii, aj k spúšťaniu dostupných testovacích sád vrátane unit a integračných testov. Dôraz kladiem na **E2E testy v Playwrighte, property-based a vizuálne testy**; ako ďalší zdroj spätnej väzby používame AI review na PR. Výsledky potom analyzujem a manuálne sa venujem postupom a interakciám, pri ktorých treba **ľudský úsudok**."
  },
  "media": [
    {
      "src": "/case-studies/daisy-file-preview-current.png",
      "width": 1366,
      "height": 768,
      "alt": {
        "en": "DAISY chat with generated files and an image open in the side-by-side preview panel",
        "sk": "DAISY chat s vygenerovanými súbormi a obrázkom otvoreným vo vedľajšom paneli náhľadu"
      },
      "caption": {
        "en": "Generated files can be inspected beside the conversation. This November 2026 capture comes from an automated test using sample files.",
        "sk": "Vygenerované súbory sa dajú prezerať vedľa konverzácie. Tento záber z novembra 2026 pochádza z automatizovaného testu s ukážkovými súbormi."
      }
    },
    {
      "src": "/case-studies/daisy-draft-current.jpg",
      "width": 2005,
      "height": 985,
      "alt": {
        "en": "DAISY in dark mode with the Draft Smart Task and its format, length and style settings",
        "sk": "DAISY v tmavom režime so Smart Task Draft a nastaveniami formátu, dĺžky a štýlu"
      },
      "caption": {
        "en": "The current Draft Smart Task lets users choose the format, length and style before describing the text they need.",
        "sk": "Aktuálna Smart Task Draft umožňuje zvoliť formát, dĺžku a štýl pred opísaním textu, ktorý používateľ potrebuje."
      }
    },
    {
      "src": "/case-studies/daisy-chat-current.jpg",
      "width": 2005,
      "height": 985,
      "alt": {
        "en": "Current DAISY Secure Chat interface in dark mode, with Smart Tasks and the prompt composer",
        "sk": "Aktuálne rozhranie DAISY Secure Chat v tmavom režime so Smart Tasks a poľom na zadanie požiadavky"
      },
      "caption": {
        "en": "Secure Chat in the current design, captured in November 2026. Smart Tasks, mode and memory controls sit above the prompt composer.",
        "sk": "Secure Chat v aktuálnom dizajne zachytený v novembri 2026. Smart Tasks a nastavenia režimu a pamäte sú nad poľom na zadanie požiadavky."
      }
    }
  ],
  "thumbnail": "/case-studies/daisy-file-preview-current.png"
}
---
