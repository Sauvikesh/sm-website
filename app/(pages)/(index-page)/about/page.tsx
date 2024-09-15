import Bio from './_components/Bio/Bio';
import Journey from './_components/Journey';
import Philosophy from './_components/Philosophy';

export default function About() {
  return (
    <main className="flex flex-col items-center text-black font-dm-sans ">
      <Bio />
      <Philosophy />
      <Journey />
    </main>
  );
}
