import Image from 'next/image';

export default function Intro() {
  return (
    <div className="pl-[11%] pr-[11%] pt-20 pb-20">
      <div className="flex w-full justify-between">
        <div className="flex flex-col w-[38%]">
          <h2 className="pb-2 text-2xl font-medium tracking-[0.48px]">
            Overview
          </h2>
          <p>
            HackDavis is the largest annual collegiate hackathon in California.
            For the 8th year in a row, HackDavis brought together students,
            innovators, and leaders to create for social good in a high-energy,
            time-constrained environment. <br></br> <br></br> Each year
            HackDavis introduces a new theme, and with it, a new website which
            has the potential to deliver a captivating first impression and
            warmly welcome new and returning participants.{' '}
          </p>
        </div>
        <div className="flex flex-col w-[18%]">
          <h2 className="pb-2 text-2xl font-medium tracking-[0.48px]">
            My Role
          </h2>
          <p>
            Visual Design <br></br>User Research <br></br>
            Handoff & Documentation{' '}
          </p>
          <h2 className="pb-2 pt-8 text-2xl font-medium tracking-[0.48px]">
            Timeline
          </h2>
          <p>
            6 months <br></br> Nov 2023 - Apr 2024{' '}
          </p>
        </div>
        <div className="flex flex-col w-[28%]">
          <h2 className="pb-2 text-2xl font-medium tracking-[0.48px]">
            The Team
          </h2>
          <Image
            src="/hackdavis/team.svg"
            alt="project team"
            width={1000}
            height={1000}
          />
        </div>
      </div>

      <h2 className="pb-2 text-2xl font-medium tracking-[0.48px] pt-17">
        The Challenge
      </h2>
      <p>
        Traditionally, hackathons consisted solely of programmers who tackled
        software problems and produced technological prototypes. However, the
        modern hackathon encapsulates a much more diverse breadth of projects
        and people. While HackDavis welcomes individuals of all backgrounds and
        experience levels, students with little to no technical experience often
        express their intimidation.
      </p>
    </div>
  );
}
