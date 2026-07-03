import type { Metadata } from "next";
import { Badge, GlassCard, Reveal, SocialLink } from "@/components/gds";
import { PageHeader } from "@/components/ui/PageHeader";
import { ContactForm } from "./ContactForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contacta a Juan Carlos Gallardo para proyectos, colaboraciones u oportunidades.",
};

export default function ContactoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contacto"
        variant="duo"
        title="Hablemos de tu"
        highlight="proyecto"
        subtitle="Respondo en menos de 24 horas."
      />
      <section className="section" style={{ paddingTop: "1rem" }}>
        <div className="container grid-2" style={{ alignItems: "start" }}>
          <Reveal direction="left">
            <ContactForm />
          </Reveal>
          <Reveal direction="right" delay={150}>
            <GlassCard hover={false}>
              <Badge dot>Disponible para proyectos</Badge>
              <h3 style={{ margin: "1rem 0 0.4rem" }}>Directo al correo</h3>
              <p style={{ margin: "0 0 1.5rem" }}>
                <a href={`mailto:${site.email}`} style={{ color: "var(--gds-silver-200)" }}>{site.email}</a>
              </p>
              <h3 style={{ margin: "0 0 0.4rem" }}>Ubicación</h3>
              <p className="muted" style={{ margin: "0 0 1.5rem" }}>{site.location}</p>
              <h3 style={{ margin: "0 0 0.8rem" }}>Redes</h3>
              <div className="cta-row">
                <SocialLink href={site.socials.github} label="GitHub">GH</SocialLink>
                <SocialLink href={site.socials.linkedin} label="LinkedIn">in</SocialLink>
                <SocialLink href={site.socials.x} label="X">X</SocialLink>
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </section>
    </>
  );
}
