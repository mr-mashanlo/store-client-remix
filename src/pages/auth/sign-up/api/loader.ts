import { data, LoaderFunctionArgs, redirect } from '@remix-run/node';

import { getCookie, handleError } from '@/shared/lib';

interface ActionErrorType {
  message?: string
}

const loader = async ( { request }: LoaderFunctionArgs ) => {
  try {
    const cookies = request.headers.get( 'Cookie' ) || '';
    const token = getCookie( cookies, 'token' );
    if ( token ) return redirect( '/' );
    return data( { ok: true } );
  } catch ( error ) {
    const errors: ActionErrorType = await handleError( error );
    throw data( { errors }, { status: 400 } );
  }
};

export default loader;