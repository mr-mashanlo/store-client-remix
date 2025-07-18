import { Form, Link, useLoaderData } from '@remix-run/react';
import { FC } from 'react';

import loader from '../api/loader';

const Cart: FC = () => {
  const loaderData = useLoaderData<typeof loader>();
  const total = loaderData.options.reduce( ( acc, order ) => { return acc += order.option.price * order.quantity; }, 0 );

  return (
    <section className="min-h-screen p-3 sm:p-20 flex flex-col justify-center gap-20">
      <h2 className="text-center font-bold">Cart</h2>
      {
        loaderData.options.length
          ? <ul className="grid gap-10">
            {loaderData.options.map( ( { option, quantity } ) => (
              <li key={option._id}>
                <article className="grid grid-cols-[1fr_6.25rem_1fr] justify-center items-center gap-20">
                  <div className="justify-items-end">
                    <Form method="post" className="flex items-center bg-neutral-200/50 rounded-full">
                      <input value={option.uid} name="option" type="hidden" />
                      <button value="decrement" name="action" type="submit" className="w-10 h-10  outline-offset-3 rounded-full cursor-pointer flex items-center justify-center">
                        <span className="sr-only">Remove from cart</span>
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" aria-hidden="true">
                          <path d="M5,13h14c0.6,0,1-0.4,1-1s-0.4-1-1-1H5c-0.6,0-1,0.4-1,1S4.4,13,5,13z"/>
                        </svg>
                      </button>
                      <button value="increment" name="action" type="submit" className="w-10 h-10 bg-neutral-200/80 outline-offset-3 rounded-full cursor-pointer flex items-center justify-center">
                        <span className="sr-only">Add to cart</span>
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" aria-hidden="true">
                          <path d="M5,13h6v6c0,0.6,0.4,1,1,1s1-0.4,1-1v-6h6c0.6,0,1-0.4,1-1s-0.4-1-1-1h-6V5c0-0.6-0.4-1-1-1s-1,0.4-1,1v6H5   c-0.6,0-1,0.4-1,1S4.4,13,5,13z"/>
                        </svg>
                      </button>
                    </Form>
                  </div>
                  <img src={`http://localhost:4173/${option.image.path}`} alt={option.image.alt} className="w-25 aspect-square object-cover bg-neutral-100" />
                  <div>
                    <h3>{option.name}</h3>
                    <p className="mt-1">{quantity} items for ${option.price}</p>
                  </div>
                </article>
              </li>
            ) )}
          </ul>
          : <div className="grid grid-cols-[1fr_6.25rem_1fr] justify-center items-center gap-20">
            <div className="justify-items-end">
              <h3>Nothing here</h3>
            </div>
            <div className="w-25 aspect-square object-cover bg-neutral-100"></div>
            <div>
              <p>Shop now</p>
            </div>
          </div>
      }
      <div>
        {
          loaderData.options.length
            ? <Link to={loaderData.token ? '/checkout' : '/signin?from=cart'} className="w-35 h-10 mx-auto outline-offset-3 rounded-full cursor-pointer flex items-center justify-center bg-black text-white">Checkout ${total}</Link>
            : <Link to="/" className="w-30 h-10 mx-auto outline-offset-3 rounded-full cursor-pointer flex items-center justify-center bg-black text-white">Back</Link>
        }
      </div>
    </section>
  );
};

export default Cart;