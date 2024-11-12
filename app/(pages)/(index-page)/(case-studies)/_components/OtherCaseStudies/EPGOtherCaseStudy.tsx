import Link from 'next/link';
import Image from 'next/image';
import getImageData from '@/app/_lib/getImageData';

export default async function EPGCaseStudyThumbnail() {
  const images = await getImageData('landingPage/');

  const org = 'Paramount+';
  const purpose = 'INTERNSHIP';
  const desc = 'Reimagining the live television experience';
  const src = images?.at(3)?.url || '';
  const alt = 'Paramount Logo';
  const linkurl = '/paramount/EPG';

  return (
    <Link
      href={linkurl}
      className="flex flex-col w-[488px] h-[529px] flex-grow py-12 mb-20 p-10 bg-[#F1F1F1] rounded-3xl border-[#CCC] border overflow-clip relative group hover:shadow-perimeter duration-500"
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
        className={`w-full h-auto absolute bottom-0 left-[-15px] group-hover:scale-105 duration-500 origin-bottom`}
      ></Image>
    </Link>
  );
}
