export default function Summary() {
  return (
    <div className="bg-white h-[100vh] flex flex-col justify-around items-center border">
      <div className="grid w-full grid-cols-4 grid-rows-2 gap-4 pt-0 pb-0 p-53">
        <div className="col-span-3 row-span-1 p-4">
          <h1>OVERVIEW</h1>
          <p>
            In today's complex world, maintaining good mental health is a
            fundamental necessity. We designed Sage: the app that advocates for
            socially accessible mental health and provides personalized
            self-care practices.
          </p>
        </div>
        <div className="col-span-1 row-span-1 p-4">
          <h1>TOOLS</h1>
          <p>Adobe Photoshop, Illustrator, Figma, Qualtrics XM</p>
        </div>
        <div className="col-span-3 row-span-1 p-4">
          <h1>MY ROLE</h1>
          <p>
            Led the synthesis of research findings and the identification of
            pain points, culminating in the ideation of our solutions. Finalized
            our design system and spearheaded the creation of our hi-fidelity
            prototype.
          </p>
        </div>
        <div className="col-span-1 row-span-1 p-4">
          <h1>TIMELINE</h1>
          <p>6 weeks, Oct - Nov 2022</p>
        </div>
      </div>

      <div className="grid w-full grid-cols-2 grid-rows-1 gap-4 pt-0 pb-0 p-53">
        <div className="col-span-1 row-span-1 p-4">
          <h1>OUTCOMES</h1>
          <p>
            ⭐️ Awarded "Most Innovative UX" and "Best UX Research" by industry
            judges from Meta, Amazon & DocuSign
          </p>
        </div>
        <div className="col-span-1 row-span-1 p-4">
          <h1 className="text-transparent">__</h1>
          <p>
            ⭐️ 74% of polled individuals from target audience reported they
            were either extremely likely or likely to use Sage
          </p>
        </div>
      </div>
    </div>
  );
}
