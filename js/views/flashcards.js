/* ===== Spaced flashcards with reveal + confidence rating ===== */

let cardState = null;

function flashcardView() {
  const st = getState();
  const subject = cardState?.subject || "all";
  const pool = subject === "all" ? FLASHCARDS : FLASHCARDS.filter((c) => c.subject === subject);

  if (!cardState || cardState.pool.length !== pool.length || cardState.subject !== subject) {
    cardState = {
      subject,
      pool: shuffle(pool),
      index: 0,
      flipped: false,
      known: 0,
      again: 0,
      reviewed: 0
    };
  }

  const card = cardState.pool[cardState.index % cardState.pool.length];

  const seg = el("div", { class: "seg", style: "max-width:420px" }, ["all", "physics", "chemistry", "biology"].map((s) =>
    el("button", {
      class: subject === s ? "active" : "",
      onclick: () => { cardState = null; cardState = { subject: s, pool: [], index: 0, flipped: false, known: 0, again: 0, reviewed: 0 }; renderRoute(); }
    }, s === "all" ? "All" : SUBJECT_META[s].label)
  ));

  const cardEl = el("div", {
    class: `flashcard ${cardState.flipped ? "flipped" : ""}`,
    onclick: () => { cardState.flipped = !cardState.flipped; renderRoute(); }
  }, cardState.flipped ? card.back : card.front);

  const controls = el("div", { class: "row between wrap", style: "margin-top:14px" }, [
    el("button", {
      class: "btn btn-ghost",
      onclick: () => { cardState.index = (cardState.index - 1 + cardState.pool.length) % cardState.pool.length; cardState.flipped = false; renderRoute(); }
    }, "← Previous"),
    el("div", { class: "row" }, [
      el("button", {
        class: "btn btn-ghost",
        onclick: () => { cardState.again++; cardState.reviewed++; cardState.index = (cardState.index + 1) % cardState.pool.length; cardState.flipped = false; renderRoute(); }
      }, "Review again"),
      el("button", {
        class: "btn btn-accent",
        onclick: () => {
          cardState.known++; cardState.reviewed++;
          cardState.index = (cardState.index + 1) % cardState.pool.length;
          cardState.flipped = false;
          touchStreak();
          renderRoute();
        }
      }, "I knew it ✓")
    ])
  ]);

  return el("div", {}, [
    el("div", { class: "view-head" }, [
      el("div", {}, [
        el("h1", {}, "Flashcards"),
        el("p", {}, "One-liners that cover the highest-yield concepts. Tap the card to reveal the answer.")
      ]),
      seg
    ]),
    el("div", { class: "grid split", style: "align-items:start" }, [
      el("div", { class: "card" }, [
        el("div", { class: "row between", style: "margin-bottom:12px" }, [
          el("span", { class: "badge primary" }, `${(cardState.index % cardState.pool.length) + 1} / ${cardState.pool.length}`),
          el("span", { class: "badge" }, SUBJECT_META[card.subject].icon + " " + SUBJECT_META[card.subject].label),
          el("span", { class: "tiny muted" }, cardState.flipped ? "Answer" : "Tap to reveal")
        ]),
        cardEl,
        controls
      ]),
      el("div", { style: "display:flex; flex-direction:column; gap:16px" }, [
        el("div", { class: "card tight" }, [
          el("div", { class: "stat-label" }, "This session"),
          el("div", { class: "stat-value" }, `${cardState.known} known`),
          el("div", { class: "small muted" }, `${cardState.again} marked for review · ${cardState.reviewed} reviewed`),
          el("div", { class: "bar thin", style: "margin-top:10px" },
            el("span", { style: `width:${pct(cardState.known, Math.max(1, cardState.reviewed))}%` }))
        ]),
        el("div", { class: "card tight" }, [
          el("h3", { style: "font-size:14px" }, "Deck overview"),
          el("div", { class: "list" }, ["physics", "chemistry", "biology"].map((s) =>
            el("div", { class: "row between small" }, [
              el("span", {}, `${SUBJECT_META[s].icon} ${SUBJECT_META[s].label}`),
              el("span", { class: "badge" }, `${FLASHCARDS.filter((c) => c.subject === s).length} cards`)
            ])
          ))
        ]),
        el("div", { class: "card tight" }, [
          el("h3", { style: "font-size:14px" }, "How to use"),
          el("p", { class: "small muted", style: "margin:0" }, "Reveal, then be honest: if you could not say the answer before flipping, mark it for review. Repeat the review pile daily — three passes is usually enough for recall.")
        ])
      ])
    ])
  ]);
}

VIEWS.flashcards = flashcardView;
