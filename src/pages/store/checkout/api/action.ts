import { ActionFunctionArgs, data, redirect } from '@remix-run/node';

import { validateAddressData } from '@/entities/address';
import { addressController } from '@/entities/address/api/index.server';
import { cartCookie } from '@/entities/cart/api/cookie.server';
import { orderController } from '@/entities/order/api/index.server';
import { handleError } from '@/shared/lib';

interface ActionErrorType {
  message?: string
}

const action = async ( { request }: ActionFunctionArgs ) => {
  try {
    const cookies = request.headers.get( 'Cookie' );
    const cookie = ( await cartCookie.parse( cookies ) ) || {};
    const cart = cookie.cart || [];
    const address = await addressController.getOne( request );
    const validatedAddress = validateAddressData( address );
    const order = await orderController.create( request, { address: validatedAddress.address, options: Object.values( cart ) } );
    const updatedCookie = await cartCookie.serialize( '', { maxAge: 0 } );
    return redirect( `/order/${order._id}`, { headers: { 'Set-Cookie': updatedCookie } } );
  } catch ( error ) {
    const errors: ActionErrorType = await handleError( error );
    throw data( { errors }, { status: 400 } );
  }
};

export default action;