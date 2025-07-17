import { Form, Link, useLoaderData } from '@remix-run/react';
import { FC } from 'react';

import loader from '../api/loader';

const Cart: FC = () => {
  const loaderData = useLoaderData<typeof loader>();

  return (
    <section className="p-3 sm:p-20">
      <ul className="grid sm:grid-cols-2 gap-3 sm:gap-10">
        {loaderData.map( ( { option, quantity } ) => (
          <li key={option._id}>
            <article className="relative">
              <img src={`http://localhost:4173/${option.image.path}`} alt={option.image.alt} className="w-full aspect-[4/3] object-cover bg-neutral-100" />
              <h2 className="font-medium absolute left-5 bottom-5">{option.name}</h2>
              <p className="font-medium absolute right-5 bottom-5">{quantity} items for ${option.price}</p>
              <Form method="post" className="flex items-center bg-neutral-200/50 rounded-full absolute bottom-5 left-1/2 -translate-x-1/2">
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
            </article>
          </li>
        ) )}
      </ul>
      <div className="bg-neutral-200/50 backdrop-blur-xs rounded-full flex fixed bottom-5 left-1/2 -translate-x-1/2">
        <Link to="/checkout" className="w-25 h-10 outline-offset-3 rounded-full cursor-pointer flex items-center justify-center">
          Checkout
        </Link>
      </div>
    </section>
  );
};

export default Cart;