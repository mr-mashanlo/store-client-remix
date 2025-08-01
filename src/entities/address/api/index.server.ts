import { UserService } from '@/shared/api';

import { AddressController } from './controller';

const baseService = new UserService( 'addresses' );

export const addressController = new AddressController( baseService );