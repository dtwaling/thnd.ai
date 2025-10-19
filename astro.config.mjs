// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';
//import starlightObsidian, { obsidianSidebarGroup } from 'starlight-obsidian';

// https://astro.build/config
export default defineConfig({
	site: 'https://thnd.ai',
	integrations: [
		starlight({
			title: 'THND.ai',
			logo: {
				src: './public/images/bolt-icon.png',
			},
			favicon: '/favicon.png',
			social: [
				{ icon: 'x.com', label: 'X.com', href: 'https://x.com/thndai' },
				{ icon: 'telegram', label: 'Telegram', href: 'https://t.me/orderofhodl' },
			],
			customCss: [
				"./src/styles/custom.css",
			],
		}),
		sitemap()
	],
	server: {
	  host: true,
	  port: 4321,
	},
});
