import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge, GlassCard, GradientText, Reveal, SectionHeading } from "@/components/gds";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { getProject, projects } from "@/data/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.oneLiner,
    openGraph: { title: project.title, description: project.oneLiner },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <div className="container page-top">
        <Reveal>
          <p style={{ color: "var(--gds-text-faint)", letterSpacing: "0.2em", textTransform: "uppercase", fontSize: "var(--gds-text-xs)" }}>
            Caso de estudio · {project.year}
          </p>
          <h1 style={{ fontSize: "clamp(2.4rem, 6vw, 4.5rem)", letterSpacing: "-0.03em", margin: "0.4rem 0 1rem" }}>
            <GradientText glow>{project.title}</GradientText>
          </h1>
          <p className="muted" style={{ fontSize: "var(--gds-text-lg)", maxWidth: "56ch" }}>{project.description}</p>
          <div className="cta-row" style={{ margin: "1.5rem 0" }}>
            <Badge dot={project.status !== "En planeación"} variant="accent">{project.status}</Badge>
            {project.tags.map((tag) => <Badge key={tag} variant="outline">{tag}</Badge>)}
          </div>
        </Reveal>
      </div>
      <section className="section" style={{ paddingTop: "1.5rem" }}>
        <div className="container" style={{ display: "grid", gap: "1.25rem", maxWidth: "820px", marginInline: "auto" }}>
          {project.caseStudy.map((section, i) => (
            <Reveal key={section.heading} delay={i * 100}>
              <GlassCard hover={false}>
                <SectionHeading eyebrow={`0${i + 1}`} title={section.heading} />
                <p className="muted" style={{ margin: 0 }}>{section.body}</p>
              </GlassCard>
            </Reveal>
          ))}
          {project.links && project.links.length > 0 && (
            <Reveal>
              <div className="cta-row">
                {project.links.map((l) => (
                  <a key={l.href} className="gds-btn gds-btn--outline gds-btn--md" href={l.href} target="_blank" rel="noreferrer">
                    {l.label} ↗
                  </a>
                ))}
              </div>
            </Reveal>
          )}
        </div>
      </section>
      <section className="section" style={{ borderTop: "1px solid var(--gds-border)" }}>
        <div className="container cta-row" style={{ justifyContent: "space-between" }}>
          <ButtonLink href="/proyectos" variant="ghost">← Todos los proyectos</ButtonLink>
          <Link href={`/proyectos/${next.slug}`} style={{ textDecoration: "none", color: "var(--gds-text-muted)" }}>
            Siguiente: <strong style={{ color: "var(--gds-text)" }}>{next.title}</strong> →
          </Link>
        </div>
      </section>
    </>
  );
}
