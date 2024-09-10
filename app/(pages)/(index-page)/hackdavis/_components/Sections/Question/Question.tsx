import Image from 'next/image';

export default function Question() {
  return (
    <div className="bg-[#005271] text-white p-[160px] flex relative">
      <h1 className="pr-[23%]">
        How might we inspire participants and sponsors to champion social good?{' '}
      </h1>

      <Image
        src="/hackdavis/charstack3.svg"
        alt="char stack"
        width={1000}
        height={1000}
        className="absolute w-[400px] top-[-115px] right-[100px]"
      />
    </div>
  );
}
