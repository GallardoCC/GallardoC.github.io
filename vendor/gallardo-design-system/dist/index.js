// src/components/Button.tsx
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
function Button({
  variant = "primary",
  size = "md",
  loading = false,
  iconLeft,
  iconRight,
  href,
  className = "",
  children,
  disabled,
  ...rest
}) {
  const cls = `gds-btn gds-btn--${variant} gds-btn--${size} ${className}`.trim();
  const content = /* @__PURE__ */ jsxs(Fragment, { children: [
    loading && /* @__PURE__ */ jsx("span", { className: "gds-btn__spinner", "aria-hidden": "true" }),
    !loading && iconLeft,
    /* @__PURE__ */ jsx("span", { children }),
    !loading && iconRight
  ] });
  if (href) {
    return /* @__PURE__ */ jsx("a", { className: cls, href, children: content });
  }
  return /* @__PURE__ */ jsx("button", { className: cls, disabled: disabled || loading, ...rest, children: content });
}

// src/components/GradientText.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
function GradientText({
  children,
  animated = true,
  glow = false,
  as = "span",
  className = ""
}) {
  const Tag = as;
  const cls = [
    "gds-gradient-text",
    animated ? "gds-gradient-text--animated" : "",
    glow ? "gds-gradient-text--glow" : "",
    className
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsx2(Tag, { className: cls, children });
}

// src/components/TypingText.tsx
import { useEffect, useState } from "react";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
function TypingText({
  words,
  typeSpeed = 70,
  deleteSpeed = 40,
  pause = 1600,
  prefix = "",
  className = ""
}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [chars, setChars] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    if (!words.length) return;
    const word2 = words[wordIndex % words.length];
    let delay = deleting ? deleteSpeed : typeSpeed;
    if (!deleting && chars === word2.length) delay = pause;
    const t = setTimeout(() => {
      if (!deleting) {
        if (chars < word2.length) setChars(chars + 1);
        else setDeleting(true);
      } else {
        if (chars > 0) setChars(chars - 1);
        else {
          setDeleting(false);
          setWordIndex((i) => (i + 1) % words.length);
        }
      }
    }, delay);
    return () => clearTimeout(t);
  }, [chars, deleting, wordIndex, words, typeSpeed, deleteSpeed, pause]);
  const word = words.length ? words[wordIndex % words.length] : "";
  return /* @__PURE__ */ jsxs2("span", { className: `gds-typing ${className}`.trim(), children: [
    prefix,
    word.slice(0, chars),
    /* @__PURE__ */ jsx3("span", { className: "gds-typing__caret", "aria-hidden": "true" })
  ] });
}

