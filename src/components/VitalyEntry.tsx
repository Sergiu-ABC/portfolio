import { Fragment } from 'react';
import { vitaly } from '../content';
import { ArrowRight } from './Icons';
import { ButtonLink, EngineeringNotes, EntryHeader, FactList, Tags } from './ui';

// Lets a long class name wrap between its words (FaceitApiClient -> Faceit|Api|Client).
function Breakable({ name }: { name: string }) {
  const parts = name.split(/(?=[A-Z][a-z])/);
  return (
    <>
      {parts.map((part, i) => (
        <Fragment key={part + i}>
          {i > 0 && <wbr />}
          {part}
        </Fragment>
      ))}
    </>
  );
}

function Node({ name, detail, external = false, area }: { name: string; detail: string; external?: boolean; area: string }) {
  return (
    <div className={`flow-node ${external ? 'flow-node-external' : ''}`} style={{ gridArea: area }}>
      <code className="mono">
        <Breakable name={name} />
      </code>
      <span>{detail}</span>
    </div>
  );
}

function Arrow({ area }: { area: string }) {
  return (
    <span className="flow-arrow" style={{ gridArea: area }} aria-hidden="true">
      <ArrowRight />
    </span>
  );
}

export function VitalyEntry() {
  const { flow } = vitaly;
  const [discord, browser] = flow.inputs;

  return (
    <section className="log-section" aria-labelledby={vitaly.id}>
      <div className="container-log">
        <div className="entry">
          <EntryHeader id={vitaly.id} title={vitaly.title} date={vitaly.date} status={vitaly.status} />

          <>
            <p className="entry-tagline">{vitaly.tagline}</p>
            <div className="entry-grid">
              <div className="entry-copy">
                <p>{vitaly.summary}</p>
                {vitaly.highlights.length > 0 && (
                  <ul className="feature-list">
                    {vitaly.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                )}
                {vitaly.commands.length > 0 && (
                  <div className="commands">
                    <p className="commands-label">Discord commands</p>
                    <ul className="commands-list">
                      {vitaly.commands.map((c) => (
                        <li key={c}>
                          <code className="mono">{c}</code>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="entry-actions">
                  {vitaly.links.map((link) => (
                    <ButtonLink key={link.href} href={link.href} external>
                      {link.label}
                    </ButtonLink>
                  ))}
                </div>
              </div>
              <div className="entry-side">
                <FactList facts={vitaly.facts} />
                <Tags tags={vitaly.tags} label="Built with" />
              </div>
            </div>
          </>

          <EngineeringNotes notes={vitaly.engineering} />

          <div className="lookup-example" aria-labelledby="lookup-title">
            <div>
              <h3 id="lookup-title">From lookup to scouting report</h3>
              <p>The Discord commands and web dashboard expose the same player data.</p>
            </div>
            <dl className="lookup-rows">
              <div><dt><code>!stats &lt;nickname&gt;</code></dt><dd>K/D, average damage, headshot percentage and win rate</dd></div>
              <div><dt><code>!maps &lt;nickname&gt;</code></dt><dd>Map statistics and auto-veto recommendations</dd></div>
              <div><dt><code>!compare &lt;a&gt; &lt;b&gt;</code></dt><dd>Head-to-head player comparison</dd></div>
            </dl>
            <p className="lookup-note">Documented command examples, not a live player report.</p>
          </div>

          <figure className="flow">
            <div className="flow-grid">
              <span className="flow-src mono" style={{ gridArea: 'src1' }}>
                {discord.name}
              </span>
              <Arrow area="a1" />
              <Node name={discord.to} detail={discord.detail} area="fe1" />
              <span className="flow-src mono" style={{ gridArea: 'src2' }}>
                {browser.name}
              </span>
              <Arrow area="a2" />
              <Node name={browser.to} detail={browser.detail} area="fe2" />
              <span className="flow-merge" style={{ gridArea: 'm' }} aria-hidden="true">
                <ArrowRight className="flow-merge-icon" />
              </span>
              <Node name={flow.core.name} detail={flow.core.detail} area="fc" />
              <Arrow area="a3" />
              <Node name={flow.external.name} detail={flow.external.detail} area="api" external />
              <Node name={flow.store.name} detail={flow.store.detail} area="pr" />
            </div>
            <figcaption className="flow-caption">
              Two front ends in one process. Both share one FACEIT client, one response cache and one SQLite leaderboard.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
