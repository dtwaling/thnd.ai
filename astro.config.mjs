// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://thnd.ai',
  base: '/',
  publicDir: './public',

  integrations: [
    starlight({
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

  // adapter: node({
  //   mode: 'standalone',
  // }),

  // server: ({ command }) => ({
  //   port: command === 'dev' ? 4321 : 8080,
  //   host: true,
  // }),

  // outDir: './dist',
  // output: 'server',
  // build: {
  //   client: './client',
  //   server: './server',
  // },
});