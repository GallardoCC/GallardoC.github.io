import { GradientText, Reveal, SectionHeading } from "@/components/gds";

/** Identidades de fondo por página interior (degradados azul/violeta/plata). */
export type PageBgVariant = "chrome" | "blue" | "violet" | "steel" | "aurora" | "duo";

/** Cabecera estándar de las páginas internas, con reveal de entrada
 *  y fondo fijo con identidad propia por sección (CSS puro). */
export function PageHeader({
  eyebrow,
  title,
  highlight,
  subtitle,
  variant = "duo",
}: {
  eyebrow: string;
  title: string;
  /** Palabra del título pintada en cromo. */
  highlight?: string;
  subtitle?: string;
  /** Identidad de color del fondo de la página. */
  variant?: PageBgVariant;
}) {
  return (
    <>
      <div className={`page-bg page-bg--${variant}`} aria-hidden="true" />
      <div className="container page-top" style={{ marginBottom: "1rem" }}>
        <Reveal>
          <SectionHeading
            eyebrow={eyebrow}
            title={
              highlight ? (
                <>
                  {title} <GradientText glow>{highlight}</GradientText>
                </>
              ) : (
                title
              )
            }
            subtitle={subtitle}
          />
        </Reveal>
      </div>
    </>
  );
}
