import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';
import Image from 'next/image';

export default function Question() {
  return (
    <section className="bg-[#005271] text-white p-[160px] pl-[216px] pr-[216px] flex relative">
      <RevealWrapper>
        <h2 className="pr-[23%]">
          How might we inspire participants and sponsors to champion social
          good?{' '}
        </h2>
      </RevealWrapper>

      <Image
        src="/hackdavis/process/charstack3.svg"
        alt="char stack"
        width={1000}
        height={1000}
        className="absolute w-[400px] top-[-115px] right-[100px]"
      />
    </section>
  );
}
