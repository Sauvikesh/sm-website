import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';
import Image from 'next/image';

export default function Outcome() {
  return (
    <section className="pl-[15%] pr-[15%] flex flex-col gap-12 pb-20">
      <RevealWrapper>
        <h3>Outcome</h3>

        <h3>
          After polling 38 individuals from our target audience, 29% reported
          that they were extremely likely and 45% reported they were likely to
          use Sage.
        </h3>

        <h2 className="text-center">
          How likely are you to use this application?
        </h2>

        <Image
          src="/sageImages/outcome.svg"
          width={1000}
          height={1000}
          alt="outcomes graph"
          className="w-[70%] h-auto pb-4 self-center"
        />
      </RevealWrapper>
    </section>
  );
}
