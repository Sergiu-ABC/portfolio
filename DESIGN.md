---
name: Sergiu-Andrei Borca
description: A release ledger of someone who ships. A green spine runs down the page and every project is an entry with a true status and its real numbers.
colors:
  kit-green: "#0b6e4f"
  spine-green: "#12855f"
  kit-mint: "#7fd8b3"
  kit-green-deep: "#084d38"
  band-mint: "#cfe8dd"
  band-rule: "rgb(251 252 251 / 0.22)"
  on-green: "#ffffff"
  night-ground: "#0f1317"
  night-surface: "#161c22"
  kit-ink: "#1d232b"
  night-text: "#e8ecef"
  night-muted: "#9ba6b2"
  night-rule: "#26303a"
  night-rule-strong: "#3a4652"
  night-track: "#1f3a30"
  kit-paper: "#fbfcfb"
  paper-surface: "#eff3f1"
  paper-surface-raised: "#e5ebe8"
  paper-muted: "#5b6573"
  paper-rule: "#d9dee5"
  paper-rule-strong: "#b9c2cc"
  paper-track: "#b5d4c6"
typography:
  display:
    fontFamily: "'Archivo Variable', 'Archivo', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 5.55vw, 5.25rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 118"
  display-band:
    fontFamily: "'Archivo Variable', 'Archivo', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 7vw, 5.5rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 118"
  headline:
    fontFamily: "'Archivo Variable', 'Archivo', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 4rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 118"
  headline-sm:
    fontFamily: "'Archivo Variable', 'Archivo', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 3.4vw, 2.75rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 118"
  title:
    fontFamily: "'Archivo Variable', 'Archivo', ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 110"
  lede:
    fontFamily: "'Inter Variable', 'Inter', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 2.2vw, 1.625rem)"
    fontWeight: 500
    lineHeight: 1.35
  body-lg:
    fontFamily: "'Inter Variable', 'Inter', ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "'cv11', 'ss01'"
  body:
    fontFamily: "'Inter Variable', 'Inter', ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "'cv11', 'ss01'"
  label:
    fontFamily: "'Inter Variable', 'Inter', ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
  button:
    fontFamily: "'Inter Variable', 'Inter', ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.975rem"
    fontWeight: 600
    lineHeight: 1.25
  mono:
    fontFamily: "'JetBrains Mono Variable', 'JetBrains Mono', ui-monospace, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.5
    fontFeature: "'tnum' 1, 'liga' 0, 'calt' 0"
rounded:
  focus: "4px"
  tag: "6px"
  chip: "8px"
  control: "10px"
  panel: "12px"
  screen: "14px"
  pill: "999px"
spacing:
  gutter: "clamp(1rem, 4vw, 3rem)"
  spine-gap: "clamp(1.5rem, 4vw, 3.5rem)"
  section: "clamp(4rem, 8.5vw, 7rem)"
  section-tight: "clamp(3.5rem, 7vw, 5.5rem)"
  block: "clamp(3rem, 6vw, 4.5rem)"
  column-gap: "4.5rem"
  stack: "2.5rem"
  cluster: "0.75rem"
components:
  button-primary:
    backgroundColor: "{colors.kit-green}"
    textColor: "{colors.on-green}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "0.7rem 1.25rem"
    height: "3rem"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.night-text}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "0.7rem 1.25rem"
    height: "3rem"
  button-band-primary:
    backgroundColor: "{colors.kit-paper}"
    textColor: "{colors.kit-green-deep}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "0.7rem 1.25rem"
    height: "3rem"
  button-band-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.kit-paper}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "0.7rem 1.25rem"
    height: "3rem"
  nav-link:
    textColor: "{colors.night-muted}"
    rounded: "{rounded.chip}"
    padding: "0 0.75rem"
    height: "2.5rem"
  nav-link-hover:
    textColor: "{colors.night-text}"
  theme-toggle:
    textColor: "{colors.night-text}"
    rounded: "{rounded.control}"
    size: "2.75rem"
  theme-toggle-hover:
    backgroundColor: "{colors.night-surface}"
  tag:
    backgroundColor: "{colors.night-surface}"
    textColor: "{colors.night-muted}"
    rounded: "{rounded.tag}"
    padding: "0.2rem 0.6rem"
  stack-chip:
    backgroundColor: "transparent"
    textColor: "{colors.night-text}"
    rounded: "{rounded.chip}"
    padding: "0.4rem 0.8rem"
  spine-node:
    backgroundColor: "{colors.night-ground}"
    rounded: "{rounded.pill}"
    size: "18px"
  fsm-program:
    backgroundColor: "{colors.night-surface}"
    textColor: "{colors.night-text}"
    rounded: "{rounded.control}"
    padding: "0.55rem 0.8rem"
    height: "2.75rem"
  fsm-program-hover:
    backgroundColor: "{colors.kit-ink}"
  fsm-program-selected:
    backgroundColor: "{colors.kit-green}"
    textColor: "{colors.on-green}"
  flow-node:
    backgroundColor: "{colors.night-surface}"
    textColor: "{colors.night-text}"
    rounded: "{rounded.panel}"
    padding: "0.85rem 1rem"
  copy-button:
    backgroundColor: "transparent"
    textColor: "{colors.night-text}"
    rounded: "{rounded.control}"
    padding: "0 1rem"
    height: "2.75rem"
