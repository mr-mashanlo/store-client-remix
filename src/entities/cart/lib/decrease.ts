import { CartInputType } from '../model/type';

export const decrease = ( cart: CartInputType, uid: string ) => {

  const options: CartInputType = { ...cart };

  if ( options[uid].quantity > 1 ) {
    options[uid].quantity = options[uid].quantity - 1;
  } else {
    delete options[uid];
  }

  return options;

};