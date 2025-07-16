import z from 'zod';

const ImageZod = z.object( {
  _id: z.string(),
  name: z.string(),
  path: z.string(),
  alt: z.string()
} );

const CategoryZod = z.object( {
  _id: z.string(),
  name: z.string(),
  slug: z.string(),
  description: z.string()
} );

const OptionZod = z.object( {
  _id: z.string(),
  product: z.string(),
  name: z.string(),
  price: z.number(),
  image: ImageZod
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