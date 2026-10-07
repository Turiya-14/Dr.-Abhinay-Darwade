import './styles.css';
import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import PrivacyPolicyPage from './PrivacyPolicyPage';

const container = document.getElementById('root');
if (!container) throw new Error('Missing #root element');

const page = (
  <StrictMode>
    <PrivacyPolicyPage />
  </StrictMode>
);

if (container.firstElementChild) hydrateRoot(container, page);
else createRoot(container).render(page);
