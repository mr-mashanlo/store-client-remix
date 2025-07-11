import { Form, useActionData, useNavigation } from '@remix-run/react';
import { FC, useEffect, useState } from 'react';

import action from '../api/action';

const SaveAddress: FC = () => {
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const [ isError, setIsError ] = useState( false );

  useEffect( () => {
    if ( 'errors' in ( actionData || {} ) ) setIsError( true );
  }, [ actionData ] );

  const handleFormChande = () => {
    if ( isError ) setIsError( false );
  };

  return (
    <Form onChange={handleFormChande} method="post" action="/save-address" aria-describedby="form-error" className="w-full sm:w-100">
      <fieldset disabled={navigation.formAction === '/save-address'}>
        <legend className="text-2xl text-center font-bold">Add your address</legend>
        <label htmlFor="address" className="block mt-8 relative">
          <input id="address" name="address" type="text" placeholder="Kazakhstan, Zhambyl region, Taraz city, Abay street, #100" aria-describedby="address-error" className="peer w-full p-3.5 pl-11 rounded-xl bg-[#f5f5f5] placeholder:text-[#C2C3CB]" required />
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-[#C2C3CB] peer-focus:fill-black absolute top-1/2 left-4 -translate-y-1/2" aria-hidden="true">
            <path d="M3,22c0.55273,0,1-0.44775,1-1v-4.21875C4,16.35059,4.35059,16,4.78125,16h2.41602 c0.79395,0,1.53027,0.39453,1.9707,1.05469C9.98047,18.27295,11.33887,19,12.80273,19h0.39453 c0.79395,0,1.53027,0.39453,1.9707,1.05469C15.98047,21.27295,17.33887,22,18.80273,22H20c0.55273,0,1-0.44775,1-1s-0.44727-1-1-1 h-1.19727c-0.79395,0-1.53027-0.39453-1.9707-1.05469C16.01953,17.72705,14.66113,17,13.19727,17h-0.39453 c-0.79395,0-1.53027-0.39453-1.9707-1.05469C10.37128,15.25446,9.73151,14.72888,9,14.39697v-1.53894 c1.72052-0.4472,3-1.99969,3-3.85803c0-1.43555-1.24023-7-4-7S4,7.56445,4,9c0,1.85834,1.27948,3.41083,3,3.85803V14H4.78125 C3.24805,14,2,15.24756,2,16.78125V21C2,21.55225,2.44727,22,3,22z M6,9c0-1.65967,1.29297-4.88428,1.99512-5.00049 C8.70703,4.11572,10,7.34033,10,9c0,1.10303-0.89746,2-2,2S6,10.10303,6,9z"/>
          </svg>
        </label>
        {actionData?.errors?.address ? <p id="address-error" role="alert" className="mt-1 text-2xs text-center">{actionData?.errors?.address.join( ', ' )}</p> : null}
        <button className="w-full mt-5 p-3.5 rounded-xl bg-black text-white cursor-pointer outline-offset-3">Save</button>
      </fieldset>
      {actionData?.errors?.message ? <p id="form-error" role="alert" className="mt-5 text-2xs text-center">{actionData?.errors.message}</p> : null}
    </Form>
  );
};

export default SaveAddress;