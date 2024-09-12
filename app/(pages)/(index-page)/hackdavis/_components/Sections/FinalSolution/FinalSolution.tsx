'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { useScrollToSectionOnViewSwitch } from '@/app/(pages)/_hooks/useScrollToSection';

//TODO: comeback to this later to refactor again maybe ???
export default function FinalSolution() {
  const [activeScrollButton, setActiveScrollButton] = useState(1);
  const [displayDesktop, setDisplayDesktop] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  useScrollToSectionOnViewSwitch(
    activeScrollButton,
    displayDesktop,
    scrollToSection
  );

  const commentsAbout: CommentProps[] = [
    {
      text: 'Potential sponsors can gain a better understanding of the scale of the event through KPIs',
      x: '-220px',
      y: displayDesktop ? '20%' : '12%',
    },
    {
      text: "Users can learn about HackDavis's core values and what we stand for",
      x: '-220px',
      y: displayDesktop ? '38%' : '21%',
    },
    {
      text: 'Users can feel more connected and develop increased credibility by getting to know the people behind HackDavis',
      x: '-220px',
      y: displayDesktop ? '53%' : '40%',
    },
    {
      text: 'Users develop increased positive brand association by seeing our track record and have the ability to view sites for previous years',
      x: '-220px',
      y: displayDesktop ? '74%' : '82%',
    },
  ];

  const commentsLanding: CommentProps[] = [
    {
      text: 'Potential participants receive reassurance that creators of all backgrounds and levels of experience are welcome',
      x: '-230px',
      y: displayDesktop ? '59%' : '52%',
    },
    {
      text: 'Users can find answers to common questions they may have quicker',
      x: '-230px',
      y: displayDesktop ? '79%' : '65%',
    },
  ];

  const commentsDOE: CommentProps[] = [
    {
      text: 'Users can request help right away and easily navigate to the CTA later on',
      x: '-215px',
      y: displayDesktop ? '4%' : '4%',
    },
    {
      text: 'Users can easily discover resources via our educational starter pack',
      x: '-215px',
      y: displayDesktop ? '10%' : '9%',
    },
    {
      text: 'Users can see when events occur, and plan to attend specific workshops',
      x: '-215px',
      y: displayDesktop ? '20%' : '12%',
    },
    {
      text: 'Users gain motivation to register and can narrow down which tracks to apply for',
      x: '-215px',
      y: displayDesktop ? '34%' : '28%',
    },
  ];

  const scrollButtons = [
    { sectionId: '1', number: '01', label: 'About' },
    { sectionId: '2', number: '02', label: 'Registration' },
    { sectionId: '3', number: '03', label: 'Schedule' },
  ];

  const toggleButtons = [
    {
      label: 'Desktop',
      isActive: displayDesktop,
      onClick: () => setDisplayDesktop(true),
    },
    {
      label: 'Mobile',
      isActive: !displayDesktop,
      onClick: () => setDisplayDesktop(false),
    },
  ];

  return (
    <section className="pl-[11%] pr-[11%] pt-[146px] pb-[241px] bg-[#F5F5F5]">
      <h2 className="text-center">Final Solution</h2>

      <div className="flex w-full gap-12 relative">
        <div className="flex flex-col items-start gap-8 sticky top-12 h-fit">
          <div className="flex flex-col items-start gap-2">
            {toggleButtons.map((button, index) => (
              <ToggleButton
                key={index}
                label={button.label}
                onClick={button.onClick}
                isActive={button.isActive}
              />
            ))}
          </div>

          {scrollButtons.map((button, index) => (
            <ScrollButton
              key={index}
              sectionId={button.sectionId}
              activeButton={activeScrollButton}
              buttonIndex={index + 1}
              number={button.number}
              label={button.label}
              scrollToSection={scrollToSection}
            />
          ))}
        </div>

        <div className="flex flex-col w-[65%] gap-[197px]">
          <div className="flex relative">
            <motion.div
              onPointerOver={() => setActiveScrollButton(1)}
              onViewportEnter={() => setActiveScrollButton(1)}
            >
              <Image
                src={
                  displayDesktop
                    ? '/hackdavis/solutions/AboutHQ.png'
                    : '/hackdavis/solutions/AboutMobileHQ.png'
                }
                alt="about page"
                width={1000}
                height={1000}
                id="1"
                priority={true}
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
              onPointerOver={() => setActiveScrollButton(2)}
              onViewportEnter={() => setActiveScrollButton(2)}
            >
              <Image
                src={
                  displayDesktop
                    ? '/hackdavis/solutions/Landing.svg'
                    : '/hackdavis/solutions/LandingMobile.svg'
                }
                alt="about page"
                width={1000}
                height={1000}
                id="2"
                priority={true}
              />
            </motion.div>

            {commentsLanding.map((comment, index) => (
              <Comment {...comment} key={index} />
            ))}
          </div>

          <div className="flex relative">
            <motion.div
              onPointerOver={() => setActiveScrollButton(3)}
              onViewportEnter={() => setActiveScrollButton(3)}
            >
              <Image
                src={
                  displayDesktop
                    ? '/hackdavis/solutions/DOE.svg'
                    : '/hackdavis/solutions/DoEMobile.svg'
                }
                alt="about page"
                width={1000}
                height={1000}
                id="3"
                priority={true}
              />

              {commentsDOE.map((comment, index) => (
                <Comment {...comment} key={index} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

type ScrollButtonProps = {
  sectionId: string;
  activeButton: number;
  buttonIndex: number;
  number: string;
  label: string;
  scrollToSection: (sectionId: string) => void;
};

function ScrollButton({
  sectionId,
  activeButton,
  buttonIndex,
  number,
  label,
  scrollToSection,
}: ScrollButtonProps) {
  return (
    <button
      className={`flex flex-col bg-[#EEEEEE] p-4 w-[160px] transition-opacity duration-200 ${
        activeButton === buttonIndex ? 'opacity-100' : 'opacity-25'
      }`}
      onClick={() => scrollToSection(sectionId)}
    >
      <p className="text-4xl font-bold tracking-[0.72px]">{number}</p>
      <p className="text-[15px] tracking-[0.3px]">{label}</p>
    </button>
  );
}

type ToggleButtonProps = {
  label: string;
  onClick: () => void;
  isActive: boolean;
};

export const ToggleButton = ({
  label,
  onClick,
  isActive,
}: ToggleButtonProps) => {
  const activeButtonStyle = 'bg-black text-white border border-white';
  const inactiveButtonStyle = 'bg-white text-black border border-black';

  return (
    <button
      className={`${isActive ? activeButtonStyle : inactiveButtonStyle} rounded-[100px] pl-6 pr-6 pt-2 pb-2`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export type CommentProps = {
  text: string;
  x: string;
  y: string;
};

export function Comment(props: CommentProps) {
  const { text, x, y } = props;

  return (
    <div
      className={`flex items-center absolute`}
      style={{ right: `${x}`, top: `${y}` }}
    >
      <div className=" bg-[#005271] w-2 h-2 rounded-full"></div>
      <div className="border-t-2 border-dashed border-[#005271] w-5"></div>
      <p className="bg-white p-4 rounded-[4px] text-[14px] w-[192px]">{text}</p>
    </div>
  );
}
