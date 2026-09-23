---
schema: 1
slug: ako-testovat-web-appku-v-2026
published: true
featured: false
published_at: "2026-09-22"
updated_at: "2026-09-22"
author: Jozef Kováč
title_sk: Ako testovať webovú aplikáciu v roku 2026
title_en: How to test a web application in 2026
excerpt_sk: Praktický pohľad na kombinovanie manuálneho testovania, automatizovaných testov a AI agentov pri zabezpečovaní kvality modernej webovej aplikácie.
excerpt_en: A practical look at combining manual testing, automated tests, and AI agents to assure the quality of a modern web application.
category_sk: Technológie
category_en: Technology
tags:
  - AI
  - QA
canonical_path: /blog/ako-testovat-web-appku-v-2026
source_locale: sk
translation_en: ai-assisted
---

Softvérový vývoj sa diametrálne zmenil – hlavne za posledné mesiace. Boom AI vo vývoji sa v mojej bubline datuje približne od januára 2026, keď veľa vývojárov, ktorí dovtedy ešte nič nepoužívali, začalo používať AI agentov na vývoj. Odvtedy sa celý ten náš priemysel posunul úplne mimo toho, čo bolo predtým zaužívané. Teraz už veľmi málo ľudí pochybuje o tom, že kód sa už ručne písať nebude. Stále však platí, že momentálne AI nástroje vykazujú lepšie výstupy, ak fungujú ako predĺžená ruka profesionála – softvérového inžiniera, ktorý vie, ako s agentom čo najefektívnejšie komunikovať, aby dosiahol kvalitný výsledok.

Ruka v ruke s meniacim sa svetom musia ísť aj ľudia z oblasti QA – čiže tí, ktorí sa starajú o kvalitu vyprodukovaného softvéru v tíme a berú za ňu zodpovednosť. S meniacim sa spôsobom konzumácie softvéru bude podľa mňa aj táto sféra ešte podliehať masívnym zmenám a profesia sa ešte viac „shapeshiftne“. Nateraz však nemôžeme snívať. Softvér stále používajú milióny ľudí, ktorí klikajú na tlačidlo a vypĺňajú polia. Ako teda momentálne takýto softvér čo najlepšie otestovať?

Rád by som tu zhrnul svoju víziu a zároveň aj to, čo a ako teraz robím ja na svojom projekte. Každý projekt má svoje špecifiká, no ten môj je podľa mňa momentálne dosť častým typom – aj čo sa týka zamerania produktu, aj technológií, ktoré používame. Čo je to za projekt, opíšem o chvíľu, aby sme boli v obraze. Hneď na začiatok by som však rád podotkol, že na projekte momentálne fungujem v takej hybridnej úlohe – vo svojej AI kuchyni produkujem aj produkčný kód v appke, na ktorý si trúfam, a popritom sa starám aj o QA stránku nášho projektu.

# Čo testujeme

Ide o AI chatbota pre firmu v právnom odvetví. Zjednodušene ide o akýsi interný ChatGPT, do ktorého inkrementálne implementujeme nápady prichádzajúce z inovačného tímu klienta. Technologicky ide o webovú aplikáciu v Next.js, pričom serverová časť beží v NestJS v ďalšom samostatnom repozitári. Potom máme ešte nejaké špecifické doplnky, z ktorých má každý vlastný repozitár (add-in do Wordu a Outlooku). Takisto sa dávnejšie implementoval aj vlastný textový procesor, ktorý pomáhal pri vytváraní RAG pipelines v infraštruktúre, ktoré si môžu používatelia podľa svojej vôle v našej appke vytvárať. Používateľská a serverová časť webovej appky sú teda v TypeScripte.

# Ako sme testovali

Poďme si najprv stanoviť nejaký východiskový stav – ako sa to robilo predtým, respektíve ešte celkom nedávno, doslova pred pár mesiacmi. Väčšinou sa manuálne testovanie robilo pre každý „ticket“ alebo podľa vopred pripraveného scenára (regresné testy). Automatizované testy sa vytvárali buď na základe opravy chyby či implementovanej funkcionality, alebo v rôznom čase po implementácii – podľa toho, aký komplexný mal byť daný test, koľko komponentov v požadovaných verziách v ňom muselo fungovať a koniec koncov aj podľa toho, aký tím testerov na teste pracoval. Testy boli rôzne zložité podľa toho, na akej úrovni testovacej pyramídy boli implementované.

