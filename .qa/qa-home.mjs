// QA visual con Chrome real: home tras el preloader + scroll + errores de consola.
import puppeteer from "puppeteer-core";

const browser = await puppeteer.launch({
  executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  headless: "new",
  args: ["--window-size=1440,900", "--hide-scrollbars"],
  defaultViewport: { width: 1440, height: 900 },
});

const page = await browser.newPage();
const consoleErrors = [];
page.on("console", (msg) => {
  if (msg.type() === "error") consoleErrors.push(msg.text());
});
page.on("pageerror", (err) => consoleErrors.push(`PAGEERROR: ${err.message}`));

await page.goto("http://localhost:3000/", { waitUntil: "networkidle0", timeout: 60000 });
await new Promise((r) => setTimeout(r, 5000)); // preloader + primeras órbitas del cristal
await page.screenshot({ path: ".qa/home-hero-real.png" });

// Info del canvas WebGL
const canvasInfo = await page.evaluate(() => {
  const c = document.querySelector(".hero-3d__canvas canvas");
  return c ? { w: c.width, h: c.height } : null;
});
console.log("CANVAS:", JSON.stringify(canvasInfo));

// Scroll a mitad de página (secciones con reveal) y al final
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight * 0.45));
await new Promise((r) => setTimeout(r, 2500));
await page.screenshot({ path: ".qa/home-mid-real.png" });

await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
await new Promise((r) => setTimeout(r, 2500));
await page.screenshot({ path: ".qa/home-end-real.png" });

console.log("ERRORES DE CONSOLA:", consoleErrors.length ? consoleErrors : "ninguno");
await browser.close();
