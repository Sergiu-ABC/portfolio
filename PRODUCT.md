# Product

<!-- impeccable:product-schema 1 -->

## Platform

### Local review update - 2026-10-29

The owner requested a portfolio-first home page and local preview before any push or deployment. This update supersedes the product-first ordering described below. The home page now leads with projects and the CV; a concise Solo Ship Kit entry links to `/solo-ship-kit/`, which retains the full offer. Both pages are statically prerendered. Availability is summer 2027. Direction screenshots have a native dialog viewer, and the washer walkthrough advances manually. Vitaly examples are documented command/output categories from its public README, not fabricated screenshots or player data. Keep Nexys descriptions technical without adding unconfirmed personal contribution details.

web

## Stack

Vite + React + TypeScript + Tailwind CSS + Motion (motion.dev). Static site, no backend, deployable to Vercel's free tier. All content (projects, links, text) lives in `src/content.ts` so the owner can edit it without touching components. Pinned by the owner's brief.

## Users

- **Buyers:** Flutter and indie developers who already use Claude Code and want to ship apps on their own without breaking things. They arrive from posts on LinkedIn, Reddit and Indie Hackers, or from the Whop page.
- **Recruiters:** looking for a software intern. They scan in under a minute, usually on a laptop, and want proof of real, finished work and a way to get in touch.
- **Clients:** people who might hire Sergiu for a Flutter app or a Java back end and want to see that he finishes and ships things.

## Product Purpose

The personal site of Sergiu-Andrei Borca, a Computer Science student at the Technical University of Cluj-Napoca (UTCN), Romania, who builds software and sells it as digital products. Visitors should understand within 5 seconds what he builds, then click through to his product (Solo Ship Kit) and his projects. Success means kit sign-ups (the free Prompt Card, the waitlist), clicks through to the projects, and contact from recruiters.

## Positioning

A student developer who takes projects all the way to shipping, and sells the workflow that lets him do it. The proof is on public record: an app in Google Play closed testing with 384 automated tests, and a product with real tiers and prices.

## Operating Context

- Projects are evaluated through their GitHub repos, the Direction web demo and the Whop checkout pages.
- Solo Ship Kit is sold on Whop. The free Prompt Card and the founding waitlist are live; Core and Pro launch later.
- Domain: https://sergiuborca.dev (canonical, Open Graph, sitemap).

## Capabilities and Constraints

- **Solo Ship Kit** (v0.1.0, source: `../solo-ship-kit/kit.json`, `CLAUDE.md`, `lead-magnet/prompt-card.md`):
  - "The Claude Code workflow and guardrails for shipping Flutter apps on your own."
  - Tiers: Free Prompt Card; Core $24; Pro $49, with a $29 founding price for the waitlist. Pro includes free updates (`docs/BUILD_PLAN.md`: "and free updates (CHANGELOG-KIT.md)").
  - Joining the waitlist is free; buyers pay only once their spot is approved (confirmed by the owner, 2026-10-26).
  - Links: free Prompt Card https://whop.com/checkout/plan_P4oepOLacbvS5; waitlist https://whop.com/checkout/plan_9pa15Bg4vhRVm.
  - The full kit is still being made. Per the Prompt Card's "The full kit" section: a guide, 20+ prompts, the drop-in setup (a guard hook, a read-only reviewer agent and four skills) and, in Pro, a starter Flutter app wired with all of it.
  - Independent; not affiliated with or endorsed by Anthropic. Claude and Claude Code are trademarks of Anthropic; Flutter is a trademark of Google LLC.
- **Direction:**
  - Flutter app (Android + web): "Find what energizes you."
  - Features: strengths quiz, 7-day path, daily Day Plan, evening check-ins, forgiving streaks.
  - Offline-first with no backend; 384 automated tests incl. golden screenshot tests; in Google Play closed testing.
  - Built with the Solo Ship Kit workflow.
  - The source is private; the showcase repo holds the README, the web build and the APK.
- **Vitaly:**
  - CS2 player analytics (Discord bot + web dashboard), full-stack Java.
  - 30 playstyle archetypes; 29 JUnit tests; GitHub Actions CI.
- **Washing Machine Controller:**
  - VHDL on a Nexys A7 FPGA: a 12-state FSM with a manual mode and 5 automatic programs.
- **Coursework:** Queue Management Simulator and Task Management Suite (Java).
- **Excluded:** Tutor-Connect and Arduino must not appear.

## Brand Commitments

- One accent: Solo Ship Kit's deep green `#0b6e4f`, from the kit's marketing images (`../solo-ship-kit/marketing/images/kit.css`). Inter and JetBrains Mono are the kit's fonts.
- Dark theme by default, with a light mode toggle.
- Voice: plain and confident. No hype words. The banned list is kit.json's `leakScan.hypeWords` (revolutionary, 10x, game-changer, supercharge, unleash, effortless, cutting-edge, etc.).
- Email: sergiuborca30b@gmail.com. GitHub: https://github.com/Sergiu-ABC. LinkedIn: https://www.linkedin.com/in/sergiu-borca-519220315/.
- Availability: open to software internships (no date stated).

## Evidence on Hand

- Six Direction screenshots from `github.com/Sergiu-ABC/direction-showcase/assets/screenshots`: 01_profile, 02_path, 03_home, 04_day_plan, 05_energy_map, 06_rest_days.
- Vitaly's README: the architecture flow, command list and engineering decisions.
- The washing machine repo's README and `AUTO_ROM.vhd`: the stage sequence and the 5 programs' values.
- The CV is `public/Sergiu-Andrei-Borca-CV.pdf` (updated by the owner, no phone number). An older version lives in `_private/`, which is gitignored and never published.
- No portrait photo, testimonials, customer counts or sales figures exist. Never fabricate them.

## Product Principles

1. Prove, don't claim: every number on the page has a source in a repo or the kit's docs.
2. The product comes first: Solo Ship Kit leads, and the projects are the proof behind it.
3. Status is honest: waitlist open, closed testing and coursework are labelled as what they are.
4. Five seconds to understand, one click to act.

## Accessibility & Inclusion

WCAG AA contrast in both themes, keyboard focus styles, semantic HTML, alt text, and respect for prefers-reduced-motion. Lighthouse 90+ in all four categories.
