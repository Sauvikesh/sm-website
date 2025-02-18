'use client';
import { useState } from 'react';
import Loader from '@/app/(pages)/_components/Loader/Loader';
import { ImageProps } from 'next/image';
import Image from 'next/image';

type ImageWithStateProps = ImageProps;

export default function LoadingImage(props: ImageWithStateProps) {
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
