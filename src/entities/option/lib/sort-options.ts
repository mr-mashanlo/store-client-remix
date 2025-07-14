import { OptionType } from '../model/type';

export const sortOptions = ( options: OptionType[] ) => {
  return [ ...options ].sort( ( a, b ) => a.price - b.price );
};