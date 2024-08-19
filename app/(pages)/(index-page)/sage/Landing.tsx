'use client';
import { Parallax } from 'react-scroll-parallax';
import Image from 'next/image';
export default function Landing() {
  return (
    <header className="bg-[#e4edeb] flex flex-col justify-center items-center">
      <h1 className="text-black">Sage</h1>
      <p className="text-black">7 min read</p>

      <div className="flex justify-around w-full mt-32">
        <Parallax speed={-2}>
          <Image
            src="/sageImages/appImage2.png"
            alt="app image 2"
            width={1000}
            height={1000}
            className="w-[30vw]"
          ></Image>
        </Parallax>
        <Parallax speed={-10}>
          <Image
            src="/sageImages/appImage2.png"
            alt="app image 2"
            width={1000}
            height={1000}
            className="w-[30vw]"
          ></Image>
        </Parallax>
        <Parallax speed={3}>
          <Image
            src="/sageImages/appImage2.png"
            alt="app image 2"
            width={1000}
            height={1000}
            className="w-[30vw]"
          ></Image>
        </Parallax>
      </div>
    </header>
  );
}
