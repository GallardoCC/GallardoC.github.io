/** Formación académica y cursos de Juan Carlos Gallardo. */

export interface EducationEntry {
  period: string;
  title: string;
  institution: string;
  description: string;
  current?: boolean;
}

export const education: EducationEntry[] = [
  {
    period: "2026 — presente",
    title: "Ingeniería en Inteligencia Artificial y Ciencia de Datos",
    institution: "Universidad Científica del Sur · Perú",
    description:
      "La base matemática y de ingeniería para el trading cuantitativo: modelos, datos y sistemas inteligentes aplicados a finanzas.",
    current: true,
  },
];

export interface Course {
  name: string;
  area: "Mercados" | "Programación" | "Seguridad" | "Matemáticas e IA";
}

export const courses: Course[] = [
  { name: "Bolsa de valores", area: "Mercados" },
  { name: "Análisis técnico", area: "Mercados" },
  { name: "Análisis fundamental", area: "Mercados" },
  { name: "Trading algorítmico", area: "Mercados" },
  { name: "Python", area: "Programación" },
  { name: "Full stack development", area: "Programación" },
  { name: "Back-end", area: "Programación" },
  { name: "Bases de datos", area: "Programación" },
  { name: "Ciberseguridad", area: "Seguridad" },
  { name: "Hacking ético", area: "Seguridad" },
  { name: "Matemáticas", area: "Matemáticas e IA" },
  { name: "Inteligencia artificial (en curso)", area: "Matemáticas e IA" },
];

export const courseAreas = ["Mercados", "Programación", "Seguridad", "Matemáticas e IA"] as const;

export interface LanguageSkill {
  name: string;
  level: string;
}

export const languages: LanguageSkill[] = [
  { name: "Español", level: "Nativo" },
  { name: "Inglés", level: "Profesional" },
];

export const softSkills = [
  "Liderazgo",
  "Comunicación",
  "Oratoria — conferencias de bolsa y tecnología",
  "Análisis de empresas",
] as const;
