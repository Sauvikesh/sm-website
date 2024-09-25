import { ImageWithModal } from '@/app/(pages)/_components/ImageModal/ImageModal';

export default function Venue() {
  return (
    <section className="w-full pt-20 pb-20">
      <ImageWithModal
        src="hackdavis/venue.svg"
        alt="venue"
        width={1000}
        height={1000}
        className="w-full"
      />
    </section>
  );
}
