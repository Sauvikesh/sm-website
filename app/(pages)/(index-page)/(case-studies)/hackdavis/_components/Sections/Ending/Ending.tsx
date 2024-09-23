import Image from 'next/image';
import Heading, { HeadingProps } from '../../Heading/Heading';
import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';
export default function Ending() {
  const headings: HeadingProps[] = [
    {
      h3: 'Challenges',
      p: "Stepping outside the realm of exploratory projects upped the stakes of this one, and in an effort to do the very best I could, I had a hard time closing the project with confidence. I kept finding small things that I wanted to change and improve, however with the timeline our team was given, I learned to celebrate our achievements and the effort devoted to the project, then it's up and onwards to the next challenge.",
    },
    {
      h3: 'Takeaways',
      p: 'Building rapport and relationships between designers and engineers is integral to the success and shared vision across teams. Cultivating friendships with the engineers who brought the designs to life made this experience even more worthwhile, and working closely with them gave me a newfound mindset to consider technical feasibility.',
    },
    {
      h3: 'Next Steps',
      p: "I'm looking forward to seeing HackDavis 2025 come to life, and I hope that the work from this year serves as a jumping off point for next year's designers to continually improve on and advocate for human-centered experiences.",
    },
  ];

  return (
    <section className="pl-[15%] pr-[15%] flex flex-col gap-20 pb-20">
      <RevealWrapper>
        {headings.map((heading, index) => (
          <Heading {...heading} key={index} />
        ))}

        <div className="flex gap-8">
          <div className="flex flex-col items-center justify-center">
            <Image
              src="hackdavis/wholeTeam.svg"
              alt="HD team"
              width={1000}
              height={1000}
            />
            <p className="pt-4">The whole HackDavis team!</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image
              src="hackdavis/designTeam.svg"
              alt="HD team"
              width={1000}
              height={1000}
            />
            <p className="pt-4">Celebratory post-HackDavis photo</p>
          </div>
        </div>
      </RevealWrapper>
    </section>
  );
}
