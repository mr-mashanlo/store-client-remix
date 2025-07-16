import { Link } from '@remix-run/react';
import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="p-5.5 sm:px-15 absolute top-0 left-0 right-0">
      <div className="flex justify-between items-center gap-4">
        <div>
          <Link to="/" title="Go to homepage" className="block h-4 shrink-0">
            <img src="/lee.svg" alt="Lee's company" className="w-full h-full" />
          </Link>
        </div>
        <nav aria-label="Footer navigation">
          <ul className="flex items-center gap-10">
            <li><Link to="/">Search order</Link></li>
            <li><Link to="/post">Terms</Link></li>
            <li><Link to="/post">Privacy</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;