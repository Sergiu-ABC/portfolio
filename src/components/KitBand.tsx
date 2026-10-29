import { kit } from '../content';
import { Stagger, staggerIndex } from './motion';
import { ButtonLink, EntryHeader } from './ui';

// On wide screens: the pitch and the buttons on the left, pricing on the right.
// On narrow screens the order is pitch, pricing, buttons, then the details, so
// the offer and the action come before the long read (see .kit-grid).
export function KitBand({ fullPage = false }: { fullPage?: boolean }) {
  if (!fullPage) {
    return (
      <section className="band kit kit-summary" aria-labelledby={kit.id}>
        <div className="band-spine" aria-hidden="true" />
        <div className="container-log"><div className="entry">
          <EntryHeader id={kit.id} title={kit.title} version={kit.version} date={kit.date} status={kit.status} size="md" />
          <div className="kit-summary-grid">
            <div>
              <p className="kit-subtitle">{kit.summary}</p>
              <div className="kit-actions">
                <ButtonLink href="/solo-ship-kit/" variant="band-primary">Explore the toolkit</ButtonLink>
                <ButtonLink href={kit.primary.href} variant="band-secondary" external>Free Prompt Card</ButtonLink>
              </div>
            </div>
            <div>
              <h3 className="kit-h3">Engineering behind the kit</h3>
              <ul className="kit-inside">{kit.engineering.map((item) => <li key={item}>{item}</li>)}</ul>
              <p className="kit-actions-note">Independent project · Dart / Flutter</p>
            </div>
          </div>
        </div></div>
      </section>
    );
  }
  return (
    <section className="band kit" aria-labelledby={kit.id}>
      <div className="band-spine" aria-hidden="true" />
      <div className="container-log">
        <div className="entry">
          <div className="entry-head">
            <h1 id={kit.id} className="display entry-title entry-title-xl">{kit.title}</h1>
            <p className="entry-meta mono">{kit.version} · {kit.date} · {kit.status}</p>
          </div>

          <p className="kit-subtitle">{kit.subtitle}</p>
          <div className="kit-grid">
            <p className="kit-for">{kit.forWho}</p>

            <div className="kit-pricing">
              <h2 className="kit-h3">Pricing</h2>
              <dl className="tier-list">
                {kit.tiers.map((tier) => (
                  <div key={tier.name} className="tier-row">
                    <dt className="tier-name">
                      {tier.name}
                      <span className="tier-status mono">{tier.status}</span>
                    </dt>
                    <dd className="tier-price mono">{tier.price}</dd>
                    {'founding' in tier && tier.founding && <dd className="tier-founding mono">{tier.founding}</dd>}
                    <dd className="tier-note">{tier.note}</dd>
                  </div>
                ))}
              </dl>
              <p className="kit-launch">{kit.launchNote}</p>
            </div>

            <div className="kit-cta">
              <div className="kit-actions">
                <ButtonLink href={kit.primary.href} variant="band-primary" external>
                  {kit.primary.label}
                </ButtonLink>
                <ButtonLink href={kit.secondary.href} variant="band-secondary" external>
                  {kit.secondary.label}
                </ButtonLink>
              </div>
              <p className="kit-actions-note">{kit.actionsNote}</p>
            </div>

            <div className="kit-details">
              <p>{kit.body}</p>
              {kit.inside.length > 0 && (
                <>
                  <h2 className="kit-h3">What’s in the full kit</h2>
                  <ul className="kit-inside">
                    {kit.inside.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>

          <div className="kit-loop">
            <h2 className="kit-h3">{kit.loopTitle}</h2>
            <p className="kit-loop-intro">{kit.loopIntro}</p>
            <Stagger as="ol" className="loop-list">
              {kit.loop.map((step, i) => (
                <li key={step} style={staggerIndex(i)}>
                  <span className="mono loop-n">{i + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}
