import Link from 'next/link';
import Image from 'next/image';

export default function HackDavisCaseStudyThumbnail() {
  const org = 'HackDavis 2024';
  const purpose = 'Client project';
  const desc = 'Empowering students to create for social good';
  const src = '/caseStudies/hackdavis2.png';
  const alt = 'Hackdavis Image';
  const linkurl = '/hackdavis';

  return (
    <Link
      href={linkurl}
      className="flex flex-col w-[488px] h-[529px] mb-20 px-10 pt-10 bg-[#F1F1F1] rounded-3xl border-[#CCC] border overflow-clip relative group hover:shadow-perimeter duration-500"
    >
      <div className="flex gap-2 w-full">
        <h4 className="font-spaceGrotesk text-black">{org}</h4>
        <h4 className="font-spaceGrotesk">{purpose}</h4>
      </div>
      <h3 className="pt-2 pb-20">{desc}</h3>
      <Image
        src={src}
        alt={alt}
        height={1000}
        width={1000}
        className={`w-full h-auto group-hover:scale-105 duration-500 origin-bottom mt-auto`}
      ></Image>
    </Link>
  );
}
