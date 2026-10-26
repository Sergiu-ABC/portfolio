---
version: 1
slug: "src-app-tsx"
primary_target: "src/App.tsx"
related_targets: ["index.html"]
---

# Surface: portfolio home (single page)

**Mode:** Persuade (with Experience elements: the projects lead as proof).
**Audience and job:** Solo Ship Kit buyers (Flutter and indie developers on Claude Code), recruiters hiring software interns, and prospective clients. Within 5 seconds they should get "builds software and ships it as products", then click through to the kit (free Prompt Card / waitlist), a project, or contact.
**Proof:** the kit's real tiers and prices; Direction's 384 tests and Play closed testing; Vitaly's architecture and 29 tests; the washing machine FSM's real states and programs.
**Constraints:** dark by default with a light toggle; one accent (kit green); motion 150–400 ms, transform/opacity only, respects reduced motion; WCAG AA; Lighthouse 90+; all content in src/content.ts.
**Memorable moment:** the green spine of the ledger (filling with the scroll, each section's node switching on as it arrives; sections have no fade of their own), and picking a washing program that runs along its own rail of nodes.

## Direction contract

THESIS: The page is a release ledger of someone who ships. Each project is an entry with a true status (Waitlist open, Closed testing, On GitHub, Coursework) and its real numbers. It refuses the category default: a big name over a gradient, then a grid of equal project cards.

OWN-WORLD: Brand assets carried over from the kit's marketing images: a thick green left rule (here a vertical spine down the whole ledger, with filled nodes for what shipped and hollow ones for the rest), ink #1d232b, paper #fbfcfb, accent #0b6e4f, mint #7fd8b3 for green text on dark. Dark ground is the kit's ink deepened to #0f1317 with #161c22 surfaces; light ground is paper. Fonts: Archivo at expanded width, 700–800, for display; Inter for body; JetBrains Mono, no ligatures, for versions, dates, numbers and statuses. Colour: the Solo Ship Kit entry is a full-bleed kit-green band in both themes; elsewhere green marks only shipped/verified status, the spine and its nodes, and primary buttons. No glass, gradient blobs, neon glow or tracked-uppercase mono kickers.

STORY: I ship (hero) -> the product, available now as a free card plus a free waitlist (kit band) -> proof it's real (Direction, Vitaly, FSM, each with real numbers) -> who I am (About) -> reach me (Contact).

FIRST VIEWPORT: At 1440x900: a header with the wordmark, nav, CV link and theme toggle. The spine sits on the left, with the headline "I build software / and ship it as products." in large Archivo Expanded on its first node. Below it, left: the name, a one-paragraph intro, "Open to software internships", the primary green "See Solo Ship Kit" button and a secondary "Get in touch". Right: the "Latest in the log" index, four rows, each with date, name, status and one sourced number, linking down to its entry. The green kit band starts in the first viewport with its title and its "v0.1.0 · Oct 2026 · Waitlist open" line above the fold. Signature interactions: the spine draws in on load and fills with scroll while nodes light as the reading line passes; picking one of the washer's five real programs steps a fill along a rail of stage nodes.

FORM: Ship log, ranked first of 7 candidates (ship log, golden contact sheet, component datasheet, drawing title block, boxed-software panel, quick-reference card, loop line map). The concept-seed roll was skipped: plan mode blocked the launcher's first-run download, and the owner picked Ship log from the presented directions before a roll could run. seed: none

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
