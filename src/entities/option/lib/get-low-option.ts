import { OptionType } from '../model/type';

export const getLowOption = ( options: OptionType[] ) => {
  return [ ...options ].sort( ( a, b ) => a.price - b.price )[0];
};