// src/components/GlassCard.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
function GlassCard({
  hover = true,
  glow = false,
  beam = false,
  className = "",
  children,
  ...rest
}) {
  const cls = [
    "gds-card",
    hover ? "gds-card--hover" : "",
    glow ? "gds-card--glow" : "",
    beam ? "gds-card--beam" : "",
    className
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsx4("div", { className: cls, ...rest, children });
}

// src/components/Badge.tsx
import { jsx as jsx5, jsxs as jsxs3 } from "react/jsx-runtime";
function Badge({ children, variant = "default", dot = false, className = "" }) {
  const cls = [
    "gds-badge",
    variant !== "default" ? `gds-badge--${variant}` : "",
    className
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsxs3("span", { className: cls, children: [
    dot && /* @__PURE__ */ jsx5("span", { className: "gds-badge__dot", "aria-hidden": "true" }),
    children
  ] });
}

// src/components/Navbar.tsx
import { jsx as jsx6, jsxs as jsxs4 } from "react/jsx-runtime";
function Navbar({ logo, links, cta, className = "" }) {
  return /* @__PURE__ */ jsxs4("nav", { className: `gds-nav ${className}`.trim(), children: [
    /* @__PURE__ */ jsx6("a", { className: "gds-nav__logo", href: "#", children: logo }),
    /* @__PURE__ */ jsx6("ul", { className: "gds-nav__links", children: links.map((link) => /* @__PURE__ */ jsx6("li", { children: /* @__PURE__ */ jsx6(
      "a",
      {
        className: `gds-nav__link${link.active ? " gds-nav__link--active" : ""}`,
        href: link.href,
        children: link.label
      }
    ) }, link.label)) }),
    cta
  ] });
}

// src/components/AuroraBackground.tsx
import { jsx as jsx7, jsxs as jsxs5 } from "react/jsx-runtime";
function AuroraBackground({ grid = false, className = "" }) {
  return /* @__PURE__ */ jsxs5("div", { className: `gds-aurora ${className}`.trim(), "aria-hidden": "true", children: [
    /* @__PURE__ */ jsx7("div", { className: "gds-aurora__orb gds-aurora__orb--1" }),
    /* @__PURE__ */ jsx7("div", { className: "gds-aurora__orb gds-aurora__orb--2" }),
    /* @__PURE__ */ jsx7("div", { className: "gds-aurora__orb gds-aurora__orb--3" }),
    grid && /* @__PURE__ */ jsx7("div", { className: "gds-aurora__grid" })
  ] });
}

// src/components/Hero.tsx
import { jsx as jsx8, jsxs as jsxs6 } from "react/jsx-runtime";
function Hero({
  eyebrow,
  title,
  subtitle,
  description,
  actions,
  aurora = true,
  className = ""
}) {
  return /* @__PURE__ */ jsxs6("section", { className: `gds-root gds-hero ${className}`.trim(), children: [
    aurora && /* @__PURE__ */ jsx8(AuroraBackground, { grid: true }),
    /* @__PURE__ */ jsxs6("div", { className: "gds-hero__content", children: [
      eyebrow,
      /* @__PURE__ */ jsx8("h1", { className: "gds-hero__title", children: title }),
      subtitle && /* @__PURE__ */ jsx8("div", { className: "gds-hero__subtitle", children: subtitle }),
      description && /* @__PURE__ */ jsx8("p", { className: "gds-hero__description", children: description }),
      actions && /* @__PURE__ */ jsx8("div", { className: "gds-hero__actions", children: actions })
    ] })
  ] });
}

// src/components/SectionHeading.tsx
import { jsx as jsx9, jsxs as jsxs7 } from "react/jsx-runtime";
function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
  className = ""
}) {
  return /* @__PURE__ */ jsxs7(
    "header",
    {
      className: `gds-section-heading${center ? " gds-section-heading--center" : ""} ${className}`.trim(),
      children: [
        eyebrow && /* @__PURE__ */ jsx9("span", { className: "gds-section-heading__eyebrow", children: eyebrow }),
        /* @__PURE__ */ jsx9("h2", { className: "gds-section-heading__title", children: title }),
        subtitle && /* @__PURE__ */ jsx9("p", { className: "gds-section-heading__subtitle", children: subtitle })
      ]
    }
  );
}

// src/components/ProjectCard.tsx
import { jsx as jsx10, jsxs as jsxs8 } from "react/jsx-runtime";
function ProjectCard({
  title,
  description,
  tags = [],
  image,
  monogram,
  links = [],
  className = ""
}) {
  return /* @__PURE__ */ jsxs8("article", { className: `gds-project-card ${className}`.trim(), children: [
    /* @__PURE__ */ jsx10("div", { className: "gds-project-card__cover", children: image ? /* @__PURE__ */ jsx10("img", { src: image, alt: title }) : /* @__PURE__ */ jsx10("span", { className: "gds-project-card__cover-mono", children: monogram ?? title.charAt(0) }) }),
    /* @__PURE__ */ jsxs8("div", { className: "gds-project-card__body", children: [
      /* @__PURE__ */ jsx10("h3", { className: "gds-project-card__title", children: title }),
      /* @__PURE__ */ jsx10("p", { className: "gds-project-card__description", children: description }),
      tags.length > 0 && /* @__PURE__ */ jsx10("div", { className: "gds-project-card__tags", children: tags.map((tag) => /* @__PURE__ */ jsx10(Badge, { children: tag }, tag)) }),
      links.length > 0 && /* @__PURE__ */ jsx10("div", { className: "gds-project-card__links", children: links.map((link) => /* @__PURE__ */ jsxs8("a", { className: "gds-project-card__link", href: link.href, children: [
        link.label,
        " \u2192"
      ] }, link.label)) })
    ] })
  ] });
}

// src/components/StatCard.tsx
import { jsx as jsx11, jsxs as jsxs9 } from "react/jsx-runtime";
function StatCard({ value, suffix, label, className = "" }) {
  return /* @__PURE__ */ jsxs9("div", { className: `gds-stat ${className}`.trim(), children: [
    /* @__PURE__ */ jsx11("span", { className: "gds-stat__value", children: /* @__PURE__ */ jsxs9(GradientText, { animated: false, children: [
      value,
      suffix
    ] }) }),
    /* @__PURE__ */ jsx11("span", { className: "gds-stat__label", children: label })
  ] });
}

