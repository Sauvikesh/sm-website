'use client';
import { Providers } from '@/app/_providers';
import { Parallax } from 'react-scroll-parallax';
import Image from 'next/image';
import { useState } from 'react';
import Loader from '@/app/(pages)/_components/Loader/Loader';

export default function Landing() {
  const parallaxImages: ParallaxImageProps[] = [
    {
      speed: 26,
      src: '/sageImages/hero/appImage1.png',
      alt: 'app image 1',
    },
    {
      speed: 21,
      src: '/sageImages/hero/appImage2.png',
      alt: 'app image 2',
    },
    {
      speed: 29,
      src: '/sageImages/hero/appImage3.png',
      alt: 'app image 3',
    },
  ];

  return (
    <Providers>
      <header className="flex flex-col justify-center items-center bg-[#e4edeb] mx-[-40%]">
        <h1 className="text-[80px] font-semibold lead-[44px] font-f-w pt-9">
          Sage
        </h1>
        <p className="text-base">7 min read</p>
        <div className="flex justify-around pt-20">
          {parallaxImages.map((image, index) => {
            if (index === 0) {
              return (
                <LoadingParallaxImage
                  key={index}
                  speed={image.speed}
                  src={image.src}
                  alt={image.alt}
                />
              );
            } else {
              return (
                <ParallaxImage
                  key={index}
                  speed={image.speed}
                  src={image.src}
                  alt={image.alt}
                />
              );
            }
          })}
        </div>
      </header>
    </Providers>
  );
}

type ParallaxImageProps = {
  speed: number;
  src: string;
  alt: string;
};

function ParallaxImage(props: ParallaxImageProps) {
  const { speed, src, alt } = props;

  return (
    <Parallax speed={speed}>
      <Image
        src={src}
        alt={alt}
        width={1000}
        height={1000}
        className="w-[30vw]"
      ></Image>
    </Parallax>
  );
}

function LoadingParallaxImage(props: ParallaxImageProps) {
  const { speed, src, alt } = props;
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Parallax speed={speed}>
      {isLoading && <Loader />}
      <Image
        src={src}
        alt={alt}
        width={1000}
        height={1000}
        className="w-[30vw]"
        onLoadingComplete={() => setIsLoading(false)}
      ></Image>
    </Parallax>
  );
}
