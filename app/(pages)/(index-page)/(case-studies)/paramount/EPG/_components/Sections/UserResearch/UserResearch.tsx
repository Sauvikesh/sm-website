import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';
import HeadingBody from '../../../../../_components/HeadingBody/HeadingBody';
import { contentProps } from '../../../../errorMessaging/page';
import Image from 'next/image';

export default function UserResearch(content: contentProps) {
  return (
    <section className="flex flex-col gap-20" id="User Research">
      <RevealWrapper>
        <HeadingBody h={content.h3?.at(0)} p={content.body?.at(0)} />

        <Image
          src={content.images?.at(4)?.url}
          alt=""
          width={1000}
          height={1000}
          className="w-full"
        />
        <div className="flex flex-col gap-8">
          <h3 className="text-center">{content.h3?.at(1)}</h3>
          <div className="flex gap-8">
            <Image
              src={content.images?.at(0)?.url}
              alt=""
              width={1000}
              height={1000}
              className="w-full"
            />
            <Image
              src={content.images?.at(1)?.url}
              alt=""
              width={1000}
              height={1000}
              className="w-full"
            />
            <Image
              src={content.images?.at(2)?.url}
              alt=""
              width={1000}
              height={1000}
              className="w-full"
            />
            <Image
              src={content.images?.at(3)?.url}
              alt=""
              width={1000}
              height={1000}
              className="w-full"
            />
          </div>
        </div>
      </RevealWrapper>
    </section>
  );
}