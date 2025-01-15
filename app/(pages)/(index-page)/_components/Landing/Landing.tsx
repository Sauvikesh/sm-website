import Image from 'next/image';
import ScrollArrow, { ScrollArrowProps } from './ScrollArrow';
export default function Landing() {
  const floatingImages = [
    {
      src: '/landing/shapes/star.png',
      className:
        'w-[100px] h-auto absolute top-[12%] right-[17%] hover:rotate-180 transition-transform duration-700 animate-load-rotate-full',
    },
    {
      src: '/landing/shapes/cloud.png',
      className:
        'w-[100px] h-auto absolute top-[4.5%] left-[-3%] hover:rotate-180 transition-transform duration-700 animate-load-rotate-full',
    },
    {
      src: '/landing/shapes/star2.png',
      className:
        'w-[100px] h-auto absolute top-[2%] left-[15%]  hover:rotate-180 transition-transform duration-700 animate-load-rotate-full',
    },
    {
      src: '/landing/shapes/4star.png',
      className:
        'w-[100px] h-auto absolute top-[15%] left-[8%] hover:rotate-180 transition-transform duration-700 animate-load-rotate-full',
    },
    {
      src: '/landing/shapes/spade.png',
      className:
        'w-[100px] h-auto absolute top-[-50px] right-[20%] hover:rotate-180 transition-transform duration-700 animate-load-rotate-full z-50',
    },
  ];

  const scrollArrowProps: ScrollArrowProps = {
    sectionId: 'Case Studies',
  };

  // const statuses: StatusesProps[] = [
  //   {
  //     heading: 'CURRENTLY',
  //     text: 'Leading human-centered design education at Davis Design Interactive',
  //   },
  //   {
  //     heading: 'PREVIOUSLY',
  //     text: 'Innovating sports and live television streaming experiences at Paramount+',
  //   },
  //   {
  //     heading: 'PROBABLY',
  //     text: 'Fueling with matcha, listening to 70s soul, solving the daily newspaper Sudoku',
  //   },
  // ];

  return (
    <section
      className="flex flex-col gap-4 items-center justify-center h-[100vh] -mx-[40%] bg-[#F7F7F8]"
      style={{
        backgroundImage: "url('/paperIndex.png')",
        backgroundSize: 'cover',
      }}
    >
      {floatingImages.map((image, index) => (
        <Image
          src={image.src}
          width={1000}
          height={1000}
          alt="floating star :)"
          className={image.className}
          key={index}
        />
      ))}

      <div className="flex flex-col gap-4 max-w-[1008px] w-[70vw] pt-[30px]">
        <div className="flex relative">
          <h2 className="font-normal z-10 animate-slide-header-down">
            Hi, I'm Sam! I design with empathy, find joy in creative problem
            solving, and seek to understand the intricacies of human beings
            <span className="text-2xl"> (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧</span>
          </h2>
          <Image
            src="/landing/matcha.png"
            width={1000}
            height={1000}
            alt="matcha"
            className="w-[150px] h-auto right-[-15%] top-[-140px] absolute z-0"
          />
        </div>

        <div className="flex items-center gap-2 animate-slide-header-down-delayed">
          <p className="text-xl font-normal leading-normal tracking-[0.4px]">
            Previously at{' '}
            <a
              className="underline underline-offset-2"
              href="https://www.paramount.com/about"
              target="_blank"
            >
              Paramount+
            </a>
          </p>
          <Image
            src="/navLinkArrow.svg"
            width={1000}
            height={1000}
            alt="down arrow"
            className="w-[10px]"
          />
        </div>
      </div>

      <ScrollArrow {...scrollArrowProps} />

      {/* <div className="flex justify-between pt-16 relative">
        {statuses.map((status, index) => (
          <Statuses {...status} key={index} />
        ))}
        <Image
          src="/landing/matcha.svg"
          width={1000}
          height={1000}
          alt="matcha"
          className="w-[92px] h-[134px] absolute right-[-12%] top-0"
        />
      </div> */}
    </section>
  );
}

// type StatusesProps = {
//   heading: string;
//   text: string;
// };

// function Statuses({ heading, text }: StatusesProps) {
//   return (
//     <div className="flex flex-col w-[28%]">
//       <h3 className="text-[#A3A3A4] text-[14px] font-normal tracking-[0.56px] font-outfit">
//         {heading}
//       </h3>
//       <p className="text-xs tracking-[0.24px]">{text}</p>
//     </div>
//   );
// }
