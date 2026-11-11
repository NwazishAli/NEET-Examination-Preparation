/* ===== Previous Years Papers (PYQ) =====
   Year-wise sets modelled on the NEET UG papers. Each question follows the
   same shape as the main bank: { id, subject, chapter, difficulty, q,
   options[4], answer, explanation }.
   `year` is the paper session the question is modelled on; these are
   representative items for practice, not scanned reproductions. */

const PYQ_2019_2021 = [
  /* ---------------- NEET 2019 ---------------- */
  {
    id: "pyq19-p1", year: 2019, subject: "physics", chapter: "p-laws-motion", difficulty: "easy",
    q: "A particle moves in a circle with constant speed. Which of the following remains constant?",
    options: ["The magnitude of its acceleration", "Its velocity", "The direction of its acceleration", "Its momentum"],
    answer: 0,
    explanation: "The speed is constant, so v²/r (magnitude of centripetal acceleration) is constant; the direction of v and of acceleration keep changing."
  },
  {
    id: "pyq19-p2", year: 2019, subject: "physics", chapter: "p-emi", difficulty: "easy",
    q: "The SI unit of magnetic flux is:",
    options: ["Weber", "Tesla", "Henry", "Gauss"],
    answer: 0,
    explanation: "Φ = BA; 1 Wb = 1 T·m². Tesla is flux density and henry is inductance."
  },
  {
    id: "pyq19-p3", year: 2019, subject: "physics", chapter: "p-optics", difficulty: "medium",
    q: "An object is placed at the principal focus of a convex lens. The image formed is:",
    options: ["At infinity", "At the focus on the other side", "At the optical centre", "Between F and 2F"],
    answer: 0,
    explanation: "Rays from F emerge parallel, so the image forms at infinity (1/v = 0)."
  },
  {
    id: "pyq19-p4", year: 2019, subject: "physics", chapter: "p-electrostatics", difficulty: "easy",
    q: "The work done in moving a charge along an equipotential surface is:",
    options: ["Zero", "Positive", "Negative", "Infinite"],
    answer: 0,
    explanation: "No potential difference exists between any two points on the surface, so W = qΔV = 0."
  },

  {
    id: "pyq19-c1", year: 2019, subject: "chemistry", chapter: "c-periodic", difficulty: "medium",
    q: "Among Na, Mg, Al and Si, the element with the highest first ionisation enthalpy is:",
    options: ["Si", "Mg", "Al", "Na"],
    answer: 0,
    explanation: "Ionisation enthalpy increases across a period; Si has the highest among these (Mg > Al is the usual anomaly)."
  },
  {
    id: "pyq19-c2", year: 2019, subject: "chemistry", chapter: "c-organic-basic", difficulty: "medium",
    q: "The IUPAC name of (CH₃)₂CH–CH₂–CHO is:",
    options: ["3-methylbutanal", "2-methylbutanal", "3-methylbutanoic acid", "2-methylpropanal"],
    answer: 0,
    explanation: "The –CHO carbon is C-1; methyl sits on C-3 of a four-carbon chain, giving 3-methylbutanal."
  },
  {
    id: "pyq19-c3", year: 2019, subject: "chemistry", chapter: "c-dblock", difficulty: "easy",
    q: "Which of the following is NOT an ore of iron?",
    options: ["Bauxite", "Haematite", "Magnetite", "Siderite"],
    answer: 0,
    explanation: "Bauxite (Al₂O₃·2H₂O) is the principal ore of aluminium."
  },
  {
    id: "pyq19-c4", year: 2019, subject: "chemistry", chapter: "c-equilibrium", difficulty: "easy",
    q: "The pH of a 0.001 M NaOH solution is:",
    options: ["11", "3", "12", "9"],
    answer: 0,
    explanation: "[OH⁻] = 10⁻³ M ⇒ pOH = 3 ⇒ pH = 14 − 3 = 11."
  },

  {
    id: "pyq19-b1", year: 2019, subject: "biology", chapter: "b-reproduction", difficulty: "easy",
    q: "Progesterone in the human female is secreted mainly by the:",
    options: ["Corpus luteum", "Anterior pituitary", "Graafian follicle before ovulation", "Adrenal cortex"],
    answer: 0,
    explanation: "After ovulation the ruptured follicle becomes the corpus luteum, which secretes progesterone to support the endometrium."
  },
  {
    id: "pyq19-b2", year: 2019, subject: "biology", chapter: "b-plant-kingdom", difficulty: "medium",
    q: "Which of the following is regarded as a living fossil?",
    options: ["Ginkgo biloba", "Pinus", "Cycas revoluta only", "Selaginella"],
    answer: 0,
    explanation: "Ginkgo biloba is the sole surviving species of its ancient group and is classically called a living fossil."
  },
  {
    id: "pyq19-b3", year: 2019, subject: "biology", chapter: "b-plant-physio", difficulty: "medium",
    q: "In the electron transport chain, oxidation of one NADH yields approximately:",
    options: ["3 ATP", "1 ATP", "2 ATP", "38 ATP"],
    answer: 0,
    explanation: "NCERT accounts 3 ATP per NADH and 2 ATP per FADH₂ in oxidative phosphorylation."
  },
  {
    id: "pyq19-b4", year: 2019, subject: "biology", chapter: "b-digestion", difficulty: "easy",
    q: "Deficiency of which vitamin causes pernicious anaemia?",
    options: ["Vitamin B₁₂", "Vitamin B₁", "Vitamin C", "Vitamin K"],
    answer: 0,
    explanation: "B₁₂ (cobalamin) is needed for red cell maturation; its deficiency causes pernicious anaemia."
  },

  /* ---------------- NEET 2020 ---------------- */
  {
    id: "pyq20-p1", year: 2020, subject: "physics", chapter: "p-laws-motion", difficulty: "easy",
    q: "The dimensional formula of impulse is:",
    options: ["[MLT⁻¹]", "[MLT⁻²]", "[ML²T⁻¹]", "[ML²T⁻²]"],
    answer: 0,
    explanation: "Impulse = force × time = [MLT⁻²]·[T] = [MLT⁻¹], the same as momentum."
  },
  {
    id: "pyq20-p2", year: 2020, subject: "physics", chapter: "p-emi", difficulty: "easy",
    q: "In an ideal step-up transformer, which quantity decreases?",
    options: ["Current", "Voltage", "Power", "Frequency"],
    answer: 0,
    explanation: "Voltage rises with the turns ratio, so current falls to keep input and output power equal."
  },
  {
    id: "pyq20-p3", year: 2020, subject: "physics", chapter: "p-optics", difficulty: "medium",
    q: "The angle of minimum deviation of a prism depends on:",
    options: ["Refractive index and angle of the prism", "Only the angle of the prism", "Only the refractive index", "Colour of the prism"],
    answer: 0,
    explanation: "δ_min = (μ − 1)A for a thin prism, so it depends on both μ and A."
  },
  {
    id: "pyq20-p4", year: 2020, subject: "physics", chapter: "p-modern", difficulty: "medium",
    q: "The half-life of a radioactive substance is 20 minutes. The fraction left after 60 minutes is:",
    options: ["1/8", "1/3", "1/4", "1/16"],
    answer: 0,
    explanation: "60 min = 3 half-lives ⇒ fraction = (1/2)³ = 1/8."
  },

  {
    id: "pyq20-c1", year: 2020, subject: "chemistry", chapter: "c-dblock", difficulty: "medium",
    q: "Which of the following is an ambidentate ligand?",
    options: ["SCN⁻", "NH₃", "H₂O", "CN⁻"],
    answer: 0,
    explanation: "Thiocyanate can bind through S or N, so it is ambidentate; NH₃, H₂O and CN⁻ are not."
  },
  {
    id: "pyq20-c2", year: 2020, subject: "chemistry", chapter: "c-redox", difficulty: "easy",
    q: "The oxidation state of chromium in K₂Cr₂O₇ is:",
    options: ["+6", "+7", "+3", "+4"],
    answer: 0,
    explanation: "2(+1) + 2x + 7(−2) = 0 ⇒ 2x = 12 ⇒ x = +6."
  },
  {
    id: "pyq20-c3", year: 2020, subject: "chemistry", chapter: "c-haloalkanes", difficulty: "medium",
    q: "Which of the following gives a positive iodoform test?",
    options: ["Ethanol", "Methanol", "Ethanoic acid", "Propan-1-ol"],
    answer: 0,
    explanation: "Iodoform test is given by ethanol and methyl ketones — compounds with a CH₃–CH(OH)– or CH₃–CO– group."
  },
  {
    id: "pyq20-c4", year: 2020, subject: "chemistry", chapter: "c-bonding", difficulty: "easy",
    q: "The bond angle in a water molecule is approximately:",
    options: ["104.5°", "109.5°", "120°", "180°"],
    answer: 0,
    explanation: "sp³ oxygen with two lone pairs compresses the tetrahedral angle to about 104.5°."
  },

  {
    id: "pyq20-b1", year: 2020, subject: "biology", chapter: "b-cell", difficulty: "easy",
    q: "In which stage of mitosis are chromosomes aligned at the equator of the cell?",
    options: ["Metaphase", "Prophase", "Anaphase", "Telophase"],
    answer: 0,
    explanation: "At metaphase, chromosomes line up on the metaphase plate via spindle fibres."
  },
  {
    id: "pyq20-b2", year: 2020, subject: "biology", chapter: "b-reproduction", difficulty: "medium",
    q: "The antipodal cells of the angiosperm embryo sac are:",
    options: ["Haploid (n)", "Diploid (2n)", "Triploid (3n)", "Tetraploid (4n)"],
    answer: 0,
    explanation: "The egg apparatus and antipodals are haploid; only the endosperm is triploid."
  },
  {
    id: "pyq20-b3", year: 2020, subject: "biology", chapter: "b-circulation", difficulty: "medium",
    q: "The enzyme that converts angiotensinogen to angiotensin I is:",
    options: ["Renin", "Angiotensin converting enzyme", "Aldosterone", "ADH"],
    answer: 0,
    explanation: "Renin from the juxtaglomerular cells starts the RAAS cascade; ACE later converts I to II."
  },
  {
    id: "pyq20-b4", year: 2020, subject: "biology", chapter: "b-reproduction", difficulty: "easy",
    q: "The number of chromosomes in a human primary spermatocyte is:",
    options: ["46", "23", "92", "4"],
    answer: 0,
    explanation: "A primary spermatocyte is diploid (2n = 46) before the first meiotic division."
  },

  /* ---------------- NEET 2021 ---------------- */
  {
    id: "pyq21-p1", year: 2021, subject: "physics", chapter: "p-kinematics", difficulty: "easy",
    q: "In uniform circular motion, which of the following is constant?",
    options: ["Speed", "Velocity", "Acceleration", "Momentum"],
    answer: 0,
    explanation: "The magnitude of velocity (speed) is constant while its direction changes continuously."
  },
  {
    id: "pyq21-p2", year: 2021, subject: "physics", chapter: "p-electrostatics", difficulty: "easy",
    q: "Two capacitors of 4 μF each are connected in series. The equivalent capacitance is:",
    options: ["2 μF", "8 μF", "4 μF", "16 μF"],
    answer: 0,
    explanation: "In series 1/C = 1/4 + 1/4 = 1/2 ⇒ C = 2 μF."
  },
  {
    id: "pyq21-p3", year: 2021, subject: "physics", chapter: "p-modern", difficulty: "medium",
    q: "In the photoelectric effect, increasing the intensity of incident light (frequency unchanged) increases the:",
    options: ["Number of photoelectrons emitted", "Maximum kinetic energy of photoelectrons", "Threshold frequency", "Work function"],
    answer: 0,
    explanation: "Intensity raises the photon count, so more electrons are emitted; their maximum KE depends only on frequency."
  },
  {
    id: "pyq21-p4", year: 2021, subject: "physics", chapter: "p-modern", difficulty: "medium",
    q: "The energy of an electron in the nth Bohr orbit of a hydrogen atom is proportional to:",
    options: ["1/n²", "n²", "1/n", "n"],
    answer: 0,
    explanation: "Eₙ = −13.6/n² eV, so |E| ∝ 1/n²."
  },

  {
    id: "pyq21-c1", year: 2021, subject: "chemistry", chapter: "c-bonding", difficulty: "easy",
    q: "Which of the following acts as a Lewis acid?",
    options: ["BF₃", "NH₃", "H₂O", "OH⁻"],
    answer: 0,
    explanation: "BF₃ has an incomplete octet and accepts an electron pair, so it is a Lewis acid."
  },
  {
    id: "pyq21-c2", year: 2021, subject: "chemistry", chapter: "c-organic-basic", difficulty: "medium",
    q: "The IUPAC name of CH₃–CH₂–CO–CH₃ is:",
    options: ["Butan-2-one", "Butanal", "Butan-1-one", "Propan-2-one"],
    answer: 0,
    explanation: "Four carbons with the carbonyl at C-2: butan-2-one."
  },
  {
    id: "pyq21-c3", year: 2021, subject: "chemistry", chapter: "c-hydrogen", difficulty: "easy",
    q: "The gas liberated when zinc reacts with dilute hydrochloric acid is:",
    options: ["Hydrogen", "Chlorine", "Oxygen", "Carbon dioxide"],
    answer: 0,
    explanation: "Zn + 2HCl → ZnCl₂ + H₂↑."
  },
  {
    id: "pyq21-c4", year: 2021, subject: "chemistry", chapter: "c-organic-basic", difficulty: "medium",
    q: "A compound with two different chiral centres can exist as a maximum of how many stereoisomers?",
    options: ["4", "2", "8", "3"],
    answer: 0,
    explanation: "2ⁿ = 2² = 4 stereoisomers (two pairs of enantiomers) unless a meso form reduces the count."
  },

  {
    id: "pyq21-b1", year: 2021, subject: "biology", chapter: "b-circulation", difficulty: "easy",
    q: "Which part of the brain regulates body temperature and hunger?",
    options: ["Hypothalamus", "Cerebellum", "Medulla oblongata", "Cerebrum"],
    answer: 0,
    explanation: "The hypothalamus is the homeostatic control centre for temperature, hunger, thirst and the endocrine link."
  },
  {
    id: "pyq21-b2", year: 2021, subject: "biology", chapter: "b-plant-physio", difficulty: "medium",
    q: "The Casparian strip is found in the:",
    options: ["Endodermis of the root", "Epidermis of the leaf", "Xylem vessels", "Phloem sieve tubes"],
    answer: 0,
    explanation: "Suberised Casparian thickenings in the endodermis force water through the symplast pathway."
  },
  {
    id: "pyq21-b3", year: 2021, subject: "biology", chapter: "b-ecology", difficulty: "easy",
    q: "Which of the following is an example of ex-situ conservation?",
    options: ["Zoological park", "Biosphere reserve", "National park", "Sacred grove"],
    answer: 0,
    explanation: "Zoos and botanical gardens conserve organisms outside their natural habitat (ex situ); parks and reserves are in situ."
  },
  {
    id: "pyq21-b4", year: 2021, subject: "biology", chapter: "b-excretion", difficulty: "easy",
    q: "The structural and functional unit of the kidney is the:",
    options: ["Nephron", "Neuron", "Alveolus", "Villus"],
    answer: 0,
    explanation: "Each human kidney contains about a million nephrons, the units that filter blood and form urine."
  }
];

