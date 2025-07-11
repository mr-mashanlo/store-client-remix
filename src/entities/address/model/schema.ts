import z from 'zod';

export const AddressInputZod = z.object( {
  address: z.string().min( 8, { message: 'Must be 8 or more characters long' } )
} );

export const AddressZod = AddressInputZod.extend( {
  _id: z.string()
} );