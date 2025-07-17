import z from 'zod';

import { CartInputZod, CartZod } from './schema';

export type CartInputType = z.infer<typeof CartInputZod>;

export type CartType = z.infer<typeof CartZod>;