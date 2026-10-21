import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Un archivo .md por proyecto en src/content/projects/
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    year: z.number().optional(),
    category: z.enum(['advertising', 'music-video', 'fiction', 'personal', 'branded']),
    summary_en: z.string(),
    summary_es: z.string(),
    youtube: z.string().optional(), // solo el ID del vídeo, p. ej. "dQw4w9WgXcQ"
    vimeo: z.string().optional(), // solo el número del vídeo, p. ej. "778622747"
    poster: z.string().optional(), // portada del vídeo, p. ej. "/img/boiler-feelings.jpg"
    stack: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    order: z.number().default(100),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };
