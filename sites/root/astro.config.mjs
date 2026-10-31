// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

import sitemap from '@astrojs/sitemap';
import { Config } from '../../src/config';

// https://astro.build/config
export default defineConfig({
  site: Config.websites?.find((site) => site.link === "root")?.href,
  adapter: cloudflare(),
  integrations: [sitemap()]
});
