/* ===== Untimed practice with instant feedback, filters and smart mode ===== */

function startPractice(opts = {}) {
  const { subject = "all", chapter = null, mode = "all", difficulty = "all" } = opts;
  let pool = getQuestionsBySubject(subject);
  if (chapter) pool = pool.filter((q) => q.chapter === chapter);
  if (difficulty !== "all") pool = pool.filter((q) => q.difficulty === difficulty);

  const st = getState();
  if (mode === "smart") {
    // unseen first, then previously-wrong, then the rest
    pool.sort((a, b) => {
      const ra = st.seen[a.id], rb = st.seen[b.id];
      const scoreOf = (r) => (!r ? 2 : r.wrong > 0 ? 1 : 0);
      return scoreOf(rb) - scoreOf(ra);
    });
  } else if (mode === "weak") {
    pool = pool.filter((q) => st.seen[q.id] && st.seen[q.id].wrong > 0);
  } else if (mode === "bookmarked") {
    pool = QUESTION_BANK.filter((q) => st.bookmarks.includes(q.id));
  } else if (mode === "unseen") {
    pool = pool.filter((q) => !st.seen[q.id]);
  } else {
    pool = shuffle(pool);
  }

  if (!pool.length) {
    toast("No questions match this filter yet", "error");
    return;
  }

  practiceState = {
    pool,
    index: 0,
    chosen: null,
    revealed: false,
    answers: [],
    startTs: Date.now(),
    title: chapter ? getChapterName(chapter) : subject === "all" ? "Mixed practice" : SUBJECT_META[subject].label
  };
  navigate("practice");
}

function practiceView() {
  return practiceState ? practiceRunnerView() : practiceIntroView();
}

function practiceIntroView() {
  const st = getState();
  const wrongCount = Object.values(st.seen).filter((r) => r.wrong > 0).length;
  const unseenCount = QUESTION_BANK.length - Object.keys(st.seen).length;

  const options = [
    { title: "Smart practice", sub: "Unseen + previously wrong questions first", mode: "smart", icon: "★", cls: "btn-primary" },
    { title: "Everything", sub: "Full shuffled bank, all subjects", mode: "all", icon: "∞", cls: "btn-accent" },
    { title: "Only unseen", sub: `${unseenCount} questions still untouched`, mode: "unseen", icon: "◌", cls: "btn-ghost" },
    { title: "Only wrong ones", sub: `${wrongCount} questions answered incorrectly`, mode: "weak", icon: "⚑", cls: "btn-ghost" },
    { title: "Bookmarked", sub: `${st.bookmarks.length} saved questions`, mode: "bookmarked", icon: "☆", cls: "btn-ghost" }
  ];

  const subjectPicker = el("div", { class: "seg" }, ["all", "physics", "chemistry", "biology"].map((s) =>
    el("button", {
      class: s === "all" ? "active" : "",
      onclick: (e) => {
        $$(".subject-seg button").forEach((b) => b.classList.remove("active"));
        e.currentTarget.classList.add("active");
        pickChapter(s);
      }
    }, s === "all" ? "All subjects" : SUBJECT_META[s].label)
  ));
  subjectPicker.classList.add("subject-seg");

  const chapterBox = el("div", { style: "margin-top:14px" });
  function pickChapter(subject) {
    chapterBox.innerHTML = "";
    const chapters = subject === "all" ? [] : SYLLABUS[subject].chapters;
    if (!chapters.length) {
      chapterBox.appendChild(el("p", { class: "small muted" }, "Choose a subject to drill a specific chapter, or start mixed practice below."));
      return;
    }
    chapterBox.appendChild(el("div", { class: "row wrap" }, chapters.map((ch) =>
      el("button", {
        class: "chip",
        onclick: () => startPractice({ subject, chapter: ch.id })
      }, `${ch.name} · ${ch.weight} Q`)
    )));
  }
  pickChapter("all");

  return el("div", {}, [
    el("div", { class: "view-head" }, [
      el("div", {}, [
        el("h1", {}, "Practice"),
        el("p", {}, "Untimed practice with instant explanations — the fastest way to build accuracy.")
      ]),
      el("span", { class: "badge primary" }, `${QUESTION_BANK.length} questions available`)
    ]),
    el("div", { class: "grid grid-3", style: "margin-bottom:16px" }, options.map((o) =>
      el("div", { class: "card" }, [
        el("div", { class: "row", style: "gap:10px; margin-bottom:8px" }, [
          el("span", { style: "font-size:20px" }, o.icon),
          el("strong", {}, o.title)
        ]),
        el("p", { class: "small muted", style: "margin-bottom:14px" }, o.sub),
        el("button", { class: `btn ${o.cls} btn-block`, onclick: () => startPractice({ mode: o.mode }) }, "Start")
      ])
    )),
    el("div", { class: "card" }, [
      el("h3", {}, "Drill a chapter"),
      el("p", { class: "small muted" }, "Questions are sampled from the offline bank. Chapters with more weight in the exam are shown with their average question count."),
      subjectPicker,
      chapterBox
    ])
  ]);
}

