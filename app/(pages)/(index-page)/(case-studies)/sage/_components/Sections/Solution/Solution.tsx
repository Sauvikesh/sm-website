// TODO: add blurred image background, should not just be grey bg color

import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';
import Heading from '../../Heading/Heading';

export default function Solution() {
  return (
    <section className="flex flex-col pl-[15%] pr-[15%] justify-center h-[40vh]">
      <RevealWrapper>
        <Heading
          h1="THE SOLUTION"
          p="Help students set big-picture goals that simultaneously venerate
        familiarity and facilitate discovery."
        />
      </RevealWrapper>
    </section>
  );
}
