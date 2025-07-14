import { BaseService } from '@/shared/api';

import { CategoryController } from './controller';

const baseService = new BaseService( 'category' );

export const categoryController = new CategoryController( baseService );