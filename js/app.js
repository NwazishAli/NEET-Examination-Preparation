/* ===== App shell, router and dashboard ===== */

const NAV_ITEMS = [
  { route: "dashboard", label: "Dashboard", icon: "◉" },
  { route: "exam", label: "Mock Test", icon: "◈" },
  { route: "pyq", label: "Back Papers", icon: "▣" },
  { route: "practice", label: "Practice", icon: "✎" },
  { route: "syllabus", label: "Syllabus Tracker", icon: "▤" },
  { route: "planner", label: "Study Planner", icon: "▦" },
  { route: "flashcards", label: "Flashcards", icon: "⬒" },
  { route: "formulas", label: "Formulas & Tips", icon: "∑" },
  { route: "mistakes", label: "Mistakes & Notes", icon: "⚑" },
  { route: "settings", label: "Settings", icon: "⚙" }
];

let currentRoute = "dashboard";
let activeExam = null;   // survives navigation while a test is in progress
let practiceState = null;

function applyTheme() {
  const st = getState();
  document.documentElement.setAttribute("data-theme", st.theme);
}

function renderShell() {
  const st = getState();
  document.body.innerHTML = "";
  const shell = el("div", { class: "app-shell" });

  const sidebar = el("aside", { class: "sidebar", id: "sidebar" }, [
    el("div", { class: "brand" }, [
      el("div", { class: "brand-mark" }, "N"),
      el("div", {}, [
        el("div", { class: "brand-name" }, "NEET Prep"),
        el("div", { class: "brand-sub" }, "Study Companion")
      ])
    ]),
    el("nav", { class: "nav" }, NAV_ITEMS.map((item) =>
      el("button", {
        class: `nav-item ${currentRoute === item.route ? "active" : ""}`,
        "data-route": item.route,
        onclick: () => navigate(item.route)
      }, [el("span", { class: "nav-icon" }, item.icon), item.label])
    )),
    el("div", { class: "sidebar-foot" }, [
      el("div", { class: "streak-chip" }, [
        el("span", { class: "streak-flame" }, "🔥"),
        el("div", {}, [
          el("div", { class: "streak-num" }, `${st.streak.count} day${st.streak.count === 1 ? "" : "s"}`),
          el("div", { class: "tiny muted" }, "Current streak")
        ])
      ]),
      el("div", { class: "row between tiny muted", style: "padding: 0 6px" }, [
        el("span", {}, `${practicePool().length} questions`),
        el("span", {}, "offline-ready")
      ])
    ])
  ]);

  const mobileBar = el("div", { class: "mobile-bar" }, [
    el("button", { class: "btn btn-ghost btn-sm", onclick: toggleSidebar }, "☰ Menu"),
    el("div", { class: "row", style: "gap:8px" }, [
      el("strong", { style: "font-size:13px" }, "NEET Prep"),
      el("span", { class: "badge primary" }, "🔥 " + st.streak.count)
    ]),
    el("button", { class: "btn btn-ghost btn-sm", onclick: () => navigate("flashcards") }, "Cards")
  ]);

  const main = el("main", { class: "main", id: "main" });
  shell.append(sidebar, main);
  document.body.append(mobileBar, shell);
  renderRoute();
}

function toggleSidebar() {
  const sb = $("#sidebar");
  if (!sb) return;
  const open = sb.classList.toggle("open");
  const existing = $(".backdrop");
  if (open && !existing) {
    const b = el("div", { class: "backdrop", onclick: () => { sb.classList.remove("open"); b.remove(); } });
    document.body.appendChild(b);
  } else if (!open && existing) {
    existing.remove();
  }
}

function navigate(route, opts = {}) {
  if (activeExam && !activeExam.submitted && route !== "exam") {
    const leave = confirm("A test is in progress. Leave and keep it running in the background?");
    if (!leave) return;
  }
  currentRoute = route;
  if (location.hash !== `#/${route}`) location.hash = `#/${route}`;
  $$(".nav-item").forEach((n) => n.classList.toggle("active", n.dataset.route === route));
  const sb = $("#sidebar");
  if (sb && sb.classList.contains("open")) { sb.classList.remove("open"); $(".backdrop")?.remove(); }
  renderRoute(opts);
  $("#main")?.scrollIntoView?.({ block: "start" });
}

