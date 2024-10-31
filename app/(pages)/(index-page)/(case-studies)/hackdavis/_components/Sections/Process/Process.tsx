import TextCard, {
  TextCardProps,
} from '@/app/(pages)/_components/TextCard/TextCard';
import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';
import { ImageWithModal } from '@/app/(pages)/_components/ImageModal/ImageModal';

export default function Process() {
  const textCardElements: TextCardProps[] = [
    {
      number: '01',
      header: 'Securing adequate funding',
      body: 'Is essential to the success of such a large-scale event, and all of the intricacies including venue, food, wifi, power, and prizes.',
    },
    {
      number: '02',
      header: 'Increasing attendee registration',
      body: 'Demonstrates the growth of HackDavis as an organization, leads to higher student impact, and increases creation for social good.',
    },
  ];

  const profiles: UserProfileProps[] = [
    {
      imgSrc: '/hackdavis/process/frogCircle.svg',
      imgAlt: 'log frog',
      title: 'The beginning hacker',
      listItems: [
        'Unsure about whether they are qualified and/or capable',
        'Want to explore tech and gain hands-on project experience',
      ],
    },
    {
      imgSrc: '/hackdavis/process/cowCircle.svg',
      imgAlt: 'cow',
      title: 'The potential sponsor',
      listItems: [
        'Wants to learn about the mission and core values of HackDavis',
        'Needs to validate that their investment',
      ],
    },
  ];

  return (
    <section className="flex flex-col gap-[80px]" id="Research">
      <RevealWrapper>
        <h2 className="text-center">The Process</h2>

        <div className="flex flex-col gap-4">
          <h3>Designing for user vs. business needs... why not both?</h3>
          <p>
            Defining HackDavis' business goals was a vital first step of this
            project and helped determine key performance indicators (KPIs).
          </p>

          <div className="flex gap-8">
            {textCardElements.map((card, index) => (
              <TextCard {...card} key={index} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="pb-4">
            Opportunity Area: Leveraging Emotional Design
          </h3>
          <p>
            Understanding user needs are equally as important, and I conducted 5
            one-on-one interviews with previous HackDavis participants to do so.
            I wanted to learn more about their hackathon journey, including what
            their motivations for participating were and what their experiences
            with previous years' websites was like.<br></br>
            <br></br> 3 out of the 5 interviewees stated that their motivations
            for participating were exploring tech and gaining project
            experience. They possessed a strong desire to complete a hands-on
            project in a short period of time, however, they had concerns about
            having little to no prior experience in tech. Feeling a sense of
            inclusivity sealed the deal and ultimately drove interviewees to
            register for the hackathon by assuaging any doubts they may have had
            about their background, qualifications, and/or level of expertise.
          </p>
        </div>

        <div className="flex gap-8 relative w-full">
          {profiles.map((profile, index) => (
            <UserProfile {...profile} key={index} />
          ))}
        </div>

        <div>
          <h3 className="pb-4">
            Setting actionable goals to address the target audiences
          </h3>
          <p>
            In an effort to deliver a thoughtful execution of emotional design,
            I conducted literature reviews and set three goals: <br></br>{' '}
            <br></br>
            1. Inject a signature personality with HackDavis' mascots <br></br>
            2. Craft copy with the right tone assuage and encourage beginners{' '}
            <br></br>
            3. Use effective and engaging storytelling that leaves users feeling
            inspired
          </p>
        </div>
      </RevealWrapper>
    </section>
  );
}

type UserProfileProps = {
  imgSrc: string;
  imgAlt: string;
  title: string;
  listItems: string[];
};

function UserProfile(props: UserProfileProps) {
  const { imgSrc, imgAlt, title, listItems } = props;

  return (
    <div className="flex flex-grow items-center gap-8 border border-[#CCCCCC] rounded-2xl pt-8 pb-8 pl-[43.5px] pr-[43.5px]">
      <ImageWithModal
        src={imgSrc}
        alt={imgAlt}
        width={1000}
        height={1000}
        className="w-[140px]"
      />
      <div className="flex flex-col gap-4">
        <p className="font-semibold">{title}</p>
        <ul className="list-disc list-inside">
          {listItems.map((item, index) => (
            <li className="text-sm" key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
