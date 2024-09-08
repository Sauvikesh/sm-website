import Image from 'next/image';

export default function Venue() {
  return (
    <div className="w-full">
      <Image
        src="hackdavis/venue.svg"
        alt="venue"
        width={1000}
        height={1000}
        className="w-full"
      />
    </div>
  );
}