function renderRoute(opts = {}) {
  const main = $("#main");
  if (!main) return;
  main.innerHTML = "";
  const view = VIEWS[currentRoute] || VIEWS.dashboard;
  const node = view(opts);
  main.appendChild(node);
  if (typeof view.afterMount === "function") view.afterMount(node, opts);
}

/* ===================== Dashboard ===================== */

function dashboardView() {
  const st = getState();
  const overall = overallStats();
  const today = st.dailyLog[todayKey()] || { attempted: 0, correct: 0, seconds: 0 };
  const goal = st.profile.dailyGoal || 60;
  const goalPct = clamp((today.attempted / goal) * 100, 0, 100);
  const daysLeft = Math.max(0, daysBetween(todayKey(), st.profile.examDate));
  const weak = chapterStats().slice(0, 3);
  const week = last7Days();
  const todayAcc = today.attempted ? pct(today.correct, today.attempted) : 0;

  const wrap = el("div", {});

  wrap.appendChild(el("div", { class: "view-head" }, [
    el("div", {}, [
      el("h1", {}, `Hello, ${escapeHtml(st.profile.name || "Aspirant")} 👋`),
      el("p", {}, daysLeft > 0
        ? `${pluralize(daysLeft, "day")} until your target exam date (${st.profile.examDate}).`
        : "Exam date has passed — update it in Settings to keep the countdown running.")
    ]),
    el("div", { class: "row wrap" }, [
      el("button", { class: "btn btn-primary", onclick: () => navigate("exam") }, "Start mock test"),
      el("button", { class: "btn btn-ghost", onclick: () => navigate("practice") }, "Quick practice")
    ])
  ]));

  /* countdown + today's goal */
  const lastExam = st.sessions.find((s) => s.type === "exam");
  const latestScore = lastExam ? Math.max(0, lastExam.score) : 0;
  const targetProgress = clamp((latestScore / st.profile.targetScore) * 100, 0, 100);

  wrap.appendChild(el("div", { class: "grid grid-2", style: "margin-bottom:16px" }, [
    el("div", { class: "card countdown" }, [
      el("div", {}, [
        el("div", { class: "days" }, String(daysLeft)),
        el("div", { class: "small muted" }, "days to go")
      ]),
      el("div", { class: "grow" }, [
        el("div", { class: "row between" }, [
          el("strong", {}, "Target score"),
          el("span", { class: "badge primary" }, `${st.profile.targetScore} / 720`)
        ]),
        el("div", { class: "small muted", style: "margin:6px 0" },
          lastExam
            ? `Latest full-length mock: ${latestScore} marks — ${targetProgress}% of your target.`
            : `A ${st.profile.targetScore}/720 target needs about ${Math.ceil(st.profile.targetScore / 4)} correct answers out of 180. Take a mock test to track it.`),
        el("div", { class: "bar" }, el("span", { style: `width:${targetProgress}%` })),
        el("button", {
          class: "btn btn-ghost btn-sm", style: "margin-top:10px",
          onclick: () => navigate("exam")
        }, lastExam ? "Take another mock" : "Take your first mock")
      ])
    ]),
    el("div", { class: "card stat-card" }, [
      el("div", { html: ring(goalPct, 76, 8, goalPct >= 100 ? "#22d3a5" : "#6d5efc") }),
      el("div", { class: "grow" }, [
        el("div", { class: "stat-label" }, "Today's goal"),
        el("div", { class: "stat-value" }, `${today.attempted} / ${goal}`),
        el("div", { class: "small muted" }, today.attempted
          ? `${todayAcc}% accuracy today · ${formatDuration(today.seconds)} studied`
          : "Solve your first question to start the streak")
      ])
    ])
  ]));

  /* headline stats */
  const statCards = [
    { label: "Overall accuracy", value: `${overall.accuracy}%`, sub: `${overall.correct}/${overall.attempts} correct`, color: "#22d3a5" },
    { label: "Questions attempted", value: overall.attempts, sub: `${overall.unique} unique of ${practicePool().length}`, color: "#6d5efc" },
    { label: "Bank coverage", value: `${overall.coverage}%`, sub: "of the offline question bank", color: "#f7b955" },
    { label: "Study time", value: formatDuration(overall.studySeconds), sub: `${overall.sessions} tests completed`, color: "#60a5fa" }
  ];
  wrap.appendChild(el("div", { class: "grid grid-4", style: "margin-bottom:16px" },
    statCards.map((s) => el("div", { class: "card tight" }, [
      el("div", { class: "stat-label" }, s.label),
      el("div", { class: "stat-value", style: `color:${s.color}` }, String(s.value)),
      el("div", { class: "tiny muted" }, s.sub)
    ]))
  ));

  /* chart + subject breakdown */
  const chartCard = el("div", { class: "card" }, [
    el("div", { class: "card-title" }, [
      el("h3", {}, "Last 7 days"),
      el("div", { class: "row small muted" }, [
        el("span", {}, "Questions attempted"),
        el("span", { class: "badge" }, `${week.reduce((s, d) => s + d.attempted, 0)} total`)
      ])
    ]),
    el("canvas", { id: "week-chart" })
  ]);

  const subjectCards = Object.entries(SUBJECT_META).map(([key, meta]) => {
    const s = subjectStats(key);
    return el("div", { class: "card tight" }, [
      el("div", { class: "row between" }, [
        el("div", { class: "row" }, [
          el("span", { style: `font-size:18px` }, meta.icon),
          el("strong", {}, meta.label)
        ]),
        el("span", { class: `badge ${s.accuracy >= 70 ? "good" : s.accuracy >= 45 ? "warn" : "bad"}` }, `${s.accuracy}%`)
      ]),
      el("div", { class: "small muted", style: "margin:10px 0 6px" }, `Coverage ${s.seen}/${s.total} chapters-in-bank`),
      el("div", { class: "bar thin" }, el("span", { style: `width:${s.coverage}%; background:${meta.color}` })),
      el("div", { class: "tiny muted", style: "margin-top:8px" }, `${s.attempts} attempts · ${s.correct} correct`),
      el("button", { class: "btn btn-ghost btn-sm btn-block", style: "margin-top:10px", onclick: () => startPractice({ subject: key }) },
        "Practice " + meta.label.toLowerCase())
    ]);
  });

  wrap.appendChild(el("div", { class: "grid split", style: "margin-bottom:16px" }, [
    chartCard,
    el("div", { class: "card tight" }, [
      el("h3", { style: "margin-bottom:12px" }, "Subject snapshot"),
      el("div", { class: "list" }, subjectCards)
    ])
  ]));

  /* weak chapters + tips */
  const weakCard = el("div", { class: "card" }, [
    el("div", { class: "card-title" }, [
      el("h3", {}, "Focus next"),
      el("span", { class: "small muted" }, "lowest accuracy chapters")
    ]),
    weak.length
      ? el("div", { class: "list" }, weak.map((row) =>
          el("div", { class: "list-row" }, [
            el("div", { class: "grow" }, [
              el("div", { style: "font-weight:650; font-size:13.5px" }, row.chapter),
              el("div", { class: "tiny muted" }, `${row.subjectLabel} · ${row.attempts} attempts · weight ${row.weight} Q`)
            ]),
            el("span", { class: `badge ${row.accuracy < 50 ? "bad" : "warn"}` }, `${row.accuracy}%`),
            el("button", { class: "btn btn-ghost btn-sm", onclick: () => startPractice({ subject: row.subject }) }, "Practice")
          ])
        ))
      : el("p", { class: "muted small" }, "Attempt a few questions and your weak chapters will appear here automatically.")
  ]);

  const tip = REVISION_TIPS[new Date().getDate() % REVISION_TIPS.length];
  const tipCard = el("div", { class: "card" }, [
    el("div", { class: "card-title" }, [el("h3", {}, "Strategy note"), el("span", { class: "badge warn" }, "daily")]),
    el("p", { style: "font-weight:650; margin-bottom:6px" }, tip.title),
    el("p", { class: "muted small", style: "margin:0" }, tip.body),
    el("button", { class: "btn btn-ghost btn-sm", style: "margin-top:12px", onclick: () => navigate("formulas") }, "More revision tips →")
  ]);

  wrap.appendChild(el("div", { class: "grid grid-2" }, [weakCard, tipCard]));
  return wrap;
}

