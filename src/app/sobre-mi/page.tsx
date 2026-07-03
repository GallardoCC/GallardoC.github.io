import type { Metadata } from "next";
import { Badge, GlassCard, GradientText, Reveal, Timeline, TimelineItem } from "@/components/gds";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PageHeader } from "@/components/ui/PageHeader";
import { CountUpStat } from "@/components/motion/CountUpStat";
import { PersonaFigure } from "@/components/about/PersonaFigure";
import { site } from "@/data/site";
import { milestones } from "@/data/timeline";

export const metadata: Metadata = {
  title: "Sobre mí",
  description:
    "Quién es Juan Carlos Gallardo: quant trader peruano, estudiante de Ingeniería en IA y Ciencia de Datos, con 4 años en los mercados y el objetivo de fundar un hedge fund.",
};

const values = [
  {
    title: "Construir > opinar",
    body: "Las ideas se validan con proyectos funcionando y estrategias backtesteadas, no con presentaciones. Todo lo que afirmo en este sitio tiene código o datos detrás.",
  },
  {
    title: "Medir todo",
    body: "Del backtesting al riesgo de cada posición: si no se puede medir, no se puede mejorar. Los números mandan sobre la intuición — también cuando duele.",
  },
  {
    title: "Pensar en décadas",
    body: "Cada proyecto es un ladrillo de algo más grande: modelos y productos hoy, un hedge fund y startups de IA mañana. Empecé a los 13 justamente para llegar antes.",
  },
];

export default function SobreMiPage() {
  return (
    <>
      <PageHeader
        eyebrow="Sobre mí"
        variant="chrome"
        title="La historia detrás del"
        highlight="código"
        subtitle="Quant trader y estudiante de Ingeniería en IA · Lima, Perú · GMT-5"
      />
      <section className="section" style={{ paddingTop: "1rem" }}>
        <div className="container grid-2" style={{ alignItems: "start" }}>
          <Reveal direction="left">
            <div>
              <p className="muted">
                A los 13 años empecé dos cosas el mismo año: mis primeros cursos de programación y
                mi primera cuenta en la bolsa de valores. Cuatro años después siguen siendo los dos
                ejes de todo lo que hago. He operado <GradientText>acciones, ETFs, criptomonedas y
                forex</GradientText>, probando todos los estilos de trading hasta encontrar mi
                terreno: el Nasdaq y el análisis — técnico y fundamental — de empresas, con especial
                afinidad por las Siete Magníficas. En mis mejores etapas he crecido cuentas propias
                con rendimientos de 100% y 200%.
              </p>
              <p className="muted">
                Hoy estudio <GradientText>Ingeniería en Inteligencia Artificial y Ciencia de
                Datos</GradientText> en la Universidad Científica del Sur y me dedico al trading
                cuantitativo: modelos matemáticos, backtesting propio y gestión de riesgo. En el
                camino he emprendido con importaciones desde China y e-commerce, y he pasado por
                ciberseguridad, hacking ético y años de Linux (Arch, Kali, Ubuntu — los he probado
                todos).
              </p>
              <p className="muted">
                El objetivo es claro: fundar un <GradientText>hedge fund</GradientText>. Y mientras
                construyo hacia allá, voy creando startups de IA. Próximamente, también contenido
                sobre mercados.
              </p>
              <div className="section-cta cta-row">
                <ButtonLink href="/proyectos">Ver lo que construyo</ButtonLink>
                <ButtonLink href="/contacto" variant="ghost">Hablemos</ButtonLink>
              </div>
            </div>
          </Reveal>
          <Reveal direction="right" delay={150}>
            <div style={{ display: "grid", gap: "1rem" }}>
              <PersonaFigure />
              <GlassCard beam>
                <Badge dot>Ahora mismo</Badge>
                <h3 style={{ margin: "0.8rem 0 0.4rem" }}>En qué estoy trabajando</h3>
                <p className="muted" style={{ margin: 0, fontSize: "var(--gds-text-sm)" }}>
                  Primer ciclo de Ingeniería en IA, modelos cuantitativos sobre el Nasdaq y
                  &quot;Contesta&quot;, un agente de voz con IA para negocios de Lima que pierden
                  llamadas — la primera de mis startups de IA.
                </p>
              </GlassCard>
              <div className="grid-4" style={{ gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                {site.stats.map((s) => (
                  <CountUpStat key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="section" aria-label="Valores">
        <div className="container">
          <div className="grid-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 120}>
                <GlassCard>
                  <h3 style={{ margin: "0 0 0.5rem" }}>{v.title}</h3>
                  <p className="muted" style={{ margin: 0, fontSize: "var(--gds-text-sm)" }}>{v.body}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section" aria-label="Línea de vida">
        <div className="container">
          <Reveal>
            <Timeline>
              {milestones.map((m) => (
                <TimelineItem key={m.title} period={m.period} title={m.title} org={m.org} description={m.description} />
              ))}
            </Timeline>
          </Reveal>
        </div>
      </section>
    </>
  );
}
