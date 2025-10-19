import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

const thndDocs = defineCollection({
	loader: docsLoader(),
	schema: docsSchema()
});

const imageAssets = defineCollection({
	schema: ({image}) => z.object({
		title: z.string().max(60, "Maximum of 60 characters in title required.").min(10, "Minimum of 10 characters in title required."),
		description: z.string().max(250, "Maximum of 250 characters in description required.").min(30, "Minimum of 30 characters in description required."),
		cover: image(),
		coverAlt: z.string(),
		coverImage: image().optional(),
		emoji: z.string().optional(),
		pubDate: z.date(),
		lastUpdate: z.date().optional(),
		tags: z.array(z.string()).max(5, "Maximum of 5 tags required.").min(1, "Minimum of 1 tag required.").optional(),
	}).refine((data) => data.coverImage || data.emoji, {
			message: "Either coverImage or emoji must be provided.",
			path: ["coverImage", "emoji"]
		}),
});

export const collections = {
	docs: thndDocs,
	assets: imageAssets,
};
