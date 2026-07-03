export interface CaseSection {
  heading: string;
  body: string;
}

export interface Project {
  slug: string;
  title: string;
  monogram: string;
  oneLiner: string;
  description: string;
  tags: string[];
  year: string;
  status: "En producción" | "En desarrollo" | "En planeación";
  featured?: boolean;
  category: "Quant" | "Web" | "IA" | "Infraestructura";
  caseStudy: CaseSection[];
  links?: { label: string; href: string }[];
}

export const projects: Project[] = [
  {
    slug: "quantflow",
    title: "QuantFlow",
    monogram: "QF",
    oneLiner: "Terminal web de datos de mercado en tiempo real.",
    description:
      "Plataforma web de análisis de mercados: precios, históricos y visualización interactiva servidos por una API propia.",
    tags: ["React", "Vite", "FastAPI", "Python", "yfinance"],
    year: "2026",
    status: "En desarrollo",
    featured: true,
    category: "Quant",
    caseStudy: [
      {
        heading: "El problema",
        body: "Las terminales profesionales de mercado (Bloomberg, Refinitiv) son inaccesibles para un trader independiente. Las alternativas gratuitas dispersan los datos en decenas de pestañas y no permiten componer un flujo de análisis propio.",
      },
      {
        heading: "La solución",
        body: "QuantFlow centraliza datos de mercado en una sola interfaz: un backend FastAPI expone endpoints limpios sobre fuentes públicas (yfinance) y un frontend React + Vite los convierte en paneles interactivos. Arquitectura por pedestales: primero datos confiables, luego analítica, luego señales.",
      },
      {
        heading: "Retos técnicos",
        body: "Normalizar datos de fuentes inestables, cachear respuestas para no golpear los límites de la API, y mantener la latencia de la interfaz por debajo de los 100 ms en actualizaciones de precios.",
      },
      {
        heading: "Resultados",
        body: "Pedestal de datos completado y verificado: históricos, precios y metadatos de cualquier ticker en una interfaz propia, corriendo en localhost como base del stack cuantitativo personal.",
      },
    ],
  },
  {
    slug: "quantdesk",
    title: "QuantDesk",
    monogram: "QD",
    oneLiner: "Terminal de análisis cuantitativo con modelos estadísticos.",
    description:
      "Motor de análisis para trading sistemático: backtesting multi-activo, volatility targeting, filtros de Kalman, GARCH y simulación Monte Carlo.",
    tags: ["Python", "Pandas", "NumPy", "Kalman", "GARCH", "Monte Carlo"],
    year: "2025 — 2026",
    status: "En producción",
    featured: true,
    category: "Quant",
    caseStudy: [
      {
        heading: "El problema",
        body: "Operar por intuición no escala. Para tratar el trading como una profesión hacen falta hipótesis medibles: ¿qué estrategia sobrevive a 8-15 activos, comisiones y regímenes de mercado distintos?",
      },
      {
        heading: "La solución",
        body: "Un framework de backtesting propio que compara estrategias bajo las mismas reglas. El torneo interno lo ganó volatility targeting: dimensionar posiciones por volatilidad realizada en lugar de tamaño fijo. Encima corre un modelo de señal que combina filtro de Kalman, GARCH para volatilidad condicional, reversión a la media y validación por Monte Carlo.",
      },
      {
        heading: "Retos técnicos",
        body: "Evitar el look-ahead bias en cada pipeline, estimar parámetros GARCH estables en ventanas cortas, y hacer que miles de simulaciones Monte Carlo corran en segundos con NumPy vectorizado.",
      },
      {
        heading: "Resultados",
        body: "Un banco de pruebas reproducible que descarta estrategias débiles antes de arriesgar capital real, y una señal compuesta con gestión de riesgo integrada.",
      },
    ],
  },
  {
    slug: "uxur",
    title: "Uxur",
    monogram: "UX",
    oneLiner: "Marketplace cerrado y verificado para universitarios.",
    description:
      "App tipo marketplace con acceso exclusivo para estudiantes universitarios verificados: confianza por diseño dentro del campus.",
    tags: ["React", "TypeScript", "Design System", "Producto"],
    year: "2026",
    status: "En planeación",
    featured: true,
    category: "Web",
    caseStudy: [
      {
        heading: "El problema",
        body: "Comprar y vender entre estudiantes ocurre hoy en grupos de WhatsApp y Facebook Marketplace: sin verificación, sin reputación y con riesgo de estafa dentro del propio campus.",
      },
      {
        heading: "La solución",
        body: "Un marketplace cerrado donde solo entran estudiantes verificados con su correo institucional. La confianza es el producto: identidad real, reputación por transacciones y categorías pensadas para la vida universitaria.",
      },
      {
        heading: "Estado actual",
        body: "Fase de planeación con design system front-end completo ya especificado. Próximo hito: MVP de autenticación con verificación universitaria y flujo de publicación.",
      },
    ],
  },
  {
    slug: "contesta",
    title: "Contesta",
    monogram: "CT",
    oneLiner: "Agente de voz con IA que atiende negocios que pierden llamadas.",
    description:
      "Agente de voz que contesta el teléfono de negocios de Lima — dentistas, veterinarias, salones — que pierden clientes por llamadas sin responder.",
    tags: ["IA de voz", "Agentes", "Producto", "Startup"],
    year: "2026",
    status: "En desarrollo",
    featured: true,
    category: "IA",
    caseStudy: [
      {
        heading: "El problema",
        body: "Miles de negocios de servicios en Lima pierden clientes todos los días por una razón simple: nadie contesta el teléfono. Cada llamada perdida es una cita, una reserva o una venta que se va a la competencia.",
      },
      {
        heading: "La solución",
        body: "Un agente de voz con IA que atiende cada llamada, entiende lo que necesita el cliente, agenda o toma el recado, y reporta todo al dueño del negocio. Servicio por suscripción: ingreso recurrente para el negocio de construirlo y tranquilidad para el negocio que lo usa.",
      },
      {
        heading: "Estado actual",
        body: "En desarrollo activo, con foco inicial en negocios de servicios de Lima (dentistas, veterinarias, salones). Es la primera pieza de una visión más grande: agentes de IA de voz pensados para cómo habla y cómo opera el Perú.",
      },
    ],
  },
  {
    slug: "bot-telegram",
    title: "Claude Bridge",
    monogram: "CB",
    oneLiner: "Control remoto de Claude Code desde Telegram.",
    description:
      "Bot de Telegram que expone una sesión continua de Claude Code: programar y operar el entorno de desarrollo desde el móvil, desde cualquier lugar.",
    tags: ["Python", "Telegram API", "Claude Code", "Automatización"],
    year: "2026",
    status: "En desarrollo",
    category: "IA",
    caseStudy: [
      {
        heading: "El problema",
        body: "El desarrollo asistido por IA vive en la terminal de una PC. Lejos del escritorio, cualquier idea o corrección urgente tiene que esperar.",
      },
      {
        heading: "La solución",
        body: "Un puente entre Telegram y Claude Code: los mensajes del móvil se convierten en instrucciones para una sesión persistente del agente, con autonomía para ejecutar tareas largas y reportar resultados de vuelta al chat.",
      },
      {
        heading: "Retos técnicos",
        body: "Mantener sesión y contexto entre mensajes, decidir qué acciones puede ejecutar el agente sin confirmación, y transmitir salidas largas de terminal en un formato legible en el móvil.",
      },
    ],
  },
  {
    slug: "homelab",
    title: "Homelab",
    monogram: "HL",
    oneLiner: "Servidor casero para desarrollo remoto con IA.",
    description:
      "Una PC reconvertida en servidor Linux con Tailscale, suspensión inteligente y Wake-on-LAN: entorno de desarrollo accesible desde cualquier dispositivo.",
    tags: ["Linux", "Tailscale", "Wake-on-LAN", "Ollama", "Self-hosting"],
    year: "2025 — 2026",
    status: "En producción",
    category: "Infraestructura",
    caseStudy: [
      {
        heading: "El problema",
        body: "Un entorno de desarrollo potente atado a un escritorio, y modelos de IA locales (Ollama, LM Studio) que solo sirven cuando estás frente a la máquina.",
      },
      {
        heading: "La solución",
        body: "Convertir una PC en un servidor Linux siempre disponible pero eficiente: Tailscale crea una red privada entre todos los dispositivos, la máquina duerme cuando nadie la usa y despierta por Wake-on-LAN al primer acceso.",
      },
      {
        heading: "Retos técnicos",
        body: "Orquestar la suspensión sin matar sesiones activas, exponer los modelos locales (llama3 vía Ollama y una API compatible con OpenAI vía LM Studio) de forma segura, y automatizar la verificación del stack completo.",
      },
      {
        heading: "Resultados",
        body: "Acceso a Claude Code y a dos modelos locales desde el móvil o cualquier laptop, con consumo eléctrico mínimo.",
      },
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
