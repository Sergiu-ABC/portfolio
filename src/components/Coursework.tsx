import { coursework } from '../content';
import { Stagger, staggerIndex } from './motion';
import { EntryHeader, Tags, TextLink } from './ui';

export function Coursework() {
  // With nothing to list, the section isn't shown at all.
  if (coursework.items.length === 0) return null;

  return (
    <section className="log-section log-section-tight" aria-labelledby="coursework">
      <div className="container-log">
        <div className="entry">
          <EntryHeader id="coursework" title={coursework.title} meta={coursework.intro} node="hollow" size="md" />

          <Stagger className="course-list">
            {coursework.items.map((item, i) => (
              <li key={item.name} className="course-row" style={staggerIndex(i)}>
                <div className="course-main">
                  <h3 className="course-name">{item.name}</h3>
                  <p className="course-line">{item.line}</p>
                </div>
                <div className="course-side">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="mono course-date">{item.date}</span>
                    <Tags tags={item.tags} label={`${item.name} is built with`} />
                  </div>
                  <TextLink href={item.href}>Source on GitHub</TextLink>
                </div>
              </li>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
