import { z } from 'zod';

import { ProductZod } from './schema';

export type ProductType = z.infer<typeof ProductZod>