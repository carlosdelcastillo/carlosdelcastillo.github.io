import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, TrendingUp, Landmark, Rows4 } from 'lucide-react';
import { getTranslations, type Locale } from '@/locales';
import {
  createFadeStaggerContainer,
  createFadeXItem,
  sectionViewport,
} from '@/lib/motion';

interface ExperienceProps {
  readonly initialLang?: Locale;
}

export default function Experience({
  initialLang = 'en',
}: Readonly<ExperienceProps>) {
  const translations = getTranslations(initialLang);

  const experiences = [
    {
      ...translations.experience.companies.myinvestor,
      logo: '/logos/MyInvestor.png',
      color: 'from-blue-500 to-cyan-500',
      metrics: [
        { icon: Users, label: '1 -> ~25 Engineers', value: 'Team Scaling' },
        { icon: TrendingUp, label: '850K+ Clients', value: 'Users Served' },
        { icon: Landmark, label: '15MM €', value: 'Total Business Volume' },
      ],
    },
    {
      ...translations.experience.companies.nfq,
      logo: '/logos/nfq.png',
      color: 'from-green-500 to-emerald-500',
      metrics: [
        { icon: TrendingUp, label: '40% Faster', value: 'Delivery' },
        { icon: Users, label: '15+ Engineers', value: 'Team Size' },
      ],
    },
    {
      ...translations.experience.companies.deyde,
      logo: '/logos/deyde.png',
      color: 'from-purple-500 to-violet-500',
      metrics: [
        { icon: MapPin, label: '6 Countries', value: 'Expansion' },
        { icon: Rows4, label: '10MM+ Records', value: 'Data Processed' },
      ],
    },
  ];

  const containerVariants = createFadeStaggerContainer(0.12);
  const itemVariants = createFadeXItem(0.5, -30);

  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewport}
        >
          {/* Quote */}
          <motion.blockquote 
            variants={itemVariants}
            className="relative max-w-3xl mx-auto p-8 mb-20 text-center"
          >
            <div className="absolute top-0 left-0 text-6xl text-blue-500/20 font-serif">"</div>
            <p className="text-xl md:text-2xl font-light italic text-foreground/80 leading-relaxed mb-4">
              Simplicity is prerequisite for reliability.
            </p>
            <footer className="text-sm font-medium text-primary uppercase tracking-widest">
              — Edsger W. Dijkstra
            </footer>
            <div className="absolute bottom-0 right-0 text-6xl text-purple-500/20 font-serif rotate-180">"</div>
          </motion.blockquote>

          {/* Section Title */}
          <motion.div
            id="experience-heading"
            variants={itemVariants}
            className="text-center mb-16 scroll-mt-24 md:scroll-mt-28"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 gradient-text">
              {translations.experience.title}
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 rounded-full"></div>

            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.name}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-background border-4 border-primary rounded-full z-10"></div>

                  {/* Content card */}
                  <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <motion.div
                      className="glass p-6 rounded-2xl border border-border/50 relative overflow-hidden"
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Background gradient */}
                      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${experience.color} opacity-10 rounded-full blur-2xl`}></div>
                      
                      <div className="relative z-10">
                        {/* Company header */}
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold mb-1">{experience.name}</h3>
                            <p className="text-lg font-medium text-primary mb-2">{experience.position}</p>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Calendar className="w-4 h-4 mr-2" />
                              {experience.period}
                            </div>
                          </div>
                          {/* Company logo */}
                          <div className="w-12 h-12 flex items-center justify-center">
                            <img src={experience.logo} alt={experience.name} className="w-full h-full object-contain" />
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {experience.description}
                        </p>

                        {/* Metrics */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          {experience.metrics.map((metric) => (
                            <div
                              key={`${metric.label}-${metric.value}`}
                              className="text-center"
                            >
                              <div className="flex items-center justify-center mb-2">
                                <metric.icon className="w-5 h-5 text-primary" />
                              </div>
                              <div className="text-sm font-medium">{metric.label}</div>
                              <div className="text-xs text-muted-foreground">{metric.value}</div>
                            </div>
                          ))}
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="text-sm font-medium mb-2">
                            {translations.experience.technologiesLabel}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-1 text-xs bg-muted rounded-full border border-border/50"
                              >
                                {tech}
                              </span>
                              ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Year indicator for larger screens */}
                  <div className="hidden md:block w-2/12">
                    <div className={`text-center ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div className="text-2xl font-bold text-primary">
                        {experience.period.split(' - ')[0]}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <motion.a
              href="#contact"
              className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {translations.common.learnMore}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
