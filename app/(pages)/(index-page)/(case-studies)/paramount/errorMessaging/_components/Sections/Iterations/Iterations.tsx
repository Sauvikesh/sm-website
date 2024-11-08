import HeadingBody from '../../../../../_components/HeadingBody/HeadingBody';
import { contentProps } from '../../../page';
import Image from 'next/image';
import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';
import { ImageWithModal } from '@/app/(pages)/_components/ImageModal/ImageModal';

export default function Iterations(content: contentProps) {
  return (
    <section className="flex flex-col gap-20" id="Iterations">
      <RevealWrapper>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h4>{content.h4?.at(0)}</h4>
            <HeadingBody h={content.h3?.at(0)} p={content.body?.at(0)} />
          </div>

          <div className="flex w-full items-center">
            <div className="flex flex-col items-center gap-2 flex-grow">
              <ImageWithModal
                src={content.images?.at(0)?.url}
                alt=""
                width={1000}
                height={1000}
                className="w-full"
              />
              <h4>{content.h4?.at(1)}</h4>
            </div>
            <Image
              src="/hackdavis/Arrow.svg"
              alt="arrow"
              width={1000}
              height={1000}
              className="w-12"
            />
            <div className="flex flex-col items-center gap-2 flex-grow">
              <ImageWithModal
                src={content.images?.at(1)?.url}
                alt=""
                width={1000}
                height={1000}
                className="w-full"
              />
              <h4>{content.h4?.at(2)}</h4>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <HeadingBody h={content.h3?.at(1)} p={content.body?.at(1)} />

          <div className="flex w-full gap-8">
            <div className="flex flex-col items-center gap-2 self-end flex-grow">
              <ImageWithModal
                src={content.images?.at(1)?.url}
                alt=""
                width={1000}
                height={1000}
                className="w-[410px]"
              />
              <h4>{content.h4?.at(3)}</h4>
            </div>
            <Image
              src="/hackdavis/Arrow.svg"
              alt="arrow"
              width={1000}
              height={1000}
              className="w-10"
            />
            <div className="flex flex-col items-center gap-2 flex-grow">
              <ImageWithModal
                src={content.images?.at(2)?.url}
                alt=""
                width={1000}
                height={1000}
                className="w-[478px]"
              />
              <h4>{content.h4?.at(4)}</h4>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <HeadingBody h={content.h3?.at(2)} p={content.body?.at(2)} />

          <div className="flex w-full gap-8">
            <div className="flex flex-col items-center gap-2 flex-grow">
              <ImageWithModal
                src={content.images?.at(2)?.url}
                alt=""
                width={1000}
                height={1000}
                className="w-full"
              />
              <h4>{content.h4?.at(5)}</h4>
            </div>
            <Image
              src="/hackdavis/Arrow.svg"
              alt="arrow"
              width={1000}
              height={1000}
              className="w-10"
            />
            <div className="flex flex-col items-center gap-2 flex-grow">
              <ImageWithModal
                src={content.images?.at(3)?.url}
                alt=""
                width={1000}
                height={1000}
                className="w-full"
              />
              <h4>{content.h4?.at(6)}</h4>
            </div>
          </div>
        </div>
      </RevealWrapper>
    </section>
  );
}
