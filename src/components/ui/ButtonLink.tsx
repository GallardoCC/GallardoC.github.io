import Link from "next/link";

/**
 * Enlace interno con el estilo del Button del GDS pero navegación cliente
 * de Next (prefetch + sin recarga completa).
 */
export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  return (
    <Link href={href} className={`gds-btn gds-btn--${variant} gds-btn--${size} ${className}`.trim()}>
      {children}
    </Link>
  );
}
