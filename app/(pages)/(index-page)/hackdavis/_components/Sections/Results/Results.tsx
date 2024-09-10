export default function Results() {
  return (
    <div className="pl-[11%] pr-[11%]">
      <div className="flex flex-col gap-4">
        <h1>Results</h1>
        <h2>
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
          <h1>275,000+</h1>
          <h2>Website Views</h2>
        </div>
        <div className="bg-[#F1F1F1] w-full h-[184px] flex flex-col items-center justify-center border border-[#CCCCCC]">
          <h1>$80,000+</h1>
          <h2>in Sponsorships</h2>
        </div>
      </div>

      <div className="flex gap-8 pt-8 flex-nowrap">
        <div className="bg-[#F1F1F1] w-full h-[184px] flex flex-col items-center justify-center border border-[#CCCCCC]">
          <h1>900+</h1>
          <h2>Hackathon Participants</h2>
        </div>
        <div className="bg-[#F1F1F1] w-full h-[184px] flex flex-col items-center justify-center border border-[#CCCCCC]">
          <h1>65%</h1>
          <h2>First-Time Hackers</h2>
        </div>
      </div>
    </div>
  );
}
