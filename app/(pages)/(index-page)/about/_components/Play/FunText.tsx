'use client';
export default function FunText() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const topOffset = 300; // added major offset to get to bookshelf section to keep scrolling code in this file
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
    <div className="flex flex-col items-center gap-10">
      <div>
        <h3>Don't want the fun to end?</h3>
        <p
          className="text-[80px] tracking-[1.6px] -rotate-[8deg] text-center hover:cursor-pointer"
          onClick={() => scrollToSection('bookshelf')}
        >
          play
        </p>
      </div>
      <Line />
    </div>
  );
}

function Line() {
  return (
    <div className="h-[200px] w-full mt-16 mb-16" id="bookshelf">
      <div className="h-[200px] w-full relative flex justify-center overflow-hidden animate-grow">
        <div className="h-[200px] w-[1px] bg-white absolute"></div>
      </div>
    </div>
  );
}
