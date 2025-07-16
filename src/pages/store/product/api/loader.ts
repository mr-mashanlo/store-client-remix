import { data, LoaderFunctionArgs } from '@remix-run/node';

import { productController } from '@/entities/product/api/index.server';
import { handleError } from '@/shared/lib';

interface ActionErrorType {
  message?: string
}

const loader = async ( { params, request }: LoaderFunctionArgs ) => {
  try {
    const uid = params.id || '';
    const product = await productController.getOne( request, { filter: { uid } } );
    return data( product );
  } catch ( error ) {
    const errors: ActionErrorType = await handleError( error );
    throw data( { errors }, { status: 400 } );
  }
};

export default loader;