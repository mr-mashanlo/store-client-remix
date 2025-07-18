import { data, LoaderFunctionArgs, redirect } from '@remix-run/node';

import { addressController } from '@/entities/address/api/index.server';
import { handleError } from '@/shared/lib';

interface ActionErrorType {
  address?: string[],
  message?: string
}

const loader = async ( { request }: LoaderFunctionArgs ) => {
  try {
    const address = await addressController.getOne( request );
    if ( address ) return redirect( '/' );
    return data( address );
  } catch ( error ) {
    const errors: ActionErrorType = await handleError( error );
    throw data( { errors }, { status: 400 } );
  }
};

export default loader;