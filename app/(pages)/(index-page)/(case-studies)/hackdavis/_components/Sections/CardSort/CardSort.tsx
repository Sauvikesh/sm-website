import TextCard, {
  TextCardProps,
} from '@/app/(pages)/_components/TextCard/TextCard';
import Heading from '../../Heading/Heading';
import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';
import { ImageWithModal } from '@/app/(pages)/_components/ImageModal/ImageModal';

export default function CardSort() {
  const textCardElements: TextCardProps[] = [
    {
      number: '01',
      header: 'About',
      body: "Caters to potential sponsors and includes KPIs such as participants headcount and projects submitted. Showcases HackDavis's key values and successful track record.",
    },
    {
      number: '02',
      header: 'Registration',
      body: 'Serves as the first point-of-contact where potential participants begin their journey. Encourages participant registration and provides information about what a hackathon is.',
    },
    {
      number: '03',
      header: 'Day-of-Event',
      body: 'One-stop shop for important resources and facilitates processes such as navigating to the educational starter pack, submitting projects, and requesting help.',
    },
  ];

  return (
    <section className="pl-[15%] pr-[15%]">
      <RevealWrapper>
        <Heading
          h3="Three different pages, three different use cases"
          p="After gathering a comprehensive list of the content, I set out to
        understand if there was a more intuitive way to organize everything. I
        conducted card sorting (for the first time!) with five individuals, and
        built a site map consisting of three distinct pages."
        />

        <div className="flex gap-8 pb-20 pt-8">
          {textCardElements.map((card, index) => (
            <TextCard {...card} key={index} />
          ))}
        </div>

        <div className="flex flex-col items-center gap-2">
          <ImageWithModal
            src="/hackdavis/cardSort.svg"
            alt="card sort"
            width={2000}
            height={1000}
          />
          <h4 className="text-[#808080]">site map for the three pages</h4>
        </div>
      </RevealWrapper>
    </section>
  );
}
