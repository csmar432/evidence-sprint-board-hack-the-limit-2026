import fs from "node:fs/promises";

const { chromium } = await import(process.env.PLAYWRIGHT_MODULE_PATH || "playwright");
const outputPath = fileName => decodeURIComponent(new URL(fileName, import.meta.url).pathname);
const expectedBrief = await fs.readFile(outputPath("./evidence-sprint-brief.md"), "utf8");
const browser = await chromium.launch({headless:true});
const failures = [];

async function checkPage(page, viewport, screenshotPath) {
  await page.setViewportSize(viewport);
  const consoleErrors = [];
  page.on("console", message => {if (message.type() === "error") consoleErrors.push(message.text());});
  await page.goto("http://127.0.0.1:4175/", {waitUntil:"networkidle"});
  const pageState = await page.evaluate(() => ({
    width: window.innerWidth,
    scrollWidth: document.documentElement.scrollWidth,
    text: document.body.innerText,
    cardMetric: document.querySelector("#cardMetric")?.textContent,
    sourceMetric: document.querySelector("#sourceMetric")?.textContent,
    checkMetric: document.querySelector("#checkMetric")?.textContent,
    sourceRows: document.querySelectorAll("#sourceRows tr").length
  }));
  if (pageState.scrollWidth > pageState.width) failures.push(`${viewport.width}px viewport has horizontal overflow: ${pageState.scrollWidth}px`);
  for (const staleText of ["Sample data", "Swipe horizontally", "OECD", "after-school", "60%", "Draft"]) {
    if (pageState.text.includes(staleText)) failures.push(`${viewport.width}px page contains stale text: ${staleText}`);
  }
  if (pageState.cardMetric !== "4" || pageState.sourceMetric !== "1" || pageState.checkMetric !== "100%" || pageState.sourceRows !== 1) failures.push(`${viewport.width}px default state is not 4 cards, 1 source, 100% checks`);
  if (consoleErrors.length) failures.push(`${viewport.width}px console errors: ${consoleErrors.join(" | ")}`);
  await page.screenshot({path:screenshotPath, fullPage:true});
  return pageState;
}

const desktopPage = await browser.newPage({viewport:{width:1440,height:1100}});
await checkPage(desktopPage, {width:1440,height:1100}, outputPath("./evidence-sprint-board-desktop.png"));
const [desktopDownload] = await Promise.all([desktopPage.waitForEvent("download"), desktopPage.locator("#exportBrief").click()]);
const downloadedBrief = await fs.readFile(await desktopDownload.path(), "utf8");
if (downloadedBrief !== expectedBrief) {
  await fs.writeFile("/tmp/evidence-sprint-generated-brief.md", downloadedBrief);
  failures.push("Markdown export differs from submission/evidence-sprint-brief.md; generated copy saved at /tmp/evidence-sprint-generated-brief.md");
}

const mobilePage = await browser.newPage({viewport:{width:390,height:844}});
await checkPage(mobilePage, {width:390,height:844}, outputPath("./evidence-sprint-board-mobile.png"));
const tabletPage = await browser.newPage({viewport:{width:768,height:1024}});
await checkPage(tabletPage, {width:768,height:1024}, "/tmp/evidence-sprint-board-tablet.png");

const printPage = await browser.newPage({viewport:{width:1440,height:1100}});
await printPage.goto("http://127.0.0.1:4175/", {waitUntil:"networkidle"});
await printPage.pdf({path:"/tmp/evidence-sprint-board-brief.pdf", format:"A4", printBackground:true});
await browser.close();

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}
console.log("QA passed: desktop, mobile, tablet, export, CSP/runtime, and print PDF checks.");
