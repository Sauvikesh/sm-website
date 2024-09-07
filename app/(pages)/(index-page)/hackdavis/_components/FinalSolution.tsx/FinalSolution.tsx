'use client';
import Image from 'next/image';

export default function FinalSolution() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="pl-[11%] pr-[11%] pb-[243px]">
      <h1 className="text-[40px] font-bold tracking-[0.8px] text-center">
        Final Solution
      </h1>

      <div className="flex w-full gap-12 relative">
        <div className="flex flex-col items-start gap-8 sticky top-12 h-fit">
          <div className="flex flex-col items-start gap-2">
            <button className="bg-black text-white rounded-[100px] pl-6 pr-6 pt-2 pb-2">
              Desktop
            </button>
            <button className="bg-white text-black rounded-[100px] pl-6 pr-6 pt-2 pb-2 border border-black">
              Mobile
            </button>
          </div>

          <div
            className="flex flex-col bg-[#EEEEEE] p-4 w-[160px]"
            onClick={() => scrollToSection('1')}
          >
            <p className="text-4xl font-bold tracking-[0.72px]">01</p>
            <p className="text-[15px] tracking-[0.3px]">Registration</p>
          </div>

          <div
            className="flex flex-col bg-[#EEEEEE] p-4 w-[160px]"
            onClick={() => scrollToSection('2')}
          >
            <p className="text-4xl font-bold tracking-[0.72px]">02</p>
            <p className="text-[15px] tracking-[0.3px]">About</p>
          </div>

          <div
            className="flex flex-col bg-[#EEEEEE] p-4 w-[160px]"
            onClick={() => scrollToSection('3')}
          >
            <p className="text-4xl font-bold tracking-[0.72px]">03</p>
            <p className="text-[15px] tracking-[0.3px]">Day-of-Event</p>
          </div>
        </div>

        <div className="flex flex-col w-[65%] gap-[197px]">
          <Image
            src="/hackdavis/About.png"
            alt="about page"
            width={1000}
            height={1000}
            id="1"
          />

          <Image
            src="/hackdavis/Landing.svg"
            alt="about page"
            width={1000}
            height={1000}
            id="2"
          />

          <Image
            src="/hackdavis/DOE.svg"
            alt="about page"
            width={1000}
            height={1000}
            className="-mt-[1500px]"
            id="3"
          />
        </div>
      </div>
    </div>
  );
}
