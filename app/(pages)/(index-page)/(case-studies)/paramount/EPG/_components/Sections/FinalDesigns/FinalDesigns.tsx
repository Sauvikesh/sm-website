'use client';
import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';
import HeadingBody from '../../../../../_components/HeadingBody/HeadingBody';
import { contentProps } from '../../../../errorMessaging/page';
import { useState } from 'react';
import { ToggleButton } from '@/app/(pages)/(index-page)/(case-studies)/hackdavis/_components/Sections/FinalSolution/FinalSolution';
import { useEffect } from 'react';
export default function FinalDesigns(content: contentProps) {
  const [activeDesignButton, setActiveDesignButton] = useState(false);

  const toggleButtons = [
    {
      label: 'Desktop',
      isActive: false === activeDesignButton,
      onClick: () => setActiveDesignButton(false),
    },
    {
      label: 'Mobile',
      isActive: true === activeDesignButton,
      onClick: () => setActiveDesignButton(true),
    },
  ];

  const videoLinks = [
    activeDesignButton === false
      ? content.images?.at(1)?.url
      : content.images?.at(5)?.url, // pip
    activeDesignButton === false
      ? content.images?.at(3)?.url
      : content.images?.at(7)?.url, // tiles
    activeDesignButton === false
      ? content.images?.at(2)?.url
      : content.images?.at(6)?.url, // search
    activeDesignButton === false
      ? content.images?.at(0)?.url
      : content.images?.at(4)?.url, // favorites
  ];

  useEffect(() => {
    console.log(activeDesignButton);
  }, [activeDesignButton]);

  return (
    <section
      className="flex flex-col gap-20 bg-[#F0F0F0] -mx-[30%] py-20"
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

        <div className="flex flex-col items-center gap-10 px-case-study">
          <div className="flex flex-col gap-2 self-start">
            <h4>{content.h4?.at(0)}</h4>
            <HeadingBody h={content.h3?.at(0)} p={content.body?.at(0)} />
          </div>

          <video
            key={String(activeDesignButton)}
            className={`${activeDesignButton === false ? 'w-full' : 'w-[35%]'}`}
            controls
          >
            <source
              src={
                activeDesignButton === false
                  ? content.images?.at(1)?.url
                  : content.images?.at(5)?.url
              }
              type="video/mp4"
            />
            <track
              src="/path/to/captions.vtt"
              kind="subtitles"
              srcLang="en"
              label="English"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="flex flex-col items-center gap-10 px-case-study">
          <div className="flex flex-col gap-2 self-start">
            <h4>{content.h4?.at(1)}</h4>
            <HeadingBody h={content.h3?.at(1)} p={content.body?.at(1)} />
          </div>
          <video
            key={String(activeDesignButton)}
            className={`${activeDesignButton === false ? 'w-full' : 'w-[35%]'}`}
            controls
          >
            <source src={videoLinks.at(1)} type="video/mp4" />
            <track
              src="/path/to/captions.vtt"
              kind="subtitles"
              srcLang="en"
              label="English"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="flex flex-col items-center gap-10 px-case-study">
          <div className="flex flex-col gap-2 self-start">
            <h4>{content.h4?.at(2)}</h4>
            <HeadingBody h={content.h3?.at(2)} p={content.body?.at(2)} />
          </div>
          <video
            key={String(activeDesignButton)}
            className={`${activeDesignButton === false ? 'w-full' : 'w-[35%]'}`}
            controls
          >
            <source src={videoLinks.at(2)} type="video/mp4" />
            <track
              src="/path/to/captions.vtt"
              kind="subtitles"
              srcLang="en"
              label="English"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="flex flex-col items-center gap-10 px-case-study">
          <div className="flex flex-col gap-2 self-start">
            <h4>{content.h4?.at(3)}</h4>
            <HeadingBody h={content.h3?.at(3)} p={content.body?.at(3)} />
          </div>
          <video
            key={String(activeDesignButton)}
            className={`${activeDesignButton === false ? 'w-full' : 'w-[35%]'}`}
            controls
          >
            <source src={videoLinks.at(3)} type="video/mp4" />
            <track
              src="/path/to/captions.vtt"
              kind="subtitles"
              srcLang="en"
              label="English"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </RevealWrapper>
    </section>
  );
}
