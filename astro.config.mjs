import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import react from '@astrojs/react';

export default defineConfig({
  output: 'static', // 'static' defaults to SSG, 'server' defaults to SSR
  integrations: [
    sanity({
      projectId: 'rpn9i1z1',
      dataset: 'production',
      apiVersion: '2026-10-01',
      useCdn: false,
    }),
    react(),
  ],
});
