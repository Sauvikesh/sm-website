import { contentProps } from '../../../../errorMessaging/page';
import LoadingImage from '@/app/(pages)/_components/LoadingImage/LoadingImage';
import { ImageWithModal } from '@/app/(pages)/_components/ImageModal/ImageModal';
import Image from 'next/image';
import ScrollArrow, {
  ScrollArrowProps,
} from '@/app/(pages)/(index-page)/_components/Landing/ScrollArrow';

export default function Landing(content: contentProps) {
  const scrollArrowProps: ScrollArrowProps = {
    sectionId: 'Context',
  };

  return (
    <section
      className="flex flex-col h-[100vh] items-center justify-end gap-6 -mx-[40%] relative overflow-clip"
      style={{
        backgroundImage:
          'radial-gradient(67.21% 51.52% at 67.71% 57.25%, #0064FF 0%, #000 73.44%)',
        backgroundSize: 'cover',
      }}
    >
      <ImageWithModal
        src="/paramount/logo.svg"
        alt=""
        width={1000}
        height={1000}
        className="h-[40px] w-auto z-10"
      />
      <Image
        src="/paramount/blueEllipse.png"
        alt=""
        width={1000}
        height={1000}
        className="w-[30%] absolute left-0 bottom-0 z-0"
      />
      <h2 className="text-center text-white w-[800px]">{content.h2?.at(0)}</h2>
      <h4 className="text-white text-center">7 min read</h4>

      <div className="relative z-10 -mb-[10px]">
        <LoadingImage
          src={content.images?.at(0)?.url}
          alt=""
          width={1000}
          height={1000}
          className="w-[1027px]"
        />
        <ImageWithModal
          src={content.images?.at(1)?.url}
          alt=""
          width={1000}
          height={1000}
          className="w-[301px] absolute bottom-[0%] right-[-10%]"
        />
      </div>
      <div className="absolute top-[85vh] z-50">
        <ScrollArrow {...scrollArrowProps} />
      </div>
    </section>
  );
}
