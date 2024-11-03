import Link from 'next/link';
import Image from 'next/image';
import { CaseStudyProps } from '../../../_components/CaseStudy/CaseStudy';
import { RevealWrapper } from '../../../_components/Reveal/RevealWrapper';

export type OtherCaseStudiesProps = {
  caseStudies: CaseStudyProps[];
};

export default function OtherCaseStudies({
  caseStudies,
}: OtherCaseStudiesProps) {
  return (
    <section className="flex flex-col items-center gap-10">
      <RevealWrapper>
        <h2>Discover More</h2>
        <div className="flex gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudyThumbnail {...study} key={index} />
          ))}
        </div>
      </RevealWrapper>
    </section>
  );
}

function CaseStudyThumbnail(props: CaseStudyProps) {
  const { org, purpose, desc, src, alt, linkurl } = props;

  return (
    <Link
      href={linkurl}
      className="flex flex-col items-start pb-12 pt-12 p-10 bg-[#F1F1F1] w-full rounded-3xl border-[#CCC] border"
    >
      <div className="flex gap-2">
        <h4 className="font-outfit">{org}</h4>
        <h4 className="font-outfit">{purpose}</h4>
      </div>
      <h3 className="pt-2 pb-20">{desc}</h3>
      <Image
        src={src}
        alt={alt}
        height={1000}
        width={1000}
        className="w-1/2 h-auto transition duration-300 ease-in-out hover:cursor-pointer"
      ></Image>
    </Link>
  );
}
