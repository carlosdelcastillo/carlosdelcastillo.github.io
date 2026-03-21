import { atom } from 'nanostores';

export type Theme = 'light' | 'dark' | 'system';

export const themeStore = atom<Theme>('system');

export function getTheme(): Theme {
  if (globalThis.window === undefined) return 'system';
  return (globalThis.localStorage.getItem('theme') as Theme) || 'system';
}

export function setTheme(theme: Theme) {
  themeStore.set(theme);
  if (globalThis.window === undefined) return;
  
  globalThis.localStorage.setItem('theme', theme);
  applyTheme(theme);
}

export function applyTheme(theme: Theme) {
  if (globalThis.window === undefined) return;
  
  const root = globalThis.document.documentElement;
  
  if (theme === 'system') {
    const systemTheme = globalThis.window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches
      ? 'dark'
      : 'light';
    root.classList.toggle('dark', systemTheme === 'dark');
  } else {
    root.classList.toggle('dark', theme === 'dark');
  }
}

export function initializeTheme() {
  if (globalThis.window === undefined) return;
  
  const savedTheme = getTheme();
  themeStore.set(savedTheme);
  applyTheme(savedTheme);
  
  // Listen for system theme changes
  globalThis.window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', () => {
      if (themeStore.get() === 'system') {
        applyTheme('system');
      }
    });
}
