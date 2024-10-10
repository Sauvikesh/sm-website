import Image from 'next/image';

export default function Venue() {
  return (
    <section className="pt-20 pb-20 -mx-[40%]">
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
