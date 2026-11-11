const QUESTIONS_PHYSICS = [
  { id: "ph1", subject: "physics", chapter: "p-unit-measure", difficulty: "easy",
    q: "The dimensional formula of Planck's constant is:",
    options: ["[ML²T⁻¹]", "[ML²T⁻²]", "[MLT⁻¹]", "[ML²T⁻³]"], answer: 0,
    explanation: "E = hν ⇒ h = E/ν = [ML²T⁻²]/[T⁻¹] = [ML²T⁻¹]." },

  { id: "ph2", subject: "physics", chapter: "p-unit-measure", difficulty: "easy",
    q: "Which of the following is a dimensionless quantity?",
    options: ["Strain", "Stress", "Momentum", "Impulse"], answer: 0,
    explanation: "Strain is a ratio of two lengths, hence dimensionless." },

  { id: "ph3", subject: "physics", chapter: "p-kinematics", difficulty: "easy",
    q: "A ball is thrown vertically upward with 20 m/s. Take g = 10 m/s². The maximum height reached is:",
    options: ["20 m", "10 m", "40 m", "5 m"], answer: 0,
    explanation: "H = u²/2g = 400/20 = 20 m." },

  { id: "ph4", subject: "physics", chapter: "p-kinematics", difficulty: "easy",
    q: "A car starts from rest and accelerates uniformly at 2 m/s². The distance covered in 5 s is:",
    options: ["25 m", "50 m", "10 m", "20 m"], answer: 0,
    explanation: "s = ½at² = ½ × 2 × 25 = 25 m." },

  { id: "ph5", subject: "physics", chapter: "p-laws-motion", difficulty: "easy",
    q: "A force of 20 N acts on a 5 kg block on a frictionless surface. Its acceleration is:",
    options: ["4 m/s²", "0.25 m/s²", "100 m/s²", "5 m/s²"], answer: 0,
    explanation: "a = F/m = 20/5 = 4 m/s²." },

  { id: "ph6", subject: "physics", chapter: "p-laws-motion", difficulty: "medium",
    q: "A bullet of mass 20 g leaves a 4 kg gun with a speed of 400 m/s. The recoil speed of the gun is:",
    options: ["2 m/s", "4 m/s", "8 m/s", "0.2 m/s"], answer: 0,
    explanation: "Momentum conservation: 0.02 × 400 = 4 × v ⇒ v = 2 m/s." },

  { id: "ph7", subject: "physics", chapter: "p-work-energy", difficulty: "medium",
    q: "The work done by the centripetal force on a body in uniform circular motion is:",
    options: ["Zero", "Positive", "Negative", "Infinite"], answer: 0,
    explanation: "Centripetal force is always perpendicular to displacement, so W = 0." },

  { id: "ph8", subject: "physics", chapter: "p-work-energy", difficulty: "easy",
    q: "The kinetic energy of a 2 kg body moving at 10 m/s is:",
    options: ["100 J", "20 J", "200 J", "40 J"], answer: 0,
    explanation: "KE = ½mv² = ½ × 2 × 100 = 100 J." },

  { id: "ph9", subject: "physics", chapter: "p-rotational", difficulty: "medium",
    q: "The moment of inertia of a solid sphere of mass M and radius R about its diameter is:",
    options: ["2/5 MR²", "2/3 MR²", "MR²", "1/2 MR²"], answer: 0,
    explanation: "For a solid sphere about a diameter, I = 2/5 MR² (hollow sphere: 2/3 MR²)." },

  { id: "ph10", subject: "physics", chapter: "p-rotational", difficulty: "medium",
    q: "A spinning ice skater pulls her arms inward. As a result her:",
    options: ["Angular velocity increases", "Angular velocity decreases", "Moment of inertia increases", "Angular momentum increases"], answer: 0,
    explanation: "L = Iω is conserved; I decreases so ω increases." },

  { id: "ph11", subject: "physics", chapter: "p-gravitation", difficulty: "medium",
    q: "At a height equal to the Earth's radius above the surface, the acceleration due to gravity becomes:",
    options: ["g/4", "g/2", "g/9", "2g"], answer: 0,
    explanation: "g' = g(R/(R+h))² = g(R/2R)² = g/4." },

  { id: "ph12", subject: "physics", chapter: "p-gravitation", difficulty: "easy",
    q: "The escape velocity from the Earth's surface is approximately:",
    options: ["11.2 km/s", "7.9 km/s", "3.0 km/s", "2.4 km/s"], answer: 0,
    explanation: "v_e = √(2gR) ≈ 11.2 km/s; 7.9 km/s is orbital velocity near the surface." },

  { id: "ph13", subject: "physics", chapter: "p-properties-solids", difficulty: "easy",
    q: "The SI unit of Young's modulus is:",
    options: ["N/m²", "N/m", "N·m", "J"], answer: 0,
    explanation: "Young's modulus = stress/strain; stress has units N/m² and strain is dimensionless." },

  { id: "ph14", subject: "physics", chapter: "p-properties-fluids", difficulty: "medium",
    q: "Bernoulli's theorem is a statement of the conservation of:",
    options: ["Energy", "Mass", "Momentum", "Charge"], answer: 0,
    explanation: "It equates pressure energy, kinetic energy and potential energy per unit volume." },

  { id: "ph15", subject: "physics", chapter: "p-properties-fluids", difficulty: "medium",
    q: "Terminal velocity of a spherical body falling through a viscous fluid is proportional to:",
    options: ["r²", "r", "1/r", "r³"], answer: 0,
    explanation: "v_t = 2r²(ρ − σ)g/9η, so v_t ∝ r²." },

  { id: "ph16", subject: "physics", chapter: "p-thermal", difficulty: "easy",
    q: "The SI unit of the coefficient of linear expansion is:",
    options: ["K⁻¹", "K", "m", "J/K"], answer: 0,
    explanation: "α = ΔL/(L·ΔT), so its unit is per kelvin." },

  { id: "ph17", subject: "physics", chapter: "p-thermal", difficulty: "medium",
    q: "For an adiabatic process:",
    options: ["Q = 0 and ΔU = −W", "Q = 0 and ΔU = W", "W = 0 and Q = ΔU", "ΔU = 0"], answer: 0,
    explanation: "No heat exchange (Q = 0), so ΔU = −W by the first law." },

  { id: "ph18", subject: "physics", chapter: "p-thermal", difficulty: "medium",
    q: "A Carnot engine works between 500 K and 300 K. Its efficiency is:",
    options: ["40%", "60%", "20%", "80%"], answer: 0,
    explanation: "η = 1 − T₂/T₁ = 1 − 300/500 = 0.4 = 40%." },

  { id: "ph19", subject: "physics", chapter: "p-kinetic-theory", difficulty: "medium",
    q: "The rms speed of gas molecules is proportional to:",
    options: ["√(T/M)", "T/M", "√(M/T)", "T²/M"], answer: 0,
    explanation: "v_rms = √(3RT/M), so it varies as √(T/M)." },

  { id: "ph20", subject: "physics", chapter: "p-oscillations", difficulty: "easy",
    q: "The time period of a simple pendulum is proportional to:",
    options: ["√L", "L", "1/L", "L²"], answer: 0,
    explanation: "T = 2π√(L/g), independent of mass." },

  { id: "ph21", subject: "physics", chapter: "p-oscillations", difficulty: "easy",
    q: "Sound travels fastest in:",
    options: ["Solids", "Liquids", "Gases", "Vacuum"], answer: 0,
    explanation: "Speed depends on elasticity and density; solids have the greatest elastic modulus." },

  { id: "ph22", subject: "physics", chapter: "p-electrostatics", difficulty: "easy",
    q: "If the distance between two point charges is doubled, the electrostatic force becomes:",
    options: ["One-fourth", "One-half", "Double", "Four times"], answer: 0,
    explanation: "F ∝ 1/r², so doubling r gives F/4." },

  { id: "ph23", subject: "physics", chapter: "p-electrostatics", difficulty: "medium",
    q: "The energy stored in a capacitor of capacitance C charged to potential V is:",
    options: ["½CV²", "CV²", "½C²V", "CV"], answer: 0,
    explanation: "U = ½CV² = Q²/2C = ½QV." },

  { id: "ph24", subject: "physics", chapter: "p-current", difficulty: "easy",
    q: "Two 10 Ω resistors are connected in parallel. The equivalent resistance is:",
    options: ["5 Ω", "20 Ω", "10 Ω", "0.5 Ω"], answer: 0,
    explanation: "For two equal resistors in parallel, R_eq = R/2 = 5 Ω." },

  { id: "ph25", subject: "physics", chapter: "p-current", difficulty: "medium",
    q: "Which relation correctly connects current, drift velocity and cross-section?",
    options: ["I = neAv_d", "I = nA/v_d", "I = ne/v_d", "I = nv_d/eA"], answer: 0,
    explanation: "I = n e A v_d, where n is number density of free electrons." },

  { id: "ph26", subject: "physics", chapter: "p-magnetism", difficulty: "medium",
    q: "A charged particle moving parallel to a uniform magnetic field experiences a force of:",
    options: ["Zero", "qvB", "½qvB", "qE"], answer: 0,
    explanation: "F = qvB sinθ and θ = 0°, so sinθ = 0." },

  { id: "ph27", subject: "physics", chapter: "p-magnetism", difficulty: "medium",
    q: "The radius of the circular path of a charged particle in a magnetic field is given by:",
    options: ["mv/qB", "qB/mv", "qvB", "mB/qv"], answer: 0,
    explanation: "qvB = mv²/r ⇒ r = mv/qB." },

  { id: "ph28", subject: "physics", chapter: "p-emi", difficulty: "medium",
    q: "Lenz's law is a consequence of the conservation of:",
    options: ["Energy", "Charge", "Momentum", "Mass"], answer: 0,
    explanation: "The induced current opposes the change causing it, otherwise energy would be created." },

  { id: "ph29", subject: "physics", chapter: "p-emi", difficulty: "medium",
    q: "For a 220 V rms AC supply, the peak voltage is about:",
    options: ["311 V", "220 V", "156 V", "440 V"], answer: 0,
    explanation: "V_peak = √2 × V_rms = 1.414 × 220 ≈ 311 V." },

  { id: "ph30", subject: "physics", chapter: "p-em-waves", difficulty: "easy",
    q: "Which electromagnetic radiation has the shortest wavelength?",
    options: ["Gamma rays", "X-rays", "Ultraviolet", "Microwaves"], answer: 0,
    explanation: "Gamma rays have the highest frequency and shortest wavelength." },

  { id: "ph31", subject: "physics", chapter: "p-optics", difficulty: "easy",
    q: "The focal length of a plane mirror is:",
    options: ["Infinite", "Zero", "Equal to object distance", "25 cm"], answer: 0,
    explanation: "A plane mirror has an infinite radius of curvature, hence infinite focal length." },

  { id: "ph32", subject: "physics", chapter: "p-optics", difficulty: "medium",
    q: "The critical angle C for a medium of refractive index μ in air satisfies:",
    options: ["sin C = 1/μ", "sin C = μ", "cos C = 1/μ", "tan C = μ"], answer: 0,
    explanation: "At critical angle, μ sin C = 1 × sin 90° ⇒ sin C = 1/μ." },

  { id: "ph33", subject: "physics", chapter: "p-modern", difficulty: "medium",
    q: "In the photoelectric effect, the stopping potential depends on:",
    options: ["Frequency of incident light", "Intensity of light", "Angle of incidence", "Area of the cathode"], answer: 0,
    explanation: "eV₀ = hν − φ, so V₀ depends on frequency, while intensity changes photocurrent." },

  { id: "ph34", subject: "physics", chapter: "p-modern", difficulty: "hard",
    q: "An alpha particle and a proton have the same kinetic energy. The ratio of their de Broglie wavelengths λ_α : λ_p is:",
    options: ["1 : 2", "1 : 1", "1 : 4", "2 : 1"], answer: 0,
    explanation: "λ = h/√(2mK); m_α = 4m_p, so λ_α/λ_p = √(m_p/m_α) = 1/2." },

  { id: "ph35", subject: "physics", chapter: "p-modern", difficulty: "medium",
    q: "The binding energy per nucleon is maximum for nuclei around:",
    options: ["Fe-56", "U-238", "He-4", "H-2"], answer: 0,
    explanation: "Binding energy per nucleon peaks near mass number 56 (iron region), making Fe-56 very stable." },

  { id: "ph36", subject: "physics", chapter: "p-semiconductors", difficulty: "easy",
    q: "Doping silicon with a pentavalent impurity produces:",
    options: ["n-type semiconductor", "p-type semiconductor", "An insulator", "An intrinsic semiconductor"], answer: 0,
    explanation: "Pentavalent atoms donate an extra electron, giving n-type (majority electrons)." }
];
