import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Visual style. `primary` = animated violet gradient with glow; `ghost` = glass surface; `outline` = violet border that fills on hover. */
    variant?: "primary" | "ghost" | "outline";
    /** Control size. */
    size?: "sm" | "md" | "lg";
    /** Shows a spinner and disables the button. */
    loading?: boolean;
    /** Optional element rendered before the label (icon, emoji). */
    iconLeft?: React.ReactNode;
    /** Optional element rendered after the label (icon, arrow). */
    iconRight?: React.ReactNode;
    /** Render as an anchor pointing at this URL instead of a button. */
    href?: string;
}
/**
 * Primary action control of GDS. Pill-shaped, Space Grotesk, with premium
 * micro-interactions: lifts 2px on hover, springs down on press, and the
 * `primary` variant runs a slow animated gradient with a violet glow.
 *
 * @example
 * <Button variant="primary" size="lg" iconRight="→">Ver proyectos</Button>
 * <Button variant="ghost">Descargar CV</Button>
 */
declare function Button({ variant, size, loading, iconLeft, iconRight, href, className, children, disabled, ...rest }: ButtonProps): React.JSX.Element;

interface GradientTextProps {
    /** Text (or inline nodes) to paint with the violet gradient. */
    children: React.ReactNode;
    /** Slowly shifts the gradient position back and forth. Default true. */
    animated?: boolean;
    /** Adds a soft violet glow behind the letters. */
    glow?: boolean;
    /** Wrapper element. Default `span` so it can sit inside a heading. */
    as?: "span" | "strong" | "em";
    className?: string;
}
/**
 * Inline text painted with the GDS violet→indigo gradient. The signature
 * typographic accent of the system — use it on the key word of a heading,
 * never on whole paragraphs.
 *
 * @example
 * <h1>Construyo <GradientText glow>productos</GradientText> que se sienten premium</h1>
 */
declare function GradientText({ children, animated, glow, as, className, }: GradientTextProps): React.JSX.Element;

interface TypingTextProps {
    /** Phrases typed one after another in a loop. */
    words: string[];
    /** Milliseconds per typed character. Default 70. */
    typeSpeed?: number;
    /** Milliseconds per deleted character. Default 40. */
    deleteSpeed?: number;
    /** Pause after a word completes, before deleting. Default 1600ms. */
    pause?: number;
    /** Static text rendered before the typed part. */
    prefix?: string;
    className?: string;
}
/**
 * The classic hero typing effect: types each word, blinks a glowing caret,
 * deletes it and moves to the next in an infinite loop. Use it for the role
 * line under the hero title ("Quant Trader", "Frontend Developer", …).
 *
 * @example
 * <TypingText prefix="Soy " words={["Quant Trader", "Desarrollador", "Fundador"]} />
 */
declare function TypingText({ words, typeSpeed, deleteSpeed, pause, prefix, className, }: TypingTextProps): React.JSX.Element;

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Lifts 6px with a violet glow on hover. Default true. */
    hover?: boolean;
    /** Static violet border + soft glow (highlight a featured card). */
    glow?: boolean;
    /** Animated gradient border that travels around the card — the 2026 flourish. Reserve for ONE hero card per view. */
    beam?: boolean;
    children: React.ReactNode;
}
/**
 * The base glass surface of GDS: translucent panel over the dark background
 * with backdrop blur, 1px border and rounded 24px corners. Everything that
 * "floats" in the portfolio (about, skills, contact…) sits on a GlassCard.
 *
 * @example
 * <GlassCard glow>
 *   <h3>Sobre mí</h3>
 *   <p>Trader cuantitativo y desarrollador…</p>
 * </GlassCard>
 */
declare function GlassCard({ hover, glow, beam, className, children, ...rest }: GlassCardProps): React.JSX.Element;

interface BadgeProps {
    /** Label — a technology, a status, a category. */
    children: React.ReactNode;
    /** `default` = neutral glass chip; `accent` = violet tint; `outline` = transparent. */
    variant?: "default" | "accent" | "outline";
    /** Prepends a small pulsing violet dot ("disponible", "en curso"). */
    dot?: boolean;
    className?: string;
}
/**
 * Small uppercase pill chip. Used for tech-stack tags on project cards,
 * status indicators ("Disponible para proyectos") and section eyebrows.
 *
 * @example
 * <Badge variant="accent" dot>Disponible</Badge>
 * <Badge>React</Badge> <Badge>Python</Badge>
 */
