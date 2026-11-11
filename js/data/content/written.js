/* ===== Written exam Q&A bank: 4 tones per chapter =====
   short (2 marks), long (5 marks), application, competency
   Format: { short[], long[], application[], competency[] } each item {q, a} */

const WRITTEN_BANK = {
  /* ----------------------------- PHYSICS ----------------------------- */
  "p-unit-measure": {
    short: [
      { q: "Define dimensional formula.", a: "The expression showing the powers to which the base units must be raised to represent a derived quantity, e.g. force = [MLT⁻²]." },
      { q: "State the principle of homogeneity of dimensions.", a: "Every term in a physically correct equation must have the same dimensions; this allows equations to be checked and derived." }
    ],
    long: [
      { q: "Explain how errors are combined in a derived quantity with an example.", a: "For z = xᵃyᵇ/zᶜ, relative errors add with absolute exponents: Δz/z = |a|Δx/x + |b|Δy/y + |c|Δz/z. For the area of a circle measured as A = πr² with r = 5.0 ± 0.1 cm, ΔA/A = 2 × 0.1/5 = 4%, so A = 78.5 ± 3.1 cm²." }
    ],
    application: [
      { q: "A student claims a quantity has dimensions [ML²T⁻²] and calls it power. Is she right?", a: "No. [ML²T⁻²] is energy (or work, or torque). Power is energy per unit time, [ML²T⁻³]." }
    ],
    competency: [
      { q: "Design a method to measure the thickness of a thin sheet with a vernier calliper, and identify the main source of error.", a: "Measure the thickness of a stack of n identical sheets and divide by n, which reduces the zero error proportionally. The main error source is the instrument's least count and zero error; parallax is avoided by viewing perpendicular to the scale." }
    ]
  },
  "p-kinematics": {
    short: [
      { q: "Distinguish distance from displacement.", a: "Distance is the total path length (scalar); displacement is the shortest straight-line vector from start to finish. They are equal only for motion in one direction without reversal." }
    ],
    long: [
      { q: "Derive the three equations of motion for uniform acceleration using a velocity–time graph.", a: "From the v–t graph, slope gives a = (v − u)/t ⇒ v = u + at. The area under the graph gives s = ½(u + v)t; substituting v gives s = ut + ½at². Eliminating t from the first two gives v² = u² + 2as." }
    ],
    application: [
      { q: "A ball thrown up returns to the thrower after 6 s. Find the maximum height (g = 10 m/s²).", a: "Time up = 3 s; u = g t = 30 m/s; H = u²/2g = 900/20 = 45 m." }
    ],
    competency: [
      { q: "Two trains approach each other at 40 m/s each. A bird flies between them at 60 m/s. If they are 800 m apart, how far does the bird travel before the trains meet?", a: "Relative speed = 80 m/s, so time to meet = 800/80 = 10 s. Bird distance = 60 × 10 = 600 m." }
    ]
  },
  "p-laws-motion": {
    short: [
      { q: "State Newton's second law of motion.", a: "The rate of change of momentum of a body is directly proportional to the applied force and takes place in the direction of the force: F = dp/dt = ma for constant mass." }
    ],
    long: [
      { q: "Explain why walking is possible using Newton's third law.", a: "While walking, the foot pushes backward on the ground; the ground exerts an equal and opposite forward reaction on the foot. This reaction is the external force that accelerates the person forward. Friction between shoe and ground makes it possible — on ice, the reaction is insufficient and slipping occurs." }
    ],
    application: [
      { q: "A 60 kg person stands in a lift accelerating downward at 2 m/s². Find the apparent weight (g = 10).", a: "N = m(g − a) = 60 × 8 = 480 N, less than the true weight of 600 N." }
    ],
    competency: [
      { q: "Why do passengers lurch forward when a bus brakes suddenly, and why does the effect vanish if the bus moves at constant speed?", a: "By inertia, passengers tend to keep their forward velocity when the bus decelerates, so the bus slows beneath them. At constant velocity there is no change in motion, so no relative lurch occurs." }
    ]
  },
  "p-work-energy": {
    short: [
      { q: "Define a conservative force and give one example.", a: "A force is conservative if the work it does is path-independent and zero over a closed loop, so a potential energy can be defined. Example: gravitational force." }
    ],
    long: [
      { q: "State and prove the work-energy theorem for a constant force.", a: "For constant force F along displacement s, v² = u² + 2as ⇒ as = (v² − u²)/2. Work W = Fs = mas = m(v² − u²)/2 = ½mv² − ½mu² = ΔKE. Hence the net work done equals the change in kinetic energy. The result holds for variable forces when the integral ∫F·ds is used." }
    ],
    application: [
      { q: "A 2 kg block slides down a 5 m rough incline (30°) with friction 3 N. Find its speed at the bottom.", a: "Gravity work = mgh = 2 × 10 × 2.5 = 50 J; friction work = −3 × 5 = −15 J; net = 35 J = ½mv² ⇒ v = √35 ≈ 5.9 m/s." }
    ],
    competency: [
      { q: "Why is the work done by a centripetal force always zero, and what does that imply about circular motion?", a: "Centripetal force is perpendicular to the velocity at every instant, so cos90° = 0 and W = 0. Therefore the kinetic energy and speed stay constant in uniform circular motion; only the direction of velocity changes." }
    ]
  },
  "p-rotational": {
    short: [
      { q: "Define moment of inertia and state its SI unit.", a: "Moment of inertia is the rotational analogue of mass, I = Σmr²; it measures resistance to angular acceleration. SI unit: kg·m²." }
    ],
    long: [
      { q: "State and explain the parallel-axis theorem.", a: "I = I_cm + Md², where I_cm is the moment of inertia about an axis through the centre of mass and d is the distance to the parallel axis. The theorem follows because the cross term involving the centre of mass vanishes. It lets standard results be shifted to any parallel axis, e.g. a rod about its end: ML²/12 + M(L/2)² = ML²/3." }
    ],
    application: [
      { q: "A skater with I = 4 kg·m² at 2 rad/s folds her arms to I = 2 kg·m². Find her new angular velocity and the rotational KE change.", a: "L = Iω = 8 conserved ⇒ ω' = 4 rad/s. KE falls from 8 J to 16 J … no: KE = ½Iω² = 8 J → 16 J, which is supplied by the work she does pulling her arms in." }
    ],
    competency: [
      { q: "Why does a solid sphere beat a ring to the bottom of the same incline?", a: "Rolling acceleration a = g sinθ/(1 + I/mR²). For a solid sphere I/mR² = 0.4, for a ring it is 1.0, so the sphere has the larger acceleration and arrives first, independent of mass and radius." }
    ]
  },
  "p-gravitation": {
    short: [
      { q: "State Newton's universal law of gravitation.", a: "Every particle attracts every other with a force F = Gm₁m₂/r² directed along the line joining them, where G = 6.67 × 10⁻¹¹ N·m²/kg²." }
    ],
    long: [
      { q: "Derive the expression for escape velocity and explain its physical meaning.", a: "Total energy at the surface must be at least zero to escape: ½mv² − GMm/R = 0 ⇒ v = √(2GM/R) = √(2gR) ≈ 11.2 km/s for Earth. It is the minimum launch speed for which the body never returns, and it is independent of the body's mass and direction (ignoring air resistance and rotation)." }
    ],
    application: [
      { q: "At what height is g reduced to 1% of its surface value?", a: "g' = g(R/(R+h))² = 0.01g ⇒ R/(R+h) = 0.1 ⇒ h = 9R ≈ 57,600 km." }
    ],
    competency: [
      { q: "Why is there no atmosphere on the Moon?", a: "The Moon's escape velocity (≈2.4 km/s) is much lower than the thermal speeds of gas molecules, so atmospheric gases leaked away over geological time." }
    ]
  },
  "p-properties-solids": {
    short: [
      { q: "Define Young's modulus.", a: "The ratio of longitudinal stress to longitudinal strain within the elastic limit: Y = (F/A)/(ΔL/L), measured in N/m²." }
    ],
    long: [
      { q: "Describe the stress–strain curve for a metal and mark the key points.", a: "Initially stress is proportional to strain (Hooke's law, straight line). The proportional limit is where linearity ends; the elastic limit is the maximum stress with no permanent set. Beyond the yield point, plastic deformation occurs with a small stress increase, and the curve peaks at the ultimate tensile strength before fracture at the breaking point. Ductile materials show a long plastic region; brittle ones fracture near the elastic limit." }
    ],
    application: [
      { q: "Two wires of the same material have lengths in ratio 1:2 and radii 1:2. Compare their elongations under the same load.", a: "ΔL = FL/AY ∝ L/r². Ratio = (1/1) : (2/4) = 1 : 0.5, so the longer, thicker wire stretches half as much." }
    ],
    competency: [
      { q: "Why is a hollow pipe stronger than a solid rod of the same mass for bending?", a: "Bending strength depends on the material's distance from the axis (second moment of area). A hollow pipe places more material far from the axis, giving a higher second moment for the same mass, so it resists bending better." }
    ]
  },
  "p-properties-fluids": {
    short: [
      { q: "State Archimedes' principle.", a: "A body immersed wholly or partly in a fluid experiences an upward buoyant force equal to the weight of the fluid it displaces." }
    ],
    long: [
      { q: "State and explain Bernoulli's theorem with its assumptions.", a: "For steady, incompressible, non-viscous, irrotational flow along a streamline, P + ½ρv² + ρgh = constant. It follows from applying the work-energy theorem to a fluid element: the work done by pressure differences changes kinetic and potential energies. Applications include the Venturi meter, aerofoil lift and the atomiser." }
    ],
    application: [
      { q: "A block of density 800 kg/m³ floats in water. What fraction of it is submerged?", a: "ρ_body/ρ_water = 800/1000 = 0.8, so 80% is submerged." }
    ],
    competency: [
      { q: "Why does a ship made of iron float while an iron nail sinks?", a: "A ship is hollow, so its average density (mass/volume including the air spaces) is less than that of water; the buoyant force on the displaced water equals its weight. A nail is solid iron, denser than water, so the buoyant force cannot balance its weight." }
    ]
  },
  "p-thermal": {
    short: [
      { q: "State the first law of thermodynamics.", a: "The heat supplied to a system equals the increase in internal energy plus the work done by the system: Q = ΔU + W." }
    ],
    long: [
      { q: "Derive the efficiency of a Carnot engine and explain why it is the maximum possible.", a: "For the isothermal and adiabatic cycle between T₁ (hot) and T₂ (cold), Q₁/T₁ = Q₂/T₂, so η = 1 − Q₂/Q₁ = 1 − T₂/T₁. No engine operating between the same two reservoirs can exceed this, because any higher efficiency would allow a composite engine to violate the second law. η = 100% needs T₂ = 0 K, which is unattainable." }
    ],
    application: [
      { q: "Find the heat needed to convert 10 g of ice at −10 °C into water at 20 °C (c_ice = 0.5, L = 80, c_water = 1 cal/g°C).", a: "Ice to 0 °C: 10 × 0.5 × 10 = 50 cal; melt: 10 × 80 = 800 cal; warm: 10 × 1 × 20 = 200 cal; total = 1050 cal." }
    ],
    competency: [
      { q: "Why does a pressure cooker cook food faster?", a: "Trapping steam raises the pressure, which raises the boiling point of water, so food cooks at a higher temperature; the rate of cooking reactions increases roughly exponentially with temperature." }
    ]
  },
  "p-kinetic-theory": {
    short: [
      { q: "Define rms speed of gas molecules.", a: "The square root of the mean of the squares of molecular speeds: v_rms = √(3RT/M) = √(3k_BT/m)." }
    ],
    long: [
      { q: "Derive the pressure exerted by an ideal gas using kinetic theory.", a: "Consider a cubical box of side L with N molecules. Each collision with a wall reverses the molecular momentum component, giving momentum change 2mv_x and a collision frequency v_x/2L. Summing over all molecules, the total force on the wall is (N m v_x²)/L, so P = (1/3)(Nm/L³)v_rms² = (1/3)ρv_rms². Using PV = nRT reproduces the ideal gas law and shows ½mv_rms² = (3/2)k_BT." }
    ],
    application: [
      { q: "At what temperature does the rms speed of O₂ equal that of H₂ at 300 K?", a: "v ∝ √(T/M). Equal speeds need T_O₂/32 = 300/2 ⇒ T_O₂ = 32 × 150 = 4800 K." }
    ],
    competency: [
      { q: "Why does the temperature of a gas not change during free expansion into vacuum?", a: "No work is done (no external pressure) and no heat enters (insulated), so by the first law ΔU = 0. For an ideal gas internal energy depends only on temperature, so the temperature stays constant." }
    ]
  },
  "p-oscillations": {
    short: [
      { q: "Define simple harmonic motion.", a: "Motion in which acceleration is directly proportional to displacement from the mean position and directed towards it: a = −ω²x." }
    ],
    long: [
      { q: "Derive the time period of a simple pendulum for small oscillations.", a: "Restoring torque = −mgL sinθ; for small θ, sinθ ≈ θ, so torque ≈ −mgLθ. Since τ = Iα = mL²(d²θ/dt²), we get d²θ/dt² = −(g/L)θ, which is SHM with ω² = g/L. Hence T = 2π√(L/g), independent of mass and, for small angles, of amplitude." }
    ],
    application: [
      { q: "A spring-mass system has T = 2 s. What happens to T if the mass is quadrupled?", a: "T = 2π√(m/k) ∝ √m, so quadrupling m doubles T to 4 s." }
    ],
    competency: [
      { q: "Why does a pendulum clock run slow on the Moon?", a: "g on the Moon is about 1/6 of Earth's, so T = 2π√(L/g) increases by √6. Each swing takes longer, so the clock ticks the same count in more time — it loses time." }
    ]
  },
  "p-electrostatics": {
    short: [
      { q: "State Coulomb's law.", a: "The force between two point charges is F = kq₁q₂/r², directly proportional to the product of charges and inversely proportional to the square of their separation, acting along the line joining them." }
    ],
    long: [
      { q: "Derive the energy stored in a capacitor and give two applications.", a: "Work done to add charge dq at potential V = q/C is dW = (q/C)dq; integrating from 0 to Q gives U = Q²/2C = ½CV² = ½QV. Applications: camera flash (rapid discharge), defibrillators, and smoothing filters in rectifiers (energy buffer)." }
    ],
    application: [
      { q: "Three 6 μF capacitors are connected in series across 12 V. Find the charge on each.", a: "C_eq = 6/3 = 2 μF; Q = CV = 24 μC, the same on each series capacitor." }
    ],
    competency: [
      { q: "Why is the electric field inside a hollow charged conductor zero, and why does this matter for shielding?", a: "Charges on a conductor reside on the outer surface and rearrange until the interior field cancels. Any cavity is therefore field-free, which is the basis of Faraday cages used to shield sensitive electronics and to protect against lightning." }
    ]
  },
  "p-current": {
    short: [
      { q: "State Ohm's law.", a: "At constant temperature, the current through a conductor is directly proportional to the potential difference across it: V = IR." }
    ],
    long: [
      { q: "Explain the principle of a potentiometer and why it is preferred for measuring EMF.", a: "A steady potential gradient is set up along a uniform wire by a driver cell. The unknown EMF is balanced against the potential drop over a length l: ε = k l. At balance no current is drawn from the cell under test, so its terminal voltage is not reduced by internal resistance — unlike a voltmeter, which always draws some current. This makes the potentiometer a null method and therefore more accurate." }
    ],
    application: [
      { q: "A 6 V battery with 1 Ω internal resistance drives a 5 Ω load. Find the terminal voltage.", a: "I = 6/(5+1) = 1 A; V = ε − Ir = 6 − 1 = 5 V." }
    ],
    competency: [
      { q: "Why do household appliances run in parallel rather than in series?", a: "In parallel each appliance gets the full supply voltage independent of others, can be switched separately, and a failure in one does not break the circuit. In series, one failure opens the whole circuit and each device would get a fraction of the mains voltage." }
    ]
  },
  "p-magnetism": {
    short: [
      { q: "Write the expression for the magnetic force on a moving charge and explain each symbol.", a: "F = q(v × B) = qvB sinθ, where q is charge, v velocity, B flux density and θ the angle between v and B. The force is perpendicular to both v and B." }
    ],
    long: [
      { q: "Describe the motion of a charged particle entering a uniform magnetic field at an angle, and derive the pitch of its helical path.", a: "Resolve v into components parallel and perpendicular to B. The perpendicular component causes circular motion of radius r = mv⊥/qB while the parallel component v∥ is unaffected. The superposition is a helix with pitch p = v∥T = v∥(2πm/qB). If v is parallel to B, the path is a straight line; if perpendicular, a circle." }
    ],
    application: [
      { q: "A proton and an electron enter the same magnetic field with the same speed perpendicular to it. Compare their radii.", a: "r = mv/qB; q is the same magnitude, so r ∝ m. The proton's radius is about 1836 times larger, and the two curve in opposite directions." }
    ],
    competency: [
      { q: "How does a cyclotron work, and why can it not accelerate electrons effectively?", a: "An alternating voltage across the dees is synchronised with the particle's orbital period T = 2πm/qB, which is independent of speed, so the particle gains energy at every gap. Electrons have very small mass, so they reach relativistic speeds quickly; the mass increase then destroys the resonance. They are also hard to keep in a small radius." }
    ]
  },
  "p-emi": {
    short: [
      { q: "State Faraday's law of electromagnetic induction.", a: "The induced EMF in a coil equals the negative rate of change of magnetic flux through it: ε = −N dΦ/dt." }
    ],
    long: [
      { q: "Explain Lenz's law and show that it is a consequence of energy conservation.", a: "The induced current flows so as to oppose the change in flux producing it. If it aided the change, the induced current would increase the flux, which would increase the current, producing energy from nothing. Opposing the change requires work by the external agent, and that work appears as electrical energy — hence conservation of energy." }
    ],
    application: [
      { q: "A coil of 50 turns and area 0.02 m² is in a field that drops from 0.4 T to 0 in 0.1 s. Find the induced EMF.", a: "ΔΦ = 0.4 × 0.02 = 8×10⁻³ Wb; ε = NΔΦ/t = 50 × 8×10⁻³/0.1 = 4 V." }
    ],
    competency: [
      { q: "Why does a transformer not work on DC?", a: "A transformer relies on a changing flux to induce an EMF in the secondary. DC produces a constant flux, so dΦ/dt = 0 and no EMF is induced; the primary also behaves as a short circuit and may burn out." }
    ]
  },
  "p-em-waves": {
    short: [
      { q: "State two properties of electromagnetic waves.", a: "They are transverse, travel at c = 3×10⁸ m/s in vacuum, need no medium, carry oscillating E and B perpendicular to each other and to propagation, and follow E₀/B₀ = c." }
    ],
    long: [
      { q: "Name the parts of the electromagnetic spectrum in order and give one use of each.", a: "Radio (broadcasting), microwave (radar, ovens), infrared (remote controls, thermography), visible (vision, photography), ultraviolet (sterilisation, vitamin D synthesis), X-rays (medical imaging), gamma rays (cancer therapy, sterilisation). Frequency increases and wavelength decreases from radio to gamma." }
    ],
    application: [
      { q: "A radar signal returns after 40 μs. How far away is the object?", a: "Distance = c × t / 2 = 3×10⁸ × 40×10⁻⁶ / 2 = 6000 m = 6 km." }
    ],
    competency: [
      { q: "Why is ultraviolet light harmful while visible light from the same Sun is not?", a: "UV photons carry more energy (E = hν) because of their shorter wavelength. That energy is enough to break chemical bonds in DNA and proteins, causing sunburn and mutations, whereas visible photons lack the energy to ionise or break most bonds." }
    ]
  },
  "p-optics": {
    short: [
      { q: "State the laws of reflection.", a: "The angle of incidence equals the angle of reflection, and the incident ray, reflected ray and normal all lie in the same plane." }
    ],
    long: [
      { q: "Derive the lens maker's formula for a thin lens.", a: "Refraction at the first surface gives 1/v₁ − 1/u = (μ − 1)/R₁, and at the second surface 1/v − 1/v₁ = (1 − μ)/R₂. Adding eliminates v₁: 1/v − 1/u = (μ − 1)(1/R₁ − 1/R₂). For a lens in air with 1/v − 1/u = 1/f, we get 1/f = (μ − 1)(1/R₁ − 1/R₂), valid for thin lenses and paraxial rays." }
    ],
    application: [
      { q: "An object is 30 cm from a converging lens of f = 20 cm. Where is the image and what is its magnification?", a: "1/v = 1/f + 1/u with sign convention: 1/v − 1/(−30) = 1/20 ⇒ v = 60 cm, real. m = v/u = 60/(−30) = −2, so it is inverted and twice as large." }
    ],
    competency: [
      { q: "Why does the sky appear blue while the setting Sun appears red?", a: "Rayleigh scattering intensity varies as 1/λ⁴, so short blue wavelengths scatter far more than red. Looking away from the Sun we see scattered blue light. At sunset, the path through the atmosphere is long, so blue light is scattered away and the transmitted light is dominated by red." }
    ]
  },
  "p-modern": {
    short: [
      { q: "State Einstein's photoelectric equation.", a: "hν = φ + eV₀, where φ is the work function and eV₀ the maximum kinetic energy of the emitted photoelectron." }
    ],
    long: [
      { q: "Explain the laws of the photoelectric effect and why they require a photon model of light.", a: "The effect is instantaneous, the saturation current is proportional to intensity, and the maximum kinetic energy depends only on frequency, not intensity. A wave model fails: dim light should need a delay to accumulate energy, and intensity should control energy. The photon model explains all three — one photon transfers its energy hν to one electron; only photons with hν > φ can eject electrons, and their excess energy becomes kinetic energy independent of intensity." }
    ],
    application: [
      { q: "Light of 400 nm falls on a metal with φ = 2.0 eV. Find the maximum kinetic energy of the emitted electrons.", a: "E = 1240/400 = 3.1 eV; KE_max = 3.1 − 2.0 = 1.1 eV." }
    ],
    competency: [
      { q: "Why are nuclear forces short-ranged while electromagnetic forces are long-ranged, and how does this explain nuclear stability?", a: "The strong nuclear force acts over a few fermis and is attractive but saturates, while the Coulomb repulsion between protons is long-ranged and acts on every proton. In heavy nuclei the total repulsion grows faster than the strong binding, so binding energy per nucleon falls beyond Fe-56, leading to instability and fission for the heaviest nuclei." }
    ]
  },
  "p-semiconductors": {
    short: [
      { q: "Define a p-type semiconductor.", a: "A semiconductor doped with a trivalent impurity, giving holes as majority carriers while remaining electrically neutral." }
    ],
    long: [
      { q: "Explain the working of a p–n junction diode under forward and reverse bias.", a: "At the junction, diffusion forms a depletion region with a built-in field. Under forward bias the applied voltage opposes the barrier, narrowing the depletion layer; beyond ~0.7 V (Si) the barrier collapses and current flows, rising exponentially. Under reverse bias the barrier widens, only a small leakage current from minority carriers flows, and at a large reverse voltage breakdown occurs. The diode therefore conducts in one direction — a rectifier." }
    ],
    application: [
      { q: "Why is a Zener diode used in reverse bias as a voltage regulator?", a: "In reverse bias beyond the Zener voltage a large change in current produces almost no change in voltage, so it clamps the load voltage to a fixed value." }
    ],
    competency: [
      { q: "Compare a half-wave and a full-wave rectifier in terms of efficiency and ripple frequency.", a: "A half-wave rectifier uses one diode and passes one half-cycle, with ripple frequency equal to the supply frequency (50 Hz) and lower efficiency. A full-wave rectifier uses two diodes (centre tap) or four (bridge), passes both halves, doubles the ripple frequency to 100 Hz and has about twice the efficiency, so it is preferred for power supplies." }
    ]
  },

  /* ----------------------------- CHEMISTRY ----------------------------- */
  "c-basic": {
    short: [
      { q: "Define a mole.", a: "A mole is the amount of substance containing as many entities as there are atoms in 12 g of carbon-12, i.e. 6.022 × 10²³ particles." }
    ],
    long: [
      { q: "Explain how to determine an empirical and molecular formula from percentage composition.", a: "Convert percentage masses to moles by dividing by atomic masses, then divide all by the smallest to get the simplest ratio — the empirical formula. Determine the empirical formula mass and divide the experimentally determined molar mass by it to get n. The molecular formula is (empirical formula)ₙ. For example, a compound with 40% C, 6.7% H and 53.3% O gives CH₂O; if M = 180, n = 6 and the formula is C₆H₁₂O₆." }
    ],
    application: [
      { q: "How many molecules are in 4.4 g of CO₂?", a: "n = 4.4/44 = 0.1 mol ⇒ 6.022 × 10²² molecules." }
    ],
    competency: [
      { q: "Why is molality preferred over molarity in colligative property calculations?", a: "Molality uses mass of solvent, which is unaffected by temperature, whereas molarity depends on solution volume that expands with temperature. Colligative properties are measured across a temperature range, so molality gives a concentration that stays constant." }
    ]
  },
  "c-atom": {
    short: [
      { q: "State the Pauli exclusion principle.", a: "No two electrons in an atom can have the same set of all four quantum numbers; equivalently, an orbital can hold at most two electrons with opposite spins." }
    ],
    long: [
      { q: "Explain the limitations of Bohr's model and how quantum mechanics improved on it.", a: "Bohr's model works only for hydrogen-like atoms, cannot explain fine structure or intensities of spectral lines, and contradicts Heisenberg's uncertainty principle by assuming definite circular orbits with fixed radii and simultaneous position–velocity. Quantum mechanics replaces orbits with probability clouds (orbitals) described by ψ; it explains multi-electron spectra, splitting in magnetic fields and electron spin." }
    ],
    application: [
      { q: "Calculate the energy of the electron in the third Bohr orbit of hydrogen.", a: "E₃ = −13.6/9 = −1.51 eV." }
    ],
    competency: [
      { q: "Why is the ionisation enthalpy of a noble gas the highest in its period?", a: "A noble gas has a complete octet with a high effective nuclear charge and no vacant or half-filled stability gains to reach, so removing an electron from a closed shell requires much more energy than for other elements in the period." }
    ]
  },
  "c-periodic": {
    short: [
      { q: "State the modern periodic law.", a: "The physical and chemical properties of elements are a periodic function of their atomic number." }
    ],
    long: [
      { q: "Explain the trends in atomic radius and ionisation enthalpy across a period and down a group.", a: "Across a period, the nuclear charge increases while electrons enter the same shell, so Z_eff rises and the radius contracts; consequently ionisation enthalpy and electronegativity increase. Down a group, new shells are added, so the radius grows and the outer electron is further from the nucleus and better shielded; ionisation enthalpy therefore decreases. Anomalies such as Mg > Al and N > O arise from electron-pair repulsion and half-filled shell stability." }
    ],
    application: [
      { q: "Arrange Na⁺, Mg²⁺, Al³⁺ and Ne in increasing order of ionic radius.", a: "All are isoelectronic (10 electrons); radius decreases as nuclear charge increases: Al³⁺ < Mg²⁺ < Na⁺ < Ne." }
    ],
    competency: [
      { q: "Why does aluminium have a lower ionisation enthalpy than magnesium?", a: "Mg has a stable half-filled 3s² configuration; removing its outer electron destroys that stability. Al's 3p¹ electron is at higher energy and better shielded by the 3s² pair, so it is easier to remove." }
    ]
  },
  "c-bonding": {
    short: [
      { q: "Define hybridisation.", a: "Hybridisation is the mixing of atomic orbitals of similar energy to form an equal number of hybrid orbitals of equivalent energy and shape that give better overlap and stronger bonds." }
    ],
    long: [
      { q: "Use VSEPR theory to explain the shapes of CH₄, NH₃ and H₂O.", a: "The central atom has four electron pairs in each case, giving a tetrahedral base arrangement. In CH₄ all pairs are bond pairs with no repulsion, so the angle is 109.5° and the molecule is tetrahedral. In NH₃ one lone pair repels more strongly than bond pairs, compressing the angle to 107° and giving a trigonal pyramidal shape. In H₂O two lone pairs compress it further to 104.5°, making the molecule bent. Lone-pair repulsion order: lone–lone > lone–bond > bond–bond." }
    ],
    application: [
      { q: "Why is CO₂ nonpolar though the C=O bonds are polar?", a: "The molecule is linear, so the two equal dipole moments point in opposite directions and cancel vectorially; the net dipole moment is zero." }
    ],
    competency: [
      { q: "Why is HF a weaker acid than HCl despite fluorine being more electronegative?", a: "The H–F bond has a very high bond enthalpy, so dissociation is energetically costly, and F⁻ is heavily hydrated, which reduces the driving force. In HCl the H–Cl bond is much weaker and the larger Cl⁻ is less strongly solvated, so proton release and stabilisation favour HCl as the stronger acid." }
    ]
  },
  "c-states": {
    short: [
      { q: "State Hess's law.", a: "The enthalpy change of a reaction is the same regardless of the route taken, provided the initial and final states are identical." }
    ],
    long: [
      { q: "Explain the significance of ΔG and the conditions for spontaneity.", a: "ΔG = ΔH − TΔS determines spontaneity at constant temperature and pressure. If ΔG < 0 the process is spontaneous; if ΔG > 0 it is non-spontaneous; at ΔG = 0 the system is at equilibrium. Exothermic reactions with positive ΔS are always spontaneous, while endothermic reactions are only spontaneous at high temperature when the entropy term dominates — the reverse of the exothermic and negative-ΔS case." }
    ],
    application: [
      { q: "For ΔH = +50 kJ and ΔS = +150 J/K, above what temperature is the reaction spontaneous?", a: "Spontaneous when T > ΔH/ΔS = 50,000/150 ≈ 333 K." }
    ],
    competency: [
      { q: "Why does water spontaneously freeze below 0 °C even though freezing has ΔS < 0?", a: "Freezing releases heat (ΔH is negative) and the surroundings gain more entropy than the water loses. Spontaneity is judged by ΔS_total = ΔS_system + ΔS_surroundings, not the system alone; below 0 °C the surroundings' entropy gain dominates, so ΔG < 0." }
    ]
  },
  "c-equilibrium": {
    short: [
      { q: "State Le Chatelier's principle.", a: "When a system at equilibrium is disturbed by a change in concentration, pressure or temperature, it shifts in the direction that partly counteracts the disturbance." }
    ],
    long: [
      { q: "Explain how a buffer solution resists pH change using the acetic acid–sodium acetate system.", a: "The buffer contains CH₃COOH (weak acid, reserves conjugate base) and CH₃COO⁻ (reserves acid). Added H⁺ is consumed by acetate to form more acetic acid; added OH⁻ is neutralised by acetic acid to form acetate. In each case the ratio [salt]/[acid] changes very little, so by pH = pK_a + log([salt]/[acid]) the pH barely moves. Buffers work best near pH = pK_a, where the ratio is about 1." }
    ],
    application: [
      { q: "Predict the shift when pressure is increased for 2SO₂ + O₂ ⇌ 2SO₃.", a: "Forward — 3 moles of gas become 2, so higher pressure favours the products." }
    ],
    competency: [
      { q: "Why does adding an inert gas at constant volume not shift an equilibrium?", a: "The partial pressures of the reacting species depend on their mole fractions; adding inert gas at constant volume does not change any partial pressure, so there is no change in the reaction quotient and no shift." }
    ]
  },
  "c-redox": {
    short: [
      { q: "Define oxidation number.", a: "The charge an atom would carry if all its bonds were treated as purely ionic, assigned by a consistent set of rules." }
    ],
    long: [
      { q: "Balance the reaction MnO₄⁻ + Fe²⁺ → Mn²⁺ + Fe³⁺ in acidic medium by the ion-electron method.", a: "Oxidation half: Fe²⁺ → Fe³⁺ + e⁻. Reduction half: MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O. Multiply the oxidation half by 5 to equalise electrons: 5Fe²⁺ → 5Fe³⁺ + 5e⁻. Add and cancel electrons: MnO₄⁻ + 8H⁺ + 5Fe²⁺ → Mn²⁺ + 4H₂O + 5Fe³⁺, which is also charge balanced (+17 on both sides)." }
    ],
    application: [
      { q: "Find the oxidation state of S in H₂SO₄.", a: "2(+1) + x + 4(−2) = 0 ⇒ x = +6." }
    ],
    competency: [
      { q: "Why can H₂O₂ act as both an oxidising and a reducing agent?", a: "Oxygen in H₂O₂ is in the −1 state, intermediate between 0 (in O₂) and −2 (in water). It can therefore be oxidised to O₂ (acting as a reducing agent) or reduced to H₂O (acting as an oxidising agent)." }
    ]
  },
  "c-hydrogen": {
    short: [
      { q: "Name the three isotopes of hydrogen.", a: "Protium (¹H), deuterium (²H or D) and tritium (³H or T)." }
    ],
    long: [
      { q: "Describe the different types of hydrides with examples.", a: "Ionic (saline) hydrides form with alkali and alkaline earth metals, contain H⁻ and are conducting in the molten state, e.g. NaH, CaH₂. Covalent hydrides form with p-block elements, are volatile molecular compounds, e.g. CH₄, NH₃, H₂O. Metallic or interstitial hydrides form with transition metals where hydrogen occupies interstitial sites, e.g. PdH₀.₆, and are often non-stoichiometric. Complex hydrides such as LiAlH₄ are strong reducing agents." }
    ],
    application: [
      { q: "Why is H₂O₂ stored in dark-coloured bottles?", a: "Light catalyses its decomposition to water and oxygen, so dark bottles and the addition of stabilisers slow the loss of strength." }
    ],
    competency: [
      { q: "Why is lithium considered atypical among alkali metals?", a: "Lithium has the highest ionisation enthalpy, is the least reactive with water, forms covalent-character organolithium compounds, reacts directly with nitrogen to give Li₃N, and shows anomalous behaviour shown by the diagonal relationship with magnesium." }
    ]
  },
  "c-pblock": {
    short: [
      { q: "Why is boron a non-metal while aluminium is a metal?", a: "Boron's small atomic size and high ionisation enthalpy make it electron-deficient and covalent, while aluminium's larger size and lower ionisation enthalpy allow metallic bonding." }
    ],
    long: [
      { q: "Compare the properties of carbon and silicon, and explain the difference in their oxides.", a: "Carbon has strong C–C and C–O multiple bonds, allowing both small molecules (CO₂) and giant lattices (diamond, graphite); silicon has weak Si–Si and poor multiple bonding, so it forms large molecular frameworks like SiO₂. CO₂ is a discrete linear molecule, a gas at room temperature, and is acidic; SiO₂ is a giant covalent solid with a high melting point and does not react with water, though it is acidic towards strong alkali." }
    ],
    application: [
      { q: "Why is graphite used as a lubricant?", a: "Its layers are held by weak van der Waals forces and can slide over each other, while the delocalised electrons make it electrically conducting." }
    ],
    competency: [
      { q: "Why does SiCl₄ hydrolyse rapidly while CCl₄ does not?", a: "Silicon has vacant 3d orbitals and a larger atom, so water can attack the Si centre in a favourable nucleophilic substitution. Carbon has no available d orbitals and a smaller, crowded tetrahedral centre, so it has no accessible pathway for hydrolysis." }
    ]
  },
  "c-organic-basic": {
    short: [
      { q: "Define isomerism and name its main types.", a: "Isomerism is the existence of compounds with the same molecular formula but different structures: structural (chain, position, functional group) and stereoisomerism (geometrical, optical)." }
    ],
    long: [
      { q: "Explain the inductive, resonance and hyperconjugation effects with one example each.", a: "The inductive effect is the permanent polarisation of a σ bond by an electronegative atom or group, e.g. Cl pulls electron density in chloroacetic acid, making it more acidic than acetic acid. The resonance effect is delocalisation of π electrons through conjugation, e.g. the carboxylate ion is stabilised by two equivalent structures. Hyperconjugation is stabilisation by σ(C–H) electrons delocalising into an adjacent empty or partly filled orbital, e.g. it explains the stability order of carbocations 3° > 2° > 1°." }
    ],
    application: [
      { q: "Number of stereoisomers of 2,3-dichlorobutane?", a: "Two chiral centres give 2² = 4 possibilities, but the (2R,3S) form is meso; the total is 3, comprising a meso diastereomer and one enantiomeric pair." }
    ],
    competency: [
      { q: "Why is benzoic acid more acidic than acetic acid?", a: "In benzoic acid the carboxylate anion is conjugated with the aromatic ring, and the negative charge is delocalised over the ring carbons as well as both oxygens. Acetic acid's anion delocalises only over the two oxygens, so benzoate is more stabilised and the acid is stronger." }
    ]
  },
  "c-hydrocarbons": {
    short: [
      { q: "State Markovnikov's rule.", a: "In the electrophilic addition of HX to an unsymmetrical alkene, the hydrogen goes to the carbon with more hydrogens and the halogen to the more substituted carbon." }
    ],
    long: [
      { q: "Explain the mechanism of electrophilic addition to an alkene with an example.", a: "The π electrons attack the electrophile to form a carbocation intermediate after H⁺ transfer (for HX). The stability of the carbocation determines the regiochemistry, so the more substituted carbocation forms preferentially, which is the basis of Markovnikov's rule. The bromide then attacks the carbocation to form the product. In the presence of peroxide, the reaction proceeds by a free-radical mechanism, giving the anti-Markovnikov product." }
    ],
    application: [
      { q: "Product of hydration of propene in acid?", a: "2-propanol (Markovnikov addition of water)." }
    ],
    competency: [
      { q: "Why does benzene undergo substitution rather than addition?", a: "Aromatic stabilisation makes the ring's delocalised π system worth about 150 kJ/mol. Addition would destroy the aromaticity and give a non-aromatic product, so the pathway is energetically unfavourable. Substitution replaces a hydrogen while the ring regains aromaticity after the intermediate, so it is preferred." }
    ]
  },
  "c-solid-state": {
    short: [
      { q: "Define a unit cell.", a: "The smallest repeating portion of a crystal lattice that, when translated in three dimensions, generates the entire crystal." }
    ],
    long: [
      { q: "Derive the density formula for a cubic crystal and explain each term.", a: "Mass of one unit cell = Z × M/N_A, where Z is atoms per cell and M molar mass. Volume of a cubic cell = a³. Hence d = ZM/(a³N_A). Using measured density and cell edge, the formula lets you determine Z and hence the type of cubic lattice — for example, Z = 4 identifies fcc and Z = 2 bcc." }
    ],
    application: [
      { q: "Calculate the number of unit cells in 5.85 g of NaCl (M = 58.5, Z = 4).", a: "Moles = 0.1, so 6.022 × 10²² formula units; cells = 6.022×10²²/4 ≈ 1.5 × 10²²." }
    ],
    competency: [
      { q: "Why does NaCl conduct electricity when molten but not when solid?", a: "In the solid state the Na⁺ and Cl⁻ ions are locked in the lattice and cannot move. On melting the lattice breaks down and the ions become mobile charge carriers, so the liquid conducts." }
    ]
  },
  "c-electrochem": {
    short: [
      { q: "Define standard electrode potential.", a: "The potential developed when an electrode is in contact with a 1 M solution of its ions at 298 K and 1 bar, measured against the standard hydrogen electrode." }
    ],
    long: [
      { q: "Derive the Nernst equation for a cell reaction.", a: "ΔG = ΔG° + RT lnQ and ΔG = −nFE give −nFE = −nFE° + RT lnQ. Dividing by −nF: E = E° − (RT/nF) lnQ. At 298 K, RT/F × 2.303 = 0.0591, so E = E° − (0.059/n) logQ. The equation shows how the cell potential falls as products build up, and explains concentration cells." }
    ],
    application: [
      { q: "Find the EMF of Zn|Zn²⁺(0.1 M)||Cu²⁺(0.01 M)|Cu with E° = 1.10 V.", a: "E = 1.10 − (0.059/2)log([Zn²⁺]/[Cu²⁺]) = 1.10 − 0.0295 log10 = 1.07 V." }
    ],
    competency: [
      { q: "Why does a galvanic cell stop producing current after some time?", a: "As the reaction proceeds, the concentration of reactant ions falls and product ions rise, so by the Nernst equation E falls. At the same time polarisation and passivation may increase internal resistance. Eventually E reaches zero at equilibrium and the cell is 'dead'." }
    ]
  },
  "c-kinetics": {
    short: [
      { q: "Define order of a reaction.", a: "The sum of the exponents of the concentration terms in the experimentally determined rate law." }
    ],
    long: [
      { q: "Derive the integrated rate equation and half-life for a first-order reaction.", a: "Rate = −d[A]/dt = k[A] ⇒ d[A]/[A] = −k dt. Integrating from [A]₀ to [A]: ln([A]₀/[A]) = kt, or k = (2.303/t)log([A]₀/[A]). At half-life, [A] = [A]₀/2 ⇒ k = 2.303 log2/t½ = 0.693/t½. Hence t½ is independent of the initial concentration — a first-order reaction takes the same time to halve at every stage." }
    ],
    application: [
      { q: "A first-order reaction is 50% complete in 10 min. What fraction remains after 30 min?", a: "3 half-lives ⇒ (1/2)³ = 1/8 remains." }
    ],
    competency: [
      { q: "Why does a 10 °C rise in temperature roughly double the rate of many reactions?", a: "This is the empirical Arrhenius observation: k = Ae^(−Ea/RT). For typical activation energies near 50 kJ/mol, raising T by 10 K at room temperature increases the fraction of collisions with energy above Ea by about a factor of two." }
    ]
  },
  "c-dblock": {
    short: [
      { q: "Why are transition metals good catalysts?", a: "Their variable oxidation states and partially filled d orbitals allow them to form intermediates of suitable energy, providing a lower-activation-energy pathway for reactions." }
    ],
    long: [
      { q: "Explain crystal field splitting and the colour of transition metal complexes.", a: "Ligands create an electrostatic field that splits the five d orbitals into a lower t₂g set and a higher e_g set, separated by Δ₀. When an electron is excited between these sets by absorbing visible light, the transmitted light appears as the complementary colour. The magnitude of Δ₀ depends on the metal's oxidation state and the ligand: strong-field ligands give large splitting, so the absorbed wavelength and the observed colour change. Ions with d⁰ or d¹⁰ configurations have no d–d transition and are colourless." }
    ],
    application: [
      { q: "Calculate the spin-only magnetic moment of Fe³⁺ in a high-spin complex.", a: "Fe³⁺ is d⁵ with 5 unpaired electrons: μ = √(5×7) = √35 ≈ 5.92 BM." }
    ],
    competency: [
      { q: "Why is [Ni(CN)₄]²⁻ diamagnetic while [NiCl₄]²⁻ is paramagnetic?", a: "CN⁻ is a strong-field ligand; the large Δ₀ forces pairing of the d⁸ electrons into a square planar low-spin configuration with no unpaired electrons. Cl⁻ is a weak-field ligand; the small splitting leaves two unpaired electrons in a tetrahedral high-spin configuration." }
    ]
  },
  "c-haloalkanes": {
    short: [
      { q: "Distinguish SN1 from SN2 reactions.", a: "SN1 is unimolecular, proceeds via a carbocation, is favoured at tertiary carbons and gives racemisation; SN2 is bimolecular, proceeds by backside attack, is favoured at primary carbons and gives inversion." }
    ],
    long: [
      { q: "Explain the SN2 mechanism with its stereochemistry and the effect of substrate structure.", a: "The nucleophile attacks the carbon from the side opposite the leaving group, forming a five-coordinate transition state in which both bonds are partially formed. The leaving group departs as the nucleophile bonds, inverting the configuration (Walden inversion). The rate depends on both substrate and nucleophile concentration. Steric crowding around the carbon blocks backside approach, so reactivity falls in the order CH₃X > 1° > 2° > 3°, and tertiary halides essentially never react by SN2." }
    ],
    application: [
      { q: "Which reacts faster with aqueous KOH: 1-bromobutane or 2-bromobutane?", a: "Both can react, but with strong nucleophile OH⁻ in a protic solvent the primary halide reacts faster by SN2; the secondary also competes with elimination." }
    ],
    competency: [
      { q: "Why do tertiary alkyl halides undergo elimination with strong bases?", a: "A strong base removes a β-hydrogen. For a tertiary carbon the SN2 pathway is blocked by steric hindrance and SN1 is slow at low temperature, so E2 elimination to the more substituted alkene (Saytzeff product) dominates." }
    ]
  },
  "c-carbonyl": {
    short: [
      { q: "Why are aldehydes more reactive than ketones towards nucleophilic addition?", a: "Aldehydes have less steric hindrance and only one electron-donating alkyl group, so the carbonyl carbon is more electrophilic and more accessible." }
    ],
    long: [
      { q: "Describe the aldol condensation with mechanism and conditions.", a: "In the presence of dilute alkali, the α-carbon of an aldehyde or ketone loses a proton to form an enolate, which attacks the carbonyl carbon of another molecule. The product is a β-hydroxy aldehyde or ketone (aldol). On heating, it loses water to form an α,β-unsaturated carbonyl compound. The reaction requires at least one α-hydrogen; compounds without α-hydrogens instead undergo the Cannizzaro reaction." }
    ],
    application: [
      { q: "Identify the compound giving a positive iodoform test but no Tollens' reaction.", a: "A methyl ketone such as acetone — it has a CH₃CO– group (iodoform positive) but is not an aldehyde, so Tollens' is negative." }
    ],
    competency: [
      { q: "Why is acetic acid more acidic than ethanol?", a: "After losing a proton, acetate delocalises the negative charge over two equivalent oxygen atoms by resonance, which is much more stabilising than the localised charge on ethoxide. The C=O group also withdraws electron density inductively, increasing the acidity by about ten orders of magnitude." }
    ]
  },
  "c-amines": {
    short: [
      { q: "Why are amines basic?", a: "The nitrogen atom has a lone pair that can accept a proton to form a substituted ammonium ion." }
    ],
    long: [
      { q: "Compare the basicity of ammonia, primary, secondary and tertiary amines in aqueous solution and explain.", a: "In water the order is usually 2° > 1° > 3° > NH₃. Alkyl groups donate electron density and stabilise the conjugate acid, increasing basicity relative to ammonia. However, tertiary amines are less solvated by water because there is no N–H for hydrogen bonding and steric crowding hinders solvation, which lowers their basicity below secondary amines. Aniline is far weaker owing to delocalisation of the lone pair into the ring." }
    ],
    application: [
      { q: "Arrange in increasing order of basicity: aniline, ethylamine, ammonia, diethylamine.", a: "Aniline < ammonia < ethylamine < diethylamine." }
    ],
    competency: [
      { q: "How would you distinguish a primary, secondary and tertiary amine in the laboratory?", a: "Use the Hinsberg test with benzenesulphonyl chloride: a primary amine gives a clear soluble sulfonamide with alkali, a secondary amine gives an insoluble sulfonamide, and a tertiary amine does not react. The carbylamine test is specific for primary amines (foul-smelling isocyanide), and nitrous acid gives a diazonium salt (1°), an oily nitrosamine (2°) or no reaction (3°)." }
    ]
  },
  "c-biomolecules": {
    short: [
      { q: "Define a reducing sugar.", a: "A sugar with a free anomeric carbon (aldehyde or ketone group) that can reduce Tollens' or Fehling's reagent, e.g. glucose, maltose and lactose." }
    ],
    long: [
      { q: "Describe the four levels of protein structure.", a: "Primary structure is the linear sequence of amino acids joined by peptide bonds. Secondary structure is local folding into α-helices and β-pleated sheets, stabilised by hydrogen bonds along the backbone. Tertiary structure is the overall 3D shape stabilised by hydrophobic interactions, disulphide bridges, salt bridges and hydrogen bonds between side chains. Quaternary structure is the assembly of multiple polypeptide subunits, as in haemoglobin." }
    ],
    application: [
      { q: "Why is sucrose non-reducing while maltose is reducing?", a: "In sucrose both anomeric carbons are involved in the glycosidic bond, so neither can open to the aldehyde form. Maltose has one free anomeric carbon, so it can reduce." }
    ],
    competency: [
      { q: "Why is the temperature range of a protein's function narrow, and what happens on boiling?", a: "Hydrogen bonds, hydrophobic interactions and salt bridges hold the folded structure together, and these are weak enough to be disrupted by small energy changes. On boiling, the increased kinetic energy breaks these interactions, the protein unfolds (denaturation) and its active site loses shape. Peptide bonds are not broken, but function is irreversibly lost in most cases." }
    ]
  },

  /* ----------------------------- BIOLOGY ----------------------------- */
  "b-living": {
    short: [
      { q: "Define taxonomy.", a: "The branch of science dealing with the characterisation, identification, classification and nomenclature of organisms." }
    ],
    long: [
      { q: "Explain plant and animal classification as proposed by Whittaker, describing the five kingdoms.", a: "Monera includes prokaryotes (bacteria, cyanobacteria) with no nucleus or organelles. Protista includes unicellular eukaryotes such as algae and protozoa. Fungi are multicellular eukaryotes with chitinous walls and absorptive heterotrophic nutrition. Plantae are multicellular photoautotrophs with cellulose walls and a tissue system. Animalia are multicellular heterotrophs lacking cell walls, with organ-system organisation and a nervous system. The classification uses cell structure, body organisation and mode of nutrition." }
    ],
    application: [
      { q: "A specimen has chitinous cell walls and obtains food by absorption. Which kingdom?", a: "Fungi." }
    ],
    competency: [
      { q: "Are viruses living? Justify with three points.", a: "Viruses show properties of both living and non-living entities. As living forms they have genetic material (DNA or RNA) and a capsid, can replicate inside a host cell, and can mutate and evolve. As non-living entities they are acellular, have no metabolism and cannot reproduce without a host. Most modern classifications treat them as a distinct acellular category outside the five kingdoms." }
    ]
  },
  "b-plant-kingdom": {
    short: [
      { q: "Define alternation of generations.", a: "The alternation between a haploid gametophyte phase that produces gametes and a diploid sporophyte phase that produces spores by meiosis." }
    ],
    long: [
      { q: "Compare bryophytes, pteridophytes, gymnosperms and angiosperms in terms of dominant phase, vascular tissue and seed formation.", a: "Bryophytes: gametophyte dominant, no vascular tissue, no seeds, need water for fertilisation. Pteridophytes: sporophyte dominant, vascular tissue present, no seeds, need water. Gymnosperms: sporophyte dominant, well-developed vascular tissue, naked seeds in cones, pollinated by wind. Angiosperms: sporophyte dominant, most advanced vascular tissue with vessels, seeds enclosed in fruits, and double fertilisation producing a triploid endosperm." }
    ],
    application: [
      { q: "Why are bryophytes called amphibians of the plant kingdom?", a: "They live on land but require water for the flagellated sperm to swim to the archegonium for fertilisation." }
    ],
    competency: [
      { q: "Why do angiosperms dominate most terrestrial habitats?", a: "They combine efficient water-conducting vessels, rapid photosynthesis with broad leaves, flowers for insect and animal pollination, and fruits that aid dispersal while protecting seeds, giving them high reproductive efficiency and adaptability." }
    ]
  },
  "b-animal-kingdom": {
    short: [
      { q: "Define coelom.", a: "A fluid-filled body cavity lined by mesoderm in which the internal organs are suspended; animals with it are coelomates." }
    ],
    long: [
      { q: "Describe the salient features of Arthropoda and explain its success.", a: "Arthropods have jointed appendages, a chitinous exoskeleton that is shed by moulting, segmented body divided into head, thorax and abdomen, an open circulatory system with haemocoel, and compound eyes. Their success comes from the exoskeleton, which protects and prevents desiccation; wings allowing dispersal; metamorphosis reducing competition between stages; and their small size with high reproductive output." }
    ],
    application: [
      { q: "An animal has a water vascular system and radial symmetry as an adult. Identify the phylum and one feature of its larva.", a: "Echinodermata; its larva is bilaterally symmetrical." }
    ],
    competency: [
      { q: "Why are insects so successful despite lacking a closed circulatory system?", a: "Insects deliver oxygen directly to tissues through a tracheal system of tubes, independent of the blood. The haemolymph's main job is nutrient transport, so a low-pressure open system suffices; this frees them from the metabolic cost of a high-pressure circulation while the tracheal network keeps gas exchange efficient." }
    ]
  },
  "b-cell": {
    short: [
      { q: "State the fluid mosaic model of the cell membrane.", a: "Proteins float in or remain attached to a fluid lipid bilayer; the membrane is dynamic and asymmetric, allowing lateral movement of its components." }
    ],
    long: [
      { q: "Describe the structure and functions of the mitochondrion.", a: "A mitochondrion is a double-membraned organelle about 0.5–1 μm long. The inner membrane folds into cristae, increasing surface area, and bears ATP-synthesising F₀–F₁ particles (oxysomes). The matrix holds enzymes for the Krebs cycle and mitochondrial DNA with ribosomes. Its functions are aerobic ATP production, the final stages of respiration, and contributions to apoptosis and calcium buffering. Its own nucleic acid and ribosomes support the endosymbiotic theory." }
    ],
    application: [
      { q: "A cell has many mitochondria, an extensive rough endoplasmic reticulum and ribosomes. What is its likely function?", a: "It is an actively synthesising, secreting cell requiring high ATP — for example, a pancreatic acinar cell secreting digestive enzymes." }
    ],
    competency: [
      { q: "Why is the nuclear envelope described as a selective barrier, and how does the cell overcome it?", a: "The nuclear envelope has a double membrane with nuclear pores that regulate the exchange of molecules. Small molecules diffuse freely, while large macromolecules such as mRNA and ribosomal subunits pass through the pore complexes with the help of transport signals, allowing tight control of gene expression separate from the cytoplasm." }
    ]
  },
  "b-biomolecules": {
    short: [
      { q: "Define a peptide bond.", a: "The C–N amide bond formed between the amino group of one amino acid and the carboxyl group of another, with loss of a water molecule." }
    ],
    long: [
      { q: "Explain the factors affecting enzyme activity.", a: "Each enzyme has an optimum temperature and pH at which its active site and interactions are ideal. Above the optimum, increased kinetic energy disturbs the weak bonds holding the tertiary structure, causing denaturation and a sharp fall in activity. Deviation from optimum pH alters the ionisation of amino acid side chains and the active-site charge. Substrate concentration raises the rate until the enzyme is saturated (V_max); beyond that only more enzyme helps. Inhibitors (competitive or non-competitive) and cofactors also modulate activity." }
    ],
    application: [
      { q: "Why does starch not form a true polymer of glucose in the same way cellulose does?", a: "Both are glucose polymers, but starch uses α-1,4 linkages with α-1,6 branching, while cellulose uses β-1,4 linkages. The different linkage changes the shape and digestibility, so starch is a digestible energy store while cellulose is structural and cannot be digested by humans." }
    ],
    competency: [
      { q: "Why is the shape of an enzyme described as 'complementary' rather than rigid?", a: "The active site is not a fixed lock but undergoes induced fit on substrate binding, moulding closer to the substrate for optimal contact and catalysis. This flexibility also lets the active site accommodate the transition state better than the substrate, lowering the activation energy further." }
    ]
  },
  "b-plant-physio": {
    short: [
      { q: "Write the overall equation of photosynthesis.", a: "6CO₂ + 12H₂O → C₆H₁₂O₆ + 6O₂ + 6H₂O, using light energy captured in the thylakoids." }
    ],
    long: [
      { q: "Describe the light reactions and the Calvin cycle, stating the products of each.", a: "In the light reactions on the thylakoid membrane, photosystem II splits water, releasing O₂ and electrons, and pumps protons to generate ATP and reduce NADP⁺ to NADPH. The Calvin cycle in the stroma uses ATP and NADPH: RuBP is carboxylated by Rubisco, the unstable intermediate splits into two molecules of phosphoglycerate, which are reduced to triose phosphate; regeneration of RuBP uses further ATP. Six turns fix one hexose." }
    ],
    application: [
      { q: "A C4 plant such as maize grows better in hot dry conditions than rice. Why?", a: "C4 plants concentrate CO₂ around Rubisco via the Hatch–Slack pathway, so photorespiration is suppressed and water use efficiency is high at high temperature." }
    ],
    competency: [
      { q: "Why does the rate of photosynthesis fall at very high light intensity and high temperature?", a: "Initially light intensity is limiting, so the rate rises. At high intensity another factor such as CO₂ concentration or the Calvin cycle's enzyme capacity becomes limiting. At high temperature enzymes including Rubisco lose activity and photorespiration rises, while stomata may close to conserve water, cutting CO₂ supply and further reducing the rate." }
    ]
  },
  "b-digestion": {
    short: [
      { q: "Name the enzyme acting on starch in the mouth and its product.", a: "Salivary amylase (ptyalin) acts on starch to form maltose." }
    ],
    long: [
      { q: "Describe the digestion and absorption of carbohydrates in the human alimentary canal.", a: "Starch digestion begins in the mouth with salivary amylase, producing maltose; the enzyme is inactivated by stomach acid. In the small intestine pancreatic amylase continues starch hydrolysis. Brush-border enzymes (maltase, sucrase, lactase) split disaccharides into monosaccharides. Glucose and galactose are absorbed by secondary active transport with Na⁺, and fructose by facilitated diffusion. Monosaccharides pass into the capillaries of the villi and travel to the liver via the hepatic portal vein." }
    ],
    application: [
      { q: "A person removes the gallbladder. How does this affect digestion?", a: "Without bile stored and released in a burst, fat emulsification is less efficient, so fat digestion and absorption are impaired, and larger undigested fat droplets may cause loose stools." }
    ],
    competency: [
      { q: "Why does the stomach not digest itself?", a: "Mucus secreted by goblet cells forms a protective lining, and bicarbonate in the mucus neutralises acid close to the surface. Pepsinogen is secreted as an inactive precursor activated by acid, so it is generated only in the lumen. The mucosal cells are also replaced frequently, and tight junctions prevent acid from leaking into the tissue." }
    ]
  },
  "b-breathing": {
    short: [
      { q: "Define residual volume.", a: "The volume of air remaining in the lungs after the most forceful expiration, about 1100–1200 mL; it cannot be exhaled." }
    ],
    long: [
      { q: "Explain the mechanism of breathing and the role of pressure changes.", a: "Inspiration is active: the diaphragm contracts and flattens while the external intercostals raise the ribs, increasing thoracic volume. This lowers intrapulmonary pressure below atmospheric, so air flows in. Expiration at rest is passive: the muscles relax, elastic recoil reduces thoracic volume, pressure rises above atmospheric and air flows out. Forced expiration recruits internal intercostals and abdominal muscles. The respiratory centre in the medulla regulates the rhythm." }
    ],
    application: [
      { q: "A person at high altitude shows rapid breathing. Is this helpful?", a: "Rapid breathing raises alveolar ventilation and helps maintain oxygen uptake despite the lower partial pressure at altitude, though it also causes more CO₂ loss and respiratory alkalosis, which the kidneys compensate for over days." }
    ],
    competency: [
      { q: "Using a spirometer, why can total lung capacity not be measured directly?", a: "A spirometer measures the volume of air entering or leaving the lungs. Residual volume stays inside the lungs and never passes through the spirometer, so TLC (RV + VC) cannot be obtained by simple spirometry; it needs indirect methods such as helium dilution or body plethysmography." }
    ]
  },
  "b-circulation": {
    short: [
      { q: "Why is human circulation called double and complete?", a: "Blood passes twice through the heart in one circuit — pulmonary then systemic — and the two circuits are fully separated, so oxygenated and deoxygenated blood never mix." }
    ],
    long: [
      { q: "Describe the cardiac cycle with its phases and heart sounds.", a: "The cycle lasts about 0.8 s. During atrial systole the atria contract and fill the ventricles. Ventricular systole follows: the AV valves close producing the first heart sound, the pressure opens the semilunar valves and blood is pumped out. During diastole the ventricles relax, the semilunar valves close producing the second sound, and the AV valves open to refill. The SA node initiates the impulse, the AV node delays it, and the bundle of His and Purkinje fibres spread excitation through the ventricles." }
    ],
    application: [
      { q: "A patient's ECG shows no P wave. What might this indicate?", a: "Absence of the P wave suggests the atria are not depolarising normally, indicating an abnormal or junctional rhythm originating below the SA node." }
    ],
    competency: [
      { q: "Why do arteries have thicker, more elastic walls than veins?", a: "Arteries receive blood at high, pulsatile pressure and must expand and recoil to smooth the pulse, requiring thick elastic walls. Veins carry low-pressure flow and need thin walls with valves to prevent backflow, so their structure emphasises capacity rather than strength." }
    ]
  },
  "b-excretion": {
    short: [
      { q: "Define glomerular filtration rate and give its normal value.", a: "The volume of filtrate formed by both kidneys per minute; normally about 125 mL/min, roughly 180 L per day." }
    ],
    long: [
      { q: "Explain the countercurrent mechanism of urine concentration.", a: "The loop of Henle's descending limb is permeable to water but not solutes, so filtrate becomes concentrated as water leaves. The ascending limb is impermeable to water but actively pumps out Na⁺ and Cl⁻, making the interstitium increasingly hypertonic toward the inner medulla. Blood flow in the vasa recta runs in the opposite direction (countercurrent), so it removes reabsorbed water without washing out the gradient. This medullary gradient drives osmotic water reabsorption from the collecting duct under ADH control." }
    ],
    application: [
      { q: "A drug inhibits ADH secretion. Predict the effect on urine volume and concentration.", a: "Without ADH, the collecting duct becomes impermeable to water, so large volumes of dilute urine are produced (diuresis), as in diabetes insipidus." }
    ],
    competency: [
      { q: "Why does glucose appear in urine in uncontrolled diabetes mellitus?", a: "In uncontrolled diabetes the filtered glucose load exceeds the transport maximum of the proximal tubule's SGLT carriers, so the excess cannot be reabsorbed. It remains in the filtrate and is excreted, drawing water with it osmotically and causing the polyuria of diabetes." }
    ]
  },
  "b-locomotion": {
    short: [
      { q: "How many bones make up the human skeleton, and how are they divided?", a: "206 bones — axial skeleton (80) comprising skull, vertebral column and rib cage, and appendicular skeleton (126) comprising limbs and girdles." }
    ],
    long: [
      { q: "Explain the sliding filament theory of muscle contraction.", a: "A motor neuron releases acetylcholine, depolarising the sarcolemma; the signal spreads along T-tubules and triggers calcium release from the sarcoplasmic reticulum. Ca²⁺ binds troponin, shifting tropomyosin off the actin-binding sites. Myosin heads bind actin, form cross-bridges and pivot, pulling the thin filaments toward the centre (power stroke). ATP binds myosin, detaching it and re-cocking the head; ATP hydrolysis re-energises the cycle. The I-band and H-zone shorten while the A-band stays constant." }
    ],
    application: [
      { q: "Why does a person experience muscle fatigue during vigorous exercise?", a: "Rapid ATP consumption outpaces aerobic supply, so lactic acid accumulates during anaerobic glycolysis, lowering pH and impairing enzyme activity and calcium handling, causing fatigue." }
    ],
    competency: [
      { q: "Why is the all-or-none response seen in a single muscle fibre but graded contraction in a whole muscle?", a: "Each fibre obeys the all-or-none law because an action potential is a threshold event. A whole muscle is a bundle of many motor units and other muscle fibres; as more units are recruited and stimulation frequency rises, the total force is graded, allowing smooth control of movement." }
    ]
  },
  "b-reproduction": {
    short: [
      { q: "Define oviparity and viviparity.", a: "Oviparity is the laying of eggs outside the body (most birds and reptiles); viviparity is the development of the embryo inside the mother's body with nourishment from her (most mammals)." }
    ],
    long: [
      { q: "Describe the menstrual cycle with reference to the hormones controlling its phases.", a: "The follicular phase begins with FSH stimulating follicle growth and oestrogen secretion, which thickens the endometrium. As oestrogen peaks, LH surges and ovulation occurs around day 14. In the luteal phase the corpus luteum secretes progesterone and oestrogen, maintaining the endometrium. If fertilisation does not occur, the corpus luteum degenerates, progesterone falls and the endometrial lining is shed (menstruation). If fertilisation occurs, hCG from the trophoblast maintains the corpus luteum." }
    ],
    application: [
      { q: "Why does an oral contraceptive pill containing oestrogen and progesterone prevent pregnancy?", a: "Constant levels of these hormones suppress FSH and LH by negative feedback, so no follicle matures and no ovulation occurs." }
    ],
    competency: [
      { q: "Why is artificial insemination useful in animal breeding?", a: "Semen can be collected from a male of high genetic merit and used to inseminate many females across distant locations, overcoming distance, injury or refusal to mate. It increases the number of offspring from one superior male and allows frozen semen to be stored and used later." }
    ]
  },
  "b-genetics": {
    short: [
      { q: "State Mendel's law of segregation.", a: "Alleles of a gene segregate during gamete formation so each gamete receives only one allele, and the pair reunites at fertilisation." }
    ],
    long: [
      { q: "Explain the dihybrid cross and derive the F2 phenotypic ratio.", a: "Cross a pure yellow round (YYRR) with a pure green wrinkled (yyrr): F1 is all YyRr, round and yellow. F1 plants produce four gamete types (YR, Yr, yR, yr) in equal numbers because the two gene pairs assort independently. Selfing gives 16 combinations with phenotypes in the ratio 9 yellow round : 3 yellow wrinkled : 3 green round : 1 green wrinkled. The 9:3:3:1 ratio confirms independent assortment of two genes on different chromosomes." }
    ],
    application: [
      { q: "A carrier woman and a normal man have a son. What is the chance he is colour blind?", a: "The son inherits X from the mother (½ chance of X^c) and Y from the father. No — if the mother is a carrier (X^C X^c), each son has a 50% chance of being colour blind." }
    ],
    competency: [
      { q: "Why are more males than females affected by X-linked recessive disorders?", a: "Males have only one X chromosome, so a single recessive allele is expressed; there is no second allele to mask it. Females need two copies, which requires a carrier mother and an affected father, making the disorder far rarer in females. Thus an X-linked recessive disorder appears mostly in males." }
    ]
  },
  "b-molecular": {
    short: [
      { q: "State the central dogma.", a: "Genetic information flows from DNA to RNA to protein: replication, transcription and translation; some viruses use reverse transcription." }
    ],
    long: [
      { q: "Explain DNA replication, including the roles of the main enzymes.", a: "Helicase unwinds the double helix at the replication fork, and topoisomerase relieves the supercoiling. Primase lays down a short RNA primer. DNA polymerase III extends the new strand 5′→3′ by adding complementary nucleotides to the template, so the leading strand is synthesised continuously and the lagging strand discontinuously as Okazaki fragments. DNA polymerase I replaces RNA primers with DNA, and DNA ligase seals the nicks. The result is two identical duplexes, each with one parental and one new strand — semi-conservative replication." }
    ],
    application: [
      { q: "A mutation changes a codon from UAU to UAA. What is the effect?", a: "UAA is a stop codon, so translation terminates early, producing a truncated protein that is usually non-functional." }
    ],
    competency: [
      { q: "Why is DNA a better genetic material than RNA?", a: "DNA has a double helix with complementary strands, so it can be replicated with high fidelity and damage can be repaired using the other strand as a template. The absence of the 2′-OH group makes DNA more chemically stable than RNA, which is more prone to hydrolysis. Thymine instead of uracil also gives better repair recognition. RNA is suitable only for short-term information transfer." }
    ]
  },
  "b-biotech": {
    short: [
      { q: "What are sticky ends and why are they useful?", a: "Short single-stranded overhangs produced by a staggered cut, which can base-pair with complementary ends of another fragment and be joined by ligase." }
    ],
    long: [
      { q: "Describe the steps in producing a recombinant protein such as human insulin.", a: "First, the insulin gene is obtained — from mRNA via reverse transcriptase producing cDNA, or synthesised. It is cut with a restriction enzyme that creates sticky ends and ligated into a plasmid vector cut with the same enzyme. The recombinant plasmid is introduced into a host (E. coli) by transformation, and the host cells are grown in culture. Cells carrying the plasmid are selected (via an antibiotic marker) and screened; the protein is expressed, extracted and purified. Because prokaryotes cannot process introns, cDNA is essential for eukaryotic genes." }
    ],
    application: [
      { q: "Why is Taq polymerase used instead of human DNA polymerase in PCR?", a: "The denaturation step heats the reaction to about 94 °C, which would destroy normal enzymes; Taq polymerase from a thermophile remains active at these temperatures." }
    ],
    competency: [
      { q: "Discuss a concern about genetically modified crops.", a: "Bt crops can spread transgenes to wild relatives through pollen, creating herbicide-resistant weeds, and may affect non-target insects such as pollinators or predators of pests. Their use also raises concerns about biodiversity, seed dependence and the economics of small farms, which is why biosafety testing and monitoring are required." }
    ]
  },
  "b-ecology": {
    short: [
      { q: "Define carrying capacity.", a: "The maximum population size of a species that an environment can support indefinitely with the available resources, denoted K." }
    ],
    long: [
      { q: "Explain the logistic model of population growth and its assumptions.", a: "The logistic model is dN/dt = rN(1 − N/K), where r is the intrinsic rate of increase and K the carrying capacity. Growth starts nearly exponential when N is small, then slows as N approaches K, producing a sigmoid curve that plateaus. Its assumptions are that resources are finite, that the environment is stable, that all individuals are equivalent and that density dependence acts immediately on the growth rate." }
    ],
    application: [
      { q: "In a food chain, grass → grasshopper → frog → snake → hawk, how much of the grass's energy reaches the hawk?", a: "Four transfers at 10% each, so about 0.01%, i.e. 10⁻⁴ of the original energy." }
    ],
    competency: [
      { q: "Why does the removal of a top predator often cause ecosystem collapse?", a: "Top predators control herbivore numbers; without them herbivores increase, overgraze producers and destroy the vegetation structure. This reduces habitat and food for other species, causing the whole chain to lose stability — a trophic cascade." }
    ]
  }
};
