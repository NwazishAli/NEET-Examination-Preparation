/* ===== Full-length / mini mock test with NEET marking (+4 / −1) ===== */

let examTimerId = null;

function clearExamTimer() {
  if (examTimerId) { clearInterval(examTimerId); examTimerId = null; }
}

function startExam(mode = "full") {
  const questions = buildExamPaper(mode === "mini" ? "mini" : "full");
  const minutes = mode === "mini" ? 40 : EXAM_BLUEPRINT.durationMinutes;
  activeExam = {
    mode,
    questions,
    answers: new Array(questions.length).fill(null),
    marked: new Set(),
    index: 0,
    startTs: Date.now(),
    durationSeconds: minutes * 60,
    submitted: false,
    result: null
  };
  navigate("exam");
}

function examView() {
  if (!activeExam) return examIntroView();
  if (activeExam.submitted) return examResultView(activeExam.result);
  return examRunnerView();
}

/* ---------- intro screen ---------- */
function examIntroView() {
  const st = getState();
  const overall = overallStats();
  const recent = st.sessions.filter((s) => s.type === "exam").slice(0, 4);

  return el("div", {}, [
    el("div", { class: "view-head" }, [
      el("div", {}, [
        el("h1", {}, "Mock Test"),
        el("p", {}, "Full NEET pattern: 180 questions · 200 minutes · +4 for correct, −1 for wrong.")
      ])
    ]),
    el("div", { class: "grid grid-2", style: "margin-bottom:16px" }, [
      el("div", { class: "card" }, [
        el("h3", {}, "Full-length test"),
        el("p", { class: "muted small" }, "Physics 45 · Chemistry 45 · Biology 90. Mirrors the real exam and includes a live question palette, mark-for-review and auto-submit on timeout."),
        el("div", { class: "row wrap", style: "margin:14px 0" }, [
          el("span", { class: "badge primary" }, "180 questions"),
          el("span", { class: "badge" }, "200 min"),
          el("span", { class: "badge" }, "720 marks")
        ]),
        el("button", { class: "btn btn-primary btn-lg btn-block", onclick: () => startExam("full") }, "Start full test")
      ]),
      el("div", { class: "card" }, [
        el("h3", {}, "Mini test"),
        el("p", { class: "muted small" }, "40 questions in 40 minutes — perfect for a daily timed drill when you don't have 3+ hours."),
        el("div", { class: "row wrap", style: "margin:14px 0" }, [
          el("span", { class: "badge primary" }, "40 questions"),
          el("span", { class: "badge" }, "40 min"),
          el("span", { class: "badge" }, "160 marks")
        ]),
        el("button", { class: "btn btn-accent btn-lg btn-block", onclick: () => startExam("mini") }, "Start mini test")
      ])
    ]),
    el("div", { class: "card" }, [
      el("div", { class: "card-title" }, [
        el("h3", {}, "Instructions"),
        el("span", { class: "badge" }, `${overall.sessions} tests attempted`)
      ]),
      el("ul", { class: "small muted", style: "margin:0; padding-left:18px; line-height:1.9" }, [
        el("li", {}, "Each correct answer earns +4 marks; each incorrect answer deducts 1 mark; unattempted questions score 0."),
        el("li", {}, "You can flag questions for review and jump anywhere using the palette on the right."),
        el("li", {}, "The timer starts immediately and the paper auto-submits when time runs out."),
        el("li", {}, "Questions are pulled from the offline bank; when a subject pool is exhausted, questions are recycled with shuffled options."),
        el("li", {}, "Keyboard shortcuts: 1–4 to answer, ← → to move between questions, M to mark for review."),
        el("li", {}, "Your answers and explanations become available in the report and in the Mistakes tab afterwards.")
      ])
    ]),
    recent.length ? el("div", { class: "card", style: "margin-top:16px" }, [
      el("h3", {}, "Recent mock tests"),
      el("div", { class: "list", style: "margin-top:12px" }, recent.map((s) =>
        el("div", { class: "list-row" }, [
          el("div", { class: "grow" }, [
            el("div", { style: "font-weight:650; font-size:13.5px" }, `${s.mode === "mini" ? "Mini" : "Full-length"} test`),
            el("div", { class: "tiny muted" }, new Date(s.date).toLocaleString())
          ]),
          el("span", { class: "badge primary" }, `${s.score} marks`),
          el("span", { class: "badge" }, `${s.accuracy}%`),
          el("span", { class: "tiny muted" }, formatDuration(s.timeTaken))
        ])
      ))
    ]) : null
  ]);
}

