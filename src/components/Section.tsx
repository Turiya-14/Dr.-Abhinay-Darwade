import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

type SectionProps = {
  id: string;
  titleId: string;
  children: ReactNode;
  /** Thin rule above the section (off for the section right after the navy band). */
  divider?: boolean;
};

export function Section({ id, titleId, children, divider = true }: SectionProps) {
  return (
    <section id={id} aria-labelledby={titleId}>
      <div className="shell">
        <div className={divider ? 'section-pad border-t border-line' : 'section-pad'}>
          <Reveal>{children}</Reveal>
        </div>
      </div>
    </section>
  );
}
