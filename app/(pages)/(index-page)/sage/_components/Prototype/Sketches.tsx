import Image from 'next/image';

export default function Sketches() {
  const sketches = [
    { src: '/sageImages/prototype/sketch1.jpg', alt: 'sketch1' },
    { src: '/sageImages/prototype/sketch2.jpg', alt: 'sketch2' },
    { src: '/sageImages/prototype/sketch3.jpg', alt: 'sketch3' },
    { src: '/sageImages/prototype/sketch4.jpg', alt: 'sketch4' },
  ];
  return (
    <div className="flex flex-col pt-24 pb-0 bg-white p-53">
      <h1 className="leading-[54px] text-4xl font-semibold font-dm-sans">
        Incorporating opportunity areas into sketches
      </h1>
      <div className="flex pt-8">
        {sketches.map((sketch, index) => (
          <Image
            src={sketch.src}
            alt={sketch.alt}
            width={1000}
            height={1000}
            key={index}
            className="w-[25%]"
          />
        ))}
      </div>
      <div className="grid grid-cols-2 grid-rows-2 pt-12 pb-12 gap-y-16 gap-x-12 font-dm-sans">
        <div className="col-span-1 row-span-1">
          <h1 className="text-2xl leading-[44px]">Flexible goal setting</h1>
          <p className="text-[18px] leading-8">
            ‍↳ Users can create realistic goals that align with their schedules
          </p>
        </div>
        <div className="col-span-1 row-span-1">
          <h1 className="text-2xl leading-[44px">
            Increased filter + sort abilities
          </h1>
          <p className="text-[18px] leading-8">
            ‍↳ Users feel less overwhelmed which encourages searching for new
            practices
          </p>
        </div>
        <div className="col-span-1 row-span-1">
          <h1 className="text-2xl leading-[44px">Gamified reward system</h1>
          <p className="text-[18px] leading-8">
            ‍↳ Users can receive extrinsic motivation which encourages
            consistency
          </p>
        </div>
        <div className="col-span-1 row-span-1">
          <h1 className="text-2xl leading-[44px">Flexible goal setting</h1>
          <p className="text-[18px] leading-8">
            ‍↳ Users find comfort in familiar practices that they curated
            themself
          </p>
        </div>
      </div>
    </div>
  );
}
