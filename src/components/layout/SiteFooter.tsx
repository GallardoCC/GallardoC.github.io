import Link from "next/link";
import { Badge, SocialLink } from "@/components/gds";
import { footerSitemap, site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <h3>{site.name}</h3>
            <p>{site.tagline}</p>
            <div className="cta-row" style={{ marginTop: "1.2rem" }}>
              <SocialLink href={site.socials.github} label="GitHub">GH</SocialLink>
              <SocialLink href={site.socials.linkedin} label="LinkedIn">in</SocialLink>
              <SocialLink href={site.socials.x} label="X">X</SocialLink>
              <SocialLink href={`mailto:${site.email}`} label="Correo">@</SocialLink>
            </div>
          </div>
          {footerSitemap.map((column) => (
            <div key={column.title}>
              <h3>{column.title}</h3>
              <ul>
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="site-footer__meta">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <span>{site.location}</span>
          {site.available && <Badge dot>Disponible para proyectos</Badge>}
        </div>
      </div>
    </footer>
  );
}
