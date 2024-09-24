import Image from 'next/image';
import { RevealWrapper } from '../../../_components/Reveal/RevealWrapper';

export default function Bio() {
  const floatingImages = [
    {
      src: '/landing/star.svg',
      className:
        'w-[100px] h-auto absolute top-[550px] left-[11%] hover:rotate-180 transition-transform duration-700 animate-load-rotate-full z-20',
    },
    {
      src: '/landing/cloud.svg',
      className:
        'w-[100px] h-auto absolute top-[400px] left-[34%] hover:rotate-180 transition-transform duration-700 animate-load-rotate-full z-0',
    },
    {
      src: '/landing/star2.svg',
      className:
        'w-[100px] h-auto absolute top-[200px] left-[13%] hover:rotate-180 transition-transform duration-700 animate-load-rotate-full',
    },
    {
      src: '/landing/4star.svg',
      className:
        'w-[100px] h-auto absolute top-[500px] right-[6%] hover:rotate-180 transition-transform duration-700 animate-load-rotate-full',
    },
    {
      src: '/landing/spade.svg',
      className:
        'w-[100px] h-auto absolute top-[50px] right-[-3%] hover:rotate-180 transition-transform duration-700 animate-load-rotate-full',
    },
  ];
  return (
    <RevealWrapper>
      <section className="flex pl-[15%] pr-[15%] pt-[30vh] h-[80vh] gap-[118px]">
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
        <Image
          src="/about/SamTMah.png"
          alt="Sam Photo"
          width={1000}
          height={1000}
          className="w-[315px] h-[329px] z-10"
        />

        <div className="flex flex-col gap-6">
          <h3 className="text-4xl tracking-[0.72px]">
            Nice to meet you, I'm Sam :D
          </h3>
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
