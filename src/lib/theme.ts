import { useCallback, useEffect, useState } from 'react';
import { flushSync } from 'react-dom';

export type Theme = 'dark' | 'light';

const THEME_COLOR: Record<Theme, string> = { dark: '#0f1317', light: '#fbfcfb' };

function currentTheme(): Theme {
  return document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
}

// The inline script in index.html sets the first theme before paint. The
// prerendered HTML assumes dark, so the real value is read after mount, and
// storage is written only when the visitor actually switches.
export function useTheme() {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    setTheme(currentTheme());
  }, []);

  const toggle = useCallback(() => {
    const next: Theme = currentTheme() === 'dark' ? 'light' : 'dark';

    const apply = () => {
      document.documentElement.setAttribute('data-theme', next);
      document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLOR[next]);
      try {
        localStorage.setItem('theme', next);
      } catch {
        // Storage can be blocked; the theme still applies for this visit.
      }
      flushSync(() => setTheme(next));
    };

    // Crossfade the whole page instead of flipping every colour at once
    // (the timing is in index.css). Skipped for reduced motion.
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (document.startViewTransition && !reduce) document.startViewTransition(apply);
    else apply();
  }, []);

  return { theme, toggle };
}
