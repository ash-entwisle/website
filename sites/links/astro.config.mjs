// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

import { Config } from '../../src/config';

// https://astro.build/config
export default defineConfig({
  site: Config.websites?.find((site) => site.link === "links")?.href,
  adapter: cloudflare(),
  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()]
  }
});
