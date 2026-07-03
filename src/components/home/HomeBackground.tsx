"use client";

import { useEffect } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

/**
 * Fondo fijo de la home cuyo resplandor azul/violeta crece hacia la mitad
 * del recorrido y se apaga al llegar al final (negro → azul oscuro → negro).
 * Anima una CSS var que solo afecta opacity: barato para la GPU.
 */
export function HomeBackground() {
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const trigger = ScrollTrigger.create({
      start: 0,
      end: () => document.documentElement.scrollHeight - window.innerHeight,
      onUpdate: (self) => {
        const glow = Math.sin(self.progress * Math.PI);
        document.documentElement.style.setProperty("--home-glow", glow.toFixed(3));
      },
    });
    return () => {
      trigger.kill();
      document.documentElement.style.removeProperty("--home-glow");
    };
  }, []);

  return <div className="home-bg" aria-hidden="true" />;
}

/** Reveal en lote con GSAP: anima los hijos directos de una sección al entrar. */
export function useBatchReveal(selector: string) {
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const targets = gsap.utils.toArray<HTMLElement>(selector);
    if (!targets.length) return;

    gsap.set(targets, { autoAlpha: 0, y: 36 });
    const batch = ScrollTrigger.batch(targets, {
      start: "top 85%",
      once: true,
      onEnter: (els) =>
        gsap.to(els, { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.12, ease: "power3.out" }),
    });
    return () => batch.forEach((t) => t.kill());
  }, [selector]);
}
