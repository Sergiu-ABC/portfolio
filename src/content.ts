// All the site's text, links and facts live in this file.
// Edit it freely: components only read from here.
//
// Sources for the facts below:
// - Solo Ship Kit: ../solo-ship-kit/kit.json and lead-magnet/prompt-card.md
// - Direction: github.com/Sergiu-ABC/direction-showcase (README)
// - Vitaly: github.com/Sergiu-ABC/Cs2Analyzer-Vitaly (README)
// - Washing machine: github.com/Sergiu-ABC/Washing-Machine-VHDL (README, AUTO_ROM.vhd)
// - Dates: each repo's git history (the washing machine's from its VHDL file headers)

export type Link = { label: string; href: string };

export type Fact = { label: string; value: string; note?: string; href?: string };

export const site = {
  name: 'Sergiu-Andrei Borca',
  shortName: 'Sergiu Borca',
  url: 'https://sergiuborca.dev',
  title: 'Sergiu-Andrei Borca · Software developer',
  description:
    'Sergiu-Andrei Borca builds software and ships it as products: Solo Ship Kit, the Direction Flutter app, and Java and FPGA projects. CS student at UTCN, Cluj-Napoca.',
  email: 'sergiuborca30b@gmail.com',
  github: 'https://github.com/Sergiu-ABC',
  linkedin: 'https://www.linkedin.com/in/sergiu-borca-519220315/',
  // Set to '' to hide the availability line everywhere.
  availability: 'Open to software internships',
  // The CV link shows only while `show` is true. The file lives in public/.
  cv: { show: true, href: '/Sergiu-Andrei-Borca-CV.pdf', label: 'CV' },
  // Shown in the footer.
  copyrightYear: __BUILD_YEAR__,
};

