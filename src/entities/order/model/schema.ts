import z from 'zod';

import { OptionZod } from '@/entities/option';

export const OrderInputZod = z.object( {
  address: z.string(),
  options: z.array(
    z.object( {
      option: z.string(),
      quantity: z.number(),
      price: z.number()
    } )
  )
} );

export const OrderZod = z.object( {
  _id: z.string(),
  uid: z.string(),
  user: z.string(),
  address: z.string(),
  status: z.enum( [ 'Processing', 'Shipped', 'Delivered', 'Canceled' ] ),
  created: z.number(),
  options: z.array(
    z.object( {
      option: OptionZod,
      quantity: z.number(),
      price: z.number()
    } )
  )
} );