import Image from 'next/image';

export default function Responses() {
  return (
    <div className="flex flex-col pt-8 pb-8">
      <div className="flex pb-28">
        <h2 className="">
          94 of 98 respondents had difficulty practicing self-care due to lack
          of time.
        </h2>
        <h2 className="text-[100px] leading-[110%] text-[#1B454F] font-bold text-center">
          96%
        </h2>
      </div>
      <Image
        src="/sageImages/research/messageFeedback.jpg"
        alt="dms image"
        width={1000}
        height={1000}
        className="w-full"
      />
    </div>
  );
}
