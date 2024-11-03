'use client';
import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';
import HeadingBody from '../../../../../_components/HeadingBody/HeadingBody';
import { contentProps } from '../../../../errorMessaging/page';
import Image from 'next/image';
import { useState } from 'react';
import { ToggleButton } from '@/app/(pages)/(index-page)/(case-studies)/hackdavis/_components/Sections/FinalSolution/FinalSolution';

export default function FinalDesigns(content: contentProps) {
  const [activeDesignButton, setActiveDesignButton] = useState(0);

  const toggleButtons = [
    {
      label: 'Desktop',
      isActive: 0 === activeDesignButton,
      onClick: () => setActiveDesignButton(0),
    },
    {
      label: 'Mobile',
      isActive: 1 === activeDesignButton,
      onClick: () => setActiveDesignButton(1),
    },
  ];

  return (
    <section
      className="flex flex-col  gap-20 bg-[#F0F0F0] -mx-[40%] py-20"
      id="Final Designs"
    >
      <RevealWrapper>
        <div className="flex flex-col items-center gap-6">
          <h2>{content.h2?.at(0)}</h2>

          <div className="flex flex-row items-start gap-2">
            {toggleButtons.map((button, index) => (
              <ToggleButton
                key={index}
                label={button.label}
                onClick={button.onClick}
                isActive={button.isActive}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-10 px-case-study">
          <div className="flex flex-col gap-2">
            <h4>{content.h4?.at(0)}</h4>
            <HeadingBody h={content.h3?.at(0)} p={content.body?.at(0)} />
          </div>
          <Image
            src={content.images?.at(0)?.url}
            alt=""
            width={1000}
            height={1000}
            className="w-full"
          />
        </div>

        <div className="flex flex-col gap-10 px-case-study">
          <div className="flex flex-col gap-2">
            <h4>{content.h4?.at(1)}</h4>
            <HeadingBody h={content.h3?.at(1)} p={content.body?.at(1)} />
          </div>
          <Image
            src={content.images?.at(0)?.url}
            alt=""
            width={1000}
            height={1000}
            className="w-full"
          />
        </div>

        <div className="flex flex-col gap-10 px-case-study">
          <div className="flex flex-col gap-2">
            <h4>{content.h4?.at(2)}</h4>
            <HeadingBody h={content.h3?.at(2)} p={content.body?.at(2)} />
          </div>
          <Image
            src={content.images?.at(0)?.url}
            alt=""
            width={1000}
            height={1000}
            className="w-full"
          />
        </div>

        <div className="flex flex-col gap-10 px-case-study">
          <div className="flex flex-col gap-2">
            <h4>{content.h4?.at(3)}</h4>
            <HeadingBody h={content.h3?.at(3)} p={content.body?.at(3)} />
          </div>
          <Image
            src={content.images?.at(0)?.url}
            alt=""
            width={1000}
            height={1000}
            className="w-full"
          />
        </div>
      </RevealWrapper>
    </section>
  );
}
