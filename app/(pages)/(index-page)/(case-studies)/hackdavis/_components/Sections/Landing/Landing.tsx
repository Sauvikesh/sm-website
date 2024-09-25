import { ImageWithModal } from '@/app/(pages)/_components/ImageModal/ImageModal';

export default function Landing() {
  return (
    <header className="bg-[#123041] text-white flex flex-col justify-center items-center pl-[11%] pr-[11%] pt-12">
      <h1 className="text-[80px] font-f-w font-medium lead-[44px] pt-9">
        HackDavis 2024
      </h1>
      <p className="pb-14 text-[18px] font-medium">7 min read</p>
      <div className="flex w-full items-center justify-center">
        <ImageWithModal
          src="/hackdavis/Mobile.svg"
          width={1000}
          height={1000}
          alt="mobile phone"
          className="translate-x-11 z-10"
        />
        <ImageWithModal
          src="/hackdavis/Tablet.svg"
          width={1000}
          height={1000}
          alt="tablet"
          className="translate-x-7 -translate-y-2 z-10"
        />
        <ImageWithModal
          src="/hackdavis/Laptop.svg"
          width={1000}
          height={1000}
          alt="laptop"
          className="-translate-x-10 -translate-y-11 z-0"
        />
      </div>
    </header>
  );
}
