import { data, LoaderFunctionArgs } from '@remix-run/node';

import { addressController } from '@/entities/address/api/index.server';
import { validateAddressData } from '@/entities/address/model/validator';
import { CartInputType, validateCartData } from '@/entities/cart';
import { cartCookie } from '@/entities/cart/api/cookie.server';
import { optionController } from '@/entities/option/api/index.server';
import { handleError } from '@/shared/lib';

interface ActionErrorType {
  message?: string
}

const loader = async ( { request }: LoaderFunctionArgs ) => {
  try {
    const cookies = request.headers.get( 'Cookie' );
    const cookie = ( await cartCookie.parse( cookies ) ) || {};
    const cart: CartInputType = cookie.cart || {};
    const uid = Object.values( cart ).map( option => option.option );
    const options = await optionController.getMany( request, { filter: { uid: { $in: uid } } } );
    const updatedOptions = options.map( option => ( { option, quantity: cart[option.uid].quantity } ) );
    const validatedOptions = validateCartData( updatedOptions );
    const address = await addressController.getOne( request );
    const validatedAddress = validateAddressData( address );
    return data( { options: validatedOptions, address: validatedAddress } );
  } catch ( error ) {
    const errors: ActionErrorType = await handleError( error );
    throw data( { errors }, { status: 400 } );
  }
};

export default loader;