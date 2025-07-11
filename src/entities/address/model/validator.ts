import { AddressInputZod, AddressZod } from './schema';

export const validateAddressInputData = ( data: unknown ) => {
  return AddressInputZod.parse( data );
};

export const validateAddressData = ( data: unknown ) => {
  return AddressZod.parse( data );
};