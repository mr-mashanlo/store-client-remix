import { AuthInputZod, AuthZod } from './schema';

export const validateAuthInputData = ( data: unknown ) => {
  return AuthInputZod.parse( data );
};

export const validateAuthData = ( data: unknown ) => {
  return AuthZod.parse( data );
};