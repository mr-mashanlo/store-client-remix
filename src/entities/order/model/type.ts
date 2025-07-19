import { z } from 'zod';

import { OrderInputZod, OrderZod } from './schema';

export type OrderInputType = z.infer<typeof OrderInputZod>

export type OrderType = z.infer<typeof OrderZod>