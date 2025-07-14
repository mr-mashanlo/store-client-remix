import { BaseServiceInterface } from '@/shared/api';

import { CategoryType } from '../model/type';
import { validateCategoriesData, validateCategoryData } from '../model/validator';

export class CategoryController {

  private service: BaseServiceInterface<CategoryType>;

  constructor( service: BaseServiceInterface<CategoryType> ) { this.service = service; };

  getMany = async ( request: Request ) => {
    const response = await this.service.getMany( request, {} );
    const json = await response.json();
    return validateCategoriesData( json );
  };

  getOne = async ( request: Request, slug: string ) => {
    const query = encodeURIComponent( JSON.stringify( { slug } ) );
    const response = await this.service.getOne( request, { query } );
    const json = await response.json();
    return validateCategoryData( json );
  };

}