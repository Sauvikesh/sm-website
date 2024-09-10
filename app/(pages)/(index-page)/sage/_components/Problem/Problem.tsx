import Heading from '../Headings/Heading';

export default function Problem() {
  return (
    <div className="bg-[#F8F8F8] flex flex-col pl-[11%] pr-[11%] justify-center h-[80vh] gap-3">
      <Heading
        h1="THE PROBLEM"
        p="Students have a desire to practice self-care. However, they struggle to
        do so due to lack of resources, busy schedules, and difficulty staying
        motivated."
      />
      <blockquote className="py-2 pl-4 mt-10 border-l-4 border-gray-300">
        <p className="text-4xl leading-[54px] font-bold">
          How might we support students to practice self-care in an inclusive
          and personable way?
        </p>
      </blockquote>
    </div>
  );
}
