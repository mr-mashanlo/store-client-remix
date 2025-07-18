import { UserServiceInterface } from '@/shared/api';

import { AddressInputType } from '../model/type';
import { validateAddressData, validateAddressInputData } from '../model/validator';

export class AddressController {

  private service: UserServiceInterface<AddressInputType>;

  constructor( service: UserServiceInterface<AddressInputType> ) { this.service = service; };

  create = async ( request: Request, data: AddressInputType ) => {
    const body = validateAddressInputData( data );
    const response = await this.service.create( request, body );
    const json = await response.json();
    return validateAddressData( json );
  };

  getOne = async ( request: Request ) => {
    const response = await this.service.getOne( request, {} );
    const json = await response.json();
    return json ? validateAddressData( json ) : json;
  };

  update = async ( request: Request, data: Partial<AddressInputType> ) => {
    const response = await this.service.update( request, data );
    const json = await response.json();
    return validateAddressData( json );
  };

}