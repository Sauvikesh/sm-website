import Landing from './_components/Landing/Landing';
import Intro from './_components/Intro/Intro';
import SolutionPreview from './_components/SolutionPreview/SolutionPreview';
import Process from './_components/Process/Process';
import Question from './_components/Question/Question';
import CardSort from './_components/CardSort/CardSort';
import Ideation from './_components/Ideation/Ideation';
import FinalSolution from './_components/FinalSolution/FinalSolution';
import Results from './_components/Results/Results';
import Venue from './_components/Venue/Venue';
import Ending from './_components/Ending/Ending';

export default function HackDavis() {
  return (
    <main className="bg-white text-black font-dm-sans tracking-[0.32px]">
      <Landing />
      <Intro />
      <SolutionPreview />
      <Process />
      <Question />
      <CardSort />
      <Ideation />
      <FinalSolution />
      <Results />
      <Venue />
      <Ending />
    </main>
  );
}
