'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

type ImageWithModalProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  addPriority?: boolean;
};

export const ImageWithModal = ({
  src,
  alt,
  width,
  height,
  className,
  addPriority,
}: ImageWithModalProps) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [scale, setScale] = useState(1);

  // Function to zoom in
  const zoomIn = () => {
    setScale((prevScale) => Math.min(prevScale + 2, 5)); // Max scale 3
  };

  // Function to zoom out
  const zoomOut = () => {
    setScale((prevScale) => Math.max(prevScale - 2, 1)); // Min scale 1
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    // Lock scroll on the body when the modal opens
    const originalOverflow = document.body.style.overflow;

    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = originalOverflow;
      setScale(1);
    }

    // Clean up to restore the original scroll behavior
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isModalOpen]);

  return (
    <div
      className={`${isModalOpen ? 'bg-black fixed w-[100vw] h-[100vh] z-30 flex flex-col justify-center items-center inset-0 overflow-scroll' : `${className} relative`}`}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`${isModalOpen ? `h-[100vh] w-auto z-10 animate-appear origin-top-left ${scale > 1 ? 'pr-10':''}` : `${className} cursor-zoom-in`}`} // Change cursor to indicate it's clickable
        style={{
          transform: `${isModalOpen ? `scale(${scale})` :''}`,
          transition: 'transform 0.3s ease',
        }}
        onClick={openModal}
        priority={addPriority}
      />

      <div
        className={`fixed top-[5%] right-[5%] z-20 flex flex-col gap-5 bg-gray-500 p-5 ${isModalOpen ? 'opacity-100' : 'opacity-0'}`}
      >
        <p onClick={closeModal} className={`text-white cursor-zoom-out`}>
          X
        </p>
        <p onClick={zoomIn} className={`text-white cursor-pointer`}>
          +
        </p>
        <p onClick={zoomOut} className={`text-white cursor-pointer`}>
          -
        </p>
      </div>
    </div>
  );
};
