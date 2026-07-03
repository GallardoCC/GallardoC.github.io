// QA dirigido: menú móvil (tap real) + typewriter completo del hero.
import puppeteer from "puppeteer-core";

const browser = await puppeteer.launch({
  executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  headless: "new",
  defaultViewport: { width: 390, height: 844, isMobile: true, hasTouch: true, deviceScaleFactor: 2 },
});
const page = await browser.newPage();
const errs = [];
page.on("pageerror", (e) => errs.push(e.message));
await page.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "no-preference" }]);
await page.goto("http://localhost:3000/", { waitUntil: "networkidle0", timeout: 60000 });
await new Promise((r) => setTimeout(r, 6000));

// Typewriter completo tras esperar
const roleText = await page.evaluate(() => {
  const el = [...document.querySelectorAll("*")].find((e) => e.children.length === 0 && /AI Engineering/.test(e.textContent || ""));
  return el ? el.textContent.trim() : null;
});
console.log("Texto rol hero tras 6s:", JSON.stringify(roleText));

// Tap en el botón Menú
const btn = await page.$(".site-nav__toggle");
console.log("Botón menú encontrado:", !!btn);
if (btn) {
  await btn.tap();
  await new Promise((r) => setTimeout(r, 800));
  const menu = await page.evaluate(() => {
    const m = document.querySelector(".site-nav__mobile");
    if (!m) return { open: false };
    const links = [...m.querySelectorAll("a")];
    const r = m.getBoundingClientRect();
    return { open: true, links: links.length, visible: r.width > 0 && r.height > 0, firstLinkText: links[0]?.textContent };
  });
  console.log("Menú móvil:", JSON.stringify(menu));
  await page.screenshot({ path: ".qa/rel-mobile-menu.png" });
  // Navegar tocando un link
  const link = await page.$(".site-nav__mobile a");
  if (link) { await link.tap(); await new Promise((r) => setTimeout(r, 2500)); console.log("URL tras tap:", page.url()); }
}
console.log("Errores JS:", errs.length ? errs : "ninguno");
await browser.close();
