import Image from 'next/image';

export default function Venue() {
  return (
    <section className="w-full pt-20 pb-20">
      <Image
        src="/hackdavis/venue.png"
        alt="venue"
        width={1000}
        height={1000}
        className="w-full"
      />
    </section>
  );
}
