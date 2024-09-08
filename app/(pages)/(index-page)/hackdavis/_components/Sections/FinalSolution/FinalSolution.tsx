'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { CommentProps } from './Comment';
import Comment from './Comment';

export default function FinalSolution() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const [activeButton, setActiveButton] = useState(1);

  const commentsAbout: CommentProps[] = [
    {
      text: 'Potential sponsors can gain a better understanding of the scale of the event through KPIs',
      x: '-220px',
      y: '20%',
    },
    {
      text: "Users can learn about HackDavis's core values and what we stand for",
      x: '-220px',
      y: '38%',
    },
    {
      text: 'Users can feel more connected and develop increased credibility by getting to know the people behind HackDavis',
      x: '-220px',
      y: '53%',
    },
    {
      text: 'Users develop increased positive brand association by seeing our track record and have the ability to view sites for previous years',
      x: '-220px',
      y: '74%',
    },
  ];

  const commentsLanding: CommentProps[] = [
    {
      text: 'Potential participants receive reassurance that creators of all backgrounds and levels of experience are welcome',
      x: '-230px',
      y: '59%',
    },
    {
      text: 'Users can find answers to common questions they may have quicker',
      x: '-230px',
      y: '79%',
    },
  ];

  const commentsDOE: CommentProps[] = [
    {
      text: 'Users can request help right away and easily navigate to the CTA later on',
      x: '-215px',
      y: '4%',
    },
    {
      text: 'Users can easily discover resources via our educational starter pack',
      x: '-215px',
      y: '10%',
    },
    {
      text: 'Users can see when events occur, and plan to attend specific workshops',
      x: '-215px',
      y: '20%',
    },
    {
      text: 'Users gain motivation to register and can narrow down which tracks to apply for',
      x: '-215px',
      y: '34%',
    },
  ];

  return (
    <div className="pl-[11%] pr-[11%] pt-[146px] pb-[241px] bg-[#F5F5F5]">
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
            <p className="text-[15px] tracking-[0.3px]">About</p>
          </div>

          <div
            className={`flex flex-col bg-[#EEEEEE] p-4 w-[160px] transition-opacity duration-200 ${activeButton === 2 ? 'opacity-100' : 'opacity-25'}`}
            onClick={() => {
              scrollToSection('2');
            }}
          >
            <p className="text-4xl font-bold tracking-[0.72px]">02</p>
            <p className="text-[15px] tracking-[0.3px]">Registration</p>
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

        <div className="flex flex-col w-[65%] gap-[197px]">
          <div className="flex relative">
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

            {commentsAbout.map((comment, index) => (
              <Comment
                x={comment.x}
                y={comment.y}
                text={comment.text}
                key={index}
              />
            ))}
          </div>

          <div className="flex relative">
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

            {commentsLanding.map((comment, index) => (
              <Comment {...comment} key={index} />
            ))}
          </div>

          <div className="flex relative">
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

              {commentsDOE.map((comment, index) => (
                <Comment {...comment} key={index} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
