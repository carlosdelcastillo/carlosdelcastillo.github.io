import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://carlosdelcastillo.dev',
  integrations: [
    react(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          es: 'es',
        },
      },
    }),
  ],
  output: 'static',
  build: {
    assets: 'assets',
  },
  vite: {
    define: {
      __DATE__: `'${new Date().toISOString()}'`,
    },
  },
});
