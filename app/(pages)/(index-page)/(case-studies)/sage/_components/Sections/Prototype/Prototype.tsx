import Description from './Sections/Description';
import Feedback from './Sections/Feedback';
import Sketches from './Sections/Sketches';

export default function Prototype() {
  return (
    <div className="pl-[15%] pr-[15%]">
      <Sketches />
      <Description />
      <Feedback />
    </div>
  );
}
