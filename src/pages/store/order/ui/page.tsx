import { useLoaderData } from '@remix-run/react';
import { FC } from 'react';

import loader from '../api/loader';

const Order: FC = () => {
  const loaderData = useLoaderData<typeof loader>();
  const date = new Date( loaderData.created ).toLocaleDateString( 'en-US', { year: 'numeric', month: 'long', day: 'numeric' } );

  return (
    <section className="min-h-screen p-3 sm:p-20 flex flex-col justify-center gap-20">
      <h2 className="text-center font-bold">Order #{loaderData.uid} - creared: {date}</h2>
      <ul className="grid gap-10">
        {loaderData.options.map( ( { option, quantity } ) => (
          <li key={option._id}>
            <article className="grid grid-cols-[1fr_6.25rem_1fr] justify-center items-center gap-20">
              <div className="justify-items-end">
                <h3>{option.name}</h3>
              </div>
              <img src={`http://localhost:4173/${option.image.path}`} alt={option.image.alt} className="w-25 aspect-square object-cover bg-neutral-100" />
              <div>
                <p>{quantity} items for ${option.price}</p>
              </div>
            </article>
          </li>
        ) )}
      </ul>
      <p className="text-center font-bold">{loaderData.status}</p>
    </section>
  );
};

export default Order;