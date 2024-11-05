'use client';
import Loader from '../_components/Loader/Loader';
import { useGetImages } from '../_hooks/useGetImages';
import CaseStudy, { CaseStudyProps } from './_components/CaseStudy/CaseStudy';
import Landing from './_components/Landing/Landing';

export default function Home() {
  const [images, error] = useGetImages('landingPage/');
  console.log(images);

  const caseStudyInformation: CaseStudyProps[] = [
    {
      org: 'Paramount+',
      purpose: 'INTERNSHIP',
      desc: 'Reimagining the live television experience',
      src: images?.at(2).url,
      alt: 'Paramount Logo',
      linkurl: '/paramount/EPG',
    },
    {
      org: 'Paramount+',
      purpose: 'INTERNSHIP',
      desc: 'Guiding users towards resolution during video playback error',
      src: images?.at(1).url,
      alt: 'Paramount Logo',
      linkurl: '/paramount/errorMessaging',
    },
    {
      org: 'HackDavis 2024',
      purpose: 'FREELANCE PROJECT',
      desc: 'Empowering students to create for social good',
      src: '/caseStudies/hackdavis.svg',
      alt: 'HackDavis Website',
      linkurl: '/hackdavis',
    },
    {
      org: 'Sage',
      purpose: 'PASSION PROJECT',
      desc: "Equipping individuals to navigate life's stressors",
      src: '/caseStudies/sage.svg',
      alt: 'Sage App',
      linkurl: '/sage',
    },
  ];

  return (
    <div>
      {error ? (
        <p>Error: {error}</p>
      ) : images ? (
        <main className="flex flex-col items-center w-full pl-[15%] pr-[15%] pb-20 overflow-hidden relative font-dm-sans gap-20">
          <Landing />
          {caseStudyInformation.map((study, index) => (
            <CaseStudy {...study} key={index} />
          ))}
        </main>
      ) : (
        <Loader />
      )}
    </div>
  );
}
