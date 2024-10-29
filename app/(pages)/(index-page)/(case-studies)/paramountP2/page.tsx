'use client';
import {
  useGetCaseStudyContent,
  useGetCaseStudyContentProps,
} from '@/app/(pages)/_hooks/useGetCaseStudyContent';

export default function Paramount() {
  const data: useGetCaseStudyContentProps = {
    contentID: 4,
    tableName: 'p_project_2',
  };
  const [bodyData, h2Data, h3Data, h4Data, error] =
    useGetCaseStudyContent(data);

  return (
    <div>
      {error ? (
        <p>Error: {error}</p>
      ) : bodyData && h2Data && h3Data && h4Data ? (
        <div>
          <p>Body: {bodyData[21]}</p>
          <br></br>

          <p>H2: {h2Data[0]}</p>
          <br></br>

          <p>H3: {h3Data[0]}</p>
          <br></br>

          <p>H4: {h4Data[0]}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
