import { KyResponse } from 'ky';

import { kyInstance } from './ky';

export interface BaseServiceInterface<T> {

  create( request: Request, data: T ): Promise<KyResponse>

  delete( request: Request, params: Record<string, string> ): Promise<KyResponse>

  getByID( request: Request, id: string, params: Record<string, string> ): Promise<KyResponse>

  getMany( request: Request, params: Record<string, string> ): Promise<KyResponse>

  getOne( request: Request, params: Record<string, string> ): Promise<KyResponse>

  update( request: Request, data: { query: Record<string, string>, body: Partial<T> } ): Promise<KyResponse>

}

export class BaseService<T> implements BaseServiceInterface<T> {

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
    return await kyInstance( `${this.entity}?${searchParams}`, { headers: { cookie: request.headers.get( 'cookie' ) ?? '' } } );
  };

  update = async ( request: Request, data: { query: Record<string, string>, body: Partial<T> } ) => {
    return await kyInstance( this.entity, { method: 'put', body: JSON.stringify( data ), headers: { cookie: request.headers.get( 'cookie' ) ?? '' } } );
  };

}