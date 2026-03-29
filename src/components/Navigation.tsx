import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Monitor } from 'lucide-react';
import {
  themeStore,
  setTheme,
  initializeTheme,
  type Theme,
} from '@/stores/theme';
import { getTranslations, type Locale } from '@/locales';

interface NavigationProps {
  readonly currentPath?: string;
  readonly initialLang?: Locale;
}

export default function Navigation({
  currentPath = '/',
  initialLang = 'en',
}: Readonly<NavigationProps>) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<Theme>('system');
  const [currentLang, setCurrentLang] = useState<Locale>(initialLang);
  const [mounted, setMounted] = useState(false);

  const translations = getTranslations(currentLang);

  useEffect(() => {
    // Initialize stores from localStorage
    initializeTheme();

    setMounted(true);

    // Initialize state from stores
    setCurrentTheme(themeStore.get());
    setCurrentLang(initialLang);

    // Subscribe to changes
    const unsubscribeTheme = themeStore.subscribe(setCurrentTheme);

    return () => {
      unsubscribeTheme();
    };
  }, [initialLang]);

  const navigation = [
    {
      name: translations.navigation.home,
      href: '#top',
    },
    {
      name: translations.navigation.about,
      href: '#about',
    },
    {
      name: translations.navigation.experience,
      href: '#experience-heading',
    },
    {
      name: translations.navigation.education,
      href: '#education',
    },
    {
      name: translations.navigation.contact,
      href: '#contact',
    },
  ];

  const handleThemeChange = (theme: Theme) => {
    setTheme(theme);
  };

  const closeMenuIfNeeded = (shouldClose: boolean) => {
    if (shouldClose) {
      setIsOpen(false);
    }
  };

  const scrollToHash = (hash: string) => {
    if (hash === '#top') {
      globalThis.window.scrollTo({ top: 0, behavior: 'smooth' });
      globalThis.window.history.replaceState({}, '', hash);
      return true;
    }

    const targetElement = document.querySelector(hash);
    if (targetElement === null) {
      return false;
    }

    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    globalThis.window.history.replaceState({}, '', hash);
    return true;
  };

  const handleNavLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    closeMobileMenu = false
  ) => {
    if (globalThis.window === undefined) {
      return;
    }

    if (href.startsWith('#')) {
      event.preventDefault();
      scrollToHash(href);
      closeMenuIfNeeded(closeMobileMenu);
      return;
    }

    const targetUrl = new URL(href, globalThis.window.location.origin);
    const targetHash = targetUrl.hash;

    if (targetHash === '') {
      closeMenuIfNeeded(closeMobileMenu);
      return;
    }

    event.preventDefault();

    const didScroll = scrollToHash(targetHash);
    if (!didScroll) {
      // Fallback when target section isn't available yet (e.g. hydration timing)
      globalThis.window.location.assign(targetUrl.toString());
    }

    closeMenuIfNeeded(closeMobileMenu);
  };

  const handleLanguageChange = (lang: Locale) => {
    setCurrentLang(lang);
    document.documentElement.lang = lang;

    // Update URL to reflect locale route
    if (globalThis.window !== undefined) {
      const currentUrl = new URL(globalThis.window.location.href);
      const strippedPath = currentUrl.pathname.replace(
        /^\/(en|es)(\/|$)/,
        '/'
      );
      const normalizedPath = strippedPath === '' ? '/' : strippedPath;
      currentUrl.pathname = `/${lang}${
        normalizedPath === '/' ? '/' : normalizedPath
      }`;
      globalThis.window.location.assign(currentUrl.toString());
    }
  };

  const themeIcons = {
    light: Sun,
    dark: Moon,
    system: Monitor,
  };

  if (!mounted) {
    return (
      <nav className="fixed top-0 z-50 w-full backdrop-blur-lg bg-background/80 border-b border-border">
        <div className="container-custom">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <a href="/" className="text-xl font-bold gradient-text">
                Carlos del Castillo
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="fixed top-0 z-50 w-full backdrop-blur-lg bg-background/80 border-b border-border">
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <a
              href={currentLang === 'es' ? '/es/' : '/en/'}
              className="text-xl font-bold gradient-text"
            >
              Carlos del Castillo
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={(event) => handleNavLinkClick(event, item.href)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  currentPath === item.href
                    ? 'text-primary'
                    : 'text-muted-foreground'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Theme & Language Controls */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Switcher */}
            <div className="flex items-center space-x-1 rounded-md border border-border p-1">
              {Object.entries(themeIcons).map(([theme, Icon]) => (
                <button
                  key={theme}
                  onClick={() => handleThemeChange(theme as Theme)}
                  className={`p-1.5 rounded transition-colors ${
                    currentTheme === theme
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-muted'
                  }`}
                  title={
                    translations.theme[theme as keyof typeof translations.theme]
                  }
                >
                  <Icon size={16} />
                </button>
              ))}
            </div>

            {/* Language Switcher */}
            <div className="flex items-center space-x-1 rounded-md border border-border p-1">
              <button
                onClick={() => handleLanguageChange('en')}
                className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
                  currentLang === 'en'
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-muted'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => handleLanguageChange('es')}
                className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
                  currentLang === 'es'
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-muted'
                }`}
              >
                ES
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-muted"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-background/95 backdrop-blur-lg"
          >
            <div className="container-custom py-4">
              <div className="flex flex-col space-y-4">
                {navigation.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={(event) =>
                      handleNavLinkClick(event, item.href, true)
                    }
                    className={`text-sm font-medium transition-colors ${
                      currentPath === item.href
                        ? 'text-primary'
                        : 'text-muted-foreground'
                    }`}
                  >
                    {item.name}
                  </motion.a>
                ))}

                {/* Mobile Theme & Language Controls */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center space-x-1">
                    {Object.entries(themeIcons).map(([theme, Icon]) => (
                      <button
                        key={theme}
                        onClick={() => handleThemeChange(theme as Theme)}
                        className={`p-2 rounded transition-colors ${
                          currentTheme === theme
                            ? 'bg-primary text-primary-foreground'
                            : 'hover:bg-muted'
                        }`}
                      >
                        <Icon size={16} />
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center space-x-1">
                    <button
                      onClick={() => handleLanguageChange('en')}
                      className={`px-3 py-1.5 text-sm font-medium rounded transition-colors ${
                        currentLang === 'en'
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-muted'
                      }`}
                    >
                      EN
                    </button>
                    <button
                      onClick={() => handleLanguageChange('es')}
                      className={`px-3 py-1.5 text-sm font-medium rounded transition-colors ${
                        currentLang === 'es'
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-muted'
                      }`}
                    >
                      ES
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
