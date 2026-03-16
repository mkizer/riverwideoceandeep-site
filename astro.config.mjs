// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import AutoImport from 'astro-auto-import';
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://riverwideoceandeep.com',

  // Add this to maintain your WordPress SEO links
  trailingSlash: 'always',

  integrations: [
      AutoImport({
          imports: [
              {
                  // This automatically imports YouTube from the library
                  '@astro-community/astro-embed-youtube': ['YouTube']
              }
          ],
      }),
      mdx(),
      sitemap()
	],

  vite: {
      plugins: [tailwindcss()],
	},

  adapter: cloudflare({
      imageService: 'compile',
  }),
});