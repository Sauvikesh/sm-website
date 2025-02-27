import LoadingImage from '@/app/(pages)/_components/LoadingImage/LoadingImage';
import { contentProps } from '../../../page';
import { ImageWithModal } from '@/app/(pages)/_components/ImageModal/ImageModal';
import ScrollArrow, {
  ScrollArrowProps,
} from '@/app/(pages)/(index-page)/_components/Landing/ScrollArrow';
import Image from 'next/image';

export default function Landing(content: contentProps) {
  const scrollArrowProps: ScrollArrowProps = {
    sectionId: 'Context',
  };

  return (
    <section
      className="flex flex-col items-center justify-end h-[100vh] gap-6 -mx-[40%]"
      style={{
        backgroundImage:
          "url('/paramount/landingBlur.png'), radial-gradient(circle, #0064FF 0%, #000A3B 100%)",
        backgroundSize: 'cover',
      }}
    >
      <ImageWithModal
        src="/paramount/logo.svg"
        alt=""
        width={1000}
        height={1000}
        className="h-[40px] w-auto"
      />
      <h2 className="text-center text-white w-[670px]">{content.h2?.at(0)}</h2>
      <h4 className="text-[#ECF1FC]">5 min read</h4>
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
      <div className="absolute top-[85vh]">
        <ScrollArrow {...scrollArrowProps} />
      </div>
    </section>
  );
}
