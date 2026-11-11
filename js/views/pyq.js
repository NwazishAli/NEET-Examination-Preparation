/* ===== Previous Years Papers (PYQ) — year-wise practice tests ===== */

let activePyq = null;   // { paper, answers[], index, submitted, result }

function pyqView() {
  if (!activePyq) return pyqIndexView();
  if (activePyq.submitted) return pyqResultView(activePyq.result);
  return pyqRunnerView();
}

/* ---------- index: list of papers ---------- */
function pyqIndexView() {
  const st = getState();
  const done = st.pyq || {};
  const totalQ = allPyqQuestions().length;

  const wrap = el("div", {});
  wrap.appendChild(el("div", { class: "view-head" }, [
    el("div", {}, [
      el("h1", {}, "Back Papers"),
      el("p", {}, `Year-wise NEET papers for timed revision — ${totalQ} questions across 6 sessions, untimed with instant scoring.`)
    ]),
    el("div", { class: "row" }, [
      el("span", { class: "badge primary" }, `${PYQ_PAPERS.length} papers`),
      el("span", { class: "badge" }, "instant report")
    ])
  ]));

  const grid = el("div", { class: "grid grid-3" });

  PYQ_PAPERS.forEach((paper) => {
    const rec = done[paper.year];
    const answered = rec ? rec.attempted : 0;
    const acc = rec ? rec.accuracy : 0;
    grid.appendChild(el("div", { class: "card" }, [
      el("div", { class: "row between" }, [
        el("div", {}, [
          el("div", { class: "stat-label" }, "Session"),
          el("div", { style: "font-size:22px; font-weight:800; letter-spacing:-0.02em" }, String(paper.year))
        ]),
        rec ? el("span", { class: `badge ${acc >= 70 ? "good" : acc >= 45 ? "warn" : "bad"}` }, `${acc}%`) : el("span", { class: "badge" }, "new")
      ]),
      el("div", { class: "small muted", style: "margin:10px 0" },
        `⚛ ${paper.counts.physics} · 🧪 ${paper.counts.chemistry} · 🧬 ${paper.counts.biology}`),
      el("div", { class: "row wrap", style: "margin-bottom:12px" }, [
        el("span", { class: "badge" }, `${paper.questions.length} Q`),
        el("span", { class: "badge" }, `${paper.marks} marks`)
      ]),
      rec ? el("div", { class: "tiny muted", style: "margin-bottom:10px" },
        `Last attempt: ${rec.correct}/${rec.attempted} correct · ${formatDuration(rec.timeTaken || 0)}`) : null,
      el("button", {
        class: `btn btn-block ${rec ? "btn-ghost" : "btn-primary"}`,
        onclick: () => startPyq(paper.year)
      }, rec ? "Retake paper" : "Start paper")
    ]));
  });

  wrap.appendChild(grid);

  const attempted = Object.keys(done).length;
  wrap.appendChild(el("div", { class: "card", style: "margin-top:16px" }, [
    el("div", { class: "card-title" }, [
      el("h3", {}, "How to use back papers"),
      el("span", { class: "badge primary" }, `${attempted}/${PYQ_PAPERS.length} attempted`)
    ]),
    el("ul", { class: "small muted", style: "margin:0; padding-left:18px; line-height:1.9" }, [
      el("li", {}, "Attempt a paper only after finishing that chapter set in the syllabus tracker — papers are diagnostics, not first-time learning."),
      el("li", {}, "These are representative year-wise question sets modelled on the NEET UG papers, not verbatim reproductions of the official booklets."),
      el("li", {}, "Marking follows the NEET scheme: +4 for correct, −1 for incorrect, 0 for unattempted."),
      el("li", {}, "Every wrong answer is automatically added to the Mistakes tab for spaced revision.")
    ])
  ]));

  return wrap;
}

/* ---------- start / runner ---------- */
function startPyq(year) {
  const paper = getPyqPaper(year);
  if (!paper) { toast("Paper not found", "error"); return; }
  activePyq = {
    paper,
    answers: new Array(paper.questions.length).fill(null),
    index: 0,
    startTs: Date.now(),
    submitted: false,
    result: null
  };
  navigate("pyq");
}

