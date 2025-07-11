import { z } from 'zod';

import { AddressInputZod, AddressZod } from './schema';

export type AddressInputType = z.infer<typeof AddressInputZod>

export type AddressType = z.infer<typeof AddressZod>