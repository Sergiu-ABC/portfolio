import type { CSSProperties } from 'react';
import { hero, logIndex, site } from '../content';
import { ArrowRight } from './Icons';
import { SpineNode } from './motion';
import { ButtonLink } from './ui';

// The hero's entrance runs in CSS (.rise), so it plays from the prerendered
// HTML without waiting for JavaScript. --d is each piece's delay.
const delay = (ms: number) => ({ '--d': `${ms}ms` }) as CSSProperties;

export function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="container-log">
        <div className="entry">
          <h1 id="hero-title" className="display hero-title">
            <SpineNode lit />
            {hero.headline.map((line, i) => (
              <span key={line} className="hero-line rise" style={delay(i * 70)}>
                {line}
              </span>
            ))}
          </h1>

          <div className="hero-grid">
            <div className="hero-copy rise" style={delay(180)}>
              <p className="hero-name display">{site.name}</p>
              <p className="hero-intro">{hero.intro}</p>
              {site.availability && (
                <p className="hero-availability mono">
                  <span className="status status-live">{site.availability}</span>
                </p>
              )}
              <div className="hero-actions">
                <ButtonLink href={hero.primary.href}>{hero.primary.label}</ButtonLink>
                <ButtonLink href={hero.secondary.href} variant="secondary">
                  {hero.secondary.label}
                </ButtonLink>
              </div>
            </div>

            {logIndex.length > 0 && (
            <nav className="log-index rise" style={delay(240)} aria-labelledby="log-index-title">
              <h2 id="log-index-title" className="log-index-title">
                {hero.indexTitle}
              </h2>
              <ol>
                {logIndex.map((row) => (
                  <li key={`${row.date} ${row.name}`}>
                    <a href={row.href} className="log-index-row">
                      <span className="mono log-index-date">{row.date}</span>
                      <span className="log-index-name">{row.name}</span>
                      <span className="mono log-index-status">
                        {row.status} · <span className="log-index-proof">{row.proof}</span>
                      </span>
                      <ArrowRight className="log-index-arrow" />
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
