import { Section } from '../components/Section';
import { Eyebrow, ExternalLink, WithMarathi } from '../components/ui';
import { education } from '../content/siteContent';

export function Education() {
  return (
    <Section id="education" titleId="education-title" divider={false}>
      <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-x-16">
        <div className="lg:col-span-5">
          <Eyebrow>{education.eyebrow}</Eyebrow>
          <h2 id="education-title" className="h2 mt-5">
            {education.title}
          </h2>
          <p className="mt-6 text-[1.0625rem] leading-[1.7] text-ink/90">
            <WithMarathi text={education.body} />
          </p>
        </div>

        <ul className="grid gap-4 lg:col-span-7">
          {education.episodes.map((episode) => (
            <li
              key={episode.href}
              className="episode-card relative rounded-md border border-line bg-surface p-6 transition-colors duration-200 hover:border-ink/35 md:p-7"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
                <div className="min-w-0">
                  <h3 className="font-serif text-[1.5rem] font-medium leading-tight text-ink">
                    <WithMarathi text={episode.title} />
                  </h3>
                  <p className="mt-2 max-w-[40ch] text-[0.9375rem] leading-[1.6] text-muted">{episode.description}</p>
                </div>
                <ExternalLink
                  href={episode.href}
                  label={episode.action}
                  context={<WithMarathi text={episode.title} />}
                  stretched
                  className="shrink-0"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