declare function Badge({ children, variant, dot, className }: BadgeProps): React.JSX.Element;

interface NavLinkItem {
    /** Visible label. */
    label: string;
    /** Anchor or route the link points at. */
    href: string;
    /** Highlights this link as the current section. */
    active?: boolean;
}
interface NavbarProps {
    /** Brand text on the left (name or logo text). */
    logo: React.ReactNode;
    /** Navigation links rendered in the middle. */
    links: NavLinkItem[];
    /** Optional call-to-action rendered on the right (usually a Button). */
    cta?: React.ReactNode;
    className?: string;
}
/**
 * Floating glass navigation bar: pill-shaped, blurred dark surface, links
 * that light up in violet when active. Meant to hover fixed at the top of
 * the portfolio over the aurora background.
 *
 * @example
 * <Navbar
 *   logo="JC·Gallardo"
 *   links={[{ label: "Inicio", href: "#", active: true }, { label: "Proyectos", href: "#proyectos" }]}
 *   cta={<Button size="sm">Contacto</Button>}
 * />
 */
declare function Navbar({ logo, links, cta, className }: NavbarProps): React.JSX.Element;

interface HeroProps {
    /** Small badge/eyebrow above the title (usually a <Badge dot>). */
    eyebrow?: React.ReactNode;
    /** Main headline. Mix plain text with <GradientText> for the key word. */
    title: React.ReactNode;
    /** Line under the title — typically a <TypingText>. */
    subtitle?: React.ReactNode;
    /** Short supporting paragraph, muted and light. */
    description?: React.ReactNode;
    /** Action buttons (primary + ghost pair works best). */
    actions?: React.ReactNode;
    /** Renders the animated aurora + grid behind the content. Default true. */
    aurora?: boolean;
    className?: string;
}
/**
 * Full hero section of the portfolio: centered oversized Space Grotesk
 * headline over the animated aurora background, with eyebrow badge, typing
 * subtitle, muted description and action buttons.
 *
 * @example
 * <Hero
 *   eyebrow={<Badge variant="accent" dot>Disponible para proyectos</Badge>}
 *   title={<>Hola, soy <GradientText glow>Juan Carlos</GradientText></>}
 *   subtitle={<TypingText prefix="" words={["Quant Trader", "Desarrollador Full-Stack"]} />}
 *   description="Construyo herramientas de análisis cuantitativo y productos web premium."
 *   actions={<><Button size="lg">Ver proyectos</Button><Button variant="ghost" size="lg">Contacto</Button></>}
 * />
 */
declare function Hero({ eyebrow, title, subtitle, description, actions, aurora, className, }: HeroProps): React.JSX.Element;

interface SectionHeadingProps {
    /** Small mono uppercase label above the title ("01 · PROYECTOS"). */
    eyebrow?: string;
    /** Section title. Mix in <GradientText> for the key word. */
    title: React.ReactNode;
    /** Muted supporting line under the title. */
    subtitle?: React.ReactNode;
    /** Center the block (hero-style sections). Default false = left. */
    center?: boolean;
    className?: string;
}
/**
 * Standard header for every portfolio section: mono violet eyebrow with
 * wide letter-spacing, bold Space Grotesk title, muted subtitle.
 *
 * @example
 * <SectionHeading
 *   eyebrow="02 · Proyectos"
 *   title={<>Trabajo <GradientText>destacado</GradientText></>}
 *   subtitle="Una selección de lo que he construido."
 *   center
 * />
 */
declare function SectionHeading({ eyebrow, title, subtitle, center, className, }: SectionHeadingProps): React.JSX.Element;

