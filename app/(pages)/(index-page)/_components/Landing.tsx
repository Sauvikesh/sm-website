export default function Landing() {
  return (
    <section className="flex flex-col ml-[15%] w-[940px] h-[100vh] pt-[8%]">
      <h1 className="text-white text-[200px] font-f-w h-[270px] animate-slide-header-down">
        Samantha
      </h1>
      <h2 className="text-white font-dm-sans text-[32px] pl-2 animate-slide-header-down-delayed">
        is a curious product designer who finds joy in human connection and has
        a penchant for creative problem solving.
      </h2>
      <div className="flex items-center gap-5 mt-36">
        <div className="flex justify-center w-8 p-2 border-2 rounded-2xl h-11">
          <span className="text-xs text-white animate-slide-line-down">|</span>
        </div>
        <p className="text-sm text-white">Scroll to explore</p>
      </div>
    </section>
  );
}
