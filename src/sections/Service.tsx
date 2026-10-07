import { Section } from '../components/Section';
import { Eyebrow, ExternalLink } from '../components/ui';
import { service } from '../content/siteContent';

export function Service() {
  const { award } = service;
  return (
    <Section id="service" titleId="service-title">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-x-16">
        <div className="lg:col-span-6">
          <Eyebrow>{service.eyebrow}</Eyebrow>
          <h2 id="service-title" className="h2 mt-5 max-w-[17ch]">
            {service.title}
          </h2>
          <p className="mt-6 max-w-[34rem] text-[1.0625rem] leading-[1.7] text-ink/90">{service.body}</p>
        </div>

        <article
          aria-labelledby="award-title"
          className="relative overflow-hidden rounded-md border border-line bg-surface p-7 md:p-9 lg:col-span-6"
        >
          <span aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 bg-gold" />
          <div className="grid gap-4 sm:grid-cols-[auto_minmax(0,1fr)] sm:gap-8">
            <p aria-hidden="true" className="font-serif text-[2.25rem] font-medium leading-none text-ink sm:text-[2.75rem]">
              {award.year}
            </p>
            <div>
              <h3 id="award-title" className="font-serif text-[1.5rem] font-semibold leading-tight text-ink md:text-[1.625rem]">
                {award.title}
              </h3>
              <p className="mt-3 text-[1rem] leading-[1.7] text-muted">{award.text}</p>
              <ExternalLink href={award.href} label={award.action} context={award.title} className="mt-3" />
            </div>
          </div>
        </article>
      </div>
    </Section>
  );
}
