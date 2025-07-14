import { z } from 'zod';

import { CategoryZod } from './schema';

export type CategoryType = z.infer<typeof CategoryZod>