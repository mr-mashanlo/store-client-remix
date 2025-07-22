import { Form, useLoaderData } from '@remix-run/react';
import { FC } from 'react';

import loader from '../api/loader';

const Checkout: FC = () => {
  const loaderData = useLoaderData<typeof loader>();
  const total = loaderData.options.reduce( ( acc, order ) => { return acc += order.option.price * order.quantity; }, 0 );

  return (
    <section className="min-h-screen p-3 sm:p-20 flex flex-col justify-center gap-20">
      <h2 className="text-center font-bold">Checkout</h2>
      <ul className="grid gap-10">
        {loaderData.options.map( ( { option, quantity } ) => (
          <li key={option._id}>
            <article className="grid grid-cols-[1fr_6.25rem_1fr] justify-center items-center gap-20">
              <div className="justify-items-end">
                <h3>{option.name}</h3>
              </div>
              <img src={option.image.path} alt={option.image.alt} className="w-25 aspect-square object-cover bg-neutral-100" />
              <div>
                <p>{quantity} items for ${option.price}</p>
              </div>
            </article>
          </li>
        ) )}
      </ul>
      <p className="text-center">{loaderData.address.address}</p>
      <div>
        <Form method="post" replace>
          <button type="submit" className="w-35 h-10 mx-auto outline-offset-3 rounded-full cursor-pointer flex items-center justify-center bg-black text-white">Buy ${total}</button>
        </Form>
      </div>
    </section>
  );
};

export default Checkout;