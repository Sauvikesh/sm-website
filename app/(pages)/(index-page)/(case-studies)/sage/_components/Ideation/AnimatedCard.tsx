import Image from 'next/image';
import { motion, MotionValue } from 'framer-motion';

export type AnimatedCardProps = {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  x: MotionValue<number>;
  y: MotionValue<number>;
  cardSrc: string;
  alt: string;
};

export default function AnimatedCard(props: AnimatedCardProps) {
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
