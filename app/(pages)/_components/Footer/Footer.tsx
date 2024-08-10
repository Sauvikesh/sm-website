import Link from 'next/link';
import Image from 'next/image';

// NOTE: maybe I should refactor this to use grid instead of flex boxes ???
export default function Footer() {
  return (
    <footer className="flex justify-between m-[15%] mb-17 pt-14">
      <div className="flex flex-col gap-10">
        <h1 className="text-white font-f-w text-2xl">
          Thanks for visiting! Let's stay in touch.
        </h1>
        <div className="text-white font-dm-sans">© Samantha Mah 2024</div>
      </div>

      <div className="flex flex-col gap-7">
        <div className="flex justify-end items-center text-white font-f-w text-2xl gap-3">
          <a href="mailto:stmah@ucdavis.edu">Email</a>
          <Image
            src="/linkArrow.png"
            alt="Link Arrow"
            height={100}
            width={100}
            className="h-3 w-auto"
          ></Image>
        </div>

        <Link
          href="https://www.linkedin.com/in/sam-mah/"
          className="flex justify-end items-center text-white font-f-w text-2xl gap-3"
        >
          <h1>LinkedIn</h1>
          <Image
            src="/linkArrow.png"
            alt="Link Arrow"
            height={100}
            width={100}
            className="h-3 w-auto"
          ></Image>
        </Link>
      </div>
    </footer>
  );
}
