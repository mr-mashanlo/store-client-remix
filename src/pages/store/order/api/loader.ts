import { data, LoaderFunctionArgs } from '@remix-run/node';

import { validateOrderData } from '@/entities/order';
import { orderController } from '@/entities/order/api/index.server';
import { handleError } from '@/shared/lib';

interface ActionErrorType {
  message?: string
}

const loader = async ( { params, request }: LoaderFunctionArgs ) => {
  try {
    const id = params.id || '';
    const order = await orderController.getOne( request, id );
    const validatedOrder = validateOrderData( order );
    return data( validatedOrder );
  } catch ( error ) {
    const errors: ActionErrorType = await handleError( error );
    throw data( { errors }, { status: 400 } );
  }
};

export default loader;