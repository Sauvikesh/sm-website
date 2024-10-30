'use client';
import {
  useGetCaseStudyContent,
  useGetCaseStudyContentProps,
} from '@/app/(pages)/_hooks/useGetCaseStudyContent';
import Summary from './_components/Sections/Summary/Summary';
import Image from 'next/image';

export type contentProps = {
  body?: string[];
  h2?: string[];
  h3?: string[];
  h4?: string[];
};

export default function ParamountP2() {
  const data: useGetCaseStudyContentProps = {
    contentID: 4,
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
        <main className="bg-white text-black flex flex-col gap-20 px-case-study overflow-clip">
          <Summary body={bodyData.slice(0, 7)} h3={h3Data.slice(0, 7)} />
          <Image src={images?.at(1).url} alt="" width={500} height={500} />
        </main>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
