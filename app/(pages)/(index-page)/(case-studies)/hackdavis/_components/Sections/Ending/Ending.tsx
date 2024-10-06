import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';
import { ImageWithModal } from '@/app/(pages)/_components/ImageModal/ImageModal';
export default function Ending() {
  return (
    <section className="flex flex-col gap-4" id="Reflection">
      <RevealWrapper>
        <h4>Reflection: lessons learned</h4>
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
            <ImageWithModal
              src="/hackdavis/reflection/wholeTeam.png"
              alt="HD entire team"
              width={1000}
              height={1000}
            />
            <h4 className="pt-4">The whole HackDavis team!</h4>
          </div>
          <div className="flex flex-col items-center justify-center">
            <ImageWithModal
              src="/hackdavis/reflection/designTeam.png"
              alt="HD design team"
              width={1000}
              height={1000}
            />
            <h4 className="pt-4">Celebratory post-HackDavis photo</h4>
          </div>
        </div>
      </RevealWrapper>
    </section>
  );
}
