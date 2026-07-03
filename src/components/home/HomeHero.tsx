"use client";

import dynamic from "next/dynamic";
import { AuroraBackground, Badge, GradientText, TypingText } from "@/components/gds";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Magnetic } from "@/components/motion/Magnetic";
import { site } from "@/data/site";

// La escena 3D solo pesa en el cliente y no bloquea el primer render.
const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
  loading: () => null,
});

export function HomeHero() {
  return (
    <section className="hero-3d" aria-label="Presentación">
      <AuroraBackground className="hero-3d__canvas" />
      <HeroScene />
      <div className="container">
        <div className="hero-3d__content">
          <Badge dot>Disponible para proyectos</Badge>
          <h1 style={{ fontSize: "var(--gds-text-hero)", lineHeight: 1.05, margin: "1.2rem 0 0.8rem", letterSpacing: "-0.03em" }}>
            <GradientText glow>{site.name}</GradientText>
          </h1>
          <p style={{ fontSize: "var(--gds-text-lg)", minHeight: "1.8em", margin: "0 0 1rem" }}>
            <TypingText words={[...site.typingRoles]} prefix="" />
          </p>
          <p className="muted" style={{ maxWidth: "46ch", marginBottom: "2rem" }}>
            {site.tagline}
          </p>
          <div className="cta-row">
            <Magnetic>
              <ButtonLink href="/proyectos" size="lg">Ver proyectos</ButtonLink>
            </Magnetic>
            <Magnetic strength={0.2}>
              <ButtonLink href="/cv" variant="ghost" size="lg">Descargar CV</ButtonLink>
            </Magnetic>
          </div>
        </div>
      </div>
      <div className="hero-3d__scroll-hint" aria-hidden="true">Scroll</div>
    </section>
  );
}
