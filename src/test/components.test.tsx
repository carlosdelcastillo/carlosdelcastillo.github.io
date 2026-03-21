import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import { getTranslations } from '@/locales';

describe('Core components', () => {
  test('renders Hero content in Spanish with localized CTA links', () => {
    const t = getTranslations('es');
    render(<Hero initialLang="es" />);

    expect(screen.getByText(t.hero.greeting)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: t.hero.cta.about })).toHaveAttribute(
      'href',
      '#about'
    );
    expect(screen.getByRole('link', { name: t.hero.cta.experience })).toHaveAttribute(
      'href',
      '#experience-heading'
    );
    expect(screen.getByRole('link', { name: t.hero.cta.contact })).toHaveAttribute(
      'href',
      '#contact'
    );
  });

  test('renders About section localized labels and quick stats', () => {
    const t = getTranslations('en');
    render(<About initialLang="en" />);

    expect(screen.getByText(t.about.title)).toBeInTheDocument();
    expect(screen.getByText(t.about.quickStats[0].value)).toBeInTheDocument();
    expect(screen.getByText(t.about.coreExpertise.title)).toBeInTheDocument();
    expect(
      screen.getByText(t.about.coreExpertise.categories[0].title)
    ).toBeInTheDocument();
  });

  test('renders Experience timeline cards and CTA', () => {
    const t = getTranslations('en');
    render(<Experience initialLang="en" />);

    expect(screen.getByText(t.experience.title)).toBeInTheDocument();
    expect(
      screen.getByText(t.experience.companies.myinvestor.name)
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: t.common.learnMore })
    ).toHaveAttribute('href', '#contact');
  });

  test('renders Education entries in Spanish', () => {
    const t = getTranslations('es');
    render(<Education initialLang="es" />);

    expect(screen.getByText(t.education.title)).toBeInTheDocument();
    expect(screen.getByText(t.education.items[0].degree)).toBeInTheDocument();
  });

  test('renders Contact section with main channels and links', () => {
    const t = getTranslations('en');
    render(<Contact initialLang="en" />);

    expect(screen.getByText(t.contact.title)).toBeInTheDocument();
    expect(screen.getByText(t.contact.subtitle)).toBeInTheDocument();

    const linkedinLink = screen.getAllByRole('link', { name: /LinkedIn/i })[0];
    expect(linkedinLink).toHaveAttribute('href', expect.stringContaining('linkedin.com'));
  });

  test('renders Footer localized navigation and legal text', () => {
    const t = getTranslations('es');
    render(<Footer initialLang="es" />);

    expect(screen.getByRole('link', { name: t.navigation.about })).toHaveAttribute(
      'href',
      '#about'
    );
    expect(screen.getByRole('link', { name: t.navigation.experience })).toHaveAttribute(
      'href',
      '#experience-heading'
    );
    expect(screen.getByRole('link', { name: t.navigation.contact })).toHaveAttribute(
      'href',
      '#contact'
    );
    expect(screen.getByText(t.footer.rights)).toBeInTheDocument();
    expect(screen.getByText(t.footer.builtWith)).toBeInTheDocument();
    expect(screen.getByText(t.footer.hostingPrefix)).toBeInTheDocument();
    expect(screen.getByText(t.footer.hostingSuffix)).toBeInTheDocument();
    const repositoryLink = screen
      .getAllByRole('link', { name: t.footer.repositoryLabel })
      .find(
        (link) =>
          link.getAttribute('href') ===
          'https://github.com/carlosdelcastillo/carlosdelcastillo.github.io'
      );
    expect(repositoryLink).toBeDefined();
  });

  test('renders Navigation with locale-aware links and language controls', async () => {
    const t = getTranslations('es');
    render(<Navigation initialLang="es" currentPath="/es/" />);

    await waitFor(() => {
      expect(screen.getByRole('link', { name: t.navigation.home })).toHaveAttribute(
        'href',
        '#top'
      );
    });

    expect(screen.getByRole('link', { name: t.navigation.about })).toHaveAttribute(
      'href',
      '#about'
    );
    expect(screen.getByRole('button', { name: 'EN' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'ES' })).toBeInTheDocument();
  });

  test('navigation switches language and triggers route navigation', async () => {
    render(<Navigation initialLang="en" currentPath="/en/" />);

    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'ES' })).toBeInTheDocument();
    });

    fireEvent.click(screen.getByRole('button', { name: 'ES' }));
    expect(document.documentElement.lang).toBe('es');
  });

  test('navigation opens mobile menu and toggles theme', async () => {
    const t = getTranslations('en');

    render(<Navigation initialLang="en" currentPath="/en/" />);

    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'EN' })).toBeInTheDocument();
    });

    fireEvent.click(screen.getByRole('button', { name: t.theme.dark }));
    expect(globalThis.localStorage.setItem).toHaveBeenCalledWith('theme', 'dark');

    const mobileToggle = screen.getAllByRole('button').find((button) =>
      button.querySelector('svg') !== null
    );

    expect(mobileToggle).toBeDefined();
    fireEvent.click(mobileToggle!);

    expect(
      screen.getByRole('link', { name: t.navigation.education })
    ).toBeInTheDocument();
  });

  test('navigation handles hash scrolling and closes mobile menu on link click', async () => {
    const t = getTranslations('en');
    const scrollToSpy = vi
      .spyOn(globalThis.window, 'scrollTo')
      .mockImplementation(() => undefined);
    const replaceStateSpy = vi
      .spyOn(globalThis.window.history, 'replaceState')
      .mockImplementation(() => undefined);

    const aboutSection = document.createElement('section');
    aboutSection.id = 'about';
    aboutSection.scrollIntoView = vi.fn();
    document.body.appendChild(aboutSection);

    render(<Navigation initialLang="en" currentPath="/en/" />);

    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'EN' })).toBeInTheDocument();
    });

    fireEvent.click(screen.getByRole('link', { name: t.navigation.home }));
    expect(scrollToSpy).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
    expect(replaceStateSpy).toHaveBeenCalledWith({}, '', '#top');

    fireEvent.click(screen.getByRole('link', { name: t.navigation.about }));
    expect(aboutSection.scrollIntoView).toHaveBeenCalledWith({
      behavior: 'smooth',
      block: 'start',
    });
    expect(replaceStateSpy).toHaveBeenCalledWith({}, '', '#about');

    const mobileToggle = screen.getAllByRole('button').find((button) =>
      button.className.includes('md:hidden') ||
      button.className.includes('p-2 rounded-md')
    );
    expect(mobileToggle).toBeDefined();

    fireEvent.click(mobileToggle!);
    expect(screen.getAllByRole('link', { name: t.navigation.education })).toHaveLength(2);

    fireEvent.click(screen.getAllByRole('link', { name: t.navigation.education })[1]);
    expect(replaceStateSpy).toHaveBeenCalledTimes(2);

    aboutSection.remove();
    scrollToSpy.mockRestore();
    replaceStateSpy.mockRestore();
  });

  test('footer brand button scrolls to top', () => {
    const scrollToSpy = vi
      .spyOn(globalThis.window, 'scrollTo')
      .mockImplementation(() => undefined);

    render(<Footer initialLang="en" />);
    fireEvent.click(screen.getByRole('button', { name: 'Carlos del Castillo' }));

    expect(scrollToSpy).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
    scrollToSpy.mockRestore();
  });
});
