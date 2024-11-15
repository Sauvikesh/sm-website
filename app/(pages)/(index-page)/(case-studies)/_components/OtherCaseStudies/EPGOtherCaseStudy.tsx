import Link from 'next/link';
import Image from 'next/image';
import getImageData from '@/app/_lib/getImageData';

export default async function EPGCaseStudyThumbnail() {
  const images = await getImageData('landingPage/');

  const org = 'Paramount+';
  const purpose = 'INTERNSHIP';
  const desc = 'Reimagining the live television streaming experience';
  const desktopImage = images?.at(7)?.url || '';
  const phoneImage = images?.at(8)?.url || '';

  const alt = 'Paramount Logo';
  const linkurl = '/paramount/EPG';

  return (
    <Link
      href={linkurl}
      className="flex flex-col w-[488px] h-[529px] py-12 mb-20 p-10 bg-[#F1F1F1] rounded-3xl border-[#CCC] border overflow-clip relative group hover:shadow-perimeter duration-500"
    >
      <div className="flex gap-2 w-full">
        <h4 className="font-outfit text-black">{org}</h4>
        <h4 className="font-outfit">{purpose}</h4>
      </div>
      <h3 className="pt-2 pb-20">{desc}</h3>

      <div className="flex">
        <Image
          src={phoneImage}
          alt={alt}
          height={1000}
          width={1000}
          className={`w-auto h-[274px] absolute bottom-0 left-[10px] group-hover:scale-105 duration-500 origin-bottom z-10`}
        ></Image>
        <Image
          src={desktopImage}
          alt={alt}
          height={1000}
          width={1000}
          className={`w-[90%] h-auto absolute bottom-0 right-0 group-hover:scale-105 duration-500 origin-bottom z-0`}
        ></Image>
      </div>
    </Link>
  );
}
