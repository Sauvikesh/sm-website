'use client';
import { useState, useEffect, useRef } from 'react';

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

const applyScrollListener = (ref: any, setTranslateX: any) => {
  window.addEventListener('scroll', () => {
    const offsetTop = -ref.current.offsetTop + 64; // 64 is the height of the navbar
    console.log(offsetTop);
    setTranslateX(offsetTop);
  });
};

export default function PhotoCarousel() {
  const [dynamicHeight, setDynamicHeight] = useState<any>(null);
  const [translateX, setTranslateX] = useState(null);

  const containerRef = useRef(null);
  const objectRef = useRef(null);

  const resizeHandler = () => {
    handleDynamicHeight(objectRef, setDynamicHeight);
  };

  useEffect(() => {
    handleDynamicHeight(objectRef, setDynamicHeight);
    window.addEventListener('resize', resizeHandler);
    applyScrollListener(containerRef, setTranslateX);
  }, []);

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
            <div className="h-[100%] flex flex-nowrap justify-start items-center ml-8">
              <h1 className="text-white w-[500px] h-[300px] shrink-0 border">
                hi
              </h1>
              <h1 className="text-white w-[500px] h-[300px] shrink-0">hi</h1>
              <h1 className="text-white w-[500px] h-[300px] shrink-0">hi</h1>
              <h1 className="text-white w-[500px] h-[300px] shrink-0">hi</h1>
              <h1 className="text-white w-[500px] h-[300px] shrink-0">hi</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
