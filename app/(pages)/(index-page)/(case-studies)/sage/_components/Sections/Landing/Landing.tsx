'use client';
// import { Providers } from '@/app/_providers';
// import { Parallax } from 'react-scroll-parallax';
import { useState } from 'react';
import Loader from '@/app/(pages)/_components/Loader/Loader';
import Image from 'next/image';
import { ImageProps } from 'next/image';
import { ImageWithModal } from '@/app/(pages)/_components/ImageModal/ImageModal';
import ScrollArrow, {
  ScrollArrowProps,
} from '@/app/(pages)/(index-page)/_components/Landing/ScrollArrow';

type ParallaxImageProps = {
  speed: number;
  src: string;
  alt: string;
};

export default function Landing() {
  const scrollArrowProps: ScrollArrowProps = {
    sectionId: 'Overview',
  };

  const parallaxImages: ParallaxImageProps[] = [
    {
      speed: 15,
      src: '/sageImages/hero/appImage1.png',
      alt: 'app image 1',
    },
    {
      speed: 17,
      src: '/sageImages/hero/appImage2.png',
      alt: 'app image 2',
    },
    {
      speed: 19,
      src: '/sageImages/hero/appImage3.png',
      alt: 'app image 3',
    },
    {
      speed: 19,
      src: '/sageImages/hero/appImage4.png',
      alt: 'app image 3',
    },
  ];

  return (
    // <Providers>
    <header
      className="flex flex-col gap-6 h-[100vh] items-center justify-end overflow-clip bg-[#E2EDEB] mx-[-40%]"
      style={{
        backgroundImage: "url('/sageImages/hero/sageHeroBG.png')",
        backgroundSize: 'cover',
      }}
    >
      <ImageWithModal
        src="/sageImages/sageLogo.png"
        alt="Sage Logo"
        width={1000}
        height={1000}
        className="h-[40px] w-[82px]"
      />
      <h2 className="w-[668px] text-center text-[#1B454F]">
        Equipping individuals to navigate life's stressors
      </h2>
      <p className="text-base text-[#1B454F]">6 min read</p>
      <div className="flex gap-[60px] -mb-10">
        {parallaxImages.map((image, index) => {
          if (index === 0) {
            return (
              // <Parallax speed={image.speed} key={index}>
              <LoadingImage
                src={image.src}
                alt={image.alt}
                width={1000}
                height={1000}
                className="w-[17vw]"
                key={index}
              ></LoadingImage>
              // </Parallax> */
            );
          } else {
            return (
              // <Parallax speed={image.speed} key={index}>
              <Image
                src={image.src}
                alt={image.alt}
                width={1000}
                height={1000}
                className="w-[17vw]"
                key={index}
              ></Image>
              // </Parallax> */
            );
          }
        })}
      </div>
      <div className="absolute top-[85vh]">
        <ScrollArrow {...scrollArrowProps} />
      </div>
    </header>
    // </Providers>
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
