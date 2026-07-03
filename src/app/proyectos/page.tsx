import type { Metadata } from "next";
import { ProjectsGallery } from "./ProjectsGallery";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Galería de proyectos de Juan Carlos Gallardo: trading cuantitativo, IA, web e infraestructura. Cada uno con su caso de estudio.",
};

export default function ProyectosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Proyectos"
        variant="violet"
        title="Problemas reales,"
        highlight="soluciones construidas"
        subtitle="Filtra por categoría y entra a cada caso de estudio."
      />
      <section className="section" style={{ paddingTop: "1rem" }}>
        <div className="container">
          <ProjectsGallery />
        </div>
      </section>
    </>
  );
}
