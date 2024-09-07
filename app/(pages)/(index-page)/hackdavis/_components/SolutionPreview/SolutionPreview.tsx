import Image from 'next/image';
export default function SolutionPreview() {
  return (
    <div className="flex flex-col pl-[11%] pr-[11%] justify-center items-center">
      <h1 className="pb-4 text-[40px] font-bold tracking-[0.8px]">
        Solution Preview
      </h1>
      <p className="pb-8">
        A responsive website that sets students up for success by facilitating
        resource discovery in a variety of subjects such as web development,
        data science, hardware, design, and more. Through the use of plain
        language and whimsical characters, users embark on a journey to learn
        about our commitment to inclusion, the values that we embody as an
        organization, and the diverse innovations created by previous
        participants.
      </p>
      <div className="flex gap-6 pb-20">
        <button className="bg-[#005271] text-white p-4 rounded-lg">
          Jump to Solution
        </button>
        <button className="bg-white text-[#005271] p-4 rounded-lg border border-[#005271]">
          Experience on the Web
        </button>
      </div>

      <div className="flex items-start gap-5 pb-20">
        <Image
          src="/hackdavis/About.png"
          alt="about page"
          width={1000}
          height={1000}
          className="w-[30%]"
        />
        <Image
          src="/hackdavis/Landing.svg"
          alt="about page"
          width={1000}
          height={1000}
          className="pt-[6px]"
        />
        <Image
          src="/hackdavis/DOE.svg"
          alt="about page"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
}
