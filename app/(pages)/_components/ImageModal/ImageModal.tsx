'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ImageProps } from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
// import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

type ImageWithModalProps = ImageProps & {
  onLoad?: () => void;
  removeMaxHeight?: boolean;
};

export const ImageWithModal = ({
  src,
  alt,
  width,
  height,
  className,
  loading,
  onLoad,
  removeMaxHeight,
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
      {isModalOpen && (
        <ImageModal
          src={src}
          alt={alt}
          onClose={closeModal}
          removeMaxHeight={removeMaxHeight}
        />
      )}
    </>
  );
};

type ImageModalProps = {
  src: string | StaticImport;
  alt: string;
  onClose: () => void;
  removeMaxHeight?: boolean;
};
const ImageModal = ({
  src,
  alt,
  onClose,
  removeMaxHeight,
}: ImageModalProps) => {
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
      className="fixed inset-0 z-50 flex justify-center bg-white overflow-scroll"
      onClick={onClose} // Close the modal if clicked outside the image
    >
      {/* <TransformWrapper> */}
      {/* <TransformComponent> */}
      <div className="relative">
        <Image
          src={src}
          alt={alt}
          width={1000}
          height={1000}
          loading="eager"
          className={`object-contain w-[90vw] ${removeMaxHeight ? '' : 'max-h-[100vh]'} pt-20 pb-20 cursor-zoom-out`} // Adjust the size of the image inside the modal
        />
      </div>
      {/* </TransformComponent> */}
      {/* </TransformWrapper> */}
    </div>
  );
};
