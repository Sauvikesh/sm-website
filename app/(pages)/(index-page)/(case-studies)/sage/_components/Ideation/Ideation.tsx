'use client';

import Image from 'next/image';
import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Heading from '../Headings/Heading';
import AnimatedCard, { AnimatedCardProps } from './AnimatedCard';

export default function Ideation() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 30%', 'end 110%'], // scroll starts 30% above the container, ends by 90% of container(weird math...yucky )
  });

  const animatedCards: AnimatedCardProps[] = [
    {
      rotate: useTransform(scrollYProgress, [0, 1], [10, 0]),
      scale: useTransform(scrollYProgress, [0, 1], [0.5, 1]),
      x: useTransform(scrollYProgress, [0, 1], [200, 0]),
      y: useTransform(scrollYProgress, [0, 1], [100, 0]),
      cardSrc: '/sageImages/ideation/note1.png',
      alt: 'note 1',
    },
    {
      rotate: useTransform(scrollYProgress, [0, 1], [-10, 0]),
      scale: useTransform(scrollYProgress, [0, 1], [0.5, 1]),
      x: useTransform(scrollYProgress, [0, 1], [-70, 0]),
      y: useTransform(scrollYProgress, [0, 1], [60, 0]),
      cardSrc: '/sageImages/ideation/note2.png',
      alt: 'note 2',
    },
    {
      rotate: useTransform(scrollYProgress, [0, 1], [0, 0]),
      scale: useTransform(scrollYProgress, [0, 1], [0.5, 1]),
      x: useTransform(scrollYProgress, [0, 1], [250, 0]),
      y: useTransform(scrollYProgress, [0, 1], [-160, 0]),
      cardSrc: '/sageImages/ideation/note3.png',
      alt: 'note 3',
    },
    {
      rotate: useTransform(scrollYProgress, [0, 1], [0, 0]),
      scale: useTransform(scrollYProgress, [0, 1], [0.5, 1]),
      x: useTransform(scrollYProgress, [0, 1], [-150, 0]),
      y: useTransform(scrollYProgress, [0, 1], [100, 0]),
      cardSrc: '/sageImages/ideation/note4.png',
      alt: 'note 4',
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center pt-12 bg-[#e4edeb]">
      <Heading h1="IDEATION & SYNTHESIS" p="Identifying key insights" />
      <Image
        src="/sageImages/ideation/manyNotes.png"
        alt="many notes image"
        width={1000}
        height={1000}
        className="w-full h-auto pt-8"
      />
      <div
        className="flex flex-wrap justify-center pl-[15%] pr-[15%]"
        ref={sectionRef}
      >
        {animatedCards.map((card, index) => (
          <AnimatedCard {...card} key={index} />
        ))}
      </div>
    </div>
  );
}
