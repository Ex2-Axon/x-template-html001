import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
});

const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1.5 });

await page.goto('http://localhost:8765', { waitUntil: 'networkidle0', timeout: 30000 });

// Wait for animations to settle
await new Promise(r => setTimeout(r, 2000));

await page.screenshot({
  path: 'screenshot.png',
  fullPage: false
});

console.log('Screenshot saved: screenshot.png');
await browser.close();
