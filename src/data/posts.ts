export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  tag: string;
  /** Los artículos reales llegarán como MDX; por ahora la estructura está lista. */
  comingSoon?: boolean;
}

export const posts: Post[] = [
  {
    slug: "volatility-targeting-vs-tamano-fijo",
    title: "Volatility targeting: por qué le ganó a todo mi backtest",
    excerpt:
      "Comparé estrategias de dimensionamiento sobre 8-15 activos con un framework propio. El resultado cambió cómo gestiono el riesgo.",
    date: "2026-08-01",
    readingTime: "8 min",
    tag: "Quant",
    comingSoon: true,
  },
  {
    slug: "claude-code-desde-telegram",
    title: "Controlar Claude Code desde el móvil con Telegram",
    excerpt:
      "Cómo construí un puente entre un bot de Telegram y una sesión persistente de Claude Code con autonomía real.",
    date: "2026-08-15",
    readingTime: "6 min",
    tag: "IA",
    comingSoon: true,
  },
  {
    slug: "homelab-wake-on-lan",
    title: "Un homelab que duerme: Tailscale + Wake-on-LAN",
    excerpt:
      "Servidor casero siempre disponible pero eficiente: la PC despierta sola cuando la necesito y duerme cuando no.",
    date: "2026-09-01",
    readingTime: "7 min",
    tag: "Infraestructura",
    comingSoon: true,
  },
];
