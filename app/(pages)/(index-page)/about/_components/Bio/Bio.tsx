'use client';
import { useEffect, useRef, useState } from 'react';
import CarouselImage from '../PhotoCarousel/CarouselImage';
import CurrentStatus from './CurrentStatus';

export default function Bio() {
  const textStartingTranslation = 15;

  const [visibilityPercentage, setVisibilityPercentage] = useState(0);
  const [translateX, setTranslateX] = useState<number>(15);
  const containerRef = useRef(null);

  useEffect(() => {
    const copyRef = containerRef;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        const transitionStart = 0.3; // start transition when 30% of container is crossed
        const transitionEnd = 0.7; // end transition by 70% of container being crossed

        if (entry.intersectionRatio < transitionStart) {
          setTranslateX(textStartingTranslation);
          setVisibilityPercentage(0);
        } else if (
          entry.intersectionRatio >= transitionStart &&
          entry.intersectionRatio <= transitionEnd
        ) {
          const distanceToEnd = transitionEnd - entry.intersectionRatio; // raw distance to end in decimal values
          const percentProgress =
            distanceToEnd / (transitionEnd - transitionStart); // calcs percentage distance to end with raw value
          const visiblePercentProgress = 1 - percentProgress; // since opacitity needs to increase as you scroll, reverse the percent value

          setTranslateX(percentProgress * textStartingTranslation);
          setVisibilityPercentage(visiblePercentProgress);
        } else if (entry.intersectionRatio > transitionEnd) {
          setTranslateX(0);
          setVisibilityPercentage(1);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: Array.from({ length: 100 }, (_, i) => i * 0.01),
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Cleanup the observer on unmount
    return () => {
      if (copyRef.current) {
        observer.unobserve(copyRef.current);
      }
    };
  }, []);

  return (
    <section
      className="flex flex-col m-53 mt-0 mb-0 h-[85vh]"
      ref={containerRef}
    >
      <h1
        className="text-white font-dm-sans text-[5em] w-max mb-9 font-semibold leading-[54px] self-end duration-75 ease-out"
        style={{
          transform: `translateX(${translateX}%)`,
          opacity: visibilityPercentage,
        }}
      >
        Nice to meet you, I'm Sam
      </h1>
      <article className="flex gap-3">
        <div className="flex flex-col gap-14 mt-7">
          <div>
            <h2 className="text-4xl font-semibold text-white font-dm-sans">
              I'm Sam
            </h2>
            <p className="text-lg text-white font-dm-sans">
              A visionary designer with an adventurous spirit and an insatiable
              curiosity to learn from others
            </p>
          </div>
          <CurrentStatus
            header="CURRENTLY"
            paragraph="On my way towards earning an undergraduate degree in Design at UC Davis"
          />
          <CurrentStatus
            header="PROBABLY"
            paragraph="Drinking a matcha, listening to 70s soul, and solving the daily newspaper Sudoku"
          />
        </div>

        <CarouselImage
          src="/carouselImages/samPolaroid.png"
          alt="Sam Polaroid"
        />
      </article>
    </section>
  );
}