const PYQ_2022_2024 = [
  /* ---------------- NEET 2022 ---------------- */
  {
    id: "pyq22-p1", year: 2022, subject: "physics", chapter: "p-kinematics", difficulty: "easy",
    q: "A body thrown vertically upward is at its highest point. Its acceleration at that instant is:",
    options: ["g downwards", "Zero", "g upwards", "g/2 downwards"],
    answer: 0,
    explanation: "Only gravity acts throughout the flight, so acceleration is g downward even where velocity is momentarily zero."
  },
  {
    id: "pyq22-p2", year: 2022, subject: "physics", chapter: "p-magnetism", difficulty: "easy",
    q: "The SI unit of magnetic flux density (B) is:",
    options: ["Tesla", "Weber", "Henry", "Farad"],
    answer: 0,
    explanation: "1 tesla = 1 Wb/m² = 1 N/(A·m)."
  },
  {
    id: "pyq22-p3", year: 2022, subject: "physics", chapter: "p-optics", difficulty: "easy",
    q: "Total internal reflection can occur when light travels from:",
    options: ["A denser to a rarer medium", "A rarer to a denser medium", "Any medium to air at normal incidence", "Vacuum into glass"],
    answer: 0,
    explanation: "TIR needs the ray to go from a higher to a lower refractive index, with the angle of incidence above the critical angle."
  },
  {
    id: "pyq22-p4", year: 2022, subject: "physics", chapter: "p-modern", difficulty: "hard",
    q: "The work function of a metal is 2 eV. Its threshold frequency is about:",
    options: ["4.8 × 10¹⁴ Hz", "2.0 × 10¹⁴ Hz", "9.6 × 10¹⁴ Hz", "1.6 × 10¹⁵ Hz"],
    answer: 0,
    explanation: "ν₀ = φ/h = (2 × 1.6 × 10⁻¹⁹)/(6.63 × 10⁻³⁴) ≈ 4.8 × 10¹⁴ Hz."
  },

  {
    id: "pyq22-c1", year: 2022, subject: "chemistry", chapter: "c-bonding", difficulty: "easy",
    q: "Which of the following has the highest boiling point?",
    options: ["H₂O", "H₂S", "H₂Se", "H₂Te"],
    answer: 0,
    explanation: "Water forms strong intermolecular hydrogen bonds, giving it an anomalously high boiling point."
  },
  {
    id: "pyq22-c2", year: 2022, subject: "chemistry", chapter: "c-bonding", difficulty: "easy",
    q: "The shape of the NH₄⁺ ion is:",
    options: ["Tetrahedral", "Square planar", "Trigonal pyramidal", "Linear"],
    answer: 0,
    explanation: "Four bond pairs and no lone pairs on nitrogen give sp³ tetrahedral geometry (109.5°)."
  },
  {
    id: "pyq22-c3", year: 2022, subject: "chemistry", chapter: "c-equilibrium", difficulty: "easy",
    q: "The catalyst used in the Haber process for ammonia synthesis is:",
    options: ["Iron with molybdenum promoter", "Platinum", "Vanadium pentoxide", "Nickel"],
    answer: 0,
    explanation: "Finely divided iron with Mo/K₂O promoters is used at ~450 °C and 200 atm."
  },
  {
    id: "pyq22-c4", year: 2022, subject: "chemistry", chapter: "c-hydrocarbons", difficulty: "easy",
    q: "Which of the following is aromatic?",
    options: ["Benzene", "Cyclohexane", "Cyclohexene", "n-Hexane"],
    answer: 0,
    explanation: "Benzene is planar with 6 delocalised π electrons, satisfying Hückel's 4n+2 rule."
  },

  {
    id: "pyq22-b1", year: 2022, subject: "biology", chapter: "b-digestion", difficulty: "easy",
    q: "Mucus in the stomach is secreted by:",
    options: ["Goblet cells", "Parietal cells", "Chief cells", "G-cells"],
    answer: 0,
    explanation: "Goblet (mucous neck) cells secrete mucus that protects the gastric lining from HCl and pepsin."
  },
  {
    id: "pyq22-b2", year: 2022, subject: "biology", chapter: "b-ecology", difficulty: "medium",
    q: "The conversion of nitrates into nitrogen gas by bacteria is called:",
    options: ["Denitrification", "Nitrification", "Ammonification", "Nitrogen fixation"],
    answer: 0,
    explanation: "Pseudomonas and Thiobacillus reduce nitrates to N₂, returning nitrogen to the atmosphere."
  },
  {
    id: "pyq22-b3", year: 2022, subject: "biology", chapter: "b-cell", difficulty: "medium",
    q: "In mitochondria, ATP synthesis occurs at the:",
    options: ["Inner membrane (F₁ particles)", "Outer membrane", "Matrix", "Intermembrane space"],
    answer: 0,
    explanation: "The oxysomes (F₀–F₁ particles) on the inner membrane carry out oxidative phosphorylation."
  },
  {
    id: "pyq22-b4", year: 2022, subject: "biology", chapter: "b-reproduction", difficulty: "medium",
    q: "Polyembryony is commonly seen in:",
    options: ["Citrus", "Rice", "Wheat", "Pea"],
    answer: 0,
    explanation: "In Citrus (and mango) many embryos develop from nucellar cells in a single seed."
  },

  /* ---------------- NEET 2023 ---------------- */
  {
    id: "pyq23-p1", year: 2023, subject: "physics", chapter: "p-electrostatics", difficulty: "medium",
    q: "The dimensional formula of electric field is:",
    options: ["[MLT⁻³A⁻¹]", "[MLT⁻²A⁻¹]", "[MLT⁻³A]", "[ML²T⁻³A⁻¹]"],
    answer: 0,
    explanation: "E = F/q = [MLT⁻²]/[AT] = [MLT⁻³A⁻¹]."
  },
  {
    id: "pyq23-p2", year: 2023, subject: "physics", chapter: "p-current", difficulty: "medium",
    q: "A wire of resistance R is stretched uniformly to twice its original length. Its new resistance is:",
    options: ["4R", "2R", "R/2", "8R"],
    answer: 0,
    explanation: "Volume is constant, so doubling length halves the area: R' = ρ(2L)/(A/2) = 4R."
  },
  {
    id: "pyq23-p3", year: 2023, subject: "physics", chapter: "p-modern", difficulty: "medium",
    q: "The de Broglie wavelength of an electron accelerated through a potential V is proportional to:",
    options: ["1/√V", "V", "√V", "1/V"],
    answer: 0,
    explanation: "λ = h/√(2meV), so λ ∝ 1/√V."
  },
  {
    id: "pyq23-p4", year: 2023, subject: "physics", chapter: "p-modern", difficulty: "easy",
    q: "Which of the following has the greatest penetrating power?",
    options: ["Gamma rays", "Alpha particles", "Beta particles", "All are equal"],
    answer: 0,
    explanation: "Gamma rays are uncharged and highly energetic, so they penetrate matter far more than α or β particles."
  },

  {
    id: "pyq23-c1", year: 2023, subject: "chemistry", chapter: "c-carbonyl", difficulty: "medium",
    q: "Which of the following is the strongest acid?",
    options: ["CCl₃COOH", "CHCl₂COOH", "CH₂ClCOOH", "CH₃COOH"],
    answer: 0,
    explanation: "Three electron-withdrawing Cl atoms stabilise the carboxylate anion most strongly, so CCl₃COOH is strongest."
  },
  {
    id: "pyq23-c2", year: 2023, subject: "chemistry", chapter: "c-dblock", difficulty: "medium",
    q: "The number of unpaired electrons in Fe³⁺ (Z = 26) is:",
    options: ["5", "4", "3", "6"],
    answer: 0,
    explanation: "Fe³⁺ is 3d⁵, which is half-filled with five unpaired electrons (high spin)."
  },
  {
    id: "pyq23-c3", year: 2023, subject: "chemistry", chapter: "c-biomolecules", difficulty: "easy",
    q: "Which of the following is a thermosetting polymer?",
    options: ["Bakelite", "Polythene", "PVC", "Nylon-6,6"],
    answer: 0,
    explanation: "Bakelite is a cross-linked phenol–formaldehyde resin and cannot be softened again on heating."
  },
  {
    id: "pyq23-c4", year: 2023, subject: "chemistry", chapter: "c-basic", difficulty: "easy",
    q: "The molarity of a solution containing 4 g of NaOH in 500 mL is: (M of NaOH = 40)",
    options: ["0.2 M", "0.4 M", "0.1 M", "0.8 M"],
    answer: 0,
    explanation: "Moles = 4/40 = 0.1; Molarity = 0.1/0.5 = 0.2 M."
  },

  {
    id: "pyq23-b1", year: 2023, subject: "biology", chapter: "b-genetics", difficulty: "easy",
    q: "Which of the following is a sex-linked disorder?",
    options: ["Haemophilia", "Sickle-cell anaemia", "Thalassaemia", "Phenylketonuria"],
    answer: 0,
    explanation: "Haemophilia is X-linked recessive; the others are autosomal disorders."
  },
  {
    id: "pyq23-b2", year: 2023, subject: "biology", chapter: "b-reproduction", difficulty: "easy",
    q: "Which hormone causes milk ejection during lactation?",
    options: ["Oxytocin", "Prolactin", "Oestrogen", "Progesterone"],
    answer: 0,
    explanation: "Oxytocin triggers contraction of myoepithelial cells around alveoli; prolactin stimulates milk production."
  },
  {
    id: "pyq23-b3", year: 2023, subject: "biology", chapter: "b-plant-physio", difficulty: "medium",
    q: "The photolysis of water in photosynthesis takes place in the:",
    options: ["Thylakoid membrane at PSII", "Stroma", "Cytoplasm", "Mitochondrial membrane"],
    answer: 0,
    explanation: "Photosystem II splits water on the thylakoid membrane using light energy, releasing O₂ and electrons."
  },
  {
    id: "pyq23-b4", year: 2023, subject: "biology", chapter: "b-ecology", difficulty: "easy",
    q: "Mycorrhiza is an example of:",
    options: ["Symbiosis between a fungus and roots", "Parasitism on leaves", "Commensalism between insects and flowers", "Decomposition of leaf litter"],
    answer: 0,
    explanation: "Fungi supply water and minerals to plant roots while receiving sugars — a mutualistic symbiosis."
  },

  /* ---------------- NEET 2024 ---------------- */
  {
    id: "pyq24-p1", year: 2024, subject: "physics", chapter: "p-gravitation", difficulty: "medium",
    q: "The escape velocity from the surface of a planet depends on:",
    options: ["The mass and radius of the planet", "The mass of the body", "The angle of projection", "The mass of the body and planet"],
    answer: 0,
    explanation: "v_e = √(2GM/R) depends only on the planet's mass and radius, not the projected body's mass."
  },
  {
    id: "pyq24-p2", year: 2024, subject: "physics", chapter: "p-current", difficulty: "easy",
    q: "The equivalent resistance of 6 Ω and 3 Ω connected in parallel is:",
    options: ["2 Ω", "9 Ω", "4.5 Ω", "18 Ω"],
    answer: 0,
    explanation: "1/R = 1/6 + 1/3 = 1/2 ⇒ R = 2 Ω."
  },
  {
    id: "pyq24-p3", year: 2024, subject: "physics", chapter: "p-optics", difficulty: "easy",
    q: "The focal length of a concave mirror of radius of curvature 20 cm is:",
    options: ["10 cm", "20 cm", "40 cm", "5 cm"],
    answer: 0,
    explanation: "f = R/2 = 10 cm."
  },
  {
    id: "pyq24-p4", year: 2024, subject: "physics", chapter: "p-emi", difficulty: "easy",
    q: "The SI unit of self-inductance is the:",
    options: ["Henry", "Weber", "Tesla", "Ohm"],
    answer: 0,
    explanation: "L = Φ/I, so 1 henry = 1 Wb per ampere."
  },

  {
    id: "pyq24-c1", year: 2024, subject: "chemistry", chapter: "c-states", difficulty: "easy",
    q: "Which of the following is NOT a greenhouse gas?",
    options: ["N₂", "CO₂", "CH₄", "N₂O"],
    answer: 0,
    explanation: "Dinitrogen does not absorb infrared radiation appreciably, so it is not a greenhouse gas."
  },
  {
    id: "pyq24-c2", year: 2024, subject: "chemistry", chapter: "c-basic", difficulty: "easy",
    q: "The number of moles present in 22 g of CO₂ is: (M = 44)",
    options: ["0.5", "1", "2", "0.25"],
    answer: 0,
    explanation: "n = m/M = 22/44 = 0.5 mol."
  },
  {
    id: "pyq24-c3", year: 2024, subject: "chemistry", chapter: "c-atom", difficulty: "easy",
    q: "Which of the following represents a noble gas electron configuration?",
    options: ["1s² 2s² 2p⁶", "1s² 2s² 2p⁵", "1s² 2s² 2p⁶ 3s¹", "1s² 2s¹"],
    answer: 0,
    explanation: "A complete octet (1s² 2s² 2p⁶) corresponds to neon, a noble gas."
  },
  {
    id: "pyq24-c4", year: 2024, subject: "chemistry", chapter: "c-carbonyl", difficulty: "medium",
    q: "Reaction of an aldehyde with a ketone in the presence of dilute alkali gives:",
    options: ["A β-hydroxy carbonyl (aldol condensation)", "An ester", "An amine", "An acid anhydride"],
    answer: 0,
    explanation: "Dilute alkali generates an enolate that adds to the carbonyl, forming a β-hydroxy aldehyde or ketone."
  },

  {
    id: "pyq24-b1", year: 2024, subject: "biology", chapter: "b-plant-physio", difficulty: "easy",
    q: "The maximum absorption of water in plants occurs through the:",
    options: ["Root hair region", "Root cap", "Stem", "Leaf surface"],
    answer: 0,
    explanation: "Root hairs greatly increase absorptive surface area in the zone of maturation."
  },
  {
    id: "pyq24-b2", year: 2024, subject: "biology", chapter: "b-molecular", difficulty: "easy",
    q: "The genetic material of HIV is:",
    options: ["Single-stranded RNA", "Double-stranded DNA", "Single-stranded DNA", "Double-stranded RNA"],
    answer: 0,
    explanation: "HIV is a retrovirus carrying ssRNA, which is reverse-transcribed into DNA."
  },
  {
    id: "pyq24-b3", year: 2024, subject: "biology", chapter: "b-plant-physio", difficulty: "medium",
    q: "How many molecules of O₂ are released per molecule of glucose formed in photosynthesis?",
    options: ["6", "12", "3", "18"],
    answer: 0,
    explanation: "6CO₂ + 12H₂O → C₆H₁₂O₆ + 6O₂ + 6H₂O, so six O₂ molecules are released."
  },
  {
    id: "pyq24-b4", year: 2024, subject: "biology", chapter: "b-locomotion", difficulty: "easy",
    q: "Which part of the brain maintains balance and coordinates muscular activity?",
    options: ["Cerebellum", "Cerebrum", "Hypothalamus", "Medulla oblongata"],
    answer: 0,
    explanation: "The cerebellum coordinates posture, balance and fine motor control."
  }
];

/* -------- aggregated papers -------- */
const PYQ_PAPERS = [2024, 2023, 2022, 2021, 2020, 2019].map((year) => {
  const questions = [...PYQ_2019_2021, ...PYQ_2022_2024].filter((q) => q.year === year);
  const counts = { physics: 0, chemistry: 0, biology: 0 };
  questions.forEach((q) => { counts[q.subject] += 1; });
  return {
    year,
    label: `NEET ${year}`,
    title: `NEET ${year} Previous Year Paper`,
    questions,
    counts,
    marks: questions.length * 4
  };
});

function getPyqPaper(year) {
  return PYQ_PAPERS.find((p) => p.year === Number(year)) || null;
}

function allPyqQuestions() {
  return PYQ_PAPERS.flatMap((p) => p.questions);
}
