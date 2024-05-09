import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://yuheijotaki.github.io',
  base: '/astro-view-transitions',
  server: {
    host: true,
    open: true,
  },
});
