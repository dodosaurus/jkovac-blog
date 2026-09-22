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
  - testing
canonical_path: /blog/ako-testovat-web-appku-v-2026
source_locale: sk
translation_en: ai-assisted
---

Softvérový vývoj sa diametrálne zmenil, hlavne za posledné mesiace. Od boomu AI v „developmente“ – ktorý sa datuje hlavne približne od januára 2026 –, keď veľa „developerov“, ktorí dovtedy ešte nič nepoužívali, začalo používať AI agentov na „development“. Odvtedy sa celý ten náš priemysel „shiftol“ úplne mimo toho, čo bolo predtým zaužívané. Teraz už veľmi málo ľudí pochybuje o tom, že kód sa už ručne písať nebude. Stále však platí, že momentálne AI nástroje vykazujú lepšie výstupy, ak fungujú ako predĺžená ruka profesionála – softvérového inžiniera, ktorý vie, ako s agentom čo najefektívnejšie komunikovať, aby dosiahol kvalitný výsledok.

Ruka v ruke s meniacim sa svetom musí ísť aj „QA space“ – čiže ľudia, ktorí sa starajú o kvalitu vyprodukovaného softvéru v tíme a berú za ňu zodpovednosť. S meniacim sa spôsobom konzumácie softvéru bude podľa mňa aj táto sféra ešte podliehať masívnym zmenám a profesia sa ešte viac „shapeshiftne“. Nateraz však nemôžeme snívať. Softvér stále používajú milióny ľudí, ktorí klikajú na „button“ a vypĺňajú polia. Ako teda momentálne takýto softvér čo najlepšie otestovať?

Rád by som tu zhrnul svoju víziu a zároveň aj to, čo a ako teraz robím ja na svojom projekte. Každý projekt má svoje špecifiká, no ten môj je podľa mňa momentálne dosť častým typom – aj čo sa týka zamerania produktu, aj technologického „stacku“, ktorý používame. Čo je to za projekt, opíšem o chvíľu, aby sme boli v obraze. Hneď na začiatok by som však rád podotkol, že na projekte momentálne fungujem v takej hybridnej úlohe – vo svojej AI kuchyni produkujem aj produkčný kód v appke, na ktorý si trúfam, a popritom sa starám aj o manuálny/automatizovaný „testing“ nášho projektu.

# Čo testujeme

Ide o AI „chatbota“ pre firmu v „legal space“. Zjednodušene ide o akýsi interný ChatGPT, do ktorého inkrementálne implementujeme nápady prichádzajúce z akéhosi „innovation“ tímu klienta. Technologicky ide o webovú aplikáciu v Next.js, pričom „backend“ beží v NestJS v ďalšom samostatnom repozitári. Potom máme ešte nejaké špecifické „add-ins“, z ktorých má každý vlastný repozitár („add-in“ do Wordu a Outlooku). Takisto sa dávnejšie implementoval aj vlastný „text processor“, ktorý pomáhal pri vytváraní RAG „pipelines“ v infraštruktúre, ktoré si môžu „useri“ podľa svojej vôle v našej appke vytvárať. „Frontend“ webovej appky a „backend“ sú teda v TypeScripte, v spomenutých „frameworkoch“ – a to je môj hlavný „focus“. Tam vyvíjam a dodávam najviac kódu, či už produkčného, alebo súvisiaceho s QA.

# Ako sme testovali

Poďme si najprv stanoviť nejaký „baseline“ – ako sa to robilo predtým, respektíve ešte celkom nedávno, pred pár mesiacmi. Väčšinou to prebiehalo tak, že manuálny „testing“ bol „per ticket“ alebo podľa vopred pripraveného scenára (regresné testy). Automatizované testy sa vytvárali buď na základe opravy chyby, alebo implementovanej „feature“. Prípadne v rôznom čase po implementácii – podľa toho, aký komplexný mal byť daný test a koľko komponentov v požadovaných verziách v ňom muselo fungovať. A koniec koncov aj podľa toho, aký tím testerov na teste pracoval – testy boli rôzne zložité podľa toho, na akej úrovni testovacej pyramídy boli implementované.

