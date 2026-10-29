import { useState, type CSSProperties } from 'react';
import { washer } from '../content';
import { ButtonLink, EntryHeader, FactList, Tags } from './ui';

export function WasherEntry() {
  const [selected, setSelected] = useState(0);
  const [step, setStep] = useState(0);

  const program = washer.programs[selected];
  const runs = (optional?: 'prewash' | 'extraRinse') => !optional || program[optional];
  const activeCount = washer.stages.filter((s) => runs(s.optional)).length;
  const activeStages = washer.stages.filter((s) => runs(s.optional));
  const finished = step >= activeCount;
  const summary = `Program ${program.id}: ${program.temp} °C, ${program.rpm} rpm${program.prewash ? ', prewash' : ''}${
    program.extraRinse ? ', extra rinse' : ''
  }.`;

  function choose(i: number) {
    setSelected(i);
    setStep(0);
  }

  // Each stage's state, and how far along the rail the machine has got.
  let position = -1;
  let reached = 0;
  const stages = washer.stages.map((stage, index) => {
    const on = runs(stage.optional);
    if (on) position += 1;
    const phase = !on ? 'is-skipped' : position < step ? 'is-done' : position === step ? 'is-current' : 'is-pending';
    if (phase === 'is-done' || phase === 'is-current') reached = index;
    return { ...stage, on, phase };
  });
  const railProgress = { '--p': reached / (washer.stages.length - 1) } as CSSProperties;

  return (
    <section className="log-section" aria-labelledby={washer.id}>
      <div className="container-log">
        <div className="entry">
          <EntryHeader id={washer.id} title={washer.title} date={washer.date} status={washer.status} />

          <p className="entry-tagline">{washer.tagline}</p>
          <div className="entry-grid">
            <div className="entry-copy">
              <p>{washer.summary}</p>
              <div className="entry-actions">
                {washer.links.map((link) => (
                  <ButtonLink key={link.href} href={link.href} external>
                    {link.label}
                  </ButtonLink>
                ))}
              </div>
            </div>
            <div className="entry-side">
              <FactList facts={washer.facts} />
              <Tags tags={washer.tags} label="Built with" />
            </div>
          </div>

          <div className="fsm" role="group" aria-labelledby="fsm-title">
            <div className="fsm-head">
              <h3 id="fsm-title" className="fsm-title">
                {washer.demoTitle}
              </h3>
              <p className="fsm-note">{washer.demoNote}</p>
            </div>

            <div className="fsm-programs" role="group" aria-label="Programs">
              {washer.programs.map((p, i) => (
                <button
                  key={p.id}
                  type="button"
                  className="fsm-program"
                  aria-pressed={i === selected}
                  onClick={() => choose(i)}
                >
                  <span className="fsm-program-id mono">{p.id}</span>
                  <span className="fsm-program-label">{p.label}</span>
                </button>
              ))}
            </div>

            {/* Each value is keyed on itself, so a changed value settles in (.value-in). */}
            <dl className="fsm-readout">
              <div>
                <dt>Temperature</dt>
                <dd key={program.temp} className="value-in">
                  {program.temp}&#8239;°C
                </dd>
              </div>
              <div>
                <dt>Spin</dt>
                <dd key={program.rpm} className="value-in">
                  {program.rpm} rpm
                </dd>
              </div>
              <div>
                <dt>Prewash</dt>
                <dd key={String(program.prewash)} className="value-in">
                  {program.prewash ? 'Yes' : 'No'}
                </dd>
              </div>
              <div>
                <dt>Extra rinse</dt>
                <dd key={String(program.extraRinse)} className="value-in">
                  {program.extraRinse ? 'Yes' : 'No'}
                </dd>
              </div>
            </dl>
            <div className="fsm-controls">
              <p className="fsm-progress" role="status">
                <span className="mono">{finished ? 'Complete' : `Stage ${step + 1} / ${activeCount}`}</span>
                <strong>{finished ? 'Program finished' : activeStages[step].label}</strong>
              </p>
              <div className="fsm-control-buttons">
                <button type="button" className="btn btn-secondary" disabled={step === 0} onClick={() => setStep(0)}>Reset</button>
                <button type="button" className="btn btn-primary" disabled={finished} onClick={() => setStep((s) => Math.min(s + 1, activeCount))}>
                  {finished ? 'Completed' : step === activeCount - 1 ? 'Finish program' : 'Next stage →'}
                </button>
              </div>
            </div>
            <p className="sr-only" aria-live="polite">{summary}</p>

            {/* The stages as nodes on a rail, like the page's spine: filled when
                done, ringed where the machine is, dashed when the program skips it. */}
            <div className="fsm-run">
              <span className="fsm-rail" aria-hidden="true">
                <span className="fsm-rail-fill" style={railProgress} />
              </span>
              <ol className="fsm-stages" aria-label="Wash stages">
                {stages.map((stage) => (
                  <li key={stage.state} className={`fsm-stage ${stage.phase}`} aria-current={stage.phase === 'is-current' ? 'step' : undefined}>
                    <span className="fsm-node" aria-hidden="true" />
                    <span className="fsm-text">
                      <span className="fsm-label">
                        {stage.label}
                        {!stage.on && <span className="fsm-skip"> · skipped</span>}
                      </span>
                      <code className="mono fsm-state">{stage.state}</code>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
            <p className="fsm-states-note">{washer.statesNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
