export default function Results() {
  return (
    <div className="pl-[11%] pr-[11%]">
      <div className="flex flex-col gap-4">
        <h2>Results</h2>
        <h3>Record-breaking numbers for the books</h3>
        <p>
          Ultimately, we hit our funding goal (phew) and had the pleasure of
          being co-hosted with Intel which allowed HackDavis to be the biggest
          its ever been. On the big day, we were joined by 900 participants, 65%
          of which were first-time hackers.
        </p>
      </div>

      <div className="flex gap-8 pt-10 flex-nowrap">
        <div className="bg-[#F1F1F1] w-full h-[184px] flex flex-col items-center justify-center border border-[#CCCCCC]">
          <h2>275,000+</h2>
          <h3>Website Views</h3>
        </div>
        <div className="bg-[#F1F1F1] w-full h-[184px] flex flex-col items-center justify-center border border-[#CCCCCC]">
          <h2>$80,000+</h2>
          <h3>in Sponsorships</h3>
        </div>
      </div>

      <div className="flex gap-8 pt-8 flex-nowrap">
        <div className="bg-[#F1F1F1] w-full h-[184px] flex flex-col items-center justify-center border border-[#CCCCCC]">
          <h2>900+</h2>
          <h3>Hackathon Participants</h3>
        </div>
        <div className="bg-[#F1F1F1] w-full h-[184px] flex flex-col items-center justify-center border border-[#CCCCCC]">
          <h2>65%</h2>
          <h3>First-Time Hackers</h3>
        </div>
      </div>
    </div>
  );
}
