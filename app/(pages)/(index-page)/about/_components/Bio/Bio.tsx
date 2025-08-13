import Image from 'next/image';
import { RevealWrapper } from '../../../_components/Reveal/RevealWrapper';

export default function Bio() {
  const floatingImages = [
    {
      src: '/landing/shapes/4star.png',
      className:
        'w-[100px] h-auto absolute bottom-[-13%] left-[-2%] hover:rotate-180 transition-transform duration-700 animate-load-rotate-full z-[11]',
    },
    {
      src: '/landing/shapes/cloud.png',
      className:
        'w-[100px] h-auto absolute top-[40%] right-[-8%] hover:rotate-180 transition-transform duration-700 animate-load-rotate-full z-0',
    },
    {
      src: '/landing/shapes/star2.png',
      className:
        'w-[100px] h-auto absolute top-[-5%] left-[-11%] hover:rotate-180 transition-transform duration-700 animate-load-rotate-full',
    },
    {
      src: '/landing/shapes/spade.png',
      className:
        'w-[100px] h-auto absolute top-[-1%] right-[5%] hover:rotate-180 transition-transform duration-700 animate-load-rotate-full',
    },
  ];
  return (
    <RevealWrapper>
      <section className="flex px-[13%] pt-[30vh] h-[80vh] gap-[118px]">
        {floatingImages
          .slice(3, 4)
          ?.map((image, index) => (
            <Image
              src={image.src}
              width={1000}
              height={1000}
              alt="floating star :)"
              className={image.className}
              key={index}
            />
          ))}

        <div className="flex relative w-[40%] h-full -mt-14">
          <Image
            src="/about/SamTMah.png"
            alt="Sam Photo"
            width={1000}
            height={1000}
            className="w-[371px] h-[458px] z-10"
          />

          {floatingImages
            .slice(0, 3)
            ?.map((image, index) => (
              <Image
                src={image.src}
                width={1000}
                height={1000}
                alt="floating star :)"
                className={image.className}
                key={index}
              />
            ))}
        </div>

        <div className="flex flex-col gap-6 w-[60%]">
          <h3 className="text-4xl tracking-[0.72px]">Nice to meet ya!</h3>
          <p>
            Throughout my childhood, I had a fierce imagination and a desire to build things. I turned my ideas into reality through writing, drawing, and even building furniture for my dolls. I thoughtfully designed all of my relative's birthday cards
            and chose the paint color of my dad's motorcycles. <br></br>{' '}
            <br></br>I further fueled my creative endeavors at Design Tech High
            School where I had the opportunity to thrive in a project-based
            curriculum modeled after Stanford University's d.school. I discovered the intersection of human-centered design and technology, paving the way for my career in UX design, where I could continue to solve problems for people by wielding my creative and analytical skills.
          </p>
        </div>
      </section>
    </RevealWrapper>
  );
}
