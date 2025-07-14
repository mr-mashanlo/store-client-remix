import { UserServiceInterface } from '@/shared/api';

import { AddressInputType } from '../model/type';
import { validateAddressData, validateAddressInputData } from '../model/validator';

export class AddressController {

  private service: UserServiceInterface<AddressInputType>;

  constructor( service: UserServiceInterface<AddressInputType> ) { this.service = service; };

  create = async ( request: Request, data: AddressInputType ) => {
    const body = validateAddressInputData( data );
    const response = await this.service.create( request, body );
    return validateAddressData( await response.json() );
  };

  getOne = async ( request: Request ) => {
    const response = await this.service.getOne( request, {} );
    return validateAddressData( await response.json() );
  };

  update = async ( request: Request, data: Partial<AddressInputType> ) => {
    const response = await this.service.update( request, data );
    return validateAddressData( await response.json() );
  };

}