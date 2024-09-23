import Image from 'next/image';
import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';
export default function Ending() {
  return (
    <section className="pl-[15%] pr-[15%] flex flex-col gap-4">
      <RevealWrapper>
        <h4 className="text-[#808080]">Reflection: lessons learned</h4>
        <h3>
          Working with engineers <span className="line-through">can be</span> is
          fun
        </h3>
        <p>
          Stepping outside the realm of exploratory projects upped the stakes of
          this one, and it was a rewarding experience to see the designs come to
          life because of the rapport and relationships that I built with the
          engineers. <br></br> <br></br> My first time working with engineers
          also meant it was my first time completing handoff! Per my request,
          our team tried out Figma Dev Mode and it allowed me to streamline the
          documentation process by annotating interactions and calling out
          specific details. <br></br> <br></br>I learned how integral it is to
          consider technical feasibility, and my empathy for engineers
          contributed to the success of our cross-functional team.
        </p>

        <div className="flex gap-8 pt-16">
          <div className="flex flex-col items-center justify-center">
            <Image
              src="hackdavis/wholeTeam.svg"
              alt="HD team"
              width={1000}
              height={1000}
            />
            <h4 className="pt-4 text-[#808080]">The whole HackDavis team!</h4>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image
              src="hackdavis/designTeam.svg"
              alt="HD team"
              width={1000}
              height={1000}
            />
            <h4 className="pt-4 text-[#808080]">
              Celebratory post-HackDavis photo
            </h4>
          </div>
        </div>
      </RevealWrapper>
    </section>
  );
}
