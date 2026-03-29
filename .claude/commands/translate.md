Perform a full i18n audit between `src/locales/en.ts` and `src/locales/es.ts`.

Steps:
1. Read both locale files and `src/types/translations.ts` to understand the full key structure.
2. Compare every key and nested key between EN and ES.
3. Report:
   - Keys present in EN but missing in ES
   - Keys present in ES but missing in EN
   - Keys where the ES value appears to be an untranslated copy of the EN value (same string, not a proper name or brand)
   - Keys where the value is empty or placeholder text
4. For any missing or untranslated keys, propose the Spanish translation — maintain the professional tone of the existing copy (confident, technical, leadership-focused — no generic filler).
5. Apply the fixes to `es.ts` only after presenting the proposed translations for review.
6. Run `npm run build` to confirm TypeScript parity is maintained.
