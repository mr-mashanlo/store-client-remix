import { ActionFunctionArgs, data } from '@remix-run/node';

import { decrease, increase } from '@/entities/cart';
import { cartCookie } from '@/entities/cart/api/cookie.server';
import { handleError } from '@/shared/lib';

interface ActionErrorType {
  message?: string
}

const action = async ( { request }: ActionFunctionArgs ) => {
  try {
    const form = await request.formData();
    const action = String( form.get( 'action' ) );
    const option = String( form.get( 'option' ) );
    const cookies = request.headers.get( 'Cookie' );
    const cookie = ( await cartCookie.parse( cookies ) ) || {};
    const cart = cookie.cart || [];
    let updatedCookie = '';

    if ( action === 'increment' ) {
      updatedCookie = await cartCookie.serialize( { ...cookie, cart: increase( cart, option ) } );
    }
    if ( action === 'decrement' ) {
      updatedCookie  = await cartCookie.serialize( { ...cookie, cart: decrease( cart, option ) } );
    }

    return data( {}, { headers: { 'Set-Cookie': updatedCookie } } );
  } catch ( error ) {
    const errors: ActionErrorType = await handleError( error );
    throw data( { errors }, { status: 400 } );
  }
};

export default action;