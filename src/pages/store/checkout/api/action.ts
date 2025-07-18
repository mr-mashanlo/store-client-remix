import { ActionFunctionArgs, data } from '@remix-run/node';

import { cartCookie } from '@/entities/cart/api/cookie.server';
import { handleError } from '@/shared/lib';

interface ActionErrorType {
  message?: string
}

const action = async ( { request }: ActionFunctionArgs ) => {
  try {
    const form = await request.formData();
    const option = String( form.get( 'option' ) );
    const cookies = request.headers.get( 'Cookie' );
    const cookie = ( await cartCookie.parse( cookies ) ) || {};
    const cart = cookie.cart || [];

    console.log( option, cart );

    return data( {}, { headers: { 'Set-Cookie': cookie } } );
  } catch ( error ) {
    const errors: ActionErrorType = await handleError( error );
    throw data( { errors }, { status: 400 } );
  }
};

export default action;