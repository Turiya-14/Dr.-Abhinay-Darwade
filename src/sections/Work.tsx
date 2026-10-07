import { Section } from '../components/Section';
import { Eyebrow } from '../components/ui';
import { images, work } from '../content/siteContent';

export function Work() {
  return (
    <Section id="work" titleId="work-title">
      <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-x-16">
        <div className="lg:col-span-7">
          <Eyebrow>{work.eyebrow}</Eyebrow>
          <h2 id="work-title" className="h2 mt-5">
            {work.title}
          </h2>
        </div>
        <p className="text-[1.0625rem] leading-[1.7] text-muted lg:col-span-4 lg:col-start-9 lg:pb-1">{work.lead}</p>
      </div>

      <ol className="mt-12 grid gap-10 md:gap-8 lg:mt-14 lg:grid-cols-3 lg:gap-12">
        {work.areas.map((area) => (
          <li
            key={area.number}
            className="border-t border-ink/70 pt-5 md:grid md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-x-10 lg:block"
          >
            <div>
              <p aria-hidden="true" className="flex items-center gap-3 font-serif text-[1.375rem] font-medium leading-none text-bronze">
                {area.number}
                <span className="h-px w-8 bg-gold/70" />
              </p>
              <h3 className="mt-6 font-serif text-[1.625rem] font-semibold leading-[1.15] text-ink md:mt-4 lg:mt-6">{area.title}</h3>
            </div>
            <p className="mt-3 text-[1rem] leading-[1.7] text-muted md:mt-0 lg:mt-3">{area.text}</p>
          </li>
        ))}
      </ol>

      <figure className="mt-14 grid gap-4 lg:mt-16 lg:grid-cols-12 lg:items-end lg:gap-x-12">
        <img
          src={images.teaching.src}
          srcSet={images.teaching.srcSet}
          sizes="(min-width: 1224px) 860px, (min-width: 1024px) 72vw, 100vw"
          width={images.teaching.width}
          height={images.teaching.height}
          alt={images.teaching.alt}
          loading="lazy"
          decoding="async"
          className="photo h-auto w-full lg:col-span-9"
        />
        <figcaption className="border-t border-line pt-3 text-[0.875rem] leading-snug text-muted lg:col-span-3">
          {work.caption}
        </figcaption>
      </figure>
    </Section>
  );
}
