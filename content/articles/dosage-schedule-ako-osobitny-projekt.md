Vychadzajuc z RxOps a z jeho problemov, ktore pri vyvoji stale viac vnimam, rozmyslam nad este striktnejsim zameranim sa na uzsi use case. Na stole je viacero problemov, ktore by som si tu rad polozil pisomne a zanalyzoval a nasledne by som rozobral, co za projekt by mal byt pokracovatelom a zrejme lepsim spin-offom sucasnej podoby RxOps

# Problemy
1. Cielena skupina zakaznikov - farmaceutov, nevie v momentalnom stave a kulture lekarenskej starostlivosti vyuzivat RxOps - velkym problemom je to, ze ako prebieha praca v lekarni. Pacient pride s receptom, resp. s problemom alebo konrketnym vyrobkom k tare a komunikacia prebieha rychlo. Dlzku rozhovoru moderuje farmaceut, no v praxi to vyzera tak, ze malokto sa zdrzi dlhsie. Povedia sa zakladne informacie a hotovo. Pustat AI agenta, ktormu trva momentalne stale nejaky cas vygenerovat dobru odpoved (nehovoriac o review medzikroku, ktory pri niektorych nastrojoch nastava) je dlhy + vstrebat farmaceutovi vyslednu analyzu tiez nieco trva. Predstavovat si, ze toto bude robit za tarou, kde mu cakaju v rade pacienti je hlupe. Bud sa musi cosi zmenit v lekarni - rola farmaceuta, resp. nejaky pocin, ktory vytvori priestor a cas v lekarni na prevedenie takejto konzultacie.

Stale je vo vzduchu to, zeby sa produkt dal pouzivat inym medicinskym odbornikom. Prvym vhodnym kandidatom/kandidatmi su vseobecny lekar a pediater. Kedze v slovenskej medicinskej praxi su to akysi vseobecny komuniaktori a posudzovaci zdravotneho stavu, ktory velmi casto pacientov posielaju k odbornikom. Su ale clankom, ktory ma informacie o celej liecbe pacienta, casto aj informacie komplexne o celej jeho anamneze.

2. Siroky zaber nastrojov - ano RxOps pekne zdruzuje len 3 scenare a nejdeme do generovania odpovede. No, aj tak je to vela na udrzbu a zabezpecenie kvality. Dobre by bolo sa zamerat a vymakat jeden jediny scenar.

3. Vacsia skupina zakaznikov - spravit nastroj pre verejnost dostupny na webe otvara vela moznosti a hlavne velku mnozinu ludi, ktori by mohli byt zakaznici. Ja ako farmaceut, si myslim, ze by som mohol rucit za kvalitu a bezpecnost takehoto nastroja, aj bez toho aby som daval tuto zodpovednost do ruk niekomu inemu, skrz pouzivanie mojho nastroja.

Hlavne budem viac odvazny toto bremeno na seba vziat, ak pojde o jeden pouzivatelsky scenar, ktory sa vymaka a pripravi, otestuje tak, aby bol co najviac bezpecny.


# Predstava
Technicky by slo o podobnu appku ako RxOps. Hlavne rozdiely by boli v tom, ze by sme uz podavali pouzivatelovi aj vystup jeho analyzy. Vobec b ysme nemuseli vytvarat nejaky user management. Predstavujem si jednorazovy poplatok, ktory by uzivatel zaplatil za jednu analyzu. Museli by sme sa ale prirpavit na to, ze kazda analyza musi mat hodnotny vystup po zaplateni - cize musime aj dobre overit a zvalidovat vstupy aby bolo jasne ze zadanie pre AI je zhruba tak aby dalo vysledok. Mozno by bolo fajn zakomponovat aj medzistupen - review ako mame teraz v RxOps. Lebo pouzivatel sa moze zmylit a nieco zadat nepresne a AI by mohla pred-analyzou tieto chyby zachytit. V cene jeden analyzy by mohla byt pred-analyza a potom hlavna analyza teda.

Jednorazovy poplatok a zaslanie analyzy sedi tomuto use case, lebo bezna populacia si nieco take bude ptorebovat spravit velmi sporadicky. Pri novej liecbe, pri zmene liecby, pri akutnom ochoreni - nikto nebude chciet platit ziaden subscription.

