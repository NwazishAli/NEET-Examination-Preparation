/* ===== 12-week study planner with progress tracking ===== */

function plannerView() {
  const st = getState();
  const progressFor = (week) => st.plan[week] || { doneTopics: [], mockDone: false };
  const totalTopics = STUDY_PLAN.reduce((sum, w) => sum + w.topics.length, 0);
  let doneTopics = 0;
  STUDY_PLAN.forEach((w) => { doneTopics += (progressFor(w.week).doneTopics || []).length; });
  const overall = pct(doneTopics, totalTopics);
  const daysLeft = Math.max(0, daysBetween(todayKey(), st.profile.examDate));

  const wrap = el("div", {});

  wrap.appendChild(el("div", { class: "view-head" }, [
    el("div", {}, [
      el("h1", {}, "Study Planner"),
      el("p", {}, `A 12-week plan weighted by exam priority · ${pluralize(daysLeft, "day")} remaining.`)
    ]),
    el("div", { class: "row" }, [
      el("span", { class: "badge primary" }, `${overall}% plan complete`),
      el("button", { class: "btn btn-ghost btn-sm", onclick: () => { resetPlan(); } }, "Reset plan")
    ])
  ]));

  wrap.appendChild(el("div", { class: "card", style: "margin-bottom:16px" }, [
    el("div", { class: "row between wrap" }, [
      el("div", {}, [
        el("div", { class: "stat-label" }, "Overall completion"),
        el("div", { class: "stat-value" }, `${doneTopics} / ${totalTopics} topics`)
      ]),
      el("div", { class: "row" }, [
        el("span", { class: "badge" }, `~${Math.round(totalTopics / 12)} topics / week`),
        el("span", { class: "badge" }, "Daily: 2 chapters + 1 test")
      ])
    ]),
    el("div", { class: "bar", style: "margin-top:14px" }, el("span", { style: `width:${overall}%` }))
  ]));

  const grid = el("div", { class: "grid grid-2" });

  STUDY_PLAN.forEach((week) => {
    const prog = progressFor(week.week);
    const done = prog.doneTopics || [];
    const weekPct = pct(done.length, week.topics.length);

    const topicList = el("div", { style: "display:flex; flex-direction:column; gap:8px" },
      week.topics.map((topic) => {
        const isDone = done.includes(topic.id);
        return el("label", { class: `topic-check ${isDone ? "done" : ""}` }, [
          (() => {
            const cb = el("input", { type: "checkbox" });
            cb.checked = isDone;
            cb.addEventListener("change", () => {
              const state = getState();
              const p = state.plan[week.week] || { doneTopics: [], mockDone: false };
              p.doneTopics = p.doneTopics || [];
              if (cb.checked) { if (!p.doneTopics.includes(topic.id)) p.doneTopics.push(topic.id); touchStreak(); }
              else p.doneTopics = p.doneTopics.filter((id) => id !== topic.id);
              state.plan[week.week] = p;
              saveState();
              renderRoute();
            });
            return cb;
          })(),
          el("span", { class: "grow" }, [
            el("span", { style: "display:block" }, topic.name),
            el("span", { class: "tiny muted" }, `${SUBJECT_META[topic.subject].label} · weight ${topic.weight} Q`)
          ])
        ]);
      }));

    grid.appendChild(el("div", { class: "week-card" }, [
      el("div", { class: "week-head" }, [
        el("div", { class: "week-num" }, `W${week.week}`),
        el("div", { class: "grow" }, [
          el("div", { style: "font-weight:700; font-size:14px" }, week.title),
          el("div", { class: "tiny muted" }, `${week.focus} · ${week.targetQuestions} questions target`)
        ]),
        el("span", { class: `badge ${weekPct === 100 ? "good" : weekPct > 0 ? "warn" : ""}` }, `${weekPct}%`)
      ]),
      el("div", { class: "week-body" }, [
        topicList,
        el("div", { class: "bar thin" }, el("span", { style: `width:${weekPct}%` })),
        el("div", { class: "row wrap", style: "margin-top:4px" }, [
          el("button", {
            class: `btn btn-sm ${prog.mockDone ? "btn-accent" : "btn-ghost"}`,
            onclick: () => {
              const state = getState();
              const p = state.plan[week.week] || { doneTopics: prog.doneTopics || [], mockDone: false };
              p.mockDone = !p.mockDone;
              state.plan[week.week] = p;
              saveState();
              renderRoute();
            }
          }, prog.mockDone ? `✓ ${pluralize(week.mockTests, "mock")} done` : `Mark ${pluralize(week.mockTests, "mock")} done`),
          el("button", { class: "btn btn-ghost btn-sm", onclick: () => startPractice({ subject: "all", mode: "all" }) }, "Practice set"),
          week.revision && week.revision.length
            ? el("span", { class: "tiny muted" }, "Revise: " + week.revision.slice(0, 3).join(", "))
            : null
        ])
      ])
    ]));
  });

  wrap.appendChild(grid);
  return wrap;
}

async function resetPlan() {
  const ok = await confirmDialog("Reset planner?", "This clears every ticked topic and mock-test marker. Your quiz history is kept.", "Reset");
  if (!ok) return;
  const st = getState();
  st.plan = {};
  saveState();
  toast("Planner reset", "success");
  renderRoute();
}

VIEWS.planner = plannerView;