Čiže buď išlo len o manuálne vykonanie testovania testerom, ktoré zaberalo čas, hlavne ak zahŕňalo aj nejakú analýzu, sledovanie dát v databáze, cache a podobne. Takisto vývoj automatizovaného testu zaberal kopu času – vytvoriť test často trvalo aj tri dni alebo viac, podľa toho, o aký test išlo.

# Ako sa dá testovať teraz

Momentálne máme z môjho pohľadu tri druhy testovacích aktivít, ktoré vieme voľne kombinovať, pretvárať do hybridných podôb a implementovať ich do nášho pracovného postupu:

1. manuálne testovanie človekom,
2. automatizácia testovania,
3. testovanie riadené AI agentom.

Poďme si ich jeden po druhom rozobrať, pozrieť sa, akú úlohu zohrávajú v súčasnosti a ako sa dajú kombinovať, a potom si dáme „reality check“.

## Manuálne testovanie

Konečným produktom je stále väčšinou aplikácia, v ktorej používateľ kliká a zadáva veci cez klávesnicu a myš, respektíve často s aplikáciou pracuje cez mobilné rozhranie. Konečný používateľ je tak stále ľudský organizmus a softvér vníma svojimi zmyslami. Kdesi v podcaste som počul, že dizajn hier, čiže to, aby bola počítačová hra zábavná, sa stále ťažko dosahuje pomocou programovania s LLM, lebo konečný zážitok je niečo viac než súbor herných mechaník a ich grafického prevedenia. Je to čosi viac, čo hráčovi sedí – „feels good“. Toto sa podľa mňa dá v určitom zmysle aplikovať aj na klasický softvér, v našom prípade na webové aplikácie. Stále totiž zohráva veľkú úlohu to, aký pocit produkt vyvoláva a ako ľahko a dobre môže konečný používateľ využívať hodnotu, ktorú aplikácia prináša.

Preto, kým budú softvér používať ľudia, je dobré, ak na konci testovacej stratégie stojí tester – reálny človek. Mal by sa sústrediť na veci, ktoré dávajú najväčší zmysel, čiže na najpoužívanejšie funkcionality a rozhrania, hlavne na to, čo je jadrom produktu. Dobrou stratégiou je pri práci na automatizácii testov a inštruovaní AI agenta k testovaniu pýtať sa ho: „Čo mám otestovať ja (človek)?“ Tým už však predbieham hybridné metódy. Poďme k ďalšej aktivite.

## Automatizácia testov

Automatizácia testov je lacná a momentálne je hriech ju nevytvárať. Super je, že jej kód už málokedy treba písať ručne – treba však napísať, respektíve pripraviť pravidlá (inštrukcie pre AI agenta), aby sa efektívne generovala sama. Myslím tým využitie súboru AGENTS.md (alebo CLAUDE.md či čohokoľvek iného, čo tím používa v repozitári či repozitároch; v texte už budem používať len prvý pojem) a zadefinovanie základu pre všetky úrovne testovacej pyramídy.

- Čiže v serverovej časti vybrať testovací nástroj – napríklad v našom prípade Jest – a v AGENTS.md spomenúť, že **unit testy** sú písané v Jeste a že vždy, keď je to vhodné (keď proti tomu neexistuje pádny argument), treba popri oprave chyby alebo implementácii funkcionality vytvoriť nový unit test.
- Stanoviť v serverovej časti, ako budú vyzerať **integračné testy**, a podobne inštruovať AGENTS.md.
- Pripraviť prostredie pre **end-to-end testy** – napríklad u nás v Playwrighte v repozitári používateľskej časti – a v príslušnom AGENTS.md spomenúť, že sú uložené práve tu.

Človeku starajúcemu sa o automatizáciu testov potom ostane len starosť o údržbu tohto kódu, spúšťanie testov a analýza výsledkov. Áno, testy sa budú robiť samy. Ani pri kontrole PR vôbec nemusia byť tieto testy v centre pozornosti – zaberá to čas a vývojári by sa mali sústrediť na produkčný kód (kód v rámci code review v septembri 2026 stále kontrolujú vývojári). Ak majú testy nejaké problémy, mal by ich udržiavať napríklad človek, ktorý sa bude v tíme venovať testovaniu a ktorého čas bude trochu lacnejší.

