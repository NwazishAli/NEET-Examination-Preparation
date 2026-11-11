/* ===== Mock centre: every mock in one place, fresh paper each attempt,
   recent attempts table, subject + chapter-wise mocks, print-friendly papers ===== */

function mockCentreView() {
  const st = getState();
  const recent = (st.sessions || []).filter((s) => s.type === "exam").slice(0, 8);

  const wrap = el("div", {});
  wrap.appendChild(el("div", { class: "view-head" }, [
    el("div", {}, [
      el("h1", {}, "Mock Centre"),
      el("p", {}, "Every mock in one place. Each attempt draws a fresh paper from the pool — timed with a report, or printable to attempt on paper.")
    ]),
    el("div", { class: "row wrap" }, [
      el("span", { class: "badge primary" }, `${practicePool().length} question pool`),
      el("span", { class: "badge" }, `${Object.values(SYLLABUS).reduce((s, x) => s + x.chapters.length, 0)} chapter mocks`)
    ])
  ]));

  /* recent attempts */
  const recentCard = el("div", { class: "card", style: "margin-bottom:16px" }, [
    el("div", { class: "card-title" }, [
      el("h3", {}, "Your recent attempts"),
      recent.length ? el("button", {
        class: "btn btn-ghost btn-sm",
        onclick: async () => {
          const ok = await confirmDialog("Clear history?", "This removes your mock attempt history from this device. Question statistics are kept.", "Clear");
          if (!ok) return;
          const s = getState();
          s.sessions = s.sessions.filter((x) => x.type !== "exam");
          saveState();
          toast("History cleared", "success");
          renderRoute();
        }
      }, "Clear history") : null
    ]),
    recent.length
      ? el("div", { style: "overflow-x:auto" }, el("table", { class: "table" }, [
          el("thead", {}, el("tr", {}, [
            el("th", {}, "When"), el("th", {}, "Paper"), el("th", {}, "Score"),
            el("th", {}, "%"), el("th", {}, "Time")
          ])),
          el("tbody", {}, recent.map((s) => el("tr", {}, [
            el("td", { class: "tiny muted" }, new Date(s.date).toLocaleString()),
            el("td", { class: "small" }, s.title || (s.mode === "mini" ? "Mini test" : s.mode === "pyq" ? "Back paper" : "Full-length")),
            el("td", {}, `${s.score} / ${s.maxScore}`),
            el("td", {}, el("span", { class: `badge ${s.accuracy >= 70 ? "good" : s.accuracy >= 45 ? "warn" : "bad"}` }, `${s.accuracy}%`)),
            el("td", { class: "tiny muted" }, formatDuration(s.timeTaken))
          ])))
        ]))
      : el("p", { class: "small muted", style: "margin:0" }, "No attempts yet on this device. Start with a full-length mock.")
  ]);
  wrap.appendChild(recentCard);

  /* full + mini + back papers */
  const cards = [
    { icon: "◈", title: "Full-length mock", sub: "180 questions · Physics 45, Chemistry 45, Biology 90", meta: ["200 min", "720 marks", "+4 / −1"], action: () => startExam("full"), cta: "Start full mock" },
    { icon: "◆", title: "Mini mock", sub: "40 questions in 40 minutes — a daily timed drill", meta: ["40 min", "160 marks", "+4 / −1"], action: () => startExam("mini"), cta: "Start mini mock" },
    { icon: "▣", title: "Back papers", sub: "Year-wise papers 2019–2024, untimed with instant report", meta: [`${allPyqQuestions().length} questions`, "6 sessions"], action: () => navigate("pyq"), cta: "Open back papers" }
  ];

  wrap.appendChild(el("div", { class: "grid grid-3", style: "margin-bottom:16px" }, cards.map((c) =>
    el("div", { class: "card" }, [
      el("div", { class: "row", style: "gap:10px; margin-bottom:8px" }, [
        el("span", { style: "font-size:22px" }, c.icon),
        el("strong", {}, c.title)
      ]),
      el("p", { class: "small muted", style: "min-height:40px" }, c.sub),
      el("div", { class: "row wrap", style: "margin:10px 0" }, c.meta.map((m) => el("span", { class: "badge" }, m))),
      el("button", { class: "btn btn-primary btn-block", onclick: c.action }, c.cta)
    ])
  )));

  /* subject mocks */
  const subjectCard = el("div", { class: "card", style: "margin-bottom:16px" }, [
    el("h3", {}, "Subject mocks"),
    el("p", { class: "small muted" }, "One subject at a time, sized like its share of the real paper."),
    el("div", { class: "grid grid-3", style: "margin-top:10px" }, Object.entries(SUBJECT_META).map(([key, meta]) => {
      const info = SUBJECT_EXAM_INFO[key];
      return el("div", { class: "formula-card" }, [
        el("div", { class: "row between" }, [
          el("strong", { class: "small" }, `${meta.icon} ${meta.label}`),
          el("span", { class: "badge primary" }, `${info.questions} Q`)
        ]),
        el("div", { class: "tiny muted" }, `${info.minutes} min · ${info.marks} marks · pool ${mcqsForSubject(key).length}`),
        el("div", { class: "row wrap", style: "margin-top:8px" }, [
          el("button", { class: "btn btn-primary btn-sm", onclick: () => startSubjectMock(key) }, "Start mock"),
          el("button", { class: "btn btn-ghost btn-sm", onclick: () => startPractice({ subject: key }) }, "Practice")
        ])
      ]);
    }))
  ]);
  wrap.appendChild(subjectCard);

  /* chapter-wise mocks */
  const chapterCard = el("div", { class: "card" }, [
    el("div", { class: "card-title" }, [
      el("h3", {}, "Chapter-wise mocks"),
      el("span", { class: "tiny muted" }, "10 questions per chapter set")
    ]),
    el("p", { class: "small muted" }, "Short timed sets that tell you exactly which chapter needs work. Each generates a fresh order every attempt."),
    el("div", { class: "list", style: "margin-top:10px" }, Object.entries(SYLLABUS).flatMap(([subject, data]) =>
      data.chapters.map((ch) => {
        const n = mcqsFor(ch.id).length;
        return el("div", { class: "list-row" }, [
          el("span", { class: "badge", style: "flex:none" }, metaIcon(subject)),
          el("div", { class: "grow" }, [
            el("div", { style: "font-weight:650; font-size:13px" }, ch.name),
            el("div", { class: "tiny muted" }, `${data.label} · ${ch.weight} Q/paper · ${n} in pool`)
          ]),
          el("button", {
            class: "btn btn-ghost btn-sm",
            disabled: n === 0 ? "" : null,
            onclick: () => startChapterMock(ch.id, subject)
          }, n ? "Start" : "—")
        ]);
      })
    ))
  ]);
  wrap.appendChild(chapterCard);

  return wrap;
}

