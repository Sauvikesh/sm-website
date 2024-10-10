import Demo from './_components/Sections/Demo/Demo';
import Landing from './_components/Sections/Landing/Landing';
import Summary from './_components/Sections/Summary/Summary';
import Problem from './_components/Sections/Problem/Problem';
import Conclusion from './_components/Sections/Conclusion/Conclusion';
import Process from './_components/Sections/Process/Process';
import Research from './_components/Sections/Research/Research';
import Ideation from './_components/Sections/Ideation/Ideation';
import Prototype from './_components/Sections/Prototype/Prototype';
import FinalDesigns from './_components/Sections/FinalDesigns/FinalDesigns';
import Outcome from './_components/Sections/Outcome/Outcome';
import Team from './_components/Sections/Team/Team';
import OtherCaseStudies, {
  OtherCaseStudiesProps,
} from '../_components/OtherCaseStudies/OtherCaseStudies';
import DividerLine from '../_components/DividerLine/DividerLine';
import TableOfContents from '../_components/TableOfContents/TableOfContents';

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
        org: 'HackDavis 2024',
        purpose: 'FREELANCE PROJECT',
        desc: 'Empowering students to create for social good',
        src: '/caseStudies/hackdavis.png',
        alt: 'HackDavis Website',
        linkurl: '/hackdavis',
      },
    ],
  };

  const pageContents = [
    { sectionName: 'Overview', level: 0 },
    { sectionName: 'Product Preview', level: 0 },
    { sectionName: 'Research', level: 0 },
    { sectionName: 'Ideation', level: 0 },
    { sectionName: 'Usability Testing', level: 0 },
    { sectionName: 'Final Designs', level: 0 },
    { sectionName: 'Reflection', level: 0 },
  ];

  return (
    <main className="bg-white text-black flex flex-col px-[20%] overflow-hidden gap-20">
      <TableOfContents sections={pageContents} />
      <Landing />
      <Summary />
      <DividerLine />
      <Demo />
      <DividerLine />
      <Process />
      <Research />
      <Problem />
      <Ideation />
      <Prototype />
      <DividerLine />

      <FinalDesigns />
      <Outcome />
      <Conclusion />
      <Team />
      <DividerLine />
      <OtherCaseStudies {...caseStudyInformation} />
    </main>
  );
}
