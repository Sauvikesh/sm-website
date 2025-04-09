import Link from 'next/link';
import Image from 'next/image';

export default function SageCaseStudyThumbnail() {
  const org = 'Sage';
  const purpose = 'Passion Project';
  const desc = "Equipping individuals to navigate life's stressors";
  const src = '/caseStudies/sage2.png';
  const alt = 'Sage App';
  const linkurl = '/sage';

  return (
    <Link
      href={linkurl}
      className="flex flex-col w-[488px] h-[529px] pt-12 mb-20 px-10 bg-[#F1F1F1] rounded-3xl border-[#CCC] border overflow-clip relative group hover:shadow-perimeter duration-500"
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
        className={`w-full h-auto absolute bottom-0 right-0 group-hover:scale-105 duration-500 origin-bottom`}
      ></Image>
    </Link>
  );
}
