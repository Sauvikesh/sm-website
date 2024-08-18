import Link from 'next/link';
import Image from 'next/image';

// NOTE: maybe I should refactor this to use grid instead of flex boxes ???
export default function Footer() {
  return (
    <footer className="flex justify-between mb-10 m-53 pt-14">
      <div className="flex flex-col gap-10">
        <h1 className="text-2xl text-white font-f-w">
          Thanks for visiting! Let's stay in touch.
        </h1>
        <span className="text-white font-dm-sans">© Samantha Mah 2024</span>
      </div>

      <nav className="flex flex-col gap-7">
        <div className="flex items-center justify-end gap-3">
          <a
            className="text-2xl text-white font-f-w"
            href="mailto:stmah@ucdavis.edu"
          >
            Email
          </a>
          <Image
            src="/linkArrow.png"
            alt="Link Arrow"
            height={100}
            width={100}
            className="w-auto h-3"
          ></Image>
        </div>

        <Link
          href="https://www.linkedin.com/in/sam-mah/"
          className="flex items-center justify-end gap-3"
        >
          <h1 className="text-2xl text-white font-f-w">LinkedIn</h1>
          <Image
            src="/linkArrow.png"
            alt="Link Arrow"
            height={100}
            width={100}
            className="w-auto h-3"
          ></Image>
        </Link>
      </nav>
    </footer>
  );
}
