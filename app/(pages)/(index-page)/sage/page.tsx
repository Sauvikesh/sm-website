import Demo from './_components/Demo/Demo';
import Landing from './_components/Landing/Landing';
import Summary from './_components/Summary/Summary';
import Problem from './_components/Problem/Problem';
import Solution from './_components/Solution/Solution';
import Conclusion from './_components/Conclusion/Conclusion';
import Process from './_components/Process/Process';
import Research from './_components/Research/Research';
import Ideation from './_components/Ideation/Ideation';
import Prototype from './_components/Prototype/Prototype';

export default function Sage() {
  return (
    <main className="bg-[#e4edeb]">
      <Landing />
      <Summary />
      <Problem />
      <Solution />
      <Demo />
      <Process />
      <Research />
      <Ideation />
      <Prototype />
      <Conclusion />
    </main>
  );
}