Čiže buď išlo len o manuálne vykonanie testovania testerom, ktoré zaberalo čas, hlavne ak zahŕňalo aj nejakú „investigáciu“, sledovanie dát v databáze, „cache“ a podobne. Takisto vývoj automatizovaného testu zaberal kopu času – vytvoriť test často trvalo aj tri dni alebo viac, podľa toho, o aký test išlo.

# Ako sa dá testovať teraz

Momentálne máme z môjho pohľadu tri druhy testovacích aktivít, ktoré vieme voľne kombinovať, pretvárať do hybridných podôb a implementovať ich do nášho pracovného „flowu“:

1. manuálny „testing“ človekom,
2. „test automation engineering“,
3. „AI agent-driven testing“.

Poďme si jedno po druhom rozobrať, akú úlohu zohrávajú v súčasnosti, následne ako sa dajú kombinovať a potom si dáme „reality check“.

## Manuálny „testing“

Konečným produktom je stále väčšinou aplikácia, v ktorej používateľ kliká a zadáva veci cez klávesnicu a myš, respektíve často s aplikáciou pracuje len cez mobilné rozhranie. Pointa však je, že konečný používateľ je stále ľudský organizmus a softvér vníma svojimi zmyslami. Kdesi v podcaste som počul, že „game design“, čiže to, aby bola počítačová hra zábavná, sa stále ťažko dosahuje pomocou „LLM codingu“, lebo konečný zážitok je niečo viac než súbor herných mechaník a ich grafického prevedenia. Je to čosi viac, čo hráčovi sedí – „feels good“. Toto sa podľa mňa dá v určitom zmysle aplikovať aj na klasický softvér, v našom prípade na webové aplikácie. Stále totiž zohráva veľkú úlohu to, aký pocit produkt vyvoláva a ako ľahko a dobre môže konečný používateľ využívať hodnotu, ktorú prináša.

Preto, kým budú softvér používať ľudia, je dobré, ak na konci testovacej stratégie stojí tester – reálny človek. Mal by sa sústrediť na veci, ktoré dávajú najväčší zmysel, čiže na najpoužívanejšie „features“ a rozhrania. Na to, čo je napríklad jadrom produktu. Dobrou stratégiou je pri práci na automatizácii testov a inštruovaní AI agenta k „testingu“ pýtať sa, čo má otestovať človek, a nechať AI vybrať oblasti, na ktoré sa má človek pozrieť. To už však predbieham hybridné metódy. Poďme k ďalšej aktivite.

## „Test automation“

„Test automation“ je lacná a treba ju robiť. Super je, že už ju málokedy treba písať ručne – treba však napísať, respektíve pripraviť pravidlá na to, aby sa efektívne generovala „sama“. Myslím tým využitie súboru AGENTS.md (alebo CLAUDE.md, či čohokoľvek, čo tím používa v repozitári či repozitároch) a zadefinovanie „baseline“ pre všetky úrovne testovacej pyramídy.

- Čiže na „backende“ vybrať „framework“ – napríklad v našom prípade Jest – a v AGENTS.md spomenúť, že **„unit“ testy** sú písané v Jeste a vždy, keď je to vhodné (keď proti tomu neexistuje pádny argument), vytvoriť popri oprave chyby alebo implementácii „feature“ nový „unit“ test.
- Stanoviť na „backende“, ako budú vyzerať **integračné testy**, a podobne inštruovať AGENTS.md.
- Pripraviť „setup“ pre **„end-to-end“ testy** – napríklad u nás v Playwrighte vo „frontendovom“ repozitári – a vo „frontendovom“ AGENTS.md spomenúť, že tu sú „end-to-end“ testy.

Človeku starajúcemu sa o automatizáciu testov potom ostane len určitá údržba tohto kódu, spúšťanie testov a analýza „reportov“. Áno, testy sa budú robiť samy. Ani pri „PR review“ vôbec nemusia byť tieto testy vo „focuse“ – zaberá to čas a „developeri“ by sa mali sústrediť na produkčný kód (kód aj v septembri 2026 stále „reviewujú“ „developeri“). Ak majú testy nejaké problémy, mal by ich udržiavať napríklad človek, ktorý sa bude v tíme venovať „testingu“ a ktorého čas bude trochu lacnejší.

