import { KyResponse } from 'ky';

import { AuthInputType } from './type';

export interface AuthServiceInterface {

  signIn( request: Request, data: AuthInputType ): Promise<KyResponse>

  signUp( request: Request, data: AuthInputType ): Promise<KyResponse>

  signOut( request: Request ): Promise<KyResponse>

  refresh( request: Request ): Promise<KyResponse>

}