/* ---------- running test ---------- */
function examRunnerView() {
  const ex = activeExam;
  const q = ex.questions[ex.index];
  const answered = ex.answers.filter((a) => a !== null).length;
  const remaining = ex.durationSeconds - Math.floor((Date.now() - ex.startTs) / 1000);

  const head = el("div", { class: "exam-top" }, [
    el("div", { class: "row" }, [
      el("span", { class: "badge primary" }, ex.mode === "mini" ? "Mini test" : "Full-length"),
      el("span", { class: "small muted" }, `${answered}/${ex.questions.length} answered`)
    ]),
    el("div", { class: "row" }, [
      el("span", { class: "small muted" }, "Time left"),
      el("div", { class: "timer", id: "exam-timer" }, formatTime(remaining))
    ]),
    el("div", { class: "row" }, [
      el("button", { class: "btn btn-ghost btn-sm", onclick: () => confirmSubmit() }, "Submit")
    ])
  ]);

  const qCard = el("div", { class: "q-card" }, [
    el("div", { class: "q-meta" }, [
      el("span", { class: "q-number" }, `Q${ex.index + 1} / ${ex.questions.length}`),
      el("span", { class: "badge" }, SUBJECT_META[q.subject].icon + " " + SUBJECT_META[q.subject].label),
      el("span", { class: "badge" }, getChapterName(q.chapter)),
      el("span", { class: `badge ${q.difficulty === "hard" ? "bad" : q.difficulty === "medium" ? "warn" : "good"}` }, q.difficulty)
    ]),
    el("div", { class: "q-text" }, q.q),
    el("div", { class: "options" }, q.options.map((opt, i) =>
      el("button", {
        class: `option ${ex.answers[ex.index] === i ? "selected" : ""}`,
        onclick: () => {
          ex.answers[ex.index] = ex.answers[ex.index] === i ? null : i;
          renderRoute();
        }
      }, [
        el("span", { class: "option-key" }, String.fromCharCode(65 + i)),
        el("span", {}, opt)
      ])
    )),
    el("div", { class: "row between wrap", style: "margin-top:20px" }, [
      el("div", { class: "row" }, [
        el("button", {
          class: `btn btn-ghost btn-sm ${ex.marked.has(ex.index) ? "btn-primary" : ""}`,
          onclick: () => {
            if (ex.marked.has(ex.index)) ex.marked.delete(ex.index); else ex.marked.add(ex.index);
            renderRoute();
          }
        }, ex.marked.has(ex.index) ? "★ Marked for review" : "☆ Mark for review"),
        el("button", {
          class: "btn btn-ghost btn-sm",
          onclick: () => { ex.answers[ex.index] = null; renderRoute(); }
        }, "Clear response")
      ]),
      el("div", { class: "row" }, [
        el("button", {
          class: "btn btn-ghost", disabled: ex.index === 0 ? "" : null,
          onclick: () => { if (ex.index > 0) { ex.index--; renderRoute(); } }
        }, "← Previous"),
        el("button", {
          class: "btn btn-primary",
          onclick: () => {
            if (ex.index < ex.questions.length - 1) { ex.index++; renderRoute(); }
            else confirmSubmit();
          }
        }, ex.index === ex.questions.length - 1 ? "Review & submit" : "Save & next →")
      ])
    ])
  ]);

  const palette = el("div", { class: "card tight", style: "position:sticky; top:14px" }, [
    el("div", { class: "row between", style: "margin-bottom:10px" }, [
      el("strong", { class: "small" }, "Question palette"),
      el("span", { class: "tiny muted" }, `${answered}/${ex.questions.length}`)
    ]),
    el("div", { class: "palette" }, ex.questions.map((_, i) => {
      let cls = "pal-btn";
      if (ex.answers[i] !== null) cls += " answered";
      if (ex.marked.has(i)) cls += " marked";
      if (i === ex.index) cls += " current";
      return el("button", {
        class: cls, onclick: () => { ex.index = i; renderRoute(); }
      }, String(i + 1));
    })),
    el("div", { class: "legend", style: "margin-top:14px" }, [
      el("div", { html: '<i style="background:#22d3a5"></i>Answered' }),
      el("div", { html: '<i style="background:#f7b955"></i>Marked for review' }),
      el("div", { html: '<i style="background:var(--surface-2);border:1px solid var(--border)"></i>Not visited' })
    ]),
    el("button", { class: "btn btn-ghost btn-sm btn-block", style: "margin-top:14px", onclick: () => confirmSubmit() }, "Submit test")
  ]);

  return el("div", {}, [head, el("div", { class: "exam-shell" }, [qCard, palette])]);
}

