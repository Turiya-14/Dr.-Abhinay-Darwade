# Dr. Abhinay Bhaskar Darwade — profile website

Personal profile and IAP campaign landing page, plus a static Privacy Policy page.

Vite 8 · React 19 · TypeScript · Tailwind CSS 4 · Framer Motion · Lucide icons. No backend, no forms, no tracking.

## Requirements

Node.js `^20.19.0 || >=22.12.0` (built and tested with Node 22.22 and npm 10.9).

## Commands

```bash
npm install       # install dependencies from package-lock.json
npm run dev       # development server → http://localhost:5173
npm run build     # type-check, build and prerender both pages into dist/
npm run preview   # serve the production build → http://localhost:4173
npm run build:standalone   # one self-contained HTML file for local viewing (see below)
```

## Single-file version (open locally, no server)

`npm run build:standalone` writes `dist-standalone/dr-abhinay-darwade-website.html`. This is one self-contained file (about 1.3 MB) with the CSS, JavaScript, fonts and photos embedded.

- Double-click it to open in any modern browser. It needs no server and no internet connection.
- The Privacy Policy opens inside the same file; the address ends in `#privacy-policy`.
- Use it for local review and sharing. For hosting, publish `dist/` instead, which has separate pages, responsive images and prerendered HTML.

## Pages

| URL                | Entry HTML                  | React entry                                    |
| ------------------ | --------------------------- | ---------------------------------------------- |
| `/`                | `index.html`                | `src/main.tsx` → `src/App.tsx`                 |
| `/privacy-policy/` | `privacy-policy/index.html` | `src/privacy-main.tsx` → `src/PrivacyPolicyPage.tsx` |

Both are real HTML files in `dist/`, so the policy URL opens directly and on refresh without server rewrites.

## Editing content

- **All homepage text, links, image paths, captions and alt text:** `src/content/siteContent.ts`
- **Privacy Policy text:** `src/content/privacyContent.ts`
- Components in `src/sections/` only handle layout.
- Section labels (eyebrows) are written in sentence case and displayed in capitals by CSS.
- `src/content/typeset.ts` automatically keeps “Dr.” on the same line as the name that follows it.

## Project structure

```text
darwade-profile/
├── index.html                  Homepage entry (title, description, font preloads)
├── privacy-policy/index.html   Privacy Policy entry
├── standalone.html             Entry for the single-file local version
├── public/
│   ├── images/                 7 optimised WebP photographs + responsive variants
│   ├── fonts/                  Self-hosted WOFF2 fonts + SIL OFL licence files
│   ├── favicon.svg             Typographic “AD” icon
│   └── apple-touch-icon.png
├── scripts/
│   ├── prerender.mjs           Writes static HTML for both pages after the build
│   └── inline-standalone.mjs   Embeds JS, CSS, fonts and photos into the single file
├── src/
│   ├── main.tsx                Homepage client entry (hydrates the prerendered HTML)
│   ├── privacy-main.tsx        Privacy Policy client entry
│   ├── standalone-main.tsx     Single-file entry (in-page links, embedded photos)
│   ├── entry-server.tsx        Build-time renderer used by scripts/prerender.mjs
│   ├── App.tsx                 Homepage section order
│   ├── PrivacyPolicyPage.tsx
│   ├── styles.css              Tailwind, @font-face rules, colour tokens, shared styles
│   ├── content/                siteContent.ts · privacyContent.ts · typeset.ts
│   ├── components/             SiteFrame · Header · Footer · GalleryDialog · Reveal · Section · ui
│   └── sections/               Hero · About · Work · Service · Campaign · Education · Research · Gallery · Contact
├── vite.config.ts              Two HTML inputs (homepage + policy)
├── vite.standalone.config.ts   Config for the single-file build
├── tsconfig.json               App type-checking
├── tsconfig.node.json          Vite config type-checking
├── README.md
└── HANDOVER.md
```

## How the build works

1. `tsc` type-checks the app and the Vite config.
2. `vite build` bundles the two HTML entries into `dist/`.
3. `vite build --ssr src/entry-server.tsx` plus `scripts/prerender.mjs` render both pages to static HTML inside `dist/`. The content is present before JavaScript loads, and React then hydrates the same markup. The temporary `.prerender/` folder is deleted automatically.

## Images

`public/images/` contains the seven photographs selected in the brief, converted from the original JPEGs to WebP (quality 80–84) without retouching. Gallery images also have 480 px and 960 px versions, and the office and teaching photos have 640 px versions. Nothing is upscaled. The other photos in the supplied archive are deliberately not part of the site.

## Fonts

Self-hosted in `public/fonts/`, with no runtime font requests. Licence files are alongside.

- **Cormorant Garamond**: variable weight (normal) plus 500 italic. Used for headings.
- **Manrope**: variable weight. Used for body text and interface.
- **Tiro Devanagari Marathi**: a subset containing only the glyphs in “पालकांची शाळा”. If that Marathi text ever changes, regenerate the subset from the `@fontsource/tiro-devanagari-marathi` package:

  ```bash
  pip install fonttools brotli
  pyftsubset tiro-devanagari-marathi-devanagari-400-normal.woff2 \
    --text="<new Marathi text>" --layout-features='*' --flavor=woff2 \
    --output-file=public/fonts/tiro-devanagari-marathi-subset.woff2
  ```
