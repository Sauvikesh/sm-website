import LoadingImage from '@/app/(pages)/_components/LoadingImage/LoadingImage';
import { contentProps } from '../../../page';
import Image from 'next/image';

export default function Landing(content: contentProps) {
  return (
    <section
      className="flex flex-col items-center gap-10 pt-[130px] pb-5 -mx-[40%]"
      style={{
        backgroundImage:
          "url('/paramount/landingBlur.png'), radial-gradient(circle, #0064FF 0%, #000A3B 100%)",
        backgroundSize: 'cover',
      }}
    >
      <Image
        src="/paramount/logo.svg"
        alt=""
        width={1000}
        height={1000}
        className="w-[168px]"
      />
      <div className="flex flex-col w-[670px] items-center gap-4">
        <h2 className="text-center text-white">{content.h2?.at(0)}</h2>
        <h4 className="text-[#ECF1FC]">7 min read</h4>
      </div>
      <div className="relative">
        <LoadingImage
          src={content.images?.at(0)?.url}
          alt=""
          width={1000}
          height={1000}
          className="w-[754px]"
        />
        <Image
          src={content.images?.at(1)?.url}
          alt=""
          width={1000}
          height={1000}
          className="w-[105px] absolute bottom-0 right-[-5%]"
        />
        <Image
          src={content.images?.at(2)?.url}
          alt=""
          width={1000}
          height={1000}
          className="w-[573px] absolute bottom-0 right-[-80%]"
        />
        <Image
          src={content.images?.at(3)?.url}
          alt=""
          width={1000}
          height={1000}
          className="w-[408px] absolute bottom-0 left-[-57%]"
        />
      </div>
    </section>
  );
}
