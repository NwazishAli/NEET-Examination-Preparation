/* ===== Chapter study notes: Chemistry ===== */

const NOTES_CHEMISTRY = {
  "c-basic": {
    concepts: [
      "The mole is the bridge between the atomic scale and the lab: 1 mol = 6.022 × 10²³ particles and, for a gas, 22.4 L at STP.",
      "Empirical formula gives the simplest ratio; molecular formula is a whole-number multiple of it, found from the molar mass.",
      "Stoichiometry uses the balanced equation's coefficients as mole ratios; the limiting reagent decides the maximum product.",
      "Molarity (moles per litre of solution) changes with temperature; molality (moles per kg of solvent) does not."
    ],
    formula: "n = m/M = V(L)/22.4 at STP; M = n/V(L); molality = n_solute/kg_solvent; %w/w = (mass solute/mass solution) × 100",
    trick: "Before any stoichiometry, balance the equation and convert every given quantity to moles. Percentages of elements in a compound convert directly to a mole ratio.",
    mistakes: [
      "Using 22.4 L for a gas not at STP — use PV = nRT instead.",
      "Confusing molarity with molality; the denominators differ (solution volume vs solvent mass).",
      "Forgetting the limiting reagent and computing product from the excess reactant."
    ],
    examples: [
      { q: "Number of atoms in 1 mole of CO₂?", a: "3 atoms per molecule × 6.022×10²³ = 1.807 × 10²⁴ atoms." },
      { q: "Molarity of 4 g NaOH in 500 mL (M = 40)?", a: "n = 0.1 mol; M = 0.1/0.5 = 0.2 M." }
    ]
  },

  "c-atom": {
    concepts: [
      "Bohr's model quantises angular momentum (mvr = nh/2π) and explains discrete hydrogen lines with E_n = −13.6Z²/n² eV.",
      "Quantum numbers: n (shell), l (subshell shape), m_l (orientation) and m_s (spin). No two electrons share all four.",
      "Aufbau principle, Hund's rule and the Pauli exclusion principle together build the electronic configuration.",
      "Heisenberg's uncertainty principle rules out fixed orbits; orbitals are probability clouds with radial nodes."
    ],
    formula: "E_n = −13.6Z²/n² eV; 1/λ = R(1/n₁² − 1/n₂²); max electrons = 2n²; number of orbitals = n²",
    trick: "Find the shell from n², then distribute using l values. A 'd' subshell holds 10 electrons because it has 5 orbitals.",
    mistakes: [
      "Writing 4s after 3d; 4s fills before 3d but empties first when a cation forms.",
      "Using n² to count electrons instead of 2n².",
      "Assuming uncertainty arises from poor instruments — it is a fundamental property, not a measurement limitation."
    ],
    examples: [
      { q: "Maximum electrons in the n = 3 shell?", a: "2n² = 18." },
      { q: "An orbital with n = 2, l = 1 is:", a: "2p — l = 1 designates p, and n = 2 fixes the shell." }
    ]
  },

  "c-periodic": {
    concepts: [
      "Modern periodic law arranges elements by atomic number; the long form reflects the filling of s, p, d and f blocks.",
      "Atomic radius decreases across a period (rising nuclear charge) and increases down a group (new shells).",
      "Ionisation enthalpy and electronegativity rise across a period and fall down a group; electron gain enthalpy falls.",
      "Anomalies: Mg > Al, and N > O in ionisation enthalpy due to half-filled or fully filled stability."
    ],
    formula: "Effective nuclear charge Z_eff = Z − σ (Slater's rules); IE₁ < IE₂ < IE₃; radius of cation < neutral atom < anion",
    trick: "Across a period atomic radius shrinks, so everything that depends on the nucleus's hold (IE, EN) rises — memorise that single direction and the anomalies.",
    mistakes: [
      "Assuming ionisation enthalpy always rises monotonically across a period — nitrogen's half-filled 2p³ is anomalously high.",
      "Forgetting that the cation is smaller than the neutral atom but the anion is larger.",
      "Using atomic radius alone to predict metallic character; it actually falls as radius decreases."
    ],
    examples: [
      { q: "Most electronegative element?", a: "Fluorine (≈4.0 on the Pauling scale)." },
      { q: "Which is smallest: Na, Mg, Al, Si?", a: "Si — radius decreases across the period." }
    ]
  },

  "c-bonding": {
    concepts: [
      "Covalent bonds form by orbital overlap; σ bonds are head-on and stronger, π bonds are side-on and weaker.",
      "VSEPR predicts shape from electron pairs: lone pairs repel more, compressing bond angles (CH₄ 109.5° → NH₃ 107° → H₂O 104.5°).",
      "Molecular orbital theory explains paramagnetism (O₂ has unpaired electrons) and bond order = (bonding − antibonding)/2.",
      "Bond polarity comes from electronegativity difference; polarity of the whole molecule depends on geometry (CO₂ is non-polar despite polar bonds)."
    ],
    formula: "Bond order = (N_b − N_a)/2; formal charge = V − L − ½B; % ionic character ≈ ΔEN-based; H-bond energy ≈ 20–40 kJ/mol",
    trick: "First count electron pairs on the central atom. 4 pairs = tetrahedral, 3 = trigonal, 2 = linear — then subtract angle for each lone pair.",
    mistakes: [
      "Assuming any molecule with polar bonds is polar overall — symmetry can cancel the dipoles.",
      "Thinking O₂ is diamagnetic because of its even electron count; MO theory shows two unpaired electrons.",
      "Forgetting that bond order correlates with bond length and strength."
    ],
    examples: [
      { q: "Bond order of O₂?", a: "8 bonding − 4 antibonding electrons ⇒ (8−4)/2 = 2." },
      { q: "Hybridisation of carbon in CH₄?", a: "Four σ bonds ⇒ sp³, tetrahedral with 109.5° angles." }
    ]
  },

  "c-states": {
    concepts: [
      "The ideal gas law PV = nRT combines Boyle's, Charles's and Avogadro's laws; deviations appear at high pressure and low temperature for real gases.",
      "van der Waals equation corrects for molecular volume (b) and intermolecular attraction (a).",
      "The first law: ΔU = q + w. Enthalpy H = U + PV makes heat measurements at constant pressure simple.",
      "Hess's law, bond enthalpies and formation enthalpies all let you compute ΔH for a reaction indirectly."
    ],
    formula: "PV = nRT; (P + an²/V²)(V − nb) = nRT; ΔH = ΔU + ΔnRT; ΔG = ΔH − TΔS",
    trick: "For a cycle of reactions, add the ΔH values of the steps — Hess's law lets you use tabulated formation enthalpies instead of the actual route.",
    mistakes: [
      "Using ΔH = ΔU when molecules are created or destroyed; add ΔnRT for the volume change.",
      "Thinking spontaneous reactions must be exothermic — entropy can drive an endothermic reaction at high temperature.",
      "Forgetting that bond breaking always requires energy while bond formation releases it."
    ],
    examples: [
      { q: "A reaction has ΔH = −100 kJ, ΔS = +200 J/K. Is it spontaneous at 400 K?", a: "ΔG = −100 − 400(0.2) = −180 kJ ⇒ spontaneous." },
      { q: "Entropy order for a substance:", a: "Solid < liquid < gas, because molecular freedom increases." }
    ]
  },

  "c-equilibrium": {
    concepts: [
      "Equilibrium is dynamic: forward and reverse rates are equal, and concentrations stop changing.",
      "K_p and K_c are related by K_p = K_c(RT)^Δn; the reaction quotient compared with K predicts direction.",
      "Le Chatelier's principle: a system responds to a disturbance by opposing it — pressure favours the side with fewer gaseous moles, heat the endothermic direction.",
      "Ionic equilibrium: weak acids dissociate partially, buffers resist pH change, and K_sp controls precipitation."
    ],
    formula: "pH = −log[H⁺]; pH + pOH = 14; K_a × K_b = K_w; Henderson: pH = pK_a + log([salt]/[acid]); K_sp for AB = s²",
    trick: "For buffer questions, write the Henderson–Hasselbalch equation first — it converts the problem into finding the ratio of salt to acid.",
    mistakes: [
      "Adding a catalyst expecting a shift in equilibrium — it changes only the rate, not the position of equilibrium.",
      "Ignoring pure solids and liquids in the equilibrium constant expression; only gases and aqueous species appear.",
      "Using pH = 7 as neutral at all temperatures — kw changes with temperature, so neutral shifts."
    ],
    examples: [
      { q: "pH of 0.01 M HCl?", a: "pH = −log(10⁻²) = 2." },
      { q: "In N₂ + 3H₂ ⇌ 2NH₃, which way does increased pressure shift equilibrium?", a: "Forward — towards fewer gaseous moles (4 → 2), producing more ammonia." }
    ]
  },

  "c-redox": {
    concepts: [
      "Oxidation is loss of electrons (increase in oxidation number); reduction is gain. Both always occur together.",
      "The oxidising agent accepts electrons and is itself reduced; the reducing agent donates electrons and is oxidised.",
      "Balance complex redox reactions with the ion-electron method: balance atoms, then oxygen with water, hydrogen with H⁺, and charge with electrons.",
      "Disproportionation occurs when the same species is simultaneously oxidised and reduced, as with H₂O₂."
    ],
    formula: "Oxidation number sum = overall charge; in a neutral molecule the sum is zero; equivalent mass = M/n-factor",
    trick: "Assign oxidation numbers from the most electronegative atom first (usually O = −2, H = +1) and let the total equal the species' charge.",
    mistakes: [
      "Thinking the oxidising agent is the one being oxidised — it is reduced.",
      "Forgetting that oxidation number uses a rule-based bookkeeping, not actual ionic charge in covalent compounds.",
      "Missing disproportionation, where one reactant plays both roles."
    ],
    examples: [
      { q: "Oxidation state of Mn in KMnO₄?", a: "+1 + x − 8 = 0 ⇒ x = +7." },
      { q: "Oxidation state of Cr in K₂Cr₂O₇?", a: "2 + 2x − 14 = 0 ⇒ x = +6." }
    ]
  },

  "c-hydrogen": {
    concepts: [
      "Hydrogen shows three isotopes (protium, deuterium, tritium) and forms ionic hydrides with alkali metals, covalent hydrides with non-metals and interstitial hydrides with transition metals.",
      "H₂O₂ is a versatile oxidising and reducing agent because oxygen is in the −1 state.",
      "Alkali metals are soft and highly reactive; reactivity increases down the group as ionisation enthalpy falls.",
      "Diagonal relationships exist (Li–Mg, Be–Al) due to comparable charge/radius ratios."
    ],
    formula: "2H₂O₂ → 2H₂O + O₂ (disproportionation); Li + H₂O → LiOH + ½H₂; normality of H₂O₂ relates to its volume strength",
    trick: "For 'volume strength' questions on H₂O₂: 5.6 volume = 1 N = 1.7% w/v. Learn this single line and most questions follow.",
    mistakes: [
      "Thinking hydrogen is a group 1 member for every purpose; it differs in ionisation energy and bonding because it is a non-metal.",
      "Assuming the least reactive alkali metal is francium — radium's reactivity is offset by relativistic effects, but caesium is the classic answer.",
      "Forgetting that lithium is the least reactive alkali metal despite being at the top."
    ],
    examples: [
      { q: "Least reactive alkali metal?", a: "Lithium — the highest ionisation enthalpy of the group." },
      { q: "H₂O₂ acts as:", a: "Both oxidising and reducing agent, since oxygen is in the −1 oxidation state." }
    ]
  },

  "c-pblock": {
    concepts: [
      "Group 13 shows increasing metallic character down the group; boron is a non-metal and aluminium a metal.",
      "Group 14: carbon is a non-metal, silicon a metalloid, and tin and lead are metals.",
      "Inert pair effect makes Pb²⁺ and Bi³⁺ more stable than their higher oxidation states.",
      "Allotropes matter: graphite conducts because of delocalised π electrons between layers, while diamond does not."
    ],
    formula: "B₂H₆ diborane has two 3-centre–2-electron bonds; Si + 2NaOH + H₂O → Na₂SiO₃ + 2H₂; CO₂ is acidic, SiO₂ is not",
    trick: "For Group 14 oxides, remember the trend: acidity decreases down the group, so CO₂ > SiO₂ > SnO₂ > PbO₂ in acidic character.",
    mistakes: [
      "Assuming SiO₂ behaves like CO₂ — SiO₂ is a giant covalent solid and does not react with water.",
      "Forgetting that graphite conducts along layers but not across them.",
      "Overlooking the inert pair effect when predicting the stability of Pb²⁺ over Pb⁴⁺."
    ],
    examples: [
      { q: "Which allotrope of carbon conducts electricity?", a: "Graphite, because of delocalised π electrons between its layers." },
      { q: "Why is Pb²⁺ more stable than Pb⁴⁺?", a: "Inert pair effect: the 6s² electrons are tightly held and reluctant to participate." }
    ]
  },

  "c-organic-basic": {
    concepts: [
      "IUPAC naming: longest chain, lowest locants, principal functional group suffix, then prefixes in alphabetical order.",
      "Inductive, resonance and hyperconjugation effects explain acidity, basicity and carbocation stability.",
      "Carbocation stability follows 3° > 2° > 1° > CH₃⁺ because alkyl groups stabilise the positive centre.",
      "Stereochemistry: chiral centres give enantiomers (non-superimposable mirror images); cis–trans arises when rotation is restricted."
    ],
    formula: "Degree of unsaturation = (2C + 2 + N − H − X)/2; number of stereoisomers = 2ⁿ (n chiral centres)",
    trick: "To name a compound, identify the principal functional group first — it dictates the suffix and the numbering direction.",
    mistakes: [
      "Numbering from the wrong end so the principal group gets a higher locant.",
      "Assuming every molecule with two chiral centres has four stereoisomers — a meso compound reduces the count.",
      "Confusing aromaticity (Hückel 4n+2 planar) with simple conjugation."
    ],
    examples: [
      { q: "Degree of unsaturation of C₆H₆?", a: "(12 + 2 − 6)/2 = 4 — three π bonds and one ring." },
      { q: "Order of carbocation stability?", a: "3° > 2° > 1° > CH₃⁺, due to hyperconjugation and inductive donation." }
    ]
  },

  "c-hydrocarbons": {
    concepts: [
      "Alkanes undergo free-radical substitution; free radicals form in the order Cl· > Br· > I· by ease of homolysis.",
      "Alkenes and alkynes undergo electrophilic addition following Markovnikov's rule: H adds to the carbon with more hydrogens.",
      "Benzene is aromatic with 6 delocalised π electrons, favouring substitution over addition to preserve aromaticity.",
      "Peroxide effect (Kharasch) reverses the regiochemistry of HBr addition, giving anti-Markovnikov products."
    ],
    formula: "CnH2n+2 alkane; CnH2n alkene; CnH2n−2 alkyne; Markovnikov: H → C with more H; anti-Markovnikov with peroxide",
    trick: "For 'major product' addition questions, identify the more stable carbocation intermediate — the major product always comes from it.",
    mistakes: [
      "Applying Markovnikov's rule to HBr in the presence of peroxide — the peroxide effect reverses it.",
      "Expecting benzene to decolourise bromine water. It does not; it needs a Lewis acid catalyst.",
      "Assuming all alkynes give the same addition product; each addition step changes the regiochemistry."
    ],
    examples: [
      { q: "Major product of HBr + propene?", a: "2-bromopropane — Br to the more substituted carbon." },
      { q: "Why is benzene unusually stable?", a: "Six delocalised π electrons in a planar ring give aromatic stabilisation (Hückel 4n+2)." }
    ]
  },

  "c-solid-state": {
    concepts: [
      "Unit cells: simple cubic (1 atom), body-centred (2 atoms) and face-centred (4 atoms) per cell.",
      "Packing efficiency: simple cubic 52%, bcc 68% and fcc 74%; fcc gives the closest packing.",
      "Density of a crystal d = ZM/a³N_A relates the molar mass, cell edge and number of atoms per cell.",
      "Solutions: Raoult's law, colligative properties (vapour pressure, boiling point, freezing point, osmotic pressure) depend on particle count, not identity."
    ],
    formula: "d = ZM/a³N_A; ΔT_b = K_b·m; ΔT_f = K_f·m; π = CRT; P_solution = X_solvent·P°",
    trick: "For colligative properties, always convert to the effective number of particles — a dissociating salt multiplies the effect by its van't Hoff factor.",
    mistakes: [
      "Forgetting the van't Hoff factor i for electrolytes, which makes ΔT larger than the naive calculation.",
      "Confusing molality (per kg solvent) with molarity (per litre solution) in colligative formulas.",
      "Mixing up bcc and fcc atom counts — bcc is 2, fcc is 4."
    ],
    examples: [
      { q: "Atoms per unit cell in fcc?", a: "8 corners × 1/8 + 6 faces × 1/2 = 1 + 3 = 4." },
      { q: "Osmotic pressure formula?", a: "π = CRT, which at fixed concentration rises with temperature." }
    ]
  },

  "c-electrochem": {
    concepts: [
      "Electrochemical cells convert chemical energy to electrical energy (galvanic) or the reverse (electrolytic).",
      "Cell EMF = E°_cathode − E°_anode; oxidation always occurs at the anode, reduction at the cathode.",
      "The Nernst equation adjusts cell potential for non-standard concentrations: E = E° − (0.059/n) log Q.",
      "Faraday's laws relate charge passed to mass deposited: 1 F = 96500 C liberates one equivalent."
    ],
    formula: "E_cell = E° − (0.059/n)log Q; ΔG° = −nFE°; m = ZIt = (M/nF)It; 1 F = 96500 C",
    trick: "In Nernst problems, compute Q from the balanced equation's exponents first; the log term often becomes a simple integer.",
    mistakes: [
      "Reversing anode and cathode in a cell diagram; notation is anode | anode solution || cathode solution | cathode.",
      "Using E° values as absolute potentials — they are always relative to the standard hydrogen electrode.",
      "Forgetting that ΔG° = −nFE° links spontaneity to a positive cell potential."
    ],
    examples: [
      { q: "Charge on one mole of electrons?", a: "1 Faraday ≈ 96500 C." },
      { q: "For Zn|Zn²⁺||Cu²⁺|Cu with E° = 1.10 V, which is the anode?", a: "Zinc — it is oxidised, so it is the anode." }
    ]
  },

  "c-kinetics": {
    concepts: [
      "Rate depends on concentration through the rate law, with the order determined experimentally, not from the balanced equation.",
      "First-order reactions have a constant half-life (t½ = 0.693/k) and a logarithmic concentration–time relation.",
      "Rate constant rises with temperature following the Arrhenius equation; a catalyst lowers the required activation energy.",
      "Collision theory requires both sufficient energy and correct orientation for a reaction to occur."
    ],
    formula: "k = (2.303/t)log(a/(a−x)); t½ = 0.693/k (first order); k = Ae^(−Ea/RT); log(k₂/k₁) = (Ea/2.303R)(1/T₁ − 1/T₂)",
    trick: "If a question gives half-life and asks for concentration after time t, count the number of half-lives instead of using logarithms.",
    mistakes: [
      "Reading the order from the balanced equation's coefficients — that works only for elementary reactions.",
      "Assuming all first-order reactions have the same k; it is reaction-specific and temperature dependent.",
      "Thinking a catalyst changes the equilibrium constant — it only speeds up the approach to equilibrium."
    ],
    examples: [
      { q: "Half-life of a first-order reaction with k = 0.693 s⁻¹?", a: "t½ = 0.693/0.693 = 1 s." },
      { q: "Unit of k for a second-order reaction?", a: "mol⁻¹ L s⁻¹." }
    ]
  },

  "c-dblock": {
    concepts: [
      "Transition metals have partially filled d orbitals, giving variable oxidation states, colour and catalytic activity.",
      "Crystal field theory splits d orbitals into t₂g and e_g; the size of Δ₀ decides high-spin or low-spin configurations.",
      "Coordination number, geometry and isomerism (geometrical and optical) describe complexes.",
      "Lanthanoid contraction explains the similar chemistry of the second and third transition series."
    ],
    formula: "CFSE = (−0.4n_t2g + 0.6n_eg)Δ₀; magnetic moment μ = √(n(n+2)) BM; EAN = Z − oxidation state + 2×CN",
    trick: "Count unpaired electrons from the d configuration first, then compute the magnetic moment with √(n(n+2)) — most numericals on complexes need only this.",
    mistakes: [
      "Assuming strong-field ligands always give low spin for 3d metals; the pairing energy matters for the first series.",
      "Forgetting that d⁰ and d¹⁰ ions are colourless (no d–d transition) — KMnO₄'s colour is charge transfer.",
      "Confusing coordination number with oxidation state; they are independent."
    ],
    examples: [
      { q: "Unpaired electrons in Fe³⁺ (Z = 26)?", a: "Fe³⁺ is 3d⁵ ⇒ five unpaired electrons." },
      { q: "Magnetic moment of a complex with 3 unpaired electrons?", a: "μ = √(3×5) = √15 ≈ 3.87 BM." }
    ]
  },

  "c-haloalkanes": {
    concepts: [
      "Alkyl halides undergo SN1 (carbocation intermediate, unimolecular) and SN2 (backside attack, bimolecular, inversion of configuration).",
      "SN1 is favoured by tertiary carbons and polar protic solvents; SN2 by primary carbons and polar aprotic solvents.",
      "Elimination competes with substitution: strong bulky bases and heat favour E2, giving alkenes.",
      "Alcohols and ethers: alcohols can be oxidised, dehydrated and esterified; ethers are relatively unreactive and cleaved by HI."
    ],
    formula: "Rate_SN1 = k[RX]; Rate_SN2 = k[RX][Nu⁻]; Saytzeff rule: more substituted alkene is major",
    trick: "Decide the mechanism from the substrate class first: methyl/primary → SN2, tertiary → SN1, secondary → depends on conditions.",
    mistakes: [
      "Expecting SN2 at a tertiary carbon — steric hindrance blocks backside attack.",
      "Forgetting that SN1 proceeds through racemisation (both enantiomers form).",
      "Applying Saytzeff's rule to bulky bases; bulky bases (t-BuOK) give the Hofmann product (less substituted)."
    ],
    examples: [
      { q: "Fastest SN1 substrate: tertiary, primary or methyl halide?", a: "Tertiary — it forms the most stable carbocation." },
      { q: "Which mechanism inverts configuration?", a: "SN2 — backside attack gives Walden inversion." }
    ]
  },

  "c-carbonyl": {
    concepts: [
      "Aldehydes and ketones have a polarised C=O bond, making the carbonyl carbon electrophilic and open to nucleophilic addition.",
      "Tests: Tollens' (silver mirror) and Fehling's distinguish aldehydes from ketones; iodoform identifies methyl ketones.",
      "Aldol condensation needs an α-hydrogen; the Cannizzaro reaction occurs for aldehydes without α-hydrogens.",
      "Carboxylic acids are more acidic than alcohols because the carboxylate anion is resonance stabilised."
    ],
    formula: "pK_a acetic acid ≈ 4.76; RCHO + 2Ag(NH₃)₂⁺ → Ag mirror; esterification with alcohol + acid catalyst",
    trick: "Ask two questions for any carbonyl reaction: does it have an α-H (aldol possible), and does it have a CH₃CO– group (iodoform positive)?",
    mistakes: [
      "Expecting Tollens' reagent to react with ketones — it is specific to aldehydes.",
      "Forgetting that electron-withdrawing groups near the carboxyl group increase acidity.",
      "Assuming Cannizzaro works for acetaldehyde; it requires the absence of α-hydrogens."
    ],
    examples: [
      { q: "Strongest acid: CCl₃COOH, CHCl₂COOH, CH₂ClCOOH or CH₃COOH?", a: "CCl₃COOH — three chlorine atoms stabilise the anion most." },
      { q: "Which gives a silver mirror with Tollens' reagent?", a: "Aldehydes only." }
    ]
  },

  "c-amines": {
    concepts: [
      "Amines are basic because of the nitrogen lone pair; basicity falls with resonance delocalisation (aniline is weak) and rises with electron-donating alkyl groups.",
      "In aqueous solution, secondary amines are usually the most basic; the ordering differs from the gas phase.",
      "Hinsberg and carbylamine tests distinguish primary, secondary and tertiary amines.",
      "Diazonium salts are versatile intermediates for azo coupling and substitution chemistry."
    ],
    formula: "K_b for amines; aniline pK_b ≈ 9.4 vs ammonia 4.75; carbylamine: RNH₂ + CHCl₃ + KOH → isocyanide (foul smell)",
    trick: "Compare basicity by asking where the lone pair goes: if it can delocalise into a ring, the amine is weak; if alkyl groups donate to it, the amine is strong.",
    mistakes: [
      "Assuming the most substituted amine is always the strongest base in water; solvation can reverse the gas-phase order.",
      "Forgetting that aniline's lone pair is delocalised into the aromatic ring.",
      "Confusing the Hinsberg test for secondary amines (no stable sulfonamide, insoluble) with the absence of reaction."
    ],
    examples: [
      { q: "Why is aniline less basic than ethylamine?", a: "Its lone pair is delocalised into the benzene ring, so it is less available for protonation." },
      { q: "Which gives the carbylamine reaction?", a: "Primary amines — they form a foul-smelling isocyanide." }
    ]
  },

  "c-biomolecules": {
    concepts: [
      "Carbohydrates: monosaccharides are reducing sugars; sucrose is the common non-reducing sugar because both anomeric carbons are involved in the glycosidic bond.",
      "Proteins are polymers of α-amino acids joined by peptide bonds; primary through quaternary structure describes the hierarchy of folding.",
      "Nucleic acids are polymers of nucleotides built from a pentose sugar, a nitrogenous base and phosphate.",
      "Polymers are classified as addition or condensation; thermosetting polymers cross-link and cannot be remelted."
    ],
    formula: "Glucose C₆H₁₂O₆; peptide bond = amide (C–N); DNA base pairing A=T, G≡C; addition polymer: n CH₂=CH₂ → (–CH₂–CH₂–)ₙ",
    trick: "Reducing sugars must have a free anomeric carbon. If both anomeric carbons form the glycosidic linkage, the sugar cannot open to the aldehyde form.",
    mistakes: [
      "Assuming sucrose is reducing — it is not, because both reducing groups are locked in the glycosidic bond.",
      "Confusing hydrolysis of a protein (peptide bonds) with denaturation (loss of 3D structure only).",
      "Thinking thermosetting plastics can be recycled by melting; cross-links prevent melting."
    ],
    examples: [
      { q: "Bond linking two amino acids?", a: "A peptide bond — the C–N amide linkage formed with loss of water." },
      { q: "Which polymer is thermosetting?", a: "Bakelite — its cross-linked network cannot be remelted." }
    ]
  }
};
