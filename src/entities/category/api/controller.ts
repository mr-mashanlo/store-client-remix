import { BaseServiceInterface } from '@/shared/api';

import { CategoryType } from '../model/type';
import { validateCategoryData } from '../model/validator';

export class CategoryController {

  private service: BaseServiceInterface<CategoryType>;

  constructor( service: BaseServiceInterface<CategoryType> ) { this.service = service; };

  getOne = async ( request: Request, option: object ) => {
    const pipeline = encodeURIComponent( JSON.stringify( { ...option } ) );
    const response = await this.service.aggregate( request, { pipeline } );
    const json: unknown[] = await response.json();
    return validateCategoryData( json[0] );
  };

}