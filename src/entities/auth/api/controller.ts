import { ServiceInterface } from '../model/interface';
import { AuthInputType } from '../model/type';
import { validateAuthData, validateAuthInputData } from '../model/validator';

export class AuthController {

  private service: ServiceInterface;

  constructor( service: ServiceInterface ) { this.service = service; };

  signIn = async ( request: Request, data: AuthInputType ) => {
    const body = validateAuthInputData( data );
    const response = await this.service.signIn( request, body );
    const json = validateAuthData( await response.json() );
    return { response, json };
  };

  signUp = async ( request: Request, data: AuthInputType ) => {
    const body = validateAuthInputData( data );
    const response = await this.service.signUp( request, body );
    const json = validateAuthData( await response.json() );
    return { response, json };
  };

  signOut = async ( request: Request ) => {
    const response = await this.service.signOut( request );
    const json = await response.json();
    return { response, json };
  };

  refresh = async ( request: Request ) => {
    const response = await this.service.refresh( request );
    const json = validateAuthData( await response.json() );
    return { response, json };
  };

}