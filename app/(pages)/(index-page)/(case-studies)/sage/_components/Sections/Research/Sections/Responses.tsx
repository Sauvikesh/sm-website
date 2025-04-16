import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';
import { ImageWithModal } from '@/app/(pages)/_components/ImageModal/ImageModal';

export default function Responses() {
  return (
    <div className="flex flex-col gap-20">
      <RevealWrapper>
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
