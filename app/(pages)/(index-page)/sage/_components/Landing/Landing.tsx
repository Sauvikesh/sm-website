'use client';

import { Providers } from '@/app/_providers';
import ParallaxImage, { ParallaxImageProps } from './ParallaxImage';

export default function Landing() {
  const parallaxImages: ParallaxImageProps[] = [
    {
      speed: 26,
      src: '/sageImages/appImage1.png',
      alt: 'app image 1',
    },
    {
      speed: 21,
      src: '/sageImages/appImage2.png',
      alt: 'app image 2',
    },
    {
      speed: 29,
      src: '/sageImages/appImage3.png',
      alt: 'app image 3',
    },
  ];

  return (
    <Providers>
      <header className="flex flex-col justify-center items-center">
        <h1 className="text-[80px] font-semibold lead-[44px] font-f-w pt-9">
          Sage
        </h1>
        <p className="text-base">7 min read</p>
        <div className="flex justify-around pt-20">
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
    </Providers>
  );
}
