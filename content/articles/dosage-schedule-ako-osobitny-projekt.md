---
schema: 1
slug: dosage-schedule-ako-osobitny-projekt
published: true
featured: false
published_at: "2026-09-17"
updated_at: "2026-09-17"
author: Jozef Kováč
title_sk: Rozpis užívania liekov ako samostatný projekt
title_en: A medication schedule as a standalone project
excerpt_sk: Úvaha o užšom zameraní RxOps na prípravu zrozumiteľného rozpisu užívania liekov pre pacientov.
excerpt_en: A reflection on narrowing the focus of RxOps to creating clear medication schedules for patients.
category_sk: Projekty
category_en: Projects
tags:
  - AI
  - pharma
  - RxOps
canonical_path: /blog/dosage-schedule-ako-osobitny-projekt
source_locale: sk
translation_en: ai-assisted
---

Pri vývoji RxOps si čoraz viac uvedomujem jeho problémy a rozmýšľam o ešte užšom zameraní. Chcem si ich tu spísať a premyslieť, aký projekt by mohol na RxOps nadviazať ako jeho samostatná odnož.

# Problémy

1. **Cieľová skupina.** Farmaceuti v súčasných podmienkach práce v lekárni nedokážu RxOps naplno využívať. Pacient príde k táre s receptom, problémom alebo konkrétnym výrobkom a rozhovor býva krátky. Jeho dĺžku síce ovplyvňuje farmaceut, no v praxi sa málokto zdrží dlhšie. Odovzdajú sa základné informácie a tým sa rozhovor končí. Spustiť AI agenta, počkať na kvalitnú odpoveď, prejsť medzikrokom kontroly, a potom ešte spracovať výslednú analýzu zaberie čas. Predstavovať si, že to farmaceut bude robiť pri táre, kým za pacientom stojí rad ďalších ľudí, je skoro hlúpe. Muselo by sa niečo zmeniť v úlohe farmaceuta alebo v organizácii práce lekárne, aby vznikol priestor na takúto konzultáciu.

Stále je otvorená možnosť, že by produkt mohli používať aj iní zdravotnícki pracovníci. Ako prví mi napadajú všeobecní lekári a pediatri. V slovenskej praxi často posudzujú celkový zdravotný stav pacienta a odosielajú ho k špecialistom. Zároveň mávajú prehľad o jeho liečbe a často aj o širšej anamnéze.

2. **Široký záber nástrojov.** RxOps síce združuje iba tri scenáre a nejde o všeobecné generovanie odpovedí, no aj to je veľa z hľadiska údržby a zabezpečenia kvality. Lepšie by bolo zamerať sa na jediný scenár a dôkladne ho vyladiť.

3. **Malá skupina zákazníkov.** Nástroj dostupný verejnosti na webe by otvoril viac možností a oslovil omnoho viac ľudí. Ako farmaceut si myslím, že by som dokázal prevziať zodpovednosť za kvalitu a bezpečnosť takéhoto nástroja bez toho, aby som ju prenášal na niekoho iného. Odvážnejšie by som k tomu pristúpil, keby išlo o jediný scenár použitia, ktorý by sme dôkladne pripravili a otestovali, aby bol čo najbezpečnejší.

# Predstava

Technicky by išlo o aplikáciu podobnú RxOps. Hlavný rozdiel by bol v tom, že výsledok analýzy by dostal priamo pacient (resp. osoba, ktorá by analýzu pre pacienta chcele urobiť). Nemuseli by sme zavádzať ani správu používateľských účtov. Predstavujem si jednorazový poplatok za každú analýzu. Po zaplatení však musí mať každá analýza hodnotný výstup. Preto by sme museli dôkladne overovať vstupy a uistiť sa, že zadanie pre AI obsahuje všetko potrebné na vytvorenie užitočného výsledku.

Možno by bolo dobré zaradiť aj medzikrok kontroly, podobný tomu, ktorý máme teraz v RxOps. Používateľ sa môže pomýliť alebo zadať niečo nepresne a AI by na to mohla upozorniť ešte pred samotnou analýzou. V cene by teda mohla byť predbežná kontrola zadania aj hlavná analýza.

Jednorazový poplatok sa na tento scenár hodí, pretože väčšina ľudí bude takúto analýzu potrebovať iba občas: pri novej liečbe, jej zmene alebo pri akútnom ochorení. Model predplatného sa určite na tento projekt nehodí. Sústavná potreba využívať projekt takéhoto typu, ale bude stále no rozstrúsená v populácií.