function practiceRunnerView() {
  const p = practiceState;
  const q = p.pool[p.index];
  const st = getState();
  const rec = st.seen[q.id];
  const progressPct = Math.round((p.index / p.pool.length) * 100);
  const answeredCount = p.answers.length;
  const correctCount = p.answers.filter((a) => a.correct).length;

  const card = el("div", { class: "q-card" }, [
    el("div", { class: "q-meta" }, [
      el("span", { class: "q-number" }, `${p.index + 1} / ${p.pool.length}`),
      el("span", { class: "badge" }, SUBJECT_META[q.subject].icon + " " + SUBJECT_META[q.subject].label),
      el("span", { class: "badge" }, getChapterName(q.chapter)),
      el("span", { class: `badge ${q.difficulty === "hard" ? "bad" : q.difficulty === "medium" ? "warn" : "good"}` }, q.difficulty),
      rec ? el("span", { class: "badge" }, rec.wrong > 0 ? `missed ${rec.wrong}×` : "solved before") : null
    ]),
    el("div", { class: "q-text" }, q.q),
    el("div", { class: "options" }, q.options.map((opt, i) => {
      let cls = "option";
      if (p.revealed) {
        if (i === q.answer) cls += " correct";
        else if (i === p.chosen) cls += " wrong";
      } else if (p.chosen === i) cls += " selected";
      return el("button", {
        class: cls,
        disabled: p.revealed ? "" : null,
        onclick: () => { if (!p.revealed) { p.chosen = i; renderRoute(); } }
      }, [
        el("span", { class: "option-key" }, String.fromCharCode(65 + i)),
        el("span", {}, opt)
      ]);
    })),
    p.revealed ? el("div", { class: "explanation" }, [
      el("strong", {}, p.chosen === q.answer ? "Correct! " : "Not quite. "),
      q.explanation
    ]) : null,
    el("div", { class: "row between wrap", style: "margin-top:18px" }, [
      el("div", { class: "row" }, [
        el("button", { class: "btn btn-ghost btn-sm", onclick: () => { toggleBookmark(q); toast("Bookmark toggled", "success"); renderRoute(); } },
          isBookmarked(q) ? "★ Bookmarked" : "☆ Bookmark"),
        el("button", { class: "btn btn-ghost btn-sm", onclick: () => openNoteEditor(q) }, "✎ Note")
      ]),
      el("div", { class: "row" }, [
        !p.revealed ? el("button", {
          class: "btn btn-primary",
          disabled: p.chosen === null ? "" : null,
          onclick: () => {
            const isCorrect = p.chosen === q.answer;
            p.revealed = true;
            p.answers.push({ id: q.id, correct: isCorrect });
            logAnswer(q, p.chosen, isCorrect, 0);
            if (isCorrect) toast("+1 correct", "success");
            renderRoute();
          }
        }, "Check answer") : null,
        p.revealed ? el("button", {
          class: "btn btn-primary",
          onclick: () => {
            if (p.index < p.pool.length - 1) {
              p.index += 1; p.chosen = null; p.revealed = false; renderRoute();
            } else {
              finishPractice();
            }
          }
        }, p.index < p.pool.length - 1 ? "Next question →" : "Finish session") : null
      ])
    ])
  ]);

  const side = el("div", { style: "display:flex; flex-direction:column; gap:16px; position:sticky; top:14px" }, [
    el("div", { class: "card tight" }, [
      el("div", { class: "stat-label" }, "Session"),
      el("div", { class: "stat-value" }, `${correctCount}/${answeredCount || 0}`),
      el("div", { class: "tiny muted", style: "margin-bottom:10px" }, "correct in this session"),
      el("div", { class: "bar thin" }, el("span", { style: `width:${progressPct}%` })),
      el("div", { class: "tiny muted", style: "margin-top:6px" }, `${progressPct}% of set completed`)
    ]),
    el("div", { class: "card tight" }, [
      el("div", { class: "card-title" }, [el("strong", { class: "small" }, "Jump to")]),
      el("div", { class: "palette" }, p.pool.slice(0, 50).map((item, i) => {
        let cls = "pal-btn";
        const ans = p.answers.find((a) => a.id === item.id);
        if (ans) cls += ans.correct ? " correct" : " wrong";
        if (i === p.index) cls += " current";
        return el("button", {
          class: cls, onclick: () => { p.index = i; p.chosen = null; p.revealed = false; renderRoute(); }
        }, String(i + 1));
      }))
    ]),
    el("button", { class: "btn btn-ghost btn-block", onclick: () => { practiceState = null; renderRoute(); } }, "End session")
  ]);

  return el("div", {}, [
    el("div", { class: "view-head" }, [
      el("div", {}, [el("h1", {}, p.title), el("p", {}, "Instant feedback mode")]),
      el("div", { class: "row" }, [
        el("button", { class: "btn btn-ghost btn-sm", onclick: () => { practiceState = null; navigate("practice"); } }, "Change set"),
        el("span", { class: "tiny muted" }, "Keys: 1–4 select · Space checks · Enter next"),
        el("button", { class: "btn btn-primary btn-sm", onclick: finishPractice }, "Finish")
      ])
    ]),
    el("div", { class: "exam-shell" }, [card, side])
  ]);
}

