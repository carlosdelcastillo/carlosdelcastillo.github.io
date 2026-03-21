import React from 'react';
import { motion } from 'framer-motion';
import { getTranslations, type Locale } from '@/locales';
import { Server, Cloud, Users, Rocket } from 'lucide-react';
import {
  createFadeStaggerContainer,
  createFadeUpItem,
  sectionViewport,
} from '@/lib/motion';

interface AboutProps {
  readonly initialLang?: Locale;
}

export default function About({ initialLang = 'en' }: Readonly<AboutProps>) {
  const translations = getTranslations(initialLang);

  const containerVariants = createFadeStaggerContainer(0.1);
  const itemVariants = createFadeUpItem(0.5, 20);

  const categoryVisuals = [
    { Icon: Server, iconColorClass: 'text-blue-500' },
    { Icon: Cloud, iconColorClass: 'text-cyan-500' },
    { Icon: Users, iconColorClass: 'text-green-500' },
  ] as const;

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] -z-10" />
      <div className="hidden md:block absolute top-20 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl -z-10" />

      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewport}
          className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start"
        >
          {/* Main Content - Left Column */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
                {translations.about.title}
                <span className="text-primary">.</span>
              </h2>
            </motion.div>
            
            <motion.div variants={itemVariants} className="space-y-6">
              {translations.about.content.map((paragraph) => (
                <p 
                  key={paragraph}
                  className="text-lg text-muted-foreground leading-relaxed border-l-2 border-primary/20 pl-6"
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>

            {/* Quick Stats / Highlights */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6"
            >
              {translations.about.quickStats.map((stat) => (
                <div key={`${stat.label}-${stat.value}`} className="glass p-4 rounded-xl border-border/40 text-center">
                   <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                   <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Quote removed */}
          </div>

          {/* Sidebar / Skills - Right Column */}
          <div className="lg:col-span-5 space-y-10 relative">
            <motion.div variants={itemVariants} className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
                <Rocket className="w-4 h-4" />
                <span>{translations.about.coreExpertise.title}</span>
              </div>

              <div className="space-y-10">
                {translations.about.coreExpertise.categories.map((category, idx) => {
                  const visual = categoryVisuals[idx] ?? categoryVisuals[2];
                  const { Icon, iconColorClass } = visual;

                  return (
                  <div
                    key={category.title}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-secondary/50 ring-1 ring-border/50">
                        <Icon className={`w-5 h-5 ${iconColorClass}`} />
                      </div>
                      <h3 className="font-semibold text-lg">{category.title}</h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-2.5 pl-2">
                      {category.skills.map((skill) => (
                        <span 
                          key={skill}
                          className="px-3 py-1.5 text-sm rounded-md bg-muted/40 text-muted-foreground border border-border/40 transition-colors hover:bg-primary/5 hover:text-primary hover:border-primary/20 cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )})}
              </div>
            </motion.div>
            
            {/* Decorative connection line */}
            <div className="absolute left-[19px] top-16 bottom-10 w-px bg-gradient-to-b from-border/80 via-border/20 to-transparent -z-10 hidden md:block" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
