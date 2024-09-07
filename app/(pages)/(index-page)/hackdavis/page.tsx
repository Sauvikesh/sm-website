import Landing from './_components/Landing/Landing';
import Intro from './_components/Intro/Intro';
import SolutionPreview from './_components/SolutionPreview/SolutionPreview';
import Process from './_components/Process/Process';
import Question from './_components/Question/Question';
import CardSort from './_components/CardSort/CardSort';

export default function HackDavis() {
  return (
    <main className="bg-white text-black font-dm-sans tracking-[0.32px]">
      <Landing />
      <Intro />
      <SolutionPreview />
      <Process />
      <Question />
      <CardSort />
    </main>
  );
}
