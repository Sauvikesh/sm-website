import Image from 'next/image';
import Heading from '../Headings/Heading';

export default function Header() {
  const bulletPoints = [
    'Full-time, undergraduate students aged 18-23 years old',
    'Managing busy schedules and modest budgets',
    'Want to better manage day-to-day stressors',
  ];
  return (
    <div className="flex pt-0 pb-0 font-dm-sans p-53 h-[60vh] items-center">
      <div className="flex flex-col justify-center font-dm-sans g-3">
        <Heading
          h1="RESEARCH"
          p="Understanding our user: the overwhelmed student"
        />
        <ul className="pl-5 mt-4 list-disc ">
          {bulletPoints.map((bullet, index) => (
            <li className="mb-2 text-lg leading-8 font-dm-sans" key={index}>
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
        className="w-[40%] h-auto"
      />
    </div>
  );
}