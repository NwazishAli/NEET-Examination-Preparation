/* ===== Chapter page: Learn → Formula → Trick → Mistakes → Examples → Q&A → MCQ drill ===== */

let revealedAnswers = new Set();

function chapterView(opts = {}) {
  const chapterId = opts.chapterId || (location.hash.split("/")[2] || "").split("?")[0];
  const ch = findChapter(chapterId);
  if (!ch) {
    return el("div", { class: "card center" }, [
      el("h2", {}, "Chapter not found"),
      el("p", { class: "muted" }, "Pick a chapter from a subject hub."),
      el("button", { class: "btn btn-primary", onclick: () => navigate("subjects") }, "Browse subjects")
    ]);
  }

  const notes = noteFor(chapterId) || { concepts: [], mistakes: [], examples: [] };
  const written = writtenFor(chapterId);
  const mcqs = mcqsFor(chapterId);
  const meta = SUBJECT_META[ch.subject];
  const siblings = chaptersOf(ch.subject);
  const pos = siblings.findIndex((c) => c.id === chapterId);
  const prev = siblings[pos - 1];
  const next = siblings[pos + 1];
  const done = isChapterDone(chapterId);

  const wrap = el("div", {});

  wrap.appendChild(el("div", { class: "view-head" }, [
    el("div", {}, [
      el("div", { class: "row wrap", style: "margin-bottom:6px" }, [
        el("button", { class: "btn btn-ghost btn-sm", onclick: () => navigate("subject", { subject: ch.subject }) }, `← ${meta.label}`),
        el("span", { class: "badge primary" }, `${ch.weight} Q / paper`),
        el("span", { class: "badge" }, `Class ${ch.class}`),
        done ? el("span", { class: "badge good" }, "✓ Complete") : null
      ]),
      el("h1", {}, ch.name),
      el("p", {}, `${meta.label} · Chapter ${pos + 1} of ${siblings.length}`)
    ]),
    el("div", { class: "row wrap" }, [
      el("button", { class: "btn btn-ghost btn-sm", onclick: () => startPractice({ subject: ch.subject, chapter: chapterId }) }, "Practice MCQs"),
      el("button", {
        class: `btn btn-sm ${done ? "btn-accent" : "btn-primary"}`,
        onclick: () => { toggleChapterDone(chapterId); toast(done ? "Marked incomplete" : "Chapter complete!", "success"); renderRoute(); }
      }, done ? "✓ Marked complete" : "Mark complete")
    ])
  ]));

  const prog = subjectProgress(ch.subject);
  wrap.appendChild(el("div", { class: "card tight", style: "margin-bottom:16px" }, [
    el("div", { class: "row between small" }, [
      el("span", {}, `${meta.label} progress: ${prog.done} of ${prog.total} chapters`),
      el("span", { class: "muted" }, `${prog.pct}%`)
    ]),
    el("div", { class: "bar thin", style: "margin-top:8px" }, el("span", { style: `width:${prog.pct}%; background:${meta.color}` }))
  ]));

  /* 1 — concepts */
  const conceptsCard = el("div", { class: "card", style: "margin-bottom:16px" }, [
    el("div", { class: "card-title" }, [
      el("h3", {}, "1 · Deep concepts"),
      el("span", { class: "badge" }, `${notes.concepts.length} key ideas`)
    ]),
    el("ol", { style: "margin:0; padding-left:20px; line-height:1.85" },
      notes.concepts.map((c) => el("li", { style: "margin-bottom:8px" }, c)))
  ]);

  /* 2/3 — formula + trick */
  const formulaCard = el("div", { class: "grid grid-2", style: "margin-bottom:16px" }, [
    el("div", { class: "card" }, [
      el("h3", {}, "2 · Formula box"),
      notes.formula
        ? el("div", { class: "formula-card", style: "margin-top:10px" }, [el("div", { class: "formula", style: "line-height:1.8" }, notes.formula)])
        : el("p", { class: "small muted", style: "margin-top:10px" }, "This chapter is conceptual — no single formula dominates."),
      el("p", { class: "tiny muted", style: "margin:10px 0 0" }, "Copy these onto one page and revise it the night before the exam.")
    ]),
    el("div", { class: "card" }, [
      el("h3", {}, "3 · Memory trick"),
      el("div", { class: "formula-card", style: "margin-top:10px" }, [
        el("div", { class: "small", style: "line-height:1.7" }, notes.trick || "Focus on the worked examples — this chapter rewards practice over memorisation.")
      ])
    ])
  ]);

  /* 4 — mistakes */
  const mistakesCard = el("div", { class: "card", style: "margin-bottom:16px" }, [
    el("div", { class: "card-title" }, [
      el("h3", {}, "4 · Mistakes to avoid"),
      el("span", { class: "badge bad" }, `${(notes.mistakes || []).length} traps`)
    ]),
    el("div", { class: "list" }, (notes.mistakes || []).map((m) =>
      el("div", { class: "list-row", style: "align-items:flex-start" }, [
        el("span", { class: "badge bad", style: "flex:none" }, "✕"),
        el("span", { class: "small" }, m)
      ])
    ))
  ]);

  /* 5 — worked examples */
  const examplesCard = el("div", { class: "card", style: "margin-bottom:16px" }, [
    el("h3", {}, "5 · Worked examples"),
    el("div", { class: "list", style: "margin-top:12px" }, (notes.examples || []).map((ex) => {
      const key = `${chapterId}-ex-${ex.q}`;
      const shown = revealedAnswers.has(key);
      return el("div", { class: "formula-card" }, [
        el("div", { class: "small", style: "font-weight:650" }, ex.q),
        shown
          ? el("div", { class: "small muted", style: "border-left:2px solid var(--accent); padding-left:10px" }, ex.a)
          : el("button", { class: "btn btn-ghost btn-sm", style: "align-self:flex-start", onclick: () => { revealedAnswers.add(key); renderRoute(); } }, "Show solution")
      ]);
    }))
  ]);

  /* 6 — written Q&A */
  const writtenRows = [];
  Object.entries(written).forEach(([tone, items]) => {
    items.forEach((item) => writtenRows.push({ tone, ...item }));
  });
  const activeTone = chapterView._tone || "all";
  const toneSeg = el("div", { class: "seg", style: "max-width:520px; margin:12px 0" },
    [["all", `All (${writtenRows.length})`], ["short", "Short"], ["long", "Long"], ["application", "Application"], ["competency", "Competency"]].map(([key, label]) =>
      el("button", {
        class: activeTone === key ? "active" : "",
        onclick: () => { chapterView._tone = key; renderRoute(); }
      }, label)
    ));

  const filteredWritten = activeTone === "all" ? writtenRows : writtenRows.filter((r) => r.tone === activeTone);

  const writtenCard = el("div", { class: "card", style: "margin-bottom:16px" }, [
    el("div", { class: "card-title" }, [
      el("h3", {}, "6 · Exam Q&A — four tones"),
      el("span", { class: "badge primary" }, `${writtenRows.length} questions`)
    ]),
    el("p", { class: "small muted", style: "margin:0" }, "Cover the answer, write your own response in a notebook, then Show Answer to compare."),
    toneSeg,
    el("div", { class: "list" }, filteredWritten.map((row) => {
      const key = `${chapterId}-${row.tone}-${row.q}`;
      const shown = revealedAnswers.has(key);
      return el("div", { class: "formula-card" }, [
        el("div", { class: "row between wrap" }, [
          el("span", { class: "badge primary" }, TONE_LABELS[row.tone]),
          el("span", { class: "tiny muted" }, TONE_MARKS[row.tone])
        ]),
        el("div", { class: "small", style: "font-weight:650; line-height:1.6" }, row.q),
        shown
          ? el("div", { class: "small muted", style: "line-height:1.7; border-left:2px solid var(--accent); padding-left:10px" }, row.a)
          : el("button", { class: "btn btn-ghost btn-sm", style: "align-self:flex-start", onclick: () => { revealedAnswers.add(key); renderRoute(); } }, "Show Answer")
      ]);
    }))
  ]);

  /* 7 — MCQs */
  const mcqCard = el("div", { class: "card", style: "margin-bottom:16px" }, [
    el("div", { class: "card-title" }, [
      el("h3", {}, "7 · Chapter MCQs"),
      el("span", { class: "badge" }, `${mcqs.length} available`)
    ]),
    el("div", { class: "list" }, mcqs.slice(0, 6).map((q) => {
      const key = `mcq-${q.id}`;
      const shown = revealedAnswers.has(key);
      return el("div", { class: "formula-card" }, [
        el("div", { class: "small", style: "font-weight:650" }, q.q),
        shown
          ? el("div", {}, [
              el("div", { class: "small", style: "color:var(--accent)" }, `Answer: ${String.fromCharCode(65 + q.answer)}. ${q.options[q.answer]}`),
              el("div", { class: "tiny muted", style: "margin-top:6px" }, q.explanation)
            ])
          : el("button", { class: "btn btn-ghost btn-sm", style: "align-self:flex-start", onclick: () => { revealedAnswers.add(key); renderRoute(); } }, "Show Answer")
      ]);
    })),
    mcqs.length
      ? el("button", { class: "btn btn-primary btn-block", style: "margin-top:12px", onclick: () => startPractice({ subject: ch.subject, chapter: chapterId }) },
          `Attempt all ${mcqs.length} chapter MCQs →`)
      : el("p", { class: "small muted", style: "margin:0" }, "No MCQs for this chapter in the bank yet.")
  ]);

  wrap.append(conceptsCard, formulaCard, mistakesCard, examplesCard, writtenCard, mcqCard);

  wrap.appendChild(el("div", { class: "row between", style: "margin-top:8px" }, [
    prev ? el("button", { class: "btn btn-ghost", onclick: () => navigate("chapter", { chapterId: prev.id }) }, `← ${prev.name}`) : el("span", {}),
    next ? el("button", { class: "btn btn-primary", onclick: () => navigate("chapter", { chapterId: next.id }) }, `${next.name} →`) : el("span", {})
  ]));

  return wrap;
}

