import { KyResponse } from 'ky';

import { kyInstance } from './ky';

export interface UserServiceInterface<T> {

  create( request: Request, data: T ): Promise<KyResponse>

  delete( request: Request, params: Record<string, string> ): Promise<KyResponse>

  getByID( request: Request, id: string, params: Record<string, string> ): Promise<KyResponse>

  getMany( request: Request, params: Record<string, string> ): Promise<KyResponse>

  getOne( request: Request, params: Record<string, string> ): Promise<KyResponse>

  update( request: Request, data: Partial<T> ): Promise<KyResponse>

}

export class UserService<T> implements UserServiceInterface<T> {

  private entity: string;

  constructor( entity: string ) { this.entity = entity; };

  create = async ( request: Request, data: T ) => {
    return await kyInstance( this.entity, { method: 'post', body: JSON.stringify( data ), headers: { cookie: request.headers.get( 'cookie' ) ?? '' } } );
  };

  delete = async ( request: Request, params: Record<string, string> ) => {
    const searchParams = new URLSearchParams( params ).toString();
    return await kyInstance( `${this.entity}?${searchParams}`, { method: 'delete', headers: { cookie: request.headers.get( 'cookie' ) ?? '' } } );
  };

  getByID = async ( request: Request, id: string, params: Record<string, string> ) => {
    const searchParams = new URLSearchParams( params ).toString();
    return await kyInstance( `${this.entity}/${id}?${searchParams}`, { headers: { cookie: request.headers.get( 'cookie' ) ?? '' } } );
  };

  getMany = async ( request: Request, params: Record<string, string> ) => {
    const searchParams = new URLSearchParams( params ).toString();
    return await kyInstance( `${this.entity}?${searchParams}`, { headers: { cookie: request.headers.get( 'cookie' ) ?? '' } } );
  };

  getOne = async ( request: Request, params: Record<string, string> ) => {
    const searchParams = new URLSearchParams( params ).toString();
    return await kyInstance( `${this.entity}/me?${searchParams}`, { headers: { cookie: request.headers.get( 'cookie' ) ?? '' } } );
  };

  update = async ( request: Request, data: Partial<T> ) => {
    return await kyInstance( this.entity, { method: 'put', body: JSON.stringify( data ), headers: { cookie: request.headers.get( 'cookie' ) ?? '' } } );
  };

}