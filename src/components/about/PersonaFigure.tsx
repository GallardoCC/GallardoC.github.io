"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { prefersReducedMotion } from "@/lib/gsap";

// La escena 3D solo pesa en cliente y nunca bloquea el primer render.
const PersonaScene = dynamic(() => import("@/components/three/PersonaScene"), {
  ssr: false,
  loading: () => null,
});

/**
 * Figura humana 3D estilizada de la página "Sobre mí".
 * SSR y primer render cliente muestran SIEMPRE el fallback estático
 * (evita mismatch de hidratación); tras montar, se eleva a 3D solo si
 * no hay reduced-motion y la pantalla no es móvil pequeña.
 */
export function PersonaFigure() {
  const [show3d, setShow3d] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    if (window.matchMedia("(max-width: 767px)").matches) return;
    setShow3d(true);
  }, []);

  return (
    <div className="persona-figure" aria-hidden="true">
      <div className="persona-figure__fallback" />
      {show3d && <PersonaScene />}
      <span className="persona-figure__caption">Retrato · cromo & datos</span>
    </div>
  );
}
