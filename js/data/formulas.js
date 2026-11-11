/* Revision material: high-yield formulas, mnemonics and flashcards */

const FORMULAS = {
  physics: [
    { name: "Equations of motion", expr: "v = u + at,  s = ut + ½at²,  v² = u² + 2as" },
    { name: "Projectile range", expr: "R = u² sin2θ / g" },
    { name: "Centripetal force", expr: "F = mv²/r = mω²r" },
    { name: "Moment of inertia (solid sphere)", expr: "I = 2/5 MR²" },
    { name: "Escape velocity", expr: "v_e = √(2gR) ≈ 11.2 km/s" },
    { name: "Work-energy theorem", expr: "W_net = ΔKE" },
    { name: "Bernoulli", expr: "P + ½ρv² + ρgh = constant" },
    { name: "Terminal velocity", expr: "v_t = 2r²(ρ−σ)g / 9η" },
    { name: "Carnot efficiency", expr: "η = 1 − T₂/T₁" },
    { name: "Coulomb's law", expr: "F = kq₁q₂/r², k = 9×10⁹ N·m²/C²" },
    { name: "Capacitor energy", expr: "U = ½CV² = Q²/2C" },
    { name: "Drift velocity", expr: "I = neAv_d" },
    { name: "Force on moving charge", expr: "F = qvB sinθ,  r = mv/qB" },
    { name: "Induced EMF", expr: "ε = −dΦ/dt" },
    { name: "RMS voltage", expr: "V_rms = V_peak/√2" },
    { name: "Lens formula", expr: "1/f = 1/v − 1/u,  m = v/u" },
    { name: "Critical angle", expr: "sin C = 1/μ" },
    { name: "Photoelectric equation", expr: "hν = φ + eV₀" },
    { name: "de Broglie wavelength", expr: "λ = h/p = h/√(2mK)" },
    { name: "Mass–energy", expr: "E = Δm c²" },
    { name: "Half-life (radioactive)", expr: "N = N₀(1/2)^(t/T½)" }
  ],
  chemistry: [
    { name: "Moles", expr: "n = m/M = V(L)/22.4 at STP" },
    { name: "Molarity", expr: "M = moles of solute / V(L) of solution" },
    { name: "Bohr energy", expr: "Eₙ = −13.6 Z²/n² eV" },
    { name: "Rydberg", expr: "1/λ = R(1/n₁² − 1/n₂²)" },
    { name: "Bond order (MOT)", expr: "BO = (N_b − N_a)/2" },
    { name: "Gibbs energy", expr: "ΔG = ΔH − TΔS" },
    { name: "Equilibrium", expr: "K = [products]^x/[reactants]^y" },
    { name: "pH", expr: "pH = −log[H⁺],  pH + pOH = 14" },
    { name: "Henderson–Hasselbalch", expr: "pH = pKa + log([salt]/[acid])" },
    { name: "Nernst equation", expr: "E = E° − (0.059/n) log Q" },
    { name: "Faraday's laws", expr: "m = ZIt,  1 F = 96500 C" },
    { name: "First-order kinetics", expr: "k = (2.303/t) log(a/(a−x))" },
    { name: "Half-life (1st order)", expr: "t½ = 0.693/k" },
    { name: "Arrhenius", expr: "k = A e^(−Ea/RT)" },
    { name: "Osmotic pressure", expr: "π = CRT" },
    { name: "Elevation in b.p.", expr: "ΔT_b = K_b × m" },
    { name: "Depression in f.p.", expr: "ΔT_f = K_f × m" },
    { name: "Crystal density", expr: "d = ZM/(a³N_A)" },
    { name: "Degree of unsaturation", expr: "DoU = (2C + 2 + N − H − X)/2" }
  ],
  biology: [
    { name: "Photosynthesis (net)", expr: "6CO₂ + 12H₂O → C₆H₁₂O₆ + 6O₂ + 6H₂O" },
    { name: "Respiration (aerobic)", expr: "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + 38 ATP" },
    { name: "ATP yield (glucose)", expr: "Glycolysis 2 + Krebs 2 + ETC 34 = 38 ATP" },
    { name: "Monohybrid F2 ratio", expr: "3 : 1 (phenotype), 1 : 2 : 1 (genotype)" },
    { name: "Dihybrid F2 ratio", expr: "9 : 3 : 3 : 1" },
    { name: "Test cross ratio", expr: "1 : 1" },
    { name: "Energy transfer", expr: "10% law (Lindeman)" },
    { name: "Human chromosomes", expr: "46 (23 pairs); gamete = 23" },
    { name: "Normal blood pH", expr: "7.35 – 7.45" },
    { name: "Normal heart rate", expr: "72 beats/min" },
    { name: "DNA base pairing", expr: "A=T (2 H-bonds), G≡C (3 H-bonds)" },
    { name: "Codon count", expr: "64 codons → 61 sense + 3 stop" }
  ]
};

