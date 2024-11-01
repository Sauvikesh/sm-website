import CaseStudy, { CaseStudyProps } from './_components/CaseStudy/CaseStudy';
import Landing from './_components/Landing/Landing';

export default function Home() {
  const caseStudyInformation: CaseStudyProps[] = [
    {
      org: 'Paramount+',
      purpose: 'INTERNSHIP',
      desc: 'Reimagining the live television experience',
      src: '/caseStudies/paramount.png',
      alt: 'Paramount Logo',
      linkurl: '/paramountP1',
    },
    {
      org: 'Paramount+',
      purpose: 'INTERNSHIP',
      desc: 'Guiding users towards resolution during video playback error',
      src: '/caseStudies/paramount.png',
      alt: 'Paramount Logo',
      linkurl: '/paramountP2',
    },
    {
      org: 'HackDavis 2024',
      purpose: 'FREELANCE PROJECT',
      desc: 'Empowering students to create for social good',
      src: '/caseStudies/hackdavis.png',
      alt: 'HackDavis Website',
      linkurl: '/hackdavis',
    },
    {
      org: 'Sage',
      purpose: 'PASSION PROJECT',
      desc: "Equipping individuals to navigate life's stressors",
      src: '/caseStudies/sage.png',
      alt: 'Sage App',
      linkurl: '/sage',
    },
  ];

  return (
    <main className="flex flex-col items-center w-full pl-[15%] pr-[15%] pb-20 overflow-hidden relative font-dm-sans gap-20">
      <Landing />
      {caseStudyInformation.map((study, index) => (
        <CaseStudy {...study} key={index} />
      ))}
    </main>
  );
}
