import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';
import HeadingBody from '../../../../../_components/HeadingBody/HeadingBody';
import { contentProps } from '../../../../errorMessaging/page';
import Image from 'next/image';
import { ImageWithModal } from '@/app/(pages)/_components/ImageModal/ImageModal';

export default function Personalization(content: contentProps) {
  return (
    <section className="flex flex-col gap-10" id="Personalization">
      <RevealWrapper>
        <div className="flex flex-col gap-2">
          <h4>{content.h4?.at(0)}</h4>
          <HeadingBody h={content.h3?.at(0)} p={content.body?.at(0)} />
        </div>

        <div className="flex w-full gap-8 items-center justify-between">
          <div className="flex flex-col items-center gap-2">
            <div className="flex gap-8 w-full">
              <ImageWithModal
                src={content.images?.at(0)?.url}
                alt=""
                width={1000}
                height={1000}
                className="w-[260px]"
              />
              <ImageWithModal
                src={content.images?.at(1)?.url}
                alt=""
                width={1000}
                height={1000}
                className="w-[260px]"
              />
            </div>
            <h4>{content.h4?.at(1)}</h4>
          </div>
          <Image
            src="/hackdavis/Arrow.svg"
            alt="arrow"
            width={1000}
            height={1000}
            className="w-12"
          />
          <div className="flex flex-col items-center gap-2">
            <ImageWithModal
              src={content.images?.at(2)?.url}
              alt=""
              width={1000}
              height={1000}
              className="w-[337px]"
            />
            <h4>{content.h4?.at(2)}</h4>
          </div>
        </div>
      </RevealWrapper>
    </section>
  );
}
