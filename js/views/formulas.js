/* ===== Formula sheet, mnemonics and strategy tips ===== */

function formulasView() {
  let tab = formulasView._tab || "physics";
  const wrap = el("div", {});

  const seg = el("div", { class: "seg", style: "max-width:520px" }, [
    ["physics", "Physics"], ["chemistry", "Chemistry"], ["biology", "Biology"], ["mnemonics", "Mnemonics"], ["tips", "Strategy"]
  ].map(([key, label]) =>
    el("button", {
      class: tab === key ? "active" : "",
      onclick: () => { formulasView._tab = key; renderRoute(); }
    }, label)
  ));

  wrap.appendChild(el("div", { class: "view-head" }, [
    el("div", {}, [
      el("h1", {}, "Formulas & Tips"),
      el("p", {}, "A compact revision sheet — print it from your browser for a last-week binder.")
    ]),
    el("button", { class: "btn btn-ghost", onclick: () => window.print() }, "🖨 Print")
  ]));
  wrap.appendChild(seg);

  const body = el("div", { style: "margin-top:18px" });

  if (tab === "mnemonics") {
    const grid = el("div", { class: "grid grid-2" });
    MNEMONICS.forEach((m) => {
      grid.appendChild(el("div", { class: "card" }, [
        el("div", { class: "row between" }, [
          el("h3", { style: "margin:0; font-size:14.5px" }, m.title),
          el("span", { class: "badge" }, SUBJECT_META[m.subject].label)
        ]),
        el("p", { class: "formula", style: "margin:10px 0; font-size:15px; line-height:1.5" }, m.text),
        el("p", { class: "small muted", style: "margin:0" }, m.detail)
      ]));
    });
    body.appendChild(grid);
  } else if (tab === "tips") {
    const grid = el("div", { class: "grid grid-2" });
    REVISION_TIPS.forEach((t) => {
      grid.appendChild(el("div", { class: "card" }, [
        el("h3", { style: "font-size:14.5px" }, t.title),
        el("p", { class: "small muted", style: "margin:0" }, t.body)
      ]));
    });
    body.appendChild(grid);

    body.appendChild(el("div", { class: "card", style: "margin-top:16px" }, [
      el("h3", {}, "NEET marking scheme & timing"),
      el("table", { class: "table" }, [
        el("tbody", {}, [
          el("tr", {}, [el("td", {}, "Total questions"), el("td", { style: "text-align:right; font-weight:700" }, "180")]),
          el("tr", {}, [el("td", {}, "Duration"), el("td", { style: "text-align:right; font-weight:700" }, "200 minutes (3h 20m)")]),
          el("tr", {}, [el("td", {}, "Maximum marks"), el("td", { style: "text-align:right; font-weight:700" }, "720")]),
          el("tr", {}, [el("td", {}, "Per correct answer"), el("td", { style: "text-align:right; font-weight:700; color:var(--accent)" }, "+4")]),
          el("tr", {}, [el("td", {}, "Per incorrect answer"), el("td", { style: "text-align:right; font-weight:700; color:var(--danger)" }, "−1")]),
          el("tr", {}, [el("td", {}, "Unattempted"), el("td", { style: "text-align:right; font-weight:700" }, "0")]),
          el("tr", {}, [el("td", {}, "Time per question (average)"), el("td", { style: "text-align:right; font-weight:700" }, "≈ 67 seconds")])
        ])
      ])
    ]));
  } else {
    const list = FORMULAS[tab] || [];
    const grid = el("div", { class: "grid grid-3" });
    list.forEach((f) => {
      grid.appendChild(el("div", { class: "formula-card" }, [
        el("div", { class: "tiny muted", style: "text-transform:uppercase; letter-spacing:0.06em" }, f.name),
        el("div", { class: "formula" }, f.expr)
      ]));
    });
    body.appendChild(el("div", { class: "card" }, [
      el("div", { class: "card-title" }, [
        el("h3", {}, `${SUBJECT_META[tab].label} formula sheet`),
        el("span", { class: "badge primary" }, `${list.length} formulas`)
      ]),
      grid
    ]));
  }

  wrap.appendChild(body);
  return wrap;
}

VIEWS.formulas = formulasView;
