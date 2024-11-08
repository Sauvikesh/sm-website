import Image from 'next/image';

export default function Landing() {
  const floatingImages = [
    {
      src: '/landing/shapes/star.svg',
      className:
        'w-[100px] h-auto absolute top-[40px] right-[25%] hover:rotate-180 transition-transform duration-700 animate-load-rotate-full',
    },
    {
      src: '/landing/shapes/cloud.svg',
      className:
        'w-[100px] h-auto absolute top-[90px] right-[-3%] hover:rotate-180 transition-transform duration-700 animate-load-rotate-full',
    },
    {
      src: '/landing/shapes/star2.svg',
      className:
        'w-[100px] h-auto absolute top-[680px] left-[-3%] hover:rotate-180 transition-transform duration-700 animate-load-rotate-full',
    },
    {
      src: '/landing/shapes/4star.svg',
      className:
        'w-[100px] h-auto absolute top-[230px] left-[13%] hover:rotate-180 transition-transform duration-700 animate-load-rotate-full',
    },
    {
      src: '/landing/shapes/spade.svg',
      className:
        'w-[100px] h-auto absolute top-[-50px] left-[3%] hover:rotate-180 transition-transform duration-700 animate-load-rotate-full',
    },
  ];

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
    <section className="flex flex-col gap-4 items-center justify-center h-[100vh] -mx-[40%] bg-[#F7F7F8]">
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

      <div className="flex flex-col gap-4 w-[768px]">
        <div className="flex relative animate-slide-header-down">
          <h1 className="text-[96px] font-bold w-full text-nowrap tracking-[1.92px]">
            Hi, I'm Sam!
          </h1>
          <Image
            src="/landing/matcha.png"
            width={1000}
            height={1000}
            alt="matcha"
            className="w-[150px] h-auto -mt-16"
          />
        </div>

        <h2 className="text-2xl font-normal leading-normal tracking-[0.48px] animate-slide-header-down-delayed">
          I design with empathy, find joy in creative problem solving, seek to
          understand the intricacies of human beings, and fuel with matcha
        </h2>
      </div>

      <Image
        src="/landing/downArrowSticker.svg"
        width={1000}
        height={1000}
        alt="down arrow"
        className="w-20 pt-20 animate-hover-up-down"
      />

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
