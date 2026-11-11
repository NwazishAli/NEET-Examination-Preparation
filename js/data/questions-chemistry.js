const QUESTIONS_CHEMISTRY = [
  { id: "ch1", subject: "chemistry", chapter: "c-basic", difficulty: "easy",
    q: "The number of atoms present in 1 mole of CO₂ is:",
    options: ["1.806 × 10²⁴", "6.022 × 10²³", "3.011 × 10²³", "1.204 × 10²⁴"], answer: 0,
    explanation: "Each CO₂ has 3 atoms, so 3 × 6.022 × 10²³ = 1.806 × 10²⁴ atoms." },

  { id: "ch2", subject: "chemistry", chapter: "c-basic", difficulty: "easy",
    q: "Molarity is defined as the number of moles of solute per:",
    options: ["Litre of solution", "Kilogram of solvent", "Litre of solvent", "Kilogram of solution"], answer: 0,
    explanation: "Molarity (M) = moles of solute / volume of solution in litres." },

  { id: "ch3", subject: "chemistry", chapter: "c-atom", difficulty: "easy",
    q: "The maximum number of electrons that the n = 3 shell can hold is:",
    options: ["18", "8", "32", "10"], answer: 0,
    explanation: "Maximum electrons = 2n² = 2 × 9 = 18." },

  { id: "ch4", subject: "chemistry", chapter: "c-atom", difficulty: "medium",
    q: "An orbital with n = 2 and l = 1 is designated as:",
    options: ["2p", "2s", "3p", "2d"], answer: 0,
    explanation: "l = 1 corresponds to a p orbital; n = 2 makes it 2p." },

  { id: "ch5", subject: "chemistry", chapter: "c-atom", difficulty: "medium",
    q: "Heisenberg's uncertainty principle states that:",
    options: ["Position and momentum cannot both be known exactly", "Energy is always conserved", "Electrons move in fixed orbits", "Mass and energy are equivalent"], answer: 0,
    explanation: "Δx·Δp ≥ h/4π; exact simultaneous knowledge of position and momentum is impossible." },

  { id: "ch6", subject: "chemistry", chapter: "c-periodic", difficulty: "easy",
    q: "Across a period from left to right, atomic radius generally:",
    options: ["Decreases", "Increases", "Remains constant", "First increases then decreases"], answer: 0,
    explanation: "Nuclear charge increases while electrons enter the same shell, so the radius contracts." },

  { id: "ch7", subject: "chemistry", chapter: "c-periodic", difficulty: "easy",
    q: "The most electronegative element is:",
    options: ["Fluorine", "Oxygen", "Chlorine", "Nitrogen"], answer: 0,
    explanation: "Fluorine has an electronegativity of about 4.0 on the Pauling scale." },

  { id: "ch8", subject: "chemistry", chapter: "c-bonding", difficulty: "easy",
    q: "The hybridisation of carbon in CH₄ is:",
    options: ["sp³", "sp²", "sp", "sp³d"], answer: 0,
    explanation: "Four sigma bonds ⇒ sp³ hybridisation with tetrahedral geometry (109.5°)." },

  { id: "ch9", subject: "chemistry", chapter: "c-bonding", difficulty: "medium",
    q: "According to molecular orbital theory, the bond order of O₂ is:",
    options: ["2", "1", "3", "2.5"], answer: 0,
    explanation: "O₂ has 8 bonding and 4 antibonding electrons ⇒ bond order = (8 − 4)/2 = 2." },

  { id: "ch10", subject: "chemistry", chapter: "c-bonding", difficulty: "medium",
    q: "CO₂ is non-polar even though C=O bonds are polar because:",
    options: ["It has a linear symmetrical shape", "The bonds are ionic", "Carbon is sp³ hybridised", "It has a bent shape"], answer: 0,
    explanation: "The two equal dipoles point in opposite directions and cancel in the linear molecule." },

  { id: "ch11", subject: "chemistry", chapter: "c-states", difficulty: "easy",
    q: "A reaction with negative ΔH is:",
    options: ["Exothermic", "Endothermic", "Isothermal", "Adiabatic"], answer: 0,
    explanation: "Heat is released to the surroundings, so the enthalpy change is negative." },

  { id: "ch12", subject: "chemistry", chapter: "c-states", difficulty: "easy",
    q: "Entropy increases in the order:",
    options: ["Solid < Liquid < Gas", "Gas < Liquid < Solid", "Liquid < Solid < Gas", "Solid < Gas < Liquid"], answer: 0,
    explanation: "Greater molecular freedom means greater entropy, so gases have the highest entropy." },

  { id: "ch13", subject: "chemistry", chapter: "c-equilibrium", difficulty: "easy",
    q: "The pH of a 0.01 M HCl solution is:",
    options: ["2", "1", "12", "7"], answer: 0,
    explanation: "pH = −log(10⁻²) = 2." },

  { id: "ch14", subject: "chemistry", chapter: "c-equilibrium", difficulty: "medium",
    q: "For N₂ + 3H₂ ⇌ 2NH₃, increasing pressure shifts the equilibrium:",
    options: ["Forward, towards fewer moles", "Backward", "No change", "Forward with no mole change"], answer: 0,
    explanation: "Le Chatelier: high pressure favours the side with fewer gaseous moles (4 → 2), i.e. ammonia." },

  { id: "ch15", subject: "chemistry", chapter: "c-equilibrium", difficulty: "medium",
    q: "An acidic buffer is best prepared from:",
    options: ["Weak acid + its salt with a strong base", "Strong acid + strong base", "Weak base + its salt", "Two strong acids"], answer: 0,
    explanation: "A weak acid with its conjugate base salt (e.g. CH₃COOH + CH₃COONa) resists pH change." },

  { id: "ch16", subject: "chemistry", chapter: "c-redox", difficulty: "easy",
    q: "The oxidation state of Mn in KMnO₄ is:",
    options: ["+7", "+4", "+2", "+6"], answer: 0,
    explanation: "+1 + x + 4(−2) = 0 ⇒ x = +7." },

  { id: "ch17", subject: "chemistry", chapter: "c-redox", difficulty: "easy",
    q: "In a redox reaction, the oxidising agent:",
    options: ["Gains electrons and is reduced", "Loses electrons and is oxidised", "Neither gains nor loses electrons", "Always contains oxygen"], answer: 0,
    explanation: "The oxidising agent accepts electrons and gets reduced in the process." },

  { id: "ch18", subject: "chemistry", chapter: "c-hydrogen", difficulty: "medium",
    q: "H₂O₂ can act as:",
    options: ["Both an oxidising and a reducing agent", "Only an oxidising agent", "Only a reducing agent", "Neither"], answer: 0,
    explanation: "Oxygen is in the −1 state, so it can be oxidised to O₂ or reduced to H₂O." },

  { id: "ch19", subject: "chemistry", chapter: "c-hydrogen", difficulty: "easy",
    q: "Among the alkali metals, the least reactive is:",
    options: ["Lithium", "Sodium", "Potassium", "Caesium"], answer: 0,
    explanation: "Lithium has the highest ionisation enthalpy, so it is the least reactive alkali metal." },

  { id: "ch20", subject: "chemistry", chapter: "c-pblock", difficulty: "medium",
    q: "Which allotrope of carbon conducts electricity?",
    options: ["Graphite", "Diamond", "Fullerene (C₆₀)", "None of these"], answer: 0,
    explanation: "Graphite has delocalised π electrons between layers, allowing conduction." },

  { id: "ch21", subject: "chemistry", chapter: "c-organic-basic", difficulty: "easy",
    q: "The number of sigma bonds in ethane (C₂H₆) is:",
    options: ["7", "6", "5", "8"], answer: 0,
    explanation: "1 C–C bond + 6 C–H bonds = 7 sigma bonds." },

  { id: "ch22", subject: "chemistry", chapter: "c-organic-basic", difficulty: "medium",
    q: "The correct order of stability of carbocations is:",
    options: ["3° > 2° > 1° > CH₃⁺", "CH₃⁺ > 1° > 2° > 3°", "1° > 2° > 3°", "2° > 3° > 1°"], answer: 0,
    explanation: "More alkyl groups give greater hyperconjugation and inductive stabilisation." },

  { id: "ch23", subject: "chemistry", chapter: "c-hydrocarbons", difficulty: "medium",
    q: "Addition of HBr to propene follows Markovnikov's rule and gives mainly:",
    options: ["2-bromopropane", "1-bromopropane", "1,2-dibromopropane", "Propan-2-ol"], answer: 0,
    explanation: "H adds to the carbon with more hydrogens; Br goes to the more substituted carbon." },

  { id: "ch24", subject: "chemistry", chapter: "c-hydrocarbons", difficulty: "medium",
    q: "Benzene is aromatic because it has:",
    options: ["6 delocalised π electrons in a planar ring", "3 localised double bonds", "sp³ carbons", "12 π electrons"], answer: 0,
    explanation: "Planarity plus 4n+2 = 6 π electrons satisfies Hückel's rule." },

  { id: "ch25", subject: "chemistry", chapter: "c-solid-state", difficulty: "medium",
    q: "The number of atoms per unit cell in a face-centred cubic lattice is:",
    options: ["4", "2", "1", "8"], answer: 0,
    explanation: "8 corners × 1/8 + 6 faces × 1/2 = 1 + 3 = 4." },

  { id: "ch26", subject: "chemistry", chapter: "c-solid-state", difficulty: "medium",
    q: "Osmotic pressure of a solution is given by:",
    options: ["π = CRT", "π = RT/C", "π = C/RT", "π = CRT²"], answer: 0,
    explanation: "van't Hoff equation: π = CRT, where C is molar concentration." },

  { id: "ch27", subject: "chemistry", chapter: "c-electrochem", difficulty: "medium",
    q: "One Faraday of charge is approximately:",
    options: ["96500 C", "9650 C", "1 C", "6.022 × 10²³ C"], answer: 0,
    explanation: "1 F = 96500 C, the charge on one mole of electrons." },

  { id: "ch28", subject: "chemistry", chapter: "c-electrochem", difficulty: "hard",
    q: "For the cell Zn | Zn²⁺ || Cu²⁺ | Cu, the standard EMF is 1.10 V. As the cell discharges:",
    options: ["E decreases as reactants are consumed", "E stays constant at 1.10 V", "E increases", "The cell potential becomes zero immediately"], answer: 0,
    explanation: "Nernst equation: as Zn²⁺ rises and Cu²⁺ falls, the term −(0.059/2)log(Q) lowers E." },

  { id: "ch29", subject: "chemistry", chapter: "c-kinetics", difficulty: "medium",
    q: "For a first-order reaction, the half-life is:",
    options: ["Independent of initial concentration", "Proportional to concentration", "Inversely proportional to concentration", "Proportional to concentration squared"], answer: 0,
    explanation: "t½ = 0.693/k for a first-order reaction, so it does not depend on initial concentration." },

  { id: "ch30", subject: "chemistry", chapter: "c-kinetics", difficulty: "medium",
    q: "The unit of the rate constant for a second-order reaction is:",
    options: ["mol⁻¹ L s⁻¹", "s⁻¹", "mol L⁻¹ s⁻¹", "L² mol⁻² s⁻¹"], answer: 0,
    explanation: "Rate = k[A]² ⇒ k has units mol⁻¹ L s⁻¹." },

  { id: "ch31", subject: "chemistry", chapter: "c-dblock", difficulty: "medium",
    q: "The coordination number of cobalt in [Co(NH₃)₆]³⁺ is:",
    options: ["6", "3", "4", "2"], answer: 0,
    explanation: "Six ammonia ligands are directly bonded to Co, giving an octahedral complex." },

  { id: "ch32", subject: "chemistry", chapter: "c-dblock", difficulty: "medium",
    q: "KMnO₄ is intensely purple mainly because of:",
    options: ["Ligand-to-metal charge transfer", "d–d transitions of Mn(VII)", "Its ionic lattice", "Presence of water of crystallisation"], answer: 0,
    explanation: "Mn(VII) is d⁰, so the colour arises from O→Mn charge transfer, not d–d transitions." },

  { id: "ch33", subject: "chemistry", chapter: "c-haloalkanes", difficulty: "medium",
    q: "Which substrate reacts fastest by an SN1 mechanism?",
    options: ["Tertiary alkyl halide", "Primary alkyl halide", "Methyl halide", "Vinyl halide"], answer: 0,
    explanation: "SN1 proceeds through a carbocation; tertiary carbocations are the most stable." },

  { id: "ch34", subject: "chemistry", chapter: "c-carbonyl", difficulty: "easy",
    q: "Tollens' reagent gives a silver mirror with:",
    options: ["Aldehydes", "Ketones", "Alcohols", "Carboxylic acids"], answer: 0,
    explanation: "Aldehydes reduce [Ag(NH₃)₂]⁺ to metallic silver; ketones do not react." },

  { id: "ch35", subject: "chemistry", chapter: "c-amines", difficulty: "medium",
    q: "Aniline is less basic than ethylamine mainly because:",
    options: ["The nitrogen lone pair is delocalised into the benzene ring", "It is aromatic", "It has a higher molecular mass", "It forms hydrogen bonds"], answer: 0,
    explanation: "Resonance delocalisation of the lone pair over the ring reduces its availability for protonation." },

  { id: "ch36", subject: "chemistry", chapter: "c-biomolecules", difficulty: "easy",
    q: "The bond joining two amino acids in a protein is a:",
    options: ["Peptide bond", "Glycosidic bond", "Ester bond", "Phosphodiester bond"], answer: 0,
    explanation: "The C–N amide linkage formed with loss of water is called a peptide bond." }
];
