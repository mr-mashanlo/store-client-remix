import { kyInstance } from '@/shared/api';

import { AuthServiceInterface } from '../model/interface';
import { AuthInputType } from '../model/type';

export class AuthService implements AuthServiceInterface {

  signIn = async ( request: Request, data: AuthInputType ) => {
    return await kyInstance( 'auth/signin', { method: 'post', body: JSON.stringify( data ), headers: { cookie: request.headers.get( 'cookie' ) ?? '' } } );
  };

  signUp = async ( request: Request, data: AuthInputType ) => {
    return await kyInstance( 'auth/signup', { method: 'post', body: JSON.stringify( data ), headers: { cookie: request.headers.get( 'cookie' ) ?? '' } } );
  };

  signOut = async ( request: Request ) => {
    return await kyInstance( 'auth/signout', { headers: { cookie: request.headers.get( 'cookie' ) ?? '' } } );
  };

  refresh = async ( request: Request ) => {
    return await kyInstance( 'auth/refresh', { headers: { cookie: request.headers.get( 'cookie' ) ?? '' } } );
  };

}