// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://jay-kim-kor.github.io',
  base: '/career-hub-blog',
  integrations: [tailwind(), mdx(), sitemap(), react()],
  output: 'static',
});
