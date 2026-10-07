import { AnimatePresence, m, useReducedMotion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useRef, useState, type FocusEvent } from 'react';
import { brandLink, navigation, person } from '../content/siteContent';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 8);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const desktop = window.matchMedia('(min-width: 64rem)');
    const onBreakpoint = () => {
      if (desktop.matches) setOpen(false);
    };
    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);
    desktop.addEventListener('change', onBreakpoint);
    return () => {
      root.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
      desktop.removeEventListener('change', onBreakpoint);
    };
  }, [open]);

  // Close the mobile menu when keyboard focus moves out of the header.
  const closeIfFocusLeaves = (event: FocusEvent<HTMLElement>) => {
    const next = event.relatedTarget;
    if (open && next instanceof Node && !headerRef.current?.contains(next)) setOpen(false);
  };

  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <header
      ref={headerRef}
      onBlur={closeIfFocusLeaves}
      className={`sticky top-0 z-40 border-b bg-canvas transition-colors duration-300 ${
        scrolled || open ? 'border-line' : 'border-transparent'
      }`}
    >
      <div className="shell flex h-16 items-center justify-between gap-6 lg:h-[72px]">
        <a href={brandLink.href} className="flex flex-col py-1 leading-none">
          <span className="font-serif text-[1.3125rem] font-semibold tracking-[-0.005em] text-ink">
            {person.shortName}
          </span>
          <span className="mt-1.5 text-[0.6875rem] font-medium tracking-[0.04em] text-muted">{person.role}</span>
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="nav-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
          className="-mr-2 inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded px-2 text-[0.875rem] font-semibold text-ink lg:hidden"
        >
          {open ? (
            <X aria-hidden="true" className="size-5" strokeWidth={1.75} />
          ) : (
            <Menu aria-hidden="true" className="size-5" strokeWidth={1.75} />
          )}
          <span>{open ? 'Close' : 'Menu'}</span>
        </button>
      </div>

      <div id="mobile-menu" className="lg:hidden">
        <AnimatePresence>
          {open ? (
            <>
              <m.div
                key="scrim"
                aria-hidden="true"
                className="fixed inset-x-0 bottom-0 top-16 -z-10 bg-ink/25"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.2 }}
                onClick={() => setOpen(false)}
              />
              <m.nav
                key="panel"
                aria-label="Mobile"
                className="absolute inset-x-0 top-full border-b border-line bg-canvas shadow-[0_18px_30px_-18px_rgba(16,44,70,0.35)]"
                initial={reduceMotion ? false : { opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? { opacity: 0, transition: { duration: 0 } } : { opacity: 0, y: -8 }}
                transition={{ duration: 0.22, ease }}
              >
                <ul className="shell py-2">
                  {navigation.map((item) => (
                    <li key={item.href} className="border-b border-line last:border-b-0">
                      <a
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="flex min-h-14 items-center font-serif text-[1.625rem] font-medium text-ink"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </m.nav>
            </>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}
