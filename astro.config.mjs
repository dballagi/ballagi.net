import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import { rm } from 'fs/promises';

// ASTRO_SITE and ASTRO_OUT_DIR are set in .env.local (gitignored)
const { ASTRO_OUT_DIR, ASTRO_SITE } = loadEnv('', process.cwd(), 'ASTRO');

export default defineConfig({
  site: ASTRO_SITE,
  base: '/',
  outDir: ASTRO_OUT_DIR || 'dist',
  compressHTML: true,
  build: {
    inlineStylesheets: 'never',
  },
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark-dimmed',
      },
      defaultColor: false,
    },
  },
  integrations: [
    {
      name: 'clean-content-layer',
      hooks: {
        'astro:build:done': async ({ dir }) => {
          await rm(new URL('collections', dir), { recursive: true, force: true });
          await rm(new URL('content-assets.mjs', dir), { force: true });
          await rm(new URL('content-modules.mjs', dir), { force: true });
        },
      },
    },
  ],
});
