import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';
import HeadingBody from '../../../../../_components/HeadingBody/HeadingBody';
import { contentProps } from '../../../../errorMessaging/page';
import { ImageWithModal } from '@/app/(pages)/_components/ImageModal/ImageModal';

export default function MarketBehavior(content: contentProps) {
  return (
    <section className="flex flex-col gap-10" id="Market Behavior">
      <RevealWrapper>
        <HeadingBody h={content.h3?.at(0)} p={content.body?.at(0)} />

        <div className="flex justify-between items-end gap-10">
          <div className="flex w-[747px] flex-col items-center gap-2 self-start">
            <ImageWithModal
              src={content.images?.at(0)?.url}
              alt=""
              width={1000}
              height={1000}
              className="h-[429px]"
            />
            <h4>{content.h4?.at(0)}</h4>
          </div>
          <div className="flex w-[213px] flex-col items-center gap-2 self-end">
            <ImageWithModal
              src={content.images?.at(1)?.url}
              alt=""
              width={1000}
              height={1000}
              className="w-full h-[429px]"
            />
            <h4>{content.h4?.at(1)}</h4>
          </div>
        </div>
      </RevealWrapper>
    </section>
  );
}
