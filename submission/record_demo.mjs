import fs from "node:fs/promises";

const { chromium } = await import(process.env.PLAYWRIGHT_MODULE_PATH || "playwright");
const outputVideoPath = decodeURIComponent(new URL("./evidence-sprint-board-demo.webm", import.meta.url).pathname);
const temporaryVideoDirectory = "/tmp/evidence-sprint-video";
await fs.rm(temporaryVideoDirectory, {recursive:true, force:true});
await fs.mkdir(temporaryVideoDirectory, {recursive:true});

const browser = await chromium.launch({headless:true});
const context = await browser.newContext({
  viewport:{width:1280,height:720},
  recordVideo:{dir:temporaryVideoDirectory,size:{width:1280,height:720}}
});
const recordingStartedAt = Date.now();
const holdUntil = async targetMilliseconds => {
  const remainingMilliseconds = targetMilliseconds - (Date.now() - recordingStartedAt);
  if (remainingMilliseconds > 0) await page.waitForTimeout(remainingMilliseconds);
};
const page = await context.newPage();
await page.goto("https://csmar432.github.io/evidence-sprint-board-hack-the-limit-2026/", {waitUntil:"networkidle"});
await holdUntil(15000);
await page.locator(".source-panel").scrollIntoViewIfNeeded();
await holdUntil(35000);
await page.locator(".brief-panel").scrollIntoViewIfNeeded();
await holdUntil(55000);
await page.locator(".check-panel").scrollIntoViewIfNeeded();
await holdUntil(75000);
await page.evaluate(() => window.scrollTo({top:0, behavior:"instant"}));
await holdUntil(90000);
await context.close();
const videoPath = await page.video().path();
await browser.close();
await fs.copyFile(videoPath, outputVideoPath);
console.log("Recorded 90-second demo video at submission/evidence-sprint-board-demo.webm");
