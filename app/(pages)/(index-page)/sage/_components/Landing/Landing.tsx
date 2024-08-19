'use client';

import ParallaxImage, { ParallaxImageProps } from './ParallaxImage';

export default function Landing() {
  const parallaxImages: ParallaxImageProps[] = [
    {
      speed: 6,
      src: '/sageImages/appImage1.png',
      alt: 'app image 1',
    },
    {
      speed: 1,
      src: '/sageImages/appImage2.png',
      alt: 'app image 2',
    },
    {
      speed: 9,
      src: '/sageImages/appImage3.png',
      alt: 'app image 3',
    },
  ];

  return (
    <header className="bg-[#e4edeb] flex flex-col justify-center items-center w-full">
      <h1 className="text-[80px] font-semibold lead-[44px] text-black font-f-w mt-9">
        Sage
      </h1>
      <p className="text-base text-black font-dm-sans">7 min read</p>

      <div className="flex justify-around w-full mt-32">
        {parallaxImages.map((image, index) => (
          <ParallaxImage
            key={index}
            speed={image.speed}
            src={image.src}
            alt={image.alt}
          />
        ))}
      </div>
    </header>
  );
}
