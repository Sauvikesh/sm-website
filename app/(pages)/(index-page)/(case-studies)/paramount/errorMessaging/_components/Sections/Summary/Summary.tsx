import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';
import HeadingBody from '../../../../../_components/HeadingBody/HeadingBody';
import { contentProps } from '../../../page';
import JumpToFinalDesigns from './JumpToFinalDesigns';

export default function Summary(content: contentProps) {
  // TODO: make this look nicer ??
  const pageContent = content.h3?.map((h, index) => ({
    h,
    p: content.body?.at(index) ?? '',
  }));

  return (
    <section className="flex flex-col gap-10" id="Context">
      <RevealWrapper>
        <div className="flex flex-row justify-between">
          {pageContent
            ?.slice(0, 4)
            .map((para, index) => (
              <HeadingBody h={para.h} p={para.p} key={index} />
            ))}
        </div>

        <div className="flex flex-col gap-10">
          {pageContent
            ?.slice(4, 7)
            .map((para, index) => (
              <HeadingBody h={para.h} p={para.p} key={index} />
            ))}
        </div>

        <div className="flex justify-center">
          <JumpToFinalDesigns />
        </div>
      </RevealWrapper>
    </section>
  );
}
