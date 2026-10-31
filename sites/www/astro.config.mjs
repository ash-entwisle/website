// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';
import { Config } from '../../src/config';

// https://astro.build/config
export default defineConfig({
  site: Config.websites?.find((site) => site.link === "www")?.href,
  adapter: cloudflare(),
  integrations: [sitemap(), mdx()],

  vite: {
    plugins: [tailwindcss()]
  }
});
