import { about } from '../content';
import { SpineNode } from './motion';

export function About() {
  return (
    <section className="log-section" aria-labelledby="about">
      <div className="container-log">
        <div className="entry about-grid">
          <h2 id="about" className="display entry-title entry-title-md">
            <SpineNode kind="hollow" />
            {about.title}
          </h2>
          <div className="about-body">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            {about.stack.length > 0 && (
              <>
                <h3 className="about-stack-title">{about.stackTitle}</h3>
                <ul className="stack-list">
                  {about.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
