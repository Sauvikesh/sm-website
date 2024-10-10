import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';
import Image from 'next/image';

const finalDesigns: FinalDesignWithTitlesProps[] = [
  {
    titles: ['Home', 'Explore'],
    imageSrc: '/sageImages/finalDesigns/sageDesign1.png',
    imageAlt: 'Sage Final Design 1',
  },
  {
    titles: ['Schedule', 'Personal Garden'],
    imageSrc: '/sageImages/finalDesigns/sageDesign2.png',
    imageAlt: 'Sage Final Design 2',
  },
  {
    titles: ['Special Collections'],
    imageSrc: '/sageImages/finalDesigns/sageDesign3.png',
    imageAlt: 'Sage Final Design 3',
  },
  {
    titles: ['Inclusive Meditation'],
    imageSrc: '/sageImages/finalDesigns/sageDesign4.png',
    imageAlt: 'Sage Final Design 4',
  },
  {
    titles: ['Tech-free Journaling'],
    imageSrc: '/sageImages/finalDesigns/sageDesign5.png',
    imageAlt: 'Sage Final Design 5',
  },
];

export default function FinalDesigns() {
  return (
    <section className="flex flex-col gap-20" id="Final Designs">
      <RevealWrapper>
        <h2 className="text-center">Final Designs</h2>

        {finalDesigns.map((section, index) => (
          <FinalDesignWithTitles
            key={index}
            titles={section.titles}
            imageSrc={section.imageSrc}
            imageAlt={section.imageAlt}
          />
        ))}
      </RevealWrapper>
    </section>
  );
}

type FinalDesignWithTitlesProps = {
  titles: string[]; // An array of titles for h3 tags
  imageSrc: string; // Image source
  imageAlt: string; // Image alt text
};

function FinalDesignWithTitles({
  titles,
  imageSrc,
  imageAlt,
}: FinalDesignWithTitlesProps) {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-around">
        {titles.map((title, index) => (
          <h3 key={index}>{title}</h3>
        ))}
      </div>
      <Image src={imageSrc} width={1000} height={1000} alt={imageAlt} />
    </div>
  );
}