Zaujímavým doplnkom by mohla byť kontrola výsledku farmaceutom pred odoslaním, či už za príplatok, alebo ako súčasť služby. Farmaceut by mohol pridať aj vlastný komentár. Na stránke by sme transparentne opísali, ako kontrola prebieha a akou metodikou sa riadi. V praxi na našej strane by to vyzeralo asi tak, že farmaceut by si výsledok prešiel a sporné alebo nezvyčajné tvrdenia overil aj možno pomocou ďalšej AI analýzy.

Cenu by sme mali nastaviť tak, aby bola pre ľudí prijateľná. Myslím si, že služba by si mohla nájsť klientelu: doma si človek vie v pokoji spísať všetky lieky, ktoré užíva, a prejsť si ich. Pri táre v lekárni alebo v strese u lekára na to často nemá rovnaký priestor.

Používali by sme najlepšie dostupné modely, na začiatku možno GPT-6 Astra. Zvýšilo by to cenu, no pri jednorazovej analýze mi dáva zmysel použiť čo najkvalitnejší model.

Podobu výslednej analýzy by sme určili šablónou, aby mala každá správa jasnú štruktúru a logo aplikácie. Keď ju niekto uvidí, mal by hneď vedieť, že pochádza od nás.

Testovaniu a overovaniu výstupov by sme venovali veľa pozornosti. Pripravili by sme rôzne scenáre a skúšali ich pri odlišných nastaveniach uvažovania modelu. Keď by pribúdali nové modely, mali by sme vlastnú porovnávaciu sadu testov, ktorá by nám pomáhala hodnotiť kvalitu výsledkov.

Výborná by bola podpora odborných organizácií alebo aspoň jednotlivých odborníkov. Nie som si istý, či mám sám dostatočnú kvalifikáciu na záverečnú kontrolu, keďže nie som členom Slovenskej lekárnickej komory a už dlho som mimo praxe. Viem však efektívne používať AI agentov, ktorí mi pomáhajú dopĺňať vedomosti. Alebo si len myslím, že som v tom výnimočný a každý farmaceut by sa ich vedel pýtať rovnako dobre. :)

# Čo prinesieme pacientovi

Hodnotu, ktorú by takýto nástroj mohol priniesť, som už viackrát videl na príkladoch vo vlastnej rodine. Keď niekto užíva viacero liekov, často sa drží len pokynov, ktoré dostal od lekára. Kombinácia liekov, životného štýlu a konkrétnych diagnóz však môže ovplyvniť, ako je najvhodnejšie lieky užívať a na čo si treba dávať pozor. Naša aplikácia by mohla pripraviť:

1. prehľadný tabuľkový rozpis užívania liekov počas dňa a týždňa,
2. voliteľný hárok na zaznamenávanie užitých dávok, ktorý by si pacient mohol pripnúť napríklad na chladničku,
3. stránku so všeobecnými informáciami o užívaní liekov a stručným zoznamom vecí, na ktoré si dávať pozor.

Časť hodnoty, ktorú prináša klinická farmácia v nemocniciach, by sme tak mohli preniesť do domácností. Pomáhali by sme odhaľovať možné kontraindikácie a liekové interakcie, a tým prispievať k bezpečnejšiemu užívaniu liekov. Prehľadný rozpis a zaznamenávanie dávok by mohli podporiť aj dodržiavanie liečby.

Išlo by o doplnenie zdravotnej starostlivosti, ktoré mi na Slovensku chýba. Mohli by sme začať práve tu. Zameranie na jeden trh by nám pomohlo lepšie kontrolovať kvalitu aplikácie a už od začiatku zaradiť do procesu aj kontrolu farmaceutom.

# Záver

Ako som písal na vývojárskom blogu pôvodného RxOps, postupne projekt meníme. Človek si často myslí, že jeho dnešný nápad je ten najlepší. Aj toto je však súčasť cesty. Neviem, kde sa skončí, ale každá ďalšia zastávka mi dáva väčší zmysel. Verím, že raz zakotvíme v nejakom konečnom - zmysluplnom prístave.

<!-- language:en -->

As I develop RxOps, I am becoming increasingly aware of its problems and considering a narrower focus. I want to write them down, think them through, and explore what kind of standalone project could grow out of RxOps.

# Problems

