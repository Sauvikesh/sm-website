'use client';
import { Providers } from '@/app/_providers';
import { Parallax } from 'react-scroll-parallax';
import { useState } from 'react';
import Loader from '@/app/(pages)/_components/Loader/Loader';
import Image from 'next/image';
import { ImageProps } from 'next/image';

type ParallaxImageProps = {
  speed: number;
  src: string;
  alt: string;
};

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
      <header className="flex flex-col h-[100vh] items-center overflow-clip bg-[#e4edeb] mx-[-40%]">
        <h2 className="pt-28">Sage</h2>
        <p className="text-base">7 min read</p>
        <div className="flex justify-around ">
          {parallaxImages.map((image, index) => {
            if (index === 0) {
              return (
                <Parallax speed={image.speed} key={index}>
                  <LoadingImage
                    src={image.src}
                    alt={image.alt}
                    width={1000}
                    height={1000}
                    className="w-[30vw]"
                  ></LoadingImage>
                </Parallax>
              );
            } else {
              return (
                <Parallax speed={image.speed} key={index}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1000}
                    height={1000}
                    className="w-[30vw]"
                  ></Image>
                </Parallax>
              );
            }
          })}
        </div>
      </header>
    </Providers>
  );
}

type ImageWithStateProps = ImageProps;

function LoadingImage(props: ImageWithStateProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Loader />}
      <Image
        {...props}
        alt=""
        loading="eager"
        onLoad={() => setIsLoading(false)}
      />
    </>
  );
}
