import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';
import { ImageWithModal } from '@/app/(pages)/_components/ImageModal/ImageModal';

export default function Feedback() {
  const wireframes = [
    { src: '/sageImages/prototype/feedback1.png', alt: 'feedback1' },
    { src: '/sageImages/prototype/feedback2.png', alt: 'feedback2' },
    { src: '/sageImages/prototype/feedback3.png', alt: 'feedback3' },
  ];
  const bulletPoints = [
    'Improve visibility by making key features more apparent',
    'Cut down on deterrences such as inability to modify scheduled practices',
    'Affordance of icons need to be improved so they are more communicative of their functions',
    'Simplify user interface to prevent users from feeling overwhelmed while finding other ways to incorporate color in a careful, intentional way',
  ];

  return (
    <section className="flex flex-col gap-20">
      <RevealWrapper>
        {wireframes.map((frame, index) => (
          <ImageWithModal
            src={frame.src}
            alt={frame.alt}
            width={1000}
            height={1000}
            key={index}
          />
        ))}

        <div className="flex flex-col gap-4">
          <h3>Usability testing takeaways</h3>
          <ul className="list-disc pl-5">
            {bulletPoints.map((bullet, index) => (
              <li className="pb-2 leading-8" key={index}>
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </RevealWrapper>
    </section>
  );
}
