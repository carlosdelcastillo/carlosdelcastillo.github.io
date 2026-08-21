# CLAUDE.md — Portfolio of Carlos del Castillo

This is the personal portfolio of **Carlos del Castillo**, Backend Engineering Manager and Software Architect, operating since 2009 at the intersection of fintech, platform engineering, and technical leadership. The site is live at **<https://carlosdelcastillo.dev>**.

The project is intentionally minimal in scope (no CMS, no database, no server). Every architectural decision reflects the same values Carlos applies professionally: performance-first, type-safe, tested, and maintainable.

---

## Project Context

This portfolio is Carlos's professional face to the market. It communicates a specific positioning:

- **Primary**: Backend Engineering Manager with deep technical hands-on background
- **Career breadth**: Has spanned the full path — Software Engineer → Software Architect → Technical Consultant → Development Lead → Engineering Manager, with strategic scope that includes technology direction and product-technology alignment
- **Domain**: Fintech, regulated systems, platform/cloud-native architecture, team scaling, enterprise consulting

All copy, tone, and emphasis must reinforce this positioning. When in doubt: technical credibility + leadership impact, not generic "passionate developer" language.

---

## Stack at a Glance

| Layer | Technology |
| --- | --- |
| Framework | Astro 7 (SSG) + React 19 |
| Language | TypeScript 6 (strict mode) |
| Styling | Tailwind CSS v4 + Framer Motion 13 |
| State | Nanostores (theme) + React useState (ephemeral) |
| Testing | Vitest 4 (unit) + Playwright 1.62 (E2E) |
| Quality | ESLint 9 + Prettier 3 + SonarQube |
| Deploy | GitHub Actions → GitHub Pages |
| Node | 24.19.0 (pinned in `.nvmrc`) |

---

## Development Commands

```bash
npm run dev          # Dev server at localhost:4321
npm run build        # astro check + astro build → /dist
npm run preview      # Preview production build locally
npm run test         # Vitest unit tests (watch mode)
npm run test:run     # Vitest unit tests (CI mode, single run)
npm run test:e2e     # Playwright E2E (starts the production preview automatically)
npm run coverage     # Unit test coverage report → /coverage
npm run lint         # ESLint check
npm run format       # Prettier format
npm run typecheck    # astro check (Astro + TS strict)
npm run sonar        # SonarQube analysis (requires local Sonar server + .env.sonar.local)
```

**Before any commit:** `npm run build` must pass clean (it runs `astro check` which is the full type gate).

---

## Architecture & File Map

```text
src/
├── components/          # All UI — React (.tsx) or Astro (.astro)
│   ├── ui/              # Headless primitives: button.tsx, card.tsx
│   ├── icons/           # Inline SVG icons (no icon font deps)
│   ├── Navigation.tsx   # Header: nav links, theme toggle, lang toggle
│   ├── Hero.tsx         # Landing: name, description, CTAs, photo
│   ├── About.tsx        # Background, quick stats, core expertise grid
│   ├── Experience.tsx   # Job timeline (3 positions)
│   ├── Education.tsx    # Academic credentials
│   ├── Contact.tsx      # Email + LinkedIn CTAs
│   ├── Footer.tsx       # Footer: links, credits, repo link
│   ├── SocialIcons.tsx  # Reusable social icon set
│   └── HomePage.astro   # Section orchestrator — passes lang prop down
├── layouts/
│   └── BaseLayout.astro # HTML shell, meta tags, JSON-LD, dark mode init
├── pages/
│   ├── index.astro      # Redirect to /en/
│   ├── en/index.astro   # English route
│   └── es/index.astro   # Spanish route
├── locales/
│   ├── en.ts            # English content (source of truth)
│   ├── es.ts            # Spanish content (must stay in sync with en.ts)
│   └── index.ts         # getTranslations(locale) helper + Locale type
├── types/
│   └── translations.ts  # TypeScript interface — contract for both locales
├── stores/
│   └── theme.ts         # Nanostore: 'light' | 'dark' | 'system'
├── lib/
│   ├── motion.ts        # Framer Motion factory helpers
│   └── utils.ts         # cn() = clsx + tailwind-merge
├── styles/
│   └── globals.css      # Tailwind v4 + CSS custom properties + utilities
└── test/                # Vitest test suite
    ├── setup.ts          # Global mocks (IntersectionObserver, localStorage…)
    ├── components.test.tsx
    ├── locales.test.ts
    ├── stores.test.ts
    ├── ui.test.tsx
    └── utils.test.ts

tests/e2e/               # Playwright suite
└── homepage.spec.ts     # Full user journey (redirect, nav, theme, i18n…)
```

