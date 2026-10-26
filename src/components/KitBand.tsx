import { kit } from '../content';
import { Stagger, staggerIndex } from './motion';
import { ButtonLink, EntryHeader } from './ui';

// On wide screens: the pitch and the buttons on the left, pricing on the right.
// On narrow screens the order is pitch, pricing, buttons, then the details, so
// the offer and the action come before the long read (see .kit-grid).
export function KitBand() {
  return (
    <section className="band kit" aria-labelledby={kit.id}>
      <div className="band-spine" aria-hidden="true" />
      <div className="container-log">
        <div className="entry">
          <EntryHeader id={kit.id} title={kit.title} version={kit.version} date={kit.date} status={kit.status} size="xl" onLoad />

          <p className="kit-subtitle">{kit.subtitle}</p>
          <div className="kit-grid">
            <p className="kit-for">{kit.forWho}</p>

            <div className="kit-pricing">
              <h3 className="kit-h3">Pricing</h3>
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
                  <h3 className="kit-h3">What’s in the full kit</h3>
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
            <h3 className="kit-h3">{kit.loopTitle}</h3>
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
