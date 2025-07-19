import { useLoaderData } from '@remix-run/react';
import { FC } from 'react';

import loader from '../api/loader';

const Account: FC = () => {
  const loaderData = useLoaderData<typeof loader>();

  return (
    <section className="min-h-screen p-3 sm:p-20 flex flex-col justify-center gap-40">
      <div className="flex flex-col justify-center gap-20">
        <h2 className="text-center font-bold">Address</h2>
        <p className="text-center">{loaderData.address.address}</p>
      </div>
      <div className="flex flex-col justify-center gap-20">
        <h2 className="text-center font-bold">History</h2>
        <div className="flex flex-col justify-center gap-40">
          {loaderData.orders.map( order => (
            <div key={order._id} className="flex flex-col justify-center gap-20">
              <h3 className="text-center font-bold">Order {order.uid} - created: {order.created}</h3>
              <ul className="grid gap-10">
                {order.options.map( option => (
                  <li key={option.option._id}>
                    <article className="grid grid-cols-[1fr_6.25rem_1fr] justify-center items-center gap-20">
                      <div className="justify-items-end">
                        <h3>{option.option.name}</h3>
                      </div>
                      <img src={`http://localhost:4173/${option.option.image.path}`} alt={option.option.image.alt} className="w-25 aspect-square object-cover bg-neutral-100" />
                      <div>
                        <p>{option.quantity} items for ${option.price}</p>
                      </div>
                    </article>
                  </li>
                ) )}
              </ul>
              <p className="text-center font-bold">{order.status}</p>
            </div>
          ) )}
        </div>
      </div>
    </section>
  );
};

export default Account;