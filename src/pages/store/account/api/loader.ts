import { data, LoaderFunctionArgs } from '@remix-run/node';

import { validateAddressData } from '@/entities/address';
import { addressController } from '@/entities/address/api/index.server';
import { validateOrdersData } from '@/entities/order';
import { orderController } from '@/entities/order/api/index.server';
import { handleError } from '@/shared/lib';

interface ActionErrorType {
  message?: string
}

const loader = async ( { request }: LoaderFunctionArgs ) => {
  try {
    const address = await addressController.getOne( request );
    const validatedAddress = validateAddressData( address );
    const orders = await orderController.getMany( request );
    const validatedOrders = validateOrdersData( orders );
    return data( { address: validatedAddress, orders: validatedOrders } );
  } catch ( error ) {
    const errors: ActionErrorType = await handleError( error );
    throw data( { errors }, { status: 400 } );
  }
};

export default loader;