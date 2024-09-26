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

  const statuses: StatusesProps[] = [
    {
      heading: 'CURRENTLY',
      text: 'Leading human-centered design education at Davis Design Interactive',
    },
    {
      heading: 'PREVIOUSLY',
      text: 'Innovating sports and live television streaming experiences at Paramount+',
    },
    {
      heading: 'PROBABLY',
      text: 'Fueling with matcha, listening to 70s soul, solving the daily newspaper Sudoku',
    },
  ];

  return (
    <section className="h-[100vh] pt-[268px] pl-[8%] pr-[8%]">
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

      <h1 className="text-[96px] font-f-w h-[140px] font-medium animate-slide-header-down w-full text-nowrap tracking-[3.84px]">
        Samantha Mah
      </h1>

      <div className="flex flex-row animate-slide-header-down-delayed">
        <h2 className="text-[25px] font-normal leading-normal tracking-[0.5px]">
          Designing with empathy, finding joy in creative problem solving,{' '}
          <br></br> and seeking to understand the intricacies of human beings
        </h2>
      </div>
      <div className="flex justify-between pt-16 relative">
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
      </div>
    </section>
  );
}

type StatusesProps = {
  heading: string;
  text: string;
};

function Statuses({ heading, text }: StatusesProps) {
  return (
    <div className="flex flex-col w-[28%]">
      <h3 className="text-[#A3A3A4] text-[14px] font-normal tracking-[0.56px] font-outfit">
        {heading}
      </h3>
      <p className="text-xs tracking-[0.24px]">{text}</p>
    </div>
  );
}
