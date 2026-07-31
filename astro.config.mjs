// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  trailingSlash: "never",
  site: "https://shadowcrystal.org",
  integrations: [sitemap()],
});