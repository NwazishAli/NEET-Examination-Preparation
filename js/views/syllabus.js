/* ===== Syllabus tracker: coverage, accuracy and weightage per chapter ===== */

function syllabusView() {
  const st = getState();
  const stats = chapterStats();
  const byChapter = Object.fromEntries(stats.map((s) => [s.chapterId, s]));

  const wrap = el("div", {});
  wrap.appendChild(el("div", { class: "view-head" }, [
    el("div", {}, [
      el("h1", {}, "Syllabus Tracker"),
      el("p", {}, "Chapter weightage is the average number of questions per 180-question paper. Practise by weight — that's where the marks are.")
    ]),
    el("div", { class: "row" }, [
      el("span", { class: "badge primary" }, "Weightage: questions per paper")
    ])
  ]));

  Object.entries(SYLLABUS).forEach(([key, data]) => {
    const meta = SUBJECT_META[key];
    const subjectStat = subjectStats(key);
    const chapters = data.chapters.map((ch) => {
      const s = byChapter[ch.id];
      return { ...ch, stat: s };
    });
    const sorted = chapters.slice().sort((a, b) => b.weight - a.weight);

    const table = el("table", { class: "table" }, [
      el("thead", {}, el("tr", {}, [
        el("th", {}, "Chapter"),
        el("th", { style: "width:80px" }, "Weight"),
        el("th", { style: "width:110px" }, "Accuracy"),
        el("th", { style: "width:170px" }, "Coverage"),
        el("th", { style: "width:110px" }, "")
      ])),
      el("tbody", {}, sorted.map((ch) => {
        const s = ch.stat;
        return el("tr", {}, [
          el("td", {}, [
            el("div", { style: "font-weight:650; font-size:13.5px" }, ch.name),
            el("div", { class: "tiny muted" }, `Class ${ch.class}`)
          ]),
          el("td", {}, el("span", { class: `badge ${ch.weight >= 4 ? "primary" : ch.weight >= 3 ? "warn" : ""}` }, `${ch.weight} Q`)),
          el("td", {}, s
            ? el("span", { class: `badge ${s.accuracy >= 70 ? "good" : s.accuracy >= 45 ? "warn" : "bad"}` }, `${s.accuracy}%`)
            : el("span", { class: "tiny muted" }, "—")),
          el("td", {}, s
            ? el("div", {}, [
                el("div", { class: "bar thin" }, el("span", { style: `width:${s.coverage}%; background:${meta.color}` })),
                el("div", { class: "tiny muted", style: "margin-top:4px" }, `${s.seen}/${s.bankSize} questions`)
              ])
            : el("span", { class: "tiny muted" }, "Not started")),
          el("td", {}, el("button", {
            class: "btn btn-ghost btn-sm",
            onclick: () => startPractice({ subject: key, chapter: ch.id })
          }, s ? "Revise" : "Start"))
        ]);
      }))
    ]);

    wrap.appendChild(el("div", { class: "card", style: "margin-bottom:16px" }, [
      el("div", { class: "card-title" }, [
        el("div", { class: "row" }, [
          el("span", { style: "font-size:20px" }, meta.icon),
          el("h3", { style: "margin:0" }, data.label),
          el("span", { class: "badge" }, `${data.totalQuestions} questions / paper`)
        ]),
        el("div", { class: "row" }, [
          el("span", { class: "small muted" }, `${subjectStat.seen}/${subjectStat.total} in bank attempted`),
          el("span", { class: `badge ${subjectStat.accuracy >= 70 ? "good" : subjectStat.accuracy >= 45 ? "warn" : "bad"}` }, `${subjectStat.accuracy}% accuracy`)
        ])
      ]),
      table
    ]));
  });

  const priorityRows = stats
    .map((s) => ({ ...s, priority: Math.round((100 - s.accuracy) * s.weight) }))
    .sort((a, b) => b.priority - a.priority)
    .slice(0, 6);

  const highYield = stats.length
    ? el("div", { class: "card" }, [
        el("h3", {}, "Your priority order"),
        el("p", { class: "small muted" }, "Chapters sorted by accuracy x weight — the higher the score, the more marks you are currently leaving on the table."),
        el("div", { class: "list" }, priorityRows.map((s) =>
          el("div", { class: "list-row" }, [
            el("div", { class: "grow" }, [
              el("div", { style: "font-weight:650; font-size:13.5px" }, s.chapter),
              el("div", { class: "tiny muted" }, `${s.subjectLabel} · ${s.accuracy}% accuracy · ${s.weight} questions/paper`)
            ]),
            el("span", { class: "badge bad" }, `priority ${s.priority}`),
            el("button", {
              class: "btn btn-ghost btn-sm",
              onclick: () => startPractice({ subject: s.subject, chapter: s.chapterId })
            }, "Practice")
          ])
        ))
      ])
    : el("div", { class: "card" }, [
        el("h3", {}, "No data yet"),
        el("p", { class: "small muted", style: "margin:0" }, "Attempt a practice set or a mini test and this tracker will fill in automatically.")
      ]);

  wrap.appendChild(highYield);
  return wrap;
}

VIEWS.syllabus = syllabusView;
