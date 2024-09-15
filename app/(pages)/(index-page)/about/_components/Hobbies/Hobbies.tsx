import Image from 'next/image';

export default function Hobbies() {
  const hobbyItems: HobbyImageProps[] = [
    {
      colSpan: '1',
      src: '/about/ceramic.png',
      caption: 'having My first ceramics pop up!',
    },
    {
      colSpan: '1',
      src: '/about/film.png',
      caption: 'exploring & taking film photos',
    },
    {
      colSpan: '1',
      src: '/about/hike.png',
      caption: 'Hiking the california mountains',
    },
    {
      colSpan: '1',
      src: '/about/pumpkin.png',
      caption: 'Pumpkin painting in the park',
    },
    {
      colSpan: '2',
      src: '/about/designathon.png',
      caption: 'hosting the first designathon at uc davis',
    },
  ];
  return (
    <section className="pl-[15%] pr-[15%]">
      <h3 className="text-4xl tracking-[0.72px]">
        Designer, but also, lifelong learner and adventurer
      </h3>
      <p className="pt-4 pb-8">
        Jack of all trades, master of some. Of all the hobbies and skills I've
        set out to learn, some have stuck, and others I definitely need more
        practice with (driving stick shift, snowboarding, diversifying my
        cooking), but I'm always eager to try new things. Here's what I've been
        up to lately:
      </p>

      <div className="grid grid-rows-2 grid-cols-3 gap-8">
        {hobbyItems.map((hobby, index) => (
          <HobbyImage {...hobby} key={index} />
        ))}
      </div>
    </section>
  );
}

type HobbyImageProps = {
  colSpan: string;
  src: string;
  caption: string;
};
export function HobbyImage({ colSpan, src, caption }: HobbyImageProps) {
  return (
    <div className={`col-span-${colSpan} group`}>
      <Image
        src={src}
        alt="Sam Photo"
        width={1000}
        height={1000}
      />
      <h4 className="text-[#7D7D7E] text-center font-outfit pt-2 transition-all -translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">{caption}</h4>
    </div>
  );
}
