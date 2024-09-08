'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default function FinalSolution() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const [activeButton, setActiveButton] = useState(1);

  return (
    <div className="pl-[11%] pr-[11%] pt-[146px] pb-[243px] bg-[#F5F5F5]">
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
            className={`flex flex-col bg-[#EEEEEE] p-4 w-[160px] transition-opacity duration-200 ${activeButton === 1 ? 'opacity-100' : 'opacity-25'}`}
            onClick={() => {
              scrollToSection('1');
            }}
          >
            <p className="text-4xl font-bold tracking-[0.72px]">01</p>
            <p className="text-[15px] tracking-[0.3px]">Registration</p>
          </div>

          <div
            className={`flex flex-col bg-[#EEEEEE] p-4 w-[160px] transition-opacity duration-200 ${activeButton === 2 ? 'opacity-100' : 'opacity-25'}`}
            onClick={() => {
              scrollToSection('2');
            }}
          >
            <p className="text-4xl font-bold tracking-[0.72px]">02</p>
            <p className="text-[15px] tracking-[0.3px]">About</p>
          </div>

          <div
            className={`flex flex-col bg-[#EEEEEE] p-4 w-[160px] transition-opacity duration-200 ${activeButton === 3 ? 'opacity-100' : 'opacity-25'}`}
            onClick={() => {
              scrollToSection('3');
            }}
          >
            <p className="text-4xl font-bold tracking-[0.72px]">03</p>
            <p className="text-[15px] tracking-[0.3px]">Day-of-Event</p>
          </div>
        </div>

        <div className="flex flex-col w-[65%] gap-[197px] relative">
          <Image
            src="/hackdavis/comment1.svg"
            alt="about page"
            width={1000}
            height={1000}
            className="absolute w-[176px] right-[-168px] top-[4.5%]"
          />

          <Image
            src="/hackdavis/comment2.svg"
            alt="about page"
            width={1000}
            height={1000}
            className="absolute w-[176px] right-[-168px] top-[8%]"
          />

          <Image
            src="/hackdavis/comment3.svg"
            alt="about page"
            width={1000}
            height={1000}
            className="absolute w-[176px] right-[-168px] top-[11.5%]"
          />

          <Image
            src="/hackdavis/comment4.svg"
            alt="about page"
            width={1000}
            height={1000}
            className="absolute w-[176px] right-[-168px] top-[15.5%]"
          />

          <Image
            src="/hackdavis/comment5.svg"
            alt="about page"
            width={1000}
            height={1000}
            className="absolute w-[176px] right-[-178px] top-[41%]"
          />

          <Image
            src="/hackdavis/comment6.svg"
            alt="about page"
            width={1000}
            height={1000}
            className="absolute w-[176px] right-[-178px] top-[48.5%]"
          />

          <Image
            src="/hackdavis/comment7.svg"
            alt="about page"
            width={1000}
            height={1000}
            className="absolute w-[176px] right-[-165px] top-[57%]"
          />

          <Image
            src="/hackdavis/comment8.svg"
            alt="about page"
            width={1000}
            height={1000}
            className="absolute w-[176px] right-[-165px] top-[60%]"
          />

          <Image
            src="/hackdavis/comment9.svg"
            alt="about page"
            width={1000}
            height={1000}
            className="absolute w-[176px] right-[-165px] top-[65%]"
          />

          <Image
            src="/hackdavis/comment10.svg"
            alt="about page"
            width={1000}
            height={1000}
            className="absolute w-[176px] right-[-165px] top-[71%]"
          />

          <motion.div
            onPointerOver={() => setActiveButton(1)}
            onViewportEnter={() => setActiveButton(1)}
          >
            <Image
              src="/hackdavis/About.png"
              alt="about page"
              width={1000}
              height={1000}
              id="1"
            />
          </motion.div>

          <motion.div
            onPointerOver={() => setActiveButton(2)}
            onViewportEnter={() => setActiveButton(2)}
          >
            <Image
              src="/hackdavis/Landing.svg"
              alt="about page"
              width={1000}
              height={1000}
              id="2"
            />
          </motion.div>

          <motion.div
            onPointerOver={() => setActiveButton(3)}
            onViewportEnter={() => setActiveButton(3)}
          >
            <Image
              src="/hackdavis/DOE.svg"
              alt="about page"
              width={1000}
              height={1000}
              id="3"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
