'use client';
import { useEffect, useRef, useState } from 'react';
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
  const [zoomedIn, setZoomedIn] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // zoom in on click feature
  const [scale, setScale] = useState(1);
  const [origin, setOrigin] = useState({ x: 0, y: 0 });

  const scaleRef = useRef<number>();
  scaleRef.current = scale;

  const maxZoom = 5;

  const handleClick = (event: any) => {
    if (scale === maxZoom) {
      resetZoom();
    } else {
      const imageElement = event.currentTarget;
      const rect = imageElement.getBoundingClientRect();
      // Get the mouse click coordinates relative to the image
      const x = event.clientX - rect.left; // X position within the image
      const y = event.clientY - rect.top; // Y position within the image

      // Calculate the click position as a percentage of the image element
      const xPercent = (x / rect.width) * 100;
      const yPercent = (y / rect.height) * 100;

      // Set the transform origin to the click position
      setOrigin({ x: xPercent, y: yPercent });

      // Increase the scale for zooming in (set to max 3x zoom for example)
      setScale((prevScale) => Math.min(prevScale + 100, maxZoom));
    }
  };

  const resetZoom = () => {
    setScale(1);
    setOrigin({ x: 0, y: 0 });
  };

  // scroll feature via translation
  const [translateY, setTranslateY] = useState(0.0);
  const [translateX, setTranslateX] = useState(0.0);

  useEffect(() => {
    if (scale === maxZoom) {
      setZoomedIn(true);
    } else {
      setZoomedIn(false);
      setTranslateX(() => 0.0);
      setTranslateY(() => 0.0);
    }
  }, [scale]);

  useEffect(() => {
    console.log(translateX, translateY, 'Updated translate values');
  }, [translateX, translateY]);

  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0,
  });

  // Function to get image dimensions dynamically
  const handleImageLoad = (event: any) => {
    const imageElement = event.target;
    const { width, height } = imageElement.getBoundingClientRect();
    setImageDimensions({ width, height });
  };

  // Scroll handler to capture mouse wheel movement

  useEffect(() => {
    const handleScroll = (event: any) => {
      // Adjust the translation speed by multiplying scroll delta with a factor
      const scrollSpeed = 1;
      console.log('dimenions', imageDimensions, 'origin', origin);

      const leftMaxScroll = window.innerWidth * (origin.x / 100);
      const rightMaxScroll = (window.innerWidth - leftMaxScroll) * -1;

      const upMaxScroll = window.innerHeight * (origin.y / 100);
      const downMaxScroll = (window.innerHeight - upMaxScroll) * -1;

      console.log('max scrolls X: ', leftMaxScroll, rightMaxScroll);
      console.log('max scrolls Y: ', upMaxScroll, downMaxScroll);

      // const maxX = window.innerWidth - leftMaxScroll;
      // const maxY = window.innerHeight - yLength;

      // console.log("MAXIMUMS", maxX, maxY);

      // Update the translation state based on scroll direction
      // setTranslateY((prevY) => prevY + event.deltaY * scrollSpeed * -1);
      // setTranslateX((prevX) => prevX + event.deltaX * scrollSpeed * -1);

      setTranslateY((prevY) => {
        // Calculate the new translateX value based on the event
        const newY = prevY + event.deltaY * scrollSpeed * -1;

        // Clamp the value between minScroll and maxScroll
        return Math.max(downMaxScroll, Math.min(newY, upMaxScroll));
      });

      setTranslateX((prevX) => {
        // Calculate the new translateX value based on the event
        const newX = prevX + event.deltaX * scrollSpeed * -1;

        // Clamp the value between minScroll and maxScroll
        return Math.max(rightMaxScroll, Math.min(newX, leftMaxScroll));
      });
    };

    // Lock scroll on the body when the modal opens
    const originalOverflow = document.body.style.overflow;
    const originalOverScroll = document.body.style.overscrollBehaviorX;

    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.overscrollBehaviorX = 'none';

      if (zoomedIn) {
        window.addEventListener('wheel', handleScroll, { passive: false });
      }
    } else {
      document.body.style.overflow = originalOverflow;
      document.body.style.overscrollBehaviorX = originalOverScroll;
      setScale(1);
    }

    // Clean up to restore the original scroll behavior
    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.overscrollBehaviorX = originalOverScroll;
      window.removeEventListener('wheel', handleScroll);
      setTranslateY(0);
      setTranslateX(0);
    };
  }, [imageDimensions, isModalOpen, origin, zoomedIn]);

  return (
    <div
      className={`${isModalOpen ? 'bg-black fixed w-[100vw] h-[100vh] z-30 flex flex-col justify-center items-center inset-0' : `${className} relative`}`}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`${isModalOpen ? `h-[90vh] w-auto z-10 animate-appear` : `${className} cursor-zoom-in `} border border-red-500 self-center`} // Change cursor to indicate it's clickable
        style={{
          transformOrigin: `${origin.x}% ${origin.y}%`,
          transform: `scale(${scale}) ${zoomedIn ? `translate(${translateX}px, ${translateY}px)` : `translate(${0}px, ${0}px)`}`,
          transition: `${zoomedIn ? 'transform 0.1s ease' : 'transform 0.5s ease '}, transform-origin 0.5s ease`,
        }}
        onClick={isModalOpen ? handleClick : openModal}
        priority={addPriority}
        onLoad={handleImageLoad}
      />

      <div
        className={`fixed top-[5%] right-[5%] z-20 flex flex-col gap-5 bg-gray-500 p-5 ${isModalOpen ? 'opacity-100' : 'opacity-0'}`}
      >
        <p onClick={closeModal} className={`text-white cursor-zoom-out`}>
          X
        </p>
      </div>
    </div>
  );
};
