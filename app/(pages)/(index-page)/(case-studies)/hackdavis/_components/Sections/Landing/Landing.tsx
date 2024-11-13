import { ImageWithModal } from '@/app/(pages)/_components/ImageModal/ImageModal';
import LoadingImage from '@/app/(pages)/_components/LoadingImage/LoadingImage';

export default function Landing() {
  //background: radial-gradient(62.5% 100% at 50% 100%, #005271 0%, #112636 100%);
  return (
    <section
      className="h-[100vh] overflow-clip text-white flex flex-col justify-end items-center gap-6 -mx-[40%]"
      style={{
        backgroundImage:
          'radial-gradient(62.5% 100% at 50% 100%, #005271 0%, #112636 100%)',
        backgroundSize: 'cover',
      }}
      id="Overview"
    >
      <ImageWithModal
        src="/hackdavis/logo.svg"
        width={1000}
        height={1000}
        alt="hackdavis image"
        className="h-[40px]"
      />
      <h2 className="text-center">
        Empowering students to<br></br> create for social good
      </h2>
      <h4 className="text-white text-center">7 min read</h4>
      <LoadingImage
        src="/caseStudies/hackdavis.svg"
        width={1000}
        height={1000}
        alt="hackdavis image"
        className="w-[1120px] -mb-[100px]"
      />
    </section>
  );
}
