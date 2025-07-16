import { Outlet } from '@remix-run/react';
import { FC } from 'react';

import { Header } from '@/widgets/header';
import { StoreControls } from '@/widgets/store-controls';

const Main: FC = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <StoreControls />
    </>
  );
};

export default Main;