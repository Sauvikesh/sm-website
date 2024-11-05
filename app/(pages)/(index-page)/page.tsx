import CaseStudy, { CaseStudyProps } from './_components/CaseStudy/CaseStudy';
import Landing from './_components/Landing/Landing';

export default async function Home() {
  const response = await fetch(
    `${process.env.BASE_URL}/api/getCaseStudyImages?folder=${'landingPage/'}&apiKey=${process.env.API_KEY}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  if (!response.ok) {
    throw new Error(
      `Failed to fetch images in index page: ${response.statusText}`
    );
  }
  const images = await response.json();

  const caseStudyInformation: CaseStudyProps[] = [
    {
      org: 'Paramount+',
      purpose: 'INTERNSHIP',
      desc: 'Reimagining the live television experience',
      src: images.at(2).url,
      alt: 'Paramount Logo',
      linkurl: '/paramount/EPG',
      gradient:
        'radial-gradient(50% 50% at 50% 50%, #2F6AF2 0%, rgba(47, 106, 242, 0.00) 100%)',
    },
    {
      org: 'Paramount+',
      purpose: 'INTERNSHIP',
      desc: 'Guiding users towards resolution during video playback error',
      src: images.at(1).url,
      alt: 'Paramount Logo',
      linkurl: '/paramount/errorMessaging',
      gradient:
        'radial-gradient(50% 50% at 50% 50%, #2F6AF2 0%, rgba(47, 106, 242, 0.00) 100%)',
    },
    {
      org: 'HackDavis 2024',
      purpose: 'FREELANCE PROJECT',
      desc: 'Empowering students to create for social good',
      src: '/caseStudies/hackdavis.svg',
      alt: 'HackDavis Website',
      linkurl: '/hackdavis',
      gradient:
        'radial-gradient(50% 50% at 50% 50%, #9EE7DD 0%, rgba(158, 231, 221, 0.00) 100%)',
    },
    {
      org: 'Sage',
      purpose: 'PASSION PROJECT',
      desc: "Equipping individuals to navigate life's stressors",
      src: '/caseStudies/sage.svg',
      alt: 'Sage App',
      linkurl: '/sage',
      gradient:
        'radial-gradient(50% 50% at 50% 50%, #9EE7DD 0%, rgba(158, 231, 221, 0.00) 100%)',
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
