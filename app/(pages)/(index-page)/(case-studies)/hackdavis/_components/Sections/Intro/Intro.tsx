import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';
import { ImageWithModal } from '@/app/(pages)/_components/ImageModal/ImageModal';

export default function Intro() {
  return (
    <section>
      <RevealWrapper>
        <div className="flex w-full justify-between pb-10 flex-wrap" id="Intro">
          <div className="flex flex-col gap-2">
            <h3>My Role</h3>
            <p>
              Visual Design <br></br>User Research<br></br>
              Documentation<br></br>Developer Handoff{' '}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3>Timeline</h3>
            <p>
              6 months <br></br> Nov 2023 - Apr 2024{' '}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3>Tools</h3>
            <p>
              Figma<br></br>Chrome DevTools
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3>The Team</h3>
            <p>
              Jason (Illustrations)<br></br>Sauv (Engineering)<br></br>Win
              (Engineering)<br></br>Me! (UX Design)
            </p>
            <ImageWithModal
              src="/hackdavis/team.png"
              alt="project team"
              width={1000}
              height={1000}
              className="w-[300px]"
            />
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <h3>Context</h3>
            <p>
              HackDavis is the largest annual collegiate hackathon in
              California. For the 8th year in a row, HackDavis brought together
              students, innovators, and leaders to create for social good in a
              high-energy, time-constrained environment. Each year HackDavis
              introduces a new theme, and with it, a new website which has the
              potential to deliver a captivating first impression and warmly
              welcome new and returning participants.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3>The Challenge</h3>
            <p>
              Traditionally, hackathons consisted solely of programmers who
              tackled software problems and produced technological prototypes.
              However, the modern hackathon encapsulates a much more diverse
              breadth of projects and people. While HackDavis welcomes
              individuals of all backgrounds and experience levels, students
              with little to no technical experience often express their
              intimidation.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3>The Solution</h3>
            <p>
              A responsive website that sets students up for success by
              facilitating resource discovery in a variety of subjects such as
              web development, data science, hardware, design, and more. Through
              the use of plain language and whimsical characters, users embark
              on a journey to learn about HackDavis' commitment to inclusion,
              the values that the organization embodies, and the diverse
              innovations created by previous participants.
            </p>
          </div>
        </div>
      </RevealWrapper>
    </section>
  );
}
