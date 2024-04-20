import { getDictionary } from '@/api/get-dictionary';
import { searchAction } from './actions';
import TransitionLink from './components/TransitionLink';

export default async function Home({
  searchParams,
}: {
  searchParams: {
    search: string;
  };
}) {
  const data = await getDictionary(searchParams.search);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form action={searchAction}>
        <input
          type="search"
          name="search"
          className="p-4 rounded-md text-black min-w-[800px]"
        />
        <button type="submit">Search</button>
      </form>

      {JSON.stringify(data)}

      <h1 className="text-5xl">HOME PAGE</h1>
      <TransitionLink href="/about" label="About ->" />
    </main>
  );
}