---

# Design System: Sergiu-Andrei Borca

## Overview

**Creative North Star: "The Release Ledger"**

The page is the release ledger of someone who ships. A thick green spine, carried over from the left rule in Solo Ship Kit's marketing images, runs down the whole page, and every project hangs off it as an entry: a wide, heavy Archivo title with a node on the spine, then a monospaced line with its version, date and a true status. Filled nodes are things that shipped; hollow nodes are the rest. The ledger is the structure. There are no project cards.

Density is that of a well-kept log: generous air between entries, tight ruled lists inside them, and facts set as label and value rows with the numbers in tabular mono. Surfaces are flat and separated by tone and 1px rules. Green is scarce and always means something: shipped status, the spine, the primary action. The one exception is the product itself: Solo Ship Kit sits on a full-bleed kit-green band in both themes, and inside it the system inverts to paper. Dark ground is the default (the kit's ink deepened); the light theme is the kit's paper, with identical structure.

Motion is one authored moment. The spine draws in on load, then fills with the scroll as a reading line 60% down the viewport passes each title and lights its node. Sections never fade in on their own; the node lighting is their arrival. Everything else is small and quick: presses scale, arrows nudge, changed values settle. The world rejects glass, gradient blobs, neon glow and tracked-uppercase mono kickers, and it refuses the category default of a big name over a gradient followed by a grid of equal project cards.

**Key Characteristics:**
- A continuous green spine with circular nodes: filled for what shipped, hollow for the rest.
- Archivo at 118% width and weight 800 as the only display voice; Inter for reading; JetBrains Mono for data.
- Flat, tonal surfaces and 1px rules; one ambient shadow, only for what floats.
- Green as signal, never decoration; a full-bleed kit-green band for the product alone.
- Motion on transform and opacity only, 150–400ms, on one custom ease-out curve.
- Dark by default, a paper light theme, the same structure in both.

## Colors

One accent family (kit green with its mint and deep tones) over cool ink neutrals in the dark theme and faintly green paper neutrals in the light theme.

### Primary
- **Kit Green** (#0b6e4f): Solo Ship Kit's brand green. Primary buttons, the selected FSM program, text selection, the skip link and the full-bleed kit band in both themes; in the light theme it is also the spine, the lit nodes, green status text and the focus ring.
- **Spine Green** (#12855f): the spine fill, lit nodes and FSM rail on the dark ground, one step brighter than Kit Green so the rule reads at 4:1 against the night.
- **Kit Mint** (#7fd8b3): green text on the dark ground (live statuses such as "Waitlist open" and "Open to software internships") and the dark theme's focus ring.
- **Kit Green Deep** (#084d38): inside the band only, the ring of the band's spine nodes and the text of the paper button.
- **Band Mint** (#cfe8dd): secondary text on the band (meta lines, notes, details, list dashes) at 4.8:1.
- **Band Rule** (rgb(251 252 251 / 0.22)): the 1px rules of the band's pricing and loop lists.
- **On Green** (#ffffff): text on Kit Green buttons and the selected program.

### Neutral
- **Night Ground** (#0f1317): the dark page ground, header and open menu; the kit's ink deepened.
- **Night Surface** (#161c22): the dark tone for tags, command chips, flow nodes, FSM programs, screenshot placeholders and the theme toggle's hover.
- **Kit Ink** (#1d232b): the kit's ink. The raised tone on dark (an unselected program's hover) and the text color of the light theme.
- **Night Text** (#e8ecef): headings and body on dark.
- **Night Muted** (#9ba6b2): secondary copy, meta lines, labels and dates on dark (7.5:1 on the ground, 6.4:1 on the raised tone).
- **Night Rule** (#26303a): 1px dividers between sections and list rows, and under the header.
- **Night Rule Strong** (#3a4652): hairline rings on secondary controls, link underlines, list dashes, dashed outlines and the scrollbar thumb.
- **Night Track** (#1f3a30): the unlit spine, the unlit FSM rail and the ring of unlit nodes.
- **Kit Paper** (#fbfcfb): the light page ground; in both themes, the band's text, spine and primary button fill.
- **Paper Surface** (#eff3f1) and **Paper Surface Raised** (#e5ebe8): the light theme's two tones, in the same roles as Night Surface and Kit Ink.
- **Paper Muted** (#5b6573): secondary text on light (4.9–5.8:1 across the ground and both tones).
- **Paper Rule** (#d9dee5) and **Paper Rule Strong** (#b9c2cc): the light theme's dividers and hairlines.
- **Paper Track** (#b5d4c6): the light theme's unlit spine and rail.

### Named Rules
**The Shipped-Green Rule.** Green marks shipped or verified status, the spine and its nodes, primary buttons and the selected FSM program. It is never decoration: no green headings, icons, borders, washes or hover tints anywhere else.

**The Mint-on-Dark Rule.** Green text on the night ground is Kit Mint, never Kit Green, which fails at 2.98:1; the spine on dark is Spine Green. In the light theme Kit Green does all three jobs.

**The One Band Rule.** The full-bleed kit-green band belongs to Solo Ship Kit alone and stays green in both themes. Inside it the system inverts: the spine and filled nodes turn paper and the spine loses its rounded ends, the primary button is paper with deep-green text, secondary text is Band Mint, and the focus ring is paper.

## Typography

**Display Font:** Archivo Variable (with Archivo, ui-sans-serif, system-ui)
**Body Font:** Inter Variable (with Inter, ui-sans-serif, system-ui)
**Label/Mono Font:** JetBrains Mono Variable (with JetBrains Mono, ui-monospace)

**Character:** A heavy grotesque stretched to 118% width does the speaking, broad and flat like a stencilled ledger heading. Inter, Solo Ship Kit's own body face and a deliberate brand choice, carries the reading with its single-storey a and open digits (cv11, ss01). JetBrains Mono, ligatures off and figures tabular, keeps the record: what you type is what it shows.

### Hierarchy
- **Display** (800, 118% width, clamp(2.5rem, 5.55vw, 5.25rem), 0.98, -0.03em): the two-line hero headline.
- **Display Band** (800, 118%, clamp(2.75rem, 7vw, 5.5rem), 0.98): the Solo Ship Kit title, the largest type on the page because the product leads.
- **Headline** (800, 118%, clamp(2.25rem, 5vw, 4rem), 0.98): the project entries and Contact.
- **Headline Small** (800, 118%, clamp(1.875rem, 3.4vw, 2.75rem), 0.98): the lighter entries, Coursework and About.
- **Display voice at small sizes** (800, 118%): the wordmark (1.0625rem), the name under the hero (1.375rem) and the contact email (clamp(1.125rem, 5.1vw, 3rem), with a 3px underline at 0.18em offset).
- **Title** (Archivo 700, 108–112% width, 1.1875–1.25rem, -0.01em): headings inside an entry (Pricing, the loop, "Pick a program", course names), the mobile menu's links and the FSM readout values (up to 1.625rem, tabular).
- **Lede** (Inter 500, clamp(1.25rem, 2.2vw, 1.625rem), 1.35): the one sentence under each entry title and the kit subtitle, max 44rem.
- **Body Large** (Inter 400, 1.1875rem, 1.6): the hero intro, About and the contact line, max 40–42rem.
- **Body** (Inter 400, 1.0625rem, 1.6): everything else, max 38–44rem; headings balance, paragraphs wrap pretty.
- **Label** (Inter 600, 0.9375rem, muted, sentence case): small headings over lists ("Latest in the log", "Stack", "Discord commands").
- **Button** (Inter 600, 0.975rem, 1.25).
- **Mono** (JetBrains Mono 400, 0.75–0.8125rem, 1.5; 600 at 1.0625–1.25rem for fact values and prices; 700 for program ids): versions, dates, statuses, state names, numbers, commands.

### Named Rules
**The Trimmed Axis Rule.** The fonts are self-hosted and trimmed to the axis ranges the page uses: Archivo weight 700–800 and width 106–118%, Inter and JetBrains Mono weight 400–700. A weight or width outside those ranges needs the woff2 files re-trimmed first; never let the browser synthesize it.

**The Mono Is Data Rule.** JetBrains Mono sets only versions, dates, numbers, statuses, state and system names, and code, always with ligatures off and tabular figures. It never sets prose or headings, and never appears as a tracked-uppercase kicker.

**The Sentence Case Rule.** Every heading and label is sentence case at its natural tracking. Nothing on the page is uppercase, and no label sits above a heading.

## Layout

One column of ledger entries in a 78rem container with fluid side gutters (clamp(1rem, 4vw, 3rem)) that also clear the notch in landscape. The spine stands at the container's left gutter edge for the full height of the main content, 6px wide (4px at 640px and below), and every entry is indented by the spine's width plus a fluid spine gap. The header is sticky, 4.25rem tall plus the safe-area inset, and anchor targets clear it with a 6.5rem scroll margin.

Entries are separated by a 1px rule and padded by the section step (the tight step for Coursework). Inside an entry the order is fixed: title, meta line (0.85rem below), lede (1rem below), then a grid that stacks with 2.5rem between parts and from 1024px splits 7fr copy to 5fr facts and actions with a 4.5rem column gap (4rem in the hero). Diagrams, screenshots and the FSM demo sit below the grid at the block step. Buttons cluster with 0.75rem gaps.

The first viewport at 1440×900 holds the header, the hero headline on the first node, the intro and actions on the left with the "Latest in the log" index on the right, and the top of the green band with the kit's title and meta line. On narrow screens the kit band reorders to who it is for, pricing, actions, then details, so the offer and the action come before the long read.

Breakpoints: 520px narrows the log index's date column; above 640px the spine is 6px, the five programs sit side by side and the readout runs four across; 768px swaps the Menu button for the full nav and caps the screenshots at phone size instead of 46% of the width; 900px turns the Vitaly flow diagram horizontal and splits course rows; 1024px opens the two-column grids and turns the FSM rail horizontal.

### Named Rules
**The Spine Rule.** Every section's content sits right of the spine, indented by the spine's width plus the spine gap, and every entry title carries a node on the spine centred on its first line. Nothing sits between the gutter and the spine.

**The Ruled List Rule.** Lists and facts are rows between 1px rules, not boxes. Facts read label left in muted text and value right at 600, in mono when the value holds a digit. Feature and contents lists mark items with a short 2px dash.

## Elevation & Depth

The ledger is flat. Depth comes from tone (ground, surface, raised) and 1px rules. A single ambient shadow, offset and softly blurred, is kept for what floats over the page: the open mobile section menu and the Direction phone screenshots. Nodes use ring shadows, an inset ring in the track color plus a ring in the ground color that cuts the node out of the spine; these draw shape, not height. Hairline borders on secondary controls are inset 1px shadows, so they never change a box's size.

### Shadow Vocabulary
- **Ambient, dark** (`box-shadow: 0 1px 2px rgb(0 0 0 / 0.35), 0 12px 32px -12px rgb(0 0 0 / 0.55)`): the open section menu and phone screenshots on dark.
- **Ambient, light** (`box-shadow: 0 1px 2px rgb(29 35 43 / 0.08), 0 12px 32px -14px rgb(29 35 43 / 0.22)`): the same roles on paper.
- **Node knockout** (`box-shadow: inset 0 0 0 3px <track>, 0 0 0 5px <ground>`): the spine nodes; the FSM nodes use 2px and 4px.
- **Hairline ring** (`box-shadow: inset 0 0 0 1px <rule-strong>`): secondary buttons, the copy button and stack chips; on the band, 50% paper.

### Named Rules
**The Flat Ledger Rule.** Surfaces are flat at rest. The ambient shadow means something floats above the page (a menu, a phone); buttons, chips, flow nodes, program controls and spine nodes never take it.

## Shapes

Gently rounded controls, circles kept for points on a timeline, pills for the rails. Tags and command chips round at 6px; nav links, stack chips and the skip link at 8px; buttons, the theme toggle, program controls and the copy button at 10px; flow nodes at 12px; phone screenshots at 14px (9:16); focus rings at 4px. The spine and the FSM rail have pill ends, except inside the band, where the spine is square-ended. The Vitaly diagram joins its two front ends with a 2px bracket rounded at 10px. Icons are one drawn set on a 24px grid with a 1.75 stroke and round caps and joins, in currentColor.

### Named Rules
**The Circle Means Stage Rule.** Circles are reserved for points on a timeline: spine nodes (18px), FSM stage nodes (16px) and the status dot (0.5rem). No circular avatars, icon buttons or badges.

**The Dashed Means Outside Rule.** A dashed outline marks something outside the system or not run: the external API in the flow diagram (1px) and a stage the chosen program skips (2px).

## Components

### Buttons
Solid, compact and quietly tactile.
- **Shape:** gently rounded (10px), at least 3rem tall, padded 0.7rem 1.25rem, Inter 600 at 0.975rem, with an arrow after the label: right for in-page links, up-right for external ones (which also announce "opens in a new tab" to screen readers).
- **Primary:** Kit Green with white text. One per group; it is the action the section exists for.
- **Secondary:** transparent, in the text color, with a hairline ring in Rule Strong.
- **On the band:** the primary turns paper with Kit Green Deep text; the secondary is paper text with a 50% paper hairline.
- **Hover / Focus:** on fine pointers only, a currentColor overlay fades to 9% (160ms), so the tint works on any fill and only opacity animates; the arrow nudges 2px right (or 2px up-right) in 200ms. Focus is a 2px outline in the focus color at a 3px offset.
- **Press:** scale(0.97) in 160ms on the custom ease-out.
- **Text links:** Inter 600 with a 1px underline in Rule Strong at 0.22em offset that turns to currentColor on hover, an up-right arrow when external, and a 60% dim on press (120ms).

### Chips
- **Tags ("Built with"):** Night Surface tone, muted Inter 500 at 0.8125rem, 6px corners. Static, never interactive.
- **Command chips:** mono 0.875rem in the text color on the surface tone, 6px corners.
- **Stack chips (About):** transparent with a hairline ring, Inter 500 at 0.9375rem, 8px corners.

### Containers
There are no cards. Content sits on the page between rules. The few boxed things are diagram parts and controls in the surface tone with no border or shadow: flow nodes (12px, padded 0.85rem 1rem, a mono name at 600 over a muted detail) and the FSM program controls. The external system in the flow diagram drops its fill for a dashed hairline.

### Navigation
- **Header:** sticky on the ground color with a 1px bottom rule. The wordmark is the display voice at 1.0625rem, full name from 640px and short name below, truncating with an ellipsis before anything else gives way.
- **Links:** Inter 500 at 0.9375rem in muted text, 2.5rem tall with 8px corners, turning to the text color on hover; the CV link sits in the text color with an up-right arrow.
- **Mobile:** below 768px a "Menu" button with a two-bar icon that closes to one (each bar moves 3px, 200ms). The menu drops under the header on the ground with the ambient shadow, entering from 6px above (opacity 180ms, transform 220ms); its links are Archivo 700 at 1.25rem, 3rem tall, between rules. Escape and an outside tap close it.
- **Theme toggle:** a 2.75rem square at 10px showing the theme it switches to; the icons swap by rotating from -60° and scaling from 0.6 (300ms), hover takes the surface tone, press scales to 0.94, and the switch crossfades the whole page (220ms view transition).
- **Skip link:** Kit Green at 8px, sliding in on focus.

### The Spine (signature)
- A 6px rail with pill ends at the container's left gutter edge, running the full height of the main content: Night Track under a Spine Green fill on dark, Paper Track under Kit Green on light, solid paper inside the band.
- On load it draws down from the top (scaleY, 400ms). After that the fill scales with the scroll: its head sits on a reading line 60% down the viewport at the top of the page and moves to the bottom edge as the page ends, so the ledger is full at the footer. Only the transform changes.
- Each entry title carries an 18px node centred on its first line, cut out of the spine by a ring of ground color. It waits dim with a 3px track ring until the reading line passes, then lights: the fill fades in (240ms) and scales up from half size (320ms). Filled nodes for what shipped (the hero, Solo Ship Kit, Direction, Vitaly, the washer); hollow 3px rings for the rest (Coursework, About, Contact).

**The Reading Line Rule.** A section arrives when its spine node lights at the 60% reading line. Sections never fade or slide in on their own. Only what is on screen at load plays an entrance: the hero copy, the log index and the kit band's header rise 16px into place, and the headline lines rise 0.3em (400ms, staggered by delay).

### Entry Header
- The display title with its node, then a mono meta line at 0.8125rem in muted text: version, date, status, spaced 1rem apart and wrapping cleanly.
- The status carries a 0.5rem dot in its own color, held on the first line when the status wraps. Live statuses are Kit Mint on dark, Kit Green on light and paper on the band.
- The lede follows 1rem below.

### Log Index
- The hero's "Latest in the log": a ruled list of the entries, each row a link with the date in mono, the name at 600, an arrow, and the status and one sourced number in mono beneath (the number in the text color, kept in one piece).
- Hover underlines the name in Rule Strong and moves the arrow 3px; press dims the row to 60%.

### Staggered Lists
- The phone screenshots, the kit's nine-step loop and the course rows ease in item by item, 50ms apart: opacity 360ms on plain ease and a 16px rise on the custom ease-out.
- A list is armed (hidden) only if it starts below the fold after load. The HTML ships everything visible, nothing waits on JavaScript to be readable, and print shows everything.

### FSM Demo (signature)
- Sits on the page under a 1px rule, with no panel around it.
- **Programs:** five controls in the surface tone at 10px, each a mono 700 id over a muted label; one row each on phones, five across from 640px. The selected program is Kit Green with white text (aria-pressed); an unselected one takes the raised tone on hover; press scales to 0.97.
- **Readout:** four values (temperature, spin, prewash, extra rinse) in Archivo 700 at 112% width and tabular figures; a changed value settles in from 4px below (180ms).
- **Run:** a 4px rail with a 16px node per stage, top to bottom down the left below 1024px like the page's spine, left to right across eight columns from 1024px. The fill steps one stage every 200ms on a linear curve, because it follows the machine's clock. Done stages are filled, the current stage is filled with an outer ring that scales in, and a skipped stage is a 2px dashed outline with a muted label marked "skipped". It runs once when it first scrolls into view; choosing a program runs it again.

**The Rail Echo Rule.** A sequence that runs is drawn in the spine's own vocabulary: a track, a green fill, and filled, ringed or dashed nodes.

### Contact
- The email address in the display voice at clamp(1.125rem, 5.1vw, 3rem) with a 3px Rule Strong underline, wrapping after the @.
- The copy button (hairline ring, 10px, 2.75rem tall) swaps its icon and label in one grid cell so its width holds: "copied" for 1.8s, or on a blocked clipboard the address is selected and the button says so for 4s.

## Do's and Don'ts

### Do:
- **Do** give every entry a true status in its mono meta line, with a filled node for what shipped and a hollow node for the rest.
- **Do** use Kit Mint (#7fd8b3) for green text on the night ground and Spine Green (#12855f) for the spine there; in the light theme Kit Green (#0b6e4f) does both.
- **Do** separate with tone and 1px rules: tags, chips, flow nodes and program controls take the surface tone; lists and facts are rows between rules.
- **Do** animate only transform and opacity, 150–400ms, with cubic-bezier(0.23, 1, 0.32, 1) on transforms and plain ease on opacity; the press dim on text links is the one faster value (120ms).
- **Do** keep hover effects behind (hover: hover) and (pointer: fine), and give every control a press state: scale(0.97) for buttons, a 60% dim for links.
- **Do** theme the browser's own surfaces: Kit Green text selection with white text, a 2px focus outline at 3px offset in Kit Mint on dark, Kit Green on light and paper on the band, a Rule Strong scrollbar over the ground, and underlines at 0.22em offset.
- **Do** honour reduced motion with fades or nothing: entrances become a 200ms fade, the spine appears already drawn, transitions collapse, the FSM jumps to its finished state and the theme switches without a crossfade.
- **Do** cap reading measure at 38–44rem and balance headings.

### Don't:
- **Don't** use green as decoration: no green headings, icons, borders, washes or hover tints outside status, the spine and its nodes, primary buttons and the selected program.
- **Don't** set Kit Green text on the night ground; it fails at 2.98:1.
- **Don't** lay projects out as a grid of equal cards, or open with a big name over a gradient.
- **Don't** use glass, gradient blobs, neon glow or tracked-uppercase mono kickers, and don't put an eyebrow label above any heading.
- **Don't** give list items, callouts or panels a colored side stripe; the only thick vertical green rule is the spine.
- **Don't** fade or slide whole sections in, and don't arm a staggered list that is already on screen at load.
- **Don't** animate width, height, position, color or background, or run any single motion longer than 400ms.
- **Don't** set Archivo outside weight 700–800 or width 106–118%, or Inter and JetBrains Mono outside weight 400–700, without re-trimming the fonts.
- **Don't** add the ambient shadow to buttons, chips, flow nodes, program controls or nodes.
