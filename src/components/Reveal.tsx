import { m, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState, type ReactNode } from 'react';

type Phase = 'shown' | 'waiting' | 'entering';

/**
 * One gentle fade-and-rise per section, the first time it scrolls into view.
 * Content is fully visible in the prerendered HTML; it is only hidden after
 * hydration, and only if it starts below the fold — so nothing depends on the
 * animation to become readable. Reduced-motion users get no animation at all.
 */
export function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [phase, setPhase] = useState<Phase>('shown');

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      setPhase('shown');
      return;
    }
    if (node.getBoundingClientRect().top < window.innerHeight * 0.9) return;

    setPhase('waiting');
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setPhase('entering');
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.06 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [reduceMotion]);

  return (
    <m.div
      ref={ref}
      className={`reveal ${className}`.trim()}
      initial={false}
      animate={phase === 'waiting' ? { opacity: 0, y: 16 } : { opacity: 1, y: 0 }}
      transition={phase === 'entering' ? { duration: 0.45, ease: [0.22, 1, 0.36, 1] } : { duration: 0 }}
    >
      {children}
    </m.div>
  );
}
