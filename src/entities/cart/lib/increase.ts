import { CartInputType } from '../model/type';

export const increase = ( cart: CartInputType, id: string, uid: string ) => {

  const options: CartInputType = { ...cart };

  if ( Object.hasOwn( cart, uid ) ) {
    options[uid].quantity = options[uid].quantity + 1;
  } else {
    options[uid] = { option: id, quantity: 1  };
  }

  return options;

};