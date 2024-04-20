// FILE: /app/about/page.tsx

import TransitionLink from '../components/TransitionLink';

export default function About() {
  return (
    <main className="bg-white text-black w-screen h-screen flex flex-col items-center justify-center gap-[50px]">
      <h1 className="text-5xl">ABOUT PAGE</h1>

      <TransitionLink href="/" label="Home ->" />
    </main>
  );
}
