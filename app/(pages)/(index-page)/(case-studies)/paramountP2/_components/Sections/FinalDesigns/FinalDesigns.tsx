'use client';
import { contentProps } from '../../../page';
import Image from 'next/image';
import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';
import { ToggleButton } from '../../../../hackdavis/_components/Sections/FinalSolution/FinalSolution';
import { useState } from 'react';

export default function FinalDesigns(content: contentProps) {
  const [activeDesignButton, setActiveDesignButton] = useState(0);

  const toggleButtons = [
    {
      label: 'TV',
      isActive: 0 === activeDesignButton,
      onClick: () => setActiveDesignButton(0),
    },
    {
      label: 'Web',
      isActive: 1 === activeDesignButton,
      onClick: () => setActiveDesignButton(1),
    },
    {
      label: 'Mobile',
      isActive: 2 === activeDesignButton,
      onClick: () => setActiveDesignButton(2),
    },
  ];

  const tvDesigns = [
    {
      img: content.images?.at(2).url,
      h4: content.h4?.at(0),
      h3: content.h3?.at(0),
      body: content.body?.at(0),
    },
    {
      img: content.images?.at(3).url,
      h4: content.h4?.at(0),
      h3: content.h3?.at(1),
      body: content.body?.at(1),
    },
  ];

  const mobileDesigns = [
    {
      img: content.images?.at(0).url,
      h4: content.h4?.at(2),
      h3: content.h3?.at(0),
      body: content.body?.at(2),
    },
    {
      img: content.images?.at(1).url,
      h4: content.h4?.at(2),
      h3: content.h3?.at(1),
      body: content.body?.at(3),
    },
  ];

  const webDesigns = [
    {
      img: content.images?.at(4).url,
      h4: content.h4?.at(1),
      h3: content.h3?.at(0),
      body: content.body?.at(2),
    },
    {
      img: content.images?.at(5).url,
      h4: content.h4?.at(1),
      h3: content.h3?.at(1),
      body: content.body?.at(3),
    },
  ];

  const allDesigns = [tvDesigns, webDesigns, mobileDesigns];

  return (
    <section className="flex flex-col items-center bg-[#F0F0F0] -mx-[40%] gap-20 pt-20 pb-20">
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

        <div className="flex flex-col gap-40">
          {allDesigns.at(activeDesignButton)?.map((design, index) => (
            <div className="flex gap-10" key={index}>
              <Image
                src={design.img}
                alt=""
                width={1000}
                height={1000}
                className="w-[654px]"
              />
              <div className="flex flex-col justify-center gap-4 w-[308px]">
                <h4>{design.h4}</h4>
                <h3>{design.h3}</h3>
                <p>{design.body}</p>
              </div>
            </div>
          ))}
        </div>
      </RevealWrapper>
    </section>
  );
}
