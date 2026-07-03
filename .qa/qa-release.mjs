// QA de release: todas las rutas en desktop + móvil, errores de consola/hidratación,
// overflow horizontal, placeholders visibles, 3D y screenshots clave.
import puppeteer from "puppeteer-core";

const BASE = "http://localhost:3000";
const slugs = ["quantflow", "quantdesk", "uxur", "contesta", "bot-telegram", "homelab"];
const routes = [
  "/", "/sobre-mi", "/proyectos",
  ...slugs.map((s) => `/proyectos/${s}`),
  "/tecnologias", "/experiencia", "/logros", "/blog", "/cv", "/contacto",
  "/ruta-inexistente-404",
];

const browser = await puppeteer.launch({
  executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  headless: "new",
  args: ["--window-size=1440,900", "--hide-scrollbars"],
  defaultViewport: { width: 1440, height: 900 },
});

const results = [];

async function makePage(mobile) {
  const page = await browser.newPage();
  if (mobile) {
    await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true, deviceScaleFactor: 2 });
    await page.setUserAgent("Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1");
  }
  await page.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "no-preference" }]);
  return page;
}

async function checkRoute(page, route, mobile) {
  const errs = [];
  const onConsole = (m) => { if (m.type() === "error") errs.push(m.text()); };
  const onError = (e) => errs.push(`PAGEERROR: ${e.message}`);
  page.on("console", onConsole);
  page.on("pageerror", onError);
  const resp = await page.goto(BASE + route, { waitUntil: "networkidle0", timeout: 60000 });
  await new Promise((r) => setTimeout(r, route === "/" || route === "/sobre-mi" ? 4500 : 1500));
  const status = resp.status();
  // En la ruta 404 el propio documento produce "Failed to load resource ... 404": esperado.
  if (route.includes("404")) {
    const i = errs.findIndex((e) => e.includes("Failed to load resource") && e.includes("404"));
    if (i !== -1) errs.splice(i, 1);
  }
  const info = await page.evaluate(() => ({
    overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
    placeholder: /Lorem ipsum|\bTODO\b|\bFIXME\b/.test(document.body.innerText),
    title: document.title,
  }));
  const hydration = errs.filter((e) => /hydrat|Minified React error #(418|423|425)/i.test(e));
  page.off("console", onConsole);
  page.off("pageerror", onError);
  results.push({ route, mode: mobile ? "mobile" : "desktop", status, errs, hydration, ...info });
  const okStatus = route.includes("404") ? status === 404 : status === 200 || status === 304; // 304 = caché, válido
  const bad = !okStatus || errs.length || info.overflow > 0 || info.placeholder;
  console.log(`${bad ? "FAIL" : "ok  "} ${mobile ? "[mob]" : "[dsk]"} ${route} status=${status} overflow=${info.overflow} errs=${errs.length}${info.placeholder ? " PLACEHOLDER!" : ""}`);
  if (errs.length) errs.forEach((e) => console.log("   · " + e.slice(0, 300)));
}

// Desktop pass
const dsk = await makePage(false);
for (const r of routes) await checkRoute(dsk, r, false);

// Home desktop: peek + transición + final del scroll
await dsk.goto(BASE + "/", { waitUntil: "networkidle0", timeout: 60000 });
await new Promise((r) => setTimeout(r, 4500));
await dsk.screenshot({ path: ".qa/rel-home-top.png" });
const peek = await dsk.evaluate(() => {
  const flow = document.querySelector(".home-flow");
  return flow ? Math.round(flow.getBoundingClientRect().top) : null;
});
console.log("PEEK home-flow top:", peek, peek !== null && peek < 900 ? "(visible)" : "(NO visible)");

await dsk.evaluate(() => window.scrollTo(0, window.innerHeight * 0.6));
await new Promise((r) => setTimeout(r, 1500));
await dsk.screenshot({ path: ".qa/rel-home-mid.png" });
const heroOpacity = await dsk.evaluate(() => {
  const c = document.querySelector(".hero-3d__content");
  return c ? getComputedStyle(c).opacity : null;
});
console.log("Hero content opacity a 0.6vh:", heroOpacity);

// Scroll progresivo hasta el fondo buscando zonas muertas (pantallas sin contenido visible)
const dead = await dsk.evaluate(async () => {
  const deadZones = [];
  const step = window.innerHeight * 0.5;
  const max = document.body.scrollHeight - window.innerHeight;
  for (let y = 0; y <= max; y += step) {
    window.scrollTo(0, y);
    await new Promise((r) => setTimeout(r, 250));
    const els = document.elementsFromPoint(window.innerWidth / 2, window.innerHeight / 2);
    const hasContent = els.some((el) => {
      const t = (el.textContent || "").trim();
      return (t.length > 0 || el.tagName === "CANVAS" || el.tagName === "IMG") && el !== document.body && el !== document.documentElement;
    });
    if (!hasContent) deadZones.push(Math.round(y));
  }
  window.scrollTo(0, document.body.scrollHeight);
  return deadZones;
});
await new Promise((r) => setTimeout(r, 1500));
console.log("Zonas muertas en scroll:", dead.length ? dead : "ninguna");
const ctaVisible = await dsk.evaluate(() => {
  const txt = document.body.innerText;
  const els = [...document.querySelectorAll("a,button")].filter((e) => /contacto|hablemos|escríbeme|contáctame/i.test(e.textContent || ""));
  return els.some((e) => { const r = e.getBoundingClientRect(); return r.top >= 0 && r.bottom <= window.innerHeight; });
});
console.log("CTA de contacto visible al final:", ctaVisible);
await dsk.screenshot({ path: ".qa/rel-home-end.png" });

// Sobre mí desktop: canvas del busto
await dsk.goto(BASE + "/sobre-mi", { waitUntil: "networkidle0", timeout: 60000 });
await new Promise((r) => setTimeout(r, 4000));
const persona = await dsk.evaluate(() => {
  const c = document.querySelector(".persona-figure canvas") || document.querySelector("canvas");
  if (!c) return { canvas: false };
  const gl = c.getContext("webgl2") || c.getContext("webgl");
  return { canvas: true, w: c.width, h: c.height };
});
console.log("Sobre-mi desktop canvas:", JSON.stringify(persona));
await dsk.screenshot({ path: ".qa/rel-sobremi-desktop.png" });
await dsk.close();

// Mobile pass
const mob = await makePage(true);
for (const r of routes) await checkRoute(mob, r, true);

await mob.goto(BASE + "/", { waitUntil: "networkidle0", timeout: 60000 });
await new Promise((r) => setTimeout(r, 4000));
await mob.screenshot({ path: ".qa/rel-home-mobile.png" });

// Navbar usable en móvil (botón de menú clickeable)
const nav = await mob.evaluate(() => {
  const btn = document.querySelector(".site-nav__toggle");
  if (!btn) return { found: false };
  const r = btn.getBoundingClientRect();
  return { found: true, visible: r.width > 0 && r.height > 0 && r.top >= 0 };
});
console.log("Navbar móvil (menú):", JSON.stringify(nav));

// Sobre-mí móvil: fallback (sin canvas) o canvas degradado
await mob.goto(BASE + "/sobre-mi", { waitUntil: "networkidle0", timeout: 60000 });
await new Promise((r) => setTimeout(r, 3000));
const personaMob = await mob.evaluate(() => ({
  canvas: !!document.querySelector(".persona-figure canvas"),
  fallback: !!document.querySelector(".persona-figure") && !document.querySelector(".persona-figure canvas"),
  anyPersona: !!document.querySelector("[class*=persona]"),
}));
console.log("Sobre-mi móvil persona:", JSON.stringify(personaMob));
await mob.close();

const fails = results.filter((r) => (r.route.includes("404") ? r.status !== 404 : r.status !== 200 && r.status !== 304) || r.errs.length || r.overflow > 0 || r.placeholder);
console.log("\nRESUMEN:", fails.length ? `${fails.length} FALLOS` : "TODO VERDE", `(${results.length} checks)`);
await browser.close();
process.exit(fails.length ? 1 : 0);
