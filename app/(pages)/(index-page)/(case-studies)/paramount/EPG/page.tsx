import OtherCaseStudies, {
  OtherCaseStudiesProps,
} from '../../_components/OtherCaseStudies/OtherCaseStudies';
import Summary from '../errorMessaging/_components/Sections/Summary/Summary';
import Landing from './_components/Sections/Landing/Landing';
import WideImage from './_components/Sections/WideImage/WideImage';
import DividerLine from '../../_components/DividerLine/DividerLine';
import MarketBehavior from './_components/Sections/MarketBehavior/MarketBehavior';
import UserResearch from './_components/Sections/UserResearch/UserResearch';
import MentalModels from './_components/Sections/MentalModels/MentalModels';
import Navigation from './_components/Sections/Navigation/Navigation';
import Personalization from './_components/Sections/Personalization/Personalization';
import Visibility from './_components/Sections/Visibility/Visibility';
import FinalDesigns from './_components/Sections/FinalDesigns/FinalDesigns';
import Reflection from './_components/Sections/Reflection/Reflection';
import TableOfContents from '../../_components/TableOfContents/TableOfContents';

export default async function ParamountP1() {
  const caseStudyInformation: OtherCaseStudiesProps = {
    caseStudies: [
      {
        org: 'Paramount+',
        purpose: 'INTERNSHIP',
        desc: 'Reimagining the live television experience',
        src: '/caseStudies/paramount.png',
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
    { sectionName: 'Market Behavior', level: 0 },
    { sectionName: 'User Research', level: 0 },
    { sectionName: 'Mental Models', level: 0 },
    { sectionName: 'Navigation', level: 0 },
    { sectionName: 'Personalization', level: 0 },
    { sectionName: 'Visibility', level: 0 },
    { sectionName: 'Final Designs', level: 0 },
    { sectionName: 'Reflection', level: 0 },
  ];

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getCaseStudyData?id=6&table=p_project_2&apiKey=${process.env.API_KEY}`,
    {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch images: ${response.statusText}`);
  }
  const result = await response.json();

  const [bodyData, h2Data, h3Data, h4Data] = [
    result.body,
    result.h2,
    result.h3,
    result.h4,
  ];

  const responseImages = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getCaseStudyImages?folder=${'EPG/'}&apiKey=${process.env.API_KEY}`,
    {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  if (!responseImages.ok) {
    throw new Error(`Failed to fetch images noooo: ${response.statusText}`);
  }
  const images = await responseImages.json();

  return (
    <main className="flex flex-col gap-20 px-case-study overflow-clip">
      <TableOfContents sections={pageContents} />
      <Landing h2={h2Data.slice(0, 1)} images={images.slice(1, 3)} />
      <Summary body={bodyData.slice(0, 7)} h3={h3Data.slice(0, 7)} />
      <WideImage images={images.slice(3, 6)} />
      <DividerLine />
      <MarketBehavior
        body={bodyData.slice(7, 8)}
        h3={h3Data.slice(7, 8)}
        h4={h4Data.slice(0, 2)}
        images={images.slice(6, 8)}
      />
      <UserResearch
        body={bodyData.slice(8, 9)}
        h3={h3Data.slice(8, 10)}
        images={images.slice(8, 13)}
      />
      <DividerLine />
      <MentalModels
        body={bodyData.slice(9, 13)}
        h3={h3Data.slice(10, 14)}
        h4={h4Data.slice(2, 8)}
        images={images.slice(13, 19)}
      />
      <Navigation
        body={bodyData.slice(13, 14)}
        h3={h3Data.slice(14, 15)}
        h4={h4Data.slice(8, 11)}
        images={images.slice(19, 22)}
      />
      <Personalization
        body={bodyData.slice(14, 15)}
        h3={h3Data.slice(15, 16)}
        h4={h4Data.slice(11, 14)}
        images={images.slice(22, 25)}
      />
      <Visibility
        body={bodyData.slice(15, 17)}
        h3={h3Data.slice(16, 17)}
        h4={h4Data.slice(14, 18)}
        images={images.slice(25, 28)}
      />
      <FinalDesigns
        h2={h2Data.slice(1, 2)}
        body={bodyData.slice(17, 21)}
        h3={h3Data.slice(17, 21)}
        h4={h4Data.slice(18, 22)}
        images={images.slice(27, 28)}
      />
      <DividerLine />
      <Reflection
        body={bodyData.slice(21, 24)}
        h3={h3Data.slice(21, 24)}
        h4={h4Data.slice(22, 23)}
      />

      <DividerLine />
      <OtherCaseStudies {...caseStudyInformation} />
    </main>
  );
}
