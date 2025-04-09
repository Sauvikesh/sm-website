import AutoScroll from 'embla-carousel-auto-scroll';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { RevealWrapper } from '../../../_components/Reveal/RevealWrapper';
import FunText from './FunText';

export default function Play() {
  return (
    <section
      className="flex flex-col pl-[15%] pr-[15%] gap-[192px]"
      id="dark-mode"
    >
      <RevealWrapper>
        <FunText />
        <BookShelf />
        <CameraRoll />
      </RevealWrapper>
    </section>
  );
}

function BookShelf() {
  return (
    <div className="flex flex-col items-center gap-10 w-[70vw]">
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-4xl tracking-[0.72px]">On my bookshelf</h3>
        <p>
          Every year since 2021, I set a goal to read 52 books. Here are some of
          the standouts:
        </p>
      </div>
      <div className="flex relative h-[60vh] justify-center pt-10 group gap-8">
        <Image
          src="/about/books/book1.png"
          alt="book 1"
          width={1000}
          height={1000}
          className="w-auto h-[257px] rounded-xl z-[5] transition-transform duration-500 translate-x-[95%] -rotate-[18deg] group-hover:translate-x-0 group-hover:rotate-0"
        />
        <Image
          src="/about/books/book2.png"
          alt="book 2"
          width={1000}
          height={1000}
          className="w-auto h-[257px] rounded-xl z-[4] transition-transform duration-500 translate-x-[40%] -rotate-[10deg] group-hover:translate-x-0 group-hover:rotate-0"
        />
        <Image
          src="/about/books/book3.png"
          alt="book 3"
          width={1000}
          height={1000}
          className="w-auto h-[257px] rounded-xl z-[3] transition-transform duration-500 -rotate-[2deg] group-hover:translate-x-0 group-hover:rotate-0"
        />
        <Image
          src="/about/books/book4.png"
          alt="book 4"
          width={1000}
          height={1000}
          className="w-auto h-[257px] rounded-xl z-[2] transition-transform duration-500 -translate-x-[50%] rotate-[5deg] group-hover:translate-x-0 group-hover:rotate-0"
        />
        <Image
          src="/about/books/book5.png"
          alt="book 5"
          width={1000}
          height={1000}
          className="w-auto h-[257px] rounded-xl z-[1] transition-transform duration-500 -translate-x-[85%] rotate-[13deg] group-hover:translate-x-0 group-hover:rotate-0"
        />
      </div>
    </div>
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
      imgUrl: '/about/photoCarousel/photo0.png',
      imgCaption: 'half moon bay, ca',
    },
    {
      imgUrl: '/about/photoCarousel/photo1.png',
      imgCaption: 'half moon bay, ca',
    },
    {
      imgUrl: '/about/photoCarousel/photo2.png',
      imgCaption: 'pebble beach, ca',
    },
    {
      imgUrl: '/about/photoCarousel/photo3.png',
      imgCaption: 'kamakura, japan',
    },
    {
      imgUrl: '/about/photoCarousel/photo4.png',
      imgCaption: 'arashiyama, japan',
    },
    {
      imgUrl: '/about/photoCarousel/photo5.png',
      imgCaption: 'hiroshima, japan',
    },
    {
      imgUrl: '/about/photoCarousel/photo6.png',
      imgCaption: 'santa barbara, ca',
    },
  ];

  return (
    <div className="flex flex-col items-center gap-10 pb-[80px] -mt-[220px]">
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-4xl tracking-[0.72px]">From my camera roll</h3>
        <p>
          Capturing the beauty of the world through film and practicing the art
          of noticing
        </p>
      </div>

      <div className="overflow-hidden w-[100vw]" ref={emblaRef}>
        <div className="flex">
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
      <h4 className="text-center font-spaceGrotesk pt-2 transition-all opacity-0 -translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 z-10 relative">
        {imgCaption}
      </h4>
    </div>
  );
}
