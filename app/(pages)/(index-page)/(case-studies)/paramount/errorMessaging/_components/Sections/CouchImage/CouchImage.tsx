'use client';
import { contentProps } from '../../../page';
import Image from 'next/image';
import Loader from '@/app/(pages)/_components/Loader/Loader';
import { useState } from 'react';

export default function CouchImage(content: contentProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section className="-mx-[40%]">
      {isLoading && <Loader />}
      <Image
        src={content.images?.at(0)?.url}
        alt=""
        width={1000}
        height={1000}
        className="w-full"
        onLoadingComplete={() => setIsLoading(false)}
      />
    </section>
  );
}
