/* ===== Mistakes, bookmarks and personal notes ===== */

function mistakesView() {
  const st = getState();
  const missed = QUESTION_BANK.filter((q) => st.seen[q.id] && st.seen[q.id].wrong > 0)
    .sort((a, b) => (st.seen[b.id].wrong - st.seen[a.id].wrong));
  const bookmarked = QUESTION_BANK.filter((q) => st.bookmarks.includes(q.id));
  const noted = QUESTION_BANK.filter((q) => st.notes[q.id]);

  const questionRow = (q, metaExtra) => {
    const rec = st.seen[q.id];
    const body = el("div", { class: "hidden", style: "padding:14px 16px; border:1px solid var(--border); border-top:none; border-radius:0 0 10px 10px; background:var(--surface)" });
    body.append(
      el("div", { class: "options", style: "gap:6px" }, q.options.map((opt, i) =>
        el("div", { class: `option ${i === q.answer ? "correct" : ""}` }, [
          el("span", { class: "option-key" }, String.fromCharCode(65 + i)),
          el("span", {}, opt)
        ])
      )),
      el("div", { class: "explanation" }, [el("strong", {}, "Why: "), q.explanation]),
      st.notes[q.id] ? el("div", { class: "formula-card", style: "margin-top:10px" }, [
        el("div", { class: "tiny muted" }, "Your note"),
        el("div", { class: "small" }, st.notes[q.id])
      ]) : null,
      el("div", { class: "row wrap", style: "margin-top:10px" }, [
        el("button", { class: "btn btn-ghost btn-sm", onclick: () => openNoteEditor(q) }, "✎ " + (st.notes[q.id] ? "Edit note" : "Add note")),
        el("button", { class: "btn btn-ghost btn-sm", onclick: () => { toggleBookmark(q); toast("Bookmark toggled", "success"); renderRoute(); } },
          st.bookmarks.includes(q.id) ? "★ Remove bookmark" : "☆ Bookmark")
      ])
    );
    const head = el("button", {
      class: "list-row", style: "width:100%; text-align:left; cursor:pointer; font-family:inherit; color:inherit; background:var(--surface-2)",
      onclick: () => body.classList.toggle("hidden")
    }, [
      el("div", { class: "grow" }, [
        el("div", { style: "font-size:13.5px; font-weight:600" }, q.q),
        el("div", { class: "tiny muted", style: "margin-top:3px" },
          `${SUBJECT_META[q.subject].label} · ${getChapterName(q.chapter)}${metaExtra && rec ? ` · missed ${rec.wrong}×` : ""}`)
      ]),
      el("span", { class: "badge bad" }, rec ? `${rec.wrong} miss` : "")
    ]);
    return el("div", {}, [head, body]);
  };

  const tabs = [
    { key: "mistakes", label: `Mistakes (${missed.length})` },
    { key: "bookmarks", label: `Bookmarks (${bookmarked.length})` },
    { key: "notes", label: `Notes (${noted.length})` }
  ];
  const tab = mistakesView._tab || "mistakes";

  let list;
  if (tab === "mistakes") {
    list = missed.length
      ? el("div", { class: "list" }, missed.map((q) => questionRow(q, true)))
      : el("div", { class: "card center" }, [
          el("p", { style: "font-size:34px; margin:0" }, "🎉"),
          el("h3", {}, "No mistakes recorded yet"),
          el("p", { class: "small muted" }, "Wrong answers from practice and mock tests collect here automatically.")
        ]);
  } else if (tab === "bookmarks") {
    list = bookmarked.length
      ? el("div", { class: "list" }, bookmarked.map((q) => questionRow(q, false)))
      : el("div", { class: "card center" }, [
          el("p", { class: "small muted" }, "Star a question while practising and it will appear here.")
        ]);
  } else {
    list = noted.length
      ? el("div", { class: "list" }, noted.map((q) => questionRow(q, false)))
      : el("div", { class: "card center" }, [
          el("p", { class: "small muted" }, "Notes you add while practising live here for quick revision.")
        ]);
  }

  return el("div", {}, [
    el("div", { class: "view-head" }, [
      el("div", {}, [
        el("h1", {}, "Mistakes & Notes"),
        el("p", {}, "The highest-value revision list you own: everything you have got wrong before.")
      ]),
      el("div", { class: "row" }, [
        missed.length ? el("button", { class: "btn btn-primary btn-sm", onclick: () => startPractice({ mode: "weak" }) }, `Retry ${missed.length} mistakes`) : null,
        bookmarked.length ? el("button", { class: "btn btn-ghost btn-sm", onclick: () => startPractice({ mode: "bookmarked" }) }, "Practice bookmarks") : null
      ])
    ]),
    el("div", { class: "seg", style: "max-width:560px; margin-bottom:16px" }, tabs.map((t) =>
      el("button", {
        class: tab === t.key ? "active" : "",
        onclick: () => { mistakesView._tab = t.key; renderRoute(); }
      }, t.label)
    )),
    list
  ]);
}

VIEWS.mistakes = mistakesView;
