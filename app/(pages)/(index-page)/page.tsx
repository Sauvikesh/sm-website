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

  return (
    <main>
      <Landing />
      {caseStudyInformation.map((study, index) => (
        <CaseStudy
          key={index}
          title={study.title}
          desc={study.desc}
          src={study.src}
          alt={study.alt}
        />
      ))}
    </main>
  );
}
