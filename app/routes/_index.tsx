import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' }
  ];
};

export default function Index() {
  return (
    <div className="p-10">
      <header>
        <h1>Welcome to Remix</h1>
      </header>
    </div>
  );
}