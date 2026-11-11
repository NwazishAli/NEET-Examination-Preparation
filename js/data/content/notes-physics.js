/* ===== Chapter study notes: Physics =====
   Each entry: { concepts[], formula?, trick, mistakes[], examples[{q,a}] }
   These power the chapter pages (Learn → Formula → Trick → Mistakes → Examples). */

const NOTES_PHYSICS = {
  "p-unit-measure": {
    concepts: [
      "SI has seven base units: metre, kilogram, second, ampere, kelvin, mole and candela. Everything else is derived from these.",
      "Dimensional analysis checks the correctness of an equation and converts units, but it cannot determine dimensionless constants such as 2 or π.",
      "Significant figures follow measured precision: in multiplication and division keep the least number of significant figures among the operands.",
      "Errors combine as Δx/x for products and quotients, and as absolute sums for addition and subtraction."
    ],
    formula: "Relative error in z = xᵃyᵇ/zᶜ → Δz/z = |a|Δx/x + |b|Δy/y + |c|Δz/z",
    trick: "Write the dimensional formula first — most NEET questions on this chapter are solved by testing dimensions of the options instead of computing.",
    mistakes: [
      "Treating angle, strain and refractive index as dimensional quantities — all three are dimensionless.",
      "Using the rule 'more significant figures = more accurate'. Accuracy is closeness to the true value; precision is repeatability.",
      "Forgetting that the argument of a trigonometric, exponential or logarithmic function must be dimensionless."
    ],
    examples: [
      { q: "The dimensional formula of pressure gradient (pressure per unit length) is:", a: "[ML⁻²T⁻²] — pressure is [ML⁻¹T⁻²], divide by length [L] to get [ML⁻²T⁻²]." },
      { q: "A physical quantity P = a³b²/(c√d). The percentage error in a is 1%, in b 2%, in c 3% and in d 4%. Find the percentage error in P.", a: "3(1) + 2(2) + 3 + ½(4) = 3 + 4 + 3 + 2 = 12%." }
    ]
  },

  "p-kinematics": {
    concepts: [
      "Displacement is a vector (straight line from start to finish); distance is the scalar path length. They differ whenever motion reverses direction.",
      "For uniform acceleration only, use v = u + at, s = ut + ½at², v² = u² + 2as and s = (u+v)t/2.",
      "Projectile motion treats horizontal and vertical motions independently: horizontal velocity stays constant, vertical motion has acceleration g downward.",
      "Relative velocity adds or subtracts velocities as vectors: v_AB = v_A − v_B."
    ],
    formula: "Range R = u² sin2θ/g, maximum at θ = 45°; H = u²sin²θ/2g; T = 2u sinθ/g",
    trick: "In projectile questions, find the time of flight from the vertical motion first, then use it for the horizontal range.",
    mistakes: [
      "Applying the constant-acceleration equations when acceleration changes (e.g. during braking with variable force).",
      "Forgetting that at the top of a projectile's path the vertical velocity is zero but the horizontal velocity is unchanged.",
      "Confusing average speed with average velocity when the body reverses direction."
    ],
    examples: [
      { q: "A body is projected at 45° with 20 m/s. Find the range (g = 10 m/s²).", a: "R = u²sin2θ/g = 400 × sin90° / 10 = 40 m." },
      { q: "A body falls freely for 3 s. Distance covered in the third second?", a: "s_n = u + a(2n−1)/2 = 0 + 10(5)/2 = 25 m." }
    ]
  },

  "p-laws-motion": {
    concepts: [
      "Newton's first law defines inertia; the second gives F = ma as a vector equation; the third pairs every force with an equal, opposite reaction on a different body.",
      "Friction: static friction is variable up to μsN, kinetic friction is fixed at μkN and is generally smaller.",
      "In a lift, apparent weight is N = m(g ± a) — plus when accelerating upward, minus when accelerating downward.",
      "For connected bodies, first treat the system as a whole to find acceleration, then isolate one body to find the internal force."
    ],
    formula: "F = ma; f_s(max) = μsN; f_k = μkN; on an incline a = g sinθ − μg cosθ",
    trick: "Draw the free-body diagram of only the body you need; the tension you want appears once you isolate one mass.",
    mistakes: [
      "Adding action and reaction on the same body — they always act on different bodies and never cancel each other.",
      "Assuming friction always opposes motion; it opposes relative motion, so on an accelerating belt it can act forward.",
      "Using μs and μk interchangeably in a numerical."
    ],
    examples: [
      { q: "A 5 kg block on a frictionless surface is pulled with 20 N. Acceleration?", a: "a = F/m = 20/5 = 4 m/s²." },
      { q: "In a lift accelerating upward at 2 m/s², apparent weight of a 60 kg person (g = 10)?", a: "N = m(g + a) = 60 × 12 = 720 N." }
    ]
  },

  "p-work-energy": {
    concepts: [
      "Work is F·s cosθ, so a force perpendicular to displacement does zero work — this is why centripetal force and magnetic force never change kinetic energy.",
      "The work-energy theorem states W_net = ΔKE and holds for any force, conservative or not.",
      "Conservative forces have path-independent work and a potential energy function; friction is non-conservative and dissipates energy as heat.",
      "Power is the rate of doing work: P = F·v for constant force."
    ],
    formula: "W = Fs cosθ; KE = ½mv²; U_spring = ½kx²; P = W/t = Fv; elastic/non-elastic collisions conserve momentum, only elastic conserve KE",
    trick: "If a question asks for speed after sliding or falling, use energy conservation instead of kinematics — it avoids needing the path.",
    mistakes: [
      "Thinking the net work is zero whenever the body returns to the start. Work by non-conservative forces is not zero over a closed loop.",
      "Using the work-energy theorem with only the applied force and forgetting gravity or friction.",
      "Forgetting that in a perfectly inelastic collision kinetic energy is lost but momentum is conserved."
    ],
    examples: [
      { q: "A 2 kg body moves at 10 m/s. Its kinetic energy?", a: "KE = ½ × 2 × 100 = 100 J." },
      { q: "A spring of k = 200 N/m is compressed 0.1 m. Energy stored?", a: "U = ½kx² = ½ × 200 × 0.01 = 1 J." }
    ]
  },

  "p-rotational": {
    concepts: [
      "Rigid-body rotation uses τ = Iα, L = Iω and rotational KE = ½Iω², mirroring the linear equations.",
      "Moment of inertia depends on the axis; the parallel-axis theorem gives I = I_cm + Md².",
      "Rolling without slipping combines translation and rotation with v = ωR; total KE = ½mv²(1 + I/mR²).",
      "Angular momentum is conserved when external torque is zero — the skater's arms, collapsing stars, and planetary orbits."
    ],
    formula: "τ = Iα; L = Iω; KE_rot = ½Iω²; I_solid sphere = 2/5MR²; I_ring = MR²; I_disc = ½MR²; I_rod(centre) = ML²/12",
    trick: "Memorise the four standard moments of inertia, then use the parallel-axis theorem for any shifted axis instead of integrating.",
    mistakes: [
      "Using mass instead of moment of inertia in angular analogues (writing F = ma for a rotating body).",
      "Assuming angular momentum is conserved just because torque is small — check whether τ = 0.",
      "Forgetting the ½ factor in rotational KE, which makes rolling objects slower than sliding ones."
    ],
    examples: [
      { q: "A solid sphere and a ring roll down the same incline. Which reaches the bottom first?", a: "The sphere — smaller I/mR² (0.4 vs 1.0) means greater acceleration, a = g sinθ/(1 + I/mR²)." },
      { q: "A skater halves her moment of inertia. Her angular velocity becomes?", a: "L = Iω conserved, so ω doubles." }
    ]
  },

  "p-gravitation": {
    concepts: [
      "Newton's law of gravitation gives F = Gm₁m₂/r², valid for point masses and uniform spheres.",
      "Acceleration due to gravity falls with height and depth: g' = g(R/(R+h))² at height, g' = g(1 − d/R) at depth.",
      "Orbital velocity v = √(GM/r) and escape velocity v_e = √(2GM/R) = √2 v_orbital near the surface.",
      "Kepler's third law: T² ∝ a³, so a planet farther from the Sun has a longer year."
    ],
    formula: "F = Gm₁m₂/r²; g = GM/R²; v_orb = √(GM/r); v_e = √(2gR) ≈ 11.2 km/s; T² ∝ r³",
    trick: "Escape velocity is mass-independent — doubling the rocket's mass does not change it. Only M and R of the planet matter.",
    mistakes: [
      "Thinking a satellite in orbit experiences no gravity. It is in free fall; gravity supplies the centripetal force.",
      "Mixing up escape velocity (√(2gR)) with orbital velocity (√(gR)) — they differ by √2.",
      "Using r as height above the surface instead of distance from the centre."
    ],
    examples: [
      { q: "At height equal to Earth's radius, what is g?", a: "g' = g(R/2R)² = g/4." },
      { q: "Escape velocity from a planet with twice Earth's mass and twice Earth's radius?", a: "v_e ∝ √(M/R) = √1 = same as Earth, 11.2 km/s." }
    ]
  },

  "p-properties-solids": {
    concepts: [
      "Stress is force per unit area; strain is the fractional deformation. Both are needed because the ratio (modulus) is what characterises a material.",
      "Young's modulus applies to longitudinal stress; bulk modulus to volume stress; shear modulus to tangential stress.",
      "The stress–strain curve has an elastic region (Hooke's law: stress ∝ strain), a yield point and a plastic region before fracture.",
      "Elastic potential energy per unit volume = ½ × stress × strain."
    ],
    formula: "Y = (F/A)/(ΔL/L); U = ½ × stress × strain × volume",
    trick: "Check whether the question involves length change (Young's), volume change (bulk) or shape change (shear) — that decides the modulus.",
    mistakes: [
      "Confusing stress (N/m²) with strain (dimensionless).",
      "Assuming a wire breaks at the elastic limit — it breaks at the fracture point, after the plastic region.",
      "Forgetting that for the same material and same load, a thicker wire extends less (ΔL ∝ 1/A)."
    ],
    examples: [
      { q: "A wire of length L and area A stretches by ΔL under force F. If the length is doubled with the same force and area, ΔL becomes?", a: "ΔL = FL/AY, so doubling L doubles ΔL." },
      { q: "The SI unit of Young's modulus is:", a: "N/m² (same as stress, since strain is dimensionless)." }
    ]
  },

  "p-properties-fluids": {
    concepts: [
      "Pressure in a fluid depends on depth only: P = P₀ + ρgh, independent of the shape of the container.",
      "Archimedes' principle: buoyant force equals the weight of displaced fluid. A body floats when its density is less than the fluid's.",
      "Equation of continuity: Av = constant, so a narrower pipe carries faster flow.",
      "Bernoulli's equation expresses energy conservation along a streamline; faster flow means lower pressure."
    ],
    formula: "P = P₀ + ρgh; F_b = ρ_fluid V g; A₁v₁ = A₂v₂; P + ½ρv² + ρgh = constant; v_t = 2r²(ρ−σ)g/9η",
    trick: "For any 'floating body' question, immediately set weight = buoyant force: ρ_body V g = ρ_fluid V_submerged g.",
    mistakes: [
      "Using the density of the body instead of the fluid when computing buoyancy.",
      "Thinking Bernoulli's equation is valid for turbulent or compressible flow — it is for steady, ideal flow.",
      "Forgetting that terminal velocity scales as r², so a body with twice the radius has four times the terminal velocity."
    ],
    examples: [
      { q: "A block floats with 3/4 of its volume submerged. Its density (water = 1000 kg/m³)?", a: "ρ_body = ¾ × 1000 = 750 kg/m³." },
      { q: "Water flows through a pipe that narrows from 4 cm² to 1 cm² at 2 m/s. Speed in the narrow part?", a: "A₁v₁ = A₂v₂ ⇒ v₂ = 4 × 2 / 1 = 8 m/s." }
    ]
  },

  "p-thermal": {
    concepts: [
      "Heat is energy in transit due to a temperature difference; temperature measures average molecular kinetic energy.",
      "Q = mcΔT for sensible heat and Q = mL for a phase change — temperature stays constant during melting or boiling.",
      "Thermal expansion: ΔL = LαΔT; the apparent expansion of a liquid in a vessel uses (α_liquid − α_vessel).",
      "The first law of thermodynamics (ΔU = Q − W) is energy conservation; the second law limits the efficiency of heat engines."
    ],
    formula: "Q = mcΔT = mL; ΔL = LαΔT; ΔU = Q − W; η_Carnot = 1 − T₂/T₁; COP = T₂/(T₁−T₂)",
    trick: "In calorimetry, write 'heat lost = heat gained' with a separate term per phase change. Mixing ice and water almost always needs the latent heat term.",
    mistakes: [
      "Using Celsius temperatures in the Carnot efficiency formula — it needs kelvin.",
      "Forgetting the latent heat when ice melts before warming.",
      "Assuming efficiency can reach 100% — the second law forbids it for a cyclic engine."
    ],
    examples: [
      { q: "Carnot engine between 500 K and 300 K. Efficiency?", a: "η = 1 − 300/500 = 40%." },
      { q: "Heat needed to melt 100 g of ice at 0 °C (L = 80 cal/g)?", a: "Q = mL = 100 × 80 = 8000 cal." }
    ]
  },

  "p-kinetic-theory": {
    concepts: [
      "Pressure arises from molecular collisions with the walls: P = (1/3)ρv_rms².",
      "Temperature is directly proportional to average translational kinetic energy: ½mv_rms² = (3/2)k_BT.",
      "For a mixture or gas, v_rms ∝ √(T/M), so lighter molecules move faster at the same temperature.",
      "Degrees of freedom determine specific heats: monoatomic f = 3, diatomic f = 5 (translation + rotation), giving γ = 5/3 and 7/5."
    ],
    formula: "PV = nRT; v_rms = √(3RT/M); KE_avg = (3/2)k_BT; C_p − C_v = R; γ = 1 + 2/f",
    trick: "At the same temperature, all gases have the same average kinetic energy — only the speeds differ, because speeds depend on mass.",
    mistakes: [
      "Thinking all molecules have the same speed. Speed has a Maxwell–Boltzmann distribution; only the average is fixed by temperature.",
      "Using Celsius in PV = nRT — always kelvin.",
      "Confusing rms speed with average speed; v_avg = √(8RT/πM) is slightly smaller than v_rms."
    ],
    examples: [
      { q: "Average translational KE of a gas molecule at 300 K (k_B = 1.38 × 10⁻²³)?", a: "KE = (3/2)k_BT = 1.5 × 1.38 × 10⁻²³ × 300 ≈ 6.2 × 10⁻²¹ J." },
      { q: "Ratio of rms speeds of H₂ and O₂ at the same temperature?", a: "v ∝ 1/√M ⇒ v_H₂/v_O₂ = √(32/2) = 4." }
    ]
  },

  "p-oscillations": {
    concepts: [
      "SHM requires a restoring force proportional to displacement and directed opposite: F = −kx.",
      "For SHM, x = A sin(ωt + φ); velocity leads displacement by π/2 and acceleration is π out of phase.",
      "Time period depends on the system, not the amplitude: spring T = 2π√(m/k), pendulum T = 2π√(L/g).",
      "Waves transfer energy, not matter. Sound needs a medium; in a stretched string v = √(T/μ)."
    ],
    formula: "x = A sinωt; v_max = Aω; a_max = Aω²; T_spring = 2π√(m/k); T_pendulum = 2π√(L/g); v = fλ; v_string = √(T/μ)",
    trick: "For a pendulum in a lift, replace g by the effective g: T ∝ 1/√g_eff, so in free fall the pendulum stops oscillating.",
    mistakes: [
      "Thinking a larger amplitude gives a longer period for a simple pendulum — it does not (for small oscillations).",
      "Confusing frequency (per second) with angular frequency (radians per second); they differ by 2π.",
      "Assuming sound travels faster in gases than in solids — the reverse is true."
    ],
    examples: [
      { q: "A 1 kg mass on a spring of k = 100 N/m. Time period?", a: "T = 2π√(1/100) = 2π/10 ≈ 0.63 s." },
      { q: "A wave of frequency 50 Hz has wavelength 4 m. Speed?", a: "v = fλ = 50 × 4 = 200 m/s." }
    ]
  },

  "p-electrostatics": {
    concepts: [
      "Coulomb's law gives F = kq₁q₂/r² with k = 9×10⁹ N·m²/C² for free space; in a medium it is divided by the dielectric constant.",
      "Electric field E = F/q and potential V = W/q are related by E = −dV/dx; field is a vector, potential a scalar.",
      "Equipotential surfaces are perpendicular to field lines; moving a charge along one requires no work.",
      "A capacitor stores charge Q = CV and energy U = ½CV². Inserting a dielectric increases C by the factor K."
    ],
    formula: "F = kq₁q₂/r²; E = kq/r²; V = kq/r; U = ½CV² = Q²/2C; C_parallel = C₁+C₂; C_series: 1/C = 1/C₁+1/C₂",
    trick: "For a sphere of charge, the field outside is exactly that of a point charge at the centre; inside a conductor the field is zero.",
    mistakes: [
      "Adding electric field magnitudes directly without considering direction — E is a vector.",
      "Thinking potential is zero wherever the field is zero (and vice versa).",
      "Using the series/parallel capacitor rules backwards — capacitors combine opposite to resistors."
    ],
    examples: [
      { q: "Two 4 μF capacitors in series. Equivalent capacitance?", a: "1/C = ¼ + ¼ = ½ ⇒ C = 2 μF." },
      { q: "Doubling the separation between two charges changes the force how?", a: "F ∝ 1/r², so the force becomes one-fourth." }
    ]
  },

  "p-current": {
    concepts: [
      "Current is the rate of flow of charge; drift velocity is small (mm/s) yet the electric signal propagates at nearly the speed of light.",
      "Ohm's law V = IR holds for ohmic conductors at constant temperature; resistance R = ρL/A.",
      "Kirchhoff's junction rule is charge conservation; the loop rule is energy conservation.",
      "The potentiometer measures EMF without drawing current, avoiding the terminal-voltage drop of a voltmeter."
    ],
    formula: "V = IR; R = ρL/A; P = VI = I²R = V²/R; I = neAv_d; series R = ΣR; parallel 1/R = Σ1/R",
    trick: "Stretching a wire to twice its length keeps the volume constant, so the area halves and R becomes 4× — never 2×.",
    mistakes: [
      "Thinking drift velocity is the speed of electricity — it is the speed of electrons, which is tiny.",
      "Forgetting internal resistance when computing terminal voltage: V = ε − Ir.",
      "Adding resistances incorrectly in parallel; the equivalent is always smaller than the smallest branch."
    ],
    examples: [
      { q: "6 Ω and 3 Ω in parallel. Equivalent?", a: "1/R = ⅙ + ⅓ = ½ ⇒ R = 2 Ω." },
      { q: "A wire of resistance R is stretched to double its length. New resistance?", a: "Volume constant ⇒ area halves ⇒ R' = ρ(2L)/(A/2) = 4R." }
    ]
  },

  "p-magnetism": {
    concepts: [
      "A moving charge experiences F = qvB sinθ; a charge at rest or moving parallel to B feels no magnetic force.",
      "A charged particle moving perpendicular to B follows a circle of radius r = mv/qB and period T = 2πm/qB independent of speed.",
      "A current-carrying conductor in a magnetic field feels F = BIL sinθ; parallel wires attract when currents flow the same way.",
      "A current loop behaves as a magnetic dipole with torque τ = NIAB sinθ."
    ],
    formula: "F = qvB sinθ; r = mv/qB; F = BIL sinθ; τ = NIAB sinθ; B_straight = μ₀I/2πr",
    trick: "Use the right-hand rule consistently: thumb along v (or I), fingers along B, palm gives force on a positive charge — flip for electrons.",
    mistakes: [
      "Assuming a magnetic field changes a particle's speed. It only changes direction, so kinetic energy stays constant.",
      "Forgetting that the period in a magnetic field is independent of speed, so faster particles make larger circles in the same time.",
      "Using the left hand for positive charges."
    ],
    examples: [
      { q: "A proton enters perpendicular to B. If its speed doubles, what happens to the radius and period?", a: "r = mv/qB doubles; T = 2πm/qB is unchanged." },
      { q: "Force on a charge moving parallel to a magnetic field?", a: "Zero, because sin0° = 0." }
    ]
  },

  "p-emi": {
    concepts: [
      "Faraday's law: a changing magnetic flux induces an EMF ε = −N dΦ/dt.",
      "Lenz's law fixes the direction: the induced current opposes the change producing it, which is energy conservation.",
      "Self-inductance opposes change of current in the same coil (ε = −L dI/dt); mutual inductance couples two coils.",
      "In AC circuits, inductive reactance rises with frequency (X_L = ωL) while capacitive reactance falls (X_C = 1/ωC)."
    ],
    formula: "ε = −N dΦ/dt; ε = −L dI/dt; X_L = ωL; X_C = 1/ωC; Z = √(R² + (X_L−X_C)²); resonance at f = 1/(2π√(LC))",
    trick: "At resonance X_L = X_C and Z = R, so current is maximum. Most AC questions become trivial once you spot resonance.",
    mistakes: [
      "Thinking an induced EMF requires physical motion — a changing B field alone is enough.",
      "Sign errors from ignoring Lenz's law; the minus sign is the physics.",
      "Believing a transformer can increase power. It changes voltage and current inversely, with efficiency below 100%."
    ],
    examples: [
      { q: "A step-up transformer has 1000 secondary turns and 100 primary turns on 220 V. Output voltage?", a: "V_s = V_p × N_s/N_p = 220 × 10 = 2200 V." },
      { q: "Peak voltage of a 220 V rms supply?", a: "V_peak = √2 × 220 ≈ 311 V." }
    ]
  },

  "p-em-waves": {
    concepts: [
      "Electromagnetic waves are transverse, carry oscillating E and B fields perpendicular to each other and to the direction of propagation.",
      "They need no medium and travel at c = 1/√(μ₀ε₀) = 3 × 10⁸ m/s in vacuum.",
      "The spectrum in order of increasing frequency is radio, microwave, infrared, visible, ultraviolet, X-ray, gamma.",
      "E/B = c; energy is carried by both fields, with the Poynting vector giving the intensity."
    ],
    formula: "c = 1/√(μ₀ε₀) = fλ; E₀/B₀ = c; intensity I ∝ E₀²",
    trick: "Memorise the spectrum as 'Raging Martians Invaded Venus Using X-ray Guns' — increasing frequency left to right.",
    mistakes: [
      "Thinking electromagnetic waves need a medium (the 19th-century ether myth).",
      "Ordering the spectrum by wavelength instead of frequency and getting the direction backwards.",
      "Forgetting that in a medium the speed is c/n, so the wavelength shortens but the frequency stays the same."
    ],
    examples: [
      { q: "Which has the shortest wavelength: gamma rays, X-rays, UV or microwaves?", a: "Gamma rays — highest frequency means shortest wavelength." },
      { q: "An EM wave has a frequency of 10¹⁵ Hz. Its wavelength?", a: "λ = c/f = 3×10⁸/10¹⁵ = 3 × 10⁻⁷ m (300 nm, ultraviolet)." }
    ]
  },

  "p-optics": {
    concepts: [
      "Reflection follows equal angles; refraction follows Snell's law μ₁sin i = μ₂sin r, and light bends toward the normal entering a denser medium.",
      "Total internal reflection occurs only from denser to rarer medium above the critical angle, with sin C = 1/μ.",
      "Mirror and lens formulas use sign convention; magnification m = v/u (or −v/u depending on convention).",
      "Wave optics: interference depends on path difference, diffraction on slit width; the resolving power of a telescope improves with aperture."
    ],
    formula: "1/v − 1/u = 1/f (lens); 1/v + 1/u = 1/f (mirror); m = v/u; sin C = 1/μ; fringe width β = λD/d",
    trick: "For 'where is the image' questions, draw two rays — parallel ray through focus and ray through the optical centre — rather than trusting algebra.",
    mistakes: [
      "Mixing up the sign conventions for mirrors and lenses; also forgetting that for a concave mirror f is negative in the Cartesian convention.",
      "Thinking the critical angle depends on the second medium's index in a fixed way — it needs the rarer medium's index: sin C = μ_rare/μ_dense.",
      "Confusing least deviation with no deviation; a prism deviates at minimum deviation, not zero."
    ],
    examples: [
      { q: "Focal length of a concave mirror with curvature radius 20 cm?", a: "f = R/2 = 10 cm." },
      { q: "Critical angle for glass (μ = 1.5) in air?", a: "sin C = 1/1.5 = 0.667 ⇒ C ≈ 42°." }
    ]
  },

  "p-modern": {
    concepts: [
      "Photoelectric effect: light of frequency above a threshold ejects electrons instantly, with KE_max = hν − φ. Intensity changes the number, not the energy.",
      "de Broglie duality assigns λ = h/p to every particle, noticeable only for very light particles such as electrons.",
      "Bohr model quantises angular momentum; energy levels E_n = −13.6 Z²/n² eV explain discrete spectral lines.",
      "Nuclear stability comes from binding energy per nucleon, which peaks near Fe-56 and drops for very heavy nuclei, enabling fission."
    ],
    formula: "hν = φ + eV₀; λ = h/√(2mK); E_n = −13.6Z²/n² eV; 1/λ = R(1/n₁² − 1/n₂²); E = Δmc²; N = N₀(1/2)^(t/T½)",
    trick: "For de Broglie comparisons at equal kinetic energy use λ ∝ 1/√m; at equal momentum use λ ∝ 1 (momentum only).",
    mistakes: [
      "Thinking brighter light gives faster photoelectrons — only frequency sets their maximum kinetic energy.",
      "Forgetting that an alpha particle has 4× the proton mass when comparing wavelengths.",
      "Confusing half-life with mean life; after 3 half-lives only 1/8 remains, not zero."
    ],
    examples: [
      { q: "Work function 2 eV. Threshold frequency?", a: "ν₀ = φ/h = 2 × 1.6×10⁻¹⁹ / 6.63×10⁻³⁴ ≈ 4.8 × 10¹⁴ Hz." },
      { q: "Half-life 20 min. Fraction left after 60 min?", a: "3 half-lives ⇒ (1/2)³ = 1/8." }
    ]
  },

  "p-semiconductors": {
    concepts: [
      "Intrinsic semiconductors conduct poorly; doping with pentavalent atoms gives n-type (electron-rich) and trivalent gives p-type (hole-rich).",
      "The depletion region of a p–n junction has a built-in potential that biases the diode: forward bias narrows it, reverse bias widens it.",
      "A half-wave rectifier passes one half-cycle; a full-wave rectifier with a centre tap passes both.",
      "Solar cells, LEDs and photodiodes all exploit photon–electron interaction in a junction; Zener diodes regulate voltage in reverse breakdown."
    ],
    formula: "I = I₀(e^(eV/kT) − 1); ripple frequency of full-wave = 2f; for a transistor β = I_C/I_B",
    trick: "Remember 'pentavalent = negative (n-type), trivalent = positive (p-type)' — the doped atom's majority carrier decides the name.",
    mistakes: [
      "Thinking a doped semiconductor is negatively charged — it is electrically neutral; only the carrier type changes.",
      "Assuming a diode conducts in both directions. It is a one-way valve except in breakdown.",
      "Confusing the role of the base in a transistor; the base is thin and lightly doped to let current pass to the collector."
    ],
    examples: [
      { q: "Doping silicon with phosphorus produces?", a: "An n-type semiconductor — phosphorus is pentavalent and donates electrons." },
      { q: "During reverse bias, what happens to the depletion layer?", a: "It widens, increasing the barrier potential and blocking current." }
    ]
  }
};
