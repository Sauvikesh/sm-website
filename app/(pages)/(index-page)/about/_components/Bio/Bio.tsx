'use client';
import { useRef } from 'react';
import CarouselImage from '../PhotoCarousel/CarouselImage';
import CurrentStatus, { CurrentStatusProps } from './CurrentStatus';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Bio() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 50%', 'end 150%'], // scroll starts 50% above the container, ends by ??% of container(weird math...yucky )
  });

  const slideInTextStyle = {
    x: useTransform(scrollYProgress, [0, 1], [0, 250]),
    opacity: useTransform(scrollYProgress, [0, 1], [1, 0]),
  };

  const currentStatus: CurrentStatusProps[] = [
    {
      header: "I'm Sam",
      paragraph:
        'A visionary designer with an adventurous spirit and an insatiable curiosity to learn from others',
      intro: true,
    },
    {
      header: 'CURRENTLY',
      paragraph:
        'On my way towards earning an undergraduate degree in Design at UC Davis',
    },
    {
      header: 'PROBABLY',
      paragraph:
        'Drinking a matcha, listening to 70s soul, and solving the daily newspaper Sudoku',
    },
  ];

  return (
    <section className="h-[85vh] pl-[15%] pr-[15%]" ref={sectionRef}>
      <motion.h1
        className="text-[5em] mb-9 font-semibold leading-[54px]"
        style={slideInTextStyle}
      >
        Nice to meet you, I'm Sam
      </motion.h1>

      <article className="flex gap-3">
        <div className="flex flex-col gap-14 pt-7">
          {currentStatus.map((stat, index) => (
            <CurrentStatus {...stat} key={index} />
          ))}
        </div>

        <CarouselImage
          src="/carouselImages/samPolaroid.png"
          alt="Sam Polaroid"
        />
      </article>
    </section>
  );
}
