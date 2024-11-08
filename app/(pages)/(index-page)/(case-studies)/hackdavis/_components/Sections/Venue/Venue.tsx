import { ImageWithModal } from '@/app/(pages)/_components/ImageModal/ImageModal';

export default function Venue() {
  return (
    <section className="pt-20 pb-20 -mx-[40%]">
      <ImageWithModal
        src="/hackdavis/venue.png"
        alt="venue"
        width={1000}
        height={1000}
        className="w-full"
      />
    </section>
  );
}
