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
import DividerLine from '../_components/DividerLine/DividerLine';
import TableOfContents from '../_components/TableOfContents/TableOfContents';
import NextCaseStudies from './_components/Sections/NextCaseStudies/NextCaseStudies';

export default async function HackDavis() {
  const pageContents = [
    { sectionName: 'Overview', level: 0 },
    { sectionName: 'Product Preview', level: 0 },
    { sectionName: 'Research', level: 0 },
    { sectionName: 'Iterations', level: 0 },
    { sectionName: 'Final Solution', level: 0 },
    { sectionName: 'About Page', level: 1 },
    { sectionName: 'Registration Page', level: 1 },
    { sectionName: 'Day-of-Event Page', level: 1 },
    { sectionName: 'Reflection', level: 0 },
  ];

  return (
    <main className="bg-white text-black flex flex-col gap-20 px-case-study overflow-clip">
      <TableOfContents sections={pageContents} />
      <Landing />
      <Intro />
      <SolutionPreview />
      <Results />
      <Venue />
      <Process />
      <Question />
      <CardSort />
      <DividerLine />
      <Ideation />
      <FinalSolution />
      <Ending />
      <DividerLine />
      <NextCaseStudies />
    </main>
  );
}