Výhodou je, že pri oprave chyby alebo implementácii „feature“ „developer“ často nahromadí krásne množstvo relevantného kontextu k implementácii, na ktorej pracuje. Bolo by hriechom zahodiť túto príležitosť a neinštruovať pritom AI agenta, aby testy vygeneroval vo chvíli, keď presne vie, o čo ide. Keď to pridáme do „system promptu“ (AGENTS.md), „developer“ sa nemusí o nič starať a testy sa budú generovať samy.

## Testovanie AI agentom

Dostávame sa k bodu, ktorý už asi bude splývať s tým, ako tieto tri aktivity – manuálny „testing“, „test automation“ a testovanie AI agentom – kombinovať. Už sme si povedali, ako „developer“ navrhuje riešenie a v akom „setupe“ pre QA by sa mal nachádzať. Keď „ticket“ prejde cez „PR review“ – čo je podľa mňa stále dobrý „gate“ –, môže nasledovať akýsi „QA check“.

Tu sa dostávame k zlatému klincu programu. Nastáva moment, keď si tester môže vziať „ticket“ a spraviť komplexný „QA gate“ nad tým, čo sa implementovalo. Keď si vo svojom „harnesse“ napojí napríklad aj Jiru alebo Linear (podľa toho, čo tím používa), často stačí číslo „ticketu“ a ide sa na to:

> “Let's test TICKET-001. Test the implementation yourself, check what the test coverage is across all levels (unit, integration, e2e). Run all the E2E tests at the end of your testing to make sure it didn't mess anything up elsewhere in the system.”

Po správnom „setupe“ Playwrightu a prístupu k repozitárom aj Jire je AI agent často natoľko šikovný, že už bude vedieť, ako spraviť veľkú časť práce. Super je napríklad to, že Claude Code, ktorý používam, má „memory“. Okrem spoločných „system instructions“, ktoré používam, mám teda už aj značne veľkú „memory“ toho, čo som robil nedávno, a on čerpá aj z nej.

AI si vie natiahnuť „ticket“ a jeho opis, presné zmeny v kóde aj testy, ktoré sa implementovali... „You get the point.“ Claude Code je u mňa dostatočne múdry na to, aby si pripravil všetko, čo potrebuje – buď ide do „frontendu“ (cez „credentials“, ktoré používam v súbore Playwright `.env.test`), alebo spustí dočasné Docker „containery“ pre databázu či „cache“, prípadne si pripraví „script“ a vygeneruje dáta. V tejto dobe je úžasné niečo testovať. Na všetky hlúposti a „edge cases“, na ktoré sme museli myslieť, už teraz myslieť nemusíme.

# „Step back“

Toto všetko je pekné, ale realita u nás je napríklad taká, že všetky projekty – webový „frontend“, „backend“, „add-ins“ a „DevOps pipelines“ – sú v osobitných repozitároch. Žijú pod jednou strechou v Azure DevOps, ale medzi sebou nekomunikujú. Preto sme si pripravili nielen AGENTS.md v každom repozitári, ale aj ďalší AGENTS.md v lokálnom nadradenom „folderi“, do ktorého si „developer“ naklonuje všetky repozitáre. Ten hovorí o tom, čo majú spoločné a čo ktorý repozitár rieši. Svoj AI „harness“ (v mojom prípade Claude Code) si tak viem otvoriť v tomto nadradenom „folderi“ a AI skáče do projektov, do ktorých potrebuje.

Zatiaľ som si vytvoril ešte jeden „folder“ s ďalšími AI inštrukciami, ktoré mám len pre seba. Viac tam napríklad rozprávam o tom, aké testovacie vrstvy máme, aké sú konvencie názvov „ticketov“, „branchov“, „PRs“ či „descriptions“ celkovo. Alebo že nechcem veľa komentárov v kóde a podobne.

Pointa však je, že systém pozostáva z viacerých Git repozitárov. Ak chceme, aby AI agent vedel o všetkých, musíme ho pustiť do nejakého nadradeného „foldera“, v ktorom bude mať prístup ku všetkým, a zároveň mu dať kompaktné informácie o tom, čo je to za systém a čo má kde hľadať.

# QA „shiftuje“ k testovaniu ľudského vnímania produktu

