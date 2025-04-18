import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';
import { ImageWithModal } from '@/app/(pages)/_components/ImageModal/ImageModal';

export default function Question() {
  return (
    <section className="bg-[#005271] text-white p-[160px] pl-[30%] -mx-[30%] flex relative">
      <RevealWrapper>
        <h2 className="pr-[23%]">
          How might we inspire participants and sponsors to champion social
          good?{' '}
        </h2>
      </RevealWrapper>

      <ImageWithModal
        src="/hackdavis/process/charstack3.svg"
        alt="char stack"
        width={1000}
        height={1000}
        className="absolute w-[400px] top-[-115px] right-[80px]"
      />
    </section>
  );
}
