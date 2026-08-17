# Final QA report

Date: 2026-08-17

Command: `node submission/qa.mjs` with a temporary Playwright Chromium runtime.

## Passed checks

- Desktop viewport: 1440px wide, no horizontal overflow.
- Phone viewport: 390px wide, stacked stage cards and stacked source card, no horizontal overflow.
- Tablet viewport: 768px wide, no horizontal overflow.
- Default state: 4 evidence cards, 1 World Bank source, 5/5 checks, 100% confidence.
- Stale UI scan: no `Sample data`, `Swipe horizontally`, `OECD`, `after-school`, `60%` or `Draft` text in the rendered page.
- Markdown export: downloaded output exactly matches `evidence-sprint-brief.md`.
- Runtime/CSP: page JavaScript initializes without console errors.
- Print/PDF: browser print output generated successfully.

This report covers automated browser checks only. It does not establish real-student usability, participant eligibility, organizer confirmation or final Devpost submission.
