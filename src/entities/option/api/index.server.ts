import { BaseService } from '@/shared/api';

import { OptionController } from './controller';

const baseService = new BaseService( 'options' );

export const optionController = new OptionController( baseService );