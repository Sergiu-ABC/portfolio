import type { CSSProperties, ReactNode } from 'react';
import type { Fact } from '../content';
import { ArrowRight, ArrowUpRight } from './Icons';
import { SpineNode } from './motion';

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'band-primary' | 'band-secondary';
  external?: boolean;
};

export function ButtonLink({ href, children, variant = 'primary', external = false }: ButtonProps) {
  const Arrow = external ? ArrowUpRight : ArrowRight;
  return (
    <a
      href={href}
      className={`btn btn-${variant}`}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <span>{children}</span>
      <Arrow className={external ? 'btn-arrow btn-arrow-out' : 'btn-arrow'} />
      {external && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  );
}

export function TextLink({ href, children, external = true }: { href: string; children: ReactNode; external?: boolean }) {
  return (
    <a
      href={href}
      className="text-link"
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
      {external && <ArrowUpRight className="text-link-arrow" />}
      {external && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  );
}

export function FactList({ facts, className = '' }: { facts: Fact[]; className?: string }) {
  if (facts.length === 0) return null;
  return (
    <dl className={`fact-list ${className}`}>
      {facts.map((f) => (
        <div key={f.label} className="fact-row">
          <dt>
            {f.label}
            {f.note && <span className="fact-note">{f.note}</span>}
          </dt>
          <dd className={/\d/.test(f.value) ? 'mono' : undefined}>
            {f.href ? (
              <a href={f.href} className="fact-link">
                {f.value}
              </a>
            ) : (
              f.value
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function Tags({ tags, label }: { tags: string[]; label: string }) {
  if (tags.length === 0) return null;
  return (
    <ul className="tags" aria-label={label}>
      {tags.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

type EntryHeaderProps = {
  id: string;
  title: string;
  date?: string;
  status?: string;
  version?: string;
  meta?: string;
  node?: 'filled' | 'hollow';
  size?: 'xl' | 'lg' | 'md';
  // For a header that can sit at the bottom of the first viewport: it plays a
  // CSS entrance with the hero instead of waiting for a scroll.
  onLoad?: boolean;
};

// A ledger entry's first lines: the title with its node on the spine, then the
// date and status.
export function EntryHeader({ id, title, date, status, version, meta, node = 'filled', size = 'lg', onLoad = false }: EntryHeaderProps) {
  const metaLine = (
    <>
      {version && <span>{version}</span>}
      {date && <span>{date}</span>}
      {status && <span className="status status-live">{status}</span>}
      {meta && <span>{meta}</span>}
    </>
  );

  if (onLoad) {
    return (
      <div className="entry-head">
        <h2 id={id} className={`display entry-title entry-title-${size} rise`} style={{ '--d': '240ms' } as CSSProperties}>
          <SpineNode kind={node} lit />
          {title}
        </h2>
        <p className="entry-meta mono rise" style={{ '--d': '300ms' } as CSSProperties}>
          {metaLine}
        </p>
      </div>
    );
  }

  // No entrance of its own: the section arrives when its node lights up.
  return (
    <div className="entry-head">
      <h2 id={id} className={`display entry-title entry-title-${size}`}>
        <SpineNode kind={node} />
        {title}
      </h2>
      <p className={meta ? 'entry-meta' : 'entry-meta mono'}>{metaLine}</p>
    </div>
  );
}
