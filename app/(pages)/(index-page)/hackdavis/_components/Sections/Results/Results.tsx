import Heading from '../../Heading/Heading';

export default function Results() {
  const statCards: StatCardProps[] = [
    { number: '275,000+', description: 'Website Views' },
    { number: '$80,000+', description: 'in Sponsorships' },
    { number: '900+', description: 'Hackathon Participants' },
    { number: '65%', description: 'First-Time Hackers' },
  ];

  return (
    <div className="pl-[11%] pr-[11%]">
      <div className="flex flex-col gap-4">
        <h2>Results</h2>
        <Heading
          h3="Record-breaking numbers for the books"
          p="Ultimately, we hit our funding goal (phew) and had the pleasure of
          being co-hosted with Intel which allowed HackDavis to be the biggest
          its ever been. On the big day, we were joined by 900 participants, 65%
          of which were first-time hackers."
        />
      </div>

      <div className="flex gap-8 pt-10 flex-wrap">
        {statCards.map((stat, index) => (
          <StatCard {...stat} key={index} />
        ))}
      </div>
    </div>
  );
}

type StatCardProps = {
  number: string;
  description: string;
};

function StatCard({ number, description }: StatCardProps) {
  return (
    <div className="bg-[#F1F1F1] w-[calc(50%-1rem)] h-[184px] flex flex-col items-center justify-center border border-[#CCCCCC]">
      <h2>{number}</h2>
      <h3>{description}</h3>
    </div>
  );
}
