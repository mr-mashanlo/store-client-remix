import { ActionFunctionArgs, data, redirect } from '@remix-run/node';

import { addressController } from '@/entities/address/api/index.server';
import { handleError } from '@/shared/lib';

interface ActionErrorType {
  address?: string[],
  message?: string
}

const action = async ( { request }: ActionFunctionArgs ) => {
  try {
    const form = await request.formData();
    const body = { address: String( form.get( 'address' ) ) };
    await addressController.create( request, body );
    return redirect( '/' );
  } catch ( error ) {
    const errors: ActionErrorType = await handleError( error );
    return data( { errors }, { status: 400 } );
  }
};

export default action;