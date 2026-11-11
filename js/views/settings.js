/* ===== Profile, goals, appearance, data export/import ===== */

function settingsView() {
  const st = getState();
  const wrap = el("div", {});

  wrap.appendChild(el("div", { class: "view-head" }, [
    el("div", {}, [el("h1", {}, "Settings"), el("p", {}, "Your profile, daily goals and local data.")])
  ]));

  const nameInput = el("input", { type: "text", value: st.profile.name || "", placeholder: "Your name" });
  const dateInput = el("input", { type: "date", value: st.profile.examDate });
  const scoreInput = el("input", { type: "number", min: "0", max: "720", value: st.profile.targetScore });
  const goalInput = el("input", { type: "number", min: "5", max: "300", value: st.profile.dailyGoal });

  wrap.appendChild(el("div", { class: "grid grid-2" }, [
    el("div", { class: "card" }, [
      el("h3", {}, "Profile & goal"),
      el("label", { class: "field" }, [el("span", { class: "field-label" }, "Name"), nameInput]),
      el("label", { class: "field" }, [el("span", { class: "field-label" }, "Target exam date"), dateInput]),
      el("div", { class: "grid grid-2", style: "gap:12px" }, [
        el("label", { class: "field" }, [el("span", { class: "field-label" }, "Target score (out of 720)"), scoreInput]),
        el("label", { class: "field" }, [el("span", { class: "field-label" }, "Daily question goal"), goalInput])
      ]),
      el("button", {
        class: "btn btn-primary",
        onclick: () => {
          const s = getState();
          s.profile.name = nameInput.value.trim() || "Aspirant";
          s.profile.examDate = dateInput.value || s.profile.examDate;
          s.profile.targetScore = clamp(parseInt(scoreInput.value, 10) || 620, 0, 720);
          s.profile.dailyGoal = clamp(parseInt(goalInput.value, 10) || 60, 5, 300);
          saveState();
          toast("Profile saved", "success");
          renderRoute();
        }
      }, "Save profile")
    ]),
    el("div", {}, [
      el("div", { class: "card", style: "margin-bottom:16px" }, [
        el("h3", {}, "Appearance"),
        el("div", { class: "seg", style: "margin-bottom:12px" }, ["dark", "light"].map((t) =>
          el("button", {
            class: st.theme === t ? "active" : "",
            onclick: () => {
              const s = getState();
              s.theme = t;
              saveState();
              applyTheme();
              renderRoute();
            }
          }, t === "dark" ? "🌙 Dark" : "☀ Light")
        )),
        el("p", { class: "small muted", style: "margin:0" }, "Theme preference is stored on this device only.")
      ]),
      el("div", { class: "card" }, [
        el("h3", {}, "Your data"),
        el("p", { class: "small muted" }, `Stored locally in your browser: ${Object.keys(st.seen).length} questions attempted, ${st.sessions.length} sessions, ${st.bookmarks.length} bookmarks, ${Object.keys(st.notes).length} notes.`),
        el("div", { class: "row wrap" }, [
          el("button", { class: "btn btn-ghost btn-sm", onclick: exportData }, "⭳ Export JSON"),
          el("button", { class: "btn btn-ghost btn-sm", onclick: () => importData() }, "⭱ Import JSON"),
          el("button", { class: "btn btn-danger btn-sm", onclick: resetAll }, "Reset all progress")
        ])
      ])
    ])
  ]));

  wrap.appendChild(el("div", { class: "card", style: "margin-top:16px" }, [
    el("h3", {}, "About this tool"),
    el("p", { class: "small muted" }, `NEET Prep Companion is an offline-first study tool: ${QUESTION_BANK.length} questions across ${Object.values(SYLLABUS).reduce((s, x) => s + x.chapters.length, 0)} chapters, a full-length mock engine with NEET marking (+4/−1), a syllabus tracker, a 12-week planner, flashcards and a formula sheet.`),
    el("p", { class: "small muted", style: "margin:0" }, "No account, no server, no tracking — everything stays in your browser's localStorage. The rank/milestone estimate shown after a test is indicative only, not a prediction of your actual NEET result.")
  ]));

  return wrap;
}

function exportData() {
  const data = JSON.stringify(getState(), null, 2);
  const blob = new Blob([data], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `neet-prep-backup-${todayKey()}.json`;
  a.click();
  URL.revokeObjectURL(a.href);
  toast("Backup downloaded", "success");
}

function importData() {
  const input = el("input", { type: "file", accept: "application/json" });
  input.addEventListener("change", () => {
    const file = input.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(reader.result);
        if (!parsed || typeof parsed !== "object") throw new Error("bad file");
        localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
        loadState();
        applyTheme();
        toast("Backup restored", "success");
        renderRoute();
      } catch (err) {
        toast("Could not read that file", "error");
      }
    };
    reader.readAsText(file);
  });
  input.click();
}

async function resetAll() {
  const ok = await confirmDialog("Reset everything?", "This deletes all attempts, notes, bookmarks and plan progress on this device. Consider exporting a backup first.", "Delete all data");
  if (!ok) return;
  resetProgress();
  activeExam = null;
  practiceState = null;
  toast("All progress cleared", "success");
  navigate("dashboard");
}

VIEWS.settings = settingsView;
