import { AddressController } from './controller';
import { AddressService } from './service';

export const addressController = new AddressController( new AddressService() );