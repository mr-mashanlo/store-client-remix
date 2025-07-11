import { z } from 'zod';

import { AuthInputZod, AuthZod } from './schema';

export type AuthInputType = z.infer<typeof AuthInputZod>

export type AuthType = z.infer<typeof AuthZod>