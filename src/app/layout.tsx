import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import { site } from "@/data/site";
import { SiteNavbar } from "@/components/layout/SiteNavbar";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Preloader } from "@/components/layout/Preloader";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s · ${site.name}`,
  },
  description: site.tagline,
  keywords: ["software developer", "quant trading", "IA", "React", "Python", "Perú", "founder"],
  authors: [{ name: site.name, url: site.domain }],
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: site.domain,
    siteName: site.name,
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#060607",
  width: "device-width",
  initialScale: 1,
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.domain,
  email: `mailto:${site.email}`,
  jobTitle: "Quant Trader & AI Engineering Student",
  address: { "@type": "PostalAddress", addressCountry: "PE" },
  sameAs: Object.values(site.socials),
  knowsAbout: [
    "Quantitative Trading",
    "Financial Markets",
    "Artificial Intelligence",
    "Data Science",
    "Software Development",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={spaceGrotesk.variable}>
      <body className="gds-root">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Preloader />
        <ScrollProgress />
        <SmoothScroll>
          <SiteNavbar />
          <main id="contenido">{children}</main>
          <SiteFooter />
        </SmoothScroll>
      </body>
    </html>
  );
}
