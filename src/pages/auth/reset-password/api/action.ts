import { data, redirect } from '@remix-run/node';

import { handleError } from '@/shared/lib';

interface ActionErrorType {
  email?: string[],
  message?: string
}

const action = async () => {
  try {
    return redirect( '/' );
  } catch ( error ) {
    const errors: ActionErrorType = await handleError( error );
    return data( { errors }, { status: 400 } );
  }
};

export default action;