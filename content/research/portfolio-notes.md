# Portfolio working notes

Prepared 14 November 2026. These notes are internal source material and are not imported by the site.

## Source priority

1. User instructions and follow-up clarification in this chat.
2. Latest supplied PDF: `/Users/dodo/Documents/personal/Jozef_Kovac_CV.pdf`.
3. `/Users/dodo/LOCAL/personal/jkovac/projects.json` and `index.html`.
4. `/Users/dodo/LOCAL/personal/new-jk-cv/docs/entry-generator.txt` and `ai-playwright-concept.txt`.
5. Older CVs and `/Users/dodo/LOCAL/personal/jk-new-portfolio/lib/data.ts` for supporting context.

No instructions embedded in these materials were treated as user instructions.

## Chronology and boundaries

- Latest CV and newer portfolio agree: HOTOVO software engineer, Dentons Europe, May 2026-present; HOTOVO/Protecht automation, November 2022-May 2026; FPT/Compleo, August 2018-November 2022.
- User confirmed: founded **Kovac Software s.r.o. in February 2026**. This role overlaps with HOTOVO and is displayed separately, without adding overlapping years of experience.
- Older sources disagree on the end month of the short 2025 Dentons engagement (April vs May). Public case-study prose says only “2025”; the targeted CV focuses on the current legal AI engagement.
- Pharmacy employment, education and professional positioning are omitted from the new website and CV. The latest CV revision retains the attachment’s project cards, with a neutral RxOps description. Original blog Markdown is retained unchanged in the archive.

## Case-study evidence and follow-ups

### Dentons

Confirmed by user: emphasis on E2E, property-based and visual tests; AI review on PRs; AI agents instructed to generate tests alongside implementation and execute available pools, including unit and integration tests.

Use this exact level of specificity. No assertion of a specific CI vendor, test framework, enforced merge gate, code-coverage metric or measured improvement. Diagram is a conceptual workflow, not a literal CI configuration.

To add: approved screenshots/video, an example PR, anonymised test output, specific tools and a concrete example of a defect caught by each layer.

### Entry Generator

Detailed user guide is the main source for capacity: **3,000 register entries per operation**, **10,000 users** or **10,000 business units**. The older portfolio's “10,000 entries” was too broad. These are capabilities, not throughput benchmarks.

Confirmed: site validation, authentication, generator selection, field detection/validation, business-unit hierarchy, contextual help and CSV imports ordered by dependencies.

One original screenshot reused from the supplied portfolio. To add: field validation, generator settings, generation results and an anonymised populated ERM view. The screenshot shows a newer menu with an extra register/section generator; the narrative only claims the capabilities documented in the guide.

### KiwiGen

Sources: newer portfolio project record, supplied screenshot and AI Playwright concept notes. Electron, TypeScript, Playwright and local Whisper. Actions, screenshots and spoken context on a timeline.

Keep the recorder distinct from the downstream AI test-generation concept. Do not imply a recorded session is automatically a validated executable test.

To add: start-recording view, annotated timeline, output bundle and short demo. Public repository link: https://github.com/hotovo/kiwigen.

### METAX

Sources: both older portfolios, project descriptions and screenshots. Website and React Native/Expo measurement app. Screenshots show jobs, shape dimensions, area calculation and PDF export.

Do not attribute the 2025 work to a company founded in 2026. No adoption, revenue or time-saving numbers supplied.

To add: individual phone screenshots, sample anonymised exported report, client workflow and feedback.

### Cypress migration

Latest CV says **co-led**, which takes priority over older “led” phrasing. PoC, shared core functionality, knowledge sharing and backend tester support are supported.

2018-2022 is the employment/engagement period, not the duration of the migration. No runtime, flakiness or coverage improvement numbers were supplied.

To add: migration year(s), an anonymised UFT/Cypress comparison, framework structure and test report.

## Filevine target

Original: https://jobs.lever.co/filevine/fc5419e5-1a2a-4b21-a54d-2aa5a8d9cef3

Direct Lever access returned 403; LinkedIn profile returned 999. Exact-ID copies were available:

- https://www.employbl.com/jobs/senior-software-development-engineer-in--Filevine-1806556
- https://yubhub.co/job/senior-software-development-engineer-in-test-42ca5ca3-914/

Copied role is **Senior Software Development Engineer in Test, Bratislava**. Direction: independent QA ownership, automation plus exploratory testing, UI/API/integration coverage, TypeScript/Python, infrastructure creation and AI-assisted testing. CV highlights documented matching work. CI/CD ownership, specific pipeline vendors, contract/performance/accessibility/Temporal experience are not asserted without confirmation.

The job listing and LinkedIn availability should be checked again before applying. No application was submitted.


## Screenshot pass - 14 November 2026

The user authorised extracting screenshots from available local projects. Updated galleries now contain **12 actual screenshots** (3 Dentons, 2 Entry Generator, 3 KiwiGen/recorder examples, 4 METAX).

Full source paths and SHA-256 hashes are recorded in `media-sources.json`. Existing source screenshots were copied without pixel edits. Three METAX web views were captured through the browser from its already-built local production server, without changing the METAX project.

