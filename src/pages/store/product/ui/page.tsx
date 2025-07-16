import { Form, useLoaderData, useSearchParams } from '@remix-run/react';
import { ChangeEvent, FC } from 'react';

import { getLowOption } from '@/entities/option';
import { getHighOption } from '@/entities/option';
import { mergeImages } from '@/entities/product';

import loader from '../api/loader';

const Product: FC = () => {
  const loaderData = useLoaderData<typeof loader>();
  const [ searchParams, setSearchParams ] = useSearchParams();
  const selectedOption = loaderData.options.find( option => option._id === searchParams.get( 'option' ) );
  const mergedImages = mergeImages( loaderData );

  const handleRadioChange = ( e: ChangeEvent<HTMLInputElement> ) => {
    const params = new URLSearchParams();
    params.set( 'option', e.target.value );
    setSearchParams( params, { replace: true, preventScrollReset: true } );
  };

  return (
    <section className="p-4 sm:p-20">
      <div className="grid sm:grid-cols-3 gap-10">
        <ul className="grid gap-3 sm:gap-10 sm:col-span-2">
          {mergedImages.map( image => (
            <li key={image._id}>
              <img src={`http://localhost:4173/${image.path}`} alt={image.alt} className="w-full aspect-[4/3] object-cover bg-neutral-100" />
            </li>
          ) )}
        </ul>
        <div className="relative">
          <div className="sticky top-15">
            <h1 className="text-base font-medium">{loaderData.name}</h1>
            <p className="mt-4 text-xl font-bold">{selectedOption ? `$${selectedOption?.price}` : `from $${getLowOption( loaderData.options ).price} to $${getHighOption( loaderData.options ).price}`}</p>
            <p className="mt-5">{loaderData.description}</p>
            <p className="mt-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione optio quibusdam explicabo ipsum tempore beatae fugit fugiat, libero asperiores neque eligendi laboriosam repudiandae exercitationem iure earum quidem nostrum aliquam quam.</p>
            <Form method="post" className="mt-5">
              <div className="grid grid-cols-3 gap-5">
                {loaderData.options.map( ( option ) => (
                  <label key={option._id} className="inline-block has-checked:outline-2 rounded-xl overflow-hidden cursor-pointer">
                    <input onChange={handleRadioChange} checked={selectedOption?._id === option._id} value={option._id} name="option" type="radio" className="sr-only" />
                    <img src={`http://localhost:4173/${option.image.path}`} alt={option.image.alt} className="w-wull aspect-square bg-neutral-100" />
                  </label>
                ) )}
              </div>
              <button type="submit" className="w-full mt-5 p-3.5 rounded-xl bg-black text-white outline-offset-3 cursor-pointer disabled:cursor-default disabled:opacity-70 ">Add to cart</button>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;