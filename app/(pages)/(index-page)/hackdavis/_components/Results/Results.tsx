export default function Results() {
  return (
    <div className="pl-[11%] pr-[11%] pb-[214px]">
      <div className="flex flex-col gap-4">
        <h1 className=" pt-[118px] text-[40px] font-bold tracking-[0.8px]">
          Results
        </h1>
        <h2 className="text-2xl font-medium leading-6">
          Record-breaking numbers for the books
        </h2>
        <p>
          Ultimately, we hit our funding goal (phew) and had the pleasure of
          being co-hosted with Intel which allowed HackDavis to be the biggest
          its ever been. On the big day, we were joined by 900 participants, 65%
          of which were first-time hackers.
        </p>
      </div>

      <div className="flex gap-8 pt-10 flex-nowrap">
        <div className="bg-[#F1F1F1] w-full h-[184px] flex flex-col items-center justify-center border border-[#CCCCCC]">
          <p className="text-[40px] font-bold">275,000+</p>
          <p className="text-2xl">Website Views</p>
        </div>
        <div className="bg-[#F1F1F1] w-full h-[184px] flex flex-col items-center justify-center border border-[#CCCCCC]">
          <p className="text-[40px] font-bold">$80,000+</p>
          <p className="text-2xl">in Sponsorships</p>
        </div>
      </div>

      <div className="flex gap-8 pt-8 flex-nowrap">
        <div className="bg-[#F1F1F1] w-full h-[184px] flex flex-col items-center justify-center border border-[#CCCCCC]">
          <p className="text-[40px] font-bold">900+</p>
          <p className="text-2xl">Hackathon Participants</p>
        </div>
        <div className="bg-[#F1F1F1] w-full h-[184px] flex flex-col items-center justify-center border border-[#CCCCCC]">
          <p className="text-[40px] font-bold">65%</p>
          <p className="text-2xl">First-Time Hackers</p>
        </div>
      </div>
    </div>
  );
}
