import type { Metadata } from "next";
import { Badge, GlassCard, Reveal } from "@/components/gds";
import { PageHeader } from "@/components/ui/PageHeader";
import { achievements } from "@/data/timeline";

export const metadata: Metadata = {
  title: "Logros",
  description:
    "Hitos reales de Juan Carlos Gallardo: 4 años en los mercados, modelos cuantitativos propios, universidad y proyectos construidos.",
};

export default function LogrosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Logros"
        variant="aurora"
        title="Resultados,"
        highlight="no promesas"
        subtitle="Hitos reales de cuatro años construyendo entre mercados y tecnología. Los resultados de trading son de cuentas propias."
      />
      <section className="section" style={{ paddingTop: "1rem" }}>
        <div className="container grid-3">
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={i * 120}>
              <GlassCard glow={i === 0}>
                <Badge variant="accent">{a.year}</Badge>
                <h3 style={{ margin: "0.8rem 0 0.4rem" }}>{a.title}</h3>
                <p className="muted" style={{ margin: 0, fontSize: "var(--gds-text-sm)" }}>{a.context}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
