import Image from 'next/image';

export default function Bio() {
  return (
    <section className="flex pl-[15%] pr-[15%] pt-[313px] h-[100vh] gap-[118px]">
      <Image
        src="/about/SamTMah.png"
        alt="Sam Photo"
        width={1000}
        height={1000}
        className="w-[315px] h-[329px]"
      />

      <div className="flex flex-col gap-6">
        <h3 className="text-4xl tracking-[0.72px]">
          Nice to meet you, I'm Sam :D
        </h3>
        <p>
          Throughout my childhood, I turned my ideas into reality through
          drawing and building furniture for my dolls. My expansive imagination
          naturally elected me as the consultant for creative problem solving,
          from designing all of my relative's birthday cards to choosing the
          paint color of my dad's motorcycles. <br></br> <br></br>I further
          fueled my creative endeavors at Design Tech High School where I had
          the opportunity to thrive in a project-based curriculum modeled after
          Stanford University's d.school. This sparked a passion for the
          intersection of human-centered design and technology, and opened up a
          whole new world where I could continue to approach problems with a
          creative and empathetic mindset.
        </p>
      </div>
    </section>
  );
}
