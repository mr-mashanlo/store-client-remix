import { HTTPError } from 'ky';
import z, { ZodError } from 'zod';

export const handleError = async ( error: unknown ) => {
  if ( error instanceof ZodError ) {
    return z.flattenError( error ).fieldErrors || {};
  } else if ( error instanceof HTTPError ) {
    const json = await error.response.json();
    return { message: json.errors[0].message };
  } else {
    return { message: 'Something went wrong. Please try again later' };
  }
};