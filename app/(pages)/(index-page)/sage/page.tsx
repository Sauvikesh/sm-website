import Demo from './_components/Demo/Demo';
import Landing from './_components/Landing/Landing';
import { Providers } from '@/app/_providers';
export default function Sage() {
  return (
    <main>
      <Providers>
        <Landing />
      </Providers>
      <Demo />
    </main>
  );
}
