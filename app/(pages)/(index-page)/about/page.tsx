import Bio from './_components/Bio/Bio';
import Hobbies from './_components/Hobbies/Hobbies';
import Philosophy from './_components/Philosophy/Philosophy';

export default function About() {
  return (
    <main className="flex flex-col text-black font-dm-sans ">
      <Bio />
      <Philosophy />
      <Hobbies />
    </main>
  );
}
