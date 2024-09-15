import TextCard, { TextCardProps } from '../../../_components/TextCard';

export default function Philosophy() {
  const textCardElements: TextCardProps[] = [
    {
      number: '01',
      header: 'Empathy is like a magical superpower',
      body: 'I strive to meet people where they are and understand a perspective that might be unfamiliar to my lived experiences',
    },
    {
      number: '02',
      header: 'Stay curious and open-minded',
      body: "I'm thankful to be surrounded by people with diverse skillsets and point of views to challenge and expand my knowledge",
    },
    {
      number: '03',
      header: 'Take risks and embrace the unknown',
      body: 'I value new experiences that challenge me and push me out of my comfort zone; I seek opportunities for growth',
    },
  ];
  return (
    <section className="pl-[15%] pr-[15%] pb-[175px]">
      <h3 className="text-4xl tracking-[0.72px]">
        My design (& life) philosophy
      </h3>

      <div className="flex gap-8 pb-20 pt-6">
        {textCardElements.map((card, index) => (
          <TextCard {...card} key={index} />
        ))}
      </div>
    </section>
  );
}
