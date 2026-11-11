/* NEET UG syllabus map with approximate weightage (questions per 180-question paper).
   Weightages are based on the average distribution across recent NEET papers (2019–2024). */

const SYLLABUS = {
  physics: {
    label: "Physics",
    totalQuestions: 45,
    chapters: [
      { id: "p-unit-measure", name: "Units & Measurement", weight: 1, class: 11 },
      { id: "p-kinematics", name: "Motion in a Straight Line & Plane", weight: 2, class: 11 },
      { id: "p-laws-motion", name: "Laws of Motion", weight: 2, class: 11 },
      { id: "p-work-energy", name: "Work, Energy & Power", weight: 1, class: 11 },
      { id: "p-rotational", name: "System of Particles & Rotational Motion", weight: 3, class: 11 },
      { id: "p-gravitation", name: "Gravitation", weight: 1, class: 11 },
      { id: "p-properties-solids", name: "Mechanical Properties of Solids", weight: 1, class: 11 },
      { id: "p-properties-fluids", name: "Mechanical Properties of Fluids", weight: 2, class: 11 },
      { id: "p-thermal", name: "Thermal Properties & Thermodynamics", weight: 2, class: 11 },
      { id: "p-kinetic-theory", name: "Kinetic Theory of Gases", weight: 1, class: 11 },
      { id: "p-oscillations", name: "Oscillations & Waves", weight: 3, class: 11 },
      { id: "p-electrostatics", name: "Electrostatics & Capacitance", weight: 4, class: 12 },
      { id: "p-current", name: "Current Electricity", weight: 4, class: 12 },
      { id: "p-magnetism", name: "Moving Charges & Magnetism", weight: 3, class: 12 },
      { id: "p-emi", name: "Magnetism & Matter, EMI & AC", weight: 4, class: 12 },
      { id: "p-em-waves", name: "Electromagnetic Waves", weight: 1, class: 12 },
      { id: "p-optics", name: "Ray & Wave Optics", weight: 4, class: 12 },
      { id: "p-modern", name: "Dual Nature, Atoms & Nuclei", weight: 4, class: 12 },
      { id: "p-semiconductors", name: "Semiconductor Electronics", weight: 2, class: 12 }
    ]
  },
  chemistry: {
    label: "Chemistry",
    totalQuestions: 45,
    chapters: [
      { id: "c-basic", name: "Some Basic Concepts of Chemistry", weight: 2, class: 11 },
      { id: "c-atom", name: "Structure of Atom", weight: 2, class: 11 },
      { id: "c-periodic", name: "Classification of Elements & Periodicity", weight: 2, class: 11 },
      { id: "c-bonding", name: "Chemical Bonding & Molecular Structure", weight: 3, class: 11 },
      { id: "c-states", name: "States of Matter / Thermodynamics", weight: 3, class: 11 },
      { id: "c-equilibrium", name: "Equilibrium & Ionic Equilibrium", weight: 3, class: 11 },
      { id: "c-redox", name: "Redox Reactions", weight: 1, class: 11 },
      { id: "c-hydrogen", name: "Hydrogen & s-Block Elements", weight: 2, class: 11 },
      { id: "c-pblock", name: "p-Block Elements (Group 13 & 14)", weight: 1, class: 11 },
      { id: "c-organic-basic", name: "Organic Chemistry: Basic Principles", weight: 3, class: 11 },
      { id: "c-hydrocarbons", name: "Hydrocarbons", weight: 3, class: 11 },
      { id: "c-solid-state", name: "Solid State / Solutions", weight: 3, class: 12 },
      { id: "c-electrochem", name: "Electrochemistry", weight: 4, class: 12 },
      { id: "c-kinetics", name: "Chemical Kinetics", weight: 1, class: 12 },
      { id: "c-dblock", name: "d & f-Block Elements, Coordination Compounds", weight: 4, class: 12 },
      { id: "c-haloalkanes", name: "Haloalkanes, Alcohols & Ethers", weight: 3, class: 12 },
      { id: "c-carbonyl", name: "Aldehydes, Ketones & Carboxylic Acids", weight: 2, class: 12 },
      { id: "c-amines", name: "Amines & Diazonium Salts", weight: 2, class: 12 },
      { id: "c-biomolecules", name: "Biomolecules & Polymers", weight: 1, class: 12 }
    ]
  },
  biology: {
    label: "Biology",
    totalQuestions: 90,
    chapters: [
      { id: "b-living", name: "The Living World & Biological Classification", weight: 4, class: 11 },
      { id: "b-plant-kingdom", name: "Plant Kingdom & Morphology", weight: 5, class: 11 },
      { id: "b-animal-kingdom", name: "Animal Kingdom", weight: 4, class: 11 },
      { id: "b-cell", name: "Cell: Unit of Life & Cell Cycle", weight: 7, class: 11 },
      { id: "b-biomolecules", name: "Biomolecules", weight: 4, class: 11 },
      { id: "b-plant-physio", name: "Plant Physiology (Photosynthesis, Respiration, Growth)", weight: 8, class: 11 },
      { id: "b-digestion", name: "Digestion & Absorption", weight: 3, class: 11 },
      { id: "b-breathing", name: "Breathing & Exchange of Gases", weight: 4, class: 11 },
      { id: "b-circulation", name: "Body Fluids & Circulation", weight: 5, class: 11 },
      { id: "b-excretion", name: "Excretory Products & Their Elimination", weight: 3, class: 11 },
      { id: "b-locomotion", name: "Locomotion & Movement", weight: 3, class: 11 },
      { id: "b-reproduction", name: "Reproduction (Plants & Humans)", weight: 9, class: 12 },
      { id: "b-genetics", name: "Genetics & Evolution", weight: 12, class: 12 },
      { id: "b-molecular", name: "Molecular Basis of Inheritance", weight: 7, class: 12 },
      { id: "b-biotech", name: "Biotechnology & Its Applications", weight: 5, class: 12 },
      { id: "b-ecology", name: "Ecology & Environment", weight: 7, class: 12 }
    ]
  }
};

