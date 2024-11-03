import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';
import HeadingBody from '../../../../../_components/HeadingBody/HeadingBody';
import { contentProps } from '../../../page';

export default function Results(content: contentProps) {
  return (
    <section className="flex flex-col gap-10" id="Results">
      <RevealWrapper>
        <div className="flex flex-col gap-4">
          <h4>{content.h4?.at(0)}</h4>
          <HeadingBody h={content.h3?.at(0)} p={content.body?.at(0)} />
        </div>
        <div className="flex w-full gap-8">
          <div className="flex items-center justify-center bg-[#F1F1F1] rounded-lg border border-[#CCC] p-8 flex-grow">
            <p className="text-center">{content.body?.at(1)}</p>
          </div>
          <div className="flex items-center justify-center bg-[#F1F1F1] rounded-lg border border-[#CCC] p-8 flex-grow">
            <p className="text-center">{content.body?.at(2)}</p>
          </div>
        </div>
      </RevealWrapper>
    </section>
  );
}
