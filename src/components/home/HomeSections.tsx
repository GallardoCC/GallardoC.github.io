import Link from "next/link";
import {
  Badge,
  GlassCard,
  GradientText,
  Marquee,
  Reveal,
  SectionHeading,
  SocialLink,
  Timeline,
  TimelineItem,
} from "@/components/gds";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CountUpStat } from "@/components/motion/CountUpStat";
import { Magnetic } from "@/components/motion/Magnetic";
import { site } from "@/data/site";
import { featuredProjects } from "@/data/projects";
import { marqueeTech, techCategories } from "@/data/tech";
import { milestones, achievements } from "@/data/timeline";
import { posts } from "@/data/posts";

/* ---------- 2 · Sobre mí ---------- */
export function AboutPreview() {
  return (
    <section className="section panel panel--about" aria-labelledby="sobre-mi-titulo">
      <div className="panel-orb panel-orb--blue" aria-hidden="true" />
      <div className="container grid-2">
        <Reveal direction="left">
          <div>
            <SectionHeading
              eyebrow="01 · Sobre mí"
              title={<span id="sobre-mi-titulo">Construyo con <GradientText>ambición</GradientText> de fundador</span>}
            />
            <p className="muted">
              Empecé a los 13 con dos cosas a la vez: programación y bolsa de valores. Cuatro años
              después opero el Nasdaq con modelos cuantitativos propios, estudio Ingeniería en IA y
              Ciencia de Datos, y construyo startups en el camino. El objetivo final: fundar un
              hedge fund.
            </p>
            <div className="section-cta">
              <ButtonLink href="/sobre-mi" variant="outline">Conocer mi historia →</ButtonLink>
            </div>
          </div>
        </Reveal>
        <Reveal direction="right" delay={150}>
          <div className="grid-4" style={{ gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            {site.stats.map((stat) => (
              <CountUpStat key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- 3 · Tecnologías ---------- */
export function TechPreview() {
  const half = Math.ceil(marqueeTech.length / 2);
  return (
    <section className="section panel panel--tech" aria-labelledby="tech-titulo">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="02 · Stack"
            title={<span id="tech-titulo">Tecnologías que <GradientText>domino</GradientText></span>}
            subtitle="De los mercados al código: herramientas elegidas por resultados, no por moda."
          />
        </Reveal>
        <Reveal delay={100}>
          <div className="grid-4" style={{ marginBottom: "2.5rem" }}>
            {techCategories.slice(0, 4).map((cat) => (
              <GlassCard key={cat.title}>
                <h3 style={{ margin: "0 0 0.4rem" }}>{cat.title}</h3>
                <p className="muted" style={{ margin: 0, fontSize: "var(--gds-text-sm)" }}>{cat.blurb}</p>
              </GlassCard>
            ))}
          </div>
        </Reveal>
      </div>
      <Reveal delay={200}>
        <Marquee duration={34}>
          {marqueeTech.slice(0, half).map((t) => <Badge key={t}>{t}</Badge>)}
        </Marquee>
        <div style={{ height: "0.8rem" }} />
        <Marquee duration={30} className="marquee--reverse">
          {marqueeTech.slice(half).map((t) => <Badge key={t} variant="outline">{t}</Badge>)}
        </Marquee>
      </Reveal>
      <div className="container section-cta">
        <ButtonLink href="/tecnologias" variant="outline">Ver stack completo →</ButtonLink>
      </div>
    </section>
  );
}

/* ---------- 4 · Proyectos destacados ---------- */
export function ProjectsPreview() {
  // Proyecto héroe: el primero en producción (o el primer destacado)
  const heroProject =
    featuredProjects.find((p) => p.status === "En producción") ?? featuredProjects[0];
  const secondary = featuredProjects.filter((p) => p !== heroProject).slice(0, 3);

  return (
    <section className="section panel panel--projects" aria-labelledby="proyectos-titulo">
      <div className="panel-orb panel-orb--violet" aria-hidden="true" />
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="03 · Proyectos"
            title={<span id="proyectos-titulo">Trabajo <GradientText glow>destacado</GradientText></span>}
            subtitle="Cada proyecto resuelve un problema real y tiene su caso de estudio."
          />
        </Reveal>
        <div className="pj-showcase">
          <Link href={`/proyectos/${heroProject.slug}`} className="pj-hero">
            <span className="pj-hero__glow" aria-hidden="true" />
            <div className="pj-hero__top">
              <span className="pj-hero__monogram" aria-hidden="true">{heroProject.monogram}</span>
              <Badge dot>{heroProject.status}</Badge>
            </div>
            <div>
              <span className="pj-eyebrow">{heroProject.category} · {heroProject.year}</span>
              <h3 className="pj-hero__title">{heroProject.title}</h3>
              <p className="muted" style={{ margin: 0 }}>{heroProject.description}</p>
              <div className="pj-tags">
                {heroProject.tags.slice(0, 5).map((tag) => (
                  <span key={tag} className="pj-tag">{tag}</span>
                ))}
              </div>
              <span className="pj-link">Ver caso de estudio →</span>
            </div>
          </Link>
          <div className="pj-side">
            {secondary.map((project, i) => (
              <Link
                key={project.slug}
                href={`/proyectos/${project.slug}`}
                className={`pj-mini ${i % 2 === 0 ? "pj-mini--blue" : "pj-mini--violet"}`}
              >
                <span className="pj-mini__monogram" aria-hidden="true">{project.monogram}</span>
                <span className="pj-mini__text">
                  <span className="pj-mini__title">{project.title}</span>
                  <span className="pj-mini__desc">{project.oneLiner}</span>
                </span>
                <span className="pj-mini__arrow" aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </div>
        <div className="section-cta">
          <ButtonLink href="/proyectos">Explorar todos los proyectos →</ButtonLink>
        </div>
      </div>
    </section>
  );
}

/* ---------- 5 · Experiencia + logros ---------- */
export function ExperiencePreview() {
  return (
    <section className="section panel panel--exp" aria-labelledby="experiencia-titulo">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="04 · Trayectoria"
            title={<span id="experiencia-titulo">Experiencia y <GradientText>logros</GradientText></span>}
          />
        </Reveal>
        <div className="grid-2" style={{ alignItems: "start" }}>
          <Reveal direction="left" delay={100}>
            <Timeline>
              {milestones.slice(0, 3).map((m) => (
                <TimelineItem key={m.title} period={m.period} title={m.title} org={m.org} description={m.description} />
              ))}
            </Timeline>
          </Reveal>
          <Reveal direction="right" delay={200}>
            <div style={{ display: "grid", gap: "1rem" }}>
              {achievements.map((a) => (
                <GlassCard key={a.title}>
                  <div className="cta-row" style={{ justifyContent: "space-between" }}>
                    <strong>{a.title}</strong>
                    <Badge variant="accent">{a.year}</Badge>
                  </div>
                  <p className="muted" style={{ margin: "0.4rem 0 0", fontSize: "var(--gds-text-sm)" }}>{a.context}</p>
                </GlassCard>
              ))}
            </div>
          </Reveal>
        </div>
        <div className="section-cta">
          <ButtonLink href="/experiencia" variant="outline">Ver trayectoria completa →</ButtonLink>
        </div>
      </div>
    </section>
  );
}

/* ---------- 6 · Blog ---------- */
export function BlogPreview() {
  return (
    <section className="section panel panel--blog" aria-labelledby="blog-titulo">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="05 · Blog"
            title={<span id="blog-titulo">Ideas en <GradientText>construcción</GradientText></span>}
            subtitle="Notas técnicas sobre quant, IA e infraestructura — y próximamente, contenido sobre mercados."
          />
        </Reveal>
        <div className="grid-3">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 120}>
              <GlassCard>
                <Badge variant="outline">{post.tag}</Badge>
                <h3 style={{ margin: "0.8rem 0 0.5rem" }}>{post.title}</h3>
                <p className="muted" style={{ fontSize: "var(--gds-text-sm)", margin: 0 }}>{post.excerpt}</p>
                <p style={{ color: "var(--gds-text-faint)", fontSize: "var(--gds-text-xs)", margin: "1rem 0 0" }}>
                  {post.readingTime} de lectura · próximamente
                </p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
        <div className="section-cta">
          <ButtonLink href="/blog" variant="outline">Leer el blog →</ButtonLink>
        </div>
      </div>
    </section>
  );
}

/* ---------- 7 · Contacto ---------- */
export function ContactCta() {
  return (
    <section className="section panel panel--contact" aria-labelledby="contacto-titulo" style={{ textAlign: "center" }}>
      <div className="panel-orb panel-orb--violet panel-orb--center" aria-hidden="true" />
      <div className="container">
        <Reveal direction="scale">
          <h2
            id="contacto-titulo"
            style={{ fontSize: "clamp(2.2rem, 6vw, 4.2rem)", letterSpacing: "-0.03em", margin: "0 0 1rem" }}
          >
            <GradientText glow>¿Construimos algo grande?</GradientText>
          </h2>
          <p className="muted" style={{ maxWidth: "48ch", margin: "0 auto 2.2rem" }}>
            Abierto a colaborar en proyectos de trading cuantitativo, IA y tecnología —
            con quien sea que quiera construir en serio. Respondo rápido.
          </p>
          <div className="cta-row" style={{ justifyContent: "center", marginBottom: "2.2rem" }}>
            <Magnetic>
              <ButtonLink href="/contacto" size="lg">Contáctame</ButtonLink>
            </Magnetic>
            <a href={`mailto:${site.email}`} className="muted" style={{ textDecoration: "none" }}>
              {site.email}
            </a>
          </div>
          <div className="cta-row" style={{ justifyContent: "center" }}>
            <SocialLink href={site.socials.github} label="GitHub">GH</SocialLink>
            <SocialLink href={site.socials.x} label="X">X</SocialLink>
            <SocialLink href={`mailto:${site.email}`} label="Correo">@</SocialLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
