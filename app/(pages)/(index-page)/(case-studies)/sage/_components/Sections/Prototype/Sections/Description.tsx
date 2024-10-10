import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';
import Heading from '../../../Heading/Heading';

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
    <section className="flex flex-col justify-center gap-10" id="Prototype">
      <RevealWrapper>
        <Heading
          h1="PROTOTYPE & TEST"
          p="Conducting usability testing to inform iterations"
        />
        <div className="flex justify-between gap-12">
          <div className="flex flex-col w-[50%] gap-4">
            <h3>Tester Profile</h3>
            <ul className="pl-4 list-disc">
              {testerProfiles.map((profile, index) => (
                <li className="mb-4 leading-8" key={index}>
                  {profile}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col w-[50%] gap-4">
            <h3>Task List</h3>
            <ol className="pl-5 list-decimal">
              {tasks.map((task, index) => (
                <li className="mb-4 leading-8" key={index}>
                  {task}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="flex flex-col gap-2 -mt-20">
          <h3>Metrics</h3>
          <p>Qualitative feedback</p>
        </div>
      </RevealWrapper>
    </section>
  );
}
