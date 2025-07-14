import z from 'zod';

import { ProductZod } from './schema';

export const validateProductData = ( data: unknown ) => {
  return ProductZod.parse( data );
};

export const validateProductsData = ( data: unknown ) => {
  return z.array( ProductZod ).parse( data );
};