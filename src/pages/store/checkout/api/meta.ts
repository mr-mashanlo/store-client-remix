import { MetaFunction } from '@remix-run/react';

const meta: MetaFunction = () => {
  return [
    { title: 'Checkout' },
    { name: 'description', content: 'Finalize your order in seconds with our secure checkout.' }
  ];
};

export default meta;