// src/components/Timeline.tsx
import { jsx as jsx12, jsxs as jsxs10 } from "react/jsx-runtime";
function TimelineItem({ period, title, org, description }) {
  return /* @__PURE__ */ jsxs10("div", { className: "gds-timeline-item", children: [
    /* @__PURE__ */ jsx12("span", { className: "gds-timeline-item__dot", "aria-hidden": "true" }),
    /* @__PURE__ */ jsx12("span", { className: "gds-timeline-item__period", children: period }),
    /* @__PURE__ */ jsx12("h3", { className: "gds-timeline-item__title", children: title }),
    org && /* @__PURE__ */ jsx12("span", { className: "gds-timeline-item__org", children: org }),
    description && /* @__PURE__ */ jsx12("p", { className: "gds-timeline-item__description", children: description })
  ] });
}
function Timeline({ children, className = "" }) {
  return /* @__PURE__ */ jsx12("div", { className: `gds-timeline ${className}`.trim(), children });
}

// src/components/Marquee.tsx
import { jsx as jsx13, jsxs as jsxs11 } from "react/jsx-runtime";
function Marquee({ children, duration = 28, className = "" }) {
  return /* @__PURE__ */ jsx13("div", { className: `gds-marquee ${className}`.trim(), children: /* @__PURE__ */ jsxs11(
    "div",
    {
      className: "gds-marquee__track",
      style: { ["--gds-marquee-duration"]: `${duration}s` },
      children: [
        children,
        children
      ]
    }
  ) });
}

// src/components/Reveal.tsx
import { useEffect as useEffect2, useRef, useState as useState2 } from "react";
import { jsx as jsx14 } from "react/jsx-runtime";
function Reveal({ direction = "up", delay = 0, children, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState2(false);
  useEffect2(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return /* @__PURE__ */ jsx14(
    "div",
    {
      ref,
      className: `gds-reveal gds-reveal--${direction}${visible ? " gds-reveal--visible" : ""} ${className}`.trim(),
      style: delay ? { animationDelay: `${delay}ms` } : void 0,
      children
    }
  );
}

// src/components/Input.tsx
import { jsx as jsx15, jsxs as jsxs12 } from "react/jsx-runtime";
function Input({ label, error, className = "", ...rest }) {
  return /* @__PURE__ */ jsxs12("label", { className: `gds-field${error ? " gds-field--error" : ""} ${className}`.trim(), children: [
    label && /* @__PURE__ */ jsx15("span", { className: "gds-field__label", children: label }),
    /* @__PURE__ */ jsx15("input", { className: "gds-field__control", ...rest }),
    error && /* @__PURE__ */ jsx15("span", { className: "gds-field__error", children: error })
  ] });
}

// src/components/Textarea.tsx
import { jsx as jsx16, jsxs as jsxs13 } from "react/jsx-runtime";
function Textarea({ label, error, className = "", ...rest }) {
  return /* @__PURE__ */ jsxs13("label", { className: `gds-field${error ? " gds-field--error" : ""} ${className}`.trim(), children: [
    label && /* @__PURE__ */ jsx16("span", { className: "gds-field__label", children: label }),
    /* @__PURE__ */ jsx16("textarea", { className: "gds-field__control", ...rest }),
    error && /* @__PURE__ */ jsx16("span", { className: "gds-field__error", children: error })
  ] });
}

// src/components/SocialLink.tsx
import { jsx as jsx17 } from "react/jsx-runtime";
function SocialLink({ children, href, label, className = "" }) {
  return /* @__PURE__ */ jsx17("a", { className: `gds-social ${className}`.trim(), href, "aria-label": label, title: label, children });
}

// src/components/Footer.tsx
import { jsx as jsx18, jsxs as jsxs14 } from "react/jsx-runtime";
function Footer({ socials, note, className = "" }) {
  return /* @__PURE__ */ jsxs14("footer", { className: `gds-root gds-footer ${className}`.trim(), children: [
    socials && /* @__PURE__ */ jsx18("div", { className: "gds-footer__socials", children: socials }),
    /* @__PURE__ */ jsx18("span", { className: "gds-footer__note", children: note })
  ] });
}
export {
  AuroraBackground,
  Badge,
  Button,
  Footer,
  GlassCard,
  GradientText,
  Hero,
  Input,
  Marquee,
  Navbar,
  ProjectCard,
  Reveal,
  SectionHeading,
  SocialLink,
  StatCard,
  Textarea,
  Timeline,
  TimelineItem,
  TypingText
};
