import { CaseStudyProps } from '@/app/(pages)/(index-page)/_components/CaseStudy';
import CaseStudyThumbnail from '@/app/(pages)/(index-page)/_components/CaseStudyThumbnail';

export type OtherCaseStudiesProps = {
  caseStudies: CaseStudyProps[];
};
export default function OtherCaseStudies({
  caseStudies,
}: OtherCaseStudiesProps) {
  return (
    <div className="pl-[15%] pr-[15%] flex flex-col items-center gap-10 pb-[225px]">
      <h2>Discover More</h2>
      <div className="flex gap-8">
        {caseStudies.map((study, index) => (
          <CaseStudyThumbnail {...study} key={index} />
        ))}
      </div>
    </div>
  );
}
