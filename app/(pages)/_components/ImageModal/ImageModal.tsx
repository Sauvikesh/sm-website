'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ImageProps } from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

type ImageWithModalProps = ImageProps & {
  onLoad?: () => void;
};

export const ImageWithModal = ({
  src,
  alt,
  width,
  height,
  className,
  loading,
  onLoad,
}: ImageWithModalProps) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        className={`cursor-zoom-in ${className}`} // Change cursor to indicate it's clickable
        onClick={openModal}
        onLoad={onLoad}
      />
      {isModalOpen && <ImageModal src={src} alt={alt} onClose={closeModal} />}
    </>
  );
};

type ImageModalProps = {
  src: string | StaticImport;
  alt: string;
  onClose: () => void;
};
const ImageModal = ({ src, alt, onClose }: ImageModalProps) => {
  useEffect(() => {
    // Lock scroll on the body when the modal opens
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Clean up and restore the original scroll behavior when the modal is closed
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);
  return (
    <div
      className="fixed inset-0 z-50 flex justify-center bg-black overflow-scroll"
      onClick={onClose} // Close the modal if clicked outside the image
    >
      <div className="relative">
        <Image
          src={src}
          alt={alt}
          width={1000}
          height={1000}
          loading="eager"
          className="object-contain w-[100vw] pt-20 pb-20 cursor-zoom-out" // Adjust the size of the image inside the modal
        />
      </div>
    </div>
  );
};
