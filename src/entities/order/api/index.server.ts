import { UserService } from '@/shared/api';

import { OrderController } from './controller';

const baseService = new UserService( 'orders' );

export const orderController = new OrderController( baseService );