const QUESTIONS_BIOLOGY = [
  { id: "b1", subject: "biology", chapter: "b-living", difficulty: "easy",
    q: "The five-kingdom classification was proposed by:",
    options: ["R. H. Whittaker", "Carl Linnaeus", "Aristotle", "Ernst Haeckel"], answer: 0,
    explanation: "Whittaker (1969) proposed Monera, Protista, Fungi, Plantae and Animalia." },

  { id: "b2", subject: "biology", chapter: "b-living", difficulty: "easy",
    q: "Viruses are considered an exception to the cell theory because they:",
    options: ["Lack cellular organisation", "Have DNA", "Reproduce", "Have a protein coat"], answer: 0,
    explanation: "Viruses are acellular and obligate intracellular parasites, so they do not fit the cell theory." },

  { id: "b3", subject: "biology", chapter: "b-plant-kingdom", difficulty: "easy",
    q: "The dominant photosynthetic phase in a bryophyte is the:",
    options: ["Gametophyte", "Sporophyte", "Protonema only", "Zygote"], answer: 0,
    explanation: "In bryophytes the haploid gametophyte is the dominant, independent and photosynthetic phase." },

  { id: "b4", subject: "biology", chapter: "b-plant-kingdom", difficulty: "easy",
    q: "Double fertilisation is a characteristic feature of:",
    options: ["Angiosperms", "Gymnosperms", "Bryophytes", "Pteridophytes"], answer: 0,
    explanation: "One male gamete fuses with the egg (syngamy) and the other with polar nuclei (triple fusion)." },

  { id: "b5", subject: "biology", chapter: "b-plant-kingdom", difficulty: "medium",
    q: "Pneumatophores are found in:",
    options: ["Mangrove plants", "Desert plants", "Aquatic angiosperms", "Epiphytes"], answer: 0,
    explanation: "Mangroves (e.g. Rhizophora) have negatively geotropic respiratory roots called pneumatophores." },

  { id: "b6", subject: "biology", chapter: "b-animal-kingdom", difficulty: "easy",
    q: "Which phylum shows radial symmetry in the adult form but bilateral symmetry in the larva?",
    options: ["Echinodermata", "Annelida", "Mollusca", "Arthropoda"], answer: 0,
    explanation: "Echinoderms are radiate as adults but their larvae are bilaterally symmetrical." },

  { id: "b7", subject: "biology", chapter: "b-animal-kingdom", difficulty: "easy",
    q: "The largest phylum in the animal kingdom is:",
    options: ["Arthropoda", "Mollusca", "Chordata", "Annelida"], answer: 0,
    explanation: "Arthropoda includes over two-thirds of all known animal species." },

  { id: "b8", subject: "biology", chapter: "b-cell", difficulty: "easy",
    q: "Which organelle is called the 'suicidal bag' of the cell?",
    options: ["Lysosome", "Ribosome", "Mitochondrion", "Peroxisome"], answer: 0,
    explanation: "Lysosomes contain hydrolytic enzymes that can digest the cell's own components." },

  { id: "b9", subject: "biology", chapter: "b-cell", difficulty: "medium",
    q: "The fluid mosaic model of the plasma membrane was proposed by:",
    options: ["Singer & Nicolson", "Robert Hooke", "Schleiden & Schwann", "Camillo Golgi"], answer: 0,
    explanation: "Singer and Nicolson (1972) described the membrane as proteins floating in a lipid bilayer." },

  { id: "b10", subject: "biology", chapter: "b-cell", difficulty: "medium",
    q: "In meiosis, crossing over occurs during:",
    options: ["Pachytene of prophase I", "Leptotene of prophase I", "Metaphase I", "Anaphase II"], answer: 0,
    explanation: "Recombination nodules form between non-sister chromatids in pachytene." },

  { id: "b11", subject: "biology", chapter: "b-biomolecules", difficulty: "easy",
    q: "Enzymes are chemically:",
    options: ["Proteins (mostly)", "Lipids", "Carbohydrates", "Nucleic acids"], answer: 0,
    explanation: "Almost all enzymes are proteins; a few RNA molecules (ribozymes) are catalytic too." },

  { id: "b12", subject: "biology", chapter: "b-biomolecules", difficulty: "medium",
    q: "The secondary structure of DNA is maintained mainly by:",
    options: ["Hydrogen bonds between complementary bases", "Peptide bonds", "Ionic bonds only", "Disulphide bonds"], answer: 0,
    explanation: "A–T pairs form 2 H-bonds and G–C pairs form 3 H-bonds between the strands." },

  { id: "b13", subject: "biology", chapter: "b-plant-physio", difficulty: "medium",
    q: "In photosynthesis, the oxygen released comes from:",
    options: ["Water", "Carbon dioxide", "Glucose", "Rubisco"], answer: 0,
    explanation: "Photolysis of water during the light reaction releases O₂ and provides electrons to PSII." },

  { id: "b14", subject: "biology", chapter: "b-plant-physio", difficulty: "easy",
    q: "The site of the Calvin cycle is the:",
    options: ["Stroma of the chloroplast", "Thylakoid membrane", "Cytoplasm", "Mitochondrial matrix"], answer: 0,
    explanation: "Dark reactions occur in the stroma using ATP and NADPH from the light reaction." },

  { id: "b15", subject: "biology", chapter: "b-plant-physio", difficulty: "medium",
    q: "Which plant shows CAM metabolism?",
    options: ["Opuntia (cactus)", "Rice", "Sugarcane", "Maize"], answer: 0,
    explanation: "CAM plants fix CO₂ at night and store malic acid in vacuoles to conserve water." },

  { id: "b16", subject: "biology", chapter: "b-plant-physio", difficulty: "medium",
    q: "Glycolysis in aerobic respiration occurs in the:",
    options: ["Cytoplasm", "Mitochondrial matrix", "Inner mitochondrial membrane", "Nucleus"], answer: 0,
    explanation: "Glycolysis is cytosolic; the Krebs cycle and ETC occur inside mitochondria." },

  { id: "b17", subject: "biology", chapter: "b-plant-physio", difficulty: "medium",
    q: "The main site of transpiration in a leaf is:",
    options: ["Stomata", "Cuticle", "Lenticels", "Root hairs"], answer: 0,
    explanation: "Stomatal transpiration accounts for about 90% of total water loss." },

  { id: "b18", subject: "biology", chapter: "b-human-physio", difficulty: "easy",
    q: "The enzyme that digests starch in saliva is:",
    options: ["Salivary amylase", "Pepsin", "Lipase", "Trypsin"], answer: 0,
    explanation: "Salivary amylase (ptyalin) converts starch to maltose at salivary pH ~6.8." },

  { id: "b19", subject: "biology", chapter: "b-human-physio", difficulty: "easy",
    q: "The normal pH of human blood is about:",
    options: ["7.4", "6.4", "8.4", "5.5"], answer: 0,
    explanation: "Blood pH is maintained at 7.35–7.45 by bicarbonate, phosphate and protein buffers." },

  { id: "b20", subject: "biology", chapter: "b-human-physio", difficulty: "medium",
    q: "Which part of the nephron is the main site of glucose reabsorption?",
    options: ["Proximal convoluted tubule", "Descending limb of loop of Henle", "Distal convoluted tubule", "Collecting duct"], answer: 0,
    explanation: "Almost all glucose is reabsorbed by secondary active transport in the PCT." },

  { id: "b21", subject: "biology", chapter: "b-human-physio", difficulty: "medium",
    q: "Bohr's effect describes the shift of the oxygen dissociation curve to the right due to:",
    options: ["High CO₂ and low pH", "High pH and low CO₂", "Low temperature", "High oxygen concentration"], answer: 0,
    explanation: "Increased H⁺ and CO₂ reduce haemoglobin's oxygen affinity, aiding tissue delivery." },

  { id: "b22", subject: "biology", chapter: "b-human-physio", difficulty: "easy",
    q: "Insulin is secreted by which cells of the islets of Langerhans?",
    options: ["Beta cells", "Alpha cells", "Delta cells", "Acinar cells"], answer: 0,
    explanation: "Beta cells secrete insulin; alpha cells secrete glucagon." },

  { id: "b23", subject: "biology", chapter: "b-human-physio", difficulty: "medium",
    q: "The pacemaker of the human heart is the:",
    options: ["SA node", "AV node", "Bundle of His", "Purkinje fibres"], answer: 0,
    explanation: "The sinoatrial node generates impulses at about 70–75 beats per minute." },

  { id: "b24", subject: "biology", chapter: "b-human-physio", difficulty: "medium",
    q: "During muscle contraction, the sarcomere shortens because:",
    options: ["Thin filaments slide over thick filaments", "Actin filaments contract lengthwise", "Myosin filaments shorten", "The Z-lines dissolve"], answer: 0,
    explanation: "The sliding filament theory: actin slides towards the centre, reducing sarcomere length." },

  { id: "b25", subject: "biology", chapter: "b-human-physio", difficulty: "medium",
    q: "Which neurotransmitter is released at the neuromuscular junction?",
    options: ["Acetylcholine", "Dopamine", "GABA", "Serotonin"], answer: 0,
    explanation: "ACh released from the motor neuron triggers muscle action potentials." },

  { id: "b26", subject: "biology", chapter: "b-reproduction", difficulty: "medium",
    q: "In humans, fertilisation normally occurs in the:",
    options: ["Ampullary-isthmic junction of the fallopian tube", "Uterus", "Cervix", "Ovary"], answer: 0,
    explanation: "Fusion of sperm and ovum takes place at the ampullary-isthmic junction." },

  { id: "b27", subject: "biology", chapter: "b-reproduction", difficulty: "easy",
    q: "The embryo is implanted in the uterine wall at which stage?",
    options: ["Blastocyst", "Zygote", "Gastrula", "Morula"], answer: 0,
    explanation: "The blastocyst hatches from the zona pellucida and implants in the endometrium." },

  { id: "b28", subject: "biology", chapter: "b-reproduction", difficulty: "medium",
    q: "hCG is secreted by the:",
    options: ["Placenta (trophoblast)", "Corpus luteum", "Pituitary", "Endometrium"], answer: 0,
    explanation: "Human chorionic gonadotropin from the trophoblast maintains the corpus luteum in early pregnancy." },

  { id: "b29", subject: "biology", chapter: "b-reproduction", difficulty: "easy",
    q: "In angiosperms, the endosperm is:",
    options: ["Triploid (3n)", "Diploid (2n)", "Haploid (n)", "Tetraploid (4n)"], answer: 0,
    explanation: "Triple fusion of one male gamete with two polar nuclei gives 3n endosperm." },

  { id: "b30", subject: "biology", chapter: "b-genetics", difficulty: "medium",
    q: "In a monohybrid cross of pure tall and pure dwarf pea plants, the F2 phenotypic ratio is:",
    options: ["3 : 1", "1 : 1", "9 : 3 : 3 : 1", "1 : 2 : 1"], answer: 0,
    explanation: "TT × tt → F1 all Tt (tall); F2 shows 3 tall : 1 dwarf." },

  { id: "b31", subject: "biology", chapter: "b-genetics", difficulty: "medium",
    q: "Colour blindness in humans is an example of:",
    options: ["X-linked recessive inheritance", "Autosomal dominant inheritance", "Y-linked inheritance", "Codominance"], answer: 0,
    explanation: "The gene lies on the X chromosome; males with a single copy are affected." },

  { id: "b32", subject: "biology", chapter: "b-genetics", difficulty: "medium",
    q: "The ABO blood group shows:",
    options: ["Multiple alleles and codominance", "Incomplete dominance", "Epistasis", "Pleiotropy"], answer: 0,
    explanation: "Alleles I^A, I^B and i exist in the population; I^A and I^B are codominant." },

  { id: "b33", subject: "biology", chapter: "b-genetics", difficulty: "hard",
    q: "Down's syndrome is caused by:",
    options: ["Trisomy of chromosome 21", "Monosomy of X", "XXY genotype", "Deletion in chromosome 5"], answer: 0,
    explanation: "An extra copy of chromosome 21 gives 47 chromosomes with trisomy 21." },

  { id: "b34", subject: "biology", chapter: "b-molecular", difficulty: "easy",
    q: "The structure of DNA was proposed by:",
    options: ["Watson and Crick", "Meselson and Stahl", "Griffith", "Chargaff"], answer: 0,
    explanation: "Watson and Crick (1953) proposed the double helix using Franklin's X-ray data." },

  { id: "b35", subject: "biology", chapter: "b-molecular", difficulty: "medium",
    q: "DNA replication is described as semi-conservative. This was proved by:",
    options: ["Meselson and Stahl", "Avery, MacLeod and McCarty", "Hershey and Chase", "Oswald Avery"], answer: 0,
    explanation: "Their ¹⁵N density-gradient experiment showed each daughter duplex has one old strand." },

  { id: "b36", subject: "biology", chapter: "b-molecular", difficulty: "medium",
    q: "The enzyme that joins Okazaki fragments is:",
    options: ["DNA ligase", "DNA gyrase", "Helicase", "Primase"], answer: 0,
    explanation: "Ligase seals the sugar-phosphate backbone gaps after primers are replaced." },

  { id: "b37", subject: "biology", chapter: "b-molecular", difficulty: "medium",
    q: "The lac operon is switched on when:",
    options: ["Lactose is present and glucose is absent", "Glucose is high", "Lactose is absent", "Repressor is abundant"], answer: 0,
    explanation: "Lactose binds the repressor (removing it) while low glucose raises cAMP–CAP, activating transcription." },

  { id: "b38", subject: "biology", chapter: "b-biotech", difficulty: "medium",
    q: "Restriction endonuclease EcoRI recognises which sequence?",
    options: ["GAATTC", "GAATTA", "GATTCA", "CTTAAG"], answer: 0,
    explanation: "EcoRI cuts the palindromic sequence 5'-GAATTC-3' between G and A, producing sticky ends." },

  { id: "b39", subject: "biology", chapter: "b-biotech", difficulty: "medium",
    q: "In PCR, the enzyme used for DNA synthesis is:",
    options: ["Taq polymerase", "DNA ligase", "Reverse transcriptase", "Restriction enzyme"], answer: 0,
    explanation: "Thermostable Taq polymerase from Thermus aquaticus survives the denaturation step." },

  { id: "b40", subject: "biology", chapter: "b-biotech", difficulty: "medium",
    q: "Bt cotton is resistant to bollworms because it carries genes for:",
    options: ["Bt toxin (cry proteins)", "Herbicide tolerance", "Salt tolerance", "Higher yield"], answer: 0,
    explanation: "Cry proteins from Bacillus thuringiensis become active in the alkaline insect gut." },

  { id: "b41", subject: "biology", chapter: "b-ecology", difficulty: "easy",
    q: "In an ecosystem, the 10% law of energy transfer was given by:",
    options: ["Lindeman", "Odum", "Tansley", "Darwin"], answer: 0,
    explanation: "Lindeman's ten percent law: only ~10% of energy passes to the next trophic level." },

  { id: "b42", subject: "biology", chapter: "b-ecology", difficulty: "easy",
    q: "Which of the following is a primary consumer?",
    options: ["Grasshopper", "Snake", "Hawk", "Fungus"], answer: 0,
    explanation: "Grasshoppers are herbivores, i.e. primary consumers feeding directly on producers." },

  { id: "b43", subject: "biology", chapter: "b-ecology", difficulty: "medium",
    q: "Succession that starts in a water body is called:",
    options: ["Hydrarch succession", "Xerarch succession", "Primary succession on rock", "Retrogressive succession"], answer: 0,
    explanation: "Hydrarch succession starts in aquatic habitats and progresses towards a mesic climax." },

  { id: "b44", subject: "biology", chapter: "b-ecology", difficulty: "medium",
    q: "Which gas is mainly responsible for the depletion of the ozone layer?",
    options: ["Chlorofluorocarbons", "Carbon dioxide", "Methane", "Nitrogen"], answer: 0,
    explanation: "UV radiation releases chlorine from CFCs, which catalytically destroys ozone." },

  { id: "b45", subject: "biology", chapter: "b-ecology", difficulty: "easy",
    q: "The most biodiverse biome / region on Earth is mainly the:",
    options: ["Tropical rainforest", "Tundra", "Taiga", "Desert"], answer: 0,
    explanation: "Tropical rainforests have the greatest species diversity per unit area." }
];
