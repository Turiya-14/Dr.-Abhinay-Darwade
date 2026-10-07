// Turns the standalone Vite build into ONE self-contained HTML file that opens
// by double-click (file://): JS, CSS, fonts, favicon and photos are all embedded.
import { mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const root = new URL('../', import.meta.url);
const buildDir = new URL('.standalone/', root);
const outDir = new URL('dist-standalone/', root);
const outFile = new URL('dr-abhinay-darwade-website.html', outDir);

const dataUri = (buffer, mime) => `data:${mime};base64,${buffer.toString('base64')}`;
const builtAsset = (href) => readFile(new URL(`.${href}`, buildDir));

async function replaceAsync(text, pattern, replacer) {
  const matches = [...text.matchAll(pattern)];
  const replacements = await Promise.all(matches.map((match) => replacer(...match)));
  let index = 0;
  return text.replace(pattern, () => replacements[index++]);
}

// Keep "</script" and "<!--" inside inline code from confusing the HTML parser.
const safeForScript = (code) => code.replace(/<\/script/gi, '\\x3C/script').replace(/<!--/g, '\\x3C!--');

let html = await readFile(new URL('standalone.html', buildDir), 'utf8');

// 1. Stylesheet → inline <style>, with the self-hosted fonts embedded.
html = await replaceAsync(html, /<link rel="stylesheet"[^>]*href="([^"]+)"[^>]*>/g, async (_tag, href) => {
  let css = (await builtAsset(href)).toString('utf8');
  css = await replaceAsync(css, /url\((["']?)\/fonts\/([^"')]+)\1\)/g, async (_m, _quote, file) => {
    const font = await readFile(new URL(`public/fonts/${file}`, root));
    return `url(${dataUri(font, 'font/woff2')})`;
  });
  return `<style>${css.replace(/<\/style/gi, '<\\/style')}</style>`;
});

// 2. One embedded copy of each main photograph (responsive variants are not needed locally).
const imageDir = new URL('public/images/', root);
const images = {};
for (const file of (await readdir(imageDir)).sort()) {
  if (file.endsWith('.webp') && !/-\d+\.webp$/.test(file)) {
    images[`/images/${file}`] = dataUri(await readFile(new URL(file, imageDir)), 'image/webp');
  }
}

// 3. JavaScript bundle → inline module script (inline modules run from file://).
html = await replaceAsync(html, /<script type="module"[^>]*src="([^"]+)"[^>]*><\/script>/g, async (_tag, src) => {
  const code = (await builtAsset(src)).toString('utf8');
  return (
    `<script id="standalone-images" type="application/json">${JSON.stringify(images)}</script>\n` +
    `    <script type="module">${safeForScript(code)}</script>`
  );
});

// 4. Favicon as a data URI.
const favicon = dataUri(await readFile(new URL('public/favicon.svg', root)), 'image/svg+xml');
html = html.replace('</title>', `</title>\n    <link rel="icon" href="${favicon}" type="image/svg+xml" />`);

if (/(src|href)="\/(assets|images|fonts)\//.test(html)) throw new Error('A local asset reference was left un-embedded.');

await mkdir(outDir, { recursive: true });
await writeFile(outFile, html);
await rm(buildDir, { recursive: true, force: true });
console.log(`single-file site → ${fileURLToPath(outFile)} (${(Buffer.byteLength(html) / 1024 / 1024).toFixed(2)} MB)`);
