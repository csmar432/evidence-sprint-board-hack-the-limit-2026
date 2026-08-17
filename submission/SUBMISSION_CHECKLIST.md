# Hack The Limit submission checklist

Last checked: 2026-08-17

Official pages:

- Overview / requirements: https://hack-the-limit-1.devpost.com/
- Rules: https://hack-the-limit-1.devpost.com/rules
- Schedule: https://hack-the-limit-1.devpost.com/details/dates

Current Schedule snapshot: submissions June 18, 2026 at 2:00am PDT through August 29, 2026 at 11:45pm PDT; judging August 30 at 9:00am PDT through September 6 at 5:00pm PDT; winners announced September 8 at 9:00am PDT. The Rules page header shows August 29, while its “Dates (Subject to Change)” body shows July 29 at 9:00pm PDT. That body also says judging and the winner announcement occur “a week after submissions close,” which does not match the separate Schedule dates. The organizer must confirm which timeline controls.

## Official submission fields

| Requirement | Status | Evidence / next action |
|---|---|---|
| Project title | Ready | `Evidence Sprint Board` |
| Problem statement | Ready | `DEVPOST_DRAFT.md` |
| Solution overview | Ready | `DEVPOST_DRAFT.md` |
| Key features | Ready | `README.md` and `DEVPOST_DRAFT.md` |
| Technologies used | Ready | Vanilla HTML/CSS/JavaScript, localStorage, Blob download, validated JSON backup/restore |
| Target users | Ready | Student research teams, classrooms and civic-tech clubs |
| Eligibility | Needs participant confirmation | Every participant is a high-school/college student, above the legal age of majority in their country of residence, not representing a company/professional organization, and not in Brazil, Crimea, Cuba, Iran, North Korea, Quebec or Russia |
| Project file | Ready | `../src/index.html` is the working MVP file |
| Example exported brief | Ready | `evidence-sprint-brief.md` |
| Content hash manifest | Ready | SHA-256 manifest covers all non-derived project files, including placeholders; the manifest itself is excluded to avoid a circular self-hash |
| Schedule / deadline | Needs organizer confirmation | Overview header, Schedule and Rules header show Aug 29, 2026 11:45pm PDT; Rules “Dates (Subject to Change)” body shows Jul 29, 2026 9:00pm PDT |
| Screenshot / video / project file proof | Project file and final screenshots ready; video pending | Devpost requires at least one proof-of-work option; record/approve the public-facing video |
| Public repository / live demo | Pending publication | Publish only after choosing the destination and confirming access |
| Team details | Needs human input | Solo is allowed; otherwise list 1–5 members and every role in Devpost |

## Participant eligibility confirmation

All boxes must be true for every participant; local files cannot establish them.

- [ ] Every participant is currently a high-school or college student.
- [ ] Every participant is above the legal age of majority in their country of residence.
- [ ] Every participant is entering as an individual/student team member, not on behalf of a company or professional organization.
- [ ] No participant is in an excluded location currently listed by the Overview: Brazil, Crimea, Cuba, Iran, North Korea, Quebec or Russia.
- [ ] I am submitting solo or with a team of no more than five people, and every member is accurately listed.

## Judging readiness

| Official criterion | Weight | Current evidence | Remaining risk / next action |
|---|---:|---|---|
| Execution & Build Quality | 30% | Functional single-file MVP; validation, persistence, backup, Markdown and print flows pass | Re-run the final hosted build before submission |
| Originality | 25% | Evidence hand-offs keep source definitions, units and caveats beside the work | Avoid claiming market novelty without competitor research; explain the design choice in the demo |
| Value & Impact | 20% | Concrete student research workflow using a 2022 World Bank secondary-enrollment context | Obtain and honestly summarize real student feedback |
| User Experience | 15% | Desktop/mobile layouts and the core end-to-end flow pass automated browser checks | Project owner should review the final screenshots and complete one manual phone run |
| Presentation Quality | 10% | Devpost draft, 90-second script, exported brief and final screenshots are prepared | Record/approve the final media and replace local-only links |

## Quality gates before submitting

- [x] Four-stage board works from question to brief.
- [x] Cards, sources, checklist progress and brief text persist locally.
- [x] Source form validates `http(s)` URLs and records units/access dates.
- [x] Brief can be downloaded as Markdown, board data can be backed up/restored, and the brief can be printed to PDF.
- [x] Embedded JavaScript syntax check passes.
- [x] Local HTTP preview returns the intended page on port 4175.
- [x] Test the complete demo at desktop width and a phone-sized viewport with Playwright.
- [x] Demo data uses one concrete public-data research scenario: a bounded secondary-school support discussion with unit, country, year and caveat.
- [ ] Collect a small amount of real student feedback and state the result honestly.
- [ ] Record and approve the final 90-second demo video.
- [ ] Add the final repository/demo URL and real team details.
- [x] Default Markdown download exactly matches `evidence-sprint-brief.md`; board backup, print/PDF, persistence, edit/delete/reset and responsive checks pass.
- [x] Representative first-time-student path was independently simulated; real student feedback remains pending.
- [x] Notion/Trello boundary and the evidence-hand-off differentiator are documented in `COMPETITOR_POSITIONING.md`.
- [x] A consent-aware real-student test protocol is prepared in `USER_TEST_PROTOCOL.md`; results remain pending until real participants complete it.
- [ ] `USER_TEST_RESULTS.md` contains results from 3–5 real independent students, with completion rates, friction, permissioned quotes and before/after changes.
- [x] Current public pages checked on 2026-08-17; the Overview/Schedule/Rules header versus Rules “Dates (Subject to Change)” body conflict is recorded, so organizer confirmation remains an external blocker.

## Organizer confirmation message

Send to the organizer contact shown on Devpost (`hackathonsmadeforall@yahoo.com`) before relying on the later date:

> Subject: Hack The Limit 2026 deadline and schedule clarification
>
> Hello, the Overview page, Schedule page and Rules page header show August 29, 2026 at 11:45pm PDT, while the Rules page's “Dates (Subject to Change)” section says July 29, 2026 at 9:00pm PDT and says judging/winner announcement occur a week after submissions close. Could you please confirm whether new submissions are accepted through August 29 and whether the separate Schedule judging and winner dates control? Thank you.

## External blockers

These cannot be completed safely from the local workspace without the owner's account or identity choices:

1. Join the hackathon and create/submit the Devpost project.
2. Publish a public repository or live demo.
3. Supply team names, roles and eligibility details.
4. Approve the prepared screenshots and any final public-facing video.

Do not mark the project as submitted until those four items are complete and the final Devpost page is visibly saved.
