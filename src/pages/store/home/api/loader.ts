import { data, LoaderFunctionArgs } from '@remix-run/node';

import { productController } from '@/entities/product/api/index.server';
import { handleError } from '@/shared/lib';

interface ActionErrorType {
  message?: string
}

const loader = async ( { request }: LoaderFunctionArgs ) => {
  try {
    const url = new URL( request.url );
    const search = url.searchParams.get( 'search' ) || '';
    const color = url.searchParams.get( 'color' ) || '';
    const products = await productController.getMany( request, { sort: { _id: -1 }, filter: { name: { $regex: search, $options: 'i' }, 'options.name': { $regex: color, $options: 'i' } } } );
    return data( products );
  } catch ( error ) {
    const errors: ActionErrorType = await handleError( error );
    throw data( { errors }, { status: 400 } );
  }
};

export default loader;