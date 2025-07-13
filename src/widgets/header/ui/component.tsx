import { Link, NavLink } from '@remix-run/react';
import { FC } from 'react';

const Header: FC = () => {
  return (
    <header className="p-5 sm:px-15 absolute top-0 left-0 right-0">
      <div className="flex justify-between items-center gap-4">
        <div>
          <Link to="/" title="Go to homepage" className="block h-5 shrink-0">
            <img src="/lee.svg" alt="Lee's company" className="w-full h-full" />
          </Link>
        </div>
        <nav aria-label="Header navigation" className="flex items-center justify-end gap-7">
          <ul className="flex items-center gap-10">
            <li><NavLink to="/signin">Sign in</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;