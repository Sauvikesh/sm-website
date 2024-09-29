import { ImageWithModal } from '@/app/(pages)/_components/ImageModal/ImageModal';

export default function Landing() {
  return (
    <header className="bg-[#123041] h-[75vh] text-white flex flex-col justify-center items-center pl-[11%] pr-[11%] pt-12">
      <h1 className="text-[80px] font-f-w font-medium lead-[44px] pt-9">
        HackDavis 2024
      </h1>
      <p className="pb-14 text-[18px] font-medium">7 min read</p>
      <div className="flex w-full items-center justify-center">
        <ImageWithModal
          src="/hackdavis/hero/Mobile.png"
          width={1000}
          height={1000}
          alt="mobile phone"
          className="z-10 w-[178px] translate-x-6 -translate-y-2"
          addPriority={true}
        />
        <ImageWithModal
          src="/hackdavis/hero/Tablet.png"
          width={1000}
          height={1000}
          alt="tablet"
          className="z-10 w-[391px] translate-x-4 -translate-y-3"
          addPriority={true}
        />
        <ImageWithModal
          src="/hackdavis/hero/Laptop.png"
          width={1000}
          height={1000}
          alt="laptop"
          className="z-0 w-[620px] -translate-y-8 -translate-x-4"
          addPriority={true}
        />
      </div>
    </header>
  );
}