---

## i18n — The Non-Negotiable Rule

**Every content change must be applied to BOTH `src/locales/en.ts` AND `src/locales/es.ts`.**

The TypeScript interface in `src/types/translations.ts` enforces structural parity — both files must satisfy `Translations`. If you add a key to one locale without the other, `npm run build` will fail.

### How it works

1. `src/types/translations.ts` defines the `Translations` interface (the contract)
2. `en.ts` and `es.ts` each export a typed object satisfying that interface
3. `getTranslations(locale: Locale)` returns the correct object at runtime
4. Components receive `initialLang` as a prop — no React Context, no i18n library

### Adding content

- Add the key to `src/types/translations.ts` first
- Add the value in `en.ts`
- Add the translated value in `es.ts`
- Verify: `npm run build`

### Useful custom commands

- `/translate` — audit EN and ES for missing or drifted keys
- `/quality-gate` — full pre-deploy validation (build, tests, coverage, Lighthouse, E2E, security, bundle)
- `/content-audit` — audit portfolio copy for professional quality and brand consistency

---

## Component Patterns

### Hydration strategy

Components are server-rendered by Astro. Interactive components opt into client hydration:

| Directive | Used for |
| --- | --- |
| `client:load` | Navigation, Hero (visible immediately) |
| `client:visible` | About, Experience, Education, Contact, Footer (below fold) |

**Never use `client:only` unless there is no SSR-compatible alternative.** It skips server rendering entirely.

### Props convention

```typescript
// Props are always a Readonly interface
interface Props {
  readonly initialLang?: Locale;
}

// Components use direct function signatures, not React.FC
export default function MyComponent({ initialLang = 'en' }: Readonly<Props>) { ... }
```

### Animations

Use the factory helpers from `src/lib/motion.ts`, not raw Framer Motion config objects:

```typescript
import { createFadeStaggerContainer, createFadeUpItem } from '@/lib/motion';

// In JSX:
<motion.div {...createFadeStaggerContainer()}>
  <motion.div {...createFadeUpItem(0)}>First</motion.div>
  <motion.div {...createFadeUpItem(1)}>Second</motion.div>
</motion.div>
```

### UI primitives

`button.tsx` uses `class-variance-authority` for variants. Use the `Button` component instead of raw `<button>` or `<a>` elements:

```typescript
<Button variant="default" size="lg">CTA</Button>
// variants: default | destructive | outline | secondary | ghost | link
// sizes: default | sm | lg | icon
```

---

## TypeScript Rules

- **Strict mode is on.** No `any` (ESLint warns). Prefer `unknown` + type guard.
- **Path aliases**: Use `@/` prefix, never relative `../../` imports across feature boundaries.
  - `@/components/`, `@/lib/`, `@/stores/`, `@/types/`, `@/locales/`
- **No `React.FC`** — use explicit return types when needed.
- **Private/internal names**: prefix with `_` to satisfy `no-unused-vars` without deletion.

---

## Styling Rules

- **Tailwind v4** — uses CSS-native `@import "tailwindcss"` (not `@tailwind` directives).
- **Dark mode**: class-based (`dark:` prefix). Controlled via Nanostore `theme.ts`, not `prefers-color-scheme` alone.
- **Color system**: Never hardcode color values. Use CSS custom properties defined in `globals.css` and mapped via Tailwind config.
- **Utility classes**: `cn()` from `@/lib/utils` for conditional/merged classNames. Never string concatenation.
- **Glassmorphism utilities**: `.glass`, `.glass-dark`, `.gradient-text` are defined in `globals.css` component layer.
- **Spacing**: Use `section-padding` and `container-custom` utilities for section-level layout.

---

## Testing Requirements

All new features need coverage. Use existing tests as reference for patterns.

### Unit tests (Vitest + Testing Library)

- Test files in `src/test/`
- Components are rendered with `render()` from `@testing-library/react`
- Global mocks already set up in `setup.ts` (IntersectionObserver, ResizeObserver, localStorage, matchMedia)
- Run: `npm run test:run`

### E2E tests (Playwright)

- Test files in `tests/e2e/`
- Covers: routing, navigation, theme toggle, language switch, responsive layout
- Starts the production preview automatically through Playwright's `webServer` configuration
- CI: 2 retries, 5 browsers (Chromium, Firefox, WebKit, Pixel 5, iPhone 12)

