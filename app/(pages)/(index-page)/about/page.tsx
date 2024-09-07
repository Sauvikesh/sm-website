import Bio from './_components/Bio/Bio';
import Journey from './_components/Journey';
import Philosophy from './_components/Philosophy';
import PhotoCarousel from './_components/PhotoCarousel/PhotoCarousel';

export default function About() {
  return (
    <main className="flex flex-col items-center text-white font-dm-sans ">
      <PhotoCarousel />
      <Bio />
      <Journey />
      <Philosophy />
    </main>
  );
}
