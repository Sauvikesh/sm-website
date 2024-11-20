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
      linkUrl: 'https://www.linkedin.com/in/sam-mah/',
      imgUrl: '/linkedinLogo.svg',
    },
    {
      linkUrl: '',
      imgUrl: '/mailLogo.svg',
    },
  ];

  const floatingImages = [
    {
      src: '/landing/shapes/star2.png',
      className:
        'w-[80px] h-auto absolute bottom-[15%] left-[-2.5%] hover:rotate-180 transition-transform duration-700 animate-load-rotate-full',
    },
    {
      src: '/landing/shapes/4star.png',
      className:
        'w-[80px] h-auto absolute top-[-50px] left-[4%] hover:rotate-180 transition-transform duration-700 animate-load-rotate-full',
    },
    {
      src: '/landing/shapes/spade.png',
      className:
        'w-[80px] h-auto absolute bottom-[1%] right-[-3%] hover:rotate-180 transition-transform duration-700 animate-load-rotate-full',
    },
  ];

  const darkMode = useDarkModeSwitch();

  const bgColor = darkMode ? 'bg-dark-bg' : 'bg-white';
  const textColor = darkMode ? 'text-white' : 'text-black';

  const includeBackgroundImage = darkMode ? '' : "url('/paperFooter.png')";

  return !invisible ? (
    <footer
      className={`${textColor} ${bgColor} flex justify-between px-case-study pb-[89px] pt-20 relative overflow-x-clip`}
      style={{
        backgroundImage: includeBackgroundImage,
        backgroundSize: 'cover',
      }}
    >
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl">
            Thanks for visiting! Let's stay in touch.
          </h3>
          <div className="flex gap-4">
            {/* {linkIconElements.map((link, index) => (
              <LinkIcon
                linkUrl={link.linkUrl}
                imgUrl={link.imgUrl}
                key={index}
              />
            ))} */}

            <a
              href={linkIconElements.at(0)?.linkUrl}
              className="flex justify-center items-center w-[50px] h-[50px] px-[15px] py-[13px] bg-[#E0E0E1] rounded-[25px]"
            >
              <Image
                src={linkIconElements.at(0)?.imgUrl || ''}
                alt="Link Icon"
                height={100}
                width={100}
              ></Image>
            </a>

            <a
              href="mailto: stmah@ucdavis.edu"
              className="flex justify-center items-center w-[50px] h-[50px] px-[15px] py-[13px] bg-[#E0E0E1] rounded-[25px]"
            >
              <Image
                src={linkIconElements.at(1)?.imgUrl || ''}
                alt="Link Icon"
                height={100}
                width={100}
              ></Image>
            </a>
          </div>
        </div>
        <h4 className={`${textColor} justify-self-end`}>
          © Samantha Mah 2024
        </h4>
      </div>

      <nav className="flex flex-col gap-6">
        <h4>MENU</h4>
        <Link href="/">
          <h3>Work</h3>
        </Link>
        <Link href="/about">
          <h3>About</h3>
        </Link>
        <a
          href="https://drive.google.com/file/d/1iWHeb_M7NPPgxQrANJpO_P6_7xIW5EB-/view"
          className="flex gap-2"
          target="_blank"
        >
          <h3>Resume</h3>
          {/* <Image
            src="/navLinkArrow.svg"
            alt="nav link arrow"
            width={1000}
            height={1000}
            className={`w-[13px]`}
          /> */}
        </a>
      </nav>

      <Image
        src="/blob.svg"
        width={1000}
        height={1000}
        alt="blob"
        className="w-20 h-20 right-[10%] absolute hover:rotate-[360deg] transition-transform duration-700"
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

// function LinkIcon({ linkUrl, imgUrl }: LinkIconProps) {
//   return (
//     <a
//       href={linkUrl}
//       className="flex justify-center items-center w-[50px] h-[50px] px-[15px] py-[13px] bg-[#E0E0E1] rounded-[25px]"
//     >
//       <Image src={imgUrl} alt="Link Icon" height={100} width={100}></Image>
//     </a>
//   );
// }
