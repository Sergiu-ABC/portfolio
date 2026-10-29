import { direction } from '../content';
import { ButtonLink, EngineeringNotes, EntryHeader, FactList, Tags } from './ui';
import { ScreenshotGallery } from './ScreenshotGallery';

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

          <EngineeringNotes notes={direction.engineering} />
          <ScreenshotGallery screens={direction.screens} />
        </div>
      </div>
    </section>
  );
}
