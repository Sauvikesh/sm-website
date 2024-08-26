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
    <div className="flex flex-col justify-center pt-0 pb-12 bg-white font-dm-sans g-3 p-53">
      <h1 className="text-base font-bold leading-[44px]">PROTOTYPE & TEST</h1>
      <p className="text-4xl leading-[54px] font-bold">
        Conducting usability testing to inform iterations
      </p>
      <div className="flex justify-between gap-12 pt-10 pl-4">
        <div className="flex flex-col w-[40%]">
          <h2 className="text-2xl leading-[30px] mb-4">Tester Profile</h2>
          <ul className="pl-5 list-disc">
            {testerProfiles.map((profile, index) => (
              <li className="mb-4 text-lg leading-8" key={index}>
                {profile}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col w-[50%]">
          <h2 className="text-2xl leading-[30px] mb-4">Task List</h2>
          <ol className="pl-5 list-decimal">
            {tasks.map((task, index) => (
              <li className="mb-4 text-lg leading-8" key={index}>
                {task}
              </li>
            ))}
          </ol>
        </div>
      </div>
      <h2 className="text-2xl leading-[30px] mb-1 pl-5">Metrics</h2>
      <h3 className="pl-5 mb-4 text-lg leading-8">Qualitative feedback</h3>
    </div>
  );
}
