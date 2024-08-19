'use client';

import { Parallax } from 'react-scroll-parallax';
import Image from 'next/image';

export type ParallaxImageProps = {
  speed: number;
  src: string;
  alt: string;
};

export default function ParallaxImage(props: ParallaxImageProps) {
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
