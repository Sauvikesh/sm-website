import Description from './Description';
import Feedback from './Feedback';
import Sketches from './Sketches';

export default function Prototype() {
  return (
    <div className="bg-white pl-[11%] pr-[11%]">
      <Sketches />
      <Description />
      <Feedback />
    </div>
  );
}
