import z from 'zod';

import { OptionZod } from '@/entities/option';

const BaseZod = z.object( {
  option: z.string(),
  quantity: z.number()
} );

export const CartInputZod = z.record( z.string(), BaseZod );

export const CartZod = z.object( {
  option: OptionZod,
  quantity: z.number()
} );