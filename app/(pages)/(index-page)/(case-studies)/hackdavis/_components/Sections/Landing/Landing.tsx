import { ImageWithModal } from '@/app/(pages)/_components/ImageModal/ImageModal';

export default function Landing() {
  return (
    <section
      className="bg-[#112636] h-[100vh] overflow-clip text-white flex flex-col justify-center items-center -mx-[40%]"
      id="Overview"
    >
      <ImageWithModal
        src="/hackdavis/logo.svg"
        width={1000}
        height={1000}
        alt="hackdavis image"
        className="w-[40px] pt-[230px]"
        addPriority={true}
      />
      <h2 className="pt-10 text-center">
        Empowering students to<br></br> create for social good
      </h2>
      <p className="pb-10 pt-4 text-[18px] font-medium">7 min read</p>
      {/* <div className="flex w-full items-center justify-center">
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
      </div> */}
      <ImageWithModal
        src="/caseStudies/hackdavis.svg"
        width={1000}
        height={1000}
        alt="hackdavis image"
        className="w-[1120px]"
        addPriority={true}
      />
    </section>
  );
}
