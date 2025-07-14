import { ProductType } from '../model/type';

export function mergeImages( data: ProductType ) {
  const optionImages = data.options.map( option => option.image );
  const totalImages = [ ...data.images, ...optionImages ];
  return Array.from( new Map( totalImages.map( image => [ image._id, image ] ) ).values() );
}