import http from 'http';
import fs from 'fs';
import path from 'path';
import { spawn } from 'child_process';

const docsDir = path.resolve('docs');
const targetPdfPath = path.resolve('public/cv.pdf');
const docsPdfPath = path.resolve('docs/cv.pdf');

function findChrome() {
  const possiblePaths = [
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    process.env.LOCALAPPDATA + '\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  ];

  for (const p of possiblePaths) {
    if (p && fs.existsSync(p)) {
      return p;
    }
  }
  return null;
}

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.pdf': 'application/pdf',
  '.webp': 'image/webp'
};

async function generatePdf() {
  const browserPath = findChrome();
  if (!browserPath) {
    console.error('[generate-pdf] Chrome or Edge not found.');
    process.exit(1);
  }

  console.log(`[generate-pdf] Using browser: ${browserPath}`);

  // Create lightweight static server to serve docs/ directory
  const server = http.createServer((req, res) => {
    let reqPath = req.url.split('?')[0];
    if (reqPath.endsWith('/')) reqPath += 'index.html';
    if (!path.extname(reqPath)) reqPath += '/index.html';

    const filePath = path.join(docsDir, reqPath);
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      const ext = path.extname(filePath);
      res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
      fs.createReadStream(filePath).pipe(res);
    } else {
      res.writeHead(404);
      res.end('Not found');
    }
  });

  const port = 43219;
  const cdpPort = 9226;

  await new Promise((resolve) => server.listen(port, '127.0.0.1', resolve));
  console.log(`[generate-pdf] Internal server listening on http://127.0.0.1:${port}`);

  console.log('[generate-pdf] Launching headless browser with CDP for exact full-bleed printing...');
  const child = spawn(
    browserPath,
    [
      '--headless=new',
      `--remote-debugging-port=${cdpPort}`,
      '--disable-gpu',
      'about:blank'
    ],
    { stdio: 'ignore' }
  );

  // Poll for CDP endpoint
  let targets = [];
  for (let i = 0; i < 30; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${cdpPort}/json`);
      targets = await res.json();
      if (targets.length > 0) break;
    } catch (e) {}
    await new Promise((r) => setTimeout(r, 150));
  }

  const pageTarget = targets.find((t) => t.type === 'page');
  if (!pageTarget) {
    child.kill();
    server.close();
    throw new Error('No CDP page target available');
  }

  const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);
  await new Promise((r) => (ws.onopen = r));

  let msgId = 1;
  const send = (method, params = {}) => {
    return new Promise((resolve, reject) => {
      const id = msgId++;
      const handler = (event) => {
        const msg = JSON.parse(event.data);
        if (msg.id === id) {
          ws.removeEventListener('message', handler);
          if (msg.error) reject(msg.error);
          else resolve(msg.result);
        }
      };
      ws.addEventListener('message', handler);
      ws.send(JSON.stringify({ id, method, params }));
    });
  };

  await send('Page.enable');

  // Navigate to /print and wait for load
  const loadPromise = new Promise((resolve) => {
    const handler = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.method === 'Page.loadEventFired') {
        ws.removeEventListener('message', handler);
        resolve();
      }
    };
    ws.addEventListener('message', handler);
  });

  await send('Page.navigate', { url: `http://127.0.0.1:${port}/print` });
  await loadPromise;

  // Emulate print media and wait for fonts/images
  await send('Emulation.setEmulatedMedia', { media: 'print' });
  await send('Runtime.evaluate', {
    expression: 'document.fonts.ready.then(() => true)',
    awaitPromise: true
  });
  await new Promise((r) => setTimeout(r, 1000));

  // Request printToPDF with zero margins and CSS page size
  console.log('[generate-pdf] Printing via CDP (zero margins, exact A4 full-bleed)...');
  const pdfResult = await send('Page.printToPDF', {
    printBackground: true,
    preferCSSPageSize: true,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    displayHeaderFooter: false
  });

  ws.close();
  child.kill();
  server.close();

  fs.writeFileSync(targetPdfPath, Buffer.from(pdfResult.data, 'base64'));

  // Also copy to docs/cv.pdf if docs directory exists
  if (fs.existsSync(docsDir) && fs.existsSync(targetPdfPath)) {
    fs.copyFileSync(targetPdfPath, docsPdfPath);
  }

  const stats = fs.statSync(targetPdfPath);
  console.log(`[generate-pdf] ✓ Successfully generated ${targetPdfPath} (${(stats.size / 1024).toFixed(1)} KB)`);
}

generatePdf().catch((err) => {
  console.error('[generate-pdf] Failed:', err);
  process.exit(1);
});
