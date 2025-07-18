import { Link, LinkProps } from '@remix-run/react';
import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends LinkProps {
  size?: 'sm' | 'bg'
}

const sizes = {
  sm: 'w-full p-3.5 rounded-xl',
  bg: 'w-30 h-10 rounded-full'
};

const CustomLink: FC<Props> = ( { children, className, size = 'bg', ...others } ) => {
  return (
    <Link {...others} className={twMerge( 'flex items-center justify-center bg-black text-white cursor-pointer outline-offset-3', sizes[size], className )}>
      {children}
    </Link>
  );
};

export default CustomLink;