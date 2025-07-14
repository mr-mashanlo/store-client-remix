import { UserService } from '@/shared/api';

import { AddressController } from './controller';

const baseService = new UserService( 'address' );

export const addressController = new AddressController( baseService );