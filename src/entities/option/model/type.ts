import { z } from 'zod';

import { OptionZod } from './schema';

export type OptionType = z.infer<typeof OptionZod>