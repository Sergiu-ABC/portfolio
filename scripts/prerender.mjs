// Renders the page to static HTML after `vite build`, so the first paint
// doesn't wait for JavaScript. The client then hydrates it (src/main.tsx).
// It also inlines the stylesheet, so a separate CSS request
// would only hold up the first paint.
import { readFile, rm, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { build } from 'vite';

const root = resolve(import.meta.dirname, '..');
const ssrOut = resolve(root, 'node_modules/.prerender');

await build({
  root,
  logLevel: 'warn',
  build: {
    ssr: 'src/entry-server.tsx',
    rollupOptions: { input: 'src/entry-server.tsx' },
    outDir: ssrOut,
    emptyOutDir: true,
  },
});

const { render } = await import(pathToFileURL(resolve(ssrOut, 'entry-server.js')).href);
const marker = '<div id="root"></div>';
const stylesheets = new Set();
const cssByPath = new Map();
for (const [file, productPage] of [['index.html', false], ['solo-ship-kit/index.html', true]]) {
  const indexPath = resolve(root, 'dist', file);
  const template = await readFile(indexPath, 'utf8');

  if (!template.includes(marker)) {
    throw new Error(`prerender: ${marker} not found in dist/${file}`);
  }

  let html = template.replace(marker, `<div id="root">${render(productPage)}</div>`);

  const link = html.match(/<link rel="stylesheet"[^>]*href="(\/assets\/[^"]+\.css)"[^>]*>/);
  if (!link) {
    throw new Error(`prerender: stylesheet link not found in dist/${file}`);
  }
  const cssPath = resolve(root, 'dist', link[1].slice(1));
  const css = cssByPath.get(cssPath) ?? await readFile(cssPath, 'utf8');
  cssByPath.set(cssPath, css);
  stylesheets.add(cssPath);
  // A function replacement, so `$` sequences in the CSS stay as they are.
  html = html.replace(link[0], () => `<style>${css}</style>`);
  await writeFile(indexPath, html);
  console.log(`prerender: wrote dist/${file} (page prerendered, CSS inlined)`);
}
// Remove shared CSS only after both pages have been written.
await Promise.all([...stylesheets].map((file) => rm(file)));
await rm(ssrOut, { recursive: true, force: true });
