import getImageData from '@/app/_lib/getImageData';
import CaseStudy, { CaseStudyProps } from './_components/CaseStudy/CaseStudy';
import Landing from './_components/Landing/Landing';
import LoadingCaseStudy from './_components/CaseStudy/LoadingCase';

export default async function Home() {
  const images = await getImageData('landingPage/');

  const caseStudyInformation: CaseStudyProps[] = [
    {
      org: 'Paramount+',
      purpose: 'Internship',
      desc: 'Reimagining the live television experience',
      src: images?.at(2)?.url || '',
      alt: 'Paramount Logo',
      linkurl: '/paramount/EPG',
    },
    {
      org: 'Paramount+',
      purpose: 'Internship',
      desc: 'Guiding users to resolution during video playback error',
      src: images?.at(1)?.url || '',
      alt: 'Paramount Logo',
      linkurl: '/paramount/errorMessaging',
    },
    {
      org: 'HackDavis 2024',
      purpose: 'Client Project',
      desc: 'Empowering students to create for social good',
      src: '/caseStudies/hackdavis.svg',
      alt: 'HackDavis Website',
      linkurl: '/hackdavis',
    },
    {
      org: 'Sage',
      purpose: 'Passion Project',
      desc: "Equipping individuals to navigate life's stressors",
      src: '/caseStudies/sage.svg',
      alt: 'Sage App',
      linkurl: '/sage',
    },
  ];

  return (
    <main className="flex flex-col px-[15%] pb-20 overflow-clip relative font-dm-sans gap-20">
      <Landing />

      <div className="flex flex-col gap-20" id="Case Studies">
        {caseStudyInformation.map((study, index) => {
          if (index === 0) {
            return <LoadingCaseStudy {...study} key={index} />;
          } else {
            return <CaseStudy {...study} key={index} />;
          }
        })}
      </div>
    </main>
  );
}
