---
schema: 1
slug: ako-by-mohli-ai-agenti-zmenit-testovanie-softveru
published: true
featured: false
published_at: "2026-09-15"
updated_at: "2026-09-15"
author: Jozef Kováč
title_sk: Ako by mohli AI agenti zmeniť testovanie softvéru
title_en: How AI agents could change software testing
excerpt_sk: Úvaha o tom, ako môžu špecializovaní AI agenti priebežne vytvárať, vykonávať a spravovať testy softvéru.
excerpt_en: A reflection on how specialized AI agents could continuously create, run, and manage software tests.
category_sk: Technológie
category_en: Technology
tags:
  - AI
  - testovanie softvéru
  - softvérový vývoj
canonical_path: /blog/ako-by-mohli-ai-agenti-zmenit-testovanie-softveru
source_locale: sk
translation_en: ai-assisted
---

Keď vidím, ako dobre si AI agenti počínajú už dnes, a keďže je často lepšie zadať úlohu voľnejšie a nechať agenta, aby navrhol riešenie podľa seba, núti ma to premýšľať nad tým, čo to v súčasnosti znamená pre testovanie softvéru. Rád by som rozobral niekoľko bodov, ktoré z tohto pozorovania vychádzajú, a potom predstavil jeden projekt – riešenie testovania, ktoré by sa dnes (v septembri 2026) dalo zaujímavo využiť.

# Keď kód generujú, nech ho aj testujú

Znie to jednoducho a priamočiaro, no asi to až také jednoduché nie je. Do rovnice vstupuje najmä fakt, že softvér stále používajú ľudia, ktorí majú rôzne zázemie, patria do rozličných záujmových alebo profesijných skupín a majú rozdielnu úroveň technických zručností. Na konci dňa sú to najmä ľudia, nie AI agenti. Majú svoje preferencie, niečo im prekáža, majú vlastnú intuíciu a do hry vstupuje aj to, aký „pocit“ softvér vyvoláva, nielen jeho funkčnosť.

Funkčnosť je však jedným zo základných kameňov dobrého softvérového produktu. Ani pri dobrom UI/UX produkt neprinesie sľúbenú úžitkovú hodnotu, ak nefunguje správne, a tým stráca na význame.

Preto je dobré mať zabezpečenú vrstvu testovania, ktorá overuje základnú funkčnosť. Práve s tým dokážu pomôcť AI agenti. Keď sa dá slovami a empiricky definovať, ako má niečo fungovať od A po Z, dá sa to pomocou agenta aj overiť. Myslím si, že v súčasnom svete, kde AI implementuje riešenia na základe podrobných špecifikácií, by mala tieto špecifikácie aj overovať.

1. Najmä prostredníctvom automatizácie testovania (unit testy > integračné testy > end-to-end testy).
2. V súčasnosti už aj pomocou voľného agenta, ktorý na požiadanie prechádza systémom podľa testovacieho scenára.

A nemusíme skončiť iba pri takomto jednoduchom modeli.

# Prečo nie viac agentov?

![Skupina mužov vybiehajúca z brány ako metafora subagentov vypustených do kódovej bázy](/blog-assets/ai-agent-software-testing/sub-agents-released-into-codebase.gif)

