import Image from 'next/image';
import Link from 'next/link';

export type CaseStudyProps = {
  org: string;
  purpose: string;
  desc: string;
  src: string;
  alt: string;
  linkurl: string;
  flip?: boolean;
};

export default function CaseStudy(props: CaseStudyProps) {
  const { org, purpose, desc, src, alt, linkurl } = props;

  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-2 pt-12 pb-2 z-10">
        <h4 className="font-spaceGrotesk text-black">{org}</h4>
        <h4 className="font-spaceGrotesk">{purpose}</h4>
      </div>
      <h3 className="pb-20 w-[350px] text-center">{desc}</h3>
      <Link
        href={linkurl}
        className="flex flex-col relative px-[10%] bg-[#EBEBEB] w-[80vw] rounded-3xl group"
      >
        <Image
          src={src}
          alt={alt}
          height={1000}
          width={1000}
          className="h-[600px] hover:cursor-pointer z-10 group-hover:scale-105 duration-500 origin-bottom"
        ></Image>
      </Link>
    </div>
  );
}
