import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Mail } from 'lucide-react';
import { getTranslations, type Locale } from '@/locales';
import {
  DevToIcon,
  GithubIcon,
  LinkedinIcon,
  MediumIcon,
  XIcon,
} from '@/components/icons/SocialIcons';

interface FooterProps {
  readonly initialLang?: Locale;
}

export default function Footer({ initialLang = 'en' }: Readonly<FooterProps>) {
  const translations = getTranslations(initialLang);
  const repositoryUrl =
    'https://github.com/carlosdelcastillo/carlosdelcastillo.github.io';

  const socialLinks = [
    {
      icon: Mail,
      href: 'mailto:carlosdelcastilloortiz@gmail.com?subject=Let\'s talk about a possible collaboration',
      label: 'Email',
    },
    {
      icon: LinkedinIcon,
      href: 'https://linkedin.com/in/carlosdelcastilloortiz',
      label: 'LinkedIn',
    },
    {
      icon: GithubIcon,
      href: 'https://github.com/carlosdelcastillo',
      label: 'GitHub',
    },
    {
      icon: XIcon,
      href: 'https://x.com/_cdelcastillo_',
      label: 'X',
    },
    {
      icon: MediumIcon,
      href: 'https://medium.com/@carlosdelcastillo',
      label: 'Medium',
    },
    {
      icon: DevToIcon,
      href: 'https://dev.to/carlosdelcastillo',
      label: 'Dev.to',
    },
  ];

  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    if (globalThis.window === undefined) {
      return;
    }

    globalThis.window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container-custom py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Main footer content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <button
                onClick={scrollToTop}
                className="text-xl font-bold gradient-text hover:opacity-80 transition-opacity text-left"
              >
                Carlos del Castillo
              </button>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {translations.footer.brandDescription}
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold">
                {translations.footer.quickLinksTitle}
              </h4>
              <nav className="flex flex-col space-y-2">
                <a
                  href="#about"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {translations.navigation.about}
                </a>
                <a
                  href="#experience-heading"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {translations.navigation.experience}
                </a>
                <a
                  href="#contact"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {translations.navigation.contact}
                </a>
              </nav>
            </div>

            {/* Connect */}
            <div className="space-y-4">
              <h4 className="font-semibold">{translations.footer.connectTitle}</h4>
              <div className="grid grid-cols-6 gap-2">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={
                      link.href.startsWith('http')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                    className="p-2 rounded-lg border border-border hover:bg-muted transition-colors flex items-center justify-center"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    title={link.label}
                  >
                    <link.icon className="w-5 h-5" />
                    <span className="sr-only">{link.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-border/40 flex flex-col items-center gap-3 text-center">
            <div className="text-sm text-muted-foreground/80 transition-colors hover:text-foreground">
              <span>© {currentYear} Carlos del Castillo. </span>
              <span>{translations.footer.rights}</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground/60 transition-colors hover:text-foreground">
              <span>{translations.footer.builtWith}</span>
              <span>{translations.footer.hostingPrefix} </span>
              <a
                href={repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-primary transition-colors"
              >
                {translations.footer.repositoryLabel}
              </a>
              <span> {translations.footer.hostingSuffix}</span>
              <Heart className="w-3.5 h-3.5 text-red-500 fill-current animate-pulse" />
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
