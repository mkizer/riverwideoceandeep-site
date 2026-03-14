import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string().default(''),
			// Allow both pubDate (Astro default) and date (Wordpress default)
			pubDate: z.coerce.date().optional(),
			date: z.coerce.date().optional(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			tags: z.array(z.string()).optional(),
			categories: z.array(z.string()).optional(),
			author: z.string().optional(),
		}).transform((data) => ({
			...data,
			// Make sure components that expect pubDate always get a Date object
			pubDate: data.pubDate || data.date || new Date(),
		})),
});

export const collections = { blog };
