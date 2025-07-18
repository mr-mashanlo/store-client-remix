import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  size?: 'sm' | 'bg',
  loading?: boolean
}

const sizes = {
  sm: 'w-full p-3.5 rounded-xl',
  bg: 'w-30 h-10 rounded-full'
};

const CustomButton: FC<Props> = ( { children, className, size = 'bg', loading = false, ...others } ) => {
  return (
    <button {...others} className={twMerge( 'flex items-center justify-center bg-black text-white cursor-pointer outline-offset-3 relative', sizes[size], className )}>
      <span className={loading ? 'opacity-0' : 'opacity-100'}>{children}</span>
      <span className={twMerge( 'absolute top-1/2 left-1/2 -translate-1/2', loading ? 'opacity-100' : 'opacity-0' )}>● ● ●</span>
    </button>
  );
};

export default CustomButton;