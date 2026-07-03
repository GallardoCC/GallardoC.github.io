export interface Milestone {
  period: string;
  title: string;
  org?: string;
  description: string;
}

export const milestones: Milestone[] = [
  {
    period: "2026",
    title: "Ingeniería en IA y Ciencia de Datos",
    org: "Universidad Científica del Sur",
    description:
      "Inicio de la carrera universitaria: la formalización matemática de lo que llevo cuatro años haciendo en los mercados. En paralelo, desarrollo de \"Contesta\", un agente de voz con IA que atiende el teléfono de negocios de Lima que pierden llamadas — mi primera startup de IA en marcha.",
  },
  {
    period: "2025 — 2026",
    title: "Trading cuantitativo con modelos propios",
    org: "QuantDesk · QuantFlow",
    description:
      "El salto del trading discrecional al sistemático: framework de backtesting multi-activo (el torneo interno lo ganó volatility targeting), modelos con filtro de Kalman, GARCH y validación por Monte Carlo, y una terminal web de datos de mercado. Finanzas aplicadas a la matemática.",
  },
  {
    period: "2025",
    title: "Infraestructura, sistemas y agentes de IA",
    org: "Homelab · Linux · Claude Bridge",
    description:
      "Etapa dedicada a dominar sistemas: servidor Linux propio con Tailscale y Wake-on-LAN, modelos de IA locales, control de Claude Code desde Telegram, y años de uso de Arch, Kali y Ubuntu como escritorio principal.",
  },
  {
    period: "2023 — 2025",
    title: "Especialización en mercados y emprendimiento",
    org: "Nasdaq · Acciones · E-commerce",
    description:
      "Cuatro tipos de mercado operados — acciones, ETFs, criptomonedas y forex — hasta encontrar mi terreno: el Nasdaq y el análisis técnico y fundamental de empresas, con especial foco en las Siete Magníficas. En paralelo, primer negocio real: importación de productos desde China y venta por e-commerce.",
  },
  {
    period: "2022",
    title: "El punto de partida: código y bolsa a los 13",
    org: "Formación autodidacta",
    description:
      "El mismo año empecé dos caminos que nunca solté: mis primeros cursos de programación y mi primera cuenta en la bolsa de valores. Desde entonces, más de una docena de cursos — Python, trading algorítmico, análisis técnico y fundamental, ciberseguridad, full stack, bases de datos, matemáticas.",
  },
];

export interface Achievement {
  title: string;
  context: string;
  year: string;
}

export const achievements: Achievement[] = [
  {
    title: "4 años operando mercados reales",
    context:
      "Acciones, ETFs, criptomonedas y forex desde los 13 años; cuentas propias con crecimientos de 100% y 200% en sus mejores etapas, con foco en el Nasdaq y las Siete Magníficas",
    year: "2022 — 2026",
  },
  {
    title: "Framework de backtesting propio",
    context:
      "Torneo de estrategias sobre 8-15 activos con reglas idénticas; ganó volatility targeting. Encima corren modelos Kalman + GARCH + Monte Carlo",
    year: "2026",
  },
  {
    title: "Admisión a Ingeniería en IA y Ciencia de Datos",
    context: "Universidad Científica del Sur — la carrera elegida para construir el camino hacia un hedge fund cuantitativo",
    year: "2026",
  },
  {
    title: "Design system completo (GDS)",
    context: "19 componentes React con tokens de diseño; este sitio está construido con él",
    year: "2026",
  },
  {
    title: "Homelab de desarrollo remoto",
    context: "Servidor Linux propio con Tailscale, Wake-on-LAN e IA local, accesible desde cualquier dispositivo",
    year: "2025",
  },
  {
    title: "Primer negocio de importación y e-commerce",
    context: "Importación de productos de tecnología desde China y venta directa: operación real de compra, logística y ventas",
    year: "2025",
  },
];