Tu je vyústenie celého tohto textu – pri „testingu“ sa môžeme naozaj sústrediť na to, čo aj subjektívne vnímame ako dôležité. Povedal by som, že subjektivita testera teraz zohráva ešte väčšiu úlohu než kedysi. Už to nebude „boundary value analysis“ a podobné techniky. Tieto logické testy vygeneruje AI. Našou úlohou bude vcítiť sa do roly používateľa a používať softvér ako on. Možno by som aj povedal, že je čas, aby sa QA dostalo bližšie k „userom“.

<!-- language:en -->

Software development has changed dramatically, especially over the last few months. The AI boom in development dates mainly from around January 2026, when many developers who had not used anything like it before started using AI agents for development. Since then, our entire industry has shifted far beyond what used to be standard practice. Very few people now doubt that code will no longer be written by hand. However, AI tools still produce better results when they act as an extension of a professional—a software engineer who knows how to communicate with an agent as effectively as possible to achieve a high-quality result.

The QA space—the people who take care of and assume responsibility for the quality of the software produced by a team—must change along with the world. As the way we consume software changes, I believe this field will undergo further massive transformations and the profession will shapeshift even more. For now, however, we cannot merely dream. Software is still used by millions of people who click buttons and fill in fields. So how can we test this kind of software as effectively as possible today?

I would like to summarize my vision and explain what I currently do on my own project. Every project has its own specifics, but mine is a type that I think is quite common today, both in terms of the product's focus and the technology stack we use. I will describe the project shortly to provide some context. First, however, I would like to point out that I currently work in a hybrid role on the project: I also produce production code in my AI kitchen for the parts of the app I feel confident working on, while taking care of both manual and automated testing for our project.

# What we test

It is an AI chatbot for a company in the legal sector. Put simply, it is a kind of internal ChatGPT into which we incrementally implement ideas from the client's innovation team. Technically, it is a Next.js web application, while the backend runs in NestJS in a separate repository. We also have several specific add-ins, each with its own repository, including add-ins for Word and Outlook. Some time ago, a custom text processor was also implemented to help create RAG pipelines in the infrastructure, which users can configure in our app as they wish. The web app's frontend and backend are therefore written in TypeScript using the frameworks mentioned above. This is my primary focus and where I develop and deliver most of my code, whether production code or QA-related code.

# How we used to test

Let us first establish a baseline: how things were done before, or rather until quite recently, only a few months ago. Most of the time, manual testing was performed per ticket or according to a predefined scenario, such as regression tests. Automated tests were created either for a bug fix or an implemented feature. Alternatively, they were added at various points after implementation, depending on how complex a particular test was supposed to be and how many components in the required versions had to work in it. Ultimately, it also depended on which testing team worked on the test: tests varied in complexity according to the level of the testing pyramid at which they were implemented.

In some cases, this meant only manual testing performed by a tester, which took time, especially when it also involved investigation, monitoring data in the database or cache, and so on. Developing an automated test also took a lot of time—creating one often required three days or more, depending on the type of test.

# How we can test now

From my perspective, we currently have three types of testing activities that we can freely combine, reshape into hybrid forms, and incorporate into our workflow:

1. manual testing by a person,
2. test automation engineering,
3. AI agent-driven testing.

Let us examine them one by one, look at the role they play today, then explore how they can be combined, and finally do a reality check.

## Manual testing

The final product is still usually an application in which a user clicks and enters things using a keyboard and mouse, or often operates the application solely through a mobile interface. The point is that the end user is still a human organism who perceives software through the senses. I once heard in a podcast that game design—making a computer game fun—is still difficult to achieve through LLM coding because the final experience is more than a collection of game mechanics and their visual execution. It is something more, something that feels right to the player—it “feels good.” I believe this can also be applied, in a certain sense, to conventional software, including web applications in our case. The feeling a product creates still plays a major role, as does how easily and effectively the end user can access the value it provides.

Therefore, as long as people use software, it is good to have a tester—a real person—at the end of the testing strategy. They should focus on the things that matter most: the most frequently used features and interfaces, and whatever lies at the core of the product. While working on test automation and instructing an AI agent to perform testing, a good strategy is to ask what a human should test and let AI identify the areas a person should examine. But that takes us ahead to hybrid methods. Let us move on to the next activity.

## Test automation