function pyqRunnerView() {
  const run = activePyq;
  const paper = run.paper;
  const q = paper.questions[run.index];
  const answered = run.answers.filter((a) => a !== null).length;

  const card = el("div", { class: "q-card" }, [
    el("div", { class: "q-meta" }, [
      el("span", { class: "q-number" }, `Q${run.index + 1} / ${paper.questions.length}`),
      el("span", { class: "badge primary" }, paper.label),
      el("span", { class: "badge" }, SUBJECT_META[q.subject].icon + " " + SUBJECT_META[q.subject].label),
      el("span", { class: "badge" }, getChapterName(q.chapter))
    ]),
    el("div", { class: "q-text" }, q.q),
    el("div", { class: "options" }, q.options.map((opt, i) =>
      el("button", {
        class: `option ${run.answers[run.index] === i ? "selected" : ""}`,
        onclick: () => {
          run.answers[run.index] = run.answers[run.index] === i ? null : i;
          renderRoute();
        }
      }, [
        el("span", { class: "option-key" }, String.fromCharCode(65 + i)),
        el("span", {}, opt)
      ])
    )),
    el("div", { class: "row between wrap", style: "margin-top:20px" }, [
      el("span", { class: "tiny muted" }, "Keys: 1–4 select · ← → navigate"),
      el("div", { class: "row" }, [
        el("button", {
          class: "btn btn-ghost", disabled: run.index === 0 ? "" : null,
          onclick: () => { if (run.index > 0) { run.index--; renderRoute(); } }
        }, "← Previous"),
        el("button", {
          class: "btn btn-primary",
          onclick: () => {
            if (run.index < paper.questions.length - 1) { run.index++; renderRoute(); }
            else confirmPyqSubmit();
          }
        }, run.index === paper.questions.length - 1 ? "Finish paper" : "Save & next →")
      ])
    ])
  ]);

  const side = el("div", { class: "card tight", style: "position:sticky; top:14px" }, [
    el("div", { class: "row between", style: "margin-bottom:10px" }, [
      el("strong", { class: "small" }, `${paper.label} palette`),
      el("span", { class: "tiny muted" }, `${answered}/${paper.questions.length}`)
    ]),
    el("div", { class: "bar thin", style: "margin-bottom:12px" },
      el("span", { style: `width:${pct(answered, paper.questions.length)}%` })),
    el("div", { class: "palette" }, paper.questions.map((_, i) => {
      let cls = "pal-btn";
      if (run.answers[i] !== null) cls += " answered";
      if (i === run.index) cls += " current";
      return el("button", {
        class: cls, onclick: () => { run.index = i; renderRoute(); }
      }, String(i + 1));
    })),
    el("button", { class: "btn btn-ghost btn-sm btn-block", style: "margin-top:14px", onclick: confirmPyqSubmit }, "Submit paper"),
    el("button", {
      class: "btn btn-ghost btn-sm btn-block", style: "margin-top:8px",
      onclick: () => { activePyq = null; renderRoute(); }
    }, "Exit")
  ]);

  return el("div", {}, [
    el("div", { class: "view-head" }, [
      el("div", {}, [el("h1", {}, paper.title), el("p", {}, "Previous year paper · untimed · NEET marking")]),
      el("button", { class: "btn btn-ghost btn-sm", onclick: () => { activePyq = null; navigate("pyq"); } }, "All papers")
    ]),
    el("div", { class: "exam-shell" }, [card, side])
  ]);
}

async function confirmPyqSubmit() {
  const run = activePyq;
  if (!run) return;
  const unanswered = run.answers.filter((a) => a === null).length;
  const ok = await confirmDialog("Submit paper?", unanswered
    ? `${unanswered} question(s) left blank. Unattempted questions score 0.`
    : "All questions answered. See your report?", "Submit");
  if (ok) submitPyq();
}

