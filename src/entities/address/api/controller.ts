import { ServiceInterface } from '../model/interface';
import { AddressInputType } from '../model/type';
import { validateAddressData, validateAddressInputData } from '../model/validator';

export class AddressController {

  private service: ServiceInterface;

  constructor( service: ServiceInterface ) { this.service = service; };

  create = async ( request: Request, data: AddressInputType ) => {
    const body = validateAddressInputData( data );
    const response = await this.service.create( request, body );
    const json = await response.json();
    return validateAddressData( json );
  };

  delete = async ( request: Request ) => {
    await this.service.delete( request );
  };

  get = async ( request: Request ) => {
    const response = await this.service.get( request );
    const json = await response.json();
    return validateAddressData( json );
  };

  update = async ( request: Request, data: Partial<AddressInputType> ) => {
    const response = await this.service.update( request, data );
    const json = await response.json();
    return validateAddressData( json );
  };

}