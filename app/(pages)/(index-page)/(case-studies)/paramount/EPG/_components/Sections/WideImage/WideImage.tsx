import Image from 'next/image';
import { contentProps } from '../../../../errorMessaging/page';

export default function WideImage(content: contentProps) {
  return (
    <section
      className="flex flex-col items-center gap-10 pt-[130px] -mx-[40%]"
      style={{
        backgroundImage:
          'radial-gradient(67.21% 51.52% at 67.71% 57.25%, #0064FF 0%, #000 73.44%)',
        backgroundSize: 'cover',
      }}
    >
      <div className="flex justify-center">
        <Image
          src={content.images?.at(0)?.url}
          alt=""
          width={1000}
          height={1000}
          className="w-[363px] h-[600px]"
        />
        <Image
          src={content.images?.at(1)?.url}
          alt=""
          width={1000}
          height={1000}
          className="w-[363px] h-[600px]"
        />
        <Image
          src={content.images?.at(2)?.url}
          alt=""
          width={1000}
          height={1000}
          className="w-[363px] h-[600px]"
        />
      </div>
    </section>
  );
}
