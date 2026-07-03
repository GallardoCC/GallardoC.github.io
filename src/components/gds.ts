"use client";

/**
 * Frontera cliente para el GDS: los componentes del design system usan hooks
 * y estado, así que se re-exportan desde aquí para poder consumirlos también
 * dentro de Server Components sin marcar cada página como cliente.
 */
export {
  AuroraBackground,
  Badge,
  Button,
  Footer,
  GlassCard,
  GradientText,
  Hero,
  Input,
  Marquee,
  Navbar,
  ProjectCard,
  Reveal,
  SectionHeading,
  SocialLink,
  StatCard,
  Textarea,
  Timeline,
  TimelineItem,
  TypingText,
} from "@gallardo/design-system";
