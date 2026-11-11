# NEET Prep Companion

An offline-first NEET UG preparation tool. No account, no backend, no build step — every bit of logic runs in the browser and all progress is stored in `localStorage`.

![stack](https://img.shields.io/badge/stack-vanilla%20JS-f7df1e) ![no build](https://img.shields.io/badge/build-none-22d3a5) ![offline](https://img.shields.io/badge/works-offline-6d5efc)

**Live:** https://nwazishali.github.io/NEET-Examination-Preparation/

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
| **Subject hubs** | One hub per subject with units, chapter lists, a study dashboard, the 5-step cycle (Learn → Write → Drill → Revise → Test) and an assessment table. Every chapter card shows its weightage, Q&A count and MCQ count. |
| **Chapter pages** | All 54 chapters: Deep concepts, Formula box, Memory trick, Mistakes to avoid, Worked examples, exam Q&A in four tones (Short / Long / Application / Competency, answers hidden behind Show Answer), chapter MCQs, Mark complete and prev/next navigation. |
| **Question bank** | All 217 written Q&A in one filterable bank — by subject and by tone. Answers stay hidden until clicked. Print-friendly. |
| **MCQ Drill** | Every MCQ (bank + back papers) with four options, hidden answers and explanations, reshuffle and subject filters. |
| **Mock centre** | Every mock in one place: full-length, mini, subject mocks (45Q/50min), 54 chapter-wise mocks (10Q), back papers, a recent-attempts table with a clear-history action. Each attempt draws a fresh paper. |
| **Back papers** | Six year-wise NEET papers (2019–2024) with 12 questions each — 4 Physics, 4 Chemistry, 4 Biology. Answer them untimed with NEET marking, get an instant report with subject breakdown and full answer review. Best scores are stored per year. |
| **Practice** | Untimed mode with instant explanations. Filters for smart practice (unseen + previously-wrong first), unseen only, wrong only, bookmarks, subject, chapter and difficulty. |
| **Syllabus tracker** | All 50 chapters across Physics, Chemistry and Biology with exam weightage (questions per paper), plus your own accuracy and coverage per chapter, and a computed priority list. |
| **12-week planner** | A plan generated from chapter weightage, with tickable topics, mock-test markers and completion progress. |
| **Flashcards** | 20 high-yield cards per-concept, with "I knew it" / "review again" tracking. |
| **Formulas & tips** | 52 formulas across the three subjects, 12 mnemonics, strategy notes and the marking scheme. Print-friendly. |
| **Mistakes & notes** | Every question you've ever answered wrong, plus bookmarks and personal notes, each expandable to the full explanation. |
| **Progress** | Streaks, daily goals, 7-day activity chart, coverage and accuracy stats, study time. |
| **Data** | Dark/light theme, JSON export/import backup, full reset. |

## Content

- **189 questions** total, each with four options, a verified answer and a one-line explanation that teaches the concept.
  - **117 in the main bank** — Physics 36 · Chemistry 36 · Biology 45, covering every chapter in the syllabus map.
  - **72 in the back papers** — 6 papers × 12 questions (4 per subject), spanning 2019–2024.
- **50 syllabus chapters** with weightages that sum exactly to the blueprints: Physics 45, Chemistry 45, Biology 90.
- **54 chapter note sets** (concepts, formula, trick, 3+ mistakes, 2 worked examples each), one per syllabus chapter.
- **217 written exam Q&A** across four tones — 55 short, 54 long, 54 application, 54 competency — every chapter covered.
- **52 formulas**, **12 mnemonics**, **20 flashcards**, **6 strategy notes**, 189 MCQs.

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
    content/
      notes-physics.js      # chapter notes (concepts, formula, trick, mistakes, examples)
      notes-chemistry.js
      notes-biology.js
      written.js            # 217 written Q&A in four tones
    content.js              # unit grouping, chapter lookup, question-bank helpers
    questions-*.js          # question bank per subject
    questions.js            # aggregation, practice pool + exam paper builder
    pyq.js                  # previous years papers (2019–2024), 72 questions
    formulas.js             # formulas, mnemonics, flashcards, tips
  views/
    exam.js                 # mock test engine, timer, result report
    pyq.js                  # previous-year papers: index, runner, report
    subject.js              # subjects index + per-subject hub
    chapter.js              # chapter page, question bank, MCQ drill
    mockcentre.js           # mock centre: subject + chapter mocks, history
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

`chapter` must match an `id` from `js/data/syllabus.js`.

Previous-year questions live in `js/data/pyq.js` and additionally require a `year`. They are automatically added to the practice pool, the Mistakes tab and their matching paper:

```js
{ id: "pyq25-p1", year: 2025, subject: "physics", chapter: "p-optics", difficulty: "medium",
  q: "…", options: ["…"], answer: 0, explanation: "…" }
``` The new question automatically joins the practice pool, mock papers and the syllabus tracker.

## Routing

Deep links work: `#/subject?subject=biology`, `#/chapter?chapterId=b-genetics`, `#/questionbank?subject=chemistry`, `#/drill?subject=physics`.

## Notes

- Progress lives in your browser only. Clearing site data erases it — use **Settings → Export JSON** for backups.
- The milestone band shown after a mock (e.g. "Top 5% · government MBBS range") is a rough motivational marker, not a rank prediction.
- Back papers are **representative year-wise sets modelled on the NEET UG papers**, not verbatim reproductions of the official booklets (which are copyrighted). They are for practice and diagnostics.
- No analytics, no network calls, no tracking.
