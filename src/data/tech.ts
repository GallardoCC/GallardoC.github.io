export interface TechItem {
  name: string;
  level: "Avanzado" | "Intermedio" | "Aprendiendo";
  usedIn?: string[];
}

export interface TechCategory {
  title: string;
  blurb: string;
  items: TechItem[];
}

export const techCategories: TechCategory[] = [
  {
    title: "Trading & Mercados",
    blurb: "Cuatro años operando: del análisis discrecional al sistemático.",
    items: [
      { name: "Análisis técnico", level: "Avanzado", usedIn: ["Nasdaq", "Acciones"] },
      { name: "Análisis fundamental", level: "Avanzado", usedIn: ["Siete Magníficas"] },
      { name: "Acciones y ETFs", level: "Avanzado", usedIn: ["Nasdaq"] },
      { name: "Criptomonedas", level: "Intermedio" },
      { name: "Forex", level: "Intermedio" },
      { name: "Gestión de riesgo y portafolios", level: "Avanzado", usedIn: ["QuantDesk"] },
    ],
  },
  {
    title: "Quant / Python científico",
    blurb: "Modelos estadísticos para mercados financieros.",
    items: [
      { name: "Pandas / NumPy", level: "Avanzado", usedIn: ["QuantDesk"] },
      { name: "Backtesting", level: "Avanzado", usedIn: ["QuantDesk"] },
      { name: "Filtro de Kalman", level: "Intermedio", usedIn: ["QuantDesk"] },
      { name: "GARCH", level: "Intermedio", usedIn: ["QuantDesk"] },
      { name: "Monte Carlo", level: "Avanzado", usedIn: ["QuantDesk"] },
      { name: "Matemática aplicada", level: "Aprendiendo" },
    ],
  },
  {
    title: "IA & Data Science",
    blurb: "Agentes y modelos aplicados a productos reales — y ahora, la carrera.",
    items: [
      { name: "Claude / Agentes", level: "Avanzado", usedIn: ["Claude Bridge", "Contesta"] },
      { name: "Ollama", level: "Intermedio", usedIn: ["Homelab"] },
      { name: "LM Studio", level: "Intermedio", usedIn: ["Homelab"] },
      { name: "Prompt engineering", level: "Avanzado" },
      { name: "Ciencia de datos", level: "Aprendiendo", usedIn: ["Universidad"] },
    ],
  },
  {
    title: "Backend",
    blurb: "APIs limpias que sirven datos confiables.",
    items: [
      { name: "Python", level: "Avanzado", usedIn: ["QuantDesk", "QuantFlow"] },
      { name: "FastAPI", level: "Avanzado", usedIn: ["QuantFlow"] },
      { name: "Node.js", level: "Intermedio" },
      { name: "REST APIs", level: "Avanzado", usedIn: ["QuantFlow", "Claude Bridge"] },
      { name: "SQL / Bases de datos", level: "Intermedio" },
    ],
  },
  {
    title: "Frontend",
    blurb: "Interfaces rápidas, accesibles y con identidad propia.",
    items: [
      { name: "React", level: "Avanzado", usedIn: ["QuantFlow", "Uxur"] },
      { name: "TypeScript", level: "Avanzado", usedIn: ["Uxur", "Portafolio"] },
      { name: "Next.js", level: "Intermedio", usedIn: ["Portafolio"] },
      { name: "Vite", level: "Avanzado", usedIn: ["QuantFlow"] },
      { name: "Three.js / R3F", level: "Aprendiendo", usedIn: ["Portafolio"] },
      { name: "GSAP", level: "Intermedio", usedIn: ["Portafolio"] },
      { name: "CSS moderno", level: "Avanzado", usedIn: ["GDS"] },
    ],
  },
  {
    title: "Linux & Sistemas",
    blurb: "Del escritorio al servidor: Arch, Kali, Ubuntu y self-hosting.",
    items: [
      { name: "Arch Linux y derivados", level: "Avanzado" },
      { name: "Kali Linux", level: "Intermedio" },
      { name: "Ubuntu / Debian", level: "Avanzado", usedIn: ["Homelab"] },
      { name: "Tailscale", level: "Intermedio", usedIn: ["Homelab"] },
      { name: "Self-hosting", level: "Intermedio", usedIn: ["Homelab"] },
      { name: "Git / GitHub", level: "Avanzado" },
    ],
  },
  {
    title: "Ciberseguridad",
    blurb: "Formación en hacking ético: entender el sistema para protegerlo.",
    items: [
      { name: "Hacking ético", level: "Intermedio", usedIn: ["Kali Linux"] },
      { name: "Seguridad de redes", level: "Intermedio", usedIn: ["Homelab"] },
      { name: "Hardening de sistemas", level: "Aprendiendo" },
    ],
  },
];

/** Lista plana para los marquees de la home. */
export const marqueeTech = [
  "Python", "Pandas", "NumPy", "Monte Carlo", "Kalman", "GARCH", "Backtesting",
  "React", "TypeScript", "Next.js", "FastAPI", "Vite", "Three.js", "GSAP",
  "Arch Linux", "Kali", "Tailscale", "Ollama", "SQL", "Git",
];
