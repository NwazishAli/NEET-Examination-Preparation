/* Aggregated question bank. Every question follows:
   { id, subject, chapter, difficulty, q, options[4], answer(index), explanation } */
const QUESTION_BANK = [].concat(QUESTIONS_PHYSICS, QUESTIONS_CHEMISTRY, QUESTIONS_BIOLOGY);

const SUBJECT_META = {
  physics: { label: "Physics", icon: "⚛", color: "#6366f1" },
  chemistry: { label: "Chemistry", icon: "🧪", color: "#f59e0b" },
  biology: { label: "Biology", icon: "🧬", color: "#10b981" }
};

function getQuestionsBySubject(subject) {
  if (subject === "all") return QUESTION_BANK.slice();
  return QUESTION_BANK.filter((q) => q.subject === subject);
}

function getChapterName(chapterId) {
  for (const key of Object.keys(SYLLABUS)) {
    const found = SYLLABUS[key].chapters.find((c) => c.id === chapterId);
    if (found) return found.name;
  }
  return chapterId;
}

/* Build an exam paper that mirrors the NEET blueprint.
   When the local bank is short for a subject, questions are repeated with
   shuffled options so that the section still has the correct strength. */
function buildExamPaper(mode) {
  const blueprint = mode === "mini"
    ? [{ subject: "physics", questions: 10 }, { subject: "chemistry", questions: 10 }, { subject: "biology", questions: 20 }]
    : EXAM_BLUEPRINT.sections;

  const paper = [];
  blueprint.forEach((section) => {
    let pool = shuffle(getQuestionsBySubject(section.subject));
    const picked = [];
    while (picked.length < section.questions) {
      if (pool.length === 0) pool = shuffle(getQuestionsBySubject(section.subject));
      const q = pool.pop();
      picked.push(picked.some((p) => p.id === q.id) ? recycleQuestion(q) : q);
    }
    picked.forEach((q) => paper.push(q));
  });
  return paper;
}

let recycleCounter = 0;
function recycleQuestion(q) {
  recycleCounter += 1;
  const order = shuffle([0, 1, 2, 3]);
  return {
    ...q,
    baseId: q.baseId || q.id,
    id: `${q.baseId || q.id}-r${recycleCounter}`,
    options: order.map((i) => q.options[i]),
    answer: order.indexOf(q.answer)
  };
}
