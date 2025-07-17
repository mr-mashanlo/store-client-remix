import z from 'zod';

const ImageZod = z.object( {
  _id: z.string(),
  name: z.string(),
  path: z.string(),
  alt: z.string()
} );

export const OptionZod = z.object( {
  _id: z.string(),
  uid: z.string(),
  product: z.string(),
  name: z.string(),
  price: z.number(),
  image: ImageZod
} );