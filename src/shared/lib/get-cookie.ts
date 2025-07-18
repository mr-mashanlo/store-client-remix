export const getCookie = ( cookie: string, name: string ) => {
  const string = cookie;
  const array = string.split( '; ' ).map( cookie => cookie.split( '=' ) );
  const object = Object.fromEntries( array );
  return object[name];
};