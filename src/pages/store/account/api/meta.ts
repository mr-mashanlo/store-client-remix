import { MetaFunction } from '@remix-run/react';

const meta: MetaFunction = () => {
  return [
    { title: 'My account' },
    { name: 'description', content: 'View your order history, track shipments, and manage saved addresses.' }
  ];
};

export default meta;