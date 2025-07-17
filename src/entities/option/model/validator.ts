import z from 'zod';

import { OptionZod } from './schema';

export const validateOptionsData = ( data: unknown ) => {
  return z.array( OptionZod ).parse( data );
};