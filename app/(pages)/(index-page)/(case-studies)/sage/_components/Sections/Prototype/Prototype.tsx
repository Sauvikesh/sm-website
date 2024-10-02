import Description from './Sections/Description';
import Feedback from './Sections/Feedback';
import Sketches from './Sections/Sketches';

export default function Prototype() {
  return (
    <section>
      <Sketches />
      <Description />
      <Feedback />
    </section>
  );
}
