import TextCard, {
  TextCardProps,
} from '@/app/(pages)/_components/TextCard/TextCard';
import Heading from '../../Heading/Heading';

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
// TODO: double check how the widths are being used here?? rn the percentage values are for the width of the flex container
// ^^ is this the best way I can assign the widths? doesn't look simple to change
export default function Process() {
  return (
    <div className="flex flex-col pl-[15%] pr-[15%] justify-center g-3 h-[60vh]">
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
