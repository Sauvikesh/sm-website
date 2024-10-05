'use client';

import { useEffect, useState } from 'react';

export type TableOfContentsProps = {
  sections: SectionHeading[];
};

type SectionHeading = {
  sectionName: string;
  level: number;
};

export default function TableOfContents({ sections }: TableOfContentsProps) {
  const [currentSection, setCurrentSection] = useState('Overview');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id); // Update current section when it's visible
          }
        });
      },
      {
        threshold: 0.1, // Consider an element visible when 10% of it is in view
      }
    );

    // Automatically observe all section elements inside the container
    const sections = document.querySelectorAll('section[id]');
    sections?.forEach((section) => observer.observe(section));
    console.log(sections);

    // Cleanup observer on unmount
    return () => {
      sections?.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed pt-20 pl-10 group z-50">
      <div className="flex flex-col w-max gap-5 p-4 absolute group-hover:opacity-0">
        {sections.map((section, index) => (
          <div
            className={`h-1 bg-black transition-opacity ${currentSection === section.sectionName ? 'opacity-100' : 'opacity-25'}`}
            key={index}
            style={{ width: `${20 / section.level}px` }}
          ></div>
        ))}
      </div>
      <div className="flex flex-col gap-4 absolute opacity-0 w-max bg-white rounded-lg shadow-lg p-4 group-hover:opacity-100 transition-opacity duration-500">
        {sections.map((section, index) => (
          <p
            className="hover:text-red-400 "
            onClick={() => scrollToSection(section.sectionName)}
            key={index}
            style={{ paddingLeft: `${section.level * 10}px` }}
          >
            {section.sectionName}
          </p>
        ))}
      </div>
    </div>
  );
}
