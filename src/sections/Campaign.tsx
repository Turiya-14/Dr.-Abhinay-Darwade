import { ArrowRight } from 'lucide-react';
import { Fragment } from 'react';
import { Reveal } from '../components/Reveal';
import { Eyebrow } from '../components/ui';
import { campaign } from '../content/siteContent';

export function Campaign() {
  return (
    <section id="iap-2027" aria-labelledby="iap-title" className="band-navy bg-navy text-canvas">
      <div className="shell">
        <div className="section-pad lg:py-24">
          <Reveal className="grid gap-10 lg:grid-cols-12 lg:gap-x-16">
            <div className="lg:col-span-6">
              <Eyebrow dark>{campaign.eyebrow}</Eyebrow>
              <h2 id="iap-title" className="h2 mt-5 text-canvas">
                {campaign.titleLines.map((line, index) => (
                  <Fragment key={line}>
                    {index > 0 ? ' ' : null}
                    <span className="block">{line}</span>
                  </Fragment>
                ))}
              </h2>
              <p className="mt-8 max-w-[26rem] border-l-2 border-gold pl-4 text-[1rem] font-semibold leading-snug text-canvas">
                {campaign.status}
              </p>
            </div>

            <div className="lg:col-span-5 lg:col-start-8 lg:border-l lg:border-canvas/15 lg:pl-12">
              <p className="text-[1.0625rem] leading-[1.75] text-canvas/85">{campaign.body}</p>
              <p className="mt-4 text-[1.0625rem] leading-[1.75] text-canvas/85">{campaign.supporting}</p>
              <p className="mt-8 font-serif text-[1.625rem] font-medium italic leading-snug text-canvas">
                {campaign.supportLine}
              </p>
              <a href={campaign.action.href} className="btn btn-light mt-8">
                {campaign.action.label}
                <ArrowRight aria-hidden="true" strokeWidth={1.75} />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
