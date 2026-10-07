// Build-time only: used by scripts/prerender.mjs to write static HTML for both pages.
import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';
import PrivacyPolicyPage from './PrivacyPolicyPage';

export type PageName = 'home' | 'privacy';

export function render(page: PageName): string {
  const Page = page === 'home' ? App : PrivacyPolicyPage;
  return renderToString(
    <StrictMode>
      <Page />
    </StrictMode>,
  );
}