function finishPractice() {
  const p = practiceState;
  const answered = p.answers.length;
  const correct = p.answers.filter((a) => a.correct).length;
  const timeTaken = Math.round((Date.now() - p.startTs) / 1000);
  recordSession({
    type: "practice",
    mode: "practice",
    title: p.title,
    total: answered,
    correct,
    accuracy: pct(correct, answered),
    timeTaken,
    date: new Date().toISOString()
  });
  const st = getState();
  st.studySeconds += timeTaken;
  const day = todayKey();
  const log = st.dailyLog[day] || { attempted: 0, correct: 0, seconds: 0 };
  log.seconds += timeTaken;
  st.dailyLog[day] = log;
  saveState();

  practiceState = null;
  showSessionSummary({ answered, correct, timeTaken, title: p.title });
}

function showSessionSummary({ answered, correct, timeTaken }) {
  const overlay = el("div", { class: "modal-overlay" });
  overlay.appendChild(el("div", { class: "modal" }, [
    el("h2", {}, "Session complete"),
    el("div", { class: "grid grid-3", style: "margin:18px 0" }, [
      el("div", { class: "formula-card center" }, [el("div", { class: "stat-value" }, String(answered)), el("div", { class: "tiny muted" }, "attempted")]),
      el("div", { class: "formula-card center" }, [el("div", { class: "stat-value", style: "color:#22d3a5" }, String(correct)), el("div", { class: "tiny muted" }, "correct")]),
      el("div", { class: "formula-card center" }, [el("div", { class: "stat-value" }, `${pct(correct, answered)}%`), el("div", { class: "tiny muted" }, "accuracy")])
    ]),
    el("p", { class: "small muted" }, `You spent ${formatDuration(timeTaken)} on this set. ${answered - correct > 0 ? `${answered - correct} question(s) were missed — they are now in the Mistakes tab.` : "No mistakes — great work!"}`),
    el("div", { class: "modal-actions" }, [
      el("button", { class: "btn btn-ghost", onclick: () => { overlay.remove(); navigate("dashboard"); } }, "Dashboard"),
      el("button", { class: "btn btn-primary", onclick: () => { overlay.remove(); startPractice({ mode: "weak" }); } }, "Practice mistakes")
    ])
  ]));
  document.body.appendChild(overlay);
}

function openNoteEditor(question) {
  const st = getState();
  const qid = qKey(question);
  const overlay = el("div", { class: "modal-overlay" });
  const area = el("textarea", { placeholder: "Why did you get this wrong? Write the fix in one line…" });
  area.value = st.notes[qid] || "";
  overlay.appendChild(el("div", { class: "modal" }, [
    el("h3", {}, "Add a personal note"),
    el("p", { class: "small muted" }, getChapterName(question.chapter) + " · " + question.q),
    area,
    el("div", { class: "modal-actions" }, [
      el("button", { class: "btn btn-ghost", onclick: () => overlay.remove() }, "Cancel"),
      el("button", {
        class: "btn btn-primary",
        onclick: () => { saveNote(question, area.value); overlay.remove(); toast("Note saved", "success"); renderRoute(); }
      }, "Save note")
    ])
  ]));
  overlay.addEventListener("click", (e) => { if (e.target === overlay) overlay.remove(); });
  document.body.appendChild(overlay);
  area.focus();
}

VIEWS.practice = practiceView;
