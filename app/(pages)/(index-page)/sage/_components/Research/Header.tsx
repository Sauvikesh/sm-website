import Image from 'next/image';

export default function Header() {
  const bulletPoints = [
    'Full-time, undergraduate students aged 18-23 years old',
    'Managing busy schedules and modest budgets',
    'Want to better manage day-to-day stressors',
  ];
  return (
    <div className="flex pt-0 pb-0 font-dm-sans p-53 h-[60vh] items-center">
      <div className="flex flex-col justify-center font-dm-sans g-3">
        <h1 className="text-base font-bold leading-[44px]">RESEARCH</h1>
        <p className="text-4xl leading-[54px] font-bold">
          Understanding our user: the overwhelmed student
        </p>
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
