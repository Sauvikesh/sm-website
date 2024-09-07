import Image from 'next/image';
import Heading from '../Headings/Heading';

// TODO: double check how the widths are being used here?? rn the percentage values are for the width of the flex container
// ^^ is this the best way I can assign the widths? doesn't look simple to change
export default function Process() {
  return (
    <div className="flex flex-col pl-[18%] pr-[18%] bg-gray-200 justify-center g-3 h-[60vh]">
      <Heading h1="THE PROCESS" p="Project Goals" />
      <div className="flex">
        <Image
          src="/sageImages/process/process1.png"
          alt="Process Image 1"
          height={1000}
          width={1000}
          className="w-[30%]"
        ></Image>
        <Image
          src="/sageImages/process/process2.png"
          alt="Process Image 2"
          height={1000}
          width={1000}
          className="w-[30%]"
        ></Image>
        <Image
          src="/sageImages/process/process3.png"
          alt="Process Image 3"
          height={1000}
          width={1000}
          className="w-[40%]"
        ></Image>
      </div>
    </div>
  );
}
