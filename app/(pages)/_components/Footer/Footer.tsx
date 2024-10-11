'use client';
import Link from 'next/link';
import Image from 'next/image';

import { usePathname } from 'next/navigation';
import { useDarkModeSwitch } from '../../_hooks/useDarkModeSwitch';

// NOTE: maybe I should refactor this to use grid instead of flex boxes ???
export default function Footer() {
  const pathname = usePathname();
  // const footerBackGroundColor =
  //   pathname === '/sage' ? 'bg-[#e4edeb]' : 'bg-dark-bg';
  // const footerTextColor = pathname === '/sage' ? 'text-black' : 'text-white';

  const invisible = pathname === '/login';

  const linkIconElements: LinkIconProps[] = [
    {
      linkUrl: '',
      imgUrl: '/linkedinLogo.svg',
    },
    {
      linkUrl: '',
      imgUrl: '/mailLogo.svg',
    },
  ];

  const floatingImages = [
    {
      src: '/landing/shapes/star2.svg',
      className:
        'w-[80px] h-auto absolute bottom-[15%] left-[-2.5%] hover:rotate-180 transition-transform duration-700 animate-load-rotate-full',
    },
    {
      src: '/landing/shapes/4star.svg',
      className:
        'w-[80px] h-auto absolute top-[-50px] left-[4%] hover:rotate-180 transition-transform duration-700 animate-load-rotate-full',
    },
    {
      src: '/landing/shapes/spade.svg',
      className:
        'w-[80px] h-auto absolute bottom-[1%] right-[-3%] hover:rotate-180 transition-transform duration-700 animate-load-rotate-full',
    },
  ];

  const darkMode = useDarkModeSwitch();

  const bgColor = darkMode ? 'bg-dark-bg' : 'bg-white';
  const textColor = darkMode ? 'text-white' : 'text-black';

  return !invisible ? (
    <footer
      className={`${textColor} ${bgColor} flex justify-between px-case-study pb-[89px] relative overflow-x-clip`}
    >
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl">
            Thanks for visiting! Let's stay in touch.
          </h3>
          <div className="flex gap-4">
            {linkIconElements.map((link, index) => (
              <LinkIcon
                linkUrl={link.linkUrl}
                imgUrl={link.imgUrl}
                key={index}
              />
            ))}
          </div>
        </div>
        <h4 className="text-white justify-self-end">© Samantha Mah 2024</h4>
      </div>

      <nav className="flex flex-col gap-6">
        <h4>MENU</h4>
        <Link href="/">
          <h3>Work</h3>
        </Link>
        <Link href="/about">
          <h3>About</h3>
        </Link>
        <Link
          href="https://docs.google.com/document/d/1Fegz8HzzS1Cmv8bQi4V_tRu7TuhCL0DnKkqsYi-UU-A/edit?usp=sharing"
          className="flex gap-2"
        >
          <h3>Resume</h3>
          <Image
            src="/navLinkArrow.svg"
            alt="nav link arrow"
            width={1000}
            height={1000}
            className={`w-[13px]`}
          />
        </Link>
      </nav>

      <Image
        src="/blob.svg"
        width={1000}
        height={1000}
        alt="blob"
        className="w-20 h-20 right-[10%] absolute"
      />
      {floatingImages.map((image, index) => (
        <Image
          src={image.src}
          width={1000}
          height={1000}
          alt="floating star :)"
          className={image.className}
          key={index}
        />
      ))}
    </footer>
  ) : null;
}

type LinkIconProps = {
  linkUrl: string;
  imgUrl: string;
};

function LinkIcon({ linkUrl, imgUrl }: LinkIconProps) {
  return (
    <Link
      href={linkUrl}
      className="flex justify-center items-center w-[50px] h-[50px] px-[15px] py-[13px] bg-[#E0E0E1] rounded-[25px]"
    >
      <Image src={imgUrl} alt="Link Icon" height={100} width={100}></Image>
    </Link>
  );
}
