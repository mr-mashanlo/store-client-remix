import { ActionFunctionArgs, data, redirect } from '@remix-run/node';

import { authController } from '@/entities/auth/api/index.server';
import { handleError } from '@/shared/lib';

interface ActionErrorType {
  message?: string
}

const action = async ( { request }: ActionFunctionArgs ) => {
  try {
    const { response } = await authController.signOut( request );
    return redirect( '/', { headers: { 'Set-Cookie': response.headers.get( 'set-cookie' ) || '' } } );
  } catch ( error ) {
    const errors: ActionErrorType = await handleError( error );
    throw data( { errors }, { status: 400 } );
  }
};

export default action;