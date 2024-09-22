import Landing from './_components/Sections/Landing/Landing';
import Intro from './_components/Sections/Intro/Intro';
import SolutionPreview from './_components/Sections/SolutionPreview/SolutionPreview';
import Process from './_components/Sections/Process/Process';
import Question from './_components/Sections/Question/Question';
import CardSort from './_components/Sections/CardSort/CardSort';
import Ideation from './_components/Sections/Ideation/Ideation';
import FinalSolution from './_components/Sections/FinalSolution/FinalSolution';
import Results from './_components/Sections/Results/Results';
import Venue from './_components/Sections/Venue/Venue';
import Ending from './_components/Sections/Ending/Ending';
import DividerLine from './_components/DividerLine/DividerLine';
import OtherCaseStudies from './_components/Sections/OtherCaseStudies/OtherCaseStudies';

export default function HackDavis() {
  return (
    <main className="bg-white text-black flex flex-col gap-20">
      <Landing />
      <Intro />
      <DividerLine />
      <SolutionPreview />
      <DividerLine />
      <Process />
      <Question />
      <CardSort />
      <DividerLine />
      <Ideation />
      <FinalSolution />
      <Results />
      <Venue />
      <Ending />
      <DividerLine />
      <OtherCaseStudies />
    </main>
  );
}
