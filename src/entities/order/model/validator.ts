import z from 'zod';

import { OrderInputZod, OrderZod } from './schema';

export const validateOrderInputData = ( data: unknown ) => {
  return OrderInputZod.parse( data );
};

export const validateOrderData = ( data: unknown ) => {
  return OrderZod.parse( data );
};

export const validateOrdersData = ( data: unknown ) => {
  return z.array( OrderZod ).parse( data );
};