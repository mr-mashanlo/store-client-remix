import { BaseService } from '@/shared/api';

import { CategoryController } from './controller';

const baseService = new BaseService( 'categories' );

export const categoryController = new CategoryController( baseService );