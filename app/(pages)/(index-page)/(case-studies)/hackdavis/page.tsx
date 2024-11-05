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
import OtherCaseStudies, {
  OtherCaseStudiesProps,
} from '../_components/OtherCaseStudies/OtherCaseStudies';
import TableOfContents from '../_components/TableOfContents/TableOfContents';

export default async function HackDavis() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getCaseStudyImages?folder=${'landingPage/'}&apiKey=${process.env.API_KEY}`,
    {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch images in HD: ${response.statusText}`);
  }
  const images = await response.json();

  const caseStudyInformation: OtherCaseStudiesProps = {
    caseStudies: [
      {
        org: 'Paramount+',
        purpose: 'INTERNSHIP',
        desc: 'Reimagining the live television experience',
        src: images?.at(2).url,
        alt: 'Paramount Logo',
        linkurl: '/paramount',
        gradient: '',
      },
      {
        org: 'Sage',
        purpose: 'PASSION PROJECT',
        desc: "Equipping individuals to navigate life's stressors",
        src: '/caseStudies/sage.svg',
        alt: 'Sage App',
        linkurl: '/sage',
        gradient: '',
      },
    ],
  };

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
      <OtherCaseStudies {...caseStudyInformation} />
    </main>
  );
}
