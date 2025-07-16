import { ActionFunctionArgs, data } from '@remix-run/node';

import { handleError } from '@/shared/lib';

interface ActionErrorType {
  message?: string
}

const action = async ( { request }: ActionFunctionArgs ) => {
  try {
    const form = await request.formData();
    console.log( form );
    return data( { ok: true } );
  } catch ( error ) {
    const errors: ActionErrorType = await handleError( error );
    throw data( { errors }, { status: 400 } );
  }
};

export default action;