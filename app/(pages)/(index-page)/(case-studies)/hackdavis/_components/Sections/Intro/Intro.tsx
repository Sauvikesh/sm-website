import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';
import Image from 'next/image';

export default function Intro() {
  return (
    <section>
      <RevealWrapper>
        <div className="flex w-full justify-between pb-10">
          <div className="flex flex-col gap-2">
            <h3>Timeline</h3>
            <p>
              6 months <br></br> Nov 2023 - Apr 2024{' '}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3>My Role</h3>
            <p>
              Visual Design <br></br>User Research <br></br>
              Handoff & Documentation{' '}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3>The Team</h3>
            <Image
              src="/hackdavis/team.svg"
              alt="project team"
              width={1000}
              height={1000}
              className="w-full"
            />
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <h3>Overview</h3>
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
