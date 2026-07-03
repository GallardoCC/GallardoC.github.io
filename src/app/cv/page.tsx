import type { Metadata } from "next";
import { Badge, GlassCard, Reveal, Timeline, TimelineItem } from "@/components/gds";
import { PageHeader } from "@/components/ui/PageHeader";
import { site } from "@/data/site";
import { milestones } from "@/data/timeline";
import { techCategories } from "@/data/tech";
import { education, courses, courseAreas, languages, softSkills } from "@/data/education";

export const metadata: Metadata = {
  title: "CV",
  description:
    "CV interactivo de Juan Carlos Gallardo — quant trading, ingeniería de IA y formación completa. Versión PDF disponible.",
};

export default function CvPage() {
  return (
    <>
      <PageHeader
        eyebrow="CV"
        variant="steel"
        title="Currículum"
        highlight="interactivo"
        subtitle="La versión PDF descargable (ES/EN) estará disponible en breve."
      />
      <section className="section" style={{ paddingTop: "1rem" }}>
        <div className="container" style={{ maxWidth: "820px", display: "grid", gap: "1.25rem" }}>
          <Reveal>
            <GlassCard hover={false}>
              <h2 style={{ margin: "0 0 0.3rem" }}>{site.name}</h2>
              <p className="muted" style={{ margin: "0 0 1rem" }}>{site.role} · {site.location}</p>
              <div className="cta-row">
                <Badge dot>Disponible para proyectos</Badge>
                <a href={`mailto:${site.email}`} className="muted">{site.email}</a>
              </div>
            </GlassCard>
          </Reveal>
          <Reveal delay={100}>
            <GlassCard hover={false}>
              <h3 style={{ marginTop: 0 }}>Trayectoria</h3>
              <Timeline>
                {milestones.map((m) => (
                  <TimelineItem key={m.title} period={m.period} title={m.title} org={m.org} description={m.description} />
                ))}
              </Timeline>
            </GlassCard>
          </Reveal>
          <Reveal delay={150}>
            <GlassCard hover={false}>
              <h3 style={{ marginTop: 0 }}>Formación</h3>
              <Timeline>
                {education.map((e) => (
                  <TimelineItem
                    key={e.title}
                    period={e.period}
                    title={e.title}
                    org={e.institution}
                    description={e.description}
                  />
                ))}
              </Timeline>
              <h4 style={{ margin: "1.2rem 0 0.6rem" }}>Cursos y certificaciones</h4>
              {courseAreas.map((area) => (
                <div key={area} style={{ marginBottom: "0.8rem" }}>
                  <p className="muted" style={{ margin: "0 0 0.4rem", fontSize: "var(--gds-text-xs)" }}>{area}</p>
                  <div className="cta-row">
                    {courses.filter((c) => c.area === area).map((c) => (
                      <Badge key={c.name} variant="outline">{c.name}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </GlassCard>
          </Reveal>
          <Reveal delay={200}>
            <GlassCard hover={false}>
              <h3 style={{ marginTop: 0 }}>Idiomas y habilidades</h3>
              <div className="cta-row" style={{ marginBottom: "0.8rem" }}>
                {languages.map((l) => (
                  <Badge key={l.name} variant="accent">{l.name} · {l.level}</Badge>
                ))}
              </div>
              <div className="cta-row">
                {softSkills.map((s) => (
                  <Badge key={s}>{s}</Badge>
                ))}
              </div>
            </GlassCard>
          </Reveal>
          <Reveal delay={250}>
            <GlassCard hover={false}>
              <h3 style={{ marginTop: 0 }}>Stack principal</h3>
              <div className="cta-row">
                {techCategories.flatMap((c) => c.items.filter((i) => i.level === "Avanzado").map((i) => (
                  <Badge key={i.name}>{i.name}</Badge>
                )))}
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </section>
    </>
  );
}
