import { defineCollection, z } from 'astro:content';

const experience = defineCollection({
  type: 'content',
  schema: z.object({
    company: z.string(),
    role: z.string(),
    period: z.string(),
    order: z.number(),
    description: z.string(),
    techStack: z.array(z.string()),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.string(),
    period: z.string(),
    company: z.string().optional(),
    techStack: z.array(z.string()),
    description: z.string(),
    highlights: z.array(z.string()).optional(),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { experience, projects, blog };
