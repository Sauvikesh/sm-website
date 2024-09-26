import Image from 'next/image';
import { RevealWrapper } from '../../../_components/Reveal/RevealWrapper';

export default function Hobbies() {
  const hobbyItems: HobbyImageProps[] = [
    {
      colSpan: '1',
      src: '/about/hobbies/ceramic.png',
      caption: 'having My first ceramics pop up!',
    },
    {
      colSpan: '1',
      src: '/about/hobbies/film.png',
      caption: 'exploring & taking film photos',
    },
    {
      colSpan: '1',
      src: '/about/hobbies/hike.png',
      caption: 'Hiking the california mountains',
    },
    {
      colSpan: '1',
      src: '/about/hobbies/pumpkin.png',
      caption: 'Pumpkin painting in the park',
    },
    {
      colSpan: '2',
      src: '/about/hobbies/designathon.png',
      caption: 'hosting the first designathon at uc davis',
    },
  ];
  return (
    <section className="pl-[15%] pr-[15%]">
      <RevealWrapper>
        <h3 className="text-4xl tracking-[0.72px]">
          Designer, but also, lifelong learner and adventurer
        </h3>
        <p className="pt-4 pb-8">
          Jack of all trades, master of some. Of all the hobbies and skills I've
          set out to learn, some have stuck, and others I definitely need more
          practice with (driving stick shift, snowboarding, diversifying my
          cooking), but I'm always eager to try new things. Here's what I've
          been up to lately:
        </p>

        <div className="grid grid-rows-2 grid-cols-3 gap-8">
          {hobbyItems.map((hobby, index) => (
            <HobbyImage {...hobby} key={index} />
          ))}
        </div>
      </RevealWrapper>
    </section>
  );
}

type HobbyImageProps = {
  colSpan: string;
  src: string;
  caption: string;
};
export function HobbyImage({ colSpan, src, caption }: HobbyImageProps) {
  const colSpanClass = colSpan === '1' ? 'col-span-1' : 'col-span-2';

  return (
    <div className={`${colSpanClass} group`}>
      <Image
        src={src}
        alt="Sam Photo"
        width={1000}
        height={1000}
        className="relative z-20"
      />
      <h4 className="text-center font-outfit pt-2 transition-all -translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 relative z-10">
        {caption}
      </h4>
    </div>
  );
}
