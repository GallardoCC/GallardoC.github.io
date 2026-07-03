import type { Metadata } from "next";
import { Reveal, Timeline, TimelineItem } from "@/components/gds";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PageHeader } from "@/components/ui/PageHeader";
import { milestones } from "@/data/timeline";

export const metadata: Metadata = {
  title: "Experiencia",
  description:
    "Trayectoria de Juan Carlos Gallardo: 4 años en los mercados, formación autodidacta, universidad y el camino hacia fundar un hedge fund.",
};

export default function ExperienciaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Trayectoria"
        variant="steel"
        title="El camino,"
        highlight="hito por hito"
        subtitle="De la primera cuenta de bolsa a los 13 años al trading cuantitativo y la ingeniería de IA."
      />
      <section className="section" style={{ paddingTop: "1rem" }}>
        <div className="container" style={{ maxWidth: "760px" }}>
          <Reveal>
            <Timeline>
              {milestones.map((m) => (
                <TimelineItem key={m.title} period={m.period} title={m.title} org={m.org} description={m.description} />
              ))}
            </Timeline>
          </Reveal>
          <div className="section-cta cta-row">
            <ButtonLink href="/logros" variant="outline">Ver logros →</ButtonLink>
            <ButtonLink href="/cv" variant="ghost">Descargar CV</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