/* Exam blueprint based on the current NEET UG pattern (pen-and-paper, 2024-25) */
const EXAM_BLUEPRINT = {
  name: "NEET UG",
  totalQuestions: 180,
  durationMinutes: 200,
  marking: { correct: 4, incorrect: -1, unattempted: 0 },
  sections: [
    { subject: "physics", questions: 45 },
    { subject: "chemistry", questions: 45 },
    { subject: "biology", questions: 90 }
  ]
};

/* 12-week study plan generated from the syllabus weightage */
function buildStudyPlan() {
  const weeks = [];
  const heavy = [];
  const medium = [];
  ["biology", "chemistry", "physics"].forEach((sub) => {
    SYLLABUS[sub].chapters.forEach((ch) => {
      const entry = { ...ch, subject: sub };
      if (ch.weight >= 4) heavy.push(entry);
      else if (ch.weight >= 3) medium.push(entry);
      else weeks.push(entry); // rest get distributed at the end
    });
  });

  const rest = weeks.splice(0, weeks.length);
  const plan = [];
  const weekNames = [
    "Foundation: Cell & Biomolecules",
    "Plant Kingdom & Plant Physiology",
    "Human Physiology I",
    "Human Physiology II",
    "Genetics & Molecular Basis",
    "Reproduction & Biotech",
    "Ecology & Environment",
    "Physical Chemistry Core",
    "Organic Chemistry Core",
    "Inorganic Chemistry",
    "Mechanics & Thermal Physics",
    "Electrodynamics, Optics & Modern Physics"
  ];

  weekNames.forEach((name, i) => {
    const dayTopics = [];
    if (i === 0) dayTopics.push("b-living", "b-cell", "b-biomolecules");
    if (i === 1) dayTopics.push("b-plant-kingdom", "b-plant-physio");
    if (i === 2) dayTopics.push("b-digestion", "b-breathing", "b-circulation");
    if (i === 3) dayTopics.push("b-excretion", "b-locomotion");
    if (i === 4) dayTopics.push("b-genetics", "b-molecular");
    if (i === 5) dayTopics.push("b-reproduction", "b-biotech");
    if (i === 6) dayTopics.push("b-ecology", "b-animal-kingdom");
    if (i === 7) dayTopics.push("c-basic", "c-atom", "c-bonding", "c-states", "c-equilibrium", "c-electrochem", "c-kinetics", "c-solid-state");
    if (i === 8) dayTopics.push("c-organic-basic", "c-hydrocarbons", "c-haloalkanes", "c-carbonyl", "c-amines", "c-biomolecules");
    if (i === 9) dayTopics.push("c-periodic", "c-hydrogen", "c-pblock", "c-dblock", "c-redox");
    if (i === 10) dayTopics.push("p-unit-measure", "p-kinematics", "p-laws-motion", "p-work-energy", "p-rotational", "p-gravitation", "p-properties-fluids", "p-thermal", "p-kinetic-theory", "p-oscillations", "p-properties-solids");
    if (i === 11) dayTopics.push("p-electrostatics", "p-current", "p-magnetism", "p-emi", "p-em-waves", "p-optics", "p-modern", "p-semiconductors");

    const topics = dayTopics.map((id) => {
      for (const sub of ["physics", "chemistry", "biology"]) {
        const ch = SYLLABUS[sub].chapters.find((c) => c.id === id);
        if (ch) return { ...ch, subject: sub };
      }
      return null;
    }).filter(Boolean);

    plan.push({
      week: i + 1,
      title: name,
      topics,
      targetQuestions: 600 + (i % 3) * 50,
      mockTests: i >= 7 ? 2 : 1,
      focus: i < 7 ? "Biology (highest weightage)" : i < 10 ? "Chemistry + Biology revision" : "Physics + full-syllabus mocks"
    });
  });

  // leftover low-weight chapters get suggested revision slots
  plan.forEach((p, i) => {
    p.revision = rest.filter((_, idx) => idx % 12 === i).map((c) => c.name);
  });
  return plan;
}

const STUDY_PLAN = buildStudyPlan();
