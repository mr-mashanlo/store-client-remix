import { MetaFunction } from '@remix-run/node';

import loader from './loader';

const meta: MetaFunction<typeof loader> = ( { data } ) => {
  return [
    { title: data?.category.name },
    { name: 'description', content: data?.category.description }
  ];
};

export default meta;