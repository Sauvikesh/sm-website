import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';
import Image from 'next/image';

export default function Market() {
  return (
    <div className="flex flex-col pb-52 pt-17">
      <RevealWrapper>
        <h3 className="pb-2">What does the current market look like?</h3>
        <p className="pb-2">
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
      </RevealWrapper>
    </div>
  );
}
