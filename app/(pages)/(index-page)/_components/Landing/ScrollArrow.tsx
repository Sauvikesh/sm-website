'use client';

import Image from 'next/image';
export default function ScrollArrow() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const topOffset = -40; // Adjust this value for the offset (e.g., -20 for 20px above)
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition + topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Image
      src="/landing/arrowDown.png"
      width={1000}
      height={1000}
      alt="down arrow"
      className="w-[50px] animate-hover-up-down"
      onClick={() => scrollToSection('Case Studies')}
    />
  );
}
