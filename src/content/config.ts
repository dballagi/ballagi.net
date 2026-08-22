import { defineCollection, z } from 'astro:content';

const experienceItem = z.object({
  company: z.string(),
  url: z.string().url().optional(),
  role: z.string(),
  logo: z.string().url().optional(),
  period: z.string(),
  location: z.string().optional(),
  description: z.string(),
  tech: z.array(z.string()).optional(),
});

const educationItem = z.object({
  institution: z.string(),
  url: z.string().url().optional(),
  degree: z.string(),
  field: z.string(),
  period: z.string(),
  location: z.string().optional(),
  logo: z.string().url().optional(),
  note: z.string().optional(),
});

const profile = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    experience: z.array(experienceItem).optional(),
    education: z.array(educationItem).optional(),
  }),
});

const books = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string(),
    series: z.string().optional(),
    seriesNumber: z.number().optional(),
    date: z.date(),
    rating: z.number().min(1).max(5).optional(),
    tags: z.array(z.string()).optional(),
    cover: z.string().url().optional(),
  }),
});

const tinkering = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
  }),
});

export const collections = { profile, books, tinkering };