/* ===== Question bank: every written Q&A with filters ===== */
function questionBankView(opts = {}) {
  const subject = opts.subject || "all";
  const toneFilter = questionBankView._tone || "all";
  let rows = allWrittenQuestions();
  if (subject !== "all") rows = rows.filter((r) => r.subject === subject);
  if (toneFilter !== "all") rows = rows.filter((r) => r.tone === toneFilter);

  const wrap = el("div", {});
  wrap.appendChild(el("div", { class: "view-head" }, [
    el("div", {}, [
      el("h1", {}, "Question Bank"),
      el("p", {}, "Every written question with answers hidden — Short, Long, Application and Competency.")
    ]),
    el("div", { class: "row wrap" }, [
      el("span", { class: "badge primary" }, `${allWrittenQuestions().length} Q&A`),
      el("button", { class: "btn btn-ghost btn-sm", onclick: () => window.print() }, "🖨 Print")
    ])
  ]));

  const seg = el("div", { class: "seg", style: "max-width:620px; margin-bottom:12px" },
    [["all", "All subjects"], ["physics", "Physics"], ["chemistry", "Chemistry"], ["biology", "Biology"]].map(([key, label]) =>
      el("button", {
        class: subject === key ? "active" : "",
        onclick: () => { questionBankView._subject = key; navigate("questionbank", { subject: key }); }
      }, label)
    ));

  const toneSeg = el("div", { class: "seg", style: "max-width:520px; margin-bottom:16px" },
    [["all", "All tones"], ["short", "Short"], ["long", "Long"], ["application", "Application"], ["competency", "Competency"]].map(([key, label]) =>
      el("button", {
        class: toneFilter === key ? "active" : "",
        onclick: () => { questionBankView._tone = key; renderRoute(); }
      }, label)
    ));

  wrap.append(seg, toneSeg);

  wrap.appendChild(el("div", { class: "card" }, [
    el("div", { class: "card-title" }, [
      el("h3", {}, `${rows.length} questions`),
      el("span", { class: "tiny muted" }, "answers stay hidden until you click")
    ]),
    el("div", { class: "list" }, rows.map((row) => {
      const shown = revealedAnswers.has(row.id);
      return el("div", { class: "formula-card" }, [
        el("div", { class: "row between wrap" }, [
          el("div", { class: "row wrap" }, [
            el("span", { class: "badge primary" }, TONE_LABELS[row.tone]),
            el("span", { class: "badge" }, row.subject === "physics" ? "⚛ Physics" : row.subject === "chemistry" ? "🧪 Chemistry" : "🧬 Biology")
          ]),
          el("span", { class: "tiny muted" }, row.chapter)
        ]),
        el("div", { class: "small", style: "font-weight:650; line-height:1.6" }, row.q),
        shown
          ? el("div", { class: "small muted", style: "line-height:1.75; border-left:2px solid var(--accent); padding-left:10px" }, row.a)
          : el("button", { class: "btn btn-ghost btn-sm", style: "align-self:flex-start", onclick: () => { revealedAnswers.add(row.id); renderRoute(); } }, "Show Answer")
      ]);
    }))
  ]));

  return wrap;
}

