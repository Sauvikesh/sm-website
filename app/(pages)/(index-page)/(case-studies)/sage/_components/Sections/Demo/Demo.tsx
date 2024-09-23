import Heading from '../../Heading/Heading';

const videoCardContent: VideoTextCardProps[] = [
  {
    pageName: 'ONBOARDING',
    heading: 'Personalization from the get-go',
    bulletPoints: [
      'Users receive personalized suggestions based on which communities they identify with',
      'Users set goals autonomously',
    ],
    vidSrc: '/sageVideos/Onboarding.mp4',
  },
  {
    pageName: 'HOME PAGE',
    heading: 'Tech-free activities',
    bulletPoints: [
      'Users curate, name, and choose a cover for personal collections',
      'Users have the ability to complete activities such as journaling outside of the app',
    ],
    vidSrc: '/sageVideos/Journaling.mp4',
    flipElements: true,
  },
  {
    pageName: 'EXPLORE PAGE',
    heading: 'Specially curated collections',
    bulletPoints: [
      'Users complete activities that are relevant to their identities and goals',
      'Users can schedule and add activities to their calendar for a later time',
    ],
    vidSrc: '/sageVideos/SpecialCollection.mp4',
  },
  {
    pageName: 'EXPLORE PAGE',
    heading: 'Discover new self-care methods',
    bulletPoints: [
      'Users can discover new activities by feeling, duration, and method',
      'Users can filter and sort search results',
    ],
    vidSrc: '/sageVideos/Explore.mp4',
    flipElements: true,
  },
  {
    pageName: 'PROFILE PAGE',
    heading: 'Flexible goal setting',
    bulletPoints: [
      'Users have the flexibility to remove, reschedule, and add planned activities for another day',
    ],
    vidSrc: '/sageVideos/Calendar.mp4',
  },
  {
    pageName: 'PROFILE PAGE',
    heading: 'A gamified approach that encourages consistency',
    bulletPoints: [
      'Users are rewarded for practicing self-care on a monthly basis',
      'Users receive extrinsic motivation to reach their personal goals',
    ],
    vidSrc: '/sageVideos/Garden.mp4',
    flipElements: true,
  },
  {
    pageName: 'PROFILE PAGE',
    heading: 'Inclusive way to meditate',
    bulletPoints: [
      'Users have a more inclusive way to meditate with the ability to view captions',
    ],
    vidSrc: '/sageVideos/Meditation.mp4',
  },
];

export default function Demo() {
  return (
    <section className="flex flex-col justify-center pl-[15%] pr-[15%]">
      {videoCardContent.map((card, index) => (
        <VideoTextCard key={index} {...card} />
      ))}
    </section>
  );
}

type VideoTextCardProps = {
  pageName: string;
  heading: string;
  bulletPoints: string[];
  vidSrc: string;
  flipElements?: boolean;
};

function VideoTextCard(props: VideoTextCardProps) {
  const { pageName, heading, bulletPoints, vidSrc, flipElements } = props;

  const rowReverse = flipElements ? 'flex-row-reverse' : '';

  return (
    <div
      className={`flex h-[100vh] gap-7 justify-around items-center ${rowReverse}`}
    >
      <div className="flex flex-col justify-center w-[50%] gap-6">
        <Heading h1={pageName} p={heading} />
        <ul className="pl-5 list-disc">
          {bulletPoints.map((bullet, index) => (
            <li className="text-lg" key={index}>
              {bullet}
            </li>
          ))}
        </ul>
      </div>

      <video className="w-2/5 h-4/5" controls>
        <source src={vidSrc} type="video/mp4" />
        <track
          src="/path/to/captions.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
