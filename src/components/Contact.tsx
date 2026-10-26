import { useEffect, useRef, useState } from 'react';
import { contact, site } from '../content';
import { ArrowUpRight, Check, Copy } from './Icons';
import { SpineNode } from './motion';
import { TextLink } from './ui';

type CopyState = 'idle' | 'copied' | 'failed';

export function Contact() {
  const [state, setState] = useState<CopyState>('idle');
  const timer = useRef<number | undefined>(undefined);
  const emailRef = useRef<HTMLAnchorElement>(null);
  const [user, domain] = site.email.split('@');

  useEffect(() => () => window.clearTimeout(timer.current), []);

  function settle(next: CopyState) {
    setState(next);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setState('idle'), next === 'failed' ? 4000 : 1800);
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      settle('copied');
    } catch {
      // The clipboard is blocked: select the address so the visitor can copy it.
      const selection = window.getSelection();
      if (emailRef.current && selection) {
        const range = document.createRange();
        range.selectNodeContents(emailRef.current);
        selection.removeAllRanges();
        selection.addRange(range);
      }
      settle('failed');
    }
  }

  const labels: Record<CopyState, string> = {
    idle: contact.copyLabel,
    copied: contact.copiedLabel,
    failed: contact.copyFailedLabel,
  };

  return (
    <section className="log-section contact" aria-labelledby="contact">
      <div className="container-log">
        <div className="entry">
          <h2 id="contact" className="display entry-title entry-title-lg">
            <SpineNode kind="hollow" />
            {contact.title}
          </h2>

          <div>
            <p className="contact-line">{contact.line}</p>

            <div className="contact-email-row">
              <a ref={emailRef} href={`mailto:${site.email}`} className="contact-email display">
                {/* If the address has to wrap, it wraps after the @. */}
                {user}@<wbr />
                {domain}
              </a>
              <button type="button" className="copy-btn" onClick={copyEmail}>
                <span className="copy-icons" aria-hidden="true">
                  <Copy className={`copy-icon ${state === 'copied' ? '' : 'is-on'}`} />
                  <Check className={`copy-icon ${state === 'copied' ? 'is-on' : ''}`} />
                </span>
                {/* All labels share one cell, so the button keeps its width as they swap. */}
                <span className="copy-labels">
                  {(['idle', 'copied', 'failed'] as const).map((s) => (
                    <span key={s} className={s === state ? 'is-on' : undefined} aria-hidden={s !== state}>
                      {labels[s]}
                    </span>
                  ))}
                </span>
              </button>
              <span className="sr-only" aria-live="polite">
                {state === 'copied' ? 'Email address copied' : state === 'failed' ? 'Copy was blocked; the address is selected' : ''}
              </span>
            </div>

            <ul className="contact-links">
              <li>
                <TextLink href={site.linkedin}>LinkedIn</TextLink>
              </li>
              <li>
                <TextLink href={site.github}>GitHub</TextLink>
              </li>
              {site.cv.show && (
                <li>
                  <a href={site.cv.href} className="text-link" target="_blank" rel="noopener noreferrer">
                    CV (PDF)
                    <ArrowUpRight className="text-link-arrow" />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              )}
            </ul>
            {site.availability && (
              <p className="contact-availability mono">
                <span className="status status-live">{site.availability}</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
