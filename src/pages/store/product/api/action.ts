import { ActionFunctionArgs, data } from '@remix-run/node';

import { CartInputType, increase } from '@/entities/cart';
import { cartCookie } from '@/entities/cart/api/cookie.server';
import { handleError } from '@/shared/lib';

interface ActionErrorType {
  message?: string
}

const action = async ( { request }: ActionFunctionArgs ) => {
  try {
    const form = await request.formData();
    const id = String( form.get( 'id' ) );
    const uid = String( form.get( 'option' ) );
    const cookies = request.headers.get( 'Cookie' );
    const cookie = ( await cartCookie.parse( cookies ) ) || {};
    const cart: CartInputType = cookie.cart || {};
    const updatedCookie = await cartCookie.serialize( { ...cookie, cart: increase( cart, id, uid ) } );
    return data( { ok: true }, { headers: { 'Set-Cookie': updatedCookie } } );
  } catch ( error ) {
    const errors: ActionErrorType = await handleError( error );
    throw data( { errors }, { status: 400 } );
  }
};

export default action;