/* ===== Drill: all MCQs for a subject, answers hidden ===== */
function drillView(opts = {}) {
  const subject = opts.subject || "all";
  const pool = subject === "all" ? practicePool() : mcqsForSubject(subject);
  const drill = drillView._set && drillView._subject === subject ? drillView._set : shuffle(pool);
  drillView._set = drill;
  drillView._subject = subject;

  const wrap = el("div", {});
  wrap.appendChild(el("div", { class: "view-head" }, [
    el("div", {}, [
      el("h1", {}, "MCQ Drill"),
      el("p", {}, "Attempt first, then reveal. Every question carries an explanation that teaches the concept.")
    ]),
    el("div", { class: "row wrap" }, [
      el("button", { class: "btn btn-ghost btn-sm", onclick: () => { drillView._set = null; renderRoute(); } }, "🔀 Reshuffle"),
      el("button", { class: "btn btn-primary btn-sm", onclick: () => startPractice({ subject, mode: "all" }) }, "Timed practice instead →")
    ])
  ]));

  const seg = el("div", { class: "seg", style: "max-width:420px; margin-bottom:16px" },
    [["all", "All"], ["physics", "Physics"], ["chemistry", "Chemistry"], ["biology", "Biology"]].map(([key, label]) =>
      el("button", { class: subject === key ? "active" : "", onclick: () => { drillView._set = null; drillView._subject = key; navigate("drill", { subject: key }); } }, label)
    ));
  wrap.appendChild(seg);

  wrap.appendChild(el("div", { class: "card" }, [
    el("div", { class: "card-title" }, [el("h3", {}, `${drill.length} MCQs`), el("span", { class: "badge" }, "answers hidden")]),
    el("div", { class: "list" }, drill.map((q) => {
      const key = `mcq-${q.id}`;
      const shown = revealedAnswers.has(key);
      return el("div", { class: "formula-card" }, [
        el("div", { class: "row between wrap" }, [
          el("span", { class: "badge" }, SUBJECT_META[q.subject].label),
          el("span", { class: "tiny muted" }, getChapterName(q.chapter))
        ]),
        el("div", { class: "small", style: "font-weight:650; line-height:1.6" }, q.q),
        el("div", { class: "small muted", style: "line-height:1.8" }, q.options.map((o, i) => `${String.fromCharCode(65 + i)}. ${o}`).join("   ")),
        shown
          ? el("div", {}, [
              el("div", { class: "small", style: "color:var(--accent); font-weight:650" }, `Answer: ${String.fromCharCode(65 + q.answer)}. ${q.options[q.answer]}`),
              el("div", { class: "tiny muted", style: "margin-top:6px" }, q.explanation)
            ])
          : el("button", { class: "btn btn-ghost btn-sm", style: "align-self:flex-start", onclick: () => { revealedAnswers.add(key); renderRoute(); } }, "Show Answer")
      ]);
    }))
  ]));

  return wrap;
}

VIEWS.chapter = chapterView;
VIEWS.questionbank = questionBankView;
VIEWS.drill = drillView;
