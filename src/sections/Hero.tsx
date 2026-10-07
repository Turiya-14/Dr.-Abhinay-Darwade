import { ArrowRight } from 'lucide-react';
import { Fragment } from 'react';
import { hero, images } from '../content/siteContent';

export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative overflow-x-clip">
      <div className="shell grid items-center gap-x-16 gap-y-12 pb-16 pt-8 md:pt-12 lg:grid-cols-[minmax(0,58fr)_minmax(0,42fr)] lg:pb-24 lg:pt-14">
        <div>
          <p className="eyebrow hero-eyebrow">{hero.eyebrow}</p>

          <h1
            id="hero-title"
            className="mt-6 font-serif text-[clamp(2.5rem,1.45rem+4.1vw,4.5rem)] font-medium leading-[1.02] tracking-[-0.018em] text-ink"
          >
            {hero.titleLines.map((line, index) => (
              <Fragment key={line}>
                {index > 0 ? ' ' : null}
                <span className="block">{line}</span>
              </Fragment>
            ))}
          </h1>

          <p className="mt-6 font-serif text-[clamp(1.375rem,1.15rem+0.8vw,1.75rem)] font-medium italic leading-[1.3] text-ink/80">
            {hero.roleLines.map((line, index) => (
              <Fragment key={line}>
                {index > 0 ? ' ' : null}
                <span className="block">{line}</span>
              </Fragment>
            ))}
          </p>

          <p className="mt-5 max-w-[36rem] text-[1.0625rem] leading-[1.7] text-muted">{hero.intro}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={hero.primaryAction.href} className="btn btn-primary">
              {hero.primaryAction.label}
              <ArrowRight aria-hidden="true" strokeWidth={1.75} />
            </a>
            <a href={hero.secondaryAction.href} className="btn btn-secondary">
              {hero.secondaryAction.label}
            </a>
          </div>

          <ul className="mt-10 grid gap-5 border-t border-line pt-6 sm:grid-cols-2 sm:gap-8">
            {hero.affiliations.map((affiliation) => (
              <li key={affiliation.title} className="text-[0.9375rem] leading-snug">
                <span className="block font-semibold text-ink">{affiliation.title}</span>
                <span className="mt-1 block text-muted">{affiliation.place}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 flex items-center gap-3 text-[0.875rem] font-semibold text-navy">
            <span aria-hidden="true" className="inline-block size-1.5 shrink-0 rotate-45 bg-gold" />
            {hero.campaign}
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[400px] sm:max-w-[420px] lg:mr-0 lg:max-w-[440px]">
          <div aria-hidden="true" className="absolute -bottom-6 left-[18%] top-10 -right-[100vw] bg-sand lg:-bottom-10" />
          <img
            src={images.hero.src}
            width={images.hero.width}
            height={images.hero.height}
            alt={images.hero.alt}
            fetchPriority="high"
            loading="eager"
            className="photo relative h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
