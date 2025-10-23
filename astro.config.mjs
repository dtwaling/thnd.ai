// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config 
export default defineConfig({
  site: 'https://thnd.ai',
  publicDir: './public',
  adapter: cloudflare({
    imageService: 'compile'
  }),

  integrations: [
    starlight({
      components: {
        ThemeProvider: './src/components/theme/ForceDarkTheme.astro',
        ThemeSelect: './src/components/theme/EmptyComponent.astro',
      },
      title: 'THND.ai',
      logo: {
        src: './public/favicon/favicon.png',
      },
      favicon: '/favicon/favicon.svg',
      social: [
        { icon: 'x.com', label: 'X.com', href: 'https://x.com/thndai' },
        { icon: 'telegram', label: 'Telegram', href: 'https://t.me/orderofhodl' },
      ],
      customCss: [
        "./src/styles/custom.css",
      ],
    }),
    mdx(),
    sitemap()
  ],

  vite: {
    build: {
      minify: false,
    },

    ssr: {
      external: ['node:buffer', 'node:fs/promises', 'node:url', 'node:path', 'node:crypto'],
    },
  },
});