import VideoTextCard, { VideoTextCardProps } from './VideoTextCard';

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
    vidSrc: '/sageVideos/Onboarding.mp4',
    flipElements: true,
  },
  {
    pageName: 'EXPLORE PAGE',
    heading: 'Specially curated collections',
    bulletPoints: [
      'Users complete activities that are relevant to their identities and goals',
      'Users can schedule and add activities to their calendar for a later time',
    ],
    vidSrc: '/sageVideos/Onboarding.mp4',
  },
  {
    pageName: 'EXPLORE PAGE',
    heading: 'Discover new self-care methods',
    bulletPoints: [
      'Users can discover new activities by feeling, duration, and method',
      'Users can filter and sort search results',
    ],
    vidSrc: '/sageVideos/Onboarding.mp4',
    flipElements: true,
  },
  {
    pageName: 'EXPLORE PAGE',
    heading: 'Specially curated collections ',
    bulletPoints: [
      'Users complete activities that are relevant to their identities and goals',
      'Users can schedule and add activities to their calendar for a later time',
    ],
    vidSrc: '/sageVideos/Onboarding.mp4',
  },
  {
    pageName: 'PROFILE PAGE',
    heading: 'Flexible goal setting',
    bulletPoints: [
      'Users have the flexibility to remove, reschedule, and add planned activities for another day',
    ],
    vidSrc: '/sageVideos/Onboarding.mp4',
    flipElements: true,
  },
  {
    pageName: 'PROFILE PAGE',
    heading: 'A gamified approach that encourages consistency',
    bulletPoints: [
      'Users are rewarded for practicing self-care on a monthly basis',
      'Users receive extrinsic motivation to reach their personal goals',
    ],
    vidSrc: '/sageVideos/Onboarding.mp4',
  },
  {
    pageName: 'PROFILE PAGE',
    heading: 'Inclusive way to meditate',
    bulletPoints: [
      'Users have a more inclusive way to meditate with the ability to view captions',
    ],
    vidSrc: '/sageVideos/Onboarding.mp4',
    flipElements: true,
  },
];

export default function Demo() {
  return (
    <section className="flex flex-col justify-center bg-white">
      {videoCardContent.map((card, index) => (
        <VideoTextCard key={index} {...card} />
      ))}
    </section>
  );
}
