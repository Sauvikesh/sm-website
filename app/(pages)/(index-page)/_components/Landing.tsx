export default function Landing() {
  return (
    <div className="flex flex-col ml-[15%] w-[940px] h-[100vh] pt-[8%]">
      <h1 className="text-white text-[200px] font-f-w h-[270px] animate-slide-header-down">
        Samantha
      </h1>
      <h2 className="text-white font-dm-sans text-[32px] pl-2 animate-slide-header-down-delayed">
        is a curious product designer who finds joy in human connection and has
        a penchant for creative problem solving.
      </h2>
      <div className="flex gap-5 mt-36 items-center">
        <div className="flex border-2 rounded-2xl p-2 h-11 w-8 justify-center">
          <div className="text-white text-xs animate-slide-line-down">|</div>
        </div>
        <p className="text-white text-sm ">Scroll to explore</p>
      </div>
    </div>
  );
}
