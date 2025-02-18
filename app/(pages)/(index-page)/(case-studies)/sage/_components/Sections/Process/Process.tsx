import TextCard, {
  TextCardProps,
} from '@/app/(pages)/_components/TextCard/TextCard';
import Heading from '../../Heading/Heading';
import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';

const textCardElements: TextCardProps[] = [
  {
    number: '01',
    header: 'Accessibilty',
    body: 'Make self-care accessible for diverse users.',
  },
  {
    number: '02',
    header: 'Accessibilty',
    body: 'Be mindful of designing for social accessibilty.',
  },
  {
    number: '03',
    header: 'Personalization',
    body: 'Empowers users to be proactive and better their mental health.',
  },
];

export default function Process() {
  return (
    <section className="flex flex-col justify-center gap-10">
      <RevealWrapper>
        <Heading h1="THE PROCESS" p="Project Goals" />
        <div className="flex gap-8">
          {textCardElements.map((card, index) => (
            <TextCard {...card} key={index} />
          ))}
        </div>
      </RevealWrapper>
    </section>
  );
}
