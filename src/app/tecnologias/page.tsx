import type { Metadata } from "next";
import { Badge, GlassCard, Reveal } from "@/components/gds";
import { PageHeader } from "@/components/ui/PageHeader";
import { techCategories } from "@/data/tech";

export const metadata: Metadata = {
  title: "Tecnologías",
  description:
    "Stack completo de Juan Carlos Gallardo por categorías, con nivel de dominio real y los proyectos donde se usó cada tecnología.",
};

const levelVariant = {
  Avanzado: "accent",
  Intermedio: "default",
  Aprendiendo: "outline",
} as const;

export default function TecnologiasPage() {
  return (
    <>
      <PageHeader
        eyebrow="Stack"
        variant="blue"
        title="Tecnologías con"
        highlight="kilometraje real"
        subtitle="Nivel de dominio honesto y en qué proyecto se usó cada una."
      />
      <section className="section" style={{ paddingTop: "1rem" }}>
        <div className="container" style={{ display: "grid", gap: "1.25rem" }}>
          {techCategories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 80}>
              <GlassCard hover={false}>
                <h2 style={{ margin: "0 0 0.3rem" }}>{cat.title}</h2>
                <p className="muted" style={{ margin: "0 0 1.2rem", fontSize: "var(--gds-text-sm)" }}>{cat.blurb}</p>
                <div style={{ display: "grid", gap: "0.7rem" }}>
                  {cat.items.map((item) => (
                    <div key={item.name} className="cta-row" style={{ justifyContent: "space-between", borderBottom: "1px solid var(--gds-border)", paddingBottom: "0.7rem" }}>
                      <strong>{item.name}</strong>
                      <span className="cta-row" style={{ gap: "0.5rem" }}>
                        {item.usedIn?.map((p) => (
                          <span key={p} style={{ color: "var(--gds-text-faint)", fontSize: "var(--gds-text-xs)" }}>{p}</span>
                        ))}
                        <Badge variant={levelVariant[item.level]}>{item.level}</Badge>
                      </span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
