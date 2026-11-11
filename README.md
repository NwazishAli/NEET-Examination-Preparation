# NEET Prep Companion

An offline-first NEET UG preparation tool. No account, no backend, no build step — every bit of logic runs in the browser and all progress is stored in `localStorage`.

![stack](https://img.shields.io/badge/stack-vanilla%20JS-f7df1e) ![no build](https://img.shields.io/badge/build-none-22d3a5) ![offline](https://img.shields.io/badge/works-offline-6d5efc)

## Run it

```bash
# Option 1 — just open the file
open index.html          # or double-click it

# Option 2 — any static server
python3 -m http.server 3000   # then visit http://localhost:3000
```

There is no install step: the app is plain HTML + CSS + ES5-style JavaScript (classic `<script>` tags, no bundler, no modules), so it also works straight from `file://`.

## Features

| Area | What it does |
| --- | --- |
| **Mock tests** | Full-length paper (Physics 45, Chemistry 45, Biology 90 = 180 Q) in 200 minutes, or a 40-question mini test in 40 minutes. Real NEET marking (+4 / −1 / 0), live countdown with auto-submit, question palette, mark-for-review, keyboard shortcuts (1–4, ← →, M). |
| **Test report** | Score, accuracy, correct/incorrect/skipped split, subject-wise breakdown, indicative milestone band, and a full answer review with explanations. |
| **Practice** | Untimed mode with instant explanations. Filters for smart practice (unseen + previously-wrong first), unseen only, wrong only, bookmarks, subject, chapter and difficulty. |
| **Syllabus tracker** | All 50 chapters across Physics, Chemistry and Biology with exam weightage (questions per paper), plus your own accuracy and coverage per chapter, and a computed priority list. |
| **12-week planner** | A plan generated from chapter weightage, with tickable topics, mock-test markers and completion progress. |
| **Flashcards** | 20 high-yield cards per-concept, with "I knew it" / "review again" tracking. |
| **Formulas & tips** | 52 formulas across the three subjects, 12 mnemonics, strategy notes and the marking scheme. Print-friendly. |
| **Mistakes & notes** | Every question you've ever answered wrong, plus bookmarks and personal notes, each expandable to the full explanation. |
| **Progress** | Streaks, daily goals, 7-day activity chart, coverage and accuracy stats, study time. |
| **Data** | Dark/light theme, JSON export/import backup, full reset. |

## Content

- **117 questions**, each with four options, a verified answer and a one-line explanation that teaches the concept.
  - Physics 36 · Chemistry 36 · Biology 45 — covering every chapter in the syllabus map.
- **50 syllabus chapters** with weightages that sum exactly to the blueprints: Physics 45, Chemistry 45, Biology 90.
- **52 formulas**, **12 mnemonics**, **20 flashcards**, **6 strategy notes**.

Because the bank is smaller than a 180-question paper, the mock engine recycles questions (with shuffled options) once a subject pool is exhausted. Recycled questions keep their base ID, so stats, notes and bookmarks always point at the original question.

Weightages are averages based on recent NEET papers and are meant for study prioritisation, not as an official blueprint.

## Project structure

```
index.html                  # single page shell, loads everything in order
css/styles.css              # design tokens, layout, components, responsive + print styles
js/
  utils.js                  # DOM helpers, formatting, toast, chart, shared VIEWS registry
  store.js                  # localStorage state, streaks, statistics, sessions
  app.js                    # app shell, hash router, dashboard, keyboard shortcuts, boot
  data/
    syllabus.js             # chapters + weightage, exam blueprint, 12-week plan generator
    questions-*.js          # question bank per subject
    questions.js            # aggregation + exam paper builder
    formulas.js             # formulas, mnemonics, flashcards, tips
  views/
    exam.js                 # mock test engine, timer, result report
    practice.js             # practice runner, session summary, note editor
    syllabus.js             # chapter tracker
    planner.js              # study planner
    flashcards.js           # flashcard deck
    formulas.js             # formula sheet
    mistakes.js             # mistakes/bookmarks/notes
    settings.js             # profile, theme, backup/restore
```

## Adding questions

Append to the relevant `js/data/questions-<subject>.js` file:

```js
{ id: "ph37", subject: "physics", chapter: "p-optics", difficulty: "medium",
  q: "Question text?",
  options: ["Correct", "Distractor", "Distractor", "Distractor"], answer: 0,
  explanation: "Why the answer is right." }
```

`chapter` must match an `id` from `js/data/syllabus.js`. The new question automatically joins the practice pool, mock papers and the syllabus tracker.

## Notes

- Progress lives in your browser only. Clearing site data erases it — use **Settings → Export JSON** for backups.
- The milestone band shown after a mock (e.g. "Top 5% · government MBBS range") is a rough motivational marker, not a rank prediction.
- No analytics, no network calls, no tracking.
