import { en } from './en';
import { es } from './es';
import type { Translations } from '@/types/translations';

export const locales = {
  en,
  es,
} as const;

export type Locale = keyof typeof locales;

export function getTranslations(locale: Locale): Translations {
  return locales[locale];
}
