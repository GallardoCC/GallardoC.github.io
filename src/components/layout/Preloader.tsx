"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";

/**
 * Preloader de marca: monograma cromado + barra de carga.
 * Se oculta al cargar la página (con un mínimo breve para evitar parpadeo)
 * y nunca dura más de 2.5 s aunque algo tarde en cargar.
 */
export function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const minDelay = new Promise((r) => setTimeout(r, 500));
    const loaded = new Promise<void>((resolve) => {
      if (document.readyState === "complete") resolve();
      else window.addEventListener("load", () => resolve(), { once: true });
    });
    const maxDelay = new Promise((r) => setTimeout(r, 2500));

    Promise.race([Promise.all([minDelay, loaded]), maxDelay]).then(() => setDone(true));
  }, []);

  return (
    <div className={`preloader${done ? " preloader--done" : ""}`} aria-hidden={done}>
      <span className="preloader__logo">{site.shortName}</span>
      <span className="preloader__bar" />
    </div>
  );
}
