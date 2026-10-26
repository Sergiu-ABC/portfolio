import { useEffect, useRef, useState } from 'react';
import { nav, site } from '../content';
import { useTheme } from '../lib/theme';
import { ArrowUpRight, Moon, Sun } from './Icons';

export function SiteHeader() {
  const { theme, toggle } = useTheme();
  const next = theme === 'dark' ? 'light' : 'dark';
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLDivElement>(null);

  // The small-screen menu closes on Escape (focus goes back to its button) and
  // on a tap outside it.
  useEffect(() => {
    if (!menuOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    }
    function onPointer(e: PointerEvent) {
      const target = e.target as Node;
      if (!menu.current?.contains(target) && !menuButton.current?.contains(target)) setMenuOpen(false);
    }
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
    };
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="container-log flex h-full items-center justify-between gap-3">
        {/* A name too long for the bar truncates; the title shows it in full. */}
        <a href="#top" className="wordmark display" title={site.name}>
          <span className="hidden sm:inline">{site.name}</span>
          <span className="sm:hidden">{site.shortName}</span>
        </a>

        <nav aria-label="Sections" className="flex shrink-0 items-center gap-1">
          <ul className="hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="nav-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          {/* On the narrowest phones the CV moves into the menu to make room. */}
          {site.cv.show && (
            <a href={site.cv.href} className="nav-link nav-cv hidden min-[360px]:inline-flex" target="_blank" rel="noopener noreferrer">
              {site.cv.label}
              <ArrowUpRight className="h-[0.95em] w-[0.95em]" />
              <span className="sr-only"> (PDF, opens in a new tab)</span>
            </a>
          )}
          <button
            ref={menuButton}
            type="button"
            className="nav-link menu-button md:hidden"
            aria-expanded={menuOpen}
            aria-controls="section-menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            Menu
            <span className="menu-icon" aria-hidden="true" data-open={menuOpen} />
          </button>
          {/* The icon shows the theme the button switches to. */}
          <button
            type="button"
            className="theme-toggle"
            onClick={toggle}
            aria-label={`Switch to ${next} theme`}
            title={`Switch to ${next} theme`}
          >
            <Sun className={`theme-icon ${next === 'light' ? 'is-on' : ''}`} />
            <Moon className={`theme-icon ${next === 'dark' ? 'is-on' : ''}`} />
          </button>
        </nav>
      </div>

      <div id="section-menu" ref={menu} className="section-menu md:hidden" data-open={menuOpen} hidden={!menuOpen}>
        <ul className="container-log">
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="section-menu-link" onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
          {site.cv.show && (
            <li>
              <a href={site.cv.href} className="section-menu-link" target="_blank" rel="noopener noreferrer">
                {site.cv.label} (PDF)
                <ArrowUpRight className="ml-1 h-[0.8em] w-[0.8em]" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
}
