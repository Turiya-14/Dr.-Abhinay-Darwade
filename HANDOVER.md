# Handover: Dr. Abhinay Bhaskar Darwade website

**Date:** 7 October 2026
**Status:** development complete; the production build passes. Not deployed, because deployment is out of scope.

## Scope completed

- **Homepage (`/`):** responsive single page with these sections in the specified order and with the copy from the brief:
  - header with mobile menu
  - hero
  - About
  - Professional work
  - Service & recognition
  - IAP 2027 campaign band
  - Parent education
  - Research & press
  - Gallery with an accessible lightbox
  - Contact
  - footer
- **Privacy Policy (`/privacy-policy/`):** a separate static page with the full policy text, the shared header and footer, numbered sections and “Back to profile” links.
- **Assets:** optimised local photographs, self-hosted fonts with licences, and a typographic “AD” favicon plus an apple-touch-icon.
- **Prerendering:** both pages are delivered as complete HTML. The content is readable without JavaScript, and React hydrates it for the interactive parts.
- **Not included, as the brief requires:** backend, forms, analytics, cookies, browser storage, service worker, third-party embeds or deployment configuration.

## Build

- **Command:** `npm run build`
- **Result (7 October 2026, Node 22.22.0):** TypeScript check passed, the Vite 8.3.3 build succeeded and both pages were prerendered.
- **Output:** `dist/`, about 1.7 MB in 32 files.
  - HTML: `dist/index.html` and `dist/privacy-policy/index.html`
  - Hashed JavaScript and CSS: `dist/assets/` (≈103 KB JavaScript and 7 KB CSS, gzipped)
  - `dist/images/`, `dist/fonts/`, `favicon.svg` and `apple-touch-icon.png`

## Page paths

| Path               | File                              |
| ------------------ | --------------------------------- |
| `/`                | `dist/index.html`                 |
| `/privacy-policy/` | `dist/privacy-policy/index.html`  |

## Contact email

`dr.abhinaydarwade@gmail.com` appears as `mailto:` links in these places:

- the Contact section, as both the displayed address and the “Email Dr. Darwade” button
- sections 1 and 7 of the Privacy Policy

There is intentionally no form, phone number, WhatsApp link, map, street address or social handle.

## Intentional omissions (brief Section 11)

None of the following are published:

- migrant-worker totals
- the ₹4.5 lakh medicine total
- the number of children counselled
- lecture or article totals
- the 52-episode count
- figures from the education poster
- former IAP office titles
- unverified phone, WhatsApp, handles or address
- voting dates, countdown or voting link
- any claim of nomination, election or endorsement
- the ResearchGate preprint
- services, fees or appointment availability

Omitted items leave no trace in the interface: no placeholders, “coming soon” notes or disabled buttons.

## Where the profile facts come from

- **Independently confirmed by the earlier research:** the Associate Professor designation at ACPM Medical College.
- **Client-supplied profile information, carried forward as given and not externally verified:**
  - Founder & Director of Sangopan Balrugnalay
  - the “Aspirant for CIAP Executive Board Member 2027” wording
  - MNAMS
  - Diploma in Counselling Psychology
  - Advanced Course in Medical Education (ACME)

## Asset map

All seven files required by the brief were found by exact filename. None are missing.

| Purpose        | Source file in ZIP                                   | Output in `public/images/`                    | Treatment                                         | Size   |
| -------------- | ---------------------------------------------------- | --------------------------------------------- | ------------------------------------------------- | ------ |
| Hero portrait  | `WhatsApp Image 2026-10-07 at 5.21.34 PM (2).jpeg`   | `dr-darwade-hero.webp`                        | 760×1060, original size and proportions, no crop  | 102 KB |
| About portrait | `WhatsApp Image 2026-10-07 at 5.21.36 PM.jpeg`       | `dr-darwade-office.webp` (+ `-640`)           | 1016×1270, 4:5 crop from the top, laptop partly cropped | 56 KB  |
| Teaching       | `WhatsApp Image 2026-10-07 at 5.21.22 PM.jpeg`       | `medical-teaching.webp` (+ `-640`)            | 1040×469, full frame                              | 38 KB  |
| Gallery 1      | `WhatsApp Image 2026-10-07 at 5.21.22 PM (1).jpeg`   | `academic-discussion.webp` (+ `-480`, `-960`) | 1600×900, full frame                              | 82 KB  |
| Gallery 2      | `WhatsApp Image 2026-10-07 at 5.21.24 PM (1).jpeg`   | `mahaiap-felicitation.webp` (+ `-480`, `-960`) | 1358×1600, full frame                             | 169 KB |
| Gallery 3      | `WhatsApp Image 2026-10-07 at 5.21.32 PM (1).jpeg`   | `ncd-summit-felicitation.webp` (+ `-480`, `-960`) | 1315×702, full frame                           | 90 KB  |
| Gallery 4      | `WhatsApp Image 2026-10-07 at 5.21.34 PM (1).jpeg`   | `ncd-summit-panel.webp` (+ `-480`, `-960`)    | 1500×1000, full frame                             | 94 KB  |

- The seven main files total 631 KB.
- The gallery uses “justified” rows: two photos per row, each sized to its own aspect ratio, so no photo is cropped. The lightbox opens the full-size file.
- The other 37 photos in the archive are not part of the project.

## Implementation notes

