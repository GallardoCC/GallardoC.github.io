// QA de transiciones de paneles: home desktop + móvil + sobre-mi (persona 3D).
// Emula prefers-reduced-motion: no-preference (headless lo fuerza a reduce).
import puppeteer from "puppeteer-core";

const browser = await puppeteer.launch({
  executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  headless: "new",
  args: ["--window-size=1440,900", "--hide-scrollbars"],
  defaultViewport: { width: 1440, height: 900 },
});

const errors = [];
const page = await browser.newPage();
page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
page.on("pageerror", (e) => errors.push(`PAGEERROR: ${e.message}`));
await page.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "no-preference" }]);

await page.goto("http://localhost:3000/", { waitUntil: "networkidle0", timeout: 60000 });
await new Promise((r) => setTimeout(r, 4500));
await page.screenshot({ path: ".qa/panels-hero.png" });

// ¿Se asoma el siguiente panel? (top de .home-flow dentro del viewport)
const peek = await page.evaluate(() => {
  const flow = document.querySelector(".home-flow");
  return flow ? Math.round(flow.getBoundingClientRect().top) : null;
});
console.log("HOME-FLOW top (viewport 900px):", peek, peek && peek < 900 ? "→ PEEK OK" : "→ SIN PEEK");

// Transición hero→panel 1 a mitad del solape
await page.evaluate(() => window.scrollTo(0, window.innerHeight * 0.5));
await new Promise((r) => setTimeout(r, 1500));
await page.screenshot({ path: ".qa/panels-transition.png" });

const heroState = await page.evaluate(() => {
  const c = document.querySelector(".hero-3d__content");
  return c ? getComputedStyle(c).opacity : null;
});
console.log("Opacidad hero-content a medio solape:", heroState);

// Sección proyectos
await page.evaluate(() => document.querySelector(".pj-showcase")?.scrollIntoView({ block: "center" }));
await new Promise((r) => setTimeout(r, 2000));
await page.screenshot({ path: ".qa/panels-projects.png" });

// Final de la home
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
await new Promise((r) => setTimeout(r, 1500));
await page.screenshot({ path: ".qa/panels-end.png" });

// Sobre mí (persona 3D)
await page.goto("http://localhost:3000/sobre-mi", { waitUntil: "networkidle0", timeout: 60000 });
await new Promise((r) => setTimeout(r, 4000));
const personaCanvas = await page.evaluate(() => !!document.querySelector(".persona-figure canvas"));
console.log("Persona 3D canvas presente:", personaCanvas);
await page.screenshot({ path: ".qa/panels-sobremi.png" });

// Móvil 390px
const mob = await browser.newPage();
await mob.setViewport({ width: 390, height: 844 });
mob.on("pageerror", (e) => errors.push(`MOBILE PAGEERROR: ${e.message}`));
await mob.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "no-preference" }]);
await mob.goto("http://localhost:3000/", { waitUntil: "networkidle0", timeout: 60000 });
await new Promise((r) => setTimeout(r, 4000));
await mob.screenshot({ path: ".qa/panels-mobile-hero.png" });
const hOverflow = await mob.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
console.log("Overflow horizontal móvil:", hOverflow);
await mob.evaluate(() => document.querySelector(".pj-showcase")?.scrollIntoView({ block: "center" }));
await new Promise((r) => setTimeout(r, 1200));
await mob.screenshot({ path: ".qa/panels-mobile-projects.png" });

console.log("ERRORES DE CONSOLA:", errors.length ? errors : "ninguno");
await browser.close();
