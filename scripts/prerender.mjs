// Renders both pages to static HTML after `vite build`, so content, headings and
// images are present in the delivered files before JavaScript runs. React then
// hydrates the same markup in the browser.
import { readFile, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const ssrDir = new URL('../.prerender/', import.meta.url);
const { render } = await import(new URL('entry-server.js', ssrDir).href);

const pages = [
  { name: 'home', file: new URL('../dist/index.html', import.meta.url) },
  { name: 'privacy', file: new URL('../dist/privacy-policy/index.html', import.meta.url) },
];
const marker = '<!--app-html-->';

for (const page of pages) {
  const path = fileURLToPath(page.file);
  const template = await readFile(path, 'utf8');
  if (!template.includes(marker)) throw new Error(`Prerender marker missing in ${path}`);
  const html = render(page.name);
  await writeFile(path, template.replace(marker, () => html));
  console.log(`prerendered ${page.name.padEnd(8)} → ${path.split('/dist/')[1] ? 'dist/' + path.split('/dist/')[1] : path}`);
}

await rm(ssrDir, { recursive: true, force: true });
