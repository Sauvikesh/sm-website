import { contentProps } from '../../../../errorMessaging/page';
import Image from 'next/image';
import LoadingImage from '@/app/(pages)/_components/LoadingImage/LoadingImage';

export default function Landing(content: contentProps) {
  return (
    <section
      className="flex flex-col items-center gap-10 pt-[130px] -mx-[40%]"
      style={{
        backgroundImage:
          'radial-gradient(67.21% 51.52% at 67.71% 57.25%, #0064FF 0%, #000 73.44%)',
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
          className="w-[1027px]"
        />
        <Image
          src={content.images?.at(1)?.url}
          alt=""
          width={1000}
          height={1000}
          className="w-[301px] absolute bottom-[0%] right-[-10%]"
        />
      </div>
    </section>
  );
}
