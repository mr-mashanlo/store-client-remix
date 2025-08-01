import { BaseService } from '@/shared/api';

import { ProductController } from './controller';

const baseService = new BaseService( 'products' );

export const productController = new ProductController( baseService );