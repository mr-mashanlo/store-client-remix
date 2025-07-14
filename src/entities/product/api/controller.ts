import { BaseServiceInterface } from '@/shared/api';

import { ProductType } from '../model/type';
import { validateProductData, validateProductsData } from '../model/validator';

export class ProductController {

  private service: BaseServiceInterface<ProductType>;

  constructor( service: BaseServiceInterface<ProductType> ) { this.service = service; };

  getMany = async ( request: Request ) => {
    const response = await this.service.getMany( request, {} );
    const json = await response.json();
    return validateProductsData( json );
  };

  getManyByCategory = async ( request: Request, id: string ) => {
    const query = encodeURIComponent( JSON.stringify( { categories: { $in: [ id ] } } ) );
    const response = await this.service.getMany( request, { query } );
    const json = await response.json();
    return validateProductsData( json );
  };

  getOne = async ( request: Request, id: string ) => {
    const query = encodeURIComponent( JSON.stringify( { _id: id } ) );
    const response = await this.service.getOne( request, { query } );
    const json = await response.json();
    return validateProductData( json );
  };

}