import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';
import Image from 'next/image';

export default function Intro() {
  return (
    <section className="pl-[15%] pr-[15%]">
      <RevealWrapper>
        <div className="flex w-full justify-between">
          <div className="flex flex-col w-[43%]">
            <h3 className="pb-2">Overview</h3>
            <p>
              HackDavis is the largest annual collegiate hackathon in
              California. For the 8th year in a row, HackDavis brought together
              students, innovators, and leaders to create for social good in a
              high-energy, time-constrained environment. <br></br> <br></br>{' '}
              Each year HackDavis introduces a new theme, and with it, a new
              website which has the potential to deliver a captivating first
              impression and warmly welcome new and returning participants.{' '}
            </p>
          </div>
          <div className="flex flex-col w-[20%]">
            <h3 className="pb-2">My Role</h3>
            <p>
              Visual Design <br></br>User Research <br></br>
              Handoff & Documentation{' '}
            </p>
            <h3 className="pb-2 pt-8">Timeline</h3>
            <p>
              6 months <br></br> Nov 2023 - Apr 2024{' '}
            </p>
          </div>
          <div className="flex flex-col w-[27%]">
            <h3 className="pb-2">The Team</h3>
            <Image
              src="/hackdavis/team.svg"
              alt="project team"
              width={1000}
              height={1000}
            />
          </div>
        </div>

        <h3 className="pb-2 pt-17">The Challenge</h3>
        <p>
          Traditionally, hackathons consisted solely of programmers who tackled
          software problems and produced technological prototypes. However, the
          modern hackathon encapsulates a much more diverse breadth of projects
          and people. While HackDavis welcomes individuals of all backgrounds
          and experience levels, students with little to no technical experience
          often express their intimidation.
        </p>
      </RevealWrapper>
    </section>
  );
}