*[Pôvodné meme od @beginbot na X](https://x.com/beginbot/status/2095935984433336633/video/1).*

Prečo nemať viacero agentov? Predstavme si webovú aplikáciu s technologickým stackom, ako sú napríklad Next.js, NestJS, Redis a PostgreSQL, možno doplnenú o externé API. V TypeScript projekte by sme mohli vytvoriť skupinu agentov a inštruovať ich, aby už počas vývoja – kým vývojár vytvára aplikáciu – paralelne budovali vlastnú sadu testov a v správnom čase overovali všetko potrebné.

Mohli by sme mať:

- agenta pre unit testy, ktorý by spravoval sadu unit testov v NestJS backende (napríklad pomocou Jestu) a bol by inštruovaný, aby na požiadanie vykonával nízkoúrovňové scenáre na úrovni modulov,
- agenta pre integračné testy, ktorý by spravoval sadu integračných testov, napríklad tiež pomocou Jestu na backende, no pracoval by už aj s mockovanou databázou, Redisom a externým API a zároveň by bol odborníkom na vykonávanie scenárov v tomto prostredí na požiadanie,
- agenta pre end-to-end testy, ktorý by spravoval sadu testov v Playwrighte a bol by odborníkom na ovládanie prehliadača (v našom fiktívnom projekte by išlo asi o najdôležitejšieho testera na požiadanie),
- agenta pre záťažové testy, ktorý by spravoval testy v k6 a dokázal ich upravovať a spúšťať,
- agenta pre bezpečnostné testy, ktorý by tiež spravoval vlastnú sadu testov a špecializoval sa na bezpečnosť.

Napokon by sme mohli mať hlavného manažéra testovania, ktorý by všetkých týchto agentov koordinoval. Celý systém by mohol využívať spoločnú databázu výsledkov naviazaných na jednotlivé verzie aplikácie, vďaka čomu by mal prehľad aj o minulosti projektu. To je už o niečo zložitejší systém, ale napríklad pamäť v Claude Code odvádza v tejto oblasti sama osebe dobrú prácu.

# Počas vývoja aj ako samostatný AI tím

Keďže kód by bol rozložený vo viacerých repozitároch, bolo by užitočné, keby táto AI vrstva fungovala nad všetkými repozitármi projektu naraz a mala spoločnú definíciu. Zároveň by bolo dobré, keby vývojárske AI nástroje vedeli, že sú takíto agenti dostupní, a ich implementátori ich počas vývoja podľa potreby „vyvolávali z jaskyne“.

Ľudia, ktorí by sa na projekte venovali testovaniu (stále testeri?), by zároveň mohli tento testovací tím samostatne aktivovať a zadávať mu úlohy.

<!-- language:en -->

When I see how well AI agents already perform today—and since it is often better to define a task more loosely and let the agent propose its own solution—it makes me think about what this currently means for software testing. I would like to explore several points that follow from this observation and then introduce one project: a testing solution that could be put to interesting use today (in September 2026).

# If they generate the code, let them test it too

It sounds simple and straightforward, but it probably is not quite that easy. The main factor entering the equation is that software is still used by people who come from different backgrounds, belong to different interest or professional groups, and have varying levels of technical skill. At the end of the day, they are primarily people, not AI agents. They have their own preferences, certain things bother them, they rely on intuition, and the way software “feels” matters too—not just its functionality.

Functionality, however, is one of the cornerstones of a good software product. Even a product with good UI/UX loses its value if it does not work properly and therefore fails to deliver the utility it promised.

That is why it is important to have a testing layer that verifies core functionality. This is precisely where AI agents can help. If we can describe in words and define empirically how something should work from A to Z, an agent can verify it as well. I believe that in a world where AI implements solutions based on detailed specifications, AI should also verify those specifications.

1. Primarily through test automation (unit tests > integration tests > end-to-end tests).
2. Today, also through a free-form agent that traverses the system on demand according to a test scenario.

And we do not have to stop at such a simple model.

# Why not have more agents?

![A group of men running out of a gate as a metaphor for sub-agents being released into a codebase](/blog-assets/ai-agent-software-testing/sub-agents-released-into-codebase.gif)

*[Original meme by @beginbot on X](https://x.com/beginbot/status/2095935984433336633/video/1).*

Why not have several agents? Imagine a web application with a technology stack such as Next.js, NestJS, Redis, and PostgreSQL, perhaps supplemented by an external API. In a TypeScript project, we could create a group of agents and instruct them to build their own test suites in parallel throughout development—while the developer is building the application—and verify everything that needs to be checked when the time is right.

We could have:

- a unit-testing agent that manages a suite of unit tests in a NestJS backend (using Jest, for example) and is instructed to run low-level module scenarios on demand,
- an integration-testing agent that manages a suite of integration tests, perhaps also using Jest in the backend, but works with a mock database, Redis, and an external API, while becoming an expert at running scenarios on demand in this environment,
- an end-to-end testing agent that manages a suite of Playwright tests and specializes in controlling the browser (probably the most important on-demand tester in our fictional project),
- a load-testing agent that manages k6 tests and knows how to modify and run them,
- a security-testing agent that also manages its own test suite and specializes in security testing.

Finally, we could have a lead testing manager that coordinates all of these agents. The entire system could use a shared database of results linked to individual versions of the application, giving it a view of the project's history as well. This would already be a somewhat more complex system, although, for example, the memory feature in Claude Code does a good job in this area on its own.

# During development and as a standalone AI team

Since the code would be distributed across multiple repositories, it would be useful for this AI layer to operate across all of the project's repositories at once and share a common definition. It would also be helpful if AI development tools knew that these agents were available, so their implementers could “release them from the cave” whenever needed during development.

People responsible for testing on the project (still testers?) could also activate this testing team independently and assign tasks to it.
