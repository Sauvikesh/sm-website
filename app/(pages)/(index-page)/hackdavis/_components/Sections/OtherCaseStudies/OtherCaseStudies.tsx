import { CaseStudyProps } from '@/app/(pages)/(index-page)/_components/CaseStudy';
import CaseStudyThumbnail from '@/app/(pages)/(index-page)/_components/CaseStudyThumbnail';

export default function OtherCaseStudies() {
  const caseStudyInformation: CaseStudyProps[] = [
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
  ];
  return (
    <div className="pl-[15%] pr-[15%] flex flex-col items-center gap-10 pb-[225px]">
      <h2>Discover More</h2>
      <div className="flex gap-8">
        {caseStudyInformation.map((study, index) => (
          <CaseStudyThumbnail {...study} key={index} />
        ))}
      </div>
    </div>
  );
}
