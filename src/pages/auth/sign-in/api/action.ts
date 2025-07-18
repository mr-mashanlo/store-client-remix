import { ActionFunctionArgs, data, redirect } from '@remix-run/node';

import { authController } from '@/entities/auth/api/index.server';
import { handleError } from '@/shared/lib';

interface ActionErrorType {
  email?: string[],
  password?: string[],
  message?: string
}

const action = async ( { request }: ActionFunctionArgs ) => {
  try {
    const url = new URL( request.url );
    const from = url.searchParams.get( 'from' );
    const form = await request.formData();
    const body = { email: String( form.get( 'email' ) ), password: String( form.get( 'password' ) ) };
    const { response } = await authController.signIn( request, body );
    return redirect( from === 'cart' ? '/save-address?from=cart' : '/save-address', { headers: { 'Set-Cookie': response.headers.get( 'set-cookie' ) || '' } } );
  } catch ( error ) {
    const errors: ActionErrorType = await handleError( error );
    return data( { errors }, { status: 400 } );
  }
};

export default action;