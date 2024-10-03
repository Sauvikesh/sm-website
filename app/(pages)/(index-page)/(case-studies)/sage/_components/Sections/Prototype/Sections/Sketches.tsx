import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';
import Image from 'next/image';

const sketches = [
  { src: '/sageImages/prototype/sketch1.jpg', alt: 'sketch1' },
  { src: '/sageImages/prototype/sketch2.jpg', alt: 'sketch2' },
  { src: '/sageImages/prototype/sketch3.jpg', alt: 'sketch3' },
  { src: '/sageImages/prototype/sketch4.jpg', alt: 'sketch4' },
];

const sketchesGridBlocks: SketchesGridBlocksProps[] = [
  {
    h1: 'Flexible goal setting',
    p: 'Users can create realistic goals that align with their schedules',
  },
  {
    h1: 'Increased filter + sort abilities',
    p: 'Users feel less overwhelmed which encourages searching for new practices',
  },
  {
    h1: 'Gamified reward system',
    p: 'Users can receive extrinsic motivation which encourages consistency',
  },
  {
    h1: 'Flexible goal setting',
    p: 'Users find comfort in familiar practices that they curated themself',
  },
];

export default function Sketches() {
  return (
    <div className="flex flex-col">
      <RevealWrapper>
        <h3>Incorporating opportunity areas into sketches</h3>
        <div className="flex pt-8 pb-16">
          {sketches.map((sketch, index) => (
            <Image
              src={sketch.src}
              alt={sketch.alt}
              width={1000}
              height={1000}
              key={index}
              className="w-[25%]"
            />
          ))}
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-y-16 gap-x-12">
          {sketchesGridBlocks.map((block, index) => (
            <SketchesGridBlocks {...block} key={index} />
          ))}
        </div>
      </RevealWrapper>
    </div>
  );
}

type SketchesGridBlocksProps = {
  h1: string;
  p: string;
};

function SketchesGridBlocks(props: SketchesGridBlocksProps) {
  const { h1, p } = props;

  return (
    <div className="flex flex-col col-span-1 row-span-1 gap-4">
      <h3>{h1}</h3>
      <p>{p}</p>
    </div>
  );
}
