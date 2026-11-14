# Case study copy for review

English text from the website, revised against the archived blog posts. Edit the source files in `content/case-studies/` when changing the site.

## DAISY: development and QA for a legal AI platform

Dentons Europe | 2026

**List description**

On DAISY, I combine production development with QA ownership. The interesting part is making tests and AI-assisted validation part of implementation, while keeping room for the things a human still needs to check.

**Problem**

DAISY is an internal AI platform for Dentons, where ideas from the client's innovation team become features for legal work. With the web app, backend and Office add-ins in separate repositories, checking a ticket means understanding its effect on the wider system. As AI makes implementation faster, creating tests afterwards and repeating manual regression checks becomes a bottleneck.

**Impact**

A change can reach review with its implementation and tests already checked against the available suites, giving us a clearer view of regressions and missing coverage before a separate QA pass. This also changes where I spend my time: alongside maintaining automation, I can focus more on exploratory testing and on whether the product works well for the person using it.

**Solution**

My role combines production development with responsibility for QA. I help define repository instructions that give AI agents context across the application and ask them to generate tests while they still understand the implementation, then run the available test pools, including unit and integration tests. I put particular emphasis on Playwright E2E, property-based and visual tests, and use AI review on PRs as another source of feedback. I then investigate the results and use manual testing for the workflows and interactions that need human judgement.

**Screenshots**

- Generated files can be inspected beside the conversation. This November 2026 capture comes from an automated test using sample files.
- The current Draft Smart Task lets users choose the format, length and style before describing the text they need.
- Secure Chat in the current design, captured in November 2026. Smart Tasks, mode and memory controls sit above the prompt composer.

## Entry Generator: preparing ERM sites for testing

Protecht | 2024–2026

**List description**

Testing an ERM system often starts with preparing the right data. I built Entry Generator so QAs and business consultants could populate Protecht environments themselves, including registers with different field configurations and business-unit hierarchies.

**Problem**

Before a test or a demonstration can begin, a Protecht ERM site needs data that makes the scenario meaningful. Preparing larger datasets by hand takes time, especially when registers have different fields and the setup also needs users or a hierarchy of business units. A generator therefore has to understand the target site and its configuration, rather than just produce a large number of random records.

**Impact**

QAs and business consultants can prepare populated environments through a UI, without writing a separate script for each setup. One operation supports up to 3,000 register entries, 10,000 users or 10,000 business units, depending on the selected generator. This makes larger test and demonstration datasets accessible to people who know the ERM workflow, even when they do not work on automation code.

**Solution**

I built a Next.js application connected to the ERM API, with a workflow that starts by validating the site and authenticating the user. For register entries, it discovers the available applications, registers and supported fields, then checks whether the requested data can be generated. Separate generators handle users and configurable business-unit trees, while the CSV section provides import files in dependency order. Contextual help is available in the tool itself, so the person preparing the environment can understand the options as they go.

**Screenshots**

- The main menu with the available generators.
- An earlier version: selecting an application, a register and the number of entries.

## KiwiGen: capturing a tester's context for AI

Protecht | 2026

**List description**

While working on AI-generated Playwright tests, I kept coming back to one question: how do we give the agent what the tester knows? KiwiGen captures browser actions, screenshots and spoken explanations together, so the context does not have to fit into a written scenario.

**Problem**

A written test scenario usually describes the steps, but leaves out much of what the tester knows: why a particular value matters, what they are checking on the screen and which behaviour would be wrong. This became a problem when I worked on generating Playwright tests for Protecht with AI, especially with limited access to the application code. The agent needed a richer explanation of the workflow than a list of clicks could provide.

**Impact**

A tester can walk through the application and explain their reasoning while the relevant actions and screen states stay connected to that explanation. The resulting session gives AI-assisted test creation a reusable source of context, instead of requiring the tester to reconstruct everything afterwards. It preserves the knowledge behind a scenario; the generated test still needs to be reviewed and validated separately.

**Solution**

I built an Electron application in TypeScript that uses Playwright to record browser interactions and screenshots, with local Whisper transcription for spoken commentary. These inputs are placed on a shared timeline, so a statement about a field or an expected result can be understood alongside what happened in the browser. I developed the recorder as a separate tool that could supply context to the Playwright test-generation work, where existing tests, page objects and API documentation provide the other parts of the picture.

**Screenshots**

- Recorded actions and spoken notes in one place.
- An example from a recorded test session in Protecht. The recorder controls are on the right.
- The same session, with the New Audit form open.

## METAX: a website and a mobile tool for steel workers

METAX SK | 2025

**List description**

A friend's company needed a website, but there was also a practical problem behind the scenes: calculating the surface areas of steel parts. I worked with the client on both the public presentation and a mobile app built around jobs, measurements and reports.

**Problem**

METAX needed a website that would explain the company's surface-treatment services and give customers a clear way to get in touch. The team also needed to calculate the surface areas of steel parts with different shapes and keep those measurements together for each job. For the mobile app to be useful, it had to fit that working process, rather than simply offer a collection of geometric formulas.

**Impact**

The website gives potential customers a place to understand the services, see examples of the work and contact the company. In the mobile app, workers can keep parts and measurements organised by job, calculate their surface areas and export a PDF report. The calculation and its output therefore belong to the same workflow, with a record that can be used outside the app as well.

**Solution**

I worked directly with the client to turn the practical requirements into a Next.js website and a React Native application built with Expo. For the mobile workflow, I organised the interface around jobs and individual parts: select a shape, enter its dimensions, calculate the area and keep the result with the job before exporting a report. The website presents the services, technical details and completed work, with contact information available from the same page.

**Screenshots**

- The mobile app: jobs, area calculations and PDF export.
- The company website with a short introduction and contact button.
- The services page explains the work and shows prices and specifications.
- A gallery with examples of the company's work.

## Migrating Compleo's test automation from UFT to Cypress

Compleo | 2018–2022

**List description**

At FPT Slovakia, I co-led the move from Micro Focus UFT to Cypress for Compleo's e-mobility platform. Alongside the proof of concept and shared core functionality, the work involved helping backend testers make the transition in their own tests.

**Problem**

Compleo's e-mobility platform had an existing automation suite in Micro Focus UFT, which the team wanted to replace with Cypress. The testing work included end-to-end scenarios as well as microservices, REST/SOAP interfaces and RabbitMQ messaging. The challenge was therefore also a team transition: backend testers needed a usable foundation in the new tool before they could move their existing work across.

**Impact**

The team moved its test automation to Cypress with shared core functionality available for further test development. Backend testers had a common starting point for the transition and support with applying it to their own scenarios. This gave the migration a practical outcome beyond the proof of concept: a setup the team could continue working with as it moved away from UFT.

**Solution**

I co-led the migration by helping develop the proof of concept and the core functionality on which the Cypress tests could be built. From there, the work continued through knowledge sharing and hands-on support for backend testers as they transferred their tests. My contribution covered both the technical foundation and the work of making it understandable and usable for the people who would maintain the automation afterwards.

**Screenshots**

- Micro Focus UFT One: an example of the test editor. This is a tool reference, not a screenshot from the Compleo project.
- Cypress: an example of the runner. This is a tool reference, not a screenshot from the Compleo project.
