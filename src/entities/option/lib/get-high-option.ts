import { OptionType } from '../model/type';

export const getHighOption = ( options: OptionType[] ) => {
  return [ ...options ].sort( ( a, b ) => a.price + b.price )[0];
};