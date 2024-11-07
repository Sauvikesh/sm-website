'use client';
import Image from 'next/image';
import { contentProps } from '../../../../errorMessaging/page';
import { useState } from 'react';
import Loader from '@/app/(pages)/_components/Loader/Loader';

export default function LoadingImage(content: contentProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative">
      {isLoading && <Loader />}
      <Image
        src={content.images?.at(0)?.url}
        alt=""
        width={1000}
        height={1000}
        className="w-[1027px]"
        onLoadingComplete={() => setIsLoading(false)}
      />
      <Image
        src={content.images?.at(1)?.url}
        alt=""
        width={1000}
        height={1000}
        className="w-[301px] absolute bottom-[0%] right-[-10%]"
      />
    </div>
  );
}
