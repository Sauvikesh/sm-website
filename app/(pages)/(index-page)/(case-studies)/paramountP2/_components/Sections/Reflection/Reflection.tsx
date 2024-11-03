import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';
import HeadingBody from '../../../../_components/HeadingBody/HeadingBody';
import { contentProps } from '../../../page';

export default function Reflection(content: contentProps) {
  return (
    <section className="flex flex-col gap-8" id="Reflection">
      <RevealWrapper>
        <div className="flex flex-col gap-4">
          <h4>{content.h4?.at(0)}</h4>
          <HeadingBody h={content.h3?.at(0)} p={content.body?.at(0)} />
        </div>
        <HeadingBody h={content.h3?.at(1)} p={content.body?.at(1)} />
        <HeadingBody h={content.h3?.at(2)} p={content.body?.at(2)} />
      </RevealWrapper>
    </section>
  );
}