const MNEMONICS = [
  { subject: "biology", title: "Taxonomy hierarchy", text: "King Philip Came Over For Good Soup", detail: "Kingdom → Phylum → Class → Order → Family → Genus → Species" },
  { subject: "biology", title: "Essential amino acids", text: "PVT TIM HALL", detail: "Phenylalanine, Valine, Threonine, Tryptophan, Isoleucine, Methionine, Histidine, Arginine, Leucine, Lysine" },
  { subject: "biology", title: "Cranial nerves (sensory/motor)", text: "Some Say Marry Money But My Brother Says Big Brains Matter More", detail: "S/M/B = Sensory, Motor, Both — for 12 cranial nerves in order" },
  { subject: "biology", title: "Krebs cycle intermediates", text: "Citrate Is Krebs' Starting Substrate For Making Oxaloacetate", detail: "Citrate, Isocitrate, α-Ketoglutarate, Succinyl-CoA, Succinate, Fumarate, Malate, Oxaloacetate" },
  { subject: "chemistry", title: "Activity series (reactivity)", text: "Please Stop Calling Me A Careless Zebra Instead Try Learning How Copper Silver Gold Platinum", detail: "K, Na, Ca, Mg, Al, C, Zn, Fe, Sn, Pb, H, Cu, Ag, Au, Pt" },
  { subject: "chemistry", title: "Electron filling order", text: "1s 2s 2p 3s 3p 4s 3d 4p 5s 4d 5p", detail: "Aufbau order — remember 4s fills before 3d" },
  { subject: "chemistry", title: "Strong acids", text: "So I Brought No Clean Clothes", detail: "H₂SO₄, HI, HBr, HNO₃, HCl, HClO₄" },
  { subject: "chemistry", title: "p-block group names", text: "Boron Family, Carbon Family, Nitrogen Family, Oxygen Family, Halogens, Noble Gases", detail: "Groups 13 → 18 in periods 2–6" },
  { subject: "physics", title: "Electromagnetic spectrum order", text: "Raging Martians Invaded Venus Using X-ray Guns", detail: "Radio, Microwave, Infrared, Visible, UV, X-ray, Gamma (increasing frequency)" },
  { subject: "physics", title: "Resistor colour code", text: "BB ROY of Great Britain has Very Good Wife", detail: "Black, Brown, Red, Orange, Yellow, Green, Blue, Violet, Grey, White" },
  { subject: "physics", title: "SI base units", text: "My Kind Horse Died; Can't Make Any Sense", detail: "Metre, Kilogram, Second, Ampere, Kelvin, Mole, Candela" },
  { subject: "physics", title: "Thermodynamic process signs", text: "Work done BY gas is positive", detail: "W > 0 when gas expands; ΔU = Q − W" }
];

