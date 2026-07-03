import { HomeHero } from "@/components/home/HomeHero";
import { HomeBackground } from "@/components/home/HomeBackground";
import { HomePanels } from "@/components/home/HomePanels";
import {
  AboutPreview,
  TechPreview,
  ProjectsPreview,
  ExperiencePreview,
  BlogPreview,
  ContactCta,
} from "@/components/home/HomeSections";

export default function HomePage() {
  return (
    <>
      <HomeBackground />
      <HomePanels>
        {/* El hero vive pinneado (sticky) dentro de .hero-pin; .home-flow
            sube por encima con esquinas redondeadas → transición de paneles */}
        <div className="hero-pin">
          <HomeHero />
        </div>
        <div className="home-flow">
          <AboutPreview />
          <TechPreview />
          <ProjectsPreview />
          <ExperiencePreview />
          <BlogPreview />
          <ContactCta />
        </div>
      </HomePanels>
    </>
  );
}
