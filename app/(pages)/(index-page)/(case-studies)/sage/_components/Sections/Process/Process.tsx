import TextCard, {
  TextCardProps,
} from '@/app/(pages)/_components/TextCard/TextCard';
import Heading from '../../Heading/Heading';
import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';

const textCardElements: TextCardProps[] = [
  {
    number: '01',
    header: 'Accessibilty',
    body: 'Make self-care accessible for diverse users and their needs.',
  },
  {
    number: '02',
    header: 'Equity',
    body: 'Cater towards users from marginalized communities.',
  },
  {
    number: '03',
    header: 'Personalization',
    body: 'Allow users to create goals that are fit for their lifestyle.',
  },
];

export default function Process() {
  return (
    <section className="flex flex-col justify-center gap-10">
      <RevealWrapper>
        <Heading h1="The Process" p="Project Goals" />
        <div className="flex gap-8">
          {textCardElements.map((card, index) => (
            <TextCard {...card} key={index} />
          ))}
        </div>
      </RevealWrapper>
    </section>
  );
}
