import { ImageWithModal } from '@/app/(pages)/_components/ImageModal/ImageModal';
import LoadingImage from '@/app/(pages)/_components/LoadingImage/LoadingImage';

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
      />
      <h2 className="pt-10 text-center">
        Empowering students to<br></br> create for social good
      </h2>
      <p className="pb-10 pt-4 text-[18px] font-medium">7 min read</p>
      <LoadingImage
        src="/caseStudies/hackdavis.svg"
        width={1000}
        height={1000}
        alt="hackdavis image"
        className="w-[1120px]"
      />
    </section>
  );
}
