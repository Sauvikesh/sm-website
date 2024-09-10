import Image from 'next/image';

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
    <div className="flex flex-col pt-16 pb-0">
      {wireframes.map((frame, index) => (
        <Image
          src={frame.src}
          alt={frame.alt}
          width={1000}
          height={1000}
          key={index}
          className="w-[95%] self-center"
        />
      ))}

      <h3 className="pt-40 pb-4">Usability testing takeaways</h3>
      <ul className="pb-40 list-disc pl-5">
        {bulletPoints.map((bullet, index) => (
          <li className="pb-2 text-lg leading-8" key={index}>
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
}
