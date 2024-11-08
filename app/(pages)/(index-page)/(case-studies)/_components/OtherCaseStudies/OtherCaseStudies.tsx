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
  const { org, purpose, desc, src, alt, linkurl, flip } = props;

  return (
    <Link
      href={linkurl}
      className="flex flex-col w-[488px] h-[442px] py-12 p-10 bg-[#F1F1F1] rounded-3xl border-[#CCC] border overflow-clip relative group hover:shadow-perimeter duration-500"
    >
      <div className="flex gap-2 w-full">
        <h4 className="font-outfit text-black">{org}</h4>
        <h4 className="font-outfit">{purpose}</h4>
      </div>
      <h3 className="pt-2 pb-20">{desc}</h3>
      <Image
        src={src}
        alt={alt}
        height={1000}
        width={1000}
        className={`w-full h-auto absolute bottom-0 group-hover:scale-105 duration-500 origin-bottom  ${flip ? 'right-[-100px]' : 'left-[-100px]'}`}
      ></Image>
    </Link>
  );
}