function submitPyq() {
  const run = activePyq;
  if (!run || run.submitted) return;

  let correct = 0, wrong = 0, unattempted = 0;
  const bySubject = {};
  const review = [];

  run.paper.questions.forEach((q, i) => {
    const chosen = run.answers[i];
    const isCorrect = chosen === q.answer;
    if (chosen === null) unattempted++;
    else if (isCorrect) correct++;
    else wrong++;

    if (chosen !== null) logAnswer(q, chosen, isCorrect, 0);
    review.push({ q, chosen, isCorrect });

    const s = bySubject[q.subject] || (bySubject[q.subject] = { total: 0, correct: 0, wrong: 0, unattempted: 0, score: 0 });
    s.total++;
    if (chosen === null) s.unattempted++;
    else if (isCorrect) { s.correct++; s.score += 4; }
    else { s.wrong++; s.score -= 1; }
  });

  const score = correct * 4 - wrong;
  const maxScore = run.paper.questions.length * 4;
  const timeTaken = Math.round((Date.now() - run.startTs) / 1000);
  const accuracy = pct(correct, correct + wrong);

  run.submitted = true;
  run.result = {
    year: run.paper.year, label: run.paper.label,
    total: run.paper.questions.length,
    correct, wrong, unattempted, score, maxScore, accuracy,
    bySubject, timeTaken, review, date: new Date().toISOString()
  };

  /* persist per-year record + session history */
  const st = getState();
  st.pyq = st.pyq || {};
  st.pyq[run.paper.year] = {
    attempted: correct + wrong,
    correct,
    accuracy,
    score,
    maxScore,
    timeTaken,
    date: run.result.date
  };
  recordSession({
    type: "exam", mode: "pyq",
    title: run.paper.label,
    score, maxScore, correct, wrong, unattempted,
    accuracy, timeTaken, date: run.result.date, bySubject
  });
  st.studySeconds += timeTaken;
  const day = todayKey();
  const log = st.dailyLog[day] || { attempted: 0, correct: 0, seconds: 0 };
  log.seconds += timeTaken;
  st.dailyLog[day] = log;
  touchStreak();
  saveState();

  renderRoute();
}

