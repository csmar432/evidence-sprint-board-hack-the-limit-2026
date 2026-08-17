# 90-second demo script

## Setup

Run:

```bash
python3 -m http.server 4175 --directory src
```

Open `http://127.0.0.1:4175/`.

## Walkthrough

### 0:00–0:12 · The problem

“Student teams can find plenty of links, but a link alone does not tell us what a claim means, who owns it, or what it cannot prove. Evidence Sprint Board makes that hand-off visible.”

Show the four columns: **Question**, **Sources**, **Verify**, **Brief**.

### 0:12–0:30 · Add a work item

Click **+ New evidence card**. Add a small task, choose its stage and owner, optionally link the registered World Bank WDI source, then add the card.

“Every next step is a card with an owner, a stage and—when available—a traceable source.”

### 0:30–0:48 · Register evidence

Scroll to **Source register**. Show the title, publisher, URL, accessed date, unit and “why it matters” fields. Register a public source.

“The source record keeps the measurement unit, country, year and limitation beside the URL, so the team does not lose the definition during hand-off. Here the World Bank API reports 93,735,700 pupils in China in 2022.”

### 0:48–1:04 · Verify before sharing

Point to the completed unit/time-period and caveat checks. Point to the 100% indicator in the header.

“The checklist turns invisible review work into a visible hand-off signal. It asks whether the claim is sourced, defined and honestly bounded.”

### 1:04–1:20 · Produce the brief

Edit the headline, takeaway and caveat in **Shareable brief**. Click **Download Markdown** or **Print / PDF**. Mention **Backup board** and **Restore board** as the recovery path for local work.

“The output is not another dashboard. It is a one-page brief with the question, evidence trail and caveat ready to share.”

### 1:20–1:30 · Why this fits the challenge

“A task board can tell us that a source needs review. Evidence Sprint Board makes the review deliverable explicit: source, unit, date, owner and caveat travel with the claim into a usable one-page brief.”

The final Devpost description should name the boundary plainly: Notion and Trello manage tasks and documents; this prototype is focused on evidence hand-offs and the traceability fields that general task boards do not enforce by default.

## Capture checklist

- [ ] Hero + four columns
- [ ] New evidence card dialog
- [ ] Source register with a registered row
- [ ] Checklist at a complete progress state
- [ ] Brief editor and export buttons
- [ ] Exported `.md` file opened once for proof
