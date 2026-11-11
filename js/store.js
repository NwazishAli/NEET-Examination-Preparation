/* Persistent app state.
   Everything lives in localStorage so the tool works fully offline. */

const STORAGE_KEY = "neet-prep-state-v1";

const DEFAULT_STATE = {
  version: 1,
  theme: "dark",
  profile: { name: "Aspirant", targetScore: 620, examDate: "2027-05-02", dailyGoal: 60 },
  streak: { count: 0, lastStudyDay: null, best: 0 },
  seen: {},            // qid -> { attempts, correct, wrong, lastSeen }
  sessions: [],        // exam / practice session summaries
  bookmarks: [],
  notes: {},           // qid -> note text
  plan: {},            // week -> { doneTopics: [], mockDone: bool }
  cards: {},           // flashcard scheduling state
  studySeconds: 0,
  dailyLog: {}         // day -> { attempted, correct, seconds }
};

let STATE = null;

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    STATE = {
      ...deepClone(DEFAULT_STATE),
      ...parsed,
      profile: { ...DEFAULT_STATE.profile, ...(parsed.profile || {}) },
      streak: { ...DEFAULT_STATE.streak, ...(parsed.streak || {}) }
    };
  } catch (err) {
    console.warn("State load failed, starting fresh", err);
    STATE = deepClone(DEFAULT_STATE);
  }
  return STATE;
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(STATE));
  } catch (err) {
    console.warn("Could not persist state", err);
  }
}

function getState() { return STATE || loadState(); }

function touchStreak() {
  const st = getState();
  const today = todayKey();
  if (st.streak.lastStudyDay === today) return;
  const yesterday = todayKey(new Date(Date.now() - 86400000));
  st.streak.count = st.streak.lastStudyDay === yesterday ? st.streak.count + 1 : 1;
  st.streak.best = Math.max(st.streak.best || 0, st.streak.count);
  st.streak.lastStudyDay = today;
  saveState();
}

function logAnswer(question, chosenIndex, isCorrect, seconds = 0) {
  const st = getState();
  const key = qKey(question);
  const rec = st.seen[key] || { attempts: 0, correct: 0, wrong: 0, lastSeen: null };
  rec.attempts += 1;
  rec.lastSeen = new Date().toISOString();
  if (isCorrect) rec.correct += 1;
  else rec.wrong += 1;
  st.seen[key] = rec;

  const day = todayKey();
  const log = st.dailyLog[day] || { attempted: 0, correct: 0, seconds: 0 };
  log.attempted += 1;
  if (isCorrect) log.correct += 1;
  log.seconds += seconds;
  st.dailyLog[day] = log;
  st.studySeconds += seconds;

  touchStreak();
  saveState();
}

function recordSession(session) {
  const st = getState();
  st.sessions.unshift(session);
  st.sessions = st.sessions.slice(0, 60);
  saveState();
}

function toggleBookmark(question) {
  const st = getState();
  const qid = qKey(question);
  const i = st.bookmarks.indexOf(qid);
  if (i >= 0) st.bookmarks.splice(i, 1);
  else st.bookmarks.push(qid);
  saveState();
  return st.bookmarks.includes(qid);
}

function isBookmarked(question) {
  return getState().bookmarks.includes(qKey(question));
}

function saveNote(question, text) {
  const st = getState();
  const qid = qKey(question);
  if (text && text.trim()) st.notes[qid] = text.trim();
  else delete st.notes[qid];
  saveState();
}

/* ---------- derived statistics ---------- */

function subjectStats(subject) {
  const st = getState();
  const questions = getQuestionsBySubject(subject === "all" ? "all" : subject);
  let attempts = 0, correct = 0, seenCount = 0;
  questions.forEach((q) => {
    const rec = st.seen[q.id];
    if (!rec) return;
    seenCount += 1;
    attempts += rec.attempts;
    correct += rec.correct;
  });
  return {
    total: questions.length,
    seen: seenCount,
    attempts,
    correct,
    accuracy: pct(correct, attempts),
    coverage: pct(seenCount, questions.length)
  };
}

function chapterStats() {
  const st = getState();
  const rows = [];
  Object.entries(SYLLABUS).forEach(([subject, data]) => {
    data.chapters.forEach((ch) => {
      const qs = QUESTION_BANK.filter((q) => q.chapter === ch.id);
      let attempts = 0, correct = 0, seen = 0;
      qs.forEach((q) => {
        const rec = st.seen[q.id];
        if (!rec) return;
        seen += 1;
        attempts += rec.attempts;
        correct += rec.correct;
      });
      if (attempts === 0) return;
      rows.push({
        chapterId: ch.id,
        chapter: ch.name,
        subject,
        subjectLabel: SYLLABUS[subject].label,
        weight: ch.weight,
        attempts,
        correct,
        seen,
        bankSize: qs.length,
        accuracy: pct(correct, attempts),
        coverage: pct(seen, qs.length)
      });
    });
  });
  return rows.sort((a, b) => a.accuracy - b.accuracy);
}

function overallStats() {
  const st = getState();
  const attempts = Object.values(st.seen).reduce((s, r) => s + r.attempts, 0);
  const correct = Object.values(st.seen).reduce((s, r) => s + r.correct, 0);
  const unique = Object.keys(st.seen).length;
  return {
    attempts,
    correct,
    unique,
    accuracy: pct(correct, attempts),
    coverage: pct(unique, QUESTION_BANK.length),
    sessions: st.sessions.length,
    studySeconds: st.studySeconds,
    streak: st.streak
  };
}

function last7Days() {
  const st = getState();
  const out = [];
  for (let i = 6; i >= 0; i--) {
    const key = todayKey(new Date(Date.now() - i * 86400000));
    const log = st.dailyLog[key] || { attempted: 0, correct: 0 };
    out.push({ day: key, ...log });
  }
  return out;
}

function resetProgress() {
  const keepTheme = getState().theme;
  STATE = deepClone(DEFAULT_STATE);
  STATE.theme = keepTheme;
  saveState();
}
