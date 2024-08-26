import Image from 'next/image';

export default function Market() {
  return (
    <div className="flex flex-col pb-52 pt-17 p-53 font-dm-sans">
      <h2 className="text-4xl font-semibold leading-[54px] mb-2">
        What does the current market look like?
      </h2>
      <p className="mb-2 text-base leading-8">
        Meditation apps are not a new phenomenon. By 2024, the market is
        projected to reach $5.11B. Calm and Headspace are two existing big
        players in the industry. However, they fail to provide a flexible goal
        setting system and personalized recommendations.
      </p>
      <div className="flex justify-between gap-8 pt-12">
        <Image
          src="/sageImages/research/calm.jpg"
          alt="calm logo"
          width={1000}
          height={1000}
        />
        <Image
          src="/sageImages/research/headspace.jpg"
          alt="headspace logo"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
}
