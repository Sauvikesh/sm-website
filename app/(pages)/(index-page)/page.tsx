// import Image from 'next/image';
import CaseStudy from './_components/CaseStudy';
import Landing from './_components/Landing';
export default function Home() {
  return (
    <main className="">
      <Landing />
      <CaseStudy
        title="Paramount+"
        desc="Bolstering live television discovery and modernizing video playback experience."
        src="/caseStudies/paramount.png"
        alt="Paramount Logo"
      />
      <CaseStudy
        title="Sage"
        desc="Supporting students' mental health journey through personalized self-care practices."
        src="/caseStudies/sage.png"
        alt="Sage App"
      />
      <CaseStudy
        title="HackDavis 2024"
        desc="Web application for the largest collegiate hackathon in California. Case study coming soon!"
        src="/caseStudies/hackdavis.png"
        alt="HackDavis Website"
      />
    </main>
  );
}
