import { AuroraBackground, GradientText } from "@/components/gds";
import { ButtonLink } from "@/components/ui/ButtonLink";

export default function NotFound() {
  return (
    <section className="hero-3d" style={{ textAlign: "center" }}>
      <AuroraBackground className="hero-3d__canvas" />
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <h1 style={{ fontSize: "clamp(5rem, 18vw, 11rem)", margin: 0, letterSpacing: "-0.05em" }}>
          <GradientText glow>404</GradientText>
        </h1>
        <p className="muted" style={{ margin: "0 0 2rem" }}>
          Esta página no existe… todavía. Como toda buena idea, quizá esté en el backlog.
        </p>
        <div className="cta-row" style={{ justifyContent: "center" }}>
          <ButtonLink href="/">Volver al inicio</ButtonLink>
          <ButtonLink href="/proyectos" variant="ghost">Ver proyectos</ButtonLink>
        </div>
      </div>
    </section>
  );
}
