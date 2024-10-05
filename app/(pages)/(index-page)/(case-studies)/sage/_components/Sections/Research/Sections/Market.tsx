import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';
import Image from 'next/image';
// TODO: remove images of just headspace and calm squares
const competitiveAnalysisData: CompetitorAnalysisProps[] = [
  {
    logoUrl: '/sageImages/research/calmLogo.png',
    mission: `"Support every step of
          their mental health journey."`,
    advantage: '#1 app for sleep, meditation, and relaxation',
    disadvantage:
      'Goals are pre-set to daily practice, and user can only maintain their streak by completing at least one session per day',
  },
  {
    logoUrl: '/sageImages/research/headspaceLogo.png',
    mission: `"Provide every person access to lifelong mental health support"`,
    advantage:
      'Provides personalized recommendations and information about skills practiced',
    disadvantage: 'Limited sorting and filtering abilities',
  },
];
export default function Market() {
  return (
    <div className="flex flex-col gap-20">
      <RevealWrapper>
        <div className="flex flex-col gap-2">
          <h3>What does the current market look like?</h3>
          <p>
            Meditation apps are not a new phenomenon. By 2024, the market is
            projected to reach $5.11B. Calm and Headspace are two existing big
            players in the industry. However, they fail to provide a flexible
            goal setting system and personalized recommendations.
          </p>
        </div>
        <div className="flex justify-between gap-8 pt-12">
          {competitiveAnalysisData.map((competitor, index) => (
            <CompetitorAnalysis
              logoUrl={competitor.logoUrl}
              mission={competitor.mission}
              advantage={competitor.advantage}
              disadvantage={competitor.disadvantage}
              key={index}
            />
          ))}
        </div>
      </RevealWrapper>
    </div>
  );
}

type CompetitorAnalysisProps = {
  logoUrl: string;
  mission: string;
  advantage: string;
  disadvantage: string;
};
function CompetitorAnalysis({
  logoUrl,
  mission,
  advantage,
  disadvantage,
}: CompetitorAnalysisProps) {
  return (
    <div className="flex flex-col w-1/2 p-8 bg-[#F2F2F2] gap-8">
      <Image
        src={logoUrl}
        alt="competitor app logo"
        width={1000}
        height={1000}
        className="h-[15%] w-auto self-center"
      />
      <ul className="flex flex-col gap-6">
        <li>
          {' '}
          <span className="font-bold">Mission:</span> {mission}
        </li>
        <li>
          {' '}
          <span className="font-bold">Advantage:</span> {advantage}
        </li>
        <li>
          {' '}
          <span className="font-bold">Disadvantage:</span> {disadvantage}
        </li>
      </ul>
    </div>
  );
}
