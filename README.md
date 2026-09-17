# Apollo Mock — Progressive Autonomy Control Center

A static, front-end-only prototype of an "Agent Control Center" for an Apollo.io-style
B2B sales platform. It demonstrates how a sales team might supervise AI agents that
enrich leads and draft outreach: how much freedom the agent gets, what it is waiting
on a human to approve, why it proposed what it did, and whether its behaviour is
drifting away from what operators actually want.

This is a **design mock**, not a working product. There is no backend, no API, and no
persistence — all numbers, queue items, and citations are hard-coded sample data used
to communicate the concept.

## Features

- **Agent orchestration overview** — headline metrics for outreach tasks automated,
  sequences pending review (with an action-required badge), and estimated hours saved,
  each with a trend indicator.
- **Progressive autonomy slider** — a three-stop control (Copilot → Supervised →
  Autonomous) that sets how much the agent may do unattended. Selecting a stop animates
  the track fill and swaps in a plain-language description of what that mode permits.
- **Pending review queue** — a human-in-the-loop approval list of agent-proposed
  actions, showing prospect counts, the signal that triggered the action (high intent,
  recent job change), how long the item has been waiting, and Approve / View Citations
  controls.
- **Source logic & citations panel** — a slide-over panel, opened from any queue item,
  that shows the agent's reasoning trail: the intent-data signal, the CRM query it ran
  against Salesforce, and the system prompt it was given. Closes via the ✕ button or by
  clicking the backdrop.
- **Drift monitor** — a seven-day bar chart of the human override rate against a 15%
  retraining threshold, with the outlier day highlighted and a callout describing the
  spike and linking to prompt review.
- **Dashboard shell** — dark sidebar navigation, topbar with an Enterprise plan badge,
  and a CSS-variable design system (Apollo-inspired palette, Inter type, shared radius,
  shadow, and transition tokens).

## Tech stack

- [Vite](https://vite.dev/) 8 for dev server and build
- Plain HTML, CSS, and vanilla JavaScript — no UI framework, no runtime dependencies
- Google Fonts (Inter), loaded from CDN

## Getting started

Requires Node.js 20 or newer.

```bash
npm install
npm run dev      # start the dev server with hot reload
npm run build    # produce a production build in dist/
npm run preview  # serve the production build locally
```

## Project structure

```
index.html        # the entire dashboard markup
main.js           # autonomy slider + citations panel behaviour
style.css         # design tokens and all component styles
public/           # static assets copied verbatim (favicon, icon sprite)
src/              # unused leftover Vite starter scaffold
vite.config.js    # sets base: './' so the build works on any subpath
```

The app is entirely driven by the root-level `index.html`, `main.js`, and `style.css`.
The `src/` directory still holds the default Vite JavaScript template and is not
referenced by the app.

## Deployment

`.github/workflows/deploy.yml` builds the site and publishes `dist/` to GitHub Pages on
every push to `main` or `master`, and on manual dispatch. Because `vite.config.js` sets
`base: './'`, the build uses relative asset paths and works from any subpath.
