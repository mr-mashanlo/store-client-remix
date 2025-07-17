import z from 'zod';

import { CartZod } from './schema';

export const validateCartData = ( data: unknown ) => {
  return z.array( CartZod ).parse( data );
};