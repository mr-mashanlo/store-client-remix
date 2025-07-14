import z from 'zod';

export const CategoryZod = z.object( {
  _id: z.string(),
  name: z.string(),
  slug: z.string(),
  description: z.string()
} );