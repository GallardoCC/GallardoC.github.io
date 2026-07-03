/**
 * Datos globales del sitio. Todo lo editable (correo, redes, textos de marca)
 * vive aquí para no tocar componentes al actualizar contenido.
 */
export const site = {
  name: "Juan Carlos Gallardo",
  shortName: "JG",
  domain: "https://gallardo.dev",
  role: "Quant Trader · Estudiante de Ingeniería en IA y Ciencia de Datos",
  tagline:
    "Cuatro años operando mercados y programando. Hoy: trading cuantitativo e ingeniería de IA. Mañana: un hedge fund propio.",
  email: "juancarlosgc2406@gmail.com",
  location: "Perú · GMT-5",
  available: true,
  socials: {
    github: "https://github.com/juancarlosgallardo", // TODO: confirmar usuario real
    linkedin: "https://www.linkedin.com/in/juancarlosgallardo", // TODO: confirmar
    x: "https://x.com/juancarlosgallardo", // TODO: confirmar
  },
  typingRoles: [
    "Quant Trader",
    "AI Engineering Student",
    "Analista de mercados",
    "Future Hedge Fund Founder",
  ],
  stats: [
    { value: "4", suffix: "+", label: "Años en los mercados" },
    { value: "4", suffix: "+", label: "Años programando" },
    { value: "4", suffix: "", label: "Mercados operados" },
    { value: "12", suffix: "+", label: "Cursos y formaciones" },
  ],
} as const;

export const navLinks = [
  { label: "Sobre mí", href: "/sobre-mi" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Tecnologías", href: "/tecnologias" },
  { label: "Experiencia", href: "/experiencia" },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "/contacto" },
] as const;

export const footerSitemap = [
  {
    title: "Explorar",
    links: [
      { label: "Sobre mí", href: "/sobre-mi" },
      { label: "Proyectos", href: "/proyectos" },
      { label: "Tecnologías", href: "/tecnologias" },
      { label: "Experiencia", href: "/experiencia" },
    ],
  },
  {
    title: "Más",
    links: [
      { label: "Logros", href: "/logros" },
      { label: "Blog", href: "/blog" },
      { label: "CV", href: "/cv" },
      { label: "Contacto", href: "/contacto" },
    ],
  },
] as const;
