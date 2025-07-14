import { BaseService } from '@/shared/api';

import { ProductController } from './controller';

const baseService = new BaseService( 'product' );

export const productController = new ProductController( baseService );