/* ===== Content aggregation for chapter pages, question bank, drills ===== */

const CHAPTER_NOTES = Object.assign({}, NOTES_PHYSICS, NOTES_CHEMISTRY, NOTES_BIOLOGY);

/* Subject → unit grouping (used by the subject hub) */
const SUBJECT_UNITS = {
  physics: [
    { name: "Mechanics & Properties of Matter", chapters: ["p-unit-measure", "p-kinematics", "p-laws-motion", "p-work-energy", "p-rotational", "p-gravitation", "p-properties-solids", "p-properties-fluids"] },
    { name: "Heat & Thermodynamics", chapters: ["p-thermal", "p-kinetic-theory"] },
    { name: "Oscillations & Waves", chapters: ["p-oscillations"] },
    { name: "Electrodynamics", chapters: ["p-electrostatics", "p-current", "p-magnetism", "p-emi", "p-em-waves"] },
    { name: "Optics & Modern Physics", chapters: ["p-optics", "p-modern", "p-semiconductors"] }
  ],
  chemistry: [
    { name: "Physical Chemistry", chapters: ["c-basic", "c-atom", "c-states", "c-equilibrium", "c-redox", "c-solid-state", "c-electrochem", "c-kinetics"] },
    { name: "Inorganic Chemistry", chapters: ["c-periodic", "c-bonding", "c-hydrogen", "c-pblock", "c-dblock"] },
    { name: "Organic Chemistry", chapters: ["c-organic-basic", "c-hydrocarbons", "c-haloalkanes", "c-carbonyl", "c-amines", "c-biomolecules"] }
  ],
  biology: [
    { name: "Diversity in the Living World", chapters: ["b-living", "b-plant-kingdom", "b-animal-kingdom"] },
    { name: "Structural Organisation & Cell", chapters: ["b-cell", "b-biomolecules"] },
    { name: "Plant Physiology", chapters: ["b-plant-physio"] },
    { name: "Human Physiology", chapters: ["b-digestion", "b-breathing", "b-circulation", "b-excretion", "b-locomotion"] },
    { name: "Reproduction & Genetics", chapters: ["b-reproduction", "b-genetics", "b-molecular"] },
    { name: "Biotechnology & Ecology", chapters: ["b-biotech", "b-ecology"] }
  ]
};

/* Assessment blueprint per subject (theory marks, questions per paper) */
const SUBJECT_EXAM_INFO = {
  physics: { questions: 45, marks: 180, minutes: 50, note: "Numerical-heavy; formulas and dimensional checks decide most questions." },
  chemistry: { questions: 45, marks: 180, minutes: 50, note: "Balanced across physical, inorganic and organic; NCERT reactions matter." },
  biology: { questions: 90, marks: 360, minutes: 100, note: "Highest weightage; most questions map directly to NCERT lines, figures and tables." }
};

function findChapter(chapterId) {
  for (const subject of Object.keys(SYLLABUS)) {
    const ch = SYLLABUS[subject].chapters.find((c) => c.id === chapterId);
    if (ch) return { ...ch, subject };
  }
  return null;
}

function chaptersOf(subject) {
  return SYLLABUS[subject].chapters.map((c) => ({ ...c, subject }));
}

function noteFor(chapterId) {
  return CHAPTER_NOTES[chapterId] || null;
}

function writtenFor(chapterId) {
  return WRITTEN_BANK[chapterId] || { short: [], long: [], application: [], competency: [] };
}

/* every written question with its chapter and tone */
function allWrittenQuestions() {
  const rows = [];
  Object.entries(WRITTEN_BANK).forEach(([chapterId, tones]) => {
    Object.entries(tones).forEach(([tone, items]) => {
      items.forEach((item, i) => {
        const ch = findChapter(chapterId);
        rows.push({
          id: `${chapterId}-${tone}-${i}`,
          chapterId,
          chapter: ch ? ch.name : chapterId,
          subject: ch ? ch.subject : "",
          tone,
          q: item.q,
          a: item.a
        });
      });
    });
  });
  return rows;
}

const TONE_LABELS = { short: "Short", long: "Long", application: "Application", competency: "Competency" };
const TONE_MARKS = { short: "2 marks", long: "5 marks", application: "3 marks", competency: "4 marks" };

/* MCQs (from the main bank + PYQ) for a chapter — used by the chapter page and drill */
function mcqsFor(chapterId) {
  return practicePool().filter((q) => q.chapter === chapterId);
}

function mcqsForSubject(subject) {
  return practicePool().filter((q) => q.subject === subject);
}

/* per-subject totals used on hub cards */
function subjectContentStats(subject) {
  const chapters = chaptersOf(subject);
  const written = chapters.reduce((sum, c) => {
    const w = writtenFor(c.id);
    return sum + w.short.length + w.long.length + w.application.length + w.competency.length;
  }, 0);
  return {
    chapters: chapters.length,
    written,
    mcqs: mcqsForSubject(subject).length,
    units: (SUBJECT_UNITS[subject] || []).length,
    weight: SYLLABUS[subject].totalQuestions
  };
}

/* chapter completion tracker lives in state.chapterDone */
function isChapterDone(chapterId) {
  const st = getState();
  return !!(st.chapterDone && st.chapterDone[chapterId]);
}

function toggleChapterDone(chapterId) {
  const st = getState();
  st.chapterDone = st.chapterDone || {};
  if (st.chapterDone[chapterId]) delete st.chapterDone[chapterId];
  else { st.chapterDone[chapterId] = true; touchStreak(); }
  saveState();
}

function subjectProgress(subject) {
  const chapters = chaptersOf(subject);
  const done = chapters.filter((c) => isChapterDone(c.id)).length;
  return { done, total: chapters.length, pct: pct(done, chapters.length) };
}
