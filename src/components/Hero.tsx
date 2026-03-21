import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { getTranslations, type Locale } from '@/locales';
import {
  createFadeStaggerContainer,
  createFadeUpItem,
} from '@/lib/motion';

function LinkedInIcon(props: Readonly<React.SVGProps<SVGSVGElement>>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M22.225 0H1.771C0.792 0 0 0.774 0 1.729v20.542C0 23.227 0.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0h0.003zM7.119 20.452H3.56V9h3.559v11.452zM5.339 7.433c-1.139 0-2.063-0.925-2.063-2.063 0-1.139 0.925-2.063 2.063-2.063s2.063 0.924 2.063 2.063c0 1.138-0.924 2.063-2.063 2.063zM20.452 20.452h-3.555v-5.569c0-1.328-0.027-3.037-1.852-3.037-1.853 0-2.137 1.447-2.137 2.939v5.667h-3.555V9h3.413v1.561h0.049c0.476-0.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z" />
    </svg>
  );
}

interface HeroProps {
  readonly initialLang?: Locale;
}

export default function Hero({ initialLang = 'en' }: Readonly<HeroProps>) {
  const translations = getTranslations(initialLang);
  const isSpanish = initialLang === 'es';
  const emailSubject = isSpanish
    ? 'Hablemos sobre una posible colaboración'
    : "Let's talk about a possible collaboration";

  const containerVariants = createFadeStaggerContainer(0.3, 0.2);
  const itemVariants = createFadeUpItem(0.8, 30);

  return (
    <section className="min-h-screen pt-24 md:pt-28 flex items-center justify-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="mb-8 flex justify-center"
          >
            <div className="relative w-40 h-40 md:w-52 md:h-52">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-3xl rotate-6 opacity-20 animate-pulse"></div>
              <img
                src="/profile-cropped.png"
                alt="Carlos del Castillo"
                width={208}
                height={208}
                className="w-full h-full object-cover object-[center_42%] md:object-center rounded-2xl shadow-2xl border-4 border-background relative z-10 transform transition-transform hover:scale-105 duration-300"
              />
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="gradient-text">{translations.hero.greeting}</span>
          </motion.h1>

          {/* Description */}
          <motion.div
            variants={itemVariants}
            className="mb-12 max-w-3xl mx-auto space-y-4"
          >
            {translations.hero.description.map((paragraph) => (
              <p
                key={paragraph}
                className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.a
              href="#about"
              className="group inline-flex items-center px-8 py-4 text-lg font-medium rounded-lg border border-border hover:bg-muted transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {translations.hero.cta.about}
            </motion.a>

            <motion.a
              href="#experience-heading"
              className="group inline-flex items-center px-8 py-4 text-lg font-medium rounded-lg border border-border hover:bg-muted transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {translations.hero.cta.experience}
            </motion.a>

            <motion.a
              href="#contact"
              className="group inline-flex items-center px-8 py-4 text-lg font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {translations.hero.cta.contact}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-6 -mt-1"
          >
            <motion.a
              href="https://linkedin.com/in/carlosdelcastilloortiz"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-full border border-primary/25 bg-background/80 text-foreground shadow-sm hover:bg-primary/5 hover:border-primary/40 transition-colors"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <LinkedInIcon className="h-7 w-7" />
              <span className="sr-only">LinkedIn</span>
            </motion.a>

            <motion.a
              href={`mailto:carlosdelcastilloortiz@gmail.com?subject=${encodeURIComponent(emailSubject)}`}
              className="p-3.5 rounded-full border border-primary/25 bg-background/80 text-foreground shadow-sm hover:bg-primary/5 hover:border-primary/40 transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="h-7 w-7" />
              <span className="sr-only">Email</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.8 }}
        className="pointer-events-none absolute inset-x-0 z-20 flex justify-center bottom-[calc(env(safe-area-inset-bottom)+4.5rem)] md:bottom-8"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" as const }}
          className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" as const }}
            className="w-1 h-3 bg-muted-foreground rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
