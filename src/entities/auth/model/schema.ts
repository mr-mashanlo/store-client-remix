import { z } from 'zod';

export const AuthInputZod = z.object( {
  email: z.email( { message: 'Invalid email address' } ),
  password: z.string().min( 8, { message: 'Must be 8 or more characters long' } )
} );

export const AuthZod = z.object( {
  id: z.string(),
  token: z.string()
} );