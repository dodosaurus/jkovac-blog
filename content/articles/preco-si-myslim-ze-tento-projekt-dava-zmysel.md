---
schema: 1
slug: preco-si-myslim-ze-tento-projekt-dava-zmysel
published: true
featured: true
published_at: "2026-09-05"
updated_at: "2026-09-05"
author: PharmDr. Jozef Kováč
title_sk: Prečo si myslím, že tento projekt dáva zmysel
title_en: Why I think this project makes sense
excerpt_sk: Cesta od prvých prototypov k RxOps a úvaha o tom, kde môže AI priniesť farmaceutovi skutočnú hodnotu.
excerpt_en: The journey from early prototypes to RxOps, and a reflection on where AI can bring real value to pharmacists.
category_sk: Projekty
category_en: Projects
tags:
  - AI
  - farmácia
  - RxOps
cover_image: /blog-assets/rxops-journey/materiamedica1.png
cover_alt_sk: Úvodná obrazovka prototypu Materia Medica
cover_alt_en: Opening screen of the Materia Medica prototype
canonical_path: /blog/preco-si-myslim-ze-tento-projekt-dava-zmysel
source_locale: sk
translation_en: ai-assisted
---

Možno si poviete, že tento projekt vznikol ako výsledok jedného večera a nejakého „brainstormingu“ s AI agentom. Pokiaľ ide o spôsob, nie ste ďaleko od pravdy. Časovo to však zďaleka nesedí. Cesta k tomuto bodu bola dlhá a skúšal som rôzne veci. Súčasná podoba RxOps je výsledkom viacerých prototypov a dlhého premýšľania nad tým, čo dáva zmysel a do čoho investovať svoj drahocenný čas.

# Nápad

Na začiatku stála jednoduchá otázka, ktorá je pre mňa dodnes ústredná:

> Ako zapojiť veľké jazykové modely (LLM) do pracovného postupu farmaceuta tak, aby to pôsobilo prirodzene a prinieslo reálnu hodnotu?

Postupne sa pridali ďalšie otázky, nad ktorými stále premýšľam:

- „Ako dosiahnuť, aby nový nástroj neodvádzal farmaceuta od osobnej odbornej konzultácie, ale naopak, aby ju podporoval a vylepšoval?“
- „Čo sa oplatí vyvinúť samostatne a ktorú časť pracovného postupu ponechať existujúcim špičkovým nástrojom?“
- „Ako docieliť čo najvyššiu spoľahlivosť a ako v takom regulovanom prostredí vysvetliť, že odpoveď AI sa môže pri rovnakom zadaní líšiť?“

Je toho ešte viac. Po ôsmich rokoch od odchodu z lekárne ma k tomuto projektu ťahá aj vnútorná túžba vrátiť sa k farmácii. V hlave mi už dlho zreje myšlienka, ako prirodzene podporiť odbornú úlohu lekárne a lekárnika, aby vyvažovala marketingové ťaženie súčasných (nielen) lekárenských sietí na Slovensku.

# Inšpirácia v právnom sektore

