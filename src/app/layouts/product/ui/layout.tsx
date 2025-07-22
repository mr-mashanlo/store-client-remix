import { Outlet, useLoaderData } from '@remix-run/react';
import { FC } from 'react';

import { Header } from '@/widgets/header';
import { StoreControls } from '@/widgets/store-controls';

import loader from '../api/loader';

const Product: FC = () => {
  const loaderData = useLoaderData<typeof loader>();

  return (
    <>
      <Header isAuth={loaderData.token} />
      <main>
        <Outlet />
      </main>
      <StoreControls />
    </>
  );
};

export default Product;