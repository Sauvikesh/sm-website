'use client';
import {
  useGetCaseStudyContent,
  useGetCaseStudyContentProps,
} from '@/app/(pages)/_hooks/useGetCaseStudyContent';
import Summary from './_components/Sections/Summary/Summary';
import CouchImage from './_components/Sections/CouchImage/CouchImage';
import Landing from './_components/Sections/Landing/Landing';
import DividerLine from '../_components/DividerLine/DividerLine';
import BreakDown from './_components/Sections/Breakdown/Breakdown';
import Iterations from './_components/Sections/Iterations/Iterations';
import FinalDesigns from './_components/Sections/FinalDesigns/FinalDesigns';
import Results from './_components/Sections/Results/Results';

export type contentProps = {
  body?: string[];
  h2?: string[];
  h3?: string[];
  h4?: string[];
  images?: any[];
};

export default function ParamountP2() {
  const data: useGetCaseStudyContentProps = {
    contentID: 5,
    tableName: 'p_project_2',
    folder: 'errorMessaging/',
  };

  const [bodyData, h2Data, h3Data, h4Data, images, error] =
    useGetCaseStudyContent(data);

  return (
    <div>
      {error ? (
        <p>Error: {error}</p>
      ) : bodyData && h2Data && h3Data && h4Data && images ? (
        <main className="flex flex-col gap-20 px-case-study overflow-clip">
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
            h2={h2Data.slice(1, 2)}
            h3={h3Data.slice(16, 17)}
            h4={h4Data.slice(17, 18)}
          />
          <DividerLine />
        </main>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
