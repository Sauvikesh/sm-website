import Image from 'next/image';
export type CaseStudyProps = {
  title: string;
  desc: string;
  src: string;
  alt: string;
};
export default function CaseStudy(props: CaseStudyProps) {
  const { title, desc, src, alt } = props;

  return (
    <div className="flex flex-col items-center mt-0 justify-normal m-53">
      <h3 className="text-[56px] text-white font-f-w">{title}</h3>
      <h4 className=" text-[20px] text-white font-dm-sans mb-6">{desc}</h4>
      <Image
        src={src}
        alt={alt}
        height={1000}
        width={1000}
        className="w-full h-auto transition duration-300 ease-in-out hover:scale-105 hover:cursor-pointer"
      ></Image>
    </div>
  );
}