export const nav: Link[] = [
  { label: 'Solo Ship Kit', href: '#solo-ship-kit' },
  { label: 'Projects', href: '#direction' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const hero = {
  headline: ['I build software', 'and ship it as products.'],
  intro:
    'Computer Science student at UTCN in Cluj-Napoca. I build Flutter apps and Java back ends, test them properly and see them through to release.',
  primary: { label: 'See Solo Ship Kit', href: '#solo-ship-kit' },
  secondary: { label: 'Get in touch', href: '#contact' },
  // The short index of the log, shown beside the intro on wide screens.
  indexTitle: 'Latest in the log',
};

export const kit = {
  id: 'solo-ship-kit',
  version: 'v0.1.0',
  date: 'Oct 2026',
  status: 'Waitlist open',
  title: 'Solo Ship Kit',
  subtitle: 'The Claude Code workflow and guardrails for shipping Flutter apps on your own.',
  forWho:
    'For Flutter and indie developers who already use Claude Code and want to ship without breaking things.',
  body: 'It’s the workflow I used to build Direction, written down: a prompt format that gets features built right, a guard hook that keeps Claude away from your secrets, and the 9-step loop every feature goes through.',
  inside: [
    'A guide to the whole workflow',
    '20+ prompts, ready to fill in',
    'The drop-in setup: a guard hook that keeps Claude away from secrets, a read-only reviewer agent and four skills',
    'In Pro: a starter Flutter app wired with all of it',
  ],
  tiers: [
    {
      name: 'Prompt Card',
      status: 'Available now',
      price: 'Free',
      note: 'The 7-part prompt format, an annotated example, 5 prompts and the guard hook rules.',
    },
    {
      name: 'Core',
      status: 'At launch',
      price: '$24',
      note: 'The guide, 20+ prompts and the drop-in setup.',
    },
    {
      name: 'Pro',
      status: 'At launch',
      price: '$49',
      founding: '$29 on the waitlist',
      // "Free updates" is the kit's own Pro promise (solo-ship-kit/docs/BUILD_PLAN.md, CHANGELOG-KIT.md).
      note: 'Everything in Core, plus the starter Flutter app and free updates.',
    },
  ],
  launchNote: 'The full kit is in the works. People on the waitlist get Pro for $29 instead of $49.',
  primary: { label: 'Get the free Prompt Card', href: 'https://whop.com/checkout/plan_P4oepOLacbvS5' },
  secondary: { label: 'Join the waitlist', href: 'https://whop.com/checkout/plan_9pa15Bg4vhRVm' },
  actionsNote: 'Joining the waitlist is free: you only pay once your spot is approved. Both open Whop in a new tab.',
  loopTitle: 'The 9-step loop',
  loopIntro: 'Every feature goes through the same steps. The commit between features is the save point.',
  loop: [
    'Start a clean session',
    'Plan mode, then the prompt',
    'Check the plan',
    'Tests first',
    'Look at the changed screenshots (goldens)',
    'Format, analyze, test',
    'Review the diff yourself',
    'One commit per feature',
    'CHANGELOG and DECISIONS',
  ],
  notice:
    'Solo Ship Kit is independent: it is not affiliated with or endorsed by Anthropic. Claude and Claude Code are trademarks of Anthropic. Flutter is a trademark of Google LLC.',
};

export type Screen = { src: string; alt: string };

export const direction = {
  id: 'direction',
  date: 'Oct 2026',
  status: 'Closed testing on Google Play',
  title: 'Direction',
  tagline: 'Find what energizes you.',
  summary:
    'A Flutter app for Android and the web. A short strengths quiz finds what gives you energy, then the app plans one small step a day around it.',
  features: [
    'Strengths quiz: eight questions, five strengths',
    'A 7-day path built on your top strength',
    'A daily Day Plan across seven areas',
    'Evening check-ins that show which activities go with your best days',
    'Forgiving streaks: every 7 active days earn a rest day',
  ],
  facts: [
    { label: 'Automated tests', value: '384', note: 'incl. golden screenshot tests' },
    { label: 'Backend', value: 'None', note: 'offline-first, data stays on the device' },
    { label: 'Platforms', value: 'Android + web' },
    { label: 'Built with', value: 'The Solo Ship Kit workflow', href: '#solo-ship-kit' },
  ] satisfies Fact[],
  tags: ['Flutter', 'Dart', 'Android', 'Web', 'Golden tests'],
  screens: [
    {
      src: '01_profile',
      alt: 'Quiz result: “Curious Explorer with a Creator streak”, with a ring showing 55% Explorer and a written profile.',
    },
    { src: '02_path', alt: 'The 7-day path: one area a day, starting with Outdoors & Environment.' },
    { src: '03_home', alt: 'Home screen: day 3 of the 7-day path and today’s small step.' },
    { src: '04_day_plan', alt: 'Day Plan: 2 of 4 done, with “Get some fresh air” up next.' },
    { src: '05_energy_map', alt: 'Energy map: how each area of life has felt over the first 7 days.' },
    { src: '06_rest_days', alt: 'Progress: a 16-day streak and one saved rest day.' },
  ] satisfies Screen[],
  links: [
    { label: 'Try the web demo', href: 'https://sergiu-abc.github.io/direction-showcase/' },
    // The app's source is private; this repo holds the showcase, the web build and the APK.
    { label: 'Screenshots & details', href: 'https://github.com/Sergiu-ABC/direction-showcase' },
  ] satisfies Link[],
};

export const vitaly = {
  id: 'vitaly',
  date: 'May 2026',
  status: 'Open source on GitHub',
  title: 'Vitaly',
  tagline: 'CS2 player analytics: a Discord bot and a web dashboard in one Java process.',
  summary:
    'Turns FACEIT data into a scouting report: stats, playstyle across 30 archetypes, best maps and auto-veto, head-to-head compare and an ELO leaderboard.',
  highlights: [
    'Slow commands run on a worker pool, so the Discord gateway thread never blocks.',
    'A TTL cache and retries with backoff that honour Retry-After protect the shared API quota.',
    'The web API rate-limits each client and caps concurrent aggregations.',
    '29 JUnit tests against an in-process fake API, run in GitHub Actions CI.',
  ],
  commands: ['!stats', '!role', '!maps', '!compare', '!period', '!leaderboard'],
  // The architecture, from the repo's README.
  flow: {
    inputs: [
      { name: 'Discord gateway', to: 'DiscordBot', detail: 'worker pool' },
      { name: 'Browser', to: 'WebDashboard', detail: 'Javalin + rate limiter' },
    ],
    core: { name: 'FaceitApiClient', detail: 'timeouts · retry · TTL cache' },
    store: { name: 'PlayerRepository', detail: 'SQLite leaderboard' },
    external: { name: 'FACEIT Data API', detail: 'v4' },
  },
  facts: [
    { label: 'Playstyle archetypes', value: '30' },
    { label: 'JUnit tests', value: '29' },
    { label: 'Profile cache', value: '5 min' },
    { label: 'Scoreboard cache', value: '24 h' },
  ] satisfies Fact[],
  tags: ['Java 21', 'JDA 5', 'Javalin 6', 'SQLite', 'JUnit 5', 'GitHub Actions'],
  links: [{ label: 'Source on GitHub', href: 'https://github.com/Sergiu-ABC/Cs2Analyzer-Vitaly' }] satisfies Link[],
};

export type WashProgram = {
  id: string;
  label: string;
  temp: number;
  rpm: number;
  prewash: boolean;
  extraRinse: boolean;
};

export const washer = {
  id: 'washing-machine',
  date: 'May 2025',
  status: 'Runs on a Nexys A7',
  title: 'Washing Machine Controller',
  tagline: 'A finite state machine in VHDL, running on a Nexys A7 FPGA board.',
  summary:
    'A manual mode and five automatic programs. The control unit (the state machine) drives an execution unit: timers, heater, door lock, time calculator, 7-segment display and LEDs.',
  demoTitle: 'Pick a program',
  demoNote: 'The five programs from the board’s ROM. Pick one to step through the stages it runs.',
  statesNote:
    'The FSM has 12 states: these 8 wash stages, plus inactive, manual_mode, auto_mode and calc_time before a wash starts.',
  // From AUTO_ROM.vhd.
  programs: [
    { id: 'P0', label: '30 °C, 1200 rpm', temp: 30, rpm: 1200, prewash: false, extraRinse: false },
    { id: 'P1', label: '60 °C, 800 rpm', temp: 60, rpm: 800, prewash: false, extraRinse: false },
    { id: 'P2', label: '40 °C, extra rinse', temp: 40, rpm: 1000, prewash: false, extraRinse: true },
    { id: 'P3', label: '40 °C, prewash', temp: 40, rpm: 1000, prewash: true, extraRinse: false },
    { id: 'P4', label: '90 °C, extra rinse', temp: 90, rpm: 1200, prewash: false, extraRinse: true },
  ] satisfies WashProgram[],
  // The wash stages from state_pack.vhd, in the order the FSM runs them.
  stages: [
    { state: 'wait_start', label: 'Wait for start' },
    { state: 'water_heating', label: 'Heat water' },
    { state: 'prewashing', label: 'Prewash', optional: 'prewash' as const },
    { state: 'washing', label: 'Wash' },
    { state: 'rinsing', label: 'Rinse' },
    { state: 'extra_rinsing', label: 'Extra rinse', optional: 'extraRinse' as const },
    { state: 'centrifugation', label: 'Spin' },
    { state: 'finishing', label: 'Finish' },
  ],
  facts: [
    { label: 'FSM states', value: '12' },
    { label: 'Programs', value: '5', note: 'plus a manual mode' },
    { label: 'Board clock', value: '100 MHz' },
    { label: 'Test speed', value: '1 s = 1 wash minute' },
  ] satisfies Fact[],
  tags: ['VHDL', 'Vivado', 'Nexys A7', 'FSM'],
  links: [{ label: 'Source on GitHub', href: 'https://github.com/Sergiu-ABC/Washing-Machine-VHDL' }] satisfies Link[],
};

export const coursework = {
  title: 'Coursework',
  intro: 'Smaller Java projects from university.',
  items: [
    {
      name: 'Queue Management Simulator',
      date: 'Mar 2026',
      line: 'Multithreaded simulation of clients across service queues: one thread per queue, thread-safe queues, Strategy and Observer patterns, a live Swing view.',
      tags: ['Java', 'Concurrency', 'Swing'],
      href: 'https://github.com/Sergiu-ABC/Queue-Management-Simulator',
    },
    {
      name: 'Task Management Suite',
      date: 'Mar 2026',
      line: 'Swing app with nested tasks (Composite pattern, sealed class hierarchy) and workload reports written with Streams.',
      tags: ['Java', 'Swing', 'Streams'],
      href: 'https://github.com/Sergiu-ABC/Task-Management-Suite',
    },
  ],
};

export const about = {
  title: 'About',
  paragraphs: [
    'I’m Sergiu, a Computer Science student at the Technical University of Cluj-Napoca. I like taking a project all the way: the tests, the store listing, the page that explains it.',
    'Direction showed me that a good test suite is what lets one person keep shipping, and Solo Ship Kit is that workflow, written down for other developers. Next, I’m looking for a software internship where I can do the same on a team.',
  ],
  stackTitle: 'Stack',
  stack: ['Java', 'C', 'C++', 'SQL / PostgreSQL', 'Flutter / Dart', 'PHP', 'HTML / CSS', 'VHDL'],
};

export const contact = {
  title: 'Get in touch',
  line: 'Questions about an internship, a project or the kit? Email is the fastest way to reach me.',
  copyLabel: 'Copy email',
  copiedLabel: 'Copied',
  // Shown if the browser blocks the clipboard; the address is selected instead.
  copyFailedLabel: 'Selected, copy it',
};

export const footer = {
  copyright: `© ${site.copyrightYear} Sergiu-Andrei Borca`,
  backToTop: 'Back to top',
};

// The log's index in the hero lists these, newest first.
// Each row carries one number from the entry, so the proof shows in the first screen.
export const logIndex = [
  { date: kit.date, name: kit.title, status: kit.status, proof: 'Free Prompt Card', href: `#${kit.id}` },
  { date: direction.date, name: direction.title, status: direction.status, proof: '384 tests', href: `#${direction.id}` },
  { date: vitaly.date, name: vitaly.title, status: vitaly.status, proof: '29 tests, CI', href: `#${vitaly.id}` },
  { date: washer.date, name: washer.title, status: washer.status, proof: '12-state FSM', href: `#${washer.id}` },
];
