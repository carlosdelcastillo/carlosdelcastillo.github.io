# AGENTS.md

Operational guide for agents working in this repository.

## 1) Owner Context (Always Keep in Mind)

- Owner: **Carlos del Castillo**
- Profile: **Engineering Manager & Software Architect**
- Website type: personal portfolio and professional brand site
- Primary intent: showcase technical leadership, architecture skills, and high-quality software engineering execution
- Communication scope: opportunities, collaborations, leadership, engineering managing, architecture, and fintech-oriented work

When generating or updating content:

- Keep Carlos as the central subject of the site.
- Preserve a senior, technical, and credible tone.
- Do not invent achievements, roles, employers, certifications, or dates.
- Keep messaging aligned with a personal brand for engineering leadership.

## 2) Project Goal

Carlos del Castillo personal portfolio built with **Astro + React + TypeScript**, focused on performance, accessibility, and engineering quality.

## 3) Stack and Key Structure

- Runtime: `Node.js 18+`
- Framework: `Astro 5`
- UI: `React 19`, `Tailwind CSS`, `Framer Motion`
- Client state: `nanostores`
- Quality toolchain: `ESLint`, `Prettier`, `Vitest`, `Playwright`
- i18n: typed dictionaries in `src/locales`

Important paths:

- `src/components`: React components
- `src/pages`: Astro routes
- `src/layouts`: base layout and page shell
- `src/locales`: `en/es` translations
- `src/stores`: language and theme state
- `src/test`: unit tests
- `tests/e2e`: end-to-end tests

## 4) Non-Negotiable Rules

- Keep compatibility with strict TypeScript.
- Reuse existing conventions before introducing new patterns.
- Do not add new dependencies without clear need.
- Do not break i18n: every UI string must support both `en` and `es`.
- Do not break accessibility: labels, semantics, keyboard focus, and contrast.
- For external links, use `target="_blank"` + `rel="noopener noreferrer"` when applicable.
- Generated code must be production-safe: no runtime errors, no lint/type errors, and no obvious code smells (Sonar-style quality issues).
- Any generated copy/content must stay accurate to Carlos del Castillo's professional profile.

## 5) Code Conventions

- Use `@/*` path aliases when they improve clarity.
- Keep components small and responsibilities explicit.
- Avoid `any`; if unavoidable, justify briefly in code.
- Follow repository formatting (`singleQuote`, `semi`, `printWidth: 80`).
- If UI behavior changes, verify both desktop and mobile.

## 6) Recommended Workflow

1. Understand scope and identify impacted files.
2. Implement minimal, targeted changes.
3. Run local validation.
4. Provide a concise summary with changed files and risks.

## 7) Local Validation (Required Before Closing)

Run based on impact:

```bash
npm run lint
npm run test
npm run build
```

Run Sonar analysis and ensure Quality Gate is green before closing work:

```bash
npm run sonar
```

The final state must pass Sonar Quality Gate (coverage, duplication, reliability, maintainability, and security conditions).

For critical navigation or user flows:

```bash
npm run test:e2e
```

Review SonarQube/SonarCloud code smells, bugs, or vulnerabilities.

## 8) Delivery Checklist

- The change compiles and builds successfully.
- Translations and theme behavior remain intact.
- No obvious accessibility regressions.
- Relevant tests executed (or clearly explain why not).
- Final summary includes:
  - touched files
  - new behavior
  - commands executed
  - risks or follow-ups

## 9) Avoid

- Large refactors outside current scope.
- Mixing unrelated fixes in the same change.
- Duplicating logic when a shared utility already exists.
- Leaving TODOs without context or tracking reference.
