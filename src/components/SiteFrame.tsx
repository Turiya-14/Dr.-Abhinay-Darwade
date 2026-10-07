import { LazyMotion, domAnimation } from 'framer-motion';
import type { ReactNode } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

/** Shared page chrome for the homepage and the Privacy Policy page. */
export function SiteFrame({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </LazyMotion>
  );
}
