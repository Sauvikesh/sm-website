import Image from 'next/image';
import Heading from '../../../Heading/Heading';
import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';

export default function Header() {
  const bulletPoints = [
    'Full-time, undergraduate students aged 18-23 years old',
    'Managing busy schedules and modest budgets',
    'Want to better manage day-to-day stressors',
  ];

  return (
    <RevealWrapper>
      <div className="flex items-center justify-between">
        <div className="flex flex-col justify-center gap-3">
          <Heading
            h1="RESEARCH"
            p="Understanding our user: the overwhelmed student"
          />
          <ul className="pl-5 pt-4 list-disc ">
            {bulletPoints.map((bullet, index) => (
              <li className="pb-2 text-lg leading-8" key={index}>
                {bullet}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src="/sageImages/research/sleepy.png"
          alt="sleepy"
          width={1000}
          height={1000}
          className="w-[30%]"
        />
      </div>
    </RevealWrapper>
  );
}
