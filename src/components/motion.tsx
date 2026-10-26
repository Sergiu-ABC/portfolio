import { useInView, useReducedMotion, useScroll } from 'motion/react';
import { useEffect, useRef, useState, type CSSProperties, type ReactNode, type RefObject } from 'react';

// Reveals once, when the block is a little way into the viewport.
const VIEWPORT = { once: true, margin: '0px 0px -12% 0px' } as const;

type StaggerProps = {
  children: ReactNode;
  className?: string;
  as?: 'ul' | 'ol';
  'aria-label'?: string;
};

// A list whose items come in one after another (CSS, in sections.css). Content
// is visible by default: only a list that starts below the fold is armed (hidden)
// after the page loads, then revealed when it scrolls in. So the HTML never
// ships anything hidden, and nothing waits on JavaScript to be readable.
export function Stagger({ children, className, as: Tag = 'ul', ...rest }: StaggerProps) {
  const ref = useRef<HTMLUListElement & HTMLOListElement>(null);
  const inView = useInView(ref, VIEWPORT);
  const reduceMotion = useReducedMotion();
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduceMotion) return;
    if (el.getBoundingClientRect().top > window.innerHeight) setArmed(true);
  }, [reduceMotion]);

  return (
    <Tag ref={ref} className={className} data-reveal={armed ? (inView ? 'in' : 'armed') : undefined} {...rest}>
      {children}
    </Tag>
  );
}

// An item's place in its Stagger, which sets its delay.
export const staggerIndex = (i: number) => ({ '--i': i }) as CSSProperties;

// The spine draws in on load (CSS, so it plays from the prerendered HTML), then
// fills with the scroll. The fill's head sits on a reading line 60% down the
// viewport at the top of the page and moves to the bottom edge as the page
// ends, so the log is full when you reach it. Only the transform changes.
export function Spine({ target }: { target: RefObject<HTMLElement | null> }) {
  const fill = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  useEffect(() => {
    const update = () => {
      const log = target.current;
      if (!log || !fill.current) return;
      const vh = window.innerHeight;
      const maxScroll = document.documentElement.scrollHeight - vh;
      const pageProgress = maxScroll > 0 ? Math.min(1, window.scrollY / maxScroll) : 1;
      const head = vh * (0.6 + 0.4 * pageProgress);
      const box = log.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (head - box.top) / box.height));
      fill.current.style.transform = `scaleY(${p})`;
    };
    update();
    const stop = scrollY.on('change', update);
    window.addEventListener('resize', update);
    return () => {
      stop();
      window.removeEventListener('resize', update);
    };
  }, [scrollY, target]);

  return (
    <div className="spine" aria-hidden="true">
      <div className="spine-draw">
        <div ref={fill} className="spine-fill" style={{ transform: 'scaleY(0)' }} />
      </div>
    </div>
  );
}

// A node on the spine. It lights up once the reading line (60% down the
// viewport) passes it: each section's arrival is this, not a fade.
export function SpineNode({ kind = 'filled', lit = false }: { kind?: 'filled' | 'hollow'; lit?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const passed = useInView(ref, { once: true, margin: '0px 0px -40% 0px' });
  return (
    <span
      ref={ref}
      className={`spine-node spine-node-${kind}${lit || passed ? ' is-lit' : ''}`}
      aria-hidden="true"
    />
  );
}

export function useLogRef() {
  return useRef<HTMLElement>(null);
}
