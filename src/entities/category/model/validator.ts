import z from 'zod';

import { CategoryZod } from './schema';

export const validateCategoryData = ( data: unknown ) => {
  return CategoryZod.parse( data );
};

export const validateCategoriesData = ( data: unknown ) => {
  return z.array( CategoryZod ).parse( data );
};