### Coverage gate

- Coverage reports to `/coverage` (v8 + lcov)
- SonarQube reads lcov for static analysis
- Do not add dead code to pass coverage — fix coverage by fixing the code

### Dependency security

- Run `npm audit` before every commit. Any `critical` or `high` vulnerability is a blocker — do not deploy until resolved.
- Fix with `npm audit fix` (never `--force` unless you have verified the breaking change is safe).
- Dependabot PRs for security fixes should be merged promptly. After merging, run `npm ci` locally and re-run the quality gate.
- `moderate` and `low` advisories are warnings — document why they are accepted if left unfixed.

---

## SEO & Performance Constraints

This site targets **≥96/100/96/100** on Lighthouse (Perf/A11y/BP/SEO). Do not regress these thresholds.

| Constraint | Rule |
| --- | --- |
| Images | Use Astro's `<Image>` component for optimization. No unoptimized `<img>`. |
| Fonts | Self-hosted via `@fontsource/inter`. No Google Fonts (privacy + performance). |
| Bundle size | No new heavy dependencies without explicit justification. |
| Hydration | Prefer `client:visible` over `client:load` for below-fold content. |
| Sitemap | Auto-generated by `@astrojs/sitemap`. Do not manually edit sitemap. |
| Canonical | Set in `BaseLayout.astro`. Do not add duplicate canonical logic. |
| hreflang | Auto-generated in `BaseLayout.astro` for `/en/` and `/es/`. |
| Schema.org | Person JSON-LD in `BaseLayout.astro`. Update when contact info changes. |
| robots.txt | In `/public/robots.txt`. Do not disallow any routes. |

---

## Accessibility Requirements

- Semantic HTML: `<nav>`, `<main>`, `<section id="...">`, `<footer>` — no generic `<div>` soup for structure.
- All interactive elements must be keyboard navigable.
- Icon-only buttons need `sr-only` text or `aria-label`.
- Respect `prefers-reduced-motion` (already handled in `globals.css`).
- ESLint `jsx-a11y` rules are active — do not disable them.

---

## Content & Brand Voice

Carlos is an **Engineering Manager with deep technical roots** — a career that has moved through the full path from individual contributor to architect, consultant, lead, and manager, with strategic scope at each stage. Copy must convey this breadth through context and outcomes, not through title-listing. Copy must reflect:

- **Technical depth**: Reference specific technologies, patterns, and scale metrics.
- **Leadership impact**: Frame work in terms of team outcomes, business value, and organizational maturity.
- **Credibility signals**: Years of experience (since 2009), team size (~20-30), regulated domain (fintech/banking), architectural scope (cloud-native, distributed systems), consulting background (financial clients in multiple countries).
- **Career breadth signal**: The copy should convey that Carlos has worn many hats across the full engineering career path — contributor, architect, consultant, lead, manager — without listing them as titles. Show it through context and scope.
- **Strategic scope**: He has contributed to strategic technology decisions and product-technology alignment. This is accurate and can be referenced naturally without conflicting with his current role title.
- **Tone**: Confident and precise. Not modest to the point of vague. Not self-promotional to the point of cringe.

Avoid: "passionate developer", "team player", "results-driven", or any other generic LinkedIn filler.

---

## Deploy & CI/CD

- **Branch**: All production deploys from `master`
- **Workflow**: `.github/workflows/deploy.yml`
  - Job 1 (build): `withastro/action@v6` with Node 24.19.0
  - Job 2 (deploy): `actions/deploy-pages@v5`  → GitHub Pages
- **Manual trigger**: `workflow_dispatch` is enabled
- **No staging environment** — preview locally with `npm run preview`

Do not modify the workflow file without understanding the GitHub Pages OIDC token requirements (`id-token: write`, `pages: write`).

---

## What NOT to Do

- Do not add a CMS, database, or server-side runtime. This is intentionally static.
- Do not add React Context or a state management library (Zustand, Redux, etc.). Nanostores is sufficient.
- Do not add an i18n library (i18next, react-intl). The custom locale system is intentional — zero runtime overhead.
- Do not use `any` in TypeScript.
- Do not import components with relative `../../` paths — use `@/` aliases.
- Do not hardcode colors — use CSS custom properties.
- Do not remove or weaken ESLint rules.
- Do not commit build artifacts (`/dist`, `/coverage`, `.scannerwork`).
- Do not add emoji to professional copy (UI buttons/labels are fine; biography text is not).
