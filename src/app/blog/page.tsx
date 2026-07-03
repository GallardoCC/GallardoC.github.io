import type { Metadata } from "next";
import { Badge, GlassCard, Reveal } from "@/components/gds";
import { PageHeader } from "@/components/ui/PageHeader";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notas técnicas de Juan Carlos Gallardo sobre trading cuantitativo, IA e infraestructura propia.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Blog"
        variant="chrome"
        title="Notas de"
        highlight="ingeniería"
        subtitle="Los primeros artículos están en el horno. Esta es la agenda."
      />
      <section className="section" style={{ paddingTop: "1rem" }}>
        <div className="container" style={{ display: "grid", gap: "1.25rem", maxWidth: "760px" }}>
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 100}>
              <GlassCard>
                <div className="cta-row" style={{ justifyContent: "space-between", marginBottom: "0.6rem" }}>
                  <Badge variant="outline">{post.tag}</Badge>
                  <span style={{ color: "var(--gds-text-faint)", fontSize: "var(--gds-text-xs)" }}>
                    {post.readingTime} · próximamente
                  </span>
                </div>
                <h2 style={{ margin: "0 0 0.5rem", fontSize: "var(--gds-text-xl)" }}>{post.title}</h2>
                <p className="muted" style={{ margin: 0 }}>{post.excerpt}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
