import AutoScroll from 'embla-carousel-auto-scroll';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

export default function Play() {
  return (
    <section
      className="flex flex-col pl-[15%] pr-[15%] pt-[160px] gap-[192px]"
      id="dark-mode"
    >
      <FunText />
      <BookShelf />
      <CameraRoll />
    </section>
  );
}

function FunText() {
  return (
    <div className="flex flex-col items-center gap-10">
      <div>
        <h3>Don't want the fun to end?</h3>
        <p className="font-f-w text-[80px] tracking-[1.6px] -rotate-[8deg] text-center">
          play
        </p>
      </div>
      <Line />
    </div>
  );
}

function Line() {
  return (
    <div className="h-[200px] w-full mt-16 mb-16">
      <div className="h-[200px] w-full relative flex justify-center overflow-hidden animate-grow">
        <div className="h-[200px] w-[1px] bg-white absolute"></div>
      </div>
    </div>
  );
}

function BookShelf() {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-4xl tracking-[0.72px]">On my bookshelf</h3>
        <p>
          Every year since 2021, I set a goal to read 52 books. Here are some of
          the standouts:
        </p>
      </div>
      <div className="flex relative w-full h-[60vh] justify-center pt-10 group">
        <Image
          src="/about/book1.png"
          alt="book 1"
          width={1000}
          height={1000}
          className="w-auto h-[360px] rounded-xl absolute -rotate-[18deg] z-[5] transition-transform duration-500 -translate-x-[120%] group-hover:rotate-0 group-hover:-translate-x-[200%]"
        />
        <Image
          src="/about/book2.png"
          alt="book 2"
          width={1000}
          height={1000}
          className="w-auto h-[360px] rounded-xl absolute -rotate-[10deg] z-[4] transition-transform duration-500 -translate-x-[70%] group-hover:rotate-0 group-hover:-translate-x-[100%]"
        />
        <Image
          src="/about/book3.png"
          alt="book 3"
          width={1000}
          height={1000}
          className="w-auto h-[360px] rounded-xl absolute -rotate-[3deg] z-[3] transition-transform duration-500 -translate-x-[0%] group-hover:rotate-0"
        />
        <Image
          src="/about/book4.png"
          alt="book 4"
          width={1000}
          height={1000}
          className="w-auto h-[360px] rounded-xl absolute rotate-[5deg] z-[2] transition-transform duration-500 translate-x-[70%] group-hover:rotate-0 group-hover:translate-x-[97%]"
        />
        <Image
          src="/about/book5.png"
          alt="book 5"
          width={1000}
          height={1000}
          className="w-auto h-[360px] rounded-xl absolute rotate-[13deg] z-[1] transition-transform duration-500 translate-x-[120%] group-hover:rotate-0 group-hover:translate-x-[200%]"
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

  return (
    <div className="flex flex-col items-center gap-10 ">
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-4xl tracking-[0.72px]">From my camera roll</h3>
        <p>
          Capturing the beauty of the world through film and practicing the art
          of noticing
        </p>
      </div>

      <div className="group">
        <div className="overflow-hidden w-[100vw]" ref={emblaRef}>
          <div className="flex w-full">
            <Image
              src="/about/photo0.png"
              alt="book 1"
              width={1000}
              height={1000}
              className="w-auto h-[300px] pl-8"
            />
            <Image
              src="/about/photo1.png"
              alt="book 1"
              width={1000}
              height={1000}
              className="w-auto h-[300px] pl-8"
            />
            <Image
              src="/about/photo2.png"
              alt="book 1"
              width={1000}
              height={1000}
              className="w-auto h-[300px] pl-8"
            />
            <Image
              src="/about/photo3.png"
              alt="book 1"
              width={1000}
              height={1000}
              className="w-auto h-[300px] pl-8"
            />
            <Image
              src="/about/photo0.png"
              alt="book 1"
              width={1000}
              height={1000}
              className="w-auto h-[300px] pl-8"
            />
            <Image
              src="/about/photo1.png"
              alt="book 1"
              width={1000}
              height={1000}
              className="w-auto h-[300px] pl-8"
            />
            <Image
              src="/about/photo2.png"
              alt="book 1"
              width={1000}
              height={1000}
              className="w-auto h-[300px] pl-8"
            />
          </div>
        </div>

        <h4 className="text-[#7D7D7E] text-center font-outfit pt-2 transition-all -translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
          caption
        </h4>
      </div>
    </div>
  );
}
