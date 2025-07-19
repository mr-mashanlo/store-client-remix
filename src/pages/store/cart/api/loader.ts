import { data, LoaderFunctionArgs } from '@remix-run/node';

import { CartInputType, validateCartData } from '@/entities/cart';
import { cartCookie } from '@/entities/cart/api/cookie.server';
import { optionController } from '@/entities/option/api/index.server';
import { getCookie, handleError } from '@/shared/lib';

interface ActionErrorType {
  message?: string
}

const loader = async ( { request }: LoaderFunctionArgs ) => {
  try {
    const cookies = request.headers.get( 'Cookie' ) || '';
    const token = getCookie( cookies, 'token' );
    const cookie = ( await cartCookie.parse( cookies ) ) || {};
    const cart: CartInputType = cookie.cart || {};
    const uid = Object.keys( cart );
    const options = await optionController.getMany( request, { filter: { uid: { $in: uid } } } );
    const updatedOptions = options.map( option => ( { option, quantity: cart[option.uid].quantity } ) );
    const validatedOptions = validateCartData( updatedOptions );
    return data( { options: validatedOptions, token } );
  } catch ( error ) {
    const errors: ActionErrorType = await handleError( error );
    throw data( { errors }, { status: 400 } );
  }
};

export default loader;