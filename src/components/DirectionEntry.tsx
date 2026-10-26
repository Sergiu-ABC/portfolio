import { direction } from '../content';
import { Stagger, staggerIndex } from './motion';
import { ButtonLink, EntryHeader, FactList, Tags } from './ui';

export function DirectionEntry() {
  return (
    <section className="log-section" aria-labelledby={direction.id}>
      <div className="container-log">
        <div className="entry">
          <EntryHeader id={direction.id} title={direction.title} date={direction.date} status={direction.status} />

          <p className="entry-tagline">{direction.tagline}</p>
          <div className="entry-grid">
            <div className="entry-copy">
              <p>{direction.summary}</p>
              {direction.features.length > 0 && (
                <ul className="feature-list">
                  {direction.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              )}
              <div className="entry-actions">
                {direction.links.map((link, i) => (
                  <ButtonLink key={link.href} href={link.href} variant={i === 0 ? 'primary' : 'secondary'} external>
                    {link.label}
                  </ButtonLink>
                ))}
              </div>
            </div>
            <div className="entry-side">
              <FactList facts={direction.facts} />
              <Tags tags={direction.tags} label="Built with" />
            </div>
          </div>

          {direction.screens.length > 0 && (
            <Stagger className="screens" aria-label="Direction screenshots">
              {direction.screens.map((s, i) => (
                <li key={s.src} className="screen" style={staggerIndex(i)}>
                  <img
                    src={`/images/direction/${s.src}-360.webp`}
                    srcSet={`/images/direction/${s.src}-360.webp 360w, /images/direction/${s.src}-720.webp 720w`}
                    sizes="(min-width: 1024px) 180px, 46vw"
                    width={360}
                    height={640}
                    alt={s.alt}
                    loading="lazy"
                    decoding="async"
                  />
                </li>
              ))}
            </Stagger>
          )}
        </div>
      </div>
    </section>
  );
}
