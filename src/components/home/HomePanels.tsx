"use client";

import { useEffect } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

/**
 * Coreografía de paneles de la home (scroll-driven, GSAP ScrollTrigger):
 * - El hero queda "pinneado" (sticky vía CSS en .hero-pin) mientras el bloque
 *   .home-flow sube por encima; aquí se anima la salida del hero (fade + scale
 *   + oscurecimiento del canvas) con scrub ligado a ese solape.
 * - Cada .panel entra con un desplazamiento sutil y su gradiente de fondo se
 *   enciende (var CSS --panel-in), solo en desktop con puntero fino.
 * - Orbes decorativos con parallax y coreografía propia de la sección de
 *   proyectos (tarjeta héroe desde la izquierda, secundarias en stagger).
 * - Reduced motion / móvil: scroll normal; los reveals simples ya existentes
 *   se encargan del resto. Los estados por defecto en CSS dejan todo visible.
 */
export function HomePanels({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // — Salida del hero (todas las pantallas: es barato, solo transform/opacity)
      mm.add("(min-width: 0px)", () => {
        gsap.to(".hero-3d__content", {
          autoAlpha: 0,
          scale: 0.94,
          yPercent: -6,
          transformOrigin: "50% 40%",
          ease: "none",
          scrollTrigger: {
            trigger: ".home-flow",
            start: "top bottom",
            end: "top 20%",
            scrub: true,
          },
        });
        gsap.to(".hero-3d__scroll-hint", {
          autoAlpha: 0,
          ease: "none",
          scrollTrigger: {
            trigger: ".home-flow",
            start: "top 99%",
            end: "top 82%",
            scrub: true,
          },
        });
        gsap.to(".hero-3d", {
          "--hero-dim": 0.85,
          ease: "none",
          scrollTrigger: {
            trigger: ".home-flow",
            start: "top 90%",
            end: "top 22%",
            scrub: true,
          },
        });
      });

      // — Transiciones entre paneles: solo desktop con puntero (los pins/scrubs
      //   agresivos penalizan UX táctil; en móvil quedan los reveals simples).
      mm.add("(min-width: 861px) and (hover: hover)", () => {
        gsap.utils.toArray<HTMLElement>(".panel").forEach((panel) => {
          gsap.fromTo(
            panel,
            { y: 56, "--panel-in": 0.2 },
            {
              y: 0,
              "--panel-in": 1,
              ease: "none",
              scrollTrigger: {
                trigger: panel,
                start: "top 96%",
                end: "top 46%",
                scrub: true,
              },
            },
          );
        });

        gsap.utils.toArray<HTMLElement>(".panel-orb").forEach((orb) => {
          gsap.fromTo(
            orb,
            { yPercent: 28 },
            {
              yPercent: -28,
              ease: "none",
              scrollTrigger: {
                trigger: orb.parentElement,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          );
        });

        // Sección de proyectos: entrada coreografiada (una sola vez)
        gsap.from(".pj-hero", {
          x: -70,
          autoAlpha: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".pj-showcase", start: "top 78%", once: true },
        });
        gsap.from(".pj-mini", {
          x: 70,
          autoAlpha: 0,
          duration: 0.9,
          stagger: 0.14,
          ease: "power3.out",
          scrollTrigger: { trigger: ".pj-showcase", start: "top 78%", once: true },
        });
      });
    });

    // Los svh del hero-pin dependen del layout final
    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return <>{children}</>;
}