Co by mohol byt pekny pridavok je, ze by si mohli priplatit resp. mohlo by to byt stale sucastou produktu - ze by vysledny produkt pred odoslanim skontroloval farmaceut este a vedel by k tomu dat komentar. To ako by to kontroloval a aka tam je metodika, to by sme transparentne uviedli na stranke. Ale v jednoduchosti by spravil to zeby si to presiel a mozno aj dalsou AI analyzou presiel fakty ktore by sa mu intuitivne nezdali, resp. by boli zvlastne z nejakeho dovodu.

Cena analyzy by sa stanovila taka aby toto ludia chceli a myslim, si zeby to mohlo mat celkovo pozitivny ohlas a klientelu, kedze az doma ludia vacsinou v klude si vedia spisat a prejst ake lieky uzivaju, nie v rade v lekarni alebo v strese u lekara, kde je vela inych socialnych vplyvov naookolo.

Pouzivali by sme najlepsie modely - asi najskor GPT-6 Astra na zaciatok. Cena by tym padom bola vyssia, no jednorazove analyzy prihravaju tomu, ze bude najlepsie pouzit to najlepsie co mame. 

To ako bude vyzerat vystupna analyza mozme stanovit nejakym templatom, aby kazda analyza mala logo aplikacie a peknu stanovenu strukturu. Aby ked niekto uvidel ten report - vedel hned ze to je od nas. 

Testing a overovanie toho aky vystup ma nas nastroj by sme vymakali - pripravili by sa viacere rozne scenare, ktore by sme mohli testovat v roznych setting reasoningu a potom ked by prichadzali nove a nove modeli vedeli, by sme z toho vytvorit nejaky nas benchmark, ktory by hovoril o kvalite toho co produkujeme.

Super, by bolo mat nejaky backing od odbornych organizacii, alebo aspon odbornikov. Neviem, ci ja mam kvalifikaciu stale na to, aby som robili ten konfirmacny step na konci, kedze nie som v SLEKu a dlho som prec z praxe. Mozno by som mohol zapojit nejakeho spoluziaka alebo Meri do tohto. Ja vsak viem, ale efektivne pouzviat AI agentov, co mi vie pomoct premostit vedomostne medzery (resp. si to len myslim, ze som v tomto specialny a kazdy farmaceut by sa vedel rovnako dopytovat AI agenta :) ).

# Co prinesieme pacientovi
Hodnotu toho co prinesieme som uz vela krat pocitil v scenaroch nazivo v mojej rodine. Ked niekto uziva viacero liekov, casto sa uzivaju len ako ich napise lekar. No, kombinacia vaicerych lieciv, zivotospravy a specifickych diagnoz - su casto faktory, ktore prihravaju tomu aby pacient mal davkovanie optimalizovane a daval si pozor ako lieky uziva. V tomto by bola pridana hodnota nasej aplikacie - dodali by sme: 

1. hlavne krasny tabulkovy rozpis ako uzivat lieky pocas dna/tyzdna
2. volitelne by sme mohli pridat nejaky harok kde by si pacient vedel znacit na chladnicke magnetkou/nalepkou ci liek uzil
3. jedna strana by mohla byt s inforamciami k uzivaniu vo vseobecnom formate v bodoch na co si davat celkovo pozor a pod.

Co by sme robili, je ze by sme priniesli hodnotu toho co prinasa z casti klinicka farmacia v nemocniciach do domacnosti. Zvysila by sa bezpecnost uzivania tym ze bys em znizovali by sme vsykyt problemov s kotnraindikaciami a s liekovymi interakciami. Zvysovali by sme adherenciu k liecbe, kedze pacient by sa vytvorenim analyzy a pripravenim znacenia uzivania commitol k liecbe. 

Je to vlastne doplnenie zdravotnej starostlivosti - ktore na Slovensku chyba. Ano mozme to spravit najprv primarne pre Slovensko a tym ze sa zameriame len na tento trh, vieme kontrolovat ako aplikacia bude kvalitna a vieme uz od zaciatku zaradit do flowu aj kontrolu farmaceutom.

# Zaver
Tak ako som pisal ja nad dev blogu v (povodnom) RxOps - iterujeme. Clovek si casto mysli ze ten napad dnes je top a najlepsi. Ale toto je cesta. Kde ma koniec neviem, ale stale dalsia a dalsia stanica dava vacsi zmysel a som si isty ze raz zakotvime v nejakom zmysluplnom pristave.