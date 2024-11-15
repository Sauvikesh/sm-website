'use client';
import Image from 'next/image';
import { useEffect } from 'react';

export default function Loader() {
  // Disable scrolling when the loader is mounted
  useEffect(() => {
    // Disable scroll
    document.body.style.overflow = 'hidden';

    // Clean up function to enable scrolling again
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  return (
    <div className="flex fixed left-0 top-0 z-50 items-center justify-center w-[100vw] h-[100vh] bg-white">
      <Image
        src="/landing/shapes/star2.png"
        alt="loading star"
        width={100}
        height={100}
        className="animate-load-rotate-full-infinite"
      />
    </div>
  );
}
