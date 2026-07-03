"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/data/site";

/**
 * Navbar flotante glass. Reutiliza las clases .gds-nav del design system
 * pero con next/link (navegación cliente) y menú móvil accesible.
 * Se oculta al bajar y reaparece al subir para despejar el contenido.
 */
export function SiteNavbar() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > 120 && y > lastY);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cerrar el menú móvil al navegar
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <nav
        className={`gds-nav site-nav${hidden && !open ? " site-nav--hidden" : ""}`}
        aria-label="Navegación principal"
      >
        <Link className="gds-nav__logo" href="/" aria-label="Inicio">
          {site.shortName}
        </Link>
        <ul className="gds-nav__links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                className={`gds-nav__link${isActive(link.href) ? " gds-nav__link--active" : ""}`}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="site-nav__toggle"
          aria-expanded={open}
          aria-controls="menu-movil"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Cerrar" : "Menú"}
        </button>
      </nav>
      {open && (
        <div id="menu-movil" className="site-nav__mobile">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
