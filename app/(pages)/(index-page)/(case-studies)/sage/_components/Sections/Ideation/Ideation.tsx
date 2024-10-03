'use client';

import Image from 'next/image';
import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Heading from '../../Heading/Heading';
import { motion, MotionValue } from 'framer-motion';
import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';

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
    <section
      className="flex flex-col items-center justify-center pt-12 bg-contain text-center px-[40%] mx-[-40%]"
      style={{ backgroundImage: "url('/sageImages/ideation/dots.png')" }}
    >
      <RevealWrapper>
        <Heading h1="IDEATION & SYNTHESIS" p="Identifying key insights" />
        <Image
          src="/sageImages/ideation/manyNotes.png"
          alt="many notes image"
          width={1000}
          height={1000}
          className="w-full h-auto pt-8"
        />
        <div className="flex flex-wrap justify-center" ref={sectionRef}>
          {animatedCards.map((card, index) => (
            <AnimatedCard {...card} key={index} />
          ))}
        </div>
      </RevealWrapper>
    </section>
  );
}

type AnimatedCardProps = {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  x: MotionValue<number>;
  y: MotionValue<number>;
  cardSrc: string;
  alt: string;
};

function AnimatedCard(props: AnimatedCardProps) {
  const { rotate, scale, x, y, cardSrc, alt } = props;

  return (
    <motion.div
      className="w-[45%] h-auto"
      style={{
        rotate: rotate,
        scale: scale,
        x: x,
        y: y,
      }}
    >
      <Image src={cardSrc} alt={alt} width={1000} height={1000} />
    </motion.div>
  );
}