const FLASHCARDS = [
  { subject: "biology", front: "What is the powerhouse of the cell and why?", back: "Mitochondrion — site of oxidative phosphorylation; produces most ATP via the electron transport chain on its inner membrane." },
  { subject: "biology", front: "Which hormone triggers ovulation?", back: "Luteinising hormone (LH) — its surge around day 14 ruptures the mature Graafian follicle." },
  { subject: "biology", front: "State the central dogma of molecular biology.", back: "DNA → RNA → Protein (replication, transcription, translation). Retroviruses reverse it with reverse transcriptase." },
  { subject: "biology", front: "What is the difference between xylem and phloem?", back: "Xylem: dead, unidirectional, transports water + minerals (upward). Phloem: living, bidirectional, transports sucrose + amino acids (source to sink)." },
  { subject: "biology", front: "Define operon.", back: "A cluster of genes transcribed together under one promoter with regulatory sequences, e.g. lac operon in E. coli." },
  { subject: "biology", front: "What is Darwinian fitness?", back: "The relative ability of an organism to survive and reproduce, passing its genes to the next generation." },
  { subject: "biology", front: "Which cells secrete glucagon, and what does it do?", back: "Alpha cells of the islets of Langerhans; raises blood glucose by stimulating glycogenolysis and gluconeogenesis." },
  { subject: "biology", front: "What is a keystone species?", back: "A species whose removal drastically changes the ecosystem structure disproportionate to its abundance (e.g. sea otter, fig trees)." },
  { subject: "chemistry", front: "State Le Chatelier's principle.", back: "If a system at equilibrium is disturbed, it shifts in the direction that counteracts the disturbance (concentration, pressure, temperature)." },
  { subject: "chemistry", front: "Why is HF the weakest halogen acid?", back: "Very high H–F bond enthalpy plus strong hydrogen bonding in solution; bond dissociation dominates over solvation." },
  { subject: "chemistry", front: "What is Markownikoff's rule?", back: "In electrophilic addition of HX to an alkene, H adds to the carbon having more hydrogens (the more stable carbocation forms)." },
  { subject: "chemistry", front: "Define enantiomers.", back: "Non-superimposable mirror images with identical physical properties in achiral media, opposite optical rotation." },
  { subject: "chemistry", front: "What does the Nernst equation describe?", back: "Cell potential as it depends on concentration: E = E° − (0.059/n) log Q." },
  { subject: "chemistry", front: "Which complex is more stable, high spin or low spin, and why?", back: "Low spin, when Δ₀ > pairing energy — strong-field ligands produce large crystal-field splitting and greater CFSE." },
  { subject: "physics", front: "Define self-inductance.", back: "The property of a coil by which an induced EMF is set up opposing the change in current: ε = −L dI/dt; L = Φ/I." },
  { subject: "physics", front: "State the photoelectric effect.", back: "Emission of electrons from a metal surface when light of frequency above threshold ν₀ strikes it; KE_max = hν − φ, independent of intensity." },
  { subject: "physics", front: "What is a step-down transformer?", back: "A transformer with N_secondary < N_primary that lowers voltage and increases current, conserving power (ideal case)." },
  { subject: "physics", front: "What is the significance of Lenz's law?", back: "Induced current flows in a direction that opposes the flux change, ensuring energy conservation." },
  { subject: "physics", front: "State the work-energy theorem.", back: "The net work done on a body equals its change in kinetic energy: W_net = ΔKE." },
  { subject: "physics", front: "What is meant by resonance in an AC circuit?", back: "When ωL = 1/(ωC), X_L and X_C cancel, impedance is minimum (= R), current is maximum at f = 1/(2π√LC)." }
];

const REVISION_TIPS = [
  { title: "Attempt the full 180-question paper", body: "NEET is a stamina test. Two full-length papers a week in your last 3 months builds pacing for 200 minutes." },
  { title: "NCERT is the source of truth for Biology", body: "~85% of Biology questions map directly to NCERT lines, figures and tables. Read the book itself, not only notes." },
  { title: "Physics: numericals over theory", body: "Keep a formula sheet and solve 30 numericals daily; NEET Physics rewards speed with standard formulas." },
  { title: "Don't skip the low-yield-looking chapters", body: "Semiconductor Electronics, Electromagnetic Waves and Units & Measurement together contribute 6+ questions every year." },
  { title: "Log every mistake", body: "Use the Mistakes tab: revisiting wrong answers is worth more than solving new questions. Re-attempt wrong questions after 7 days." },
  { title: "Prepare a 3-hour revision register", body: "A last-week binder of one-page summaries per chapter beats re-reading the entire textbook." }
];
