'use client';
import { useScrollToSectionOnViewSwitch } from '@/app/(pages)/_hooks/useScrollToSection';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';
import { ImageWithModal } from '@/app/(pages)/_components/ImageModal/ImageModal';

//TODO: comeback to this later to refactor again maybe ???
export default function FinalSolution() {
  const [activeScrollButton, setActiveScrollButton] = useState(1);
  const [displayDesktop, setDisplayDesktop] = useState(true);

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
      text: "Users can learn about HackDavis' core values",
      x: '-220px',
      y: displayDesktop ? '38%' : '21%',
    },
    {
      text: 'Users can feel more connected and develop increased credibility by getting to know the people behind HackDavis',
      x: '-220px',
      y: displayDesktop ? '53%' : '40%',
    },
    {
      text: 'Users develop increased positive brand association by seeing a positive track record and have the ability to view sites for previous years',
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
      text: 'Users can find answers to common questions they may have',
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
      text: 'Users can discover resources via our educational starter pack',
      x: '-215px',
      y: displayDesktop ? '10%' : '9%',
    },
    {
      text: 'Users can filter by event type to more easily parse the schedule',
      x: '-215px',
      y: displayDesktop ? '16%' : '14%',
    },
    {
      text: 'Users can see when events occur, and plan to attend specific workshops',
      x: '-215px',
      y: displayDesktop ? '25%' : '20%',
    },
    {
      text: 'Users gain motivation to register and can narrow down which tracks to apply for',
      x: '-215px',
      y: displayDesktop ? '34%' : '32%',
    },
  ];

  const scrollButtons = [
    { sectionId: '1', number: '01', label: 'About' },
    { sectionId: '2', number: '02', label: 'Registration' },
    { sectionId: '3', number: '03', label: 'Day-of-Event' },
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
    <section className="flex flex-col items-center -mx-[40%] pt-[146px] pb-[241px] bg-[#F5F5F5]">
      <RevealWrapper>
        <section>
          <h2 className="text-center" id="Final Solution">
            Final Solution
          </h2>
          
        </section>

        <div className="flex w-full gap-12 relative">
          <div className="flex flex-col items-start gap-8 sticky top-20 h-fit">
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

            {/* {scrollButtons.map((button, index) => (
              <ScrollButton
                key={index}
                sectionId={button.sectionId}
                activeButton={activeScrollButton}
                buttonIndex={index + 1}
                number={button.number}
                label={button.label}
                scrollToSection={scrollToSection}
              />
            ))} */}
          </div>

          <div className="flex flex-col w-[65%] gap-[197px]">
            <section className="flex relative" id="About Page">
              <motion.div
                id="1"
                onPointerOver={() => setActiveScrollButton(1)}
                onViewportEnter={() => setActiveScrollButton(1)}
              >
                <ImageWithModal
                  src={
                    displayDesktop
                      ? 'https://d1ejtjbpinwbmz.cloudfront.net/HackDavis/AboutDesktop.svg'
                      : 'https://d1ejtjbpinwbmz.cloudfront.net/HackDavis/AboutMobile.svg'
                  }
                  alt="about page"
                  width={1000}
                  height={1000}
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
            </section>

            <section className="flex relative" id="Registration Page">
              <motion.div
                id="2"
                onPointerOver={() => setActiveScrollButton(2)}
                onViewportEnter={() => setActiveScrollButton(2)}
              >
                <ImageWithModal
                  src={
                    displayDesktop
                      ? 'https://d1ejtjbpinwbmz.cloudfront.net/HackDavis/Landing.svg'
                      : 'https://d1ejtjbpinwbmz.cloudfront.net/HackDavis/LandingMobile.svg'
                  }
                  alt="about page"
                  width={1000}
                  height={1000}
                />
              </motion.div>

              {commentsLanding.map((comment, index) => (
                <Comment {...comment} key={index} />
              ))}
            </section>

            <section className="flex relative" id="Day-of-Event Page">
              <motion.div
                id="3"
                onPointerOver={() => setActiveScrollButton(3)}
                onViewportEnter={() => setActiveScrollButton(3)}
              >
                <ImageWithModal
                  src={
                    displayDesktop
                      ? 'https://d1ejtjbpinwbmz.cloudfront.net/HackDavis/DOE.svg'
                      : 'https://d1ejtjbpinwbmz.cloudfront.net/HackDavis/DOEMobile.svg'
                  }
                  alt="about page"
                  width={1000}
                  height={1000}
                />

                {commentsDOE.map((comment, index) => (
                  <Comment {...comment} key={index} />
                ))}
              </motion.div>
            </section>
          </div>
        </div>
      </RevealWrapper>
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
      className={`flex flex-col bg-[#EEEEEE] p-4 w-[141px] transition-opacity duration-200 ${
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
      className={`${isActive ? activeButtonStyle : inactiveButtonStyle} rounded-[100px] pl-6 pr-6 pt-2 pb-2 w-[141px]`}
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