- **Wording:**
  - Typographic apostrophes and quotes (’ “ ”) replace straight ones.
  - A non-breaking space follows “Dr.”.
  - The H1, the hero role line and the IAP heading use intentional line breaks, which brief §7 allows.
  - Section labels are stored in sentence case and shown in capitals by CSS, so they look the same as in the brief.
- **Colours:** the brief's gold `#B18A4A` is used only for lines and details. For readable accent text, two tones were derived from the palette:
  - bronze `#876834` on light backgrounds (contrast 4.7:1)
  - soft gold `#D4B47E` on navy (contrast 6.9:1)
  - The sand `#EEEAE2` behind the portrait and in the footer and the deep navy `#0A2135` for button hover are also palette-derived.
- **Footer “Back to top”:** links to `/#home` on both pages, as the brief specifies.
- **Motion:**
  - each section fades in once, rising 16 px over 0.45 s
  - the short gold rule in the hero draws in
  - small hover changes on links, buttons, cards and gallery images (a 1.02× zoom)
  - the mobile menu and lightbox fade in
  - With reduced motion turned on, there is no animation and smooth scrolling is off. Content is never hidden if the animation fails to run.

## Checks performed

All checks were automated with Playwright 1.63 (Chromium build 1194) against `npm run preview`, plus axe-core 4.14. **All 88 checks passed** on the final build.

- **At 320, 390, 768 and 1440 px, on both pages:**
  - no horizontal scroll
  - every image loads
  - no console errors or warnings
  - no third-party network requests on page load
  - primary controls at least 44 px tall (checked at 390 px)
- **Links:**
  - all five navigation anchors point to existing sections, and the section order matches the brief
  - the hero actions (`/#about`, `/#contact`) and the campaign action (`/#contact`) are correct
  - both `mailto:` links are correct
  - all 8 external URLs match the brief, open in a new tab with `rel="noopener noreferrer"` and are announced as “opens in a new tab”
  - there is no `href="#"`
  - clicking a navigation link lands the section just below the sticky header
- **Mobile menu:**
  - `aria-expanded` is accurate
  - Escape closes it and returns focus to the button
  - Tab moves into the links
  - choosing a link closes the menu and navigates
- **Lightbox:**
  - opens from the keyboard, is named by its caption and shows the large image
  - Tab and Shift+Tab stay inside it
  - Escape, the Close button and a backdrop click all close it, and focus returns to the thumbnail
  - the Close button stays reachable at 320 px
- **Privacy Policy:**
  - `/privacy-policy/` returns 200 and is fully styled on direct load and on refresh
  - it has 9 numbered sections, and its emails are `mailto:` links
  - “Back to profile” goes to `/#home`, and the footer links are correct
- **Accessibility:** axe-core found 0 violations on the homepage and 0 on the Privacy Policy. Each page has exactly one H1, and every image has width, height and the alt text from the brief.
- **Robustness and privacy:**
  - with JavaScript disabled, both pages are readable
  - no cookies, localStorage, sessionStorage or service worker are used
  - the hero image is loaded eagerly with `fetchpriority="high"`, and all other images lazy-load
- **Motion:** sections animate once on scroll and the hero is never hidden. With reduced motion turned on, everything is visible and `scroll-behavior` is `auto`.
- **Development server:** `npm run dev` renders both pages with no console errors.
- **Visual review:** full-page screenshots were reviewed at 390, 768 and 1440 px, along with the open mobile menu and the lightbox at 320 and 1440 px. Faces and event photographs are uncropped and undistorted, and no text overflows.

### Limitations

- Testing was done in headless Chromium only, not on physical iOS or Android devices, Safari or Firefox.
- The external links were checked against the brief's URLs and attributes, but the destination pages were not fetched again.

## Single-file local version

`npm run build:standalone` produces `dist-standalone/dr-abhinay-darwade-website.html`. It is one 1.3 MB file containing both pages, with the CSS, JavaScript, fonts and one copy of each photo embedded. It opens by double-click with no server.

**How it differs from the hosted build:**
- links are in-page hashes (`#about`, `#privacy-policy`)
- the Privacy Policy appears inside the same file
- there are no responsive image variants and no prerendered HTML

It is meant for review and sharing. **Deploy `dist/`, not this file.**

**Checked by opening it from disk (file://) in Chromium; all 20 checks passed:**
- every embedded font and all 7 photos load
- there are no network requests at all and no console errors
- navigation and the gallery lightbox work
- “Privacy Policy”, “Back to profile”, refresh and the browser Back button all switch views correctly
- the mobile menu works and the scroll animations play
- there is no horizontal scroll at 390 or 1440 px

## Note for the deployment person

- Publish the **contents of `dist/`** as static files at the **root** of the chosen domain or subdomain. Links and assets use root-relative paths such as `/#about`, `/privacy-policy/` and `/images/…`. If the site must live in a sub-folder, those paths need adjusting.
- No rewrite rules are needed, because `/privacy-policy/` is a real folder containing `index.html`.
- Once the final URL is known, you can add `<link rel="canonical">`, `og:url` and an absolute `og:image` to both HTML files. These were deliberately left out because no production address exists yet.
- Before launch, check the hosting service's logging, analytics and cookie behaviour against section 2 of the Privacy Policy. Do not turn on host analytics or add tracking without updating the policy.
- Files in `/assets/*` have hashed names and can be cached long-term. HTML, images and fonts should use normal caching.
