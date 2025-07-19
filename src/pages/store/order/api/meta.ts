import { MetaFunction } from '@remix-run/react';

import loader from './loader';

const meta: MetaFunction<typeof loader> = ( { data } ) => {
  return [
    { title: `Order #${data?.uid}` },
    { name: 'description', content: 'View your order details, tracking status, and invoice.' }
  ];
};

export default meta;