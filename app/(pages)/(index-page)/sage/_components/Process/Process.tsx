import Heading from '../Headings/Heading';
import TextCard, { TextCardProps } from '../../../_components/TextCard';

// TODO: double check how the widths are being used here?? rn the percentage values are for the width of the flex container
// ^^ is this the best way I can assign the widths? doesn't look simple to change
export default function Process() {
  const textCardElements: TextCardProps[] = [
    {
      number: '01',
      header: 'Accessibilty',
      body: 'Make self-care methods more accessible for users.',
    },
    {
      number: '02',
      header: 'Accessibilty',
      body: 'Be mindful of designing for social accessibilty.',
    },
    {
      number: '03',
      header: 'Accessibilty',
      body: 'Empowers users to be proactive and better their mental health.',
    },
  ];
  return (
    <div className="flex flex-col pl-[11%] pr-[11%] bg-white justify-center g-3 h-[60vh]">
      <div className="h-[1px] bg-[#CCC] mb-20"></div>
      <Heading h1="THE PROCESS" p="Project Goals" />
      <div className="flex gap-8 pb-20 pt-8">
        {textCardElements.map((card, index) => (
          <TextCard {...card} key={index} />
        ))}
      </div>
    </div>
  );
}