examRunnerView.afterMount = () => {
  clearExamTimer();
  const tick = () => {
    const ex = activeExam;
    if (!ex || ex.submitted) { clearExamTimer(); return; }
    const remaining = ex.durationSeconds - Math.floor((Date.now() - ex.startTs) / 1000);
    const node = $("#exam-timer");
    if (node) {
      node.textContent = formatTime(remaining);
      node.classList.toggle("low", remaining <= 300);
    }
    if (remaining <= 0) {
      clearExamTimer();
      submitExam(true);
    }
  };
  tick();
  examTimerId = setInterval(tick, 1000);
};

async function confirmSubmit() {
  const ex = activeExam;
  if (!ex) return;
  const unanswered = ex.answers.filter((a) => a === null).length;
  const ok = await confirmDialog(
    "Submit test?",
    unanswered ? `${unanswered} question(s) are still unanswered. Unattempted questions score 0.` : "All questions answered. Submit and view your report?",
    "Submit test"
  );
  if (ok) submitExam(false);
}

function submitExam(auto = false) {
  const ex = activeExam;
  if (!ex || ex.submitted) return;
  clearExamTimer();

  let correct = 0, wrong = 0, unattempted = 0;
  const bySubject = {};
  ex.questions.forEach((q, i) => {
    const chosen = ex.answers[i];
    const isCorrect = chosen === q.answer;
    if (chosen === null) unattempted++;
    else if (isCorrect) correct++;
    else wrong++;

    if (chosen !== null) logAnswer(q, chosen, isCorrect, 0);

    const sub = bySubject[q.subject] || (bySubject[q.subject] = { total: 0, correct: 0, wrong: 0, unattempted: 0, score: 0 });
    sub.total++;
    if (chosen === null) sub.unattempted++;
    else if (isCorrect) { sub.correct++; sub.score += 4; }
    else { sub.wrong++; sub.score -= 1; }
  });

  const score = correct * 4 - wrong;
  const maxScore = ex.questions.length * 4;
  const timeTaken = Math.round((Date.now() - ex.startTs) / 1000);

  ex.submitted = true;
  ex.result = {
    mode: ex.mode,
    total: ex.questions.length,
    correct, wrong, unattempted, score, maxScore,
    accuracy: pct(correct, correct + wrong),
    percentileEstimate: estimateRank(score, maxScore),
    bySubject,
    timeTaken,
    date: new Date().toISOString(),
    auto
  };

  /* record in history + per-answer mistakes */
  recordSession({
    type: "exam",
    mode: ex.mode,
    score, maxScore,
    correct, wrong, unattempted,
    accuracy: ex.result.accuracy,
    timeTaken,
    date: ex.result.date,
    bySubject
  });
  const st = getState();
  st.studySeconds += timeTaken;
  const day = todayKey();
  const log = st.dailyLog[day] || { attempted: 0, correct: 0, seconds: 0 };
  log.seconds += timeTaken;
  st.dailyLog[day] = log;
  touchStreak();
  saveState();
  renderRoute();
}

function estimateRank(score, maxScore) {
  /* Rough mapping used only as an indicative milestone, not a prediction. */
  const ratio = maxScore ? score / maxScore : 0;
  if (ratio >= 0.85) return "Top 1% · AIIMS-Delhi / MAMC range";
  if (ratio >= 0.75) return "Top 5% · government MBBS range";
  if (ratio >= 0.65) return "Top 15% · state quota MBBS range";
  if (ratio >= 0.5) return "Top 35% · BDS / BAMS range";
  return "Below 50% — focus on accuracy before speed";
}

