import Image from 'next/image';
import Link from 'next/link';
import ScrollToSolution from './ScrollToSolution';

export default function SolutionPreview() {
  return (
    <section className="flex flex-col pl-[15%] pr-[15%] justify-center items-center">
      <h2 className="pb-4">Solution Preview</h2>
      <p className="pb-8">
        A responsive website that sets students up for success by facilitating
        resource discovery in a variety of subjects such as web development,
        data science, hardware, design, and more. Through the use of plain
        language and whimsical characters, users embark on a journey to learn
        about our commitment to inclusion, the values that we embody as an
        organization, and the diverse innovations created by previous
        participants.
      </p>
      <div className="flex gap-6 pb-20">
        <ScrollToSolution />

        <Link href="https://2024.hackdavis.io/" target="_blank">
          <button className="flex items-center gap-2 bg-white text-[#005271] p-4 rounded-lg border border-[#005271]">
            Experience on the Web
            <Image
              src="/hackdavis/linkArrow.svg"
              alt="link arrow"
              width={1000}
              height={1000}
              className="w-3"
            />
          </button>
        </Link>
      </div>

      <div className="flex items-start justify-center gap-5">
        <Image
          src="/hackdavis/solutions/AboutHQ.png"
          alt="about page"
          width={1000}
          height={1000}
          className="w-[30%]"
        />
        <Image
          src="/hackdavis/solutions/Landing.svg"
          alt="about page"
          width={1000}
          height={1000}
          className="pt-[6px] w-[30%]"
        />
        <Image
          src="/hackdavis/solutions/DOE.svg"
          alt="about page"
          width={1000}
          height={1000}
          className="w-[30%]"
        />
      </div>
    </section>
  );
}