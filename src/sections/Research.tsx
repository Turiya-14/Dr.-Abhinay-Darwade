import type { ReactNode } from 'react';
import { Section } from '../components/Section';
import { Eyebrow, ExternalLink } from '../components/ui';
import { research } from '../content/siteContent';

function ListGroup({ heading, ordered = false, children }: { heading: string; ordered?: boolean; children: ReactNode }) {
  const List = ordered ? 'ol' : 'ul';
  return (
    <div className="grid lg:grid-cols-12 lg:gap-x-16">
      <h3 className="label border-t border-ink/70 pb-1 pt-5 lg:col-span-3 lg:pb-0">{heading}</h3>
      <List className="lg:col-span-9 lg:border-t lg:border-ink/70">{children}</List>
    </div>
  );
}

const rowClass = 'grid gap-2 border-b border-line py-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-start md:gap-10';
const titleClass = 'font-serif text-[1.375rem] font-medium leading-snug text-ink md:text-[1.5rem]';

export function Research() {
  return (
    <Section id="research" titleId="research-title">
      <div className="max-w-3xl">
        <Eyebrow>{research.eyebrow}</Eyebrow>
        <h2 id="research-title" className="h2 mt-5">
          {research.title}
        </h2>
      </div>

      <div className="mt-12 space-y-14 lg:mt-14">
        <ListGroup heading={research.publicationsHeading} ordered>
          {research.publications.map((publication) => (
            <li key={publication.href} className={rowClass}>
              <div>
                <h4 className={titleClass}>{publication.title}</h4>
                <p className="mt-2 text-[0.875rem] leading-relaxed text-muted">{publication.citation}</p>
              </div>
              <ExternalLink href={publication.href} label={publication.action} context={publication.title} />
            </li>
          ))}
        </ListGroup>

        <ListGroup heading={research.pressHeading}>
          {research.press.map((item) => (
            <li key={item.href} className={rowClass}>
              <div>
                <h4 className={titleClass}>{item.title}</h4>
                <p className="mt-2 text-[1rem] leading-[1.65] text-ink/85">{item.description}</p>
                <p className="mt-2 text-[0.875rem] text-muted">{item.source}</p>
              </div>
              <ExternalLink href={item.href} label={item.action} context={item.title} />
            </li>
          ))}
        </ListGroup>
      </div>
    </Section>
  );
}
