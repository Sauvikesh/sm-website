import Demo from './_components/Demo/Demo';
import Landing from './_components/Landing/Landing';
import Summary from './_components/Summary/Summary';
import Problem from './_components/Problem/Problem';
import Solution from './_components/Solution/Solution';

import { Providers } from '@/app/_providers';

export default function Sage() {
  return (
    <main className="bg-[#e4edeb]">
      <Providers>
        <Landing />
      </Providers>
      <Summary />
      <Problem />
      <Solution />
      <Demo />
    </main>
  );
}
