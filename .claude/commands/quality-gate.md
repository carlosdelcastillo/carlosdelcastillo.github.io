Pre-deploy validation. Run this after finishing any change, before commit + push. Covers the full quality stack: static analysis, unit tests, coverage, Lighthouse, and E2E.

Execute each phase in order. On critical failure, stop and report — do not continue to later phases.

---

## Phase 1 — Build & static analysis

1. Run `npm run build`. Zero errors required.
2. Run `npm run typecheck`. Zero TypeScript errors required.
3. Run `npm run lint`. Errors are blockers; warnings are informational.

---

## Phase 2 — Unit tests & coverage

4. Run `npm run coverage`.
5. Read `coverage/coverage-summary.json` and validate:
   - Lines ≥ 80%
   - Functions ≥ 80%
   - Branches ≥ 70%
   - Statements ≥ 80%
6. Report actual percentages for each metric.

---

## Phase 3 — Lighthouse (preview server)

7. Start `npm run preview` in the background.
8. Wait 3 seconds.
9. Run Lighthouse against both routes:
   - `npx lighthouse http://localhost:4321/en/ --output=json --output-path=./lighthouse-en.json --chrome-flags="--headless --no-sandbox" --quiet`
   - `npx lighthouse http://localhost:4321/es/ --output=json --output-path=./lighthouse-es.json --chrome-flags="--headless --no-sandbox" --quiet`
10. Extract and validate scores from both JSON reports:
    - Performance ≥ 95
    - Accessibility = 100
    - Best Practices ≥ 90
    - SEO = 100
11. Kill the preview server. Delete `lighthouse-en.json` and `lighthouse-es.json`.

---

## Phase 4 — E2E tests (dev server)

12. Start `npm run dev` in the background.
13. Wait 5 seconds.
14. Run `npm run test:e2e`. All tests must pass across all configured browsers.
15. Kill the dev server.

---

## Phase 5 — SonarQube analysis

16. Coverage must have run first (Phase 2 generates `coverage/lcov.info` required by Sonar).
17. Run `npx sonar-scanner`. This reads `sonar-project.properties` for config.
18. Check the scanner output for:
    - Any `BLOCKER` or `CRITICAL` issues → hard failure
    - Any `MAJOR` issues → report as warnings
    - Quality Gate status if available in the output
19. If the scanner fails to connect (Sonar server not running), report it as a warning — do not block the gate, but note that Sonar validation was skipped.

---

## Phase 6 — Dependency security audit

20. Run `npm audit --json` and parse the output:
    - Count vulnerabilities by severity: `critical`, `high`, `moderate`, `low`.
    - Any `critical` or `high` severity → **hard failure**. Stop and report the package name, CVE/advisory, and the fix command.
    - `moderate` or `low` → report as warnings, do not block.
21. If there are fixable `critical`/`high` issues, run `npm audit fix` (never `--force`) and re-run the build to confirm nothing broke.

---

## Phase 7 — Bundle audit

22. List JS files in `dist/assets/` by size (descending). Flag any chunk over 50KB uncompressed.
23. Report total JS weight.

---

## Final report

```
QUALITY GATE
──────────────────────────────────────────────────
Build & static analysis    [PASS]
Unit tests & coverage      [PASS]  Lines 87% · Branches 74% · Fns 91%
Lighthouse /en/            [PASS]  Perf 100 · A11y 100 · BP 96 · SEO 100
Lighthouse /es/            [PASS]  Perf 100 · A11y 100 · BP 96 · SEO 100
E2E tests                  [PASS]  42 passed · 5 browsers
SonarQube                  [PASS]  0 blockers · 0 critical · 2 major
Security audit             [PASS]  0 critical · 0 high · 3 moderate
Bundle                     [PASS]  Total JS 38 KB
──────────────────────────────────────────────────
READY TO COMMIT & DEPLOY
```

If any phase fails, list specific errors and fixes before the summary. Do not show "READY TO COMMIT & DEPLOY" until all phases pass.
