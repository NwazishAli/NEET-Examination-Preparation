/* ===== Subjects index + per-subject hub (units, chapters, dashboard, cycle links) ===== */

function subjectsIndexView() {
  const wrap = el("div", {});
  const totalChapters = Object.keys(CHAPTER_NOTES).length;
  const totalWritten = allWrittenQuestions().length;

  wrap.appendChild(el("div", { class: "view-head" }, [
    el("div", {}, [
      el("h1", {}, "Subjects"),
      el("p", {}, "One hub per subject: chapter notes, formula boxes, tricks, mistakes and exam Q&A in four tones.")
    ]),
    el("div", { class: "row wrap" }, [
      el("span", { class: "badge primary" }, `${totalChapters} chapters`),
      el("span", { class: "badge" }, `${totalWritten} written Q&A`),
      el("span", { class: "badge" }, `${practicePool().length} MCQs`)
    ])
  ]));

  const grid = el("div", { class: "grid grid-3" });
  Object.entries(SUBJECT_META).forEach(([key, meta]) => {
    const stats = subjectContentStats(key);
    const prog = subjectProgress(key);
    grid.appendChild(el("div", { class: "card" }, [
      el("div", { class: "row between" }, [
        el("div", { class: "row" }, [el("span", { style: "font-size:24px" }, meta.icon)]),
        el("span", { class: "badge primary" }, `${stats.weight} Q / paper`)
      ]),
      el("h2", { style: "margin:10px 0 4px; font-size:19px" }, meta.label),
      el("p", { class: "small muted", style: "min-height:44px" }, SUBJECT_EXAM_INFO[key].note),
      el("div", { class: "row wrap", style: "margin:10px 0" }, [
        el("span", { class: "badge" }, `${stats.chapters} chapters`),
        el("span", { class: "badge" }, `${stats.units} units`),
        el("span", { class: "badge" }, `${stats.written} Q&A`),
        el("span", { class: "badge" }, `${stats.mcqs} MCQs`)
      ]),
      el("div", { class: "row between tiny muted", style: "margin-bottom:6px" }, [
        el("span", {}, "Chapters complete"),
        el("span", {}, `${prog.done}/${prog.total}`)
      ]),
      el("div", { class: "bar thin", style: "margin-bottom:14px" }, el("span", { style: `width:${prog.pct}%; background:${meta.color}` })),
      el("button", { class: "btn btn-primary btn-block", onclick: () => navigate("subject", { subject: key }) }, `Open ${meta.label} hub →`)
    ]));
  });

  wrap.appendChild(grid);

  wrap.appendChild(el("div", { class: "card", style: "margin-top:16px" }, [
    el("h3", {}, "How to use these hubs"),
    el("ol", { class: "small muted", style: "margin:0; padding-left:20px; line-height:1.9" }, [
      el("li", {}, [el("strong", {}, "Learn — "), "read the Deep concepts, then the Formula box."]),
      el("li", {}, [el("strong", {}, "Write — "), "cover the answer, write Short / Long / Application / Competency in a notebook, then Show Answer."]),
      el("li", {}, [el("strong", {}, "Drill — "), "attempt the MCQs for the chapter, then the whole subject."]),
      el("li", {}, [el("strong", {}, "Revise — "), "the formula and trick card, then tick Mark complete."]),
      el("li", {}, [el("strong", {}, "Test — "), "run a timed mock from the Mock Test centre and read the report it flags."])
    ])
  ]));

  return wrap;
}