1. **Target audience.** Under current working conditions in pharmacies, pharmacists cannot make full use of RxOps. A patient comes to the counter with a prescription, a problem, or a specific product, and the conversation is usually short. The pharmacist has some control over its length, but in practice few people stay much longer. The pharmacist gives the essential information, and the conversation ends. Starting an AI agent, waiting for a useful answer, going through an intermediate review step, and then digesting the resulting analysis all take time. Imagining a pharmacist doing all this at the counter while other patients wait in line is almost foolish. Something would have to change in the pharmacist's role or in how the pharmacy organizes its work to make room for this kind of consultation.

It is still possible that other healthcare professionals could use the product. General practitioners and pediatricians come to mind first. In Slovak practice, they often assess a patient's overall health and refer them to specialists. They also tend to have an overview of the patient's treatment and, often, a broader medical history.

2. **Too broad a set of tools.** RxOps covers only three scenarios and does not attempt to generate general answers, yet even that is a lot to maintain and quality check. It would be better to focus on one scenario and refine it thoroughly.

3. **Limited customer base.** A tool available to the public on the web would open up more possibilities and reach many more people. As a pharmacist, I think I could take responsibility for the quality and safety of such a tool without passing that responsibility to someone else. I would feel more comfortable doing so if it covered a single use case that we had carefully developed and tested to make it as safe as possible.

# The idea

Technically, it would be an application similar to RxOps. The main difference is that the patient, or someone requesting an analysis on the patient's behalf, would receive the result directly. We would not even need user account management. I imagine a one-time fee for each analysis. Once someone has paid, however, every analysis must produce something valuable. We would therefore need to validate the inputs carefully and make sure the request gives the AI everything it needs to produce a useful result.

It might also help to include a review step similar to the one we have in RxOps now. A user may make a mistake or enter something imprecisely, and the AI could flag it before the analysis itself. The price could therefore include an initial check of the request as well as the main analysis.

A one-time fee suits this use case because most people would need such an analysis only occasionally: when starting a new treatment, changing one, or dealing with an acute illness. A subscription model definitely does not suit this project. The need for a service like this would still be ongoing, but spread across the population.

Another useful addition could be a pharmacist's review of the result before it is sent, either for an extra fee or as part of the service. The pharmacist could add a comment, too. We would explain openly on the website how this review works and what method it follows. In practice, the review on our end would probably involve a pharmacist reading through the result and checking questionable or unusual claims, perhaps with the help of another AI analysis.

We would need to set a price people find reasonable. I think the service could find an audience: at home, people can calmly list all the medicines they take and go through them. They often do not have the same opportunity at a pharmacy counter or during a stressful doctor's visit.

We would use the best models available, perhaps GPT-6 Astra to begin with. That would increase the price, but for a one-time analysis I think it makes sense to use the highest-quality model we can.

We could define the format of the final analysis with a template so that every report has a clear structure and the application's logo. Someone seeing it should immediately recognize that it came from us.

We would put a lot of work into testing and checking the outputs. We could prepare a range of scenarios and run them with different model reasoning settings. As new models arrive, we would have our own set of comparative tests to help us assess the quality of their results.

Support from professional organizations, or at least from individual experts, would be excellent. I am not sure I have enough qualifications to do the final review on my own, since I am not a member of the Slovak Chamber of Pharmacists and have been away from practice for a long time. I do know how to use AI agents effectively, and they help me fill gaps in my knowledge. Or perhaps I only think that makes me unusual, and any pharmacist could ask them equally good questions. :)

# What we could offer patients

I have seen the potential value of a tool like this several times in my own family. When someone takes several medicines, they often simply follow the instructions they received from their doctor. But the combination of medicines, lifestyle, and specific diagnoses can affect the best way to take them and what precautions to keep in mind. Our application could provide:

1. a clear table showing when to take each medicine during the day and week,
2. an optional sheet for recording doses taken, which a patient could attach to the fridge, for example,
3. a page of general information about taking the medicines, with a short list of things to watch for.

In this way, we could bring some of the value of clinical pharmacy in hospitals into people's homes. We could help identify possible contraindications and drug interactions, contributing to safer medicine use. A clear schedule and a way to record doses could also help people stick to their treatment.

This would add a kind of support to healthcare that I feel is missing in Slovakia. We could start here. Focusing on one market would help us keep a closer eye on the application's quality and include a pharmacist's review in the process from the outset.

# Conclusion

As I wrote on the original RxOps development blog, we keep changing the project as we learn. It is easy to think that today's idea is the best one. But this, too, is part of the journey. I do not know where it will end, but each new stop makes more sense to me. I believe we will one day find a meaningful harbor and drop anchor for good.
