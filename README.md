# The Shaping of a Hero — José Rizal's Character Development

An interactive, single-page blog essay built with **Next.js (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion**. It explores the biological, environmental, and lived forces that shaped José Rizal into the Philippines' foremost national hero — with **IEEE-style citations linked to their sources**.

## Run it

```bash
npm install      # already done
npm run dev      # development server  → http://localhost:3000
# or build a static site and preview it:
npm run build    # emits a fully static site to ./out
npm run preview  # serves ./out            → http://localhost:3000
```

## Deploy as a static site (GitHub Pages)

This project is configured for **static export** (`output: "export"` in `next.config.mjs`),
so `npm run build` writes a self-contained static site to **`./out`** with no server required.

**Automatic (recommended).** A workflow at [.github/workflows/deploy.yml](.github/workflows/deploy.yml)
builds and publishes to GitHub Pages on every push to `main`:

1. Push this repo to GitHub.
2. In **Settings → Pages**, set **Source = GitHub Actions**.
3. Push to `main`. The site deploys to `https://<user>.github.io/<repo>/`.

The workflow sets `NEXT_PUBLIC_BASE_PATH=/<repo>` automatically so images and assets resolve
under the project sub-path. A `public/.nojekyll` file is included so GitHub Pages serves the
`_next/` asset folder.

**Manual / other hosts.** Run `npm run build` and upload the `./out` folder to any static host
(Netlify, Cloudflare Pages, S3, nginx, …). If hosting under a sub-path, build with
`NEXT_PUBLIC_BASE_PATH=/your-sub-path`; for a domain root (or `user.github.io` user site),
leave it unset.

## What's inside

### The essay (follows the required outline)
- **I. Introduction** — overview of Rizal + thesis, with animated key-figure counters.
- **II. Biological Factors** — inherited traits & physical characteristics (interactive **flip cards**).
- **III. Environmental Factors** — family, education, and the colonial context (animated **tabs**).
- **IV. Life Experiences** — abroad, Dapitan, arrest/trial/execution (interactive **timeline**).
- **V. Character Analysis** — virtues vs. shortcomings toggle + an **evolution stepper**.
- **VI. Pitfalls & Heroism** — expandable **obstacle → heroic turn** accordion.
- **VII. Conclusion** — summary + reflection on his legacy.
- **References** — full IEEE list with external links.

### Interactive portions
- Flip cards, tabbed panels, clickable timeline, strengths/shortcomings toggle, evolution stepper, obstacle accordion, and a **5-question scored quiz** with instant feedback.
- Sticky nav with **scroll-spy** active-section highlighting, a **reading-progress bar**, **back-to-top** button, and a **light/dark theme toggle** (Parchment / Midnight) that persists.

### Animations & transitions
- Framer Motion throughout: staggered hero reveal, parallax glows, scroll-into-view reveals, animated counters, layout-animated nav underline & tab pills, page-style transitions between timeline/quiz states. Respects `prefers-reduced-motion`.

### IEEE citations with links
- In-text markers like `[3]` or `[8, 9]` (`src/components/Cite.tsx`) show a **hover/focus tooltip** of the source and **link to the reference list**.
- The reference registry lives in `src/data/references.ts`; each entry renders in IEEE format with an "Available:" external link where applicable.

## Project structure

```
src/
  app/
    layout.tsx        # fonts, metadata, flash-free theme init
    page.tsx          # the essay — assembles all sections + prose
    globals.css       # design tokens (Parchment/Midnight) + component styles
  components/         # Hero, SiteHeader, Timeline, Tabs, FlipCards, Quiz,
                      # CharacterAnalysis, ChallengeHeroism, Cite, References, …
  data/
    references.ts     # IEEE citation registry (with links)
    content.ts        # timeline, tabs, traits, virtues, challenges, quiz data
    sections.ts       # nav section ids/labels
```

## A note on sources

This is an educational essay. Interpretive passages (the "character analysis," "evolution," and "heroism" framing) are the author's synthesis; factual claims are cited to the references listed in the **References** section. Rizal is *widely venerated* as the national hero of the Philippines; no single statute formally proclaims him as such.
