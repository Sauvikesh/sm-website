import Summary from './_components/Sections/Summary/Summary';
import CouchImage from './_components/Sections/CouchImage/CouchImage';
import Landing from './_components/Sections/Landing/Landing';
import DividerLine from '../../_components/DividerLine/DividerLine';
import BreakDown from './_components/Sections/Breakdown/Breakdown';
import Iterations from './_components/Sections/Iterations/Iterations';
import FinalDesigns from './_components/Sections/FinalDesigns/FinalDesigns';
import Results from './_components/Sections/Results/Results';
import Reflection from './_components/Sections/Reflection/Reflection';
import OtherCaseStudies, {
  OtherCaseStudiesProps,
} from '../../_components/OtherCaseStudies/OtherCaseStudies';
import TableOfContents from '../../_components/TableOfContents/TableOfContents';
import getImageData from '@/app/_lib/getImageData';
import getContentData from '@/app/_lib/getContentData';

export type contentProps = {
  body?: string[];
  h2?: string[];
  h3?: string[];
  h4?: string[];
  images?: any[];
};

export default async function ParamountP2() {
  const caseStudyInformation: OtherCaseStudiesProps = {
    caseStudies: [
      {
        org: 'HackDavis 2024',
        purpose: 'FREELANCE PROJECT',
        desc: 'Empowering students to create for social good',
        src: '/caseStudies/hackdavis.svg',
        alt: 'Hackdavis Image',
        linkurl: '/hackdavis',
      },
      {
        org: 'Sage',
        purpose: 'PASSION PROJECT',
        desc: "Equipping individuals to navigate life's stressors",
        src: '/caseStudies/sage.svg',
        alt: 'Sage App',
        linkurl: '/sage',
        flip: true,
      },
    ],
  };

  const pageContents = [
    { sectionName: 'Context', level: 0 },
    { sectionName: 'Research', level: 0 },
    { sectionName: 'Iterations', level: 0 },
    { sectionName: 'Final Designs', level: 0 },
    { sectionName: 'Results', level: 0 },
    { sectionName: 'Reflection', level: 0 },
  ];

  const [bodyData, h2Data, h3Data, h4Data] = await getContentData('9');
  const images = await getImageData('errorMessaging/');

  return (
    <main className="flex flex-col gap-20 px-case-study overflow-clip">
      <TableOfContents sections={pageContents} />

      <Landing h2={h2Data.slice(0, 1)} images={images.slice(2, 6)} />
      <Summary body={bodyData.slice(0, 7)} h3={h3Data.slice(0, 7)} />
      <CouchImage images={images.slice(1, 2)} />
      <DividerLine />
      <BreakDown
        body={bodyData.slice(7, 11)}
        h3={h3Data.slice(7, 11)}
        h4={h4Data.slice(0, 7)}
        images={images.slice(6, 13)}
      />
      <Iterations
        body={bodyData.slice(11, 14)}
        h3={h3Data.slice(11, 14)}
        h4={h4Data.slice(7, 14)}
        images={images.slice(13, 17)}
      />
      <FinalDesigns
        body={bodyData.slice(14, 20)}
        h2={h2Data.slice(1, 2)}
        h3={h3Data.slice(14, 16)}
        h4={h4Data.slice(14, 17)}
        images={images.slice(17, 23)}
      />
      <DividerLine />
      <Results
        body={bodyData.slice(20, 23)}
        h3={h3Data.slice(16, 17)}
        h4={h4Data.slice(17, 18)}
      />
      <DividerLine />
      <Reflection
        body={bodyData.slice(23, 26)}
        h3={h3Data.slice(17, 20)}
        h4={h4Data.slice(18, 19)}
      />
      <DividerLine />
      <OtherCaseStudies {...caseStudyInformation} />
    </main>
  );
}
