import { Outlet } from '@remix-run/react';
import { FC } from 'react';

const Main: FC = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
};

export default Main;