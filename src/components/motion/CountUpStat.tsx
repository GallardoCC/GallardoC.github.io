"use client";

import { useEffect, useRef, useState } from "react";
import { StatCard } from "@/components/gds";
import { prefersReducedMotion } from "@/lib/gsap";

/**
 * StatCard con contador animado: el número sube de 0 al valor real
 * la primera vez que entra en viewport (ease-out cúbico, ~1.4 s).
 */
export function CountUpStat({
  value,
  suffix,
  label,
}: {
  value: string;
  suffix?: string;
  label: string;
}) {
  const target = parseFloat(value);
  const decimals = value.includes(".") ? value.split(".")[1].length : 0;
  // Arranca en "0" también en el servidor: mismo HTML en SSR y en cliente
  // (inicializar según prefers-reduced-motion causaba un mismatch de hidratación).
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (prefersReducedMotion() || Number.isNaN(target)) {
      setDisplay(value);
      return;
    }
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        const t0 = performance.now();
        const duration = 1400;
        const tick = (now: number) => {
          const p = Math.min((now - t0) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setDisplay((target * eased).toFixed(decimals));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, decimals, value]);

  return (
    <div ref={ref}>
      <StatCard value={display} suffix={suffix} label={label} />
    </div>
  );
}
