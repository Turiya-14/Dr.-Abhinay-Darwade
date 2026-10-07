// Entry for the single-file local version (`npm run build:standalone`).
// Same components and copy as the hosted site, with three adaptations for a file opened from disk:
//   1. root-relative links (/#about, /privacy-policy/) become in-page hashes (#about, #privacy-policy);
//   2. photos come from data URIs embedded in the file (one size each);
//   3. the Privacy Policy is shown in the same file when the address ends in #privacy-policy.
import './styles.css';
import { StrictMode, useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import PrivacyPolicyPage from './PrivacyPolicyPage';
import { privacyPolicy } from './content/privacyContent';
import { brandLink, campaign, footer, gallery, hero, images, navigation } from './content/siteContent';

const PRIVACY_HASH = '#privacy-policy';

const localHref = (href: string) => {
  if (href === '/privacy-policy/') return PRIVACY_HASH;
  return href.startsWith('/#') ? href.slice(1) : href;
};

for (const link of [
  brandLink,
  ...navigation,
  hero.primaryAction,
  hero.secondaryAction,
  campaign.action,
  footer.privacyLink,
  footer.backToTop,
  privacyPolicy.backLink,
]) {
  link.href = localHref(link.href);
}

const embedded = document.getElementById('standalone-images')?.textContent;
const imageData: Record<string, string> = embedded ? JSON.parse(embedded) : {};
for (const image of [images.hero, images.office, images.teaching, ...gallery.items]) {
  image.src = imageData[image.src] ?? image.src;
  (image as { srcSet?: string }).srcSet = undefined;
}

type Page = 'home' | 'privacy';
const HOME_HASHES = new Set(['', '#home', '#about', '#work', '#service', '#iap-2027', '#education', '#research', '#gallery', '#contact']);
const TITLES: Record<Page, string> = {
  home: document.title,
  privacy: 'Privacy Policy | Dr. Abhinay Bhaskar Darwade',
};

// Other hashes (e.g. the #main skip link) keep the current page.
const pageFor = (hash: string, current: Page): Page => {
  if (hash === PRIVACY_HASH) return 'privacy';
  return HOME_HASHES.has(hash) ? 'home' : current;
};

function LocalSite() {
  const [page, setPage] = useState<Page>(() => pageFor(window.location.hash, 'home'));
  const pageRef = useRef(page);

  useEffect(() => {
    const onHashChange = () => {
      const next = pageFor(window.location.hash, pageRef.current);
      if (next === pageRef.current) return;
      pageRef.current = next;
      window.scrollTo({ top: 0, behavior: 'instant' });
      setPage(next);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // After switching pages (or on first load), bring the requested section into view.
  useEffect(() => {
    document.title = TITLES[page];
    const hash = window.location.hash;
    if (page === 'home' && hash.length > 1) document.getElementById(hash.slice(1))?.scrollIntoView();
  }, [page]);

  return page === 'privacy' ? <PrivacyPolicyPage /> : <App />;
}

const container = document.getElementById('root');
if (!container) throw new Error('Missing #root element');

createRoot(container).render(
  <StrictMode>
    <LocalSite />
  </StrictMode>,
);
