import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';
import HeadingBody from '../../../../../_components/HeadingBody/HeadingBody';
import { contentProps } from '../../../../errorMessaging/page';
import Image from 'next/image';

export default function Visibility(content: contentProps) {
  return (
    <section className="flex flex-col gap-10" id="Visibility">
      <RevealWrapper>
        <div className="flex flex-col gap-2">
          <h4>{content.h4?.at(0)}</h4>
          <HeadingBody h={content.h3?.at(0)} p={content.body?.at(0)} />
        </div>

        <div className="flex w-full gap-8 items-center">
          <div className="flex flex-col items-center gap-2">
            <Image
              src={content.images?.at(2)?.url}
              alt=""
              width={1000}
              height={1000}
              className="w-[488px]"
            />
            <h4>{content.h4?.at(1)}</h4>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image
              src={content.images?.at(0)?.url}
              alt=""
              width={1000}
              height={1000}
              className="w-[488px]"
            />
            <h4>{content.h4?.at(2)}</h4>
          </div>
        </div>
        <p>{content.body?.at(1)}</p>
        <div className="flex flex-col items-center gap-2">
          <Image
            src={content.images?.at(1)?.url}
            alt=""
            width={1000}
            height={1000}
            className="w-full"
          />
          <h4>{content.h4?.at(3)}</h4>
        </div>
      </RevealWrapper>
    </section>
  );
}
