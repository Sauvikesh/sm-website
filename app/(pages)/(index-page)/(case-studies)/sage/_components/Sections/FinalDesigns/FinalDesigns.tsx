import Image from 'next/image';

export default function FinalDesigns() {
  return (
    <div className="pl-[15%] pr-[15%] flex flex-col gap-20 pb-20">
      <h2>Final Designs</h2>

      <div className="flex justify-around">
        <h3>Home</h3>
        <h3>Explore</h3>
      </div>

      <Image
        src="/sageImages/sageDesign1.png"
        width={1000}
        height={1000}
        alt="blob"
        className="w-full h-auto pb-4"
      />

      <div className="flex justify-around">
        <h3>Schedule</h3>
        <h3>Personal Garden</h3>
      </div>
      <Image
        src="/sageImages/sageDesign2.png"
        width={1000}
        height={1000}
        alt="blob"
        className="w-full h-auto pb-4"
      />

      <h3 className="text-center">Special Collections</h3>
      <Image
        src="/sageImages/sageDesign3.png"
        width={1000}
        height={1000}
        alt="blob"
        className="w-full h-auto pb-4"
      />

      <h3 className="text-center">Inclusive Meditation</h3>

      <Image
        src="/sageImages/sageDesign4.png"
        width={1000}
        height={1000}
        alt="blob"
        className="w-full h-auto pb-4"
      />
      <h3 className="text-center">Tech-free Journaling</h3>

      <Image
        src="/sageImages/sageDesign5.png"
        width={1000}
        height={1000}
        alt="blob"
        className="w-full h-auto pb-4"
      />
    </div>
  );
}