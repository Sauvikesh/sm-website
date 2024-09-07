import Image from 'next/image';
import Link from 'next/link';

export type CaseStudyProps = {
  title: string;
  desc: string;
  src: string;
  alt: string;
  linkurl: string;
};

export default function CaseStudy(props: CaseStudyProps) {
  const { title, desc, src, alt, linkurl } = props;

  return (
    <Link href={linkurl} className="text-center pb-12">
      <h3 className="text-[56px] font-f-w">{title}</h3>
      <h4 className="text-[20px] mb-6">{desc}</h4>
      <Image
        src={src}
        alt={alt}
        height={1000}
        width={1000}
        className="w-full h-auto transition duration-300 ease-in-out hover:scale-105 hover:cursor-pointer"
      ></Image>
    </Link>
  );
}
