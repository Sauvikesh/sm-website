import Description from './Description';
import Feedback from './Feedback';
import Sketches from './Sketches';

export default function Prototype() {
  return (
    <div className="bg-white pl-[15%] pr-[15%]">
      <Sketches />
      <Description />
      <Feedback />
    </div>
  );
}
