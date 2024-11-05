import Image from 'next/image';
import Link from 'next/link';

export type CaseStudyProps = {
  org: string;
  purpose: string;
  desc: string;
  src: string;
  alt: string;
  linkurl: string;
  gradient: string;
};

export default function CaseStudy(props: CaseStudyProps) {
  const { org, purpose, desc, src, alt, linkurl, gradient } = props;

  return (
    <Link
      href={linkurl}
      className="flex flex-col relative px-[10%] items-center bg-[#F1F1F1] w-full rounded-3xl border-[#CCC] border group hover:scale-105 duration-500"
    >
      <div className="flex gap-2 pt-12 pb-2 z-10">
        <h4 className="font-outfit text-black">{org}</h4>
        <h4 className="font-outfit">{purpose}</h4>
      </div>
      <h3 className="pb-20">{desc}</h3>
      <Image
        src={src}
        alt={alt}
        height={1000}
        width={1000}
        className="w-full h-auto hover:cursor-pointer z-10"
      ></Image>
      <div
        className="w-[650px] h-[550px] absolute z-0 right-[0%] top-[0%] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          backgroundImage: gradient,
        }}
      ></div>
      <div
        className="w-[650px] h-[550px] absolute z-0 left-[0%] top-[0%] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          backgroundImage: gradient,
        }}
      ></div>
    </Link>
  );
}
