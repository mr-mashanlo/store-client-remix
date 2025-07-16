import { BaseServiceInterface } from '@/shared/api';

import { lookup } from '../config/lookup';
import { ProductType } from '../model/type';
import { validateProductData, validateProductsData } from '../model/validator';

export class ProductController {

  private service: BaseServiceInterface<ProductType>;

  constructor( service: BaseServiceInterface<ProductType> ) { this.service = service; };

  getMany = async ( request: Request, option: object ) => {
    const pipeline = encodeURIComponent( JSON.stringify( { ...option, lookup } ) );
    const response = await this.service.aggregate( request, { pipeline } );
    const json = await response.json();
    return validateProductsData( json );
  };

  getOne = async ( request: Request, option: object ) => {
    const pipeline = encodeURIComponent( JSON.stringify( { ...option, lookup } ) );
    const response = await this.service.aggregate( request, { pipeline } );
    const json: unknown[] = await response.json();
    return validateProductData( json[0] );
  };

}