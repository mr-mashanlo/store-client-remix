import { kyInstance } from '@/shared/api';

import { ServiceInterface } from '../model/interface';
import { AddressInputType } from '../model/type';

export class AddressService implements ServiceInterface {

  create = async ( request: Request, data: AddressInputType ) => {
    return await kyInstance( 'address', { method: 'post', body: JSON.stringify( data ), headers: { cookie: request.headers.get( 'cookie' ) ?? '' } } );
  };

  delete = async ( request: Request ) => {
    return await kyInstance( 'address', { method: 'delete', headers: { cookie: request.headers.get( 'cookie' ) ?? '' } } );
  };

  update = async ( request: Request, data: Partial<AddressInputType> ) => {
    return await kyInstance( 'address', { method: 'put', body: JSON.stringify( data ), headers: { cookie: request.headers.get( 'cookie' ) ?? '' } } );
  };

  get = async ( request: Request ) => {
    return await kyInstance( 'address', { headers: { cookie: request.headers.get( 'cookie' ) ?? '' } } );
  };

}