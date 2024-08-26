'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Heading from '../Headings/Heading';

export default function Ideation() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 30%', 'end 110%'], // scroll starts 30% above the container, ends by 90% of container(weird math...yucky )
  });

  // note 1 animations

  const rotate1 = useTransform(scrollYProgress, [0, 1], [10, 0]);

  const scale1 = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  const translateX1 = useTransform(scrollYProgress, [0, 1], [200, 0]);

  const translateY1 = useTransform(scrollYProgress, [0, 1], [100, 0]);

  // note 2 animations
  const rotate2 = useTransform(scrollYProgress, [0, 1], [-10, 0]);

  const scale2 = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  const translateX2 = useTransform(scrollYProgress, [0, 1], [-70, 0]);

  const translateY2 = useTransform(scrollYProgress, [0, 1], [60, 0]);

  // note 3 animations
  const rotate3 = useTransform(scrollYProgress, [0, 1], [0, 0]);

  const scale3 = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  const translateX3 = useTransform(scrollYProgress, [0, 1], [250, 0]);

  const translateY3 = useTransform(scrollYProgress, [0, 1], [-160, 0]);

  // note 4 animations
  const rotate4 = useTransform(scrollYProgress, [0, 1], [0, 0]);

  const scale4 = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  const translateX4 = useTransform(scrollYProgress, [0, 1], [-150, 0]);

  const translateY4 = useTransform(scrollYProgress, [0, 1], [100, 0]);

  return (
    <div className="flex flex-col items-center justify-center pt-12 font-dm-sans">
      <Heading h1="IDEATION & SYNTHESIS" p="Identifying key insights" />
      <Image
        src="/sageImages/ideation/manyNotes.png"
        alt="many notes image"
        width={1000}
        height={1000}
        className="w-[100%] h-auto pt-8"
      />
      <div
        className="flex flex-wrap justify-center pt-0 pb-0 p-53"
        ref={sectionRef}
      >
        <motion.div
          className="w-[45%] h-auto"
          style={{
            rotate: rotate1,
            scale: scale1,
            x: translateX1,
            y: translateY1,
          }}
        >
          <Image
            src="/sageImages/ideation/note1.png"
            alt="note 1"
            width={1000}
            height={1000}
          />
        </motion.div>

        <motion.div
          className="w-[45%] h-auto"
          style={{
            rotate: rotate2,
            scale: scale2,
            x: translateX2,
            y: translateY2,
          }}
        >
          <Image
            src="/sageImages/ideation/note2.png"
            alt="note 2"
            width={1000}
            height={1000}
          />
        </motion.div>

        <motion.div
          className="w-[45%] h-auto"
          style={{
            rotate: rotate3,
            scale: scale3,
            x: translateX3,
            y: translateY3,
          }}
        >
          <Image
            src="/sageImages/ideation/note3.png"
            alt="note 3"
            width={1000}
            height={1000}
          />
        </motion.div>

        <motion.div
          className="w-[45%] h-auto"
          style={{
            rotate: rotate4,
            scale: scale4,
            x: translateX4,
            y: translateY4,
          }}
        >
          <Image
            src="/sageImages/ideation/note4.png"
            alt="note 4"
            width={1000}
            height={1000}
          />
        </motion.div>
      </div>
    </div>
  );
}
