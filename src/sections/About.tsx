import { Section } from '../components/Section';
import { Eyebrow, WithMarathi } from '../components/ui';
import { about, images } from '../content/siteContent';

export function About() {
  return (
    <Section id="about" titleId="about-title">
      <div className="grid gap-10 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-x-16 lg:gap-y-8">
        <div className="lg:col-span-6 lg:col-start-7 lg:row-start-1">
          <Eyebrow>{about.eyebrow}</Eyebrow>
          <h2 id="about-title" className="h2 mt-5 max-w-[18ch]">
            {about.title}
          </h2>
        </div>

        <div className="lg:col-span-5 lg:col-start-1 lg:row-span-2 lg:row-start-1">
          <img
            src={images.office.src}
            srcSet={images.office.srcSet}
            sizes="(min-width: 1224px) 440px, (min-width: 1024px) 37vw, (min-width: 560px) 520px, 100vw"
            width={images.office.width}
            height={images.office.height}
            alt={images.office.alt}
            loading="lazy"
            decoding="async"
            className="photo h-auto w-full max-w-[520px] lg:sticky lg:top-28 lg:max-w-none"
          />
        </div>

        <div className="lg:col-span-6 lg:col-start-7 lg:row-start-2">
          <div className="space-y-5 text-[1.0625rem] leading-[1.7] text-ink/90">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>
                <WithMarathi text={paragraph} />
              </p>
            ))}
          </div>

          <div className="mt-11">
            <h3 className="label border-b border-ink/70 pb-3">{about.qualificationsLabel}</h3>
            <ul className="grid sm:grid-cols-2 sm:gap-x-8">
              {about.qualifications.map((qualification) => (
                <li
                  key={qualification}
                  className="border-b border-line py-3.5 font-serif text-[1.3125rem] font-medium leading-snug text-ink"
                >
                  {qualification}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[0.8125rem] text-muted">{about.registration}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
