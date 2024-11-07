'use client';
import { useState } from 'react';
import Loader from '@/app/(pages)/_components/Loader/Loader';
import { ImageWithModal } from '@/app/(pages)/_components/ImageModal/ImageModal';
import { ImageProps } from 'next/image';

type ImageWithStateProps = ImageProps;

export default function LoadingImage(props: ImageWithStateProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Loader />}
      <ImageWithModal
        {...props}
        alt=""
        loading="eager"
        onLoadingComplete={() => setIsLoading(false)}
      />
    </>
  );
}
