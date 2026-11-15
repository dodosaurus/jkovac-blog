---
{
  "slug": "entry-generator",
  "order": 3,
  "client": "Protecht",
  "period": "2025",
  "stack": [
    "Next.js",
    "Node.js",
    "TypeScript",
    "REST APIs"
  ],
  "title": {
    "en": "Entry Generator: preparing ERM sites for testing",
    "sk": "Entry Generator: príprava ERM prostredí na testovanie"
  },
  "excerpt": {
    "en": "Testing an ERM system often starts with preparing the right data. I built Entry Generator so QAs and business consultants could populate Protecht environments themselves, including registers with different field configurations and business-unit hierarchies.",
    "sk": "Testovanie ERM systému sa často začína prípravou správnych dát. Entry Generator som vytvoril preto, aby si QA a business konzultanti vedeli sami naplniť prostredia Protechtu vrátane registrov s rôznymi poľami a hierarchií organizačných jednotiek."
  },
  "problem": {
    "en": "Before a test or a demonstration can begin, a Protecht ERM site needs data that makes the scenario meaningful. **Preparing larger datasets by hand** takes time, especially when registers have **different fields** and the setup also needs users or a hierarchy of business units. A generator therefore has to understand the **target site and its configuration**, rather than just produce a large number of random records.",
    "sk": "Skôr než sa začne test alebo ukážka, prostredie Protecht ERM potrebuje dáta, s ktorými má daný scenár zmysel. **Pripravovať väčšie množstvo dát ručne** zaberá čas, najmä keď majú registre **rôzne polia** a prostredie potrebuje aj používateľov či hierarchiu organizačných jednotiek. Generátor preto musí rozumieť **cieľovému prostrediu a jeho konfigurácii**, nestačí len vytvoriť veľa náhodných záznamov."
  },
  "solution": {
    "en": "I built a **Next.js application connected to the ERM API**, with a workflow that starts by validating the site and authenticating the user. For **register entries**, it discovers the available applications, registers and supported fields, then checks whether the requested data can be generated. Separate generators handle users and **configurable business-unit trees**, while the CSV section provides **import files in dependency order**. Contextual help is available in the tool itself, so the person preparing the environment can understand the options as they go.",
    "sk": "Vytvoril som **aplikáciu v Next.js napojenú na ERM API**, ktorej postup sa začína overením prostredia a prihlásením používateľa. Pri záznamoch zisťuje **dostupné aplikácie, registre aj podporované polia** a kontroluje, či sa požadované dáta dajú vygenerovať. Samostatné generátory riešia používateľov a **nastaviteľné stromy organizačných jednotiek**; CSV sekcia ponúka **importné súbory v poradí podľa ich závislostí**. Kontextová pomoc je priamo v nástroji, takže človek pripravujúci prostredie môže porozumieť možnostiam počas práce."
  },
  "media": [
    {
      "src": "/case-studies/entry-generator.png",
      "alt": {
        "en": "Entry Generator interface with available data-generation tools",
        "sk": "Rozhranie Entry Generatora s dostupnými generátormi"
      },
      "caption": {
        "en": "The main menu with the available generators.",
        "sk": "Hlavné menu s dostupnými generátormi."
      },
      "width": 3457,
      "height": 2490
    },
    {
      "src": "/case-studies/entry-generator-register-setup.png",
      "width": 1191,
      "height": 945,
      "alt": {
        "en": "Entry Generator register configuration with application, register and entry count",
        "sk": "Nastavenie Entry Generatora s aplikáciou, registrom a počtom záznamov"
      },
      "caption": {
        "en": "An earlier version: selecting an application, a register and the number of entries.",
        "sk": "Skoršia verzia: výber aplikácie, registra a počtu záznamov."
      }
    }
  ],
  "thumbnail": "/case-studies/entry-generator.png"
}
---
