import { ArrowLeft } from 'lucide-react';
import { SiteFrame } from './components/SiteFrame';
import { WithEmailLinks } from './components/ui';
import { privacyPolicy } from './content/privacyContent';

function BackLink() {
  return (
    <a href={privacyPolicy.backLink.href} className="action-link action-link--back">
      <ArrowLeft aria-hidden="true" strokeWidth={1.75} />
      <span className="action-link__text">{privacyPolicy.backLink.label}</span>
    </a>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <SiteFrame>
      <article aria-labelledby="policy-title" className="shell">
        <div className="mx-auto max-w-[800px] pb-20 pt-8 md:pb-28 md:pt-12">
          <BackLink />

          <h1
            id="policy-title"
            className="mt-8 font-serif text-[clamp(2.5rem,1.9rem+2.4vw,3.75rem)] font-medium leading-[1.04] tracking-[-0.015em] text-ink"
          >
            {privacyPolicy.title}
          </h1>
          <p className="mt-4 text-[0.875rem] font-semibold text-muted">{privacyPolicy.updated}</p>

          <div className="mt-8 space-y-5 border-t border-line pt-8 text-[1.0625rem] leading-[1.75] text-ink/90">
            {privacyPolicy.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>

          {privacyPolicy.sections.map((section) => (
            <section key={section.number} aria-labelledby={`policy-${section.number}`} className="mt-12">
              <h2
                id={`policy-${section.number}`}
                className="font-serif text-[1.75rem] font-semibold leading-tight text-ink md:text-[2rem]"
              >
                <span className="text-bronze">{section.number}.</span> {section.title}
              </h2>
              <div className="mt-4 space-y-4 text-[1.0625rem] leading-[1.75] text-ink/90">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>
                    <WithEmailLinks text={paragraph} />
                  </p>
                ))}
              </div>
            </section>
          ))}

          <div className="mt-16 border-t border-line pt-6">
            <BackLink />
          </div>
        </div>
      </article>
    </SiteFrame>
  );
}
