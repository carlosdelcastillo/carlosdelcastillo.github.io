import { describe, it, expect, beforeEach, vi } from 'vitest';
import { getTranslations } from '@/locales';

describe('locales', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('returns english translations', () => {
    const translations = getTranslations('en');
    expect(translations.navigation.home).toBe('Home');
  });

  it('returns spanish translations', () => {
    const translations = getTranslations('es');
    expect(translations.navigation.home).toBe('Inicio');
  });
});
