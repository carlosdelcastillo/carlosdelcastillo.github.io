import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import { getTranslations, type Locale } from '@/locales';
import {
  createFadeStaggerContainer,
  createFadeUpItem,
  sectionViewport,
} from '@/lib/motion';
import {
  DevToIcon,
  GithubIcon,
  LinkedinIcon,
  MediumIcon,
  XIcon,
} from '@/components/icons/SocialIcons';

interface ContactProps {
  readonly initialLang?: Locale;
}

export default function Contact({
  initialLang = 'en',
}: Readonly<ContactProps>) {
  const translations = getTranslations(initialLang);
  const emailSubject = translations.contact.emailSubject;

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'carlosdelcastilloortiz@gmail.com',
      href: `mailto:carlosdelcastilloortiz@gmail.com?subject=${encodeURIComponent(emailSubject)}`,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: LinkedinIcon,
      label: 'LinkedIn',
      value: 'carlosdelcastilloortiz',
      href: 'https://linkedin.com/in/carlosdelcastilloortiz',
      gradient: 'from-blue-600 to-blue-700',
    },
    {
      icon: GithubIcon,
      label: 'GitHub',
      value: 'carlosdelcastillo',
      href: 'https://github.com/carlosdelcastillo',
      gradient: 'from-gray-700 to-gray-900',
    },
    {
      icon: XIcon,
      label: 'X',
      value: '@_cdelcastillo_',
      href: 'https://x.com/_cdelcastillo_',
      gradient: 'from-gray-800 to-gray-950',
    },
    {
      icon: MediumIcon,
      label: 'Medium',
      value: '@carlosdelcastillo',
      href: 'https://medium.com/@carlosdelcastillo',
      gradient: 'from-gray-700 to-gray-900',
    },
    {
      icon: DevToIcon,
      label: 'Dev.to',
      value: 'carlosdelcastillo',
      href: 'https://dev.to/carlosdelcastillo',
      gradient: 'from-gray-800 to-gray-950',
    },
  ];

  const containerVariants = createFadeStaggerContainer(0.2);
  const itemVariants = createFadeUpItem(0.6, 30);

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewport}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 gradient-text">
              {translations.contact.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {translations.contact.subtitle}
            </p>
          </motion.div>

          {/* CTA Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.div
              className="glass p-8 rounded-2xl border border-border/50 relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Background effects */}
              <div className="hidden md:block absolute top-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
              <div className="hidden md:block absolute bottom-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">
                  {translations.contact.cta}
                </h3>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  {translations.contact.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    href={`mailto:carlosdelcastilloortiz@gmail.com?subject=${encodeURIComponent(emailSubject)}`}
                    className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail className="mr-3 h-5 w-5" />
                    {translations.contact.emailButton}
                  </motion.a>

                  <motion.a
                    href="https://www.linkedin.com/in/carlosdelcastilloortiz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-lg border border-border hover:bg-muted transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <LinkedinIcon className="mr-3 h-5 w-5" />
                    {translations.contact.linkedinButton}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="pt-8 border-t border-border/50"
          >
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                {translations.contact.location}
              </div>
            </div>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-3 mt-12 gap-6 mb-16"
          >
            {contactMethods.map((method) => (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={
                  method.href.startsWith('http')
                    ? 'noopener noreferrer'
                    : undefined
                }
                className="group glass p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 block"
                whileHover={{ scale: 1.05, y: -10 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative">
                  {/* Background gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                  ></div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${method.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      <method.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Label */}
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {method.label}
                    </h3>

                    {/* Value */}
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                      {method.value}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
