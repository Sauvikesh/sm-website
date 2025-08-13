import TextCard, {
  TextCardProps,
} from '../../../../_components/TextCard/TextCard';
import { RevealWrapper } from '../../../_components/Reveal/RevealWrapper';

export default function Philosophy() {
  const textCardElements: TextCardProps[] = [
    {
      number: '01',
      header: 'Empathy is like a magical superpower',
      body: 'I strive to listen first and understand perspectives that differ from my lived experiences',
    },
    {
      number: '02',
      header: 'Stay curious and open-minded',
      body: "I surrounded myself with diverse teammates who help me look at problems from all angles",
    },
    {
      number: '03',
      header: 'Take risks and embrace the unknown',
      body: 'I value new experiences that push me out of my comfort zone and I create opportunities for learning',
    },
  ];
  return (
    <section className="pl-[15%] pr-[15%]">
      <RevealWrapper>
        <h3 className="text-4xl tracking-[0.72px]">
          My design (& life) philosophy
        </h3>

        <div className="flex gap-8 pb-20 pt-6">
          {textCardElements.map((card, index) => (
            <TextCard {...card} key={index} />
          ))}
        </div>
      </RevealWrapper>
    </section>
  );
}