Výhodou je, že pri oprave chyby alebo implementácii funkcionality vývojár často nahromadí krásne množstvo relevantného kontextu k implementácii, na ktorej pracuje. Bolo by škoda zahodiť túto príležitosť a neinštruovať pritom AI agenta, aby testy vygeneroval vo chvíli, keď presne vie, o čo ide. Keď to pridáme do systémových inštrukcií (AGENTS.md), vývojár sa nemusí o nič starať a testy sa budú generovať popri implementácii.

## Testovanie AI agentom

Dostávame sa k bodu, ktorý už asi bude splývať s tým, ako tieto tri aktivity – manuálne testovanie, automatizáciu testov a testovanie AI agentom – kombinovať. Už sme si povedali, ako vývojár navrhuje riešenie a aké nastavenie pre QA by mal mať k dispozícii. Keď úloha („ticket“) prejde kontrolou PR – čo je podľa mňa stále dobrý kontrolný bod –, môže nasledovať akási kontrola QA.

Tu sa dostávame k zlatému klincu programu. Nastáva moment, keď si tester môže vziať úlohu a spraviť komplexnú kontrolu QA nad tým, čo sa implementovalo. Keď so svojím AI „harnessom“ prepojí napríklad aj Jiru alebo Linear (podľa toho, čo tím používa), často stačí číslo úlohy a ide sa na to:

> “Let's test TICKET-001. Test the implementation yourself, check what the test coverage is across all levels (unit, integration, e2e). Run all the E2E tests at the end of your testing to make sure it didn't mess anything up elsewhere in the system.”

Po správnom nastavení Playwrightu a získaní prístupu k repozitárom aj Jire je AI agent často natoľko šikovný, že už bude vedieť, ako spraviť veľkú časť práce. Super je napríklad to, že Claude Code, ktorý používam, má pamäť. Okrem spoločných systémových inštrukcií, ktoré používam, mám teda v pamäti už aj značné množstvo informácií o tom, čo som robil nedávno, a on z nich čerpá.

AI si vie natiahnuť úlohu a jej opis, presné zmeny v kóde aj testy, ktoré sa implementovali... „You get the point.“ Claude Code je u mňa dostatočne múdry na to, aby si pripravil všetko, čo potrebuje – buď ide do používateľskej časti (cez prihlasovacie údaje, ktoré používam v súbore Playwright `.env.test`), alebo spustí dočasné kontajnery Docker pre databázu či „cache“, prípadne si pripraví skript a vygeneruje dáta. V tejto dobe je úžasné niečo testovať. Na všetky hlúposti a hraničné prípady, na ktoré sme museli myslieť, už teraz myslieť nemusíme.

# Pohľad z odstupu

Toto všetko je pekné, ale realita u nás je napríklad taká, že všetky projekty – používateľská časť webu, serverová časť, doplnky a „DevOps pipelines“ – sú v osobitných repozitároch. Žijú pod jednou strechou v Azure DevOps, ale medzi sebou nekomunikujú. Preto sme si pripravili nielen AGENTS.md v každom repozitári, ale aj ďalší AGENTS.md v lokálnom nadradenom priečinku, do ktorého si vývojár naklonuje všetky repozitáre. Ten hovorí o tom, čo majú spoločné a čo ktorý repozitár rieši. Svoj AI nástroj (v mojom prípade Claude Code) si tak viem otvoriť v tomto nadradenom priečinku a AI skáče do projektov, do ktorých potrebuje.

Zatiaľ som si vytvoril ešte jeden priečinok s ďalšími AI inštrukciami, ktoré mám len pre seba. Viac tam napríklad rozprávam o tom, aké testovacie vrstvy máme, aké sú konvencie názvov úloh, vetiev a PR či celkové pravidlá pre opisy. Alebo že nechcem veľa komentárov v kóde a podobne.

Pointa však je, že systém pozostáva z viacerých Git repozitárov. Ak chceme, aby AI agent vedel o všetkých, musíme ho pustiť do nejakého nadradeného priečinka, v ktorom bude mať prístup ku všetkým, a zároveň mu dať kompaktné informácie o tom, čo je to za systém a čo má kde hľadať.

# QA sa posúva k testovaniu ľudského vnímania produktu

Alternatívny pohľad na problematiku a na to, ako sa dá báza automatizovaných testov rozšíriť napríklad o performance alebo security testy, uvádzam v článku [Tím testing AI agentov](/blog/ako-by-mohli-ai-agenti-zmenit-testovanie-softveru).