/* ---------- result report ---------- */
function examResultView(res) {
  const ex = activeExam;
  const st = getState();

  const verdict = res.score / res.maxScore >= 0.75 ? "strong" : res.score / res.maxScore >= 0.5 ? "moderate" : "needs work";
  const verdictBadge = verdict === "strong" ? "good" : verdict === "moderate" ? "warn" : "bad";

  const header = el("div", { class: "view-head" }, [
    el("div", {}, [
      el("h1", {}, "Test report"),
      el("p", {}, `${res.mode === "mini" ? "Mini" : "Full-length"} test · completed ${new Date(res.date).toLocaleString()}${res.auto ? " · auto-submitted on timeout" : ""}`)
    ]),
    el("div", { class: "row wrap" }, [
      el("button", { class: "btn btn-ghost", onclick: () => { activeExam = null; navigate("exam"); } }, "Another test"),
      el("button", { class: "btn btn-ghost", onclick: () => navigate("mistakes") }, "Review mistakes"),
      el("button", { class: "btn btn-primary", onclick: () => { activeExam = null; startPractice({ subject: "all", mode: "smart" }); } }, "Practice weak areas")
    ])
  ]);

  const scoreCard = el("div", { class: "card", style: "grid-column: span 2" }, [
    el("div", { class: "row between wrap" }, [
      el("div", {}, [
        el("div", { class: "stat-label" }, "Score"),
        el("div", { style: "font-size:40px; font-weight:800; letter-spacing:-0.03em; line-height:1.1" }, [
          `${res.score} `,
          el("span", { class: "muted", style: "font-size:18px; font-weight:600" }, `/ ${res.maxScore}`)
        ]),
        el("div", { class: "row wrap", style: "margin-top:8px" }, [
          el("span", { class: `badge ${verdictBadge}` }, verdict === "strong" ? "Strong performance" : verdict === "moderate" ? "Moderate performance" : "Needs improvement"),
          el("span", { class: "badge" }, `${res.accuracy}% accuracy`),
          el("span", { class: "badge" }, `${formatDuration(res.timeTaken)} used`)
        ])
      ]),
      el("div", { html: ring((res.score / res.maxScore) * 100, 100, 9, res.score >= 0 ? "#22d3a5" : "#f2667f") })
    ]),
    el("div", { class: "grid grid-3", style: "margin-top:18px" }, [
      el("div", { class: "formula-card" }, [el("div", { class: "tiny muted" }, "Correct"), el("div", { class: "stat-value", style: "color:#22d3a5" }, String(res.correct)), el("div", { class: "tiny muted" }, `+${res.correct * 4} marks`)]),
      el("div", { class: "formula-card" }, [el("div", { class: "tiny muted" }, "Incorrect"), el("div", { class: "stat-value", style: "color:#f2667f" }, String(res.wrong)), el("div", { class: "tiny muted" }, `−${res.wrong} marks`)]),
      el("div", { class: "formula-card" }, [el("div", { class: "tiny muted" }, "Unattempted"), el("div", { class: "stat-value", style: "color:#93a0bb" }, String(res.unattempted)), el("div", { class: "tiny muted" }, "0 marks")])
    ]),
    el("p", { class: "small muted", style: "margin:14px 0 0" }, `Indicative milestone: ${res.percentileEstimate}`)
  ]);

  const subjectCard = el("div", { class: "card" }, [
    el("h3", {}, "Subject-wise breakdown"),
    el("div", { class: "list", style: "margin-top:12px" }, Object.entries(SUBJECT_META).filter(([k]) => res.bySubject[k]).map(([k, meta]) => {
      const s = res.bySubject[k];
      const total = s.total * 4;
      const width = total ? clamp(((s.score + s.total) / (total * 2)) * 100, 0, 100) : 0;
      return el("div", { class: "formula-card" }, [
        el("div", { class: "row between" }, [
          el("strong", { class: "small" }, `${meta.icon} ${meta.label}`),
          el("span", { class: "badge primary" }, `${s.score} / ${total}`)
        ]),
        el("div", { class: "bar thin" }, el("span", { style: `width:${width}%; background:${meta.color}` })),
        el("div", { class: "tiny muted" }, `${s.correct} correct · ${s.wrong} wrong · ${s.unattempted} skipped`)
      ]);
    }))
  ]);

  /* answer review */
  const reviewCard = el("div", { class: "card", style: "margin-top:16px" }, [
    el("div", { class: "card-title" }, [
      el("h3", {}, "Answer review"),
      el("span", { class: "small muted" }, "tap a question to see the explanation")
    ])
  ]);
  const reviewList = el("div", { class: "list" });

  ex.questions.forEach((q, i) => {
    const chosen = ex.answers[i];
    const isCorrect = chosen === q.answer;
    const head = el("button", {
      class: "list-row", style: "width:100%; text-align:left; cursor:pointer; font-family:inherit; color:inherit; background:var(--surface-2)",
      onclick: () => body.classList.toggle("hidden")
    }, [
      el("span", { class: "badge", style: "min-width:38px; justify-content:center" }, `Q${i + 1}`),
      el("span", { class: "grow", style: "font-size:13.5px; font-weight:600" }, q.q),
      el("span", {
        class: `badge ${chosen === null ? "" : isCorrect ? "good" : "bad"}`
      }, chosen === null ? "Skipped" : isCorrect ? "+4" : "−1")
    ]);

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
        }, isBookmarked(q) ? "★ Bookmarked" : "☆ Bookmark")
      ])
    ]);

    reviewList.append(el("div", {}, [head, body]));
  });

  reviewCard.appendChild(reviewList);

  return el("div", {}, [
    header,
    el("div", { class: "grid split", style: "margin-bottom:16px" }, [scoreCard, subjectCard]),
    reviewCard
  ]);
}

VIEWS.exam = examView;
