import { Outlet } from '@remix-run/react';
import { FC } from 'react';

const Auth: FC = () => {
  return (
    <main className="min-h-screen p-10 flex items-center justify-center">
      <Outlet />
    </main>
  );
};

export default Auth;