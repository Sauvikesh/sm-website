import Image from 'next/image';

export default function Team() {
  return (
    <div className="pl-[15%] pr-[15%] flex flex-row pb-20 pt-20 items-center gap-10 justify-between">
      <Image
        src="/sageImages/sageTeam.png"
        width={1000}
        height={1000}
        alt="team photo"
        className="w-[40%] h-auto pb-4 self-center"
      />

      <div className="flex flex-col gap-8 w-[35%]">
        <h2>Our team on presentation day! 🥳</h2>
        <h3>I'm wearing green in spirit.</h3>
      </div>
    </div>
  );
}
