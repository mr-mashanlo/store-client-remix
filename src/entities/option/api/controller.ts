import { BaseServiceInterface } from '@/shared/api';

import { lookup } from '../config/lookup';
import { OptionType } from '../model/type';
import { validateOptionsData } from '../model/validator';

export class OptionController {

  private service: BaseServiceInterface<OptionType>;

  constructor( service: BaseServiceInterface<OptionType> ) { this.service = service; };

  getMany = async ( request: Request, option: object ) => {
    const pipeline = encodeURIComponent( JSON.stringify( { ...option, lookup } ) );
    const response = await this.service.aggregate( request, { pipeline } );
    const json = await response.json();
    return validateOptionsData( json );
  };

}