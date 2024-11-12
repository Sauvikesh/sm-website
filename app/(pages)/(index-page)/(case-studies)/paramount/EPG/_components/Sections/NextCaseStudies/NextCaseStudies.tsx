import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';
import EMCaseStudyThumbnail from '@/app/(pages)/(index-page)/(case-studies)/_components/OtherCaseStudies/EMOtherCaseStudy';
import HackDavisCaseStudyThumbnail from '@/app/(pages)/(index-page)/(case-studies)/_components/OtherCaseStudies/HDOtherCaseStudy';

export default function NextCaseStudies() {
  return (
    <section className="flex flex-col gap-10">
      <RevealWrapper>
        <h2>Discover More</h2>
        <div className="flex justify-around gap-8">
          <EMCaseStudyThumbnail />
          <HackDavisCaseStudyThumbnail />
        </div>
      </RevealWrapper>
    </section>
  );
}
