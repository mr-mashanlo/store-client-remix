import { Link, useLoaderData } from '@remix-run/react';
import { FC } from 'react';

import { getLowOption } from '@/entities/option';

import loader from '../api/loader';

const Home: FC = () => {
  const loaderData = useLoaderData<typeof loader>();

  return (
    <section className="p-3 sm:p-20">
      <ul className="grid sm:grid-cols-2 gap-3 sm:gap-10">
        {loaderData.map( product => (
          <li key={product._id}>
            <article className="relative">
              <Link to={`/product/${product.uid}`}>
                <img src={`http://localhost:4173/${product.images[0].path}`} alt={product.images[0].alt} className="w-full aspect-[4/3] object-cover bg-neutral-100" />
              </Link>
              <h2 className="font-medium absolute left-5 bottom-5">{product.name}</h2>
              <p className="font-medium absolute right-5 bottom-5">
                {product.options.length > 1 ? `${product.options.length} options from $${getLowOption( product.options ).price}` : product.options[0].price }
              </p>
            </article>
          </li>
        ) )}
      </ul>
    </section>
  );
};

export default Home;