import Image from 'next/image';

export default function Landing() {
  const floatingImages = [
    {
      src: '/landing/cloud.svg',
      className:
        'w-[100px] h-auto absolute top-[40px] left-[520px] hover:rotate-180 transition-transform duration-700 animate-load-rotate-full',
    },
    {
      src: '/landing/4star.svg',
      className:
        'w-[100px] h-auto absolute top-[70px] right-[-50px] hover:rotate-180 transition-transform duration-700 animate-load-rotate-full',
    },
    {
      src: '/landing/cloud.svg',
      className:
        'w-[100px] h-auto absolute top-[600px] left-[-30px] hover:rotate-180 transition-transform duration-700 animate-load-rotate-full',
    },
    {
      src: '/landing/4star.svg',
      className:
        'w-[100px] h-auto absolute top-[280px] left-[140px] hover:rotate-180 transition-transform duration-700 animate-load-rotate-full',
    },
    {
      src: '/landing/star.svg',
      className:
        'w-[100px] h-auto absolute top-[680px] right-[140px] hover:rotate-180 transition-transform duration-700 animate-load-rotate-full',
    },
  ];

  return (
    <section className="h-[100vh] pt-[268px]">
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

      <h1 className="text-white text-[128px] font-f-w h-[200px] animate-slide-header-down w-full text-nowrap">
        Samantha Mah
      </h1>
      <div className="flex flex-row animate-slide-header-down-delayed ">
        <h2 className="text-white font-dm-sans text-4xl w-[90%] font-normal self-start leading-normal tracking-[-0.015em]">
          is a curious product designer who finds joy in human connection and
          has a love for creative problem solving
        </h2>
        <Image
          src="/landing/matcha.svg"
          width={1000}
          height={1000}
          alt="matcha"
          className="w-[92px] h-[134px] mt-[-35px]"
        />
      </div>
    </section>
  );
}