interface ProjectLink {
    /** Link label ("Demo", "GitHub", "Caso de estudio"). */
    label: string;
    href: string;
}
interface ProjectCardProps {
    /** Project name. */
    title: string;
    /** One or two lines describing the project. */
    description: string;
    /** Tech-stack tags rendered as Badges. */
    tags?: string[];
    /** Cover image URL. Omit it to get the animated gradient cover with the monogram. */
    image?: string;
    /** Big letter/short text shown on the gradient cover when there is no image. Defaults to the title's initial. */
    monogram?: string;
    /** Action links at the bottom. */
    links?: ProjectLink[];
    className?: string;
}
/**
 * Showcase card for one portfolio project: cover (image or animated violet
 * gradient with a glowing monogram), title, short description, tech Badges
 * and links. Lifts with a glow on hover; the cover image zooms subtly.
 *
 * @example
 * <ProjectCard
 *   title="QuantFlow"
 *   description="Terminal web de datos de mercado en tiempo real."
 *   tags={["React", "FastAPI", "yfinance"]}
 *   links={[{ label: "Demo", href: "#" }, { label: "GitHub", href: "#" }]}
 * />
 */
declare function ProjectCard({ title, description, tags, image, monogram, links, className, }: ProjectCardProps): React.JSX.Element;

interface StatCardProps {
    /** The number itself ("12", "3.2", "99.9"). */
    value: string;
    /** Suffix after the value ("+", "%", "K"). */
    suffix?: string;
    /** Uppercase label under the number. */
    label: string;
    className?: string;
}
/**
 * Compact metric tile: big gradient number over an uppercase muted label,
 * on a glass surface. Line up 3-4 of them under the hero or in the
 * about section ("12+ proyectos", "3 años programando").
 *
 * @example
 * <StatCard value="12" suffix="+" label="Proyectos" />
 */
declare function StatCard({ value, suffix, label, className }: StatCardProps): React.JSX.Element;

interface TimelineItemProps {
    /** Period label in mono ("2024 — 2026"). */
    period: string;
    /** Role, milestone or degree. */
    title: string;
    /** Company, school or context, shown in violet. */
    org?: string;
    /** Optional short description. */
    description?: string;
}
/**
 * One entry of a <Timeline>: pulsing violet dot on the line, mono period,
 * bold title, violet org and muted description. Always render inside
 * <Timeline>.
 *
 * @example
 * <TimelineItem period="2025 — HOY" title="Trader cuantitativo" org="Independiente"
 *   description="Backtesting, volatility targeting y modelos Kalman+GARCH." />
 */
declare function TimelineItem({ period, title, org, description }: TimelineItemProps): React.JSX.Element;
interface TimelineProps {
    /** A list of <TimelineItem> entries. */
    children: React.ReactNode;
    className?: string;
}
/**
 * Vertical experience/education timeline: a violet line fading downward with
 * glowing dots per entry. Used for the Experiencia and Educación sections.
 *
 * @example
 * <Timeline>
 *   <TimelineItem period="2025 — HOY" title="Quant Trader" org="Independiente" />
 *   <TimelineItem period="2024" title="Full-Stack Developer" org="Freelance" />
 * </Timeline>
 */
declare function Timeline({ children, className }: TimelineProps): React.JSX.Element;

interface MarqueeProps {
    /** Items to scroll — usually a row of <Badge> or tech logos. */
    children: React.ReactNode;
    /** Seconds for one full loop. Default 28. */
    duration?: number;
    className?: string;
}
/**
 * Infinite horizontal scroller with faded edges. The content is duplicated
 * internally so the loop is seamless; hovering pauses it. Classic use: the
 * tech-stack strip under the hero.
 *
 * @example
 * <Marquee duration={22}>
 *   <Badge>React</Badge><Badge>TypeScript</Badge><Badge>Python</Badge><Badge>FastAPI</Badge>
 * </Marquee>
 */
declare function Marquee({ children, duration, className }: MarqueeProps): React.JSX.Element;

interface AuroraBackgroundProps {
    /** Overlays a faint violet grid that fades out radially. Default false. */
    grid?: boolean;
    className?: string;
}
/**
 * The animated atmosphere of GDS: three blurred violet/indigo orbs drifting
 * slowly over the near-black background, plus an optional faint grid.
 * Absolutely positioned — place it as the first child of a `position:
 * relative` section (Hero already includes it).
 *
 * @example
 * <section style={{ position: "relative" }}>
 *   <AuroraBackground grid />
 *   <div style={{ position: "relative" }}>…contenido…</div>
 * </section>
 */
