import TextCard, {
  TextCardProps,
} from '@/app/(pages)/(index-page)/_components/TextCard';
import Image from 'next/image';
import Heading from '../../Heading/Heading';
export default function CardSort() {
  const textCardElements: TextCardProps[] = [
    {
      number: '01',
      header: 'About',
      body: 'Caters to potential sponsors and includes KPIs such as participants headcount and projects submitted. Delves into our key values and showcases our successful track record.',
    },
    {
      number: '02',
      header: 'Registration',
      body: 'Serves as the first point-of-contact where potential participants begin their journey. Encourages participant registration and provides information about what a hackathon is.',
    },
    {
      number: '03',
      header: 'Day-of-Event',
      body: 'One-stop shop for important resources; facilitates processes such as getting started with our educational starter pack, project submission, and requesting help.',
    },
  ];

  return (
    <section className="pl-[15%] pr-[15%]">
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

      <Image
        src="/hackdavis/cardSort.svg"
        alt="card sort"
        width={2000}
        height={1000}
      />
    </section>
  );
}
