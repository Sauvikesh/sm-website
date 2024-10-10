import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';
import HeadingWithBody, {
  HeadingWithBodyProps,
} from '../../HeadingWithBody/HeadingWithBody';

const reflectionParagraphs: HeadingWithBodyProps[] = [
  {
    header: 'Challenges',
    body: "Narrowing down the ideas to implement was a challenge considering the time constraint of the project. As it was not possible to utilize all of the features ideated, the ones that best addressed users' pain points were ultimately executed. Additionally, compromising on design choices within the team while simultaneously creating a product that everyone was proud of was an important lesson.",
  },
  {
    header: 'Takeaways',
    body: " The primary takeaway from this project was prioritizing intention and users' needs. Behind every design choice, whether it be information architecture, brand identity or content design, there should be research driving the success of all of the moving pieces of the project.",
  },
  {
    header: 'Next Steps',
    body: 'If this project were to move forward, I would love to conduct another round of usability testing with hi-fis to further assess any additional pain points that may come up and fine-tune the visual design. I am also interested in learning more about how AI plays a role in the algorithm for suggesting practices to users.',
  },
];

export default function Conclusion() {
  return (
    <section className="flex flex-col gap-4" id="Reflection">
      <RevealWrapper>
        <h4>Reflection</h4>
        <div className="flex flex-col gap-8">
          {reflectionParagraphs.map((para, index) => (
            <HeadingWithBody
              header={para.header}
              body={para.body}
              key={index}
            />
          ))}
        </div>
      </RevealWrapper>
    </section>
  );
}
