import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';
import StatCard, {
  StatCardProps,
} from '../../../../_components/StatCard/StatCard';

export default function Results() {
  const statCards: StatCardProps[] = [
    { number: '275,000+', description: 'Website Views' },
    { number: '$80,000+', description: 'in Sponsorships' },
    { number: '900+', description: 'Hackathon Participants' },
    { number: '65%', description: 'First-Time Hackers' },
  ];

  return (
    <section className="flex flex-col gap-10">
      <RevealWrapper>
        <div className="flex flex-col gap-2">
          <h3>The Results</h3>
          <p>
            Ultimately, HackDavis reached its funding goal (phew) and was
            co-hosted for the first time in five years with Intel. On the big
            day, 900 participants filled the UCenter, 65% of which were
            first-time hackers.
          </p>
        </div>

        <div className="flex gap-8">
          {statCards.map((stat, index) => (
            <StatCard {...stat} key={index} />
          ))}
        </div>
      </RevealWrapper>
    </section>
  );
}
