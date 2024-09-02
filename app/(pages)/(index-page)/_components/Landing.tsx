import Image from 'next/image';

export default function Landing() {
  return (
    <section className="flex flex-col h-[100vh] pt-[268px] items-center w-full pl-[15%] pr-[15%]">
      <h1 className="text-white text-[128px] font-f-w h-[200px] animate-slide-header-down w-full">
        Samantha Mah
      </h1>
      <div className="flex flex-row animate-slide-header-down-delayed">
        <h2 className="text-white font-dm-sans text-4xl w-[90%] font-normal self-start leading-normal tracking-[-0.015em]">
          is a curious product designer who finds joy in human connection and
          has a love for creative problem solving
        </h2>
        <Image
          src="/matcha.svg"
          width={1000}
          height={1000}
          alt="matcha"
          className="w-[92px] h-[134px] mt-[-35px]"
        />
      </div>
    </section>
  );
}
