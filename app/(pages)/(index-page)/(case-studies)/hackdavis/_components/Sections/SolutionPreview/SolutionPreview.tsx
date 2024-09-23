import Image from 'next/image';
import Link from 'next/link';
import ScrollToSolution from './ScrollToSolution';
import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';

export default function SolutionPreview() {
  return (
    <section className="flex flex-col pl-[15%] pr-[15%] justify-center items-center">
      <RevealWrapper>
        <h3 className="pb-4">Product Preview</h3>
        <div className="flex gap-6 pb-10 justify-center">
          <ScrollToSolution />

          <Link href="https://2024.hackdavis.io/" target="_blank">
            <button className="flex items-center gap-2 bg-white text-[#173A52] p-4 rounded-lg border border-[#005271]">
              Launch hackdavis.io
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
          <div className="flex flex-col w-[33%] items-center gap-2">
            <Image
              src="/hackdavis/solutions/AboutHQ.png"
              alt="about page"
              width={1000}
              height={1000}
            />
            <h4 className="text-[#808080]"> about page on Web</h4>
          </div>

          <div className="flex flex-col w-[33%] items-center gap-2 pt-1">
            <Image
              src="/hackdavis/solutions/Landing.svg"
              alt="about page"
              width={1000}
              height={1000}
            />
            <h4 className="text-[#808080]">registration page on Web</h4>
          </div>

          <div className="flex flex-col w-[33%] items-center gap-2">
            <Image
              src="/hackdavis/solutions/DOE.svg"
              alt="about page"
              width={1000}
              height={1000}
            />
            <h4 className="text-[#808080]">day-of-event page on Web</h4>
          </div>
        </div>
      </RevealWrapper>
    </section>
  );
}