function metaIcon(subject) {
  return SUBJECT_META[subject].icon;
}

/* Subject mock: draws a fixed-size paper for one subject using the exam engine */
function startSubjectMock(subject) {
  const info = SUBJECT_EXAM_INFO[subject];
  const pool = shuffle(mcqsForSubject(subject));
  const count = Math.min(info.questions, pool.length);
  const questions = [];
  let bag = pool.slice();
  while (questions.length < count) {
    if (!bag.length) bag = shuffle(mcqsForSubject(subject));
    questions.push(bag.pop());
  }
  activeExam = {
    mode: "subject",
    subject,
    questions,
    answers: new Array(questions.length).fill(null),
    marked: new Set(),
    index: 0,
    startTs: Date.now(),
    durationSeconds: info.minutes * 60,
    submitted: false,
    result: null
  };
  navigate("exam");
}

/* Chapter mock: 10 questions from one chapter through the practice engine */
function startChapterMock(chapterId, subject) {
  const key = `mock-${chapterId}`;
  let pool = shuffle(mcqsFor(chapterId));
  if (!pool.length) { toast("No questions for this chapter yet", "error"); return; }
  const set = pool.slice(0, Math.min(10, pool.length));
  practiceState = {
    pool: set,
    index: 0,
    chosen: null,
    revealed: false,
    answers: [],
    startTs: Date.now(),
    title: `${getChapterName(chapterId)} · chapter mock`
  };
  navigate("practice");
}

VIEWS.mockcentre = mockCentreView;
