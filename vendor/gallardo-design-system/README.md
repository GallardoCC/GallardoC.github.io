# GDS — Gallardo Design System

Design system del portafolio personal de Juan Carlos Gallardo.

**Lenguaje visual:** dark monocromático violeta sobre negro `#030014`, glassmorphism, texto con degradado y glow, animaciones premium (aurora, typing, reveal al scroll, marquee, border beam). Estética futurista-minimalista 2026–2028, inspirada en los portafolios virales tipo EkiZR V5 y en la línea Linear/Aceternity.

**Tipografía:** Space Grotesk (300–700, OFL) para todo; mono del sistema para eyebrows/periodos.

## Uso

```tsx
import { Hero, Button, GradientText, TypingText, Badge } from "@gallardo/design-system";
import "@gallardo/design-system/styles.css";
```

## Build

```bash
npm install
npm run build   # tsup → dist/index.js + dist/index.d.ts
```

18 componentes: Button, GradientText, TypingText, GlassCard, Badge, Navbar, Hero, SectionHeading, ProjectCard, StatCard, Timeline, TimelineItem, Marquee, AuroraBackground, Reveal, Input, Textarea, SocialLink, Footer.

Sincronizado a claude.ai/design con `/design-sync`.
