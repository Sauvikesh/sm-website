'use client';
import { useState, useEffect, useRef } from 'react';
import CarouselImage, { CarouselImageProps } from './CarouselImage';

const calcDynamicHeight = (objectWidth: number) => {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  return objectWidth - vw + vh + 150;
};

const handleDynamicHeight = (ref: any, setDynamicHeight: any) => {
  const objectWidth = ref.current.scrollWidth;
  const dynamicHeight = calcDynamicHeight(objectWidth);
  setDynamicHeight(dynamicHeight);
};

const applyScrollListener = (
  ref: any,
  setTranslateX: any,
  setTextOpacity: any
) => {
  window.addEventListener('scroll', () => {
    if (ref.current) {
      const offsetTop = -ref.current.offsetTop + 64; // 64 is the height of the navbar
      setTranslateX(offsetTop);

      // Calculate opacity based on scroll position
      const start = -50; // Scroll position where opacity starts to change
      const end = -200; // Scroll position where opacity should be fully changed

      if (offsetTop <= start && offsetTop >= end) {
        const opacity = 1 - (-1 * (offsetTop - start)) / (-1 * (end - start));
        setTextOpacity(opacity);
      } else if (offsetTop > start) {
        setTextOpacity(1); // Fully visible before start
      } else if (offsetTop < end) {
        setTextOpacity(0); // Fully invisible after end
      }
    }
  });
};

export default function PhotoCarousel() {
  const [dynamicHeight, setDynamicHeight] = useState<any>(null);
  const [translateX, setTranslateX] = useState(null);
  const [textOpacity, setTextOpacity] = useState(1);

  const containerRef = useRef(null);
  const objectRef = useRef(null);

  const images: Array<CarouselImageProps> = [
    { src: '/carouselImages/samPolaroid.png', alt: 'Sam polaroid Image' },
    { src: '/carouselImages/carImg2.jpg', alt: 'Carousel Image 2' },
    { src: '/carouselImages/carImg3.jpg', alt: 'Carousel Image 3' },
  ];

  const resizeHandler = () => {
    handleDynamicHeight(objectRef, setDynamicHeight);
  };

  useEffect(() => {
    handleDynamicHeight(objectRef, setDynamicHeight);
    window.addEventListener('resize', resizeHandler);
    applyScrollListener(containerRef, setTranslateX, setTextOpacity);
    console.log('x', translateX);
  }, [translateX]);

  return (
    <div className="w-[100%] min-h-[100vh]">
      <div className="w-[100%] " style={{ height: `${dynamicHeight}px` }}>
        <div
          className="sticky top-0 h-[100vh] w-[100%] overflow-x-hidden"
          ref={containerRef}
        >
          <div
            className=" absolute h-[100%]"
            style={{ transform: `translateX(${translateX}px)` }}
            ref={objectRef}
          >
            <div className="h-[100%] flex flex-nowrap justify-start items-center ml-8 gap-4">
              <div
                className=" w-[400px] h-[350px] shrink-0 mb-[250px]"
                style={{
                  opacity: textOpacity,
                }}
              >
                <h1 className="text-white font-dm-sans text-4xl leading-[54px] font-medium mb-4">
                  Nice to meet you, I'm Sam
                </h1>
                <p className="text-white font-dm-sans text-lg leading-8 font-light">
                  A visionary designer with an adventurous spirit and an
                  insatiable curiosity to learn from others
                </p>
              </div>

              {images.map((img, index) => (
                <CarouselImage src={img.src} alt={img.alt} key={index} />
              ))}

              <div className="text-white w-[500px] h-[300px] shrink-0 border">
                box here?
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
