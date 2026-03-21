import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';
import { getTranslations, type Locale } from '@/locales';
import {
  createFadeStaggerContainer,
  createFadeUpItem,
  sectionViewport,
} from '@/lib/motion';

interface EducationProps {
  readonly initialLang?: Locale;
}

export default function Education({
  initialLang = 'en',
}: Readonly<EducationProps>) {
  const translations = getTranslations(initialLang);

  const containerVariants = createFadeStaggerContainer(0.1);
  const itemVariants = createFadeUpItem(0.5, 20);

  return (
    <section id="education" className="section-padding relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="hidden md:block absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl mix-blend-screen animate-blob"></div>
        <div className="hidden md:block absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl mix-blend-screen animate-blob animation-delay-2000"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewport}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 gradient-text">
              {translations.education.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-12"></div>
            
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Academic Background */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <GraduationCap className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold">
                  {translations.education.sectionLabel}
                </h3>
              </div>

              <div className="space-y-6">
                {translations.education.items.map((item) => (
                  <motion.div
                    key={`${item.degree}-${item.school}-${item.period}`}
                    className="glass p-6 rounded-2xl border border-border/50 hover:border-blue-500/30 transition-colors duration-300 group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-foreground group-hover:text-blue-500 transition-colors mb-1">
                          {item.degree}
                        </h4>
                        <p className="text-lg font-medium text-muted-foreground mb-3">
                          {item.school}
                        </p>
                        {item.description && (
                          <p className="text-sm text-muted-foreground/80 leading-relaxed mb-4 whitespace-pre-line">
                            {item.description}
                          </p>
                        )}
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/50 text-xs font-medium text-secondary-foreground">
                          <Calendar className="w-3 h-3 mr-2" />
                          {item.period}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
