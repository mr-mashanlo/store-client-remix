import { UserServiceInterface } from '@/shared/api';

import { OrderInputType } from '../model/type';
import { validateOrderData, validateOrderInputData, validateOrdersData } from '../model/validator';

export class OrderController {

  private service: UserServiceInterface<OrderInputType>;

  constructor( service: UserServiceInterface<OrderInputType> ) { this.service = service; };

  create = async ( request: Request, data: OrderInputType ) => {
    const body = validateOrderInputData( data );
    const response = await this.service.create( request, body );
    const json = await response.json();
    return validateOrderData( json );
  };

  getMany = async ( request: Request ) => {
    const response = await this.service.getMany( request, {} );
    const json = await response.json();
    return validateOrdersData( json );
  };

  getOne = async ( request: Request, id: string ) => {
    const response = await this.service.getByID( request, id, {} );
    const json = await response.json();
    return validateOrderData( json );
  };

}