/* ---------- result ---------- */
function pyqResultView(res) {
  const run = activePyq;
  const ratio = res.maxScore ? res.score / res.maxScore : 0;
  const band = ratio >= 0.85 ? ["good", "Excellent — exam-ready standard"]
    : ratio >= 0.65 ? ["good", "Strong — polish weak chapters"]
    : ratio >= 0.45 ? ["warn", "Average — revise before retaking"]
    : ["bad", "Needs work — rebuild the basics"];

  const header = el("div", { class: "view-head" }, [
    el("div", {}, [
      el("h1", {}, `${res.label} report`),
      el("p", {}, `Completed ${new Date(res.date).toLocaleString()} · ${formatDuration(res.timeTaken)} used`)
    ]),
    el("div", { class: "row wrap" }, [
      el("button", { class: "btn btn-ghost", onclick: () => { activePyq = null; navigate("pyq"); } }, "All papers"),
      el("button", { class: "btn btn-ghost", onclick: () => startPyq(res.year) }, "Retake"),
      el("button", { class: "btn btn-primary", onclick: () => { activePyq = null; startPractice({ mode: "weak" }); } }, "Practice mistakes")
    ])
  ]);

  const scoreCard = el("div", { class: "card" }, [
    el("div", { class: "row between wrap" }, [
      el("div", {}, [
        el("div", { class: "stat-label" }, "Score"),
        el("div", { style: "font-size:38px; font-weight:800; letter-spacing:-0.03em; line-height:1.1" }, [
          `${res.score} `,
          el("span", { class: "muted", style: "font-size:17px; font-weight:600" }, `/ ${res.maxScore}`)
        ]),
        el("div", { class: "row wrap", style: "margin-top:8px" }, [
          el("span", { class: `badge ${band[0]}` }, band[1]),
          el("span", { class: "badge" }, `${res.accuracy}% accuracy`)
        ])
      ]),
      el("div", { html: ring((res.score / res.maxScore) * 100, 96, 9, ratio >= 0.5 ? "#22d3a5" : "#f2667f") })
    ]),
    el("div", { class: "grid grid-3", style: "margin-top:16px" }, [
      el("div", { class: "formula-card" }, [el("div", { class: "tiny muted" }, "Correct"), el("div", { class: "stat-value", style: "color:#22d3a5" }, String(res.correct)), el("div", { class: "tiny muted" }, `+${res.correct * 4}`)]),
      el("div", { class: "formula-card" }, [el("div", { class: "tiny muted" }, "Incorrect"), el("div", { class: "stat-value", style: "color:#f2667f" }, String(res.wrong)), el("div", { class: "tiny muted" }, `−${res.wrong}`)]),
      el("div", { class: "formula-card" }, [el("div", { class: "tiny muted" }, "Unattempted"), el("div", { class: "stat-value", style: "color:#93a0bb" }, String(res.unattempted)), el("div", { class: "tiny muted" }, "0")])
    ])
  ]);

  const subjectCard = el("div", { class: "card" }, [
    el("h3", {}, "Subject-wise"),
    el("div", { class: "list", style: "margin-top:12px" }, Object.entries(SUBJECT_META).filter(([k]) => res.bySubject[k]).map(([k, meta]) => {
      const s = res.bySubject[k];
      return el("div", { class: "formula-card" }, [
        el("div", { class: "row between" }, [
          el("strong", { class: "small" }, `${meta.icon} ${meta.label}`),
          el("span", { class: "badge primary" }, `${s.correct}/${s.total}`)
        ]),
        el("div", { class: "bar thin" }, el("span", { style: `width:${pct(s.correct, s.total)}%; background:${meta.color}` })),
        el("div", { class: "tiny muted" }, `${s.wrong} wrong · ${s.unattempted} skipped`)
      ]);
    }))
  ]);

  const reviewCard = el("div", { class: "card", style: "margin-top:16px" }, [
    el("div", { class: "card-title" }, [
      el("h3", {}, "Answer review"),
      el("span", { class: "small muted" }, "tap to expand the explanation")
    ])
  ]);
  const list = el("div", { class: "list" });
  res.review.forEach((item, i) => {
    const { q, chosen, isCorrect } = item;
    const body = el("div", { class: "hidden", style: "padding:14px 16px; background:var(--surface); border:1px solid var(--border); border-top:none; border-radius:0 0 10px 10px" }, [
      el("div", { class: "options", style: "gap:6px" }, q.options.map((opt, oi) => {
        let cls = "option";
        if (oi === q.answer) cls += " correct";
        else if (oi === chosen) cls += " wrong";
        return el("div", { class: cls }, [
          el("span", { class: "option-key" }, String.fromCharCode(65 + oi)),
          el("span", {}, opt)
        ]);
      })),
      el("div", { class: "explanation" }, [el("strong", {}, "Why: "), q.explanation]),
      el("div", { class: "row wrap", style: "margin-top:10px" }, [
        el("span", { class: "badge" }, getChapterName(q.chapter)),
        el("button", {
          class: "btn btn-ghost btn-sm",
          onclick: () => { toggleBookmark(q); toast("Bookmark toggled", "success"); renderRoute(); }
        }, isBookmarked(q) ? "★ Bookmarked" : "☆ Bookmark"),
        el("button", { class: "btn btn-ghost btn-sm", onclick: () => openNoteEditor(q) }, "✎ Note")
      ])
    ]);
    const head = el("button", {
      class: "list-row", style: "width:100%; text-align:left; cursor:pointer; font-family:inherit; color:inherit; background:var(--surface-2)",
      onclick: () => body.classList.toggle("hidden")
    }, [
      el("span", { class: "badge", style: "min-width:38px; justify-content:center" }, `Q${i + 1}`),
      el("span", { class: "grow", style: "font-size:13.5px; font-weight:600" }, q.q),
      el("span", { class: `badge ${chosen === null ? "" : isCorrect ? "good" : "bad"}` },
        chosen === null ? "Skipped" : isCorrect ? "+4" : "−1")
    ]);
    list.append(el("div", {}, [head, body]));
  });
  reviewCard.appendChild(list);

  return el("div", {}, [
    header,
    el("div", { class: "grid split", style: "margin-bottom:16px" }, [scoreCard, subjectCard]),
    reviewCard
  ]);
}

VIEWS.pyq = pyqView;
