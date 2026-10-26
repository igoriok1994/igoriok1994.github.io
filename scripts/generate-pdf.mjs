import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const docsDir = path.join(rootDir, 'docs');
const targetPdfPath = path.join(rootDir, 'public', 'cv.pdf');
const docsPdfPath = path.join(docsDir, 'cv.pdf');

// 1. Detect browser binary (Chrome / Edge)
function findBrowserPath() {
  if (process.env.CHROME_PATH && fs.existsSync(process.env.CHROME_PATH)) {
    return process.env.CHROME_PATH;
  }

  const candidates = [
    // Windows Chrome & Edge
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
    // macOS
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
    // Linux
    '/usr/bin/google-chrome',
    '/usr/bin/chromium-browser',
    '/usr/bin/chromium'
  ];

  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) {
      return candidate;
    }
  }

  throw new Error(
    'No Chromium browser (Chrome or Edge) found on the system. Please set CHROME_PATH environment variable.'
  );
}

// 2. Simple static HTTP server for docs directory
const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.pdf': 'application/pdf'
};

async function generatePdf() {
  if (!fs.existsSync(docsDir)) {
    console.error('Error: docs/ directory not found. Run "npm run build" first.');
    process.exit(1);
  }

  const browserPath = findBrowserPath();
  console.log(`[generate-pdf] Using browser: ${browserPath}`);

  const server = http.createServer((req, res) => {
    let reqPath = decodeURI(req.url.split('?')[0]);
    if (reqPath.endsWith('/')) reqPath += 'index.html';
    else if (!path.extname(reqPath)) reqPath += '/index.html';

    const filePath = path.join(docsDir, reqPath);
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      const ext = path.extname(filePath).toLowerCase();
      res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
      fs.createReadStream(filePath).pipe(res);
    } else {
      res.writeHead(404);
      res.end('Not found');
    }
  });

  const port = 43219;

  await new Promise((resolve) => server.listen(port, '127.0.0.1', resolve));
  console.log(`[generate-pdf] Internal server listening on http://127.0.0.1:${port}`);

  console.log('[generate-pdf] Rendering /cv into PDF via Headless Chrome...');
  const child = spawn(
    browserPath,
    [
      '--headless=new',
      `--print-to-pdf=${targetPdfPath}`,
      '--no-pdf-header-footer',
      '--run-all-compositor-stages-before-draw',
      '--virtual-time-budget=2000',
      `http://127.0.0.1:${port}/cv`
    ],
    { stdio: 'ignore' }
  );

  await new Promise((resolve, reject) => {
    child.on('close', (code) => {
      server.close();
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Browser exited with code ${code}`));
      }
    });
  });

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