1. [Praktik AI](https://praktik.ai/) – slovenský startup, ktorý predáva špecializovaného AI chatbota pre právnikov (momentálne už aj kopu ďalších vedľajších produktov). Jeho pridanou hodnotou je priame napojenie na Zbierku zákonov SR a hlavne judikatúru (súdne rozhodnutia) – pôvodne si pamätám, že aj konkrétne spomínali na stránke, že je to spracované vo forme RAG.

2. Pre iného klienta pracujem vo väčšom tíme rovnako na vývoji chatbota pre právny sektor.

Právnici sú vďačnou cieľovou skupinou. Už teraz často trávia veľa času rešeršami a hľadaním relevantných zákonov. Sedia sami v kancelárii za počítačom a majú na to vyhradený dlhší čas na sústredenú prácu. Majú teda priestor aj na hlbšiu diskusiu s AI nástrojom. Napadlo mi, či by niečo podobné nesedelo aj do farmaceutického sektora. 

Ten zahŕňa viacero povolaní v rôznych prostrediach, pričom každé poskytuje iný priestor na prácu s AI. Určite existujú zaujímavé možnosti využitia napríklad vo farmaceutickom výskume, na špecializovaných pozíciách vo farmaceutických firmách, vo farmakovigilancii či pri klinických štúdiách. Rozhodol som sa však siahnuť po mne najbližšom povolaní a zamerať sa naň – na povolanie lekárnika, ktoré je asi aj najrozšírenejšie v povedomí verejnosti.

Rozhodnutie padlo na základe toho, že som približne dva roky pracoval na tejto pozícii a viem odhadnúť, ako priebeh práce vyzerá. Z toho vyplýva aj najväčšie úskalie, ktoré som mal od začiatku na pamäti, no nie vždy som mu venoval plnú pozornosť – farmaceut v lekárni má v tradičnom procese (klasická stručná dispenzácia lieku a poskytnutie základných informácií) málo času zapojiť AI hlbšie a nemá čas čakať na odpoveď. Aj tak som sa však rozhodol najprv skúsiť cestu, ktorá sa veľmi podobala Praktik AI, keďže som videl, ako to u nich funguje, a myslel som si, že pre farmaceutov to bude fungovať rovnako.

# Materia Medica – prvý projekt

![Úvodná obrazovka prototypu Materia Medica](/blog-assets/rxops-journey/materiamedica1.png)

Dátovým základom aplikácie mala byť zbierka súhrnov charakteristických vlastností liekov (SPC) pre všetky registrované lieky. SPC som získaval automatizovaným sťahovaním zo ŠÚKL-u a EMA. Dokumenty som potom priradil k registrovaným prípravkom v databáze a rozdelil na menšie časti. Pomocou lokálneho modelu na svojom hernom počítači s grafickou kartou som z nich vytvoril „embeddingy“ – číselné reprezentácie textu na vyhľadávanie relevantných pasáží. Tie slúžili ako kontext pri tvorbe odpovede AI v rámci prístupu RAG.

Do aplikácie som zakomponoval aj prehľadné vyhľadávanie vo všetkých registrovaných liekoch zo ŠÚKL-u. Nielen podľa obchodného názvu, ale aj podľa účinných látok. Toto vyhľadávanie fungovalo v osobitnej sekcii aplikácie, no najlepšie bolo, že používateľ mohol priamo cez vyhľadanie prepojiť lieky s promptom pre AI a zakomponovať ich do kontextu.

![Vyhľadávanie registrovaných liekov v Materia Medica](/blog-assets/rxops-journey/materiamedica2.png)

Postupne som pridal aj napojenie na MZ SR a kategorizáciu, takže každý liek, ktorý bol kategorizovaný, mal pod sebou v dátach aj aktuálny doplatok. V pláne bolo ešte pridať ďalšie prepojenia na PubMed alebo ScienceDirect.

![Odpoveď so zdrojmi v prototype Materia Medica](/blog-assets/rxops-journey/materiamedica3.png)

Po čase som však projekt nechal tak. Zo všetkých uvádzaných projektov som na ňom strávil asi najviac času. Pri testovaní aplikácie a premýšľaní nad jej použitím som však pochopil viacero vecí:

1. Vyvíjať systém, ktorý sa bude rovnať kvalite ChatGPT a ďalších špičkových nástrojov (Claude, Gemini), je pre samostatného vývojára náročné (aj pri vývoji riadenom AI).

2. Informácie, ktoré som spracúval v rámci RAG, si AI často dokázala vyhľadať a prečítať aj po jednoduchom nasmerovaní v prompte.

3. Ako sa to bude používať v lekárni? To mi najviac vŕtalo hlavou. Analýza trvala pridlho. Na dobré sa čaká, ale toto čakanie už bolo pre bežnú prácu v lekárni pridlhé.

Najmä prvý bod ma priviedol k nápadu na ďalší projekt. Ľudia už známe chatboty používajú a ich poskytovatelia ich priebežne vylepšujú. Prišlo mi preto výhodnejšie vybudovať nadstavbu, „plugin“, v ktorom by som sa mohol venovať hlavne promptom pre AI a kontextu. Práve v tom som videl hlavnú hodnotu projektu, nie vo vývoji a dizajne ďalšieho softvéru.

# ai-pharmacist – sada nástrojov pre Codex

Už pred projektom Materia Medica som na vývoj softvéru používal desktopovú aplikáciu Codex od OpenAI. Rozdiel oproti webovej aplikácii je ten, že si tam dokážete otvoriť lokálny priečinok a AI agent dokáže (rovnako ako iné programovacie nástroje, napríklad Claude Code či OpenCode) bez problémov a efektívne vytvárať, upravovať a mazať súbory, ktoré tam máte uložené. Dokáže používať nástroje príkazového riadka (CLI), ale aj napr. Docker a celkovo nástroje vášho počítača, ktoré nie sú priamo dostupné na webe (v cloude poskytovateľa) z rôznych príčin (napr. cena výpočtovej jednotky za operáciu, bezpečnosť a pod.).

Napadlo mi spraviť v tomto novozaloženom projekte súbor „skillov“ – to sú akoby špeciálne inštrukcie pre AI agenta zabalené do štandardizovaných súborov, ktoré môže AI agent podľa potreby použiť (nemusí; dá sa to aj zakázať a „skill“ môže vyvolať len zadávateľ). Pre zjednodušenie si predstavte kufrík s náradím a AI agent si podľa toho, čo vytvára, strieda „kladivo, pílku, meter…“.

„Skilly“, ktoré som spravil, pokrývali podobné veci, aké používala aj Materia Medica – verejne dostupné zdroje zo ŠÚKL-u, MZ SR, no tentoraz aj z NCZI, „skilly“ na čítanie vedeckých zdrojov, ale napr. aj na vizualizáciu medicínskej analýzy. Niektoré „skilly“ slúžili ako „orchestrátor“ – napr. `slovak-health-context` len rozdeľoval úlohy ďalším „skillom“, ktoré operovali so slovenskými dátami.

![Zoznam „skillov“ projektu ai-pharmacist](/blog-assets/rxops-journey/aipharmacist.png)

Zaujímavé bolo – a stále je, pretože projekt v mojom Codexe žije ďalej, že databázy (registrované lieky a pomôcky, kategorizácia, štatistiky z NCZI) boli na požiadanie agenta vytvárané a aktualizované v lokálnom projekte vo formáte SQLite. Čiže vždy, keď bolo potrebné použiť nejaké dáta, AI agent si zavolal skript v Pythone, ktorý na požiadanie aktualizoval lokálne dáta a na základe nich sa potom generovala odpoveď.

Úskalie tohto projektu je už, myslím, celkom zjavné: dostať ho k netechnickým používateľom – farmaceutom – by bolo náročné. Ak by cieľovou skupinou boli softvéroví inžinieri, stačilo by zdieľať verejný repozitár na GitHube. Potreboval som však niečo jednoduchšie, niečo intuitívnejšie. Z podstaty tohto projektu tiež vyplýva, že by toto nefungovalo vo webových rozhraniach. Fungovalo by to jedine v desktopových aplikáciách – a nechcel som vytvárať ďalšiu takúto bariéru pre farmaceuta.

# Lily – „plugin“ pre farmaceutický softvér

Od začiatku som zvažoval dve možnosti:

- dať farmaceutovi všeobecný nástroj v podobe chatbota, ktorý prijíma text, a nechať na ňom, ako ho využije,
- alebo pripraviť nástroj na konkrétnu odbornú úlohu, aby farmaceut musel čo najmenej premýšľať nad formuláciou zadania.

Tento nápad bol akási odbočka od hlavnej myšlienkovej línie, po ktorej som sa pohyboval, no zo začiatku som mu veľmi veril, aj keď v konečnom dôsledku vytvára problémy a bariéry, ktoré je náročné prekonať.

Ústrednou myšlienkou bolo vytvoriť niečo, čo bude farmaceutovi okamžite dostupné – aby sa nemusel nikde preklikávať a mohol ostať v aplikácii, v ktorej je najčastejšie, čo je rozhranie pokladne. V slovenskom prostredí sú to hlavne programy ako WinLSS, Apostar, NRSYS a pod. Chcel som, podobne ako Pharminfo (slovenská firma, ktorá má v portfóliu napr. adcc.sk), vyvinúť „plugin“ a ponúknuť ho výrobcom tohto softvéru.

Začal som vyvíjať serverovú časť v NestJS, ktorá by cez REST API vracala súbor dispenzačných odporúčaní – krátke body, ktoré by mali tvoriť základ konzultácie s pacientom. Vstupom mal byť obsah „košíka“, ďalšie užívané lieky, o ktorých by sa farmaceut dozvedel pri konzultácii, a anamnéza alebo dôležitý klinický kontext (už sa pomaly dostávam k tomu, čo má aj RxOps 🙂).

Pointa mala spočívať v tom, že ak farmaceutovi stojí v lekárni rad pacientov, nemá čas na to, aby čakal na dlhú analýzu. A toto má byť akási pomôcka alebo osnova na to, aby bol dispenzačný rozhovor kvalitnejší.

Projekt som však nechal v počiatočnom štádiu. Zháňať firemných zákazníkov (B2B), teda výrobcov lekárenského softvéru, bez kontaktov a skúseností mi pripadalo zložité. Niečo, čo bude plne pod mojou správou a zamerané priamo na koncových používateľov (B2C), by mi sedelo viac.

# Tete – vlastný server v NestJS a custom GPT

Projekt Tete je prvým pokusom upraviť ai-pharmacist tak, aby bol technicky dostupnejší aj pre netechnických používateľov.

Je to vlastne skoro to isté ako ai-pharmacist, no s využitím iných technológií. Lokálne databázy SQLite boli vymenené za mnou spravovaný server v NestJS a databázu Postgres, ktoré sú pravidelne napĺňané dátami z už spomínaných slovenských štátnych zdrojov. Používateľské rozhranie som zamýšľal spraviť ako „custom GPT“. Je to pomocou zopár inštrukcií a napojenia na externý zdroj (môj server v NestJS) vopred pripravené rozhranie pre ChatGPT, ktoré si vedel používateľ vyhľadať vo verejne dostupnej knižnici „custom GPTs“.

Áno, „vedel“. Počas toho, ako som projekt vyvíjal, v OpenAI zverejnili, že rušia verejné „custom GPTs“. „Custom GPT“ si už používatelia budú vedieť tvoriť len na súkromné použitie pre seba. Tým toto rozhranie pre mňa padlo.

OpenAI v súčasnosti vie fungovať aj cez systém „pluginov“ – no touto cestou som sa nevybral. Napadlo mi totiž čosi lepšie – a tu sa konečne dostávam k tomu, čo robím teraz.

# RxOps – vyústenie všetkých nápadov

A tu sa dostávam k tomuto projektu, ktorý určite nerieši na 100 % všetky problémy, ktoré som už spomenul v tomto texte. Je to ale podľa mňa to najlepšie, čo za posledné mesiace vzišlo z mojej vývojárskej kuchyne s AI.

Ide o platformu, ktorá rieši len tú časť AI analýzy, ktorú môžem najviac ovplyvniť – vstup. Celá aplikácia – používateľské rozhranie v Next.js a databáza v Supabase (kde uchovávam aktualizovaný zoznam registrovaných liekov synchronizovaný zo ŠÚKL-u) – slúži na to, aby farmaceutovi poskytla:

1. nápady, ako AI použiť,
2. rýchly a odborníkom pripravený dialóg na prípravu kontextu,
3. dôkladne zostavené inštrukcie pre AI, ktoré by inak musel zakaždým písať sám.

Následne s poskladaným promptom pre AI posielam farmaceuta preč z RxOps – čo je zámerná súčasť návrhu. Má to aj všeobecný úžitok, pretože veľa ľudí má už aj teraz predplatené prémiové verzie špičkových AI nástrojov. Neuzatváram ľudí v mojom ekosystéme; dávam im voľnosť vybrať si, čo použijú, lebo je toho na trhu veľa: Claude, ChatGPT, Gemini, hoci aj čínske open-weight modely alebo rôzni iní poskytovatelia.

Poskytujem nástroj na prípravu kvalitného promptu pre AI a priestor, kde vznikajú nápady na jeho užitočné využitie v praxi. Celý finálny prompt transparentne odovzdávam používateľovi – neskrývam ho ako obchodné tajomstvo. Za dôležitú považujem aj myšlienku pracovného priestoru, ktorú poznám z AI nástrojov na programovanie: vývojár vidí výstupy a môže riadiť svoj pracovný postup. RxOps má byť takýto pracovný priestor pre farmaceuta.

Predpokladám a zdôrazňujem, že konečnú podobu výsledku má v plnej moci zadávateľ. On je zodpovedný. Všetky karty dostáva do rúk. Podľa mňa sa aj pri vývoji s AI dosahujú najlepšie výsledky vtedy, keď profesionál využije AI na rozšírenie svojich schopností a nevzdá sa kontroly. A toto chcem priniesť aj v RxOps.

# Vízia

Smerovanie produktu sa bude určite meniť. Ukazuje mi to vývoj projektu za posledné mesiace aj to, ako rýchlo sa menia možnosti a dostupnosť AI nástrojov.

Vízia si určite zaslúži osobitný blogový článok, ktorý napíšem neskôr. V skratke by však malo ísť o projekt, ktorý farmáciu vylepší, a nie zmení. Moja túžba je, aby RxOps vylepšoval to, čo je v lekárni také cenné – priamy osobný kontakt pacienta s odborníkom. Je jedno, že prenosová kapacita obyčajnej ľudskej komunikácie nikdy nedosiahne rýchlosť, akou komunikujú počítače. Takáto komunikácia však v sebe nesie niečo hlbšie, čo sa ťažko pomenúva – možno empatiu, súcit či dobroprajnosť. Aj to môže popri vydaných liekoch prispieť k úspechu predpísanej farmakoterapie.

<!-- language:en -->

You might assume that this project came out of a single evening and some “brainstorming” with an AI agent. In terms of the method, you would not be far from the truth. In terms of time, however, that would be very wide of the mark. The journey to this point was long, and I tried many different things. The current form of RxOps is the result of several prototypes and a great deal of thought about what makes sense and where to invest my precious time.

# The idea

It began with a simple question that remains central to me today:

> How can I bring large language models (LLMs) into a pharmacist's workflow in a way that feels natural and delivers real value?

Other questions gradually followed, and I still think about them:

- “How can I make sure a new tool does not draw the pharmacist away from an in-person professional consultation, but instead supports and improves it?”
- “What is worth developing independently, and which part of the workflow should I leave to existing state-of-the-art tools?”
- “How can I achieve the greatest possible reliability and explain, in such a regulated environment, that an AI response may differ even when the input is the same?”

There is more to it than that. Eight years after leaving community pharmacy, an inner desire to return to pharmacy also draws me to this project. For a long time, I have been considering how to support the professional role of pharmacies and pharmacists in a natural way—one that provides a counterweight to the marketing drive of today's pharmacy chains and other retailers in Slovakia.

# Inspiration from the legal sector

1. [Praktik AI](https://praktik.ai/) is a Slovak startup that sells a specialised AI chatbot for lawyers (and, by now, quite a few related products). Its added value comes from a direct connection to the Collection of Laws of the Slovak Republic and, above all, case law. I recall that its website originally said explicitly that this was implemented using RAG.

2. For another client, I also work as part of a larger team developing a chatbot for the legal sector.

Lawyers are a natural target audience. They already spend a great deal of time researching and looking for relevant legislation. They sit at a computer in an office, often alone, and can set aside a longer period for focused work. That gives them room for a deeper discussion with an AI tool. I wondered whether something similar might also suit the pharmaceutical sector.

The sector includes several professions in different settings, each offering different opportunities for working with AI. There are certainly interesting applications in pharmaceutical research, specialised roles in pharmaceutical companies, pharmacovigilance, and clinical trials. I decided, however, to focus on the profession closest to me: the pharmacist, probably also the role with which the public is most familiar.

I made this choice because I worked as a pharmacist for approximately two years and can judge what the work looks like. That experience also revealed the biggest obstacle—one I had in mind from the start but did not always give my full attention. In a traditional pharmacy process, involving a brief handover of a medicine and basic information, a pharmacist has little time to engage deeply with AI and cannot wait long for a response. Even so, I first tried an approach very similar to Praktik AI. I had seen how it worked for lawyers and thought it might work just as well for pharmacists.

# Materia Medica—the first project

![Opening screen of the Materia Medica prototype](/blog-assets/rxops-journey/materiamedica1.png)

The application's data foundation was intended to be a collection of summaries of product characteristics (SmPCs) for every registered medicine. I obtained the SmPCs through automated downloads from the Slovak State Institute for Drug Control (ŠÚKL) and the European Medicines Agency (EMA). I then matched the documents to registered products in a database and split them into smaller sections. Using a local model on my gaming computer's graphics card, I turned them into embeddings—numerical representations of text used to find relevant passages. These passages provided context for AI responses through a retrieval-augmented generation (RAG) approach.

I also built a clear search across all medicines in the ŠÚKL registry, covering not only brand names but active substances as well. The search had its own section in the application, but its best feature was that users could find medicines and connect them directly to an AI prompt, incorporating them into its context.

![Search across registered medicines in Materia Medica](/blog-assets/rxops-journey/materiamedica2.png)

I gradually added a connection to the Slovak Ministry of Health and its reimbursement classification, so every classified medicine also included its current patient co-payment. I planned to add further connections to PubMed or ScienceDirect.

![A sourced response in the Materia Medica prototype](/blog-assets/rxops-journey/materiamedica3.png)

After a while, however, I set the project aside. Of all the projects discussed here, I probably spent the most time on this one. Testing the application and thinking about its use taught me several things:

1. For an independent developer, building a system that matches the quality of ChatGPT and other leading tools such as Claude and Gemini is difficult, even with AI-assisted development.

2. AI could often find and read the information I was processing through RAG after receiving only simple directions in the prompt.

3. How would this actually be used in a pharmacy? That was the question that bothered me most. The analysis took too long. Good things may take time, but this was too slow for ordinary pharmacy work.

The first point in particular led me to the next project. People already use well-known chatbots, and their providers continually improve them. It therefore seemed more useful to build an extension—a “plugin”—where I could focus mainly on AI prompts and context. That was where I saw the project's main value, not in developing and designing yet another piece of software.

# ai-pharmacist—a set of tools for Codex

Even before Materia Medica, I used OpenAI's Codex desktop application to develop software. Unlike a web application, it lets you open a local folder and allows an AI agent—like other programming tools such as Claude Code or OpenCode—to create, edit, and delete the files stored there efficiently. It can use command-line tools, Docker, and other tools on your computer that are unavailable directly on the provider's website or cloud for reasons such as computing cost or security.

In this new project, I decided to create a set of “skills”. These are specialised instructions for an AI agent, packaged in standardised files that the agent can use when needed. Their use can also be disabled, leaving only the user able to invoke a particular skill. To simplify the concept, imagine a toolbox from which the AI agent selects a hammer, saw, measuring tape, or another tool according to the job at hand.

The skills I created covered areas similar to Materia Medica: public sources from ŠÚKL and the Slovak Ministry of Health, this time joined by the National Health Information Centre (NCZI); skills for reading scientific sources; and even one for visualising a medical analysis. Some served as orchestrators. For example, `slovak-health-context` only delegated tasks to other skills that worked with Slovak data.

![The list of skills in the ai-pharmacist project](/blog-assets/rxops-journey/aipharmacist.png)

One interesting feature was—and still is, because the project remains active in my Codex workspace—that the agent created and updated databases of registered medicines and medical devices, reimbursement data, and NCZI statistics on demand as SQLite files in the local project. Whenever data was needed, the AI agent ran a Python script that refreshed the local data and then used it to generate the response.

The drawback is probably clear by now: getting this project into the hands of non-technical users—pharmacists—would be difficult. If software engineers were the target audience, sharing a public GitHub repository would be enough. I needed something simpler and more intuitive. The project's nature also meant it would not work in a web interface. It would work only in desktop applications, and I did not want to create another barrier for pharmacists.

# Lily—a “plugin” for pharmacy software

From the beginning, I considered two options:

- give the pharmacist a general-purpose chatbot that accepts text and let them decide how to use it;
- or prepare a tool for a specific professional task, so the pharmacist has to spend as little time as possible thinking about how to phrase the request.

This idea was a detour from my main line of thought. Initially, I believed in it strongly, even though it ultimately created problems and barriers that would be difficult to overcome.

The central idea was to create something immediately available to the pharmacist, with no need to navigate elsewhere: they could remain in the application they used most often, the point-of-sale interface. In Slovakia, that mainly means software such as WinLSS, Apostar, and NRSYS. Following an approach similar to Pharminfo, a Slovak company whose portfolio includes adcc.sk, I wanted to develop a “plugin” and offer it to the makers of this software.

I began developing a server application in NestJS. Through a REST API, it would return a set of dispensing recommendations: short points intended to form the basis of a consultation with a patient. Its inputs would be the contents of the “basket”, other medicines that the pharmacist learned about during the consultation, and the patient's medical history or other important clinical context. At this point, the concept was already getting close to what RxOps offers today. 🙂

The point was that when a queue of patients is waiting in the pharmacy, a pharmacist does not have time for a lengthy analysis. This was meant to be an aid or outline for a better dispensing conversation.

I left the project at an early stage, however. Without contacts or experience, finding business customers (B2B)—the makers of pharmacy software—seemed difficult. Something fully under my control and aimed directly at end users (B2C) suited me better.

# Tete—my own NestJS server and a custom GPT

Tete was my first attempt to adapt ai-pharmacist so that it would be technically accessible to non-technical users as well.

It was almost the same as ai-pharmacist, but used different technologies. I replaced the local SQLite databases with a NestJS server under my control and a PostgreSQL database, regularly populated with data from the Slovak government sources mentioned earlier. I intended to use a custom GPT as the user interface. With a short set of instructions and a connection to an external source—my NestJS server—it provided a preconfigured ChatGPT interface that users could find in the publicly available library of custom GPTs.

Yes, “could”. While I was developing the project, OpenAI announced that it was discontinuing public custom GPTs. Users would only be able to create a custom GPT for their own private use. That removed the interface on which my plan depended.

OpenAI can currently also work through a system of “plugins”, but I did not take that route. I had thought of something better—and this finally brings me to what I am building now.

# RxOps—the culmination of all these ideas

This brings me to the current project. It certainly does not solve every problem I have mentioned in this article, but I believe it is the best thing to emerge from my AI development workshop in recent months.

It is a platform that addresses only the part of AI analysis that I can influence most: the input. The entire application—the Next.js user interface and the Supabase database, where I keep an updated list of registered medicines synchronised from ŠÚKL—is designed to give pharmacists:

1. ideas for using AI;
2. a quick, professionally prepared dialogue for assembling context;
3. carefully written instructions for AI that they would otherwise have to write themselves every time.

Once the AI prompt is assembled, I send the pharmacist away from RxOps. That is an intentional part of the design. It also offers a broader benefit, because many people already subscribe to premium versions of leading AI tools. I do not lock people into my ecosystem; I give them the freedom to choose what they use. The market offers plenty of options: Claude, ChatGPT, Gemini, Chinese open-weight models, and many other providers.

I provide a tool for preparing a high-quality AI prompt and a place where ideas for useful applications in practice can emerge. I present the complete final prompt to the user transparently instead of hiding it as a trade secret. I also consider the concept of a workbench important. I know it from AI programming tools, where developers see the outputs and can control their workflow. RxOps is intended to be that kind of workbench for pharmacists.

I assume and emphasise that the person making the request has full control over the final form of the result. They are responsible for it and hold all the cards. In my experience, AI-assisted development also produces the best results when a professional uses AI to extend their abilities without giving up control. That is what I want to bring to RxOps.

# Vision

The direction of the product will certainly change. The project's development over recent months—and the rapid evolution and availability of AI tools—has already shown me that.

The vision deserves its own blog article, which I will write later. In short, however, I want this project to improve pharmacy, not transform it into something else. I want RxOps to strengthen what is so valuable in a pharmacy: direct, personal contact between a patient and a professional. The bandwidth of ordinary human communication may never match the speed at which computers communicate. Yet human communication carries something deeper that is difficult to name—perhaps empathy, compassion, or goodwill. Alongside the medicines dispensed, that human quality can also contribute to the success of prescribed pharmacotherapy.
