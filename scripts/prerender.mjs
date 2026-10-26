// Renders the page to static HTML after `vite build`, so the first paint
// doesn't wait for JavaScript. The client then hydrates it (src/main.tsx).
// It also inlines the stylesheet: this is one page, so a separate CSS request
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
    outDir: ssrOut,
    emptyOutDir: true,
  },
});

const { render } = await import(pathToFileURL(resolve(ssrOut, 'entry-server.js')).href);
const indexPath = resolve(root, 'dist/index.html');
const template = await readFile(indexPath, 'utf8');
const marker = '<div id="root"></div>';

if (!template.includes(marker)) {
  throw new Error(`prerender: ${marker} not found in dist/index.html`);
}

let html = template.replace(marker, `<div id="root">${render()}</div>`);

const link = html.match(/<link rel="stylesheet"[^>]*href="(\/assets\/[^"]+\.css)"[^>]*>/);
if (!link) {
  throw new Error('prerender: stylesheet link not found in dist/index.html');
}
const cssPath = resolve(root, 'dist', link[1].slice(1));
const css = await readFile(cssPath, 'utf8');
// A function replacement, so `$` sequences in the CSS stay as they are.
html = html.replace(link[0], () => `<style>${css}</style>`);
// Inlined now, so the separate file would only be dead weight in the deploy.
await rm(cssPath);

await writeFile(indexPath, html);
await rm(ssrOut, { recursive: true, force: true });
console.log('prerender: wrote dist/index.html (page prerendered, CSS inlined)');
