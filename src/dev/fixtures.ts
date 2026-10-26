// Dev only (loaded from main.tsx behind import.meta.env.DEV; never shipped).
// Stress-test data for the break-ui pass: open the dev server with
// ?data=worst, ?data=empty or ?data=one, or use the toggle at the bottom.
// Each fixture swaps values at the content.ts boundary before the first render.
import * as content from '../content';

export type FixtureName = 'demo' | 'worst' | 'empty' | 'one';

export const FIXTURES: { id: FixtureName; label: string }[] = [
  { id: 'demo', label: 'Demo data' },
  { id: 'worst', label: 'Worst case' },
  { id: 'empty', label: 'Empty' },
  { id: 'one', label: 'One' },
];

const { site, hero, kit, direction, vitaly, washer, coursework, about, contact, logIndex } = content;

function replace<T>(list: T[], items: T[]) {
  list.splice(0, list.length, ...items);
}

// Longer names, labels, statuses and lists than the real content: values an
// edit of content.ts could plausibly produce.
function worst() {
  site.name = 'Aleksandra Wiśniewska-Kowalczyk';
  site.shortName = 'Aleksandra W.-K.';
  site.email = 'bartholomew.fitzgerald@northwind-industries-holdings.example.com';
  site.availability = 'Open to software internships and part-time roles from February 2027, in Cluj-Napoca or remote';
  hero.intro =
    'Computer Science student at the Technical University of Cluj-Napoca. I build Flutter apps for Android, iOS and the web, Java back ends with Javalin and Spring Boot, and the tooling I use to test them properly and see them through to a release in the store.';
  replace(logIndex, [
    ...logIndex,
    { date: 'Mar 2026', name: 'Polynomial Calculator with Regular-Expression Parsing', status: 'Coursework', proof: '1,284 test cases', href: '#coursework' },
    { date: 'Mar 2026', name: 'Queue Management Simulator', status: 'Coursework, Fundamental Programming Techniques', proof: '64 threads', href: '#coursework' },
  ]);
  logIndex[1].status = 'Closed testing on Google Play, open beta next';
  logIndex[1].proof = '1,284 tests incl. 212 golden screenshots';

  kit.version = '';
  kit.status = 'Waitlist open until 30 November';
  replace(kit.tiers, [
    ...kit.tiers.slice(0, 2),
    { ...kit.tiers[2], founding: '$29 for the first 100 people on the waitlist' },
    {
      name: 'Team (5 seats)',
      status: 'At launch, after Pro',
      price: '$1,249',
      note: 'Everything in Pro for five developers, with a shared starter app, a private Discord channel and onboarding calls.',
    },
  ]);
  kit.loop[4] = 'Regenerate the golden screenshot tests and look at every changed image';

  direction.tagline = 'Find what energizes you, one small experiment at a time, without a streak that punishes a missed day.';
  replace(direction.features, [
    ...direction.features,
    'Export and import, so your data moves with you without an account',
    'Daily reminders at a time you choose, off by default',
    'Large-text layouts checked by golden screenshot tests on a 360×640 screen at 2× text',
  ]);
  direction.facts[2] = { label: 'Platforms', value: 'Android (Play closed testing), web, iOS planned' };
  replace(direction.links, [
    ...direction.links,
    { label: 'Download the Android APK', href: 'https://github.com/Sergiu-ABC/direction-showcase/releases/latest' },
  ]);

  replace(vitaly.commands, [...vitaly.commands, '!advanced', '!veto', '!history', '!compare-team', '!help', '!settings']);
  replace(vitaly.tags, [...vitaly.tags, 'Gson', 'Chart.js', 'Maven', 'Docker', 'Railway']);
  vitaly.flow.store = { name: 'LeaderboardSnapshotRepository', detail: 'SQLite, one leaderboard per Discord server' };

  washer.title = 'Washing Machine Controller on a Nexys A7 FPGA';
  washer.programs[3] = { ...washer.programs[3], label: '40 °C, 1000 rpm, prewash and extra rinse' };

  replace(coursework.items, [
    ...coursework.items,
    {
      name: 'Polynomial Calculator with Regular-Expression Parsing and JUnit Tests',
      date: 'Mar 2026',
      line: 'Parses polynomials typed as text, then adds, subtracts, multiplies, divides, differentiates and integrates them, with a Swing interface and a test for every operation.',
      tags: ['Java', 'Swing', 'Regex', 'JUnit 5', 'Maven', 'MVC'],
      href: 'https://github.com/Sergiu-ABC',
    },
    { name: 'Orders Management', date: 'May 2026', line: 'A layered Java app over PostgreSQL.', tags: ['Java'], href: 'https://github.com/Sergiu-ABC' },
  ]);

  replace(about.stack, [...about.stack, 'Spring Boot', 'PostgreSQL 16', 'GitHub Actions CI/CD', 'Docker', 'Linux', 'Git', 'Figma', 'Kotlin']);
  contact.line =
    'Questions about an internship, a freelance Flutter project, the kit or anything on this page? Email is the fastest way to reach me, and I answer within two working days.';
}

// Every optional value missing and every list that could be emptied, emptied.
function empty() {
  site.availability = '';
  site.cv.show = false;
  replace(logIndex, []);
  kit.version = '';
  replace(kit.inside, []);
  replace(direction.features, []);
  replace(direction.screens, []);
  replace(vitaly.commands, []);
  replace(vitaly.tags, []);
  replace(washer.tags, []);
  replace(coursework.items, []);
  replace(about.stack, []);
}

// Every list down to a single item.
function one() {
  replace(logIndex, logIndex.slice(0, 1));
  replace(kit.tiers, kit.tiers.slice(0, 1));
  replace(kit.inside, kit.inside.slice(0, 1));
  replace(direction.features, direction.features.slice(0, 1));
  replace(direction.facts, direction.facts.slice(0, 1));
  replace(direction.screens, direction.screens.slice(0, 1));
  replace(direction.links, direction.links.slice(0, 1));
  replace(vitaly.highlights, vitaly.highlights.slice(0, 1));
  replace(vitaly.commands, vitaly.commands.slice(0, 1));
  replace(vitaly.tags, vitaly.tags.slice(0, 1));
  replace(vitaly.facts, vitaly.facts.slice(0, 1));
  replace(washer.facts, washer.facts.slice(0, 1));
  replace(washer.tags, washer.tags.slice(0, 1));
  replace(coursework.items, coursework.items.slice(0, 1));
  replace(coursework.items[0].tags, coursework.items[0].tags.slice(0, 1));
  replace(about.paragraphs, about.paragraphs.slice(0, 1));
  replace(about.stack, about.stack.slice(0, 1));
}

export function currentFixture(): FixtureName {
  const value = new URLSearchParams(window.location.search).get('data');
  return FIXTURES.some((f) => f.id === value) ? (value as FixtureName) : 'demo';
}

export function applyFixture(name: FixtureName) {
  if (name === 'worst') worst();
  else if (name === 'empty') empty();
  else if (name === 'one') one();
}
