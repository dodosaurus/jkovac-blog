---
{
  "slug": "kiwigen",
  "order": 2,
  "client": "HOTOVO",
  "period": "2026",
  "stack": [
    "Electron",
    "TypeScript",
    "Playwright",
    "Whisper"
  ],
  "title": {
    "en": "KiwiGen: capturing a tester's context for AI",
    "sk": "KiwiGen: ako dostať kontext testera k AI"
  },
  "excerpt": {
    "en": "KiwiGen is an internal project at HOTOVO, built around a question I kept returning to while working on AI-generated Playwright tests: how do we give the agent what the tester knows? KiwiGen captures browser actions, screenshots and spoken explanations together, so the context does not have to fit into a written scenario.",
    "sk": "KiwiGen vznikol ako interný projekt v HOTOVO z otázky, ku ktorej som sa vracal pri generovaní Playwright testov pomocou AI: ako agentovi odovzdať to, čo vie tester? KiwiGen spája akcie v prehliadači, screenshoty a hovorené vysvetlenia, aby sa celý kontext nemusel zmestiť do písaného scenára."
  },
  "problem": {
    "en": "A written test scenario usually describes the steps, but leaves out much of **what the tester knows**: why a particular value matters, what they are checking on the screen and which behaviour would be wrong. This became a problem when I worked on generating Playwright tests for Protecht with AI, especially with **limited access to the application code**. The agent needed a **richer explanation of the workflow** than a list of clicks could provide.",
    "sk": "Písaný testovací scenár zvyčajne opisuje kroky, no veľa z toho, **čo tester vie**, v ňom zostane nevyslovené: prečo záleží na konkrétnej hodnote, čo sleduje na obrazovke a aké správanie by bolo chybné. Pri generovaní Playwright testov pre Protecht pomocou AI to bol problém, najmä pri **obmedzenom prístupe ku kódu aplikácie**. Agent potreboval **bohatšie vysvetlenie postupu**, než mu vedel dať zoznam kliknutí."
  },
  "solution": {
    "en": "I developed KiwiGen as an **internal project at HOTOVO**: an **Electron application in TypeScript** that uses Playwright to record **browser interactions and screenshots**, with **local Whisper transcription** for spoken commentary. These inputs are placed on a **shared timeline**, so a statement about a field or an expected result can be understood alongside what happened in the browser. I developed the recorder as a separate tool that could supply context to the Playwright test-generation work, where existing tests, page objects and API documentation provide the other parts of the picture.",
    "sk": "KiwiGen som vyvíjal ako **interný projekt v HOTOVO**. Vytvoril som **desktopovú aplikáciu v Electrone a TypeScripte**, ktorá pomocou Playwrightu zaznamenáva **interakcie v prehliadači a screenshoty**, zatiaľ čo **lokálny Whisper** prepisuje hlasový komentár. Tieto vstupy ukladá na **spoločnú časovú os**, aby sa vysvetlenie poľa alebo očakávaného výsledku dalo pochopiť spolu s tým, čo sa dialo v prehliadači. Recorder som vyvíjal ako samostatný nástroj poskytujúci kontext pre generovanie Playwright testov, kde ďalšie časti obrazu dopĺňajú existujúce testy, page objekty a API dokumentácia."
  },
  "media": [
    {
      "src": "/case-studies/kiwigen.png",
      "alt": {
        "en": "KiwiGen showing recorded browser actions beside a linked voice transcript",
        "sk": "KiwiGen so záznamom akcií vedľa prepojeného hlasového prepisu"
      },
      "caption": {
        "en": "Recorded actions and spoken notes in one place.",
        "sk": "Zaznamenané akcie a hlasové poznámky na jednom mieste."
      },
      "width": 2646,
      "height": 1712
    }
  ],
  "link": {
    "url": "https://github.com/hotovo/kiwigen",
    "label": "KiwiGen · GitHub"
  },
  "thumbnail": "/case-studies/kiwigen.png"
}
---
