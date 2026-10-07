import './styles.css';
import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
if (!container) throw new Error('Missing #root element');

const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// Production HTML is prerendered (see scripts/prerender.mjs), so hydrate it;
// the dev server serves an empty shell, so render from scratch there.
if (container.firstElementChild) hydrateRoot(container, app);
else createRoot(container).render(app);
