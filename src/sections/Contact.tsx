import { ArrowRight, Mail } from 'lucide-react';
import { Section } from '../components/Section';
import { Eyebrow } from '../components/ui';
import { contact } from '../content/siteContent';

export function Contact() {
  const mailto = `mailto:${contact.email}`;
  const [localPart, domain] = contact.email.split('@');

  return (
    <Section id="contact" titleId="contact-title">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-x-16">
        <div className="lg:col-span-6">
          <Eyebrow>{contact.eyebrow}</Eyebrow>
          <h2 id="contact-title" className="h2 mt-5">
            {contact.title}
          </h2>
          <p className="mt-6 max-w-[32rem] text-[1.0625rem] leading-[1.7] text-ink/90">{contact.body}</p>
        </div>

        <div className="rounded-md border border-line bg-surface p-6 sm:p-8 md:p-10 lg:col-span-6">
          <p className="font-serif text-[1.625rem] font-semibold leading-tight text-ink">{contact.name}</p>
          <p className="mt-1.5 text-[0.9375rem] text-muted">{contact.location}</p>

          <div className="mt-7 border-t border-line pt-6">
            <a href={mailto} className="text-link inline-flex items-start gap-3 text-[1.0625rem] sm:text-[1.125rem]">
              <Mail aria-hidden="true" className="mt-[0.3em] size-[1.1rem] shrink-0 text-bronze" strokeWidth={1.75} />
              <span>
                {localPart}
                <wbr />@{domain}
              </span>
            </a>
          </div>

          <a href={mailto} className="btn btn-primary mt-7 w-full sm:w-auto">
            {contact.action}
            <ArrowRight aria-hidden="true" strokeWidth={1.75} />
          </a>

          <p className="mt-6 text-[0.8125rem] leading-relaxed text-muted">{contact.note}</p>
        </div>
      </div>
    </Section>
  );
}
