"use client";

import { useRef } from "react";
import { prefersReducedMotion } from "@/lib/gsap";

/**
 * Tilt 3D que sigue al mouse. Escribe la transformación directamente
 * (sin estado de React) para no re-renderizar en cada movimiento.
 */
export function Tilt({
  children,
  max = 7,
  className = "",
}: {
  children: React.ReactNode;
  max?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    if (prefersReducedMotion() || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    ref.current.style.transform =
      `perspective(900px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg)`;
  };

  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div ref={ref} className={`tilt ${className}`.trim()} onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
    </div>
  );
}
