import { KyResponse } from 'ky';

import { AddressInputType } from './type';

export interface ServiceInterface {

  create( request: Request, data: AddressInputType ): Promise<KyResponse>

  delete( request: Request ): Promise<KyResponse>

  update( request: Request, data: Partial<AddressInputType> ): Promise<KyResponse>

  get( request: Request ): Promise<KyResponse>

}