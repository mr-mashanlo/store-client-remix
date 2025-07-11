import { MetaFunction } from '@remix-run/node';

const meta: MetaFunction = () => {
  return [
    { title: 'Save your shipping address' },
    { name: 'description', content: 'Enter and save your shipping address for faster and smoother checkout in the future' }
  ];
};

export default meta;