import Link from 'next/link';
import CaseStudy, { CaseStudyProps } from './_components/CaseStudy';
import Landing from './_components/Landing';

export default function Home() {
  const caseStudyInformation: CaseStudyProps[] = [
    {
      title: 'Paramount+',
      desc: 'Bolstering live television discovery and modernizing video playback experience.',
      src: '/caseStudies/paramount.png',
      alt: 'Paramount Logo',
    },
    {
      title: 'Sage',
      desc: "Supporting students' mental health journey through personalized self-care practices.",
      src: '/caseStudies/sage.png',
      alt: 'Sage App',
    },
    {
      title: 'HackDavis 2024',
      desc: 'Web application for the largest collegiate hackathon in California. Case study coming soon!',
      src: '/caseStudies/hackdavis.png',
      alt: 'HackDavis Website',
    },
  ];

  const caseStudyLinks: string[] = ['/paramount', '/sage', '/hackdavis'];

  return (
    <main className="flex flex-col items-center bg-dark-bg w-full pl-[15%] pr-[15%] overflow-hidden relative">
      <Landing />
      {caseStudyInformation.map((study, index) => (
        <Link key={index} href={caseStudyLinks[index]}>
          <CaseStudy {...study} />
        </Link>
      ))}
    </main>
  );
}