declare function AuroraBackground({ grid, className }: AuroraBackgroundProps): React.JSX.Element;

interface RevealProps {
    /** Entrance direction. Default "up". */
    direction?: "up" | "left" | "right" | "scale";
    /** Delay in milliseconds before the animation starts. Stagger siblings with 0/100/200… */
    delay?: number;
    /** Content to animate in. */
    children: React.ReactNode;
    className?: string;
}
/**
 * Scroll-reveal wrapper: its children fade-slide in with the premium
 * expo-out easing the first time they enter the viewport. Wrap each card or
 * section block and stagger `delay` for the cascade effect seen in the
 * reference portfolios.
 *
 * @example
 * <Reveal><SectionHeading title="Proyectos" /></Reveal>
 * <Reveal delay={120}><ProjectCard … /></Reveal>
 */
declare function Reveal({ direction, delay, children, className }: RevealProps): React.JSX.Element;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    /** Label above the field. */
    label?: string;
    /** Error message below the field; also tints the border pink. */
    error?: string;
}
/**
 * Glass text field: translucent surface, 1px border that turns violet with
 * a soft glow on focus. The building block of the contact form.
 *
 * @example
 * <Input label="Nombre" placeholder="Tu nombre" />
 * <Input label="Email" type="email" error="Correo inválido" defaultValue="hola@" />
 */
declare function Input({ label, error, className, ...rest }: InputProps): React.JSX.Element;

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    /** Label above the field. */
    label?: string;
    /** Error message below the field; also tints the border pink. */
    error?: string;
}
/**
 * Multi-line sibling of <Input>, same glass styling with violet focus glow.
 * Vertical resize only, 120px minimum height.
 *
 * @example
 * <Textarea label="Mensaje" placeholder="Cuéntame sobre tu proyecto…" rows={5} />
 */
declare function Textarea({ label, error, className, ...rest }: TextareaProps): React.JSX.Element;

interface SocialLinkProps {
    /** Icon or 1-2 letter label shown inside the circle ("GH", "in", an SVG…). */
    children: React.ReactNode;
    /** Profile URL. */
    href: string;
    /** Accessible name ("GitHub", "LinkedIn"). */
    label: string;
    className?: string;
}
/**
 * Circular glass icon button for social profiles. Lifts 3px with a violet
 * glow on hover. Accepts an SVG icon or a short text monogram.
 *
 * @example
 * <SocialLink href="https://github.com/…" label="GitHub">GH</SocialLink>
 */
declare function SocialLink({ children, href, label, className }: SocialLinkProps): React.JSX.Element;

interface FooterProps {
    /** Row of <SocialLink> buttons. */
    socials?: React.ReactNode;
    /** Bottom line ("© 2026 Juan Carlos Gallardo — Hecho con GDS"). */
    note: React.ReactNode;
    className?: string;
}
/**
 * Minimal closing section: centered social links over a faint copyright
 * line, separated from the page by a hairline border.
 *
 * @example
 * <Footer
 *   socials={<><SocialLink href="#" label="GitHub">GH</SocialLink><SocialLink href="#" label="LinkedIn">in</SocialLink></>}
 *   note="© 2026 Juan Carlos Gallardo"
 * />
 */
declare function Footer({ socials, note, className }: FooterProps): React.JSX.Element;

export { AuroraBackground, type AuroraBackgroundProps, Badge, type BadgeProps, Button, type ButtonProps, Footer, type FooterProps, GlassCard, type GlassCardProps, GradientText, type GradientTextProps, Hero, type HeroProps, Input, type InputProps, Marquee, type MarqueeProps, type NavLinkItem, Navbar, type NavbarProps, ProjectCard, type ProjectCardProps, type ProjectLink, Reveal, type RevealProps, SectionHeading, type SectionHeadingProps, SocialLink, type SocialLinkProps, StatCard, type StatCardProps, Textarea, type TextareaProps, Timeline, TimelineItem, type TimelineItemProps, type TimelineProps, TypingText, type TypingTextProps };
