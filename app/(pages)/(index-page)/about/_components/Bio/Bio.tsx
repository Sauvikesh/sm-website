import Image from 'next/image';
import { RevealWrapper } from '../../../_components/Reveal/RevealWrapper';

export default function Bio() {
  const floatingImages = [
    {
      src: '/landing/shapes/4star.svg',
      className:
        'w-[100px] h-auto absolute bottom-[-13%] left-[-2%] hover:rotate-180 transition-transform duration-700 animate-load-rotate-full z-[11]',
    },
    {
      src: '/landing/shapes/cloud.svg',
      className:
        'w-[100px] h-auto absolute top-[40%] right-[-8%] hover:rotate-180 transition-transform duration-700 animate-load-rotate-full z-0',
    },
    {
      src: '/landing/shapes/star2.svg',
      className:
        'w-[100px] h-auto absolute top-[-5%] left-[-11%] hover:rotate-180 transition-transform duration-700 animate-load-rotate-full',
    },
    {
      src: '/landing/shapes/spade.svg',
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
            src="/about/SamTMah.svg"
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
          <h3 className="text-4xl tracking-[0.72px]">Nice to meet you</h3>
          <p>
            Throughout my childhood, I turned my ideas into reality through
            drawing and building furniture for my dolls. My expansive
            imagination naturally elected me as the consultant for creative
            problem solving, from designing all of my relative's birthday cards
            to choosing the paint color of my dad's motorcycles. <br></br>{' '}
            <br></br>I further fueled my creative endeavors at Design Tech High
            School where I had the opportunity to thrive in a project-based
            curriculum modeled after Stanford University's d.school. This
            sparked a passion for the intersection of human-centered design and
            technology, and opened up a whole new world where I could continue
            to approach problems with a creative and empathetic mindset.
          </p>
        </div>
      </section>
    </RevealWrapper>
  );
}
