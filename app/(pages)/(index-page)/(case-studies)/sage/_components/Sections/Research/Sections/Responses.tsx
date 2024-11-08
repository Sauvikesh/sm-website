import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';
import { ImageWithModal } from '@/app/(pages)/_components/ImageModal/ImageModal';

export default function Responses() {
  return (
    <div className="flex flex-col gap-20">
      <RevealWrapper>
        <div className="flex justify-between">
          <h2 className="w-[65%]">
            94 of 98 respondents had difficulty practicing self-care due to lack
            of time.
          </h2>
          <h2 className="text-[100px] leading-[110%] text-[#1B454F] font-bold text-center">
            96%
          </h2>
        </div>
        <ImageWithModal
          src="/sageImages/research/messageFeedback.jpg"
          alt="messages"
          width={1000}
          height={1000}
          className="w-full"
        />
      </RevealWrapper>
    </div>
  );
}
