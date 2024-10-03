import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';
import Image from 'next/image';

export default function Outcome() {
  return (
    <section className="flex flex-col gap-10">
      <RevealWrapper>
        <div className="flex flex-col gap-2">
          <h3>Outcome</h3>
          <p>
            After polling 38 individuals from our target audience, 29% reported
            that they were extremely likely and 45% reported they were likely to
            use Sage.
          </p>
        </div>

        <div className="flex flex-col gap-10 items-center">
          <h3>How likely are you to use this application?</h3>

          <Image
            src="/sageImages/outcome.svg"
            width={1000}
            height={1000}
            alt="outcomes graph"
            className="w-[70%]"
          />
        </div>
      </RevealWrapper>
    </section>
  );
}
