import { ArrowUpRight } from 'lucide-react';
import { Fragment, type ReactNode } from 'react';
import { person, programmeName } from '../content/siteContent';

export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return <p className={dark ? 'eyebrow eyebrow-dark' : 'eyebrow'}>{children}</p>;
}

type ExternalLinkProps = {
  href: string;
  label: string;
  /** Extra context read by screen readers so repeated labels stay distinguishable. */
  context?: ReactNode;
  className?: string;
  /** Makes the whole surrounding card clickable (parent needs `position: relative`). */
  stretched?: boolean;
};

/** Plain outgoing link: new tab, no referrer, announced as such. */
export function ExternalLink({ href, label, context, className = '', stretched = false }: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`action-link${stretched ? ' card-link' : ''} ${className}`}
    >
      <span className="action-link__text">{label}</span>
      <span className="sr-only">
        {context ? <>: {context}</> : null} (opens in a new tab)
      </span>
      <ArrowUpRight aria-hidden="true" strokeWidth={1.75} />
    </a>
  );
}

function splitAround(text: string, token: string, renderToken: () => ReactNode) {
  const parts = text.split(token);
  return parts.map((part, index) => (
    <Fragment key={index}>
      {part}
      {index < parts.length - 1 ? renderToken() : null}
    </Fragment>
  ));
}

/** Marks the Marathi programme name with lang="mr" and the Devanagari typeface. */
export function WithMarathi({ text }: { text: string }) {
  return (
    <>
      {splitAround(text, programmeName, () => (
        <span lang="mr" className="font-deva">
          {programmeName}
        </span>
      ))}
    </>
  );
}

/** Turns the contact email inside running text into a working mailto link. */
export function WithEmailLinks({ text }: { text: string }) {
  return (
    <>
      {splitAround(text, person.email, () => (
        <a href={`mailto:${person.email}`} className="text-link">
          {person.email}
        </a>
      ))}
    </>
  );
}