dashboardView.afterMount = () => {
  const canvas = $("#week-chart");
  if (!canvas) return;
  const host = canvas.parentElement;
  if (host) canvas.style.width = "100%";
  const week = last7Days();
  drawLineChart(canvas, [
    { data: week.map((d) => d.attempted), color: "#6d5efc" }
  ], { yMax: Math.max(10, ...week.map((d) => d.attempted)) });
  if (!window.__neetChartResize) {
    window.__neetChartResize = true;
    window.addEventListener("resize", () => {
      const c = $("#week-chart");
      if (!c) return;
      drawLineChart(c, [{ data: last7Days().map((d) => d.attempted), color: "#6d5efc" }],
        { yMax: Math.max(10, ...last7Days().map((d) => d.attempted)) });
    });
  }
};

/* ===================== Boot ===================== */

VIEWS.dashboard = dashboardView;

function boot() {
  loadState();
  applyTheme();
  if (!location.hash) location.hash = "#/dashboard";
  currentRoute = (location.hash.replace("#/", "") || "dashboard").split("?")[0];
  if (!NAV_ITEMS.some((n) => n.route === currentRoute)) currentRoute = "dashboard";
  renderShell();

  window.addEventListener("hashchange", () => {
    const route = (location.hash.replace("#/", "") || "dashboard").split("?")[0];
    if (route === currentRoute) return;
    currentRoute = NAV_ITEMS.some((n) => n.route === route) ? route : "dashboard";
    $$(".nav-item").forEach((n) => n.classList.toggle("active", n.dataset.route === currentRoute));
    renderRoute();
  });

  document.addEventListener("keydown", handleShortcuts);

  window.addEventListener("beforeunload", (e) => {
    if (activeExam && !activeExam.submitted) {
      e.preventDefault();
      e.returnValue = "";
    }
  });
}

