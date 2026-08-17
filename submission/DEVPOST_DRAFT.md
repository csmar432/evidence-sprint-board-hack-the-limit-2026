# Evidence Sprint Board

## One-line pitch

Evidence Sprint Board helps student teams turn a research question into a shareable brief by keeping ownership, sources, verification and caveats in one small local-first workspace.

## Inspiration

Student teams often collect many links but still cannot answer three basic questions: What exactly are we claiming? Where did the number come from? What can the evidence not tell us? The last mile between “research” and “something safe to share” is usually a coordination problem, not a search problem.

## What it does

The MVP gives a team one focused flow:

1. Frame the public problem in the **Question** column.
2. Register canonical sources with publisher, access date and measurement unit in **Sources**.
3. Run a short verification checklist in **Verify**.
4. Edit a takeaway and caveat, then export a Markdown brief from **Brief**.

The included public-data research case uses the World Bank WDI API's 2022 China secondary-education pupil count (`93,735,700 pupils`) as a bounded context. The source, unit, country and year remain attached to the hand-off. It deliberately does not turn enrollment scale into a claim about unmet access, learning outcomes or program impact. This is a verifiable public-data case, not a claim that a named student has already completed the study.

Cards, sources, checklist progress and brief text are saved in the browser's local storage. A board JSON backup can be downloaded and restored on another browser. There is no account, database or AI dependency.

## Who it is for

Student research teams, classrooms, civic-tech clubs and anyone preparing a short evidence-based explainer under time pressure.

## Eligibility and team note

The official challenge pages state that participants must be students, above the legal age of majority in their country of residence, and not participating as a company or professional organization. High-school and college students are named in the rules; solo entries are welcome and teams may have 1–5 members. The current Overview eligibility widget excludes Brazil, Crimea, Cuba, Iran, North Korea, Quebec and Russia. The project owner must confirm every condition for every participant and the final team details before submitting.

## Why this is useful

The board makes evidence quality visible at the moment a team hands work from one person to another. It encourages a source to carry its definition and unit, and it makes a caveat part of the deliverable rather than an afterthought.

## Competitive boundary

Notion and Trello are strong general-purpose task and document tools. They answer “what task is next, and who owns it?” Evidence Sprint Board adds an evidence contract at the hand-off: the claim, owner, stage, source, publisher, access date, measurement unit, verification state and caveat stay together, then travel into the shareable brief. It is not a replacement for a full research database, citation manager or synchronized workspace; the differentiator is the evidence hand-off, not the four-column board alone.

## Built with

- Semantic HTML and accessible form controls
- CSS Grid, responsive CSS and print styles
- Vanilla JavaScript
- Browser `localStorage` for local persistence
- Native Blob download for Markdown export

No external packages or paid services are required.

## Transparent build note

The initial concept page and project README existed before the current implementation pass. The current pass added the interactive board, local persistence, source verification flow, brief export and submission materials. Codex was used as an AI-assisted development tool for UI implementation, copy drafting, validation and documentation; the project owner must review and remains responsible for the final code, claims, links and submission.

## Proof of work

- Working MVP: `src/index.html`
- Local run command: `python3 -m http.server 4175 --directory src`
- Demo URL during development: `http://127.0.0.1:4175/`
- Demo walkthrough: `submission/DEMO_SCRIPT.md`
- Example exported brief: `submission/evidence-sprint-brief.md`
- Final desktop proof: `submission/evidence-sprint-board-desktop.png`
- Final mobile proof: `submission/evidence-sprint-board-mobile.png`
- Automated QA report: `submission/QA_REPORT.md`
- Content-verifiable file manifest: `submission/MANIFEST.sha256`

## What we are proud of

We kept the product small enough to understand in one sitting while still closing the full loop from question to deliverable. The distinctive choice is to put source definitions, measurement units and caveats directly in the hand-off rather than treating them as cleanup at the end. The demo data shows a complete path, but every card, source, check and brief field can be changed locally without an account.

## What is next

- Add a compact evidence-quality score only after testing the checklist with student teams.
- Validate backup recovery with student teams and keep the restore flow only if it remains understandable.
- Add collaborative sync only if real users show that local-first storage is the bottleneck.

## Submission checks before publishing

- [x] Current Devpost pages checked on 2026-08-16; pre-existing-code/AI disclosure notes and the Overview/Schedule/Rules-header versus Rules-body deadline conflict are recorded, with final organizer confirmation still external.
- [ ] Replace the local demo URL with the final repository and hosted/demo links if required.
- [x] Capture desktop and mobile board views; project owner must approve the public-facing selection.
- [ ] Verify that every claim in the final video and copy is supported by the actual demo.
- [ ] Add final team/member information.