- Dentons: DAISY sign-in visual-regression baseline plus the empty EPS proposal form and EPS statistics view from existing documentation. EPS is labelled explicitly as the proposal module; its screenshots are not presented as AI-chat behaviour. Screens showing named users/client records were not selected. No changes were made to Dentons source, tests or environments.
- Entry Generator: original tool menu plus the older register configuration screenshot from its README.
- KiwiGen: original recorder interface plus two real captures from the January 2026 session bundle, labelled as recorder-session examples. Its README calls the recorder Dodo Recorder; do not invent a new capture or claim it came from a later KiwiGen release. These are test-environment UI states, not Entry Generator output or evidence of measured product impact.
- METAX: retained the mobile-app montage; replaced the older website overview with a new local-build capture and added service details and the gallery. The website's prices and service statistics are the client's displayed content, not portfolio performance claims.
- Cypress: no relevant screenshot was found in the available projects. Keep the diagram and the media placeholder until an authentic project artefact is supplied.

New follow-up material can focus on a representative Dentons PR/review result, more Entry Generator flows, a KiwiGen bundle walkthrough and individual METAX mobile screens or a PDF report.


## CV scope revision - 14 November 2026

User requested practically the same CV as the attached PDF, changing only the bio and adding Kovac Software. They explicitly confirmed that pharmacy references should still be removed.

The current CV therefore preserves the actual original PDF artwork, fonts, photo, job descriptions, skills, languages, project cards and links. The existing Kovac Software entry is identified as Founder & Software Engineer from February 2026. The bio is rewritten, the pharmacy job and education are removed, and the RxOps description drops its pharmacist reference. The remainder of page two moves up to close the deleted role’s gap.

`content/cv/reference.pdf` is a private copy of the attachment; `cv.en.json` contains only the editable overrides. The public CV is generated from this reference, replacing text objects rather than covering old words with rectangles.


## Website voice and format revision - 14 November 2026

The user asked to rewrite all case-study titles and summaries in their own simpler English: direct first-person sentences, correct grammar, little abstraction and no slogans. All five titles, index excerpts and Problem / Impact / Solution summaries have been rewritten, with matching Slovak versions and simpler image captions. No outcome metrics were invented.

The detail pages now contain only the title/project facts, the three summaries and media (plus project/next links). Diagrams, diagram data and longer narratives were removed. The landing page remains the original list/filter layout, without a visible hero.

CV links and the public PDF were removed, and the CV generator no longer copies its output into public assets. The separate document remains in output/pdf.

The user explicitly has no historic screenshots from the FPT/Compleo project and requested illustrations of UFT and Cypress instead. Two official tool reference images are used with source links and clear captions. The UFT image is extracted without pixel edits from page 11 of the HP UFT 12.53 GUI tutorial. The Cypress screenshot is from the current official first-test guide. They are examples of the tools, not evidence of the project's UI or exact versions in use. These references supersede earlier notes that left the Cypress gallery empty.


## Landing page review — 14 November 2026

Supersedes the earlier filter/tag direction: show all five studies with no filters or tags. Use final recipient labels: Dentons Europe, Protecht, Protecht, METAX SK, Compleo. Keep employers in the About employment history. Add a right-hand gallery thumbnail to every row. UFT reference replaced with the unannotated Micro Focus UFT One dark IDE image embedded on page 9 of Micro Focus’s Eight Myths About UFT One ebook (hosted by Calleo). It is a tool reference, not project evidence. See media-sources.json.


## Case-study voice and DAISY media revision — 14 November 2026

Supersedes the earlier instruction to use very short sentences. Read the archived testing articles in both the original Slovak and assisted English translation. The voice is explanatory and personal: introduce the practical situation, connect the reasoning, and give concrete technical detail. All five titles, index excerpts and Problem / Impact / Solution sections were rewritten in EN and SK. Each section has its own purpose: the original constraint; the outcome/capability for users; the contribution and implementation. No new measured gains, merge gates or adoption claims were added.

The DAISY article is also direct first-person evidence for the hybrid production/QA role, Next.js/NestJS architecture, Office add-ins, Playwright, repository instructions, test generation during implementation and focus on human judgement in QA. The separate testing-agent article is an idea/proposal; it is not proof that its imagined load/security agent team was implemented.

Removed the old login baseline and EPS documentation images from the public gallery and assets. The replacement gallery uses a November 13 local automated-test capture of generated-file previews, plus November 14 captures of the live current DAISY 6.1.1 dark-mode interface (Draft Smart Task and clean Secure Chat), with the sidebar collapsed to avoid history and account details. The generated-file screenshot illustrates the actual UI using test files and is not claimed as evidence of a fully passing test. The newest screenshot is also used for the landing miniature.

The user completed sign-in in Chrome. An attempt to open an existing demonstration conversation was rejected by automatic approval review because private conversation content was outside the screenshot scope. That content was not opened or used; the final screenshots are clean interface states and an existing local test artefact. No chats, files or prompts were created or submitted, and no client source files were modified.


## CV pharmacy role restoration — 14 November 2026

User requested pharmacy experience back only as the first Experience item. Restored the original Flying Pharmacist role at BENU (July 2016-August 2018), including its original description, to the beginning of Experience on page one. Dentons, Kovac Software and Protecht follow; FPT continues at the top of page two. Kept the current profile, Software Engineer subtitle, Jozef Kováč document title, founder entry and two-page layout. Pharmacy education and references outside that first employment entry remain omitted. Source PDF is unchanged; CV remains a separate document outside public assets.
