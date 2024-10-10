import { ImageWithModal } from '@/app/(pages)/_components/ImageModal/ImageModal';

export default function Landing() {
  return (
    <section
      className="bg-[#123041] h-[75vh] text-white flex flex-col justify-center items-center -mx-[40%] pt-12"
      id="Overview"
    >
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
          className="translate-x-11 z-10 w-[178px]"
          addPriority={true}
        />
        <ImageWithModal
          src="/hackdavis/hero/Tablet.png"
          width={1000}
          height={1000}
          alt="tablet"
          className="translate-x-7 -translate-y-2 z-10 w-[391px]"
          addPriority={true}
        />
        <ImageWithModal
          src="/hackdavis/hero/Laptop.png"
          width={1000}
          height={1000}
          alt="laptop"
          className="-translate-x-10 -translate-y-11 z-0 w-[620px]"
          addPriority={true}
        />
      </div>
    </section>
  );
}