Test automation is inexpensive, and we should use it. The great thing is that it rarely needs to be written manually anymore, although we still need to write—or rather prepare—the rules that allow it to generate itself effectively. By this, I mean using AGENTS.md (or CLAUDE.md, or whatever a team uses in its repository or repositories) and defining a baseline for every level of the testing pyramid.

- On the backend, choose a framework—Jest in our case, for example—and mention in AGENTS.md that **unit tests** are written in Jest and that a new unit test should be created alongside a bug fix or feature implementation whenever appropriate, unless there is a compelling reason not to do so.
- Define what **integration tests** should look like on the backend and instruct AGENTS.md accordingly.
- Prepare the setup for **end-to-end tests**—in our case, Playwright in the frontend repository—and mention in the frontend AGENTS.md that this is where the end-to-end tests live.

The person responsible for test automation will then only have to maintain this code, run the tests, and analyze the reports. Yes, the tests will create themselves. These tests do not even need to be the focus of PR reviews, because that takes time and developers should concentrate on production code. Developers still review code in September 2026. If the tests have problems, they should be maintained, for example, by someone on the team dedicated to testing whose time costs a little less.

The advantage is that while fixing a bug or implementing a feature, a developer often accumulates a wonderful amount of relevant context about the implementation they are working on. It would be a shame to waste this opportunity and not instruct the AI agent to generate tests while it knows exactly what is going on. Once we add this to the system prompt in AGENTS.md, the developer no longer has to worry about it, and the tests will generate themselves.

## Testing with an AI agent

We are now reaching a point that will probably blend into the question of how to combine all three activities: manual testing, test automation, and testing with an AI agent. We have already discussed how a developer engineers a solution and the QA setup in which they should operate. Once a ticket passes PR review—which I still consider a good gate—it can move on to a kind of QA check.

This brings us to the highlight of the process. This is the moment when a tester can take a ticket and perform a comprehensive QA gate on what has been implemented. If they connect Jira or Linear—whichever their team uses—to their harness, the ticket number is often all they need to get started:

> “Let's test TICKET-001. Test the implementation yourself, check what the test coverage is across all levels (unit, integration, e2e). Run all the E2E tests at the end of your testing to make sure it didn't mess anything up elsewhere in the system.”

With Playwright configured correctly and access to the repositories and Jira, an AI agent is often capable enough to work out how to complete a large part of the job. One great thing about Claude Code, which I use, is that it has memory. In addition to the shared system instructions I use, I have already built up a considerable memory of what I have done recently, and it draws from that as well.

AI can pull in the ticket and its description, the exact changes made to the code, and the tests that were implemented... You get the point. In my experience, Claude Code is smart enough to prepare whatever it needs. It either goes into the frontend using the credentials I keep in the Playwright `.env.test` file, starts temporary Docker containers for the database or cache, or prepares a script and generates data. Testing something today is amazing. We no longer have to think of every little detail and edge case that previously demanded our attention.

# Step back

All of this sounds great, but our reality, for example, is that every project—the web frontend, backend, add-ins, and DevOps pipelines—lives in a separate repository. They all reside under one roof in Azure DevOps, but they do not communicate with one another. That is why we prepared not only an AGENTS.md file in every repository, but also another AGENTS.md in the local parent folder where a developer clones all the repositories. It explains what the repositories share and what each one is responsible for. I can then open my AI harness—Claude Code in my case—in that parent folder, and the AI moves into whichever projects it needs.

So far, I have also created another folder containing additional AI instructions just for myself. There I provide more detail about our testing layers and the naming conventions for tickets, branches, PRs, and descriptions in general. I also note that I do not want many comments in the code, among other things.

The point is that the system consists of several Git repositories. If we want the AI agent to know about all of them, we need to let it operate from a parent folder where it has access to every repository, while also giving it concise information about the system and where to find things.

# QA is shifting toward testing the human perception of a product

This is where the whole argument leads: in testing, we can genuinely focus on what we subjectively perceive as important. I would say that a tester's subjectivity now plays an even greater role than it did in the past. The job will no longer be about boundary value analysis and similar techniques. AI will generate these logical tests. Our role will be to empathize with users and use the software as they do. I might even say that it is time for QA to move closer to users.
