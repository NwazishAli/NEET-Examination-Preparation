/* ===== Chapter study notes: Biology ===== */

const NOTES_BIOLOGY = {
  "b-living": {
    concepts: [
      "Taxonomy uses a hierarchical ladder: Kingdom → Phylum → Class → Order → Family → Genus → Species, with binomial nomenclature (genus + species).",
      "Whittaker's five kingdoms are Monera, Protista, Fungi, Plantae and Animalia, based on cell type, body organisation and nutrition.",
      "Viruses are acellular obligate parasites with a nucleic acid core and protein capsid; viroids are naked RNA and prions are infectious proteins.",
      "Lichens are symbiotic associations of algae and fungi, and act as pollution indicators."
    ],
    formula: "Binomial = Genus species (italicised); taxonomic hierarchy = KPCOFGS",
    trick: "Remember the hierarchy and the three domains of comparison (cell type, nuclear organisation, mode of nutrition) — most classification questions reduce to those two facts.",
    mistakes: [
      "Thinking viruses fit the cell theory — they are acellular and lie outside it.",
      "Confusing viroids (naked RNA) with prions (misfolded proteins).",
      "Assuming all bacteria are heterotrophic; cyanobacteria are photoautotrophs."
    ],
    examples: [
      { q: "Who proposed the five-kingdom classification?", a: "R. H. Whittaker in 1969." },
      { q: "Why are lichens used as pollution indicators?", a: "They are highly sensitive to SO₂ and other pollutants and disappear where air quality is poor." }
    ]
  },

  "b-plant-kingdom": {
    concepts: [
      "Algae are chlorophyll-bearing thallophytes; bryophytes are the amphibians of the plant kingdom with a dominant gametophyte.",
      "Pteridophytes are the first vascular plants with a dominant sporophyte and independent gametophyte.",
      "Gymnosperms bear naked seeds; angiosperms bear enclosed seeds and show double fertilisation.",
      "Morphology: root systems, stem modifications, leaf venation and inflorescence types are all frequent identification questions."
    ],
    formula: "Double fertilisation: syngamy (2n zygote) + triple fusion (3n endosperm); life-cycle alternation of generations",
    trick: "For any plant group, ask two questions: is the gametophyte or sporophyte dominant, and is the seed naked or enclosed? Those two answers place almost any specimen.",
    mistakes: [
      "Saying the sporophyte of a bryophyte is dominant — the gametophyte is.",
      "Forgetting that endosperm is triploid while the zygote is diploid.",
      "Confusing pneumatophores (respiratory mangrove roots) with prop roots."
    ],
    examples: [
      { q: "Double fertilisation occurs in:", a: "Angiosperms — one male gamete fuses with the egg and the other with the polar nuclei." },
      { q: "Pneumatophores are found in:", a: "Mangrove plants, for respiration in waterlogged soil." }
    ]
  },

  "b-animal-kingdom": {
    concepts: [
      "Classification of animals follows levels of organisation, body symmetry, coelom type, segmentation and presence of ciliated cells.",
      "Coelom types: acoelomate (Platyhelminthes), pseudocoelomate (Aschelminthes) and coelomate (Annelida onwards).",
      "Echinoderms show radial symmetry in the adult but bilateral symmetry in the larva, and possess a water vascular system.",
      "Arthropoda is the largest phylum, with jointed appendages and an exoskeleton of chitin."
    ],
    formula: "Symmetry: radial (Cnidaria, adult echinoderms) vs bilateral; diploblastic: Cnidaria, Ctenophora",
    trick: "Learn the coelom ladder in order — acoelomate, pseudocoelomate, coelomate — and you can place an unfamiliar phylum quickly.",
    mistakes: [
      "Calling an adult echinoderm bilaterally symmetrical; the larva is bilateral but the adult is radial.",
      "Forgetting that Cnidaria and Ctenophora are the only diploblastic phyla.",
      "Confusing the water vascular system of echinoderms with the pseudocoelom of roundworms."
    ],
    examples: [
      { q: "Largest phylum in the animal kingdom?", a: "Arthropoda." },
      { q: "Which phylum has a water vascular system?", a: "Echinodermata." }
    ]
  },

  "b-cell": {
    concepts: [
      "Prokaryotes lack a membrane-bound nucleus and organelles; eukaryotes compartmentalise functions into organelles.",
      "The fluid mosaic model describes the membrane as proteins floating in a fluid lipid bilayer; transport may be passive or active.",
      "Mitochondria and chloroplasts have their own DNA and ribosomes, supporting endosymbiosis.",
      "The cell cycle has interphase (G1, S, G2) and mitotic division; meiosis has two divisions with crossing over in pachytene of prophase I."
    ],
    formula: "Mitosis produces 2 diploid cells; meiosis produces 4 haploid cells; cell cycle ≈ 24 h with interphase ~95%",
    trick: "For any organelle question, recall 'double membrane + own DNA' — that combination always points to mitochondria or chloroplasts.",
    mistakes: [
      "Confusing lysosomes (digestive, acidic) with peroxisomes (oxidative, catalase).",
      "Saying crossing over happens in leptotene; it occurs in pachytene, while the synaptonemal complex forms in zygotene.",
      "Thinking ribosomes are membrane bound — they are not, which is why prokaryotes can translate without organelles."
    ],
    examples: [
      { q: "Which organelle is called the suicidal bag?", a: "The lysosome, because it contains hydrolytic enzymes that can digest cell components." },
      { q: "In which stage does crossing over occur?", a: "Pachytene of prophase I of meiosis." }
    ]
  },

  "b-biomolecules": {
    concepts: [
      "Carbohydrates are the primary energy stores; monosaccharides have the aldehyde or ketone group, polysaccharides are storage or structural.",
      "Proteins are polymers of α-amino acids; structure runs primary (sequence) to quaternary (multiple polypeptides).",
      "Enzymes are mostly proteins that lower activation energy; they are highly specific and sensitive to pH and temperature.",
      "Nucleic acids store and transfer information; ATP is the universal energy currency."
    ],
    formula: "Amino acid = amino group + carboxyl group + R group; peptide bond = C–N; DNA base pairs A=T (2 H-bonds), G≡C (3 H-bonds)",
    trick: "For enzyme questions, remember lock-and-key versus induced fit — the active site changes shape slightly on binding, which explains competitive inhibition.",
    mistakes: [
      "Calling all enzymes proteins — a few catalytic RNAs (ribozymes) exist.",
      "Thinking denaturation breaks peptide bonds; it disrupts secondary and tertiary structure only.",
      "Assuming lipids are true polymers — they are not, unlike proteins and polysaccharides."
    ],
    examples: [
      { q: "Chemically, most enzymes are:", a: "Proteins." },
      { q: "Which bonds maintain DNA's secondary structure?", a: "Hydrogen bonds between complementary bases." }
    ]
  },

  "b-plant-physio": {
    concepts: [
      "Photosynthesis has light reactions (thylakoid membrane, produce ATP and NADPH, release O₂ from water) and dark reactions (stroma, Calvin cycle fixes CO₂).",
      "C3, C4 and CAM pathways differ in their first CO₂ acceptor and in their water-use efficiency; C4 plants avoid photorespiration.",
      "Cellular respiration: glycolysis (cytoplasm) → Krebs cycle (matrix) → oxidative phosphorylation (inner membrane), about 38 ATP per glucose.",
      "Plant growth regulators (auxin, gibberellin, cytokinin, ABA, ethylene) control growth, senescence and dormancy."
    ],
    formula: "6CO₂ + 12H₂O → C₆H₁₂O₆ + 6O₂ + 6H₂O; net 38 ATP per glucose; Rubisco fixes CO₂ in C3 plants",
    trick: "For productivity questions, remember only ~1–2% of incident light is actually converted into biomass — the rest is reflected, transmitted or lost as heat.",
    mistakes: [
      "Thinking oxygen comes from CO₂ — it comes from the photolysis of water.",
      "Confusing C4 (bundle sheath, PEP carboxylase) with CAM (night-time CO₂ fixation, malic acid storage).",
      "Forgetting that glycolysis occurs in the cytoplasm, not in mitochondria."
    ],
    examples: [
      { q: "Where does the Calvin cycle occur?", a: "In the stroma of the chloroplast." },
      { q: "How many O₂ molecules are released per glucose formed?", a: "Six — from the photolysis of twelve water molecules." }
    ]
  },

  "b-digestion": {
    concepts: [
      "Digestion begins in the mouth with salivary amylase acting on starch at pH ~6.8.",
      "The stomach secretes HCl (parietal cells) and pepsinogen (chief cells); pepsin works at acidic pH.",
      "The small intestine is the main site of absorption, with villi and microvilli increasing surface area.",
      "Bile from the liver emulsifies fats; pancreatic enzymes (trypsin, lipase, amylase) complete chemical digestion."
    ],
    formula: "Starch → maltose (amylase); protein → peptides (pepsin/trypsin); fat → fatty acids + glycerol (lipase + bile)",
    trick: "Match each enzyme to its pH: salivary amylase slightly acidic, pepsin strongly acidic, trypsin and lipase alkaline. That single rule resolves most enzyme-site questions.",
    mistakes: [
      "Thinking digestion of protein starts in the small intestine; pepsin begins it in the stomach.",
      "Believing bile contains digestive enzymes — it contains bile salts that emulsify fats, with no enzymes.",
      "Forgetting that most water absorption occurs in the large intestine, not the stomach."
    ],
    examples: [
      { q: "Enzyme that digests starch in saliva?", a: "Salivary amylase (ptyalin)." },
      { q: "What does bile do?", a: "Emulsifies fats into micelles, increasing the surface area for lipase." }
    ]
  },

  "b-breathing": {
    concepts: [
      "Inspiration is active: the diaphragm and external intercostals contract, increasing thoracic volume and lowering intrapulmonary pressure.",
      "Expiration at rest is passive, driven by elastic recoil of the lungs.",
      "Gas exchange occurs by diffusion across the alveolar–capillary membrane; oxygen binds haemoglobin cooperatively.",
      "Bohr's effect shifts the oxygen dissociation curve right when CO₂ rises and pH falls, improving oxygen delivery to tissues."
    ],
    formula: "Tidal volume ≈ 500 mL; vital capacity ≈ 3500 mL; total lung capacity ≈ 6000 mL; respiratory rate ≈ 12–16/min",
    trick: "For respiratory volumes, remember TV < IRV < VC < TLC and that residual volume can never be exhaled — that is why spirometry cannot measure TLC directly.",
    mistakes: [
      "Thinking expiration at rest is an active muscular process; it becomes active only during exercise or forced breathing.",
      "Confusing vital capacity (maximum exhaled after maximum inhalation) with total lung capacity.",
      "Assuming oxygen is mostly carried dissolved in plasma — about 97% travels bound to haemoglobin."
    ],
    examples: [
      { q: "Which muscle is the primary muscle of inspiration?", a: "The diaphragm." },
      { q: "Bohr's effect describes:", a: "The rightward shift of the oxygen dissociation curve due to high CO₂ and low pH." }
    ]
  },

  "b-circulation": {
    concepts: [
      "Human circulation is double and complete: pulmonary and systemic circuits, with no mixing of oxygenated and deoxygenated blood.",
      "The SA node is the pacemaker (70–75 beats/min); the AV node delays the impulse, allowing the atria to empty before ventricular contraction.",
      "Cardiac cycle: systole and diastole, with the first and second heart sounds from valve closure.",
      "Blood groups follow ABO and Rh systems; erythrocytes carry haemoglobin, leucocytes provide immunity and platelets enable clotting."
    ],
    formula: "Cardiac output = stroke volume × heart rate ≈ 5 L/min; normal blood pressure 120/80 mmHg; normal blood pH 7.35–7.45",
    trick: "Follow the impulse path in order — SA node → AV node → bundle of His → Purkinje fibres — and any conduction question becomes a sequence recall.",
    mistakes: [
      "Thinking the AV node is the pacemaker; it only sets the ventricular rate, while the SA node initiates the impulse.",
      "Assuming arteries always carry oxygenated blood — the pulmonary artery carries deoxygenated blood.",
      "Forgetting that the delay at the AV node is functionally important, not a defect."
    ],
    examples: [
      { q: "Pacemaker of the heart?", a: "The SA node, which generates 70–75 impulses per minute." },
      { q: "What is the normal pH of blood?", a: "About 7.4 (range 7.35–7.45)." }
    ]
  },

  "b-excretion": {
    concepts: [
      "The nephron is the functional unit; filtration occurs at the glomerulus, reabsorption in the PCT and DCT, and concentration in the loop of Henle.",
      "The countercurrent mechanism of the loop of Henle and vasa recta creates a medullary osmotic gradient for urine concentration.",
      "Almost all glucose and amino acids are reabsorbed in the proximal convoluted tubule by secondary active transport.",
      "ADH increases water reabsorption in the collecting duct; aldosterone increases sodium reabsorption; the RAAS regulates blood pressure."
    ],
    formula: "GFR ≈ 125 mL/min (≈180 L/day); urine output ≈ 1.5 L/day; urea, uric acid, creatinine are the chief nitrogenous wastes",
    trick: "For 'where is X reabsorbed' questions, the PCT is the default answer for glucose, amino acids and most ions — reserve the loop for water and the DCT for fine tuning.",
    mistakes: [
      "Thinking filtration occurs along the entire nephron; it happens only in the glomerulus.",
      "Confusing ADH (water reabsorption) with aldosterone (sodium reabsorption).",
      "Forgetting that the loop of Henle's descending limb is permeable to water but the ascending limb is not."
    ],
    examples: [
      { q: "Main site of glucose reabsorption?", a: "The proximal convoluted tubule." },
      { q: "Which enzyme converts angiotensinogen to angiotensin I?", a: "Renin, from the juxtaglomerular cells." }
    ]
  },

  "b-locomotion": {
    concepts: [
      "The skeletal system has about 206 bones; the axial skeleton (skull, vertebral column, ribs) and appendicular skeleton (limbs, girdles).",
      "Muscles contract by the sliding filament mechanism: actin slides over myosin, shortening the sarcomere.",
      "Acetylcholine released at the neuromuscular junction triggers depolarisation and calcium release.",
      "Joint types (ball and socket, hinge, pivot, gliding) and the disorders (gout, osteoporosis, myasthenia gravis) are frequent questions."
    ],
    formula: "Sarcomere shortens from ~2.2 μm to ~1.0 μm; muscle contraction requires Ca²⁺ and ATP",
    trick: "Remember the sarcomere rule: the A-band stays constant, the I-band shortens, and the H-zone narrows during contraction.",
    mistakes: [
      "Thinking the actin filaments shorten — they slide; neither filament changes length.",
      "Forgetting that muscle contraction needs ATP for both cross-bridge cycling and calcium reuptake.",
      "Confusing the A-band (dark, thick filaments) with the I-band (light, thin filaments)."
    ],
    examples: [
      { q: "During contraction, what happens to the sarcomere?", a: "The thin filaments slide over the thick ones, shortening the sarcomere." },
      { q: "Neurotransmitter at the neuromuscular junction?", a: "Acetylcholine." }
    ]
  },

  "b-reproduction": {
    concepts: [
      "Human male reproductive system: testes produce sperm; the epididymis stores and matures them; the vas deferens transports them.",
      "Human female: the ovary releases the oocyte at ovulation; fertilisation occurs at the ampullary–isthmic junction of the fallopian tube.",
      "The menstrual cycle has follicular, ovulatory and luteal phases; hCG from the trophoblast maintains the corpus luteum.",
      "Plants: double fertilisation produces a triploid endosperm; apomixis and polyembryony are common special cases."
    ],
    formula: "Menstrual cycle ≈ 28 days; ovulation ≈ day 14; gestation ≈ 266–280 days; spermatogenesis produces 4 haploid sperm",
    trick: "For hormone timing questions, anchor on ovulation (day 14): LH surges just before, and progesterone dominates after.",
    mistakes: [
      "Thinking fertilisation occurs in the uterus; it happens in the fallopian tube.",
      "Confusing hCG (maintains corpus luteum) with LH (triggers ovulation).",
      "Forgetting that the endosperm is triploid because of triple fusion."
    ],
    examples: [
      { q: "Where does fertilisation normally occur?", a: "At the ampullary–isthmic junction of the fallopian tube." },
      { q: "Ploidy of the endosperm?", a: "Triploid (3n)." }
    ]
  },

  "b-genetics": {
    concepts: [
      "Mendel's laws: dominance, segregation and independent assortment, verified by monohybrid and dihybrid crosses.",
      "Incomplete dominance and codominance deviate from simple dominance; multiple alleles exist for traits like ABO blood groups.",
      "Sex-linked inheritance (X-linked recessive such as haemophilia and colour blindness) affects males more than females.",
      "Chromosomal disorders (Down's trisomy 21, Klinefelter XXY, Turner XO) arise from non-disjunction."
    ],
    formula: "Monohybrid F2 = 3:1 phenotype, 1:2:1 genotype; dihybrid F2 = 9:3:3:1; test cross = 1:1",
    trick: "For pedigree questions, use one rule: an unaffected parent cannot pass a dominant disorder, and an affected father cannot pass an X-linked recessive trait to his sons.",
    mistakes: [
      "Mixing up incomplete dominance (blended phenotype) with codominance (both expressed separately, as in AB blood type).",
      "Forgetting that a recessive X-linked trait can skip generations through carrier females.",
      "Assuming all crosses with independent assortment need a Punnett square — the product rule gives ratios faster."
    ],
    examples: [
      { q: "F2 phenotypic ratio of a monohybrid cross?", a: "3 : 1." },
      { q: "Cause of Down's syndrome?", a: "Trisomy of chromosome 21 (47 chromosomes)." }
    ]
  },

  "b-molecular": {
    concepts: [
      "DNA is a double helix with antiparallel strands, base-paired (A=T, G≡C) and 10 bp per turn, with a 3.4 nm pitch.",
      "Semi-conservative replication was proved by the Meselson–Stahl experiment; DNA polymerase works 5'→3' and needs a primer.",
      "Transcription produces mRNA, which is processed and then translated on ribosomes following the genetic code (64 codons, 61 sense).",
      "Gene regulation: the lac operon is induced by lactose and repressed by glucose; mutations shift reading frames."
    ],
    formula: "1 turn = 10 bp = 3.4 nm; 1 bp rise = 0.34 nm; 64 codons → 61 sense + 3 stop (UAA, UAG, UGA)",
    trick: "For 'how many nucleotide pairs' questions, count codons × 3 for the coding region, then remember that each amino acid needs one codon plus a stop codon.",
    mistakes: [
      "Thinking the strands are parallel — they are antiparallel, so synthesis on the lagging strand is fragmented (Okazaki).",
      "Confusing the template strand with the coding strand when writing mRNA.",
      "Forgetting that DNA ligase (not polymerase) joins Okazaki fragments."
    ],
    examples: [
      { q: "Who proved semi-conservative replication?", a: "Meselson and Stahl, using ¹⁵N density-gradient centrifugation." },
      { q: "How many codons are there and how many are sense?", a: "64 total, of which 61 code for amino acids and 3 are stop codons." }
    ]
  },

  "b-biotech": {
    concepts: [
      "Recombinant DNA technology uses restriction endonucleases to cut DNA and ligase to join it, with plasmids as vectors.",
      "PCR amplifies DNA using primers, Taq polymerase and cyclic denaturation–annealing–extension.",
      "Bt crops carry cry genes from Bacillus thuringiensis; RNA interference silences specific transcripts.",
      "Applications: gene therapy, DNA fingerprinting (VNTR), insulin production and transgenic animals."
    ],
    formula: "EcoRI cuts GAATTC between G and A; Taq polymerase survives ~94 °C; PCR cycle ≈ 30 cycles",
    trick: "For 'which technique' questions: amplification → PCR, separation by size → gel electrophoresis, cutting → restriction enzyme, joining → ligase.",
    mistakes: [
      "Thinking restriction enzymes cut randomly — they recognise specific palindromic sequences.",
      "Forgetting that DNA fragments are negatively charged and migrate toward the anode.",
      "Confusing RNAi (silencing the plant's own mRNA) with antisense RNA."
    ],
    examples: [
      { q: "Enzyme used in PCR?", a: "Taq polymerase, from Thermus aquaticus." },
      { q: "How is Bt cotton made pest resistant?", a: "It carries cry proteins from Bacillus thuringiensis that are activated in the alkaline insect gut." }
    ]
  },

  "b-ecology": {
    concepts: [
      "Population growth may be exponential (unlimited resources) or logistic (limited, sigmoid); carrying capacity K sets the plateau.",
      "Energy flows through trophic levels with ~10% transfer efficiency (Lindeman's law), limiting food chains to 4–5 levels.",
      "Ecological succession runs from pioneer communities to a stable climax; primary succession starts on bare rock or in water.",
      "Biodiversity hotspots, in-situ and ex-situ conservation, and pollution-related issues (ozone depletion, acid rain, greenhouse effect) are frequent question areas."
    ],
    formula: "Logistic growth: dN/dt = rN(1 − N/K); 10% law; population growth rate r = (b − d) + (i − e)",
    trick: "For any food-chain question, remember that primary consumers are herbivores and the pyramid of energy is always upright, unlike pyramids of biomass or numbers which can invert.",
    mistakes: [
      "Thinking the pyramid of biomass is always upright — in an ocean ecosystem, phytoplankton biomass can be smaller than that of zooplankton.",
      "Confusing in-situ (parks, biosphere reserves) with ex-situ (zoos, seed banks) conservation.",
      "Forgetting that ozone depletion is caused by CFCs while the greenhouse effect is driven by CO₂ and methane."
    ],
    examples: [
      { q: "The 10% law of energy transfer was given by:", a: "Lindeman." },
      { q: "Which gas chiefly depletes the ozone layer?", a: "Chlorofluorocarbons (CFCs), via chlorine radicals." }
    ]
  }
};
