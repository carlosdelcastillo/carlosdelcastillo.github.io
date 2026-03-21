import { beforeEach, describe, expect, test, vi } from 'vitest';
import {
  applyTheme,
  getTheme,
  initializeTheme,
  setTheme,
  themeStore,
} from '@/stores/theme';

describe('theme store', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    document.documentElement.className = '';
    themeStore.set('system');
  });

  test('reads saved theme from storage', () => {
    vi.mocked(globalThis.localStorage.getItem).mockReturnValue('dark');

    expect(getTheme()).toBe('dark');
  });

  test('setTheme persists and applies dark class', () => {
    setTheme('dark');

    expect(themeStore.get()).toBe('dark');
    expect(globalThis.localStorage.setItem).toHaveBeenCalledWith('theme', 'dark');
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  test('applyTheme uses system preference', () => {
    vi.mocked(globalThis.matchMedia).mockReturnValue({
      matches: true,
      media: '(prefers-color-scheme: dark)',
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    });

    applyTheme('system');

    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  test('initializeTheme hydrates and attaches listener', () => {
    const addEventListener = vi.fn();
    vi.mocked(globalThis.localStorage.getItem).mockReturnValue('light');
    vi.mocked(globalThis.matchMedia).mockReturnValue({
      matches: false,
      media: '(prefers-color-scheme: dark)',
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener,
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    });

    initializeTheme();

    expect(themeStore.get()).toBe('light');
    expect(addEventListener).toHaveBeenCalledWith('change', expect.any(Function));
  });

  test('initializeTheme reacts to system theme changes when mode is system', () => {
    const addEventListener = vi.fn();

    vi.mocked(globalThis.localStorage.getItem).mockReturnValue('system');
    vi.mocked(globalThis.matchMedia).mockReturnValue({
      matches: true,
      media: '(prefers-color-scheme: dark)',
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener,
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    });

    initializeTheme();

    const listener = addEventListener.mock.calls[0]?.[1] as () => void;
    expect(listener).toBeDefined();

    themeStore.set('system');
    listener();

    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });
});
