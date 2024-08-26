// TODO: refactor the css to not reuse the same classes over and over

import GridContentBlock, { GridContentBlockProps } from './GridContentBlock';

export default function Summary() {
  const gridContent: GridContentBlockProps[] = [
    {
      header: 'OVERVIEW',
      paragraph:
        "In today's complex world, maintaining good mental health is a fundamental necessity. We designed Sage: the app that advocates for socially accessible mental health and provides personalized self-care practices.",
      colSpan: 2,
    },
    {
      header: 'TOOLS',
      paragraph: 'Adobe Photoshop, Illustrator, \nFigma, Qualtrics XM',
      colSpan: 1,
    },
    {
      header: 'MY ROLE',
      paragraph:
        'Led the synthesis of research findings and the identification of pain points, culminating in the ideation of our solutions. Finalized our design system and spearheaded the creation of our hi-fidelity prototype.',
      colSpan: 2,
    },
    {
      header: 'TIMELINE',
      paragraph: '6 weeks, Oct - Nov 2022',
      colSpan: 1,
    },
  ];

  const gridContent2: GridContentBlockProps[] = [
    {
      header: 'OUTCOMES',
      paragraph: `⭐️ Awarded "Most Innovative UX" and "Best UX ${(<br></br>)} Research" by
            industry judges from Meta, Amazon & DocuSign`,
      colSpan: 1,
    },
    {
      header: '__',
      paragraph: `⭐️ 74% of polled individuals from target audience reported they
            were either extremely likely or likely to ${(<br></br>)} use Sage`,
      colSpan: 1,
      transparent: true,
    },
  ];

  return (
    <div className="bg-white h-[100vh] flex flex-col justify-around items-center font-dm-sans">
      <div className="grid w-full grid-cols-3 grid-rows-2 gap-4 pt-0 pb-0 p-53">
        {gridContent.map((content, index) => (
          <GridContentBlock key={index} {...content} />
        ))}
      </div>

      <div className="grid w-full grid-cols-2 grid-rows-1 gap-4 pt-0 pb-0 p-53">
        {gridContent2.map((content, index) => (
          <GridContentBlock key={index} {...content} />
        ))}
      </div>
    </div>
  );
}
