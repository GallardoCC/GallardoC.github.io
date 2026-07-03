# Portafolio Gallardo — Estructura del sitio (v2)

> Definida el 2026-07-01. Sitio multi-página con experiencia 3D. Complementa al design system generado en Claude Design (dark #030014, acento violeta, glassmorphism, glow).

## Mapa de navegación

```
gallardo.dev
│
├── /                        HOME — experiencia 3D principal
│     Hero 3D interactivo + resúmenes de cada sección;
│     cada bloque enlaza a su página completa ("Ver más →")
│
├── /sobre-mi                Quién soy: historia, visión, valores,
│     fortalezas, timeline de vida, foto/avatar 3D
│     └── /sobre-mi/ahora    "Now page": en qué trabajo hoy
│
├── /proyectos               Galería filtrable (tecnología / tipo)
│     └── /proyectos/[slug]  Caso de estudio completo por proyecto:
│         problema → solución → stack → retos técnicos → resultados
│         → capturas/video → enlaces (repo, demo en vivo)
│         Iniciales: quantflow, quantdesk, uxur, bot-telegram, homelab
│
├── /tecnologias             Stack por categorías (Frontend, Backend, BD,
│     Cloud, DevOps, IA, Quant/Python) con nivel de dominio real
│     y en qué proyecto se usó cada tecnología
│
├── /experiencia             Timeline interactiva única: experiencia +
│     educación + certificaciones (scroll-driven, posible 3D)
│
├── /logros                  Premios, reconocimientos, certificados
│     (cada certificado con enlace de verificación), hitos
│
├── /blog                    Artículos técnicos (MDX)
│     └── /blog/[slug]
│
├── /lab                     Playground 3D: experimentos interactivos
│     └── /lab/[demo]        cada demo con su página
│
├── /cv                      CV interactivo + descarga PDF (ES / EN)
│
├── /contacto                Formulario + correo + redes (GitHub,
│     LinkedIn, X) + ubicación (Perú, GMT-5) + estado de disponibilidad
│
└── /404                     Página de error creativa en 3D
```

## Elementos transversales

- Navbar flotante glassmorphism + menú móvil, indicador de sección activa.
- Footer completo: redes, correo, mini-sitemap.
- Command palette (Ctrl+K) para navegar todo el sitio.
- Botón "Descargar CV" siempre accesible.
- Bilingüe ES/EN con selector de idioma.
- Integración GitHub API: gráfico de contribuciones + repos destacados en vivo.
- SEO: Open Graph por página (tarjeta al compartir en LinkedIn/X), sitemap, schema.org Person.

## Capa 3D (diferenciador principal)

1. **Hero 3D central**: una escena memorable que reacciona a mouse y scroll. Tres conceptos a explorar por el agente de diseño:
   - (a) objeto abstracto (monolito/cristal) con la estética dark-violeta,
   - (b) avatar 3D del usuario (Ready Player Me + animaciones Mixamo, sigue el mouse),
   - (c) escena narrativa (planeta/isla) con los proyectos como puntos de interés.
2. **Scroll-driven storytelling** en la home: la cámara viaja al hacer scroll y revela secciones (patrón Awwwards, ej. The Monolith Project).
3. **3D dosificado en páginas internas**: tilt 3D en tarjetas, partículas de fondo, timeline 3D — sin escenas pesadas.
4. **/lab** como vitrina técnica de experimentos.
5. **Rendimiento innegociable**: fallback 2D en gama baja, `prefers-reduced-motion`, lazy-load de escenas, LCP < 2 s.

## Stack

Astro 5 + islas React · React Three Fiber + drei · GSAP (ScrollTrigger) + Motion · Tailwind 4 · contenido en MDX/JSON · deploy Vercel/Cloudflare Pages.

## Flujo de diseño

Estilo base de Claude Design → auditoría y extensión por el agente Brand/UI Designer (tokens, estados, responsive, contraste WCAG, dirección de arte 3D: materiales, iluminación, paleta de escena) → recién entonces implementación.

## Referencias de investigación

- Qué esperan reclutadores y qué incluir: [Hakia — Developer Portfolio Guide 2026](https://hakia.com/skills/building-portfolio/), [Elementor — Best Web Developer Portfolios](https://elementor.com/blog/best-web-developer-portfolio-examples/), [Colorlib — 21 Developer Portfolios](https://colorlib.com/wp/developer-portfolios/)
- 3D premiados y cómo se construyen: [Awwwards — Three.js sites](https://www.awwwards.com/websites/three-js/), [CreativeDevJobs — Best Three.js portfolios](https://www.creativedevjobs.com/blog/best-threejs-portfolio-examples-2025), [Ali Sanati — awwwards-portfolio (R3F+GSAP)](https://github.com/Ali-Sanati/awwwards-portfolio), [Wawa Sensei — 3D portfolio con avatar](https://wawasensei.dev/tuto/build-a-3D-portfolio-with-react-three-fiber-avatar-animations)
- Estética base: [EkiZR Portofolio V5](https://github.com/EkiZR/Portofolio_V5)
