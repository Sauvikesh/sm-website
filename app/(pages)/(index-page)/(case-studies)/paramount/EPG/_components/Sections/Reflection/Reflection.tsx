'use client';
import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';
import HeadingBody from '../../../../../_components/HeadingBody/HeadingBody';
import { contentProps } from '../../../../errorMessaging/page';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import Image from 'next/image';

export default function Reflection(content: contentProps) {
  return (
    <section className="flex flex-col gap-8" id="Reflection">
      <RevealWrapper>
        <div className="flex flex-col gap-4">
          <h4>{content.h4?.at(0)}</h4>
          <HeadingBody h={content.h3?.at(0)} p={content.body?.at(0)} />
        </div>
        <HeadingBody h={content.h3?.at(1)} p={content.body?.at(1)} />
        <HeadingBody h={content.h3?.at(2)} p={content.body?.at(2)} />

        <CameraRoll />
      </RevealWrapper>
    </section>
  );
}

function CameraRoll() {
  const [emblaRef, _] = useEmblaCarousel({ loop: true }, [
    AutoScroll({
      playOnInit: true,
      speed: 2,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      startDelay: 0,
    }),
  ]);

  const carouselPhotos = [
    {
      imgUrl: '/paramount/photoCarousel/firstDay.png',
      imgCaption: 'my first day of work :D',
    },
    {
      imgUrl: '/paramount/photoCarousel/tacos.png',
      imgCaption: 'tacos with maddie!',
    },
    {
      imgUrl: '/paramount/photoCarousel/friends.png',
      imgCaption: 'intern friends',
    },
    {
      imgUrl: '/paramount/photoCarousel/show.png',
      imgCaption: "stephen colbert's late show",
    },
    {
      imgUrl: '/paramount/photoCarousel/park.png',
      imgCaption: 'concert in bryant park',
    },
    {
      imgUrl: '/paramount/photoCarousel/commute.png',
      imgCaption: 'daily commute to the office',
    },
    {
      imgUrl: '/paramount/photoCarousel/call.png',
      imgCaption: "my last day of work with the l&v team :'(",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-10 pt-10">
      <div className="overflow-hidden w-[100vw]" ref={emblaRef}>
        <div className="flex pl-20">
          {carouselPhotos.map((slide, index) => (
            <CarouselSlide
              key={index}
              imgUrl={slide.imgUrl}
              imgCaption={slide.imgCaption}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

type CarouselSlideProps = {
  imgUrl: string;
  imgCaption: string;
};

function CarouselSlide({ imgUrl, imgCaption }: CarouselSlideProps) {
  return (
    <div className="ml-10 flex-none group relative">
      <Image
        src={imgUrl}
        alt="photography image"
        width={1000}
        height={1000}
        className="w-auto h-[360px] z-20 relative"
      />
      <h4 className="text-center text-wrap font-outfit pt-2 transition-all opacity-0 -translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 z-10 relative">
        {imgCaption}
      </h4>
    </div>
  );
}
