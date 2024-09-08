import Image from 'next/image';
// TODO: plz refactor this and create components for reused code :))))
export default function Process() {
  return (
    <div className="flex flex-col pl-[11%] pr-[11%] gap-[84px]">
      <h1 className="text-[40px] font-bold tracking-[0.8px] text-center">
        The Process
      </h1>

      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-medium leading-6 pb-4">
          Hackathons are <span className=" italic">expensive</span>, like{' '}
          <span className=" italic">$80,000 expensive</span>
        </h2>
        <p>
          Defining HackDavis' business goals was a vital first step of this
          project and helped determine key performance indicators (KPIs).
        </p>

        <div className="flex gap-8">
          <div className="flex flex-col bg-[#F1F1F1] p-6 rounded-2xl gap-4 border border-[#D2D2D2]">
            <h2 className="text-4xl text-[#B5B5B5] font-bold tracking-[0.72px] leading-[54px]">
              01
            </h2>
            <h2 className="text-2xl font-medium leading-6 pb-4">
              Securing adequate funding
            </h2>
            <p>
              Is essential to the success of such a large-scale event, and all
              of the intricacies including venue, food, wifi, power, and prizes.
            </p>
          </div>
          <div className="flex flex-col bg-[#F1F1F1] p-6 rounded-2xl gap-4 border border-[#D2D2D2]">
            <h2 className="text-4xl text-[#B5B5B5] font-bold tracking-[0.72px] leading-[54px]">
              02
            </h2>
            <h2 className="text-2xl font-medium leading-6 pb-4">
              Increasing attendee registration
            </h2>
            <p>
              Demonstrates the growth of HackDavis as an organization, leads to
              higher student impact, and more creation for social good.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-medium leading-6 pb-4">
          Designing for user vs. business needs... why not both?
        </h2>
        <p>
          Understanding user needs are equally as important, and I conducted 5
          one-on-one interviews with previous HackDavis participants to do so. I
          wanted to learn more about their hackathon journey, including what
          their motivations for participating were and what their experiences
          with previous years' websites was like.<br></br>
          <br></br> 3 out of the 5 interviewees stated that their motivations
          for participating were exploring tech and gaining project experience.
          They possessed a strong desire to complete a hands-on project in a
          short period of time, however, they had concerns about having little
          to no prior experience in tech. Feeling a sense of inclusivity sealed
          the deal and ultimately drove interviewees to register for the
          hackathon by assuaging any doubts they may have had about their
          background, qualifications, and/or level of expertise.
        </p>
      </div>

      <div className="flex flex-col bg-[#F1F1F1] p-6 rounded-2xl gap-2 border border-[#D2D2D2]">
        <h2 className="text-2xl font-medium leading-6">
          Opportunity Area: Leveraging Emotional Design
        </h2>
        <p>
          After connecting with previous HackDavis participants and sponsors, I
          realized that emotional design could be a powerful tool to balance
          user and business needs. Conveying a sense of inclusion makes the
          world of a difference to first-time participants and helps them take
          the first step to break barriers in tech, while demonstrating our
          professionalism, telling a wholistic story about our values, and
          showcasing previous years' success are integral to reassuring
          potential sponsors that they are making a worthy investment.
        </p>
      </div>

      <div className="flex gap-16 relative w-full">
        <div className="flex items-center gap-8">
          <Image
            src="hackdavis/frogCircle.svg"
            alt="log frog"
            width={1000}
            height={1000}
            className="w-[255px]"
          />
          <div className="flex flex-col gap-4">
            <h3 className="font-medium">The beginning hacker</h3>
            <ul className="list-disc pl-4">
              <li className="text-sm">
                Unsure about whether they are qualified and/or capable
              </li>
              <li className="text-sm">
                Want to explore tech and gain hands-on project experience
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <Image
            src="hackdavis/cowCircle.svg"
            alt="log frog"
            width={1000}
            height={1000}
            className="w-[255px]"
          />
          <div className="flex flex-col gap-4">
            <h3 className="font-medium">The potential sponsor</h3>
            <ul className="list-disc pl-4">
              <li className="text-sm">
                Wants to learn about the mission and core values of HackDavis
              </li>
              <li className="text-sm">
                Needs to validate that their investment is going to a good cause
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-medium leading-6 pb-4">
          Setting actionable goals to address the target audiences
        </h2>
        <p>
          To familiarize myself with the principles of emotional design, I
          conducted literature reviews on the topic and set three actionable
          goals that would deliver a thoughtful execution of emotional design to
          both target audiences: <br></br> <br></br>
          1. Inject a signature personality <br></br>
          2. Craft copy with the right tone to inspire or accommodate emotions{' '}
          <br></br>
          3. Use effective and engaging storytelling
        </p>
      </div>
    </div>
  );
}
