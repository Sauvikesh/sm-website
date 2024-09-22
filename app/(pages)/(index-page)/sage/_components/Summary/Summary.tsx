export default function Summary() {
  // const gridContent: GridContentBlockProps[] = [
  //   {
  //     header: 'OVERVIEW',
  //     paragraph:
  //       "In today's complex world, maintaining good mental health is a fundamental necessity. We designed Sage: the app that advocates for socially accessible mental health and provides personalized self-care practices.",
  //     colSpan: 2,
  //   },
  //   {
  //     header: 'TOOLS',
  //     paragraph: 'Adobe Photoshop, Illustrator, \nFigma, Qualtrics XM',
  //     colSpan: 1,
  //   },
  //   {
  //     header: 'MY ROLE',
  //     paragraph:
  //       'Led the synthesis of research findings and the identification of pain points, culminating in the ideation of our solutions. Finalized our design system and spearheaded the creation of our hi-fidelity prototype.',
  //     colSpan: 2,
  //   },
  //   {
  //     header: 'TIMELINE',
  //     paragraph: '6 weeks, Oct - Nov 2022',
  //     colSpan: 1,
  //   },
  // ];

  // const gridContent2: GridContentBlockProps[] = [
  //   {
  //     header: 'OUTCOMES',
  //     paragraph: `⭐️ Awarded "Most Innovative UX" and "Best UX Research" by
  //           industry judges from Meta, Amazon & DocuSign`,
  //     colSpan: 1,
  //   },
  //   {
  //     header: '__',
  //     paragraph: `⭐️ 74% of polled individuals from target audience reported they
  //           were either extremely likely or likely to use Sage`,
  //     colSpan: 1,
  //     transparent: true,
  //   },
  // ];

  return (
    <div className="h-[100vh] flex flex-col justify-around items-center pl-[15%] pr-[15%]">
      {/* <div className="grid grid-cols-3 grid-rows-2 gap-4">
        {gridContent.map((content, index) => (
          <GridContentBlock key={index} {...content} />
        ))}
      </div> */}

      <div className="flex flex-wrap gap-6">
        <div className="flex flex-col w-[66%]">
          <h3 className="pb-2">Overview</h3>
          <p>
            In today's complex world, maintaining good mental health is a
            fundamental necessity. We designed Sage: the app that advocates for
            socially accessible mental health and provides personalized
            self-care practices.{' '}
          </p>
        </div>
        <div className="flex flex-col w-[30%]">
          <h3 className="pb-2">Tools</h3>
          <p>Adobe Photoshop, Illustrator, Figma, Qualtrics XM </p>
        </div>

        <div className="flex flex-col w-[66%]">
          <h3 className="pb-2">My Role</h3>
          <p>
            Led the synthesis of research findings and the identification of
            pain points, culminating in the ideation of our solutions. Finalized
            our design system and spearheaded the creation of our hi-fidelity
            prototype.{' '}
          </p>
        </div>
        <div className="flex flex-col w-[30%]">
          <h3 className="pb-2">Timeline</h3>
          <p>6 weeks, Oct - Nov 2022</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-6">
        <div className="flex flex-col w-[45%]">
          <h3 className="pb-2">Outcomes</h3>
          <p>
            ⭐️ Awarded "Most Innovative UX" and "Best UX Research" by industry
            judges from Meta, Amazon & DocuSign{' '}
          </p>
        </div>
        <div className="flex flex-col w-[45%]">
          <h3 className="pb-2 invisible">Tools</h3>
          <p>
            ⭐️ 74% of polled individuals from target audience reported they
            were either extremely likely or likely to use Sage
          </p>
        </div>
      </div>

      {/* <div className="grid grid-cols-2 grid-rows-1 gap-4">
        {gridContent2.map((content, index) => (
          <GridContentBlock key={index} {...content} />
        ))}
      </div> */}
    </div>
  );
}
