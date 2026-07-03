# Prompt maestro para Claude Design — Portada (Home) Portafolio Gallardo

> Pegar en claude.ai/design dentro del proyecto **"Gallardo Portfolio DS"** (que ya tiene el design system sincronizado). Fecha: 2026-07-02.

---

Diseña la **portada (home page) completa** de mi portafolio profesional personal — gallardo.dev — usando el design system ya sincronizado en este proyecto (GDS: componentes Hero, GlassCard, Button cromo, ProjectCard, Navbar, Timeline, Marquee, StatCard, Badge, GradientText, TypingText, Reveal, SocialLink, Footer, AuroraBackground, SectionHeading).

## Contexto

Soy Juan Carlos Gallardo, desarrollador de software y futuro fundador de startups (trading cuantitativo, IA, productos web). Este sitio es mi marca personal y mi reputación: debe transmitir innovación, excelencia técnica y ambición desde el primer segundo, al nivel de los mejores portafolios de Awwwards. Visitantes objetivo: reclutadores, empresas, inversionistas y clientes.

## Reglas visuales INNEGOCIABLES (ya definidas en el design system)

- Paleta **acromática protagonista**: fondo negro mate `#060607`, cromo/plata metálico (gradientes blanco→gris) en titulares y elementos clave, glassmorphism neutro (tarjetas translúcidas, blur, bordes sutiles).
- Acentos secundarios ÚNICAMENTE: azul oscuro `#1d4ed8` (degradados de fondo) y violeta `#6d28d9`. Errores en rojo oscuro `#dc2626`.
- **PROHIBIDO el rosado/magenta** en cualquier tono. Nada de paletas arcoíris.
- Tipografía: **Space Grotesk** en todo (títulos, cuerpo, botones).
- Estética: premium futurista tipo Linear/Aceternity — minimalista, elegante, oscura, con glow sutil. Nunca recargada, nunca plantilla genérica.

## La portada es una experiencia 3D con scroll storytelling

La home no es una página estática: es un recorrido. Al hacer scroll, la cámara/escena 3D evoluciona y va revelando las secciones. Diseña pensando en implementación con **React Three Fiber + drei + GSAP ScrollTrigger** (el resto con los componentes del GDS).

### Sección 1 — HERO 3D (impacto inmediato, 100vh)

- Pieza central: un **objeto 3D cromado abstracto** (monolito / cristal facetado / forma fluida metálica) flotando en el centro-derecha, con material metálico reflectante que capta los tonos azul/violeta del ambiente. Rota lentamente solo y **reacciona al mouse** (parallax + tilt suave). Explora 2-3 variantes de forma.
- Fondo: negro mate con aurora/degradado azul oscuro muy sutil (AuroraBackground del GDS) + partículas finas.
- Contenido sobre el 3D: nombre "Juan Carlos Gallardo" en cromo con GradientText, debajo TypingText rotando roles ("Software Developer", "Quant Trading", "AI Builder", "Founder"), una frase de valor de una línea, y dos botones: primario cromo "Ver proyectos" + secundario ghost "Descargar CV".
- Navbar flotante glass arriba (logo "JG", enlaces: Sobre mí, Proyectos, Tecnologías, Experiencia, Blog, Contacto, selector ES/EN, hint de command palette ⌘K).
- Indicador de scroll animado abajo al centro.

### Sección 2 — SOBRE MÍ (preview)

- Layout dos columnas: izquierda texto breve (quién soy, visión de fundador) con GradientText en palabras clave; derecha una GlassCard con foto/retrato y 3-4 StatCards animadas con contador (años programando, proyectos, tecnologías, commits).
- CTA "Conocer mi historia →" (lleva a /sobre-mi).
- Al entrar en viewport, elementos con Reveal escalonado.

### Sección 3 — TECNOLOGÍAS (preview)

- Marquee doble (dos filas en direcciones opuestas) con logos/badges de tecnologías en estilo monocromo plata que se colorean al hover.
- Encima, 4 categorías destacadas como GlassCards pequeñas (Frontend, Backend, IA, Quant/Python).
- CTA "Ver stack completo →" (/tecnologias).

### Sección 4 — PROYECTOS DESTACADOS (el corazón de la página)

- Grid asimétrico (bento) de 3-4 ProjectCards: 1 grande protagonista (QuantFlow) + 2-3 medianas (QuantDesk, Uxur, Bot de Telegram).
- Cada tarjeta: imagen/mockup, título cromo, descripción de una línea, badges de stack, glow al hover con **tilt 3D** siguiendo el mouse.
- CTA "Explorar todos los proyectos →" (/proyectos — cada proyecto tiene página propia tipo caso de estudio).

### Sección 5 — EXPERIENCIA + LOGROS (preview)

- Timeline vertical del GDS con 3-4 hitos (educación, proyectos clave, certificaciones), línea con degradado azul→violeta y nodos con glow.
- Al costado o debajo, fila de 3 Badges/logros destacados.
- CTA "Ver trayectoria completa →" (/experiencia).

### Sección 6 — BLOG (preview, preparado)

- Fila de 2-3 GlassCards de artículos (usar placeholders: título, fecha, tiempo de lectura, tag). Diseño listo aunque aún no haya artículos.
- CTA "Leer el blog →" (/blog).

### Sección 7 — CONTACTO + FOOTER

- Bloque de cierre potente: titular grande en cromo tipo "¿Construimos algo grande?" con glow, botón primario "Contáctame" y correo visible.
- Fila de SocialLinks (GitHub, LinkedIn, X, correo) con hover glow.
- Footer del GDS: mini-sitemap de todas las páginas (Sobre mí, Proyectos, Tecnologías, Experiencia, Logros, Blog, Lab, CV, Contacto), ubicación (Perú · GMT-5), estado "Disponible para proyectos", copyright.

## Animaciones e interacciones (transversales)

- Scroll reveal escalonado en cada sección (fade + slide sutil, nunca brusco).
- Microinteracciones en TODOS los elementos interactivos: botones con brillo cromo que se desplaza, tarjetas con tilt y glow, enlaces con subrayado animado.
- Parallax sutil en fondos y en el objeto 3D del hero.
- Contadores animados en las StatCards al entrar en viewport.
- Transiciones suaves entre secciones (el fondo cambia gradualmente de tono: negro → azul muy oscuro → negro).
- Preloader breve de marca (logo JG con efecto cromo) para la carga inicial.

## Restricciones de calidad

- **Responsive completo**: diseña también la versión móvil (el 3D del hero se simplifica o se reemplaza por una versión estática elegante en pantallas pequeñas).
- Respetar `prefers-reduced-motion`: todo debe verse bien sin animaciones.
- Contraste WCAG AA en todos los textos sobre fondos oscuros y glass.
- Jerarquía visual clara: máximo un elemento protagonista por sección.
- El rendimiento es prioridad: las animaciones deben ser implementables con transform/opacity (GPU), sin efectos que impliquen repaints pesados.

Empieza por el Hero 3D con sus variantes, y luego continúa sección por sección hacia abajo. Cada sección debe sentirse parte del mismo recorrido, no bloques sueltos.

---

> **Nota:** si se prefiere el concepto de avatar 3D en lugar del objeto cromado, sustituir en la Sección 1: "objeto 3D cromado abstracto" por "avatar 3D estilizado del usuario (Ready Player Me) con animación idle que sigue el mouse con la mirada".
