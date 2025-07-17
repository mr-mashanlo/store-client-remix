import z from 'zod';

import { CategoryZod } from '@/entities/category';
import { OptionZod } from '@/entities/option';

const ImageZod = z.object( {
  _id: z.string(),
  name: z.string(),
  path: z.string(),
  alt: z.string()
} );

export const ProductZod = z.object( {
  _id: z.string(),
  uid: z.string(),
  name: z.string(),
  excerpt: z.string(),
  description: z.string(),
  categories: z.array( CategoryZod ),
  options: z.array( OptionZod ),
  images: z.array( ImageZod )
} );