Vyústením celého tohto textu je, že sa pri testovaní môžeme naozaj sústrediť na to, čo aj subjektívne vnímame ako dôležité. Povedal by som, že subjektivita testera teraz zohráva ešte väčšiu úlohu než kedysi. Už to nebude analýza hraničných hodnôt a podobné techniky, ktoré sme sa učili pri certifikácii ISTQB. Tieto logické testy vygeneruje AI. Našou úlohou bude vcítiť sa do roly používateľa a používať softvér ako on. Možno by som aj povedal, že je čas, aby sa QA začalo približovať používateľom oveľa viac než kedykoľvek predtým.

<!-- language:en -->

Software development has changed dramatically—especially over the last few months. In my bubble, the boom in AI-assisted development dates roughly to January 2026, when many developers who had not previously used any such tools began using AI agents for development. Since then, our entire industry has moved far beyond what used to be standard practice. Very few people now doubt that code will no longer be written by hand. However, AI tools still produce better results when they act as an extension of a professional—a software engineer who knows how to communicate with an agent as effectively as possible to achieve a high-quality result.

People working in QA—those who take care of and assume responsibility for the quality of the software produced by a team—must change along with the world. As the way we consume software changes, I believe this field will undergo further massive transformations and the profession will shapeshift even more. For now, however, we cannot merely dream. Software is still used by millions of people who click buttons and fill in fields. So how can we test this kind of software as effectively as possible today?

I would like to summarize my vision and explain what I currently do on my own project. Every project has its own specifics, but I think the type of project I work on is quite common today, both in terms of the product's focus and the technologies we use. I will describe the project shortly to provide some context. First, however, I would like to point out that I currently work in a hybrid role on the project: I produce production code in my AI kitchen for the parts of the app I feel confident working on, while also taking care of the QA side of our project.

# What we test

It is an AI chatbot for a company in the legal sector. Put simply, it is a kind of internal ChatGPT into which we incrementally implement ideas from the client's innovation team. Technically, it is a Next.js web application, while the server side runs in NestJS in a separate repository. We also have several specific add-ins, each with its own repository, including add-ins for Word and Outlook. Some time ago, a custom text processor was implemented to help create RAG pipelines in the infrastructure, which users can create in our app as they wish. The client and server sides of the web app are therefore written in TypeScript.

# How we used to test

Let us first establish a baseline: how things were done before, or rather until quite recently—literally only a few months ago. Most of the time, manual testing was performed for each ticket or according to a predefined scenario, such as regression tests. Automated tests were created either for a bug fix or an implemented feature, or at various points after implementation, depending on how complex a particular test was supposed to be, how many components in the required versions had to work in it, and ultimately which testing team worked on it. Tests varied in complexity according to the level of the testing pyramid at which they were implemented.

In some cases, this meant only manual testing performed by a tester, which took time, especially when it also involved analysis, monitoring data in the database or cache, and so on. Developing an automated test also took a lot of time—creating one often required three days or more, depending on the type of test.

# How we can test now

From my perspective, we currently have three types of testing activities that we can freely combine, reshape into hybrid forms, and incorporate into our workflow:

1. manual testing by a person,
2. test automation,
3. AI agent-driven testing.

Let us examine them one by one, look at the role they play today and how they can be combined, and then do a reality check.

## Manual testing

The final product is still usually an application in which a user clicks and enters things using a keyboard and mouse, or often works with the application through a mobile interface. The end user is therefore still a human organism who perceives software through the senses. I once heard in a podcast that game design—making a computer game fun—is still difficult to achieve through LLM programming because the final experience is more than a collection of game mechanics and their visual execution. It is something more, something that feels right to the player—it “feels good.” I believe this can also be applied, in a certain sense, to conventional software, including web applications in our case. The feeling a product creates still plays a major role, as does how easily and effectively the end user can access the value the application provides.

Therefore, as long as people use software, it is good to have a tester—a real person—at the end of the testing strategy. They should focus on the things that matter most: the most frequently used features and interfaces, especially whatever lies at the core of the product. While working on test automation and instructing an AI agent to perform testing, a good strategy is to ask it: “What should I—the human—test?” But that takes us ahead to hybrid methods. Let us move on to the next activity.

## Test automation

Test automation is inexpensive, and at the moment it is almost a sin not to create it. The great thing is that its code rarely needs to be written manually anymore. We do, however, need to write—or rather prepare—the rules (instructions for the AI agent) that allow it to generate itself effectively. By this, I mean using an AGENTS.md file (or CLAUDE.md, or whatever else a team uses in its repository or repositories; I will use only the first term from this point on) and defining a foundation for every level of the testing pyramid.

