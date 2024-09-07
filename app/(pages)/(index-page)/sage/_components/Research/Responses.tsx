import Image from 'next/image';

export default function Responses() {
  return (
    <div className="flex flex-col pt-8 pb-8 pl-[18%] pr-[18%]">
      <div className="flex pb-28">
        <h2 className="text-4xl leading-[54px] font-semibold w-[50%]">
          94 of 98 respondents had difficulty practicing self-care due to lack
          of time.
        </h2>
        <h2 className="text-[100px] leading-[110%] text-blue-600 font-bold w-[50%] text-center">
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