function subjectHubView(opts = {}) {
  const subject = opts.subject || (location.hash.split("/")[2] || "physics").split("?")[0];
  if (!SYLLABUS[subject]) {
    return el("div", { class: "card center" }, [
      el("h2", {}, "Subject not found"),
      el("button", { class: "btn btn-primary", style: "margin-top:10px", onclick: () => navigate("subjects") }, "All subjects")
    ]);
  }
  const meta = SUBJECT_META[subject];
  const info = SUBJECT_EXAM_INFO[subject];
  const chapters = chaptersOf(subject);
  const prog = subjectProgress(subject);
  const units = SUBJECT_UNITS[subject] || [];
  const stats = subjectContentStats(subject);
  const firstChapter = chapters[0];

  const wrap = el("div", {});

  wrap.appendChild(el("div", { class: "view-head" }, [
    el("div", {}, [
      el("div", { class: "row", style: "margin-bottom:6px" }, [
        el("button", { class: "btn btn-ghost btn-sm", onclick: () => navigate("subjects") }, "← Subjects"),
        el("span", { class: "badge primary" }, `${info.questions} questions · ${info.marks} marks`)
      ]),
      el("h1", {}, `${meta.icon} ${meta.label}`),
      el("p", {}, info.note)
    ]),
    el("div", { class: "row wrap" }, [
      el("button", { class: "btn btn-primary btn-sm", onclick: () => navigate("chapter", { chapterId: firstChapter.id }) }, `Start ${firstChapter.name} →`),
      el("button", { class: "btn btn-ghost btn-sm", onclick: () => startPractice({ subject }) }, "Drill MCQs"),
      el("button", { class: "btn btn-ghost btn-sm", onclick: () => navigate("questionbank", { subject }) }, "Question bank")
    ])
  ]));

  /* dashboard */
  wrap.appendChild(el("div", { class: "grid grid-4", style: "margin-bottom:16px" }, [
    el("div", { class: "card tight" }, [
      el("div", { class: "stat-label" }, "Chapters complete"),
      el("div", { class: "stat-value" }, `${prog.done}/${prog.total}`),
      el("div", { class: "bar thin", style: "margin-top:8px" }, el("span", { style: `width:${prog.pct}%; background:${meta.color}` }))
    ]),
    el("div", { class: "card tight" }, [el("div", { class: "stat-label" }, "Written Q&A"), el("div", { class: "stat-value" }, String(stats.written)), el("div", { class: "tiny muted" }, "four answer tones")]),
    el("div", { class: "card tight" }, [el("div", { class: "stat-label" }, "MCQ pool"), el("div", { class: "stat-value" }, String(stats.mcqs)), el("div", { class: "tiny muted" }, "bank + back papers")]),
    el("div", { class: "card tight" }, [el("div", { class: "stat-label" }, "Exam minutes"), el("div", { class: "stat-value" }, String(info.minutes)), el("div", { class: "tiny muted" }, "of the 200-min paper")])
  ]));

  /* units */
  units.forEach((unit) => {
    const unitChapters = unit.chapters.map((id) => chapters.find((c) => c.id === id)).filter(Boolean);
    if (!unitChapters.length) return;
    const unitWeight = unitChapters.reduce((s, c) => s + c.weight, 0);
    const unitDone = unitChapters.filter((c) => isChapterDone(c.id)).length;

    const card = el("div", { class: "card", style: "margin-bottom:16px" }, [
      el("div", { class: "card-title" }, [
        el("div", { class: "row wrap" }, [
          el("h3", { style: "margin:0" }, unit.name),
          el("span", { class: "badge primary" }, `${unitWeight} Q / paper`)
        ]),
        el("span", { class: "tiny muted" }, `${unitDone}/${unitChapters.length} complete`)
      ]),
      el("div", { class: "grid grid-2" }, unitChapters.map((ch) => {
        const done = isChapterDone(ch.id);
        const notes = noteFor(ch.id);
        const written = writtenFor(ch.id);
        const wCount = written.short.length + written.long.length + written.application.length + written.competency.length;
        return el("button", {
          class: "list-row", style: "text-align:left; cursor:pointer; font-family:inherit; color:inherit; width:100%",
          onclick: () => navigate("chapter", { chapterId: ch.id })
        }, [
          el("div", { class: "grow" }, [
            el("div", { style: "font-weight:650; font-size:13.5px" }, [
              done ? el("span", { style: "color:var(--accent)" }, "✓ ") : null,
              ch.name
            ]),
            el("div", { class: "tiny muted", style: "margin-top:3px" },
              `${ch.weight} Q · ${wCount} Q&A · ${mcqsFor(ch.id).length} MCQs · Class ${ch.class}`),
            notes ? el("div", { class: "tiny muted", style: "margin-top:4px" },
              String(notes.concepts[0] || "").slice(0, 78) + "…") : null
          ]),
          el("span", { class: "badge" }, "→")
        ]);
      }))
    ]);
    wrap.appendChild(card);
  });

  /* cycle + assessment */
  wrap.appendChild(el("div", { class: "grid grid-2" }, [
    el("div", { class: "card" }, [
      el("h3", {}, "Follow the cycle, in order"),
      el("div", { class: "list", style: "margin-top:10px" }, [
        ["1 · Learn", "Chapter notes, concepts, tricks.", () => navigate("chapter", { chapterId: firstChapter.id })],
        ["2 · Write", "Short · Long · Application · Competency from the question bank.", () => navigate("questionbank", { subject })],
        ["3 · Drill", "MCQs for the whole subject, answers hidden.", () => startPractice({ subject })],
        ["4 · Revise", "One-page formula sheet and mistakes list.", () => navigate("formulas")],
        ["5 · Test", "A timed mock; read the report it flags.", () => navigate("exam")]
      ].map(([title, sub, fn]) =>
        el("button", { class: "list-row", style: "text-align:left; font-family:inherit; color:inherit; cursor:pointer; width:100%", onclick: fn }, [
          el("div", { class: "grow" }, [
            el("div", { style: "font-weight:650; font-size:13px" }, title),
            el("div", { class: "tiny muted" }, sub)
          ]),
          el("span", { class: "badge" }, "→")
        ])
      ))
    ]),
    el("div", { class: "card" }, [
      el("h3", {}, "Assessment at a glance"),
      el("table", { class: "table" }, [
        el("tbody", {}, [
          el("tr", {}, [el("td", {}, "Questions in paper"), el("td", { style: "text-align:right; font-weight:700" }, String(info.questions))]),
          el("tr", {}, [el("td", {}, "Marks at +4 each"), el("td", { style: "text-align:right; font-weight:700" }, String(info.marks))]),
          el("tr", {}, [el("td", {}, "Suggested time"), el("td", { style: "text-align:right; font-weight:700" }, `${info.minutes} min`)]),
          el("tr", {}, [el("td", {}, "Negative marking"), el("td", { style: "text-align:right; font-weight:700; color:var(--danger)" }, "−1")]),
          el("tr", {}, [el("td", {}, "Chapters"), el("td", { style: "text-align:right; font-weight:700" }, String(chapters.length))])
        ])
      ]),
      el("p", { class: "tiny muted", style: "margin:10px 0 0" }, "Whole paper: 180 questions, 720 marks, 200 minutes.")
    ])
  ]));

  return wrap;
}

VIEWS.subjects = subjectsIndexView;
VIEWS.subject = subjectHubView;
