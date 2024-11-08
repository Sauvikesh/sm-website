import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';
import { ImageWithModal } from '@/app/(pages)/_components/ImageModal/ImageModal';

export default function Team() {
  return (
    <RevealWrapper>
      <section className="flex flex-row items-center gap-10 justify-between">
        <ImageWithModal
          src="/sageImages/sageTeam.png"
          width={1000}
          height={1000}
          alt="team photo"
          className="w-[40%] h-auto pb-4 self-center rounded-2xl"
        />

        <div className="flex flex-col gap-8 w-[35%]">
          <h3>Our team on presentation day! 🥳</h3>
          <p>I'm wearing green in spirit.</p>
        </div>
      </section>
    </RevealWrapper>
  );
}
