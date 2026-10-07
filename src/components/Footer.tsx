import { ArrowUp } from 'lucide-react';
import { footer } from '../content/siteContent';

export function Footer() {
  return (
    <footer className="border-t border-line bg-sand/70">
      <div className="shell py-12 md:py-14">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-12">
          <div>
            <p className="font-serif text-[1.5rem] font-semibold leading-tight text-ink">{footer.identity}</p>
            <p className="mt-1.5 text-[0.875rem] text-muted">{footer.supporting}</p>
            <p className="mt-4 text-[0.8125rem] text-muted">{footer.registration}</p>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-8 gap-y-1">
              <li>
                <a href={footer.privacyLink.href} className="action-link">
                  <span className="action-link__text">{footer.privacyLink.label}</span>
                </a>
              </li>
              <li>
                <a href={footer.backToTop.href} className="action-link action-link--up">
                  <span className="action-link__text">{footer.backToTop.label}</span>
                  <ArrowUp aria-hidden="true" strokeWidth={1.75} />
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-line pt-6 text-[0.8125rem] leading-relaxed text-muted md:flex-row md:items-start md:justify-between md:gap-12">
          <p className="max-w-[46rem]">{footer.note}</p>
          <p className="shrink-0">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
