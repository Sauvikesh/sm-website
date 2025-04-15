import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';
import { ImageWithModal } from '@/app/(pages)/_components/ImageModal/ImageModal';
export default function Ending() {
  return (
    <section className="flex flex-col gap-8" id="Reflection">
      <RevealWrapper>
        <div className="flex flex-col gap-4">
          <h4>Reflection: Lessons Learned</h4>
          <h3>Engineering partnership</h3>
          <p>
            It was a rewarding experience to see the designs come to life
            because of the rapport and relationships that I built with the
            engineers. I learned how integral it is to consider technical
            feasibility, and my empathy for engineers contributed to the success
            of our cross-functional team.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3>Adopting new technologies</h3>
          <p>
            In prior years, the handoff required manual annotations. I saw an
            opportunity to streamline this process, and per my request, our team
            tried out Figma Dev Mode. It was a huge time saver!
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h3>Attention to the details</h3>
          <p>
            I had a lot of fun working with Jason to thoughtfully incorporate
            animations that made the characters come to life. The
            microinteractions of the site showed me how motion graphics play a
            part in the overall user experience.
          </p>
        </div>
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
