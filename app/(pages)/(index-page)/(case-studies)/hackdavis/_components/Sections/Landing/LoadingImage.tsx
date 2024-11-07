'use client';
import { useState } from 'react';
import Loader from '@/app/(pages)/_components/Loader/Loader';
import { ImageWithModal } from '@/app/(pages)/_components/ImageModal/ImageModal';

export default function LoadingImage() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Loader />}
      <ImageWithModal
        src="/caseStudies/hackdavis.svg"
        width={1000}
        height={1000}
        alt="hackdavis image"
        className="w-[1120px]"
        addPriority={true}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </>
  );
}