document.addEventListener("DOMContentLoaded", boot);

/* ---------- keyboard shortcuts ---------- */
function handleShortcuts(e) {
  if (e.target.matches("input, textarea, select")) return;
  const key = e.key;

  /* exam */
  if (activeExam && !activeExam.submitted) {
    const ex = activeExam;
    if (key === "ArrowRight") { if (ex.index < ex.questions.length - 1) { ex.index++; renderRoute(); } e.preventDefault(); return; }
    if (key === "ArrowLeft") { if (ex.index > 0) { ex.index--; renderRoute(); } e.preventDefault(); return; }
    if (["1", "2", "3", "4"].includes(key)) {
      ex.answers[ex.index] = Number(key) - 1;
      renderRoute();
      e.preventDefault();
      return;
    }
    if (key === "m" || key === "M") {
      if (ex.marked.has(ex.index)) ex.marked.delete(ex.index); else ex.marked.add(ex.index);
      renderRoute();
      return;
    }
  }

  /* practice */
  if (practiceState && currentRoute === "practice") {
    const p = practiceState;
    if (!p.revealed && ["1", "2", "3", "4"].includes(key)) {
      p.chosen = Number(key) - 1;
      renderRoute();
      e.preventDefault();
      return;
    }
    if (key === "Enter" && p.revealed && p.index < p.pool.length - 1) {
      p.index++; p.chosen = null; p.revealed = false; renderRoute();
      e.preventDefault();
      return;
    }
    if (key === " " && !p.revealed && p.chosen !== null) {
      const q = p.pool[p.index];
      const isCorrect = p.chosen === q.answer;
      p.revealed = true;
      p.answers.push({ id: q.id, correct: isCorrect });
      logAnswer(q, p.chosen, isCorrect, 0);
      renderRoute();
      e.preventDefault();
    }
  }
}
