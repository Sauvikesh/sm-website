'use client';
import {
  useGetCaseStudyContentProps,
  useGetCaseStudyContent,
} from '@/app/(pages)/_hooks/useGetCaseStudyContent';
import OtherCaseStudies, {
  OtherCaseStudiesProps,
} from '../../_components/OtherCaseStudies/OtherCaseStudies';
import Summary from '../errorMessaging/_components/Sections/Summary/Summary';
import Landing from './_components/Sections/Landing/Landing';
import WideImage from './_components/Sections/WideImage/WideImage';

export default function ParamountP1() {
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

  const data: useGetCaseStudyContentProps = {
    contentID: 6,
    tableName: 'p_project_2',
    folder: 'EPG/',
  };

  const [bodyData, h2Data, h3Data, h4Data, images, error] =
    useGetCaseStudyContent(data);
  //   console.log(bodyData);
  //   console.log(images);
  return (
    <div>
      {error ? (
        <p>Error: {error}</p>
      ) : bodyData && h2Data && h3Data && h4Data && images ? (
        <main className="flex flex-col gap-20 px-case-study overflow-clip">
          <Landing h2={h2Data.slice(0, 1)} images={images.slice(1, 3)} />
          <Summary body={bodyData.slice(0, 7)} h3={h3Data.slice(0, 7)} />
          <WideImage images={images.slice(3, 6)} />

          <OtherCaseStudies {...caseStudyInformation} />
        </main>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
