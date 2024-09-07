import Heading from '../Headings/Heading';

export default function Description() {
  const testerProfiles = [
    '7 full-time undergraduate students',
    'Aged 18-22 years old',
    '3 women, 4 men',
  ];

  const tasks = [
    'Complete onboarding',
    'Check on personal garden and plants',
    'Navigate to the explore page and save an activity for later',
    'Navigate to the profile page and complete one of the strategies scheduled for today',
  ];

  return (
    <div className="flex flex-col justify-center pt-12 pb-12 g-3 pl-[18%] pr-[18%]">
      <Heading
        h1="PROTOTYPE & TEST"
        p="Conducting usability testing to inform iterations"
      />
      <div className="flex justify-between gap-12 pt-10 pl-4">
        <div className="flex flex-col w-[40%]">
          <h2 className="text-2xl leading-[30px] pb-4">Tester Profile</h2>
          <ul className="pl-5 list-disc">
            {testerProfiles.map((profile, index) => (
              <li className="mb-4 text-lg leading-8" key={index}>
                {profile}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col w-[50%]">
          <h2 className="text-2xl leading-[30px] pb-4">Task List</h2>
          <ol className="pl-5 list-decimal">
            {tasks.map((task, index) => (
              <li className="mb-4 text-lg leading-8" key={index}>
                {task}
              </li>
            ))}
          </ol>
        </div>
      </div>

      <h2 className="text-2xl leading-[30px] pb-1 pl-5">Metrics</h2>
      <h3 className="pl-5 pb-4 text-lg leading-8">Qualitative feedback</h3>
    </div>
  );
}
