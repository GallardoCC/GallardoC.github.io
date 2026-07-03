"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ProjectCard, Reveal } from "@/components/gds";
import { Tilt } from "@/components/motion/Tilt";
import { projects, type Project } from "@/data/projects";

const categories = ["Todos", "Quant", "Web", "IA", "Infraestructura"] as const;

/** Galería filtrable por categoría con tarjetas tilt enlazadas a su caso de estudio. */
export function ProjectsGallery() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("Todos");

  const visible = useMemo<Project[]>(
    () => (filter === "Todos" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <>
      <div className="cta-row" role="group" aria-label="Filtrar por categoría" style={{ marginBottom: "2rem" }}>
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFilter(cat)}
            className={`gds-btn gds-btn--sm ${filter === cat ? "gds-btn--primary" : "gds-btn--ghost"}`}
            aria-pressed={filter === cat}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid-3" style={{ alignItems: "stretch" }}>
        {visible.map((project, i) => (
          <Reveal key={project.slug} delay={i * 80}>
            <Tilt>
              <Link
                href={`/proyectos/${project.slug}`}
                style={{ textDecoration: "none", display: "block", height: "100%" }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  tags={project.tags.slice(0, 4)}
                  monogram={project.monogram}
                />
              </Link>
            </Tilt>
          </Reveal>
        ))}
      </div>
    </>
  );
}
