Audit all portfolio copy for professional quality and brand consistency.

Carlos's positioning: Engineering Manager with 15+ years spanning software development, architecture, consulting, and team leadership — specializing in fintech, platform engineering, and regulated environments. His career path covers the full spectrum from hands-on engineering and consulting through development lead to engineering management, with strategic scope on technology direction and product alignment.

Read `src/locales/en.ts` and `src/locales/es.ts`, then evaluate each section:

**Hero**
- Does the description convey breadth of experience (engineering depth + consulting + leadership) without feeling like a job listing?
- Is it direct enough to earn attention in the first two sentences?

**About**
- Do the paragraphs reflect the full career arc naturally — not just the current role?
- Is the consulting background present without being oversold?
- Are the quick stats specific and credible (avoid vague claims)?
- Does the expertise grid reflect real skills across architecture, cloud, and leadership?

**Experience**
- Does each description lead with impact and scope, not task lists?
- Is the consulting dimension of Nfq and Deyde visible in the descriptions?
- Are technology lists accurate and current?
- Does the progression across companies read naturally?

**Education**
- Are descriptions proportionate — education supports the profile, it doesn't lead it?

**Contact**
- Does the CTA invite a genuine conversation rather than signal availability?
- Is the tone consistent with someone whose work speaks for itself?

**Footer**
- Does the tagline reinforce the professional brand concisely?

**README.md**

Read `README.md` in full, then cross-reference with `package.json`, `.nvmrc`, and the actual `src/` directory tree.

*Copy & brand:*

- Does the tagline and overview description reflect the current professional positioning (EM + deep technical background, fintech, regulated)?
- Do the Overview bullets and Key Features accurately describe what the site does — no stale claims, no missing capabilities?
- Is the contact quote at the bottom consistent in tone with the rest of the portfolio copy?
- Are there any generic filler phrases ("always happy to discuss", "let's connect") that should be tightened?

*Technical accuracy:*

- Every version badge (Astro, React, TypeScript, Tailwind, Framer Motion, Vitest, Playwright) must match the actual version in `package.json`. Flag any mismatch.
- The Node.js requirement in "Getting Started" must match the version in `.nvmrc`.
- Any `npm run <script>` mentioned in the README must exist in `package.json` scripts.
- The project structure diagram must reflect the actual `src/` directory tree: every listed directory must exist, every existing directory must be listed, and inline descriptions must still be accurate.
- No claim should contradict `CLAUDE.md` (e.g. claiming a CMS, an i18n library, or a state management library that is not used).
- The contact links (email, LinkedIn, GitHub, X/Twitter) must match those in `src/locales/en.ts`.

For each issue found, propose a specific improved version of the copy. Do not rewrite wholesale — surgical improvements only. After review, apply approved changes to `en.ts` and `es.ts` (locale changes) or `README.md` (README changes).
