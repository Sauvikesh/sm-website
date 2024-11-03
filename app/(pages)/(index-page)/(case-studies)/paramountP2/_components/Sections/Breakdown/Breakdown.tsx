import FormattedP from '@/app/(pages)/_components/FormattedP/FormattedP';
import HeadingBody from '../../../../_components/HeadingBody/HeadingBody';
import { contentProps } from '../../../page';
import Image from 'next/image';
import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';

export default function BreakDown(content: contentProps) {
  console.log(content.body?.at(0));
  return (
    <section className="flex flex-col gap-20">
      <RevealWrapper>
        <div className="flex flex-col gap-10">
          <h3>{content.h3?.at(0)}</h3>
          <FormattedP text={content.body?.at(0)} />
          <div className="flex w-full gap-8">
            <div className="flex flex-col items-center gap-2 flex-grow">
              <Image
                src={content.images?.at(1)?.url}
                alt=""
                width={1000}
                height={1000}
                className="w-full h-[274px]"
              />
              <h4>{content.h4?.at(0)}</h4>
            </div>
            <div className="flex flex-col items-center gap-2 flex-grow">
              <Image
                src={content.images?.at(0)?.url}
                alt=""
                width={1000}
                height={1000}
                className="w-full h-[274px]"
              />
              <h4>{content.h4?.at(1)}</h4>
            </div>
          </div>
        </div>

        <HeadingBody h={content.h3?.at(1)} p={content.body?.at(1)} />

        <HeadingBody h={content.h3?.at(2)} p={content.body?.at(2)} />

        <div className="flex w-full gap-8">
          <div className="flex flex-col items-center gap-2 flex-grow">
            <Image
              src={content.images?.at(4)?.url}
              alt=""
              width={1000}
              height={1000}
              className="w-full h-[176px]"
            />
            <h4>{content.h4?.at(2)}</h4>
          </div>
          <div className="flex flex-col items-center gap-2 flex-grow">
            <Image
              src={content.images?.at(3)?.url}
              alt=""
              width={1000}
              height={1000}
              className="w-full h-[176px]"
            />
            <h4>{content.h4?.at(3)}</h4>
          </div>
          <div className="flex flex-col items-center gap-2 flex-grow">
            <Image
              src={content.images?.at(2)?.url}
              alt=""
              width={1000}
              height={1000}
              className="w-full h-[176px]"
            />
            <h4>{content.h4?.at(4)}</h4>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <HeadingBody h={content.h3?.at(3)} p={content.body?.at(3)} />

          <div className="flex w-full gap-8">
            <div className="flex flex-col items-center gap-2 flex-grow">
              <Image
                src={content.images?.at(5)?.url}
                alt=""
                width={1000}
                height={1000}
                className="w-full h-[238px]"
              />
              <h4>{content.h4?.at(5)}</h4>
            </div>
            <div className="flex flex-col items-center gap-2 flex-grow">
              <Image
                src={content.images?.at(6)?.url}
                alt=""
                width={1000}
                height={1000}
                className="w-full h-[238px]"
              />
              <h4>{content.h4?.at(6)}</h4>
            </div>
          </div>
        </div>
      </RevealWrapper>
    </section>
  );
}