- On the server side, choose a testing tool—Jest in our case, for example—and mention in AGENTS.md that **unit tests** are written in Jest and that a new unit test should be created alongside a bug fix or feature implementation whenever appropriate, unless there is a compelling reason not to do so.
- Define what **integration tests** should look like on the server side and instruct AGENTS.md accordingly.
- Prepare the environment for **end-to-end tests**—in our case, Playwright in the client-side repository—and mention in the relevant AGENTS.md file that this is where they are located.

The person responsible for test automation will then only have to maintain this code, run the tests, and analyze the results. Yes, the tests will create themselves. These tests do not even need to be the focus of PR reviews, because that takes time and developers should concentrate on production code. As of September 2026, developers still review code during code review. If the tests have problems, they should be maintained, for example, by someone on the team dedicated to testing whose time is a little less expensive.

The advantage is that while fixing a bug or implementing a feature, a developer often accumulates a wonderful amount of relevant context about the implementation they are working on. It would be a shame to waste this opportunity and not instruct the AI agent to generate tests while it knows exactly what is going on. Once we add this to the system instructions in AGENTS.md, the developer no longer has to worry about it, and the tests will be generated alongside the implementation.

## Testing with an AI agent

We are now reaching a point that will probably blend into the question of how to combine all three activities: manual testing, test automation, and testing with an AI agent. We have already discussed how a developer engineers a solution and the QA setup they should have available. Once a ticket passes PR review—which I still consider a good checkpoint—it can move on to a kind of QA check.

This brings us to the highlight of the process. This is the moment when a tester can take a ticket and perform a comprehensive QA check on what has been implemented. If they connect Jira or Linear—whichever their team uses—to their AI harness, the ticket number is often all they need to get started:

> “Let's test TICKET-001. Test the implementation yourself, check what the test coverage is across all levels (unit, integration, e2e). Run all the E2E tests at the end of your testing to make sure it didn't mess anything up elsewhere in the system.”

With Playwright configured correctly and access to the repositories and Jira, an AI agent is often capable enough to work out how to complete a large part of the job. One great thing about Claude Code, which I use, is that it has memory. In addition to the shared system instructions I use, its memory already contains a considerable amount of information about what I have done recently, and it draws from that as well.

AI can pull in the ticket and its description, the exact changes made to the code, and the tests that were implemented... You get the point. In my experience, Claude Code is smart enough to prepare whatever it needs. It can work in the client-side repository using the credentials I keep in the Playwright `.env.test` file, start temporary Docker containers for the database or cache, or prepare a script and generate data. Testing something today is amazing. We no longer have to think of every little detail and edge case that previously demanded our attention.

# Taking a step back

All of this sounds great, but our reality, for example, is that every project—the web client, server, add-ins, and DevOps pipelines—lives in a separate repository. They all reside under one roof in Azure DevOps, but they do not communicate with one another. That is why we prepared not only an AGENTS.md file in every repository, but also another AGENTS.md in the local parent folder where a developer clones all the repositories. It explains what the repositories share and what each one is responsible for. I can then open my AI tool—Claude Code in my case—in that parent folder, and the AI moves into whichever projects it needs.

So far, I have also created another folder containing additional AI instructions just for myself. There I provide more detail about our testing layers, the naming conventions for tasks, branches, and PRs, and the general rules for descriptions. I also note that I do not want many comments in the code, among other things.

The point is that the system consists of several Git repositories. If we want the AI agent to know about all of them, we need to let it operate from a parent folder where it has access to every repository, while also giving it concise information about the system and where to find things.

# QA is shifting toward testing the human perception of a product

I discuss an alternative perspective on this issue, including how the suite of automated tests can be expanded with performance or security tests, in [Team of testing AI agents](/en/blog/ako-by-mohli-ai-agenti-zmenit-testovanie-softveru).

The conclusion of this entire article is that testing can now genuinely focus on what we subjectively perceive as important. I would say that a tester's subjectivity now plays an even greater role than it did in the past. The job will no longer be about boundary value analysis and similar techniques that we learned while preparing for ISTQB certification. AI will generate these logical tests. Our role will be to empathize with users and use the software as they do. I might even say that it is time for QA to move closer to users than ever before.
