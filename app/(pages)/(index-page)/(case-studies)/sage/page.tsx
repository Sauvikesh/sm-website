import Demo from './_components/Demo/Demo';
import Landing from './_components/Landing/Landing';
import Summary from './_components/Summary/Summary';
import Problem from './_components/Problem/Problem';
import Solution from './_components/Solution/Solution';
import Conclusion from './_components/Conclusion/Conclusion';
import Process from './_components/Process/Process';
import Research from './_components/Research/Research';
import Ideation from './_components/Ideation/Ideation';
import Prototype from './_components/Prototype/Prototype';
import FinalDesigns from './_components/FinalDesigns/FinalDesigns';
import Outcome from './_components/Outcome/Outcome';
import Team from './_components/Team/Team';
import OtherCaseStudies, {
  OtherCaseStudiesProps,
} from '../_components/OtherCaseStudies/OtherCaseStudies';
import DividerLine from '../_components/DividerLine/DividerLine';

export default function Sage() {
  const caseStudyInformation: OtherCaseStudiesProps = {
    caseStudies: [
      {
        org: 'Paramount+',
        purpose: 'INTERNSHIP',
        desc: 'Reimagining the live television experience',
        src: '/caseStudies/paramount.png',
        alt: 'Paramount Logo',
        linkurl: '/paramount',
      },
      {
        org: 'Sage',
        purpose: 'PASSION PROJECT',
        desc: "Equipping individuals to navigate life's stressors",
        src: '/caseStudies/sage.png',
        alt: 'Sage App',
        linkurl: '/sage',
      },
    ],
  };

  return (
    <main className="bg-white text-black flex flex-col">
      <Landing />
      <Summary />
      <Problem />
      <Solution />
      <Demo />
      <Process />
      <Research />
      <Ideation />
      <Prototype />
      <FinalDesigns />
      <Outcome />
      <Conclusion />
      <Team />
      <DividerLine />
      <span className="h-[80px]"></span>
      <OtherCaseStudies {...caseStudyInformation} />
    </